/**
 * Token usage statistics tracker.
 */

let totalTokens = { input: 0, output: 0, requests: 0 };
let imageCalls = { generations: 0, edits: 0 };

export const recordUsage = (usage) => {
  if (!usage) return;
  totalTokens.input += usage.input_tokens || 0;
  totalTokens.output += usage.output_tokens || 0;
  totalTokens.requests += 1;
};

export const recordImageCall = (type) => {
  if (type === "generate") imageCalls.generations++;
  else if (type === "edit") imageCalls.edits++;
};

/** @deprecated Use recordImageCall instead */
export const recordGemini = recordImageCall;

export const getStats = () => ({
  openai: { ...totalTokens },
  images: { ...imageCalls }
});

export const logStats = () => {
  const { input, output, requests } = totalTokens;
  const { generations, edits } = imageCalls;
  console.log(`\n📊 API Stats: ${requests} requests, ${input} input tokens, ${output} output tokens`);
  console.log(`🎨 Images: ${generations} generations, ${edits} edits\n`);
};

export const resetStats = () => {
  totalTokens = { input: 0, output: 0, requests: 0 };
  imageCalls = { generations: 0, edits: 0 };
};
