/**
 * Image generation and editing via OpenAI Images API (gpt-image-1).
 * Works with any OpenAI-compatible provider: OpenAI, GitHub Copilot.
 *
 * Replaces gemini.js — same exported API:
 *   generateImage(prompt, options)
 *   editImage(instructions, imageBase64, mimeType, options)
 *   editImageWithReferences(instructions, referenceImages, options)
 */

import {
  AI_API_KEY,
  CHAT_API_BASE_URL,
  EXTRA_API_HEADERS,
} from "../../../config.js";
import { recordImageCall } from "../helpers/stats.js";
import log from "../helpers/logger.js";

// Default model — can be overridden via IMAGE_MODEL env var
const IMAGE_MODEL = process.env.IMAGE_MODEL?.trim() || "gpt-image-1";

// Build endpoint from the provider's chat base URL
const IMAGES_ENDPOINT      = `${CHAT_API_BASE_URL}/images/generations`;
const IMAGE_EDIT_ENDPOINT  = `${CHAT_API_BASE_URL}/images/edits`;

// --- Aspect ratio / size helpers ---------------------------------------------

/**
 * Map tool aspect_ratio string to closest supported gpt-image-1 size.
 * Supported: "1024x1024", "1536x1024", "1024x1536", "auto"
 */
const aspectRatioToSize = (ratio) => {
  const map = {
    "1:1":  "1024x1024",
    "4:3":  "1536x1024",
    "3:4":  "1024x1536",
    "16:9": "1536x1024",
    "9:16": "1024x1536",
    "3:2":  "1536x1024",
    "2:3":  "1024x1536",
    "4:5":  "1024x1536",
    "5:4":  "1536x1024",
    "21:9": "1536x1024",
  };
  return map[ratio] ?? "auto";
};

/**
 * Map tool image_size "1k"/"2k"/"4k" to gpt-image-1 quality / size.
 */
const imageSizeToQuality = (size) => {
  const map = { "1k": "low", "2k": "medium", "4k": "high" };
  return map[size] ?? "medium";
};

// --- Internal helpers --------------------------------------------------------

const authHeaders = () => ({
  Authorization: `Bearer ${AI_API_KEY}`,
  ...EXTRA_API_HEADERS,
});

/**
 * Convert base64 image + mimeType to a Blob (used in FormData for edits).
 */
const base64ToBlob = (base64, mimeType) => {
  const buffer = Buffer.from(base64, "base64");
  return new Blob([buffer], { type: mimeType });
};

// --- Public API --------------------------------------------------------------

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

  log.image("Generating image", prompt.substring(0, 80));

  const response = await fetch(IMAGES_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
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

  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data?.error?.message || `Image generation failed (${response.status})`);
  }

  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned from Images API");

  recordImageCall("generate");
  log.imageResult(true, `Generated (image/png)`);

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
 * Uses the Images Edits endpoint with multipart form data.
 *
 * @param {string} instructions
 * @param {Array<{ data: string, mimeType: string }>} referenceImages
 * @param {{ aspectRatio?: string, imageSize?: string }} [options]
 * @returns {Promise<{ data: string, mimeType: string }>}
 */
export const editImageWithReferences = async (instructions, referenceImages, options = {}) => {
  const quality = options.imageSize ? imageSizeToQuality(options.imageSize) : "medium";
  const size    = options.aspectRatio ? aspectRatioToSize(options.aspectRatio) : "auto";

  log.image("Editing image", `${referenceImages.length} reference(s)`);

  const form = new FormData();
  form.append("model",   IMAGE_MODEL);
  form.append("prompt",  instructions);
  form.append("n",       "1");
  form.append("size",    size);
  form.append("quality", quality);
  form.append("response_format", "b64_json");

  for (const img of referenceImages) {
    const blob = base64ToBlob(img.data, img.mimeType ?? "image/png");
    // gpt-image-1 accepts repeated "image[]" fields for multiple inputs
    form.append("image[]", blob, `reference.${img.mimeType?.split("/")[1] ?? "png"}`);
  }

  const response = await fetch(IMAGE_EDIT_ENDPOINT, {
    method: "POST",
    headers: authHeaders(),  // do NOT set Content-Type – let fetch set multipart boundary
    body: form,
  });

  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data?.error?.message || `Image editing failed (${response.status})`);
  }

  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned from Images Edit API");

  recordImageCall("edit");
  log.imageResult(true, `Edited (image/png)`);

  return { data: b64, mimeType: "image/png" };
};
