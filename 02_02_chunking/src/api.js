import { AI_API_KEY, RESPONSES_API_ENDPOINT, EXTRA_API_HEADERS, resolveModelForProvider } from "../../config.js";

const DEFAULT_MODEL = resolveModelForProvider("gpt-4.1-mini");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * chat() with automatic retry on network/timeout errors.
 * Uses AbortSignal.timeout for a generous per-request deadline.
 */
export const chat = async (input, instructions, model = DEFAULT_MODEL, { retries = 4, baseDelay = 1500, requestTimeout = 90_000 } = {}) => {
  const body = { model, input };
  if (instructions) body.instructions = instructions;

  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      const delay = baseDelay * 2 ** (attempt - 1) + Math.random() * 500;
      console.warn(`  [api] retry ${attempt}/${retries} in ${Math.round(delay)}ms (${lastErr?.message?.slice(0, 60)})`);
      await sleep(delay);
    }
    try {
      const res = await fetch(RESPONSES_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AI_API_KEY}`,
          ...EXTRA_API_HEADERS,
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(requestTimeout),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);

      const message = data.output.find((item) => item.type === "message");
      return message?.content?.[0]?.text ?? "";
    } catch (err) {
      lastErr = err;
      // Don't retry on non-network errors (e.g. auth, bad request)
      const isRetryable = err.name === "TimeoutError" || err.name === "AbortError" ||
        err.cause?.code?.startsWith("UND_ERR") || err.message?.includes("fetch failed");
      if (!isRetryable) throw err;
    }
  }
  throw lastErr;
};
