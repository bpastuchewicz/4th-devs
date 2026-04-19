/**
 * Shared image generation and editing via OpenAI Images API.
 * Works with: OpenAI, GitHub Copilot (gpt-image-1 or IMAGE_MODEL).
 *
 * ENV:
 *  IMAGE_MODEL   – model name (default: 'gpt-image-1')
 *                  For GitHub Copilot check available models via GET /models.
 *
 * Exports:
 *  generateImage(prompt, options)
 *  editImage(instructions, imageBase64, mimeType, options)
 *  editImageWithReferences(instructions, referenceImages, options)
 */

import {
  AI_API_KEY,
  CHAT_API_BASE_URL,
  EXTRA_API_HEADERS,
} from "../config.js";

const IMAGE_MODEL       = process.env.IMAGE_MODEL?.trim() || "gpt-image-1";
const IMAGES_ENDPOINT   = `${CHAT_API_BASE_URL}/images/generations`;
const IMAGE_EDIT_ENDPOINT = `${CHAT_API_BASE_URL}/images/edits`;

// ─── Aspect ratio / quality helpers ──────────────────────────────────────────

const aspectRatioToSize = (ratio) => ({
  "1:1":  "1024x1024",
  "4:3":  "1536x1024",  "3:4":  "1024x1536",
  "16:9": "1536x1024",  "9:16": "1024x1536",
  "3:2":  "1536x1024",  "2:3":  "1024x1536",
  "4:5":  "1024x1536",  "5:4":  "1536x1024",
  "21:9": "1536x1024",
}[ratio] ?? "auto");

const imageSizeToQuality = (size) =>
  ({ "1k": "low", "2k": "medium", "4k": "high" }[size] ?? "medium");

// ─── Internal helpers ─────────────────────────────────────────────────────────

const authHeaders = () => ({
  Authorization: `Bearer ${AI_API_KEY}`,
  ...EXTRA_API_HEADERS,
});

const base64ToBlob = (base64, mimeType) => {
  const buffer = Buffer.from(base64, "base64");
  return new Blob([buffer], { type: mimeType });
};

/**
 * Safely read response body as JSON.
 * Throws a human-readable error if the API returns non-JSON (e.g. HTML 404/500 page).
 */
const safeJson = async (response) => {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      `API returned non-JSON response (HTTP ${response.status}):\n${text.slice(0, 400)}`
    );
  }
};

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Generate an image from a text prompt.
 *
 * @param {string} prompt
 * @param {{ aspectRatio?: string, imageSize?: string }} [options]
 * @returns {Promise<{ data: string, mimeType: string }>}  base64 + MIME type
 */
export const generateImage = async (prompt, options = {}) => {
  const size    = options.aspectRatio ? aspectRatioToSize(options.aspectRatio) : "auto";
  const quality = options.imageSize   ? imageSizeToQuality(options.imageSize)  : "medium";

  console.log(`[image] generating — model=${IMAGE_MODEL}, size=${size}, quality=${quality}`);

  const response = await fetch(IMAGES_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({
      model:           IMAGE_MODEL,
      prompt,
      n:               1,
      size,
      quality,
      output_format:   "png",
      response_format: "b64_json",
    }),
  });

  const data = await safeJson(response);

  if (!response.ok || data.error) {
    throw new Error(data?.error?.message || `Image generation failed (${response.status})`);
  }

  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned from Images API");

  console.log(`[image] generated image/png`);
  return { data: b64, mimeType: "image/png" };
};

/**
 * Edit an image with text instructions.
 *
 * @param {string} instructions
 * @param {string} imageBase64
 * @param {string} mimeType
 * @param {{ aspectRatio?: string, imageSize?: string }} [options]
 * @returns {Promise<{ data: string, mimeType: string }>}
 */
export const editImage = async (instructions, imageBase64, mimeType, options = {}) =>
  editImageWithReferences(instructions, [{ data: imageBase64, mimeType }], options);

/**
 * Edit/combine multiple reference images with text instructions.
 *
 * @param {string} instructions
 * @param {Array<{ data: string, mimeType: string }>} referenceImages
 * @param {{ aspectRatio?: string, imageSize?: string }} [options]
 * @returns {Promise<{ data: string, mimeType: string }>}
 */
export const editImageWithReferences = async (instructions, referenceImages, options = {}) => {
  const quality = options.imageSize   ? imageSizeToQuality(options.imageSize)  : "medium";
  const size    = options.aspectRatio ? aspectRatioToSize(options.aspectRatio) : "auto";

  console.log(`[image] editing — ${referenceImages.length} reference(s), model=${IMAGE_MODEL}`);

  const form = new FormData();
  form.append("model",           IMAGE_MODEL);
  form.append("prompt",          instructions);
  form.append("n",               "1");
  form.append("size",            size);
  form.append("quality",         quality);
  form.append("response_format", "b64_json");

  for (const img of referenceImages) {
    const blob = base64ToBlob(img.data, img.mimeType ?? "image/png");
    form.append("image[]", blob, `reference.${img.mimeType?.split("/")[1] ?? "png"}`);
  }

  const response = await fetch(IMAGE_EDIT_ENDPOINT, {
    method:  "POST",
    headers: authHeaders(),   // no Content-Type — let fetch set multipart boundary
    body:    form,
  });

  const data = await safeJson(response);

  if (!response.ok || data.error) {
    throw new Error(data?.error?.message || `Image editing failed (${response.status})`);
  }

  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned from Images Edit API");

  console.log(`[image] edited image/png`);
  return { data: b64, mimeType: "image/png" };
};
