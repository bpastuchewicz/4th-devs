/**
 * Local audio adapters — edge-tts (TTS) and whisper-cli (STT).
 * Mirrors PHP EdgeTtsAdapter and WhisperCliAdapter from copilot-mcp.
 *
 * ENV:
 *  EDGE_TTS_BIN      – path to edge-tts binary (default: 'edge-tts')
 *  EDGE_TTS_VOICE    – default TTS voice (default: 'pl-PL-MarekNeural')
 *  EDGE_TTS_RATE     – speech rate (default: '-5%')
 *  WHISPER_CLI       – path to whisper-cli binary (default: '/usr/local/bin/whisper-cli')
 *  WHISPER_MODEL_BIN – path to ggml-*.bin model file
 */

import { execFile } from "child_process";
import { promisify } from "util";
import { readFile, writeFile, access, unlink, stat } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { randomBytes } from "crypto";
import log from "../helpers/logger.js";

const execFileAsync = promisify(execFile);

// ─── Config from ENV ──────────────────────────────────────────────────────────

const EDGE_TTS_BIN    = process.env.EDGE_TTS_BIN    || "edge-tts";
const DEFAULT_VOICE   = process.env.EDGE_TTS_VOICE  || "pl-PL-MarekNeural";
const DEFAULT_RATE    = process.env.EDGE_TTS_RATE   || "-5%";

const WHISPER_CLI     = process.env.WHISPER_CLI     || "/usr/local/bin/whisper-cli";
const WHISPER_MODEL   = process.env.WHISPER_MODEL_BIN || "";

const KNOWN_MODEL_PATHS = [
  "/opt/whisper.cpp/models/ggml-base.bin",
  "/opt/whisper.cpp/models/ggml-base.en.bin",
  "/usr/share/whisper/models/ggml-base.bin",
  "/usr/local/share/whisper/models/ggml-base.bin",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fileExists = async (p) => {
  try { await access(p); return true; } catch { return false; }
};

const tmpId = () => randomBytes(8).toString("hex");

/**
 * Map MIME type to file extension.
 */
const mimeToExtension = (mimeType) => {
  const map = {
    "audio/mpeg": "mp3", "audio/mp3": "mp3",
    "audio/wav":  "wav", "audio/ogg": "ogg",
    "audio/webm": "webm","audio/flac": "flac",
    "audio/mp4":  "m4a",
  };
  return map[mimeType] ?? "mp3";
};

/**
 * Expand short voice name to full Microsoft format for legacy edge-tts (< 6.x).
 * e.g. pl-PL-MarekNeural → "Microsoft Server Speech Text to Speech Voice (pl-PL, MarekNeural)"
 */
const expandVoiceName = (voice) => {
  if (voice.startsWith("Microsoft Server Speech")) return voice;
  const m = voice.match(/^([a-z]{2,3})-([A-Z]{2,})-(.+Neural)$/i);
  if (m) return `Microsoft Server Speech Text to Speech Voice (${m[1]}-${m[2]}, ${m[3]})`;
  return voice;
};

/**
 * Remove ASCII control characters that break JSON serialisation.
 */
const sanitize = (text) =>
  text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

/**
 * Resolve whisper-cli model path from ENV, known paths, or empty string.
 */
const resolveModelPath = async () => {
  if (WHISPER_MODEL && await fileExists(WHISPER_MODEL)) return WHISPER_MODEL;
  for (const p of KNOWN_MODEL_PATHS) {
    if (await fileExists(p)) return p;
  }
  return "";
};

// ─── Availability checks ──────────────────────────────────────────────────────

/**
 * Returns true if edge-tts binary is callable.
 */
export const isEdgeTtsAvailable = async () => {
  try {
    await execFileAsync(EDGE_TTS_BIN, ["--version"], { timeout: 5000 });
    return true;
  } catch {
    return false;
  }
};

/**
 * Returns true if whisper-cli binary exists and is executable.
 */
export const isWhisperCliAvailable = async () => fileExists(WHISPER_CLI);

// ─── TTS: edge-tts ────────────────────────────────────────────────────────────

/**
 * Synthesise text to MP3 using edge-tts.
 *
 * @param {string} text        - Text to synthesise (control chars stripped automatically)
 * @param {string} [voice]     - Edge-TTS voice name (default: EDGE_TTS_VOICE or pl-PL-MarekNeural)
 * @param {string} [speechRate] - Rate modifier, e.g. "+10%" or "-5%" (default: EDGE_TTS_RATE)
 * @returns {Promise<{ mp3Buffer: Buffer, backend: string, voice: string, size: number }>}
 */
export const synthesizeWithEdgeTts = async (text, voice = "", speechRate = "") => {
  const usedVoice = voice || DEFAULT_VOICE;
  const usedRate  = speechRate || DEFAULT_RATE;

  const tmp = tmpdir();
  const id  = tmpId();
  const mp3Path = join(tmp, `edge_${id}.mp3`);
  const txtPath = join(tmp, `edge_${id}.txt`);

  // Strip control characters to avoid JSON encoding issues
  const cleanText = text.replace(/[\x00-\x1F\x7F]/g, "");

  await writeFile(txtPath, cleanText, "utf-8");

  const rateArgs  = usedRate ? [`--rate=${usedRate}`] : [];
  const fullVoice = expandVoiceName(usedVoice);

  // Three strategies (matching EdgeTtsAdapter.php):
  // 1. short voice + --text   (modern edge-tts)
  // 2. short voice + --file   (long texts / Polish diacritics)
  // 3. full Microsoft name + --text  (legacy edge-tts < 6.x)
  const strategies = [
    [EDGE_TTS_BIN, ["--voice", usedVoice, ...rateArgs, "--text", cleanText, "--write-media", mp3Path]],
    [EDGE_TTS_BIN, ["--voice", usedVoice, ...rateArgs, "--file", txtPath,   "--write-media", mp3Path]],
    ...(fullVoice !== usedVoice
      ? [[EDGE_TTS_BIN, ["--voice", fullVoice, ...rateArgs, "--text", cleanText, "--write-media", mp3Path]]]
      : []),
  ];

  let lastError;
  try {
    for (const [bin, args] of strategies) {
      try {
        await execFileAsync(bin, args, { timeout: 30_000 });
        if (await fileExists(mp3Path)) {
          const { size } = await stat(mp3Path);
          if (size >= 100) {
            const mp3Buffer = await readFile(mp3Path);
            log.success(`edge-tts: ${size} bytes, voice=${usedVoice}`);
            return { mp3Buffer, backend: "edge-tts", voice: usedVoice, size };
          }
        }
      } catch (err) {
        lastError = err;
        log.warn(`edge-tts strategy failed: ${err.message}`);
      }
      try { await unlink(mp3Path); } catch { /* ignore */ }
    }
  } finally {
    try { await unlink(txtPath); } catch { /* ignore */ }
    try { await unlink(mp3Path); } catch { /* ignore */ }
  }

  throw new Error(
    `edge-tts failed for voice "${usedVoice}". ` +
    `Is edge-tts installed? (pip install edge-tts). ` +
    `Last error: ${lastError?.message}`
  );
};

// ─── STT: whisper-cli ─────────────────────────────────────────────────────────

/**
 * Transcribe audio bytes to text using whisper-cli (whisper.cpp).
 *
 * @param {Buffer} audioBuffer  - Raw audio bytes
 * @param {string} [language]   - BCP-47 language code (default: "pl")
 * @param {string} [mimeType]   - MIME type to determine temp file extension (default: "audio/mpeg")
 * @returns {Promise<{ text: string, backend: string, language: string }>}
 */
export const transcribeWithWhisperCli = async (audioBuffer, language = "pl", mimeType = "audio/mpeg") => {
  if (!await fileExists(WHISPER_CLI)) {
    throw new Error(`whisper-cli not found at: ${WHISPER_CLI}. Set WHISPER_CLI env var.`);
  }

  const ext   = mimeToExtension(mimeType);
  const id    = tmpId();
  const tmp   = tmpdir();
  const inPath = join(tmp, `stt_${id}.${ext}`);
  const outTxt = `${inPath}.txt`;

  await writeFile(inPath, audioBuffer);

  const modelPath = await resolveModelPath();
  const modelArgs = modelPath ? ["-m", modelPath] : [];

  const args = [
    ...modelArgs,
    "-l", language,
    "-f", inPath,
    "--output-txt",
    "--output-file", inPath,  // whisper-cli appends .txt automatically
  ];

  log.start(`whisper-cli: language=${language}, model=${modelPath || "default"}`);

  try {
    const { stdout = "", stderr = "" } = await execFileAsync(WHISPER_CLI, args, { timeout: 120_000 });

    if (await fileExists(outTxt)) {
      const raw = await readFile(outTxt, "utf-8");
      try { await unlink(outTxt); } catch { /* ignore */ }
      const text = sanitize(raw.trim());
      log.success(`whisper-cli: ${text.length} chars`);
      return { text, backend: "whisper-cli", language };
    }

    // Fallback: whisper-cli may write directly to stdout, skip timestamped lines
    const combined = `${stdout}\n${stderr}`;
    const text = sanitize(
      combined.split("\n")
        .filter(l => !l.trimStart().startsWith("["))
        .join("\n")
        .trim()
    );

    log.success(`whisper-cli (stdout): ${text.length} chars`);
    return { text, backend: "whisper-cli", language };
  } finally {
    try { await unlink(inPath); } catch { /* ignore */ }
  }
};
