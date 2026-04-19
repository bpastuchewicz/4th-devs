/**
 * Context-enriched chunking (Anthropic-style contextual retrieval)
 * Splits with separators first, then uses LLM to generate a context prefix per chunk.
 */

import { chat } from "../api.js";
import { chunkBySeparators } from "./separators.js";

const enrichChunk = async (chunk) => {
  const context = await chat(
    `<chunk>${chunk.content}</chunk>`,
    "Generate a very short (1-2 sentence) context that situates this chunk within the overall document. Return ONLY the context, nothing else."
  );
  return {
    content: chunk.content,
    metadata: { ...chunk.metadata, strategy: "context", context },
  };
};

/**
 * Process items in parallel with a max concurrency limit.
 */
const pool = async (items, fn, concurrency = 4) => {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
};

export const chunkWithContext = async (text, opts = {}) => {
  const base = chunkBySeparators(text, opts);
  let done = 0;

  const enriched = await pool(base, async (chunk) => {
    const result = await enrichChunk(chunk);
    process.stdout.write(`  context: enriched ${++done}/${base.length}\r`);
    return result;
  }, 4);

  console.log();
  return enriched;
};
