/**
 * Topic-based (AI-driven) chunking
 * Uses the LLM to identify logical topic boundaries and returns chunks per topic.
 */

import { chat } from "../api.js";
import { buildHeadingIndex, findSection } from "../utils.js";
import { chunkBySeparators } from "./separators.js";

const parseTopicsResponse = (raw) => {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Strip markdown fences, then extract the first [...] array from the text
    const stripped = raw.replace(/```json?\n?/g, "").replace(/```/g, "");
    const match = stripped.match(/\[[\s\S]*\]/);
    if (!match) return null;
    try {
      parsed = JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
  return Array.isArray(parsed) ? parsed : null;
};

export const chunkByTopics = async (text, opts = {}) => {
  // Try up to 2 times with progressively stricter prompts
  for (let attempt = 0; attempt < 2; attempt++) {
    const prompt = attempt === 0
      ? `TASK: Chunk the provided document into logical topics.

OUTPUT FORMAT: JSON array only. No text before or after.
Format: [{"topic":"label","content":"original text"},...]

Rules:
- Extract exactly as written (no summarizing or rewriting)
- One topic per chunk, one chunk per topic
- Preserve all original text verbatim`
      : `RESPONSE MUST BE VALID JSON ONLY.
Do not write any words, explanations, or markdown before or after the JSON.
Only output this format:
[{"topic":"short label","content":"exact original text from document"},{"topic":"label2","content":"text2"}]

Chunk the document below into logical topics:`;

    try {
      const raw = await chat(text, prompt);
      const parsed = parseTopicsResponse(raw);
      if (parsed && parsed.length > 0) {
        const headings = buildHeadingIndex(text);
        return parsed.map((item, i) => ({
          content: item.content,
          metadata: {
            strategy: "topics",
            index: i,
            topic: item.topic,
            chars: item.content.length,
            section: findSection(text, item.content, headings),
            source: opts.source ?? null,
          },
        }));
      }
    } catch (err) {
      if (attempt === 0) {
        console.warn(`  [topics] attempt 1 failed, retrying...`);
        continue;
      }
    }
  }

  // Fallback: use separator-based chunking if AI topics fail
  console.warn(`  [topics] fallback to separators (LLM response was not valid JSON)`);
  const base = chunkBySeparators(text, opts);
  return base.map((chunk) => ({
    ...chunk,
    metadata: { ...chunk.metadata, strategy: "topics-fallback" },
  }));
};
