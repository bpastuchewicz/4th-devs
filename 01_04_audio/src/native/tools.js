/**
 * Native tools for the audio processing agent.
 *
 * Tools:
 * - transcribe_audio : STT via whisper-cli (local, fast)
 * - generate_audio   : TTS via edge-tts (Microsoft Neural voices)
 *
 * Audio analysis / custom questions are handled by the Copilot model itself
 * after receiving the transcript from transcribe_audio.
 */

import { readFile, writeFile, mkdir } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";
import {
  synthesizeWithEdgeTts,
  transcribeWithWhisperCli,
  isEdgeTtsAvailable,
  isWhisperCliAvailable,
} from "./local-audio.js";
import log from "../helpers/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "../..");

// --- Helpers -----------------------------------------------------------------

const ensureDir = async (dir) => {
  try { await mkdir(dir, { recursive: true }); }
  catch (e) { if (e.code !== "EEXIST") throw e; }
};

const getAudioMimeType = (filepath) => {
  const ext = extname(filepath).toLowerCase();
  const types = {
    ".mp3": "audio/mp3",   ".wav": "audio/wav",
    ".ogg": "audio/ogg",   ".flac": "audio/flac",
    ".aac": "audio/aac",   ".m4a": "audio/mp4",
    ".webm": "audio/webm", ".aiff": "audio/aiff",
  };
  return types[ext] || "audio/mpeg";
};

// --- Polish & common edge-tts voices -----------------------------------------

export const EDGE_TTS_VOICES = {
  "pl-PL-MarekNeural":  "Polish male",
  "pl-PL-ZofiaNeural":  "Polish female",
  "en-US-GuyNeural":    "English US male",
  "en-US-JennyNeural":  "English US female",
  "en-GB-RyanNeural":   "English GB male",
  "en-GB-SoniaNeural":  "English GB female",
  "de-DE-ConradNeural": "German male",
  "de-DE-KatjaNeural":  "German female",
};

// --- Tool definitions (OpenAI Responses API format) --------------------------

export const nativeTools = [
  {
    type: "function",
    name: "transcribe_audio",
    description:
      "Transcribe speech from an audio file to text using whisper-cli (local STT). " +
      "Supports MP3, WAV, OGG, FLAC, M4A, WEBM. " +
      "Returns the transcript; the model can then analyse, summarise, or answer questions about it.",
    parameters: {
      type: "object",
      properties: {
        audio_path: {
          type: "string",
          description:
            "Path to the audio file relative to the project root, e.g. workspace/input/recording.mp3",
        },
        language: {
          type: "string",
          description:
            "BCP-47 language code, e.g. 'pl' (Polish, default), 'en', 'de'. Use 'auto' for auto-detect.",
        },
        output_name: {
          type: "string",
          description:
            "Optional base name for saving the transcript JSON to workspace/output/.",
        },
      },
      required: ["audio_path"],
      additionalProperties: false,
    },
    strict: false,
  },
  {
    type: "function",
    name: "generate_audio",
    description:
      "Generate speech MP3 from text using edge-tts (Microsoft Neural voices). " +
      "Saves the file to workspace/output/ and returns the path + base64 audio. " +
      "Available voices: pl-PL-MarekNeural (Polish male), pl-PL-ZofiaNeural (Polish female), " +
      "en-US-GuyNeural (English US male), en-US-JennyNeural (English US female), " +
      "en-GB-RyanNeural (English GB male), en-GB-SoniaNeural (English GB female), " +
      "de-DE-ConradNeural (German male), de-DE-KatjaNeural (German female).",
    parameters: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description: "Text to convert to speech.",
        },
        voice: {
          type: "string",
          description:
            "Voice name, e.g. 'pl-PL-MarekNeural' (default), 'pl-PL-ZofiaNeural', 'en-US-GuyNeural'.",
        },
        speech_rate: {
          type: "string",
          description:
            "Speech rate modifier, e.g. '+10%' (faster), '-10%' (slower). Default: '-5%'.",
        },
        output_name: {
          type: "string",
          description:
            "Base name for the output MP3 file saved to workspace/output/ (without extension).",
        },
      },
      required: ["text", "output_name"],
      additionalProperties: false,
    },
    strict: false,
  },
];

// --- Native tool handlers ----------------------------------------------------

export const nativeHandlers = {
  async transcribe_audio({ audio_path, language = "pl", output_name }) {
    log.start(`transcribe_audio: ${audio_path} [${language}]`);

    try {
      const fullPath    = join(PROJECT_ROOT, audio_path);
      const mimeType    = getAudioMimeType(audio_path);
      const audioBuffer = await readFile(fullPath);
      const result      = await transcribeWithWhisperCli(audioBuffer, language, mimeType);

      if (output_name) {
        const outputDir = join(PROJECT_ROOT, "workspace/output");
        await ensureDir(outputDir);
        const ts         = Date.now();
        const outputPath = join(outputDir, `${output_name}_${ts}.json`);
        await writeFile(outputPath, JSON.stringify(result, null, 2));
        log.success(`Transcript saved: workspace/output/${output_name}_${ts}.json`);
        return {
          success: true,
          audio_path,
          output_path: `workspace/output/${output_name}_${ts}.json`,
          transcription: result,
        };
      }

      log.success(`Transcribed: ${result.text.length} chars`);
      return { success: true, audio_path, transcription: result };
    } catch (error) {
      log.error("transcribe_audio", error.message);
      return { success: false, error: error.message };
    }
  },

  async generate_audio({ text, voice = "", speech_rate = "", output_name }) {
    log.start(`generate_audio: voice=${voice || "default"}, out=${output_name}`);

    try {
      const { mp3Buffer, backend, voice: usedVoice, size } =
        await synthesizeWithEdgeTts(text, voice, speech_rate);

      const outputDir  = join(PROJECT_ROOT, "workspace/output");
      await ensureDir(outputDir);
      const ts         = Date.now();
      const filename   = `${output_name}_${ts}.mp3`;
      const outputPath = join(outputDir, filename);
      await writeFile(outputPath, mp3Buffer);

      const relPath = `workspace/output/${filename}`;
      log.success(`Audio saved: ${relPath} (${size} bytes)`);

      return {
        success:      true,
        output_path:  relPath,
        backend,
        voice:        usedVoice,
        size_bytes:   size,
        base64_audio: mp3Buffer.toString("base64"),
      };
    } catch (error) {
      log.error("generate_audio", error.message);
      return { success: false, error: error.message };
    }
  },
};

// --- Exports -----------------------------------------------------------------

export const isNativeTool = (name) => name in nativeHandlers;

export const executeNativeTool = async (name, args) => {
  const handler = nativeHandlers[name];
  if (!handler) throw new Error(`Unknown native tool: ${name}`);
  return handler(args);
};

export const printBackendStatus = async () => {
  const tts = await isEdgeTtsAvailable();
  const stt = await isWhisperCliAvailable();
  log.info(`edge-tts   : ${tts ? "available" : "NOT FOUND (pip install edge-tts)"}`);
  log.info(`whisper-cli: ${stt ? "available" : "NOT FOUND (set WHISPER_CLI env var)"}`);
};
