/**
 * Centralny, otypowany re-export konfiguracji AI z root config.js.
 *
 * Importuj ten plik z lekcji TypeScript zamiast bezpośrednio z ../../config.js:
 *   import { AI_API_KEY, CHAT_API_BASE_URL, EXTRA_API_HEADERS, resolveModelForProvider } from '../../src/config.js'
 *
 * Plik nie tworzy klienta OpenAI – zależność openai jest wyłącznie w poszczególnych lekcjach.
 */

export {
  AI_PROVIDER,
  AI_API_KEY,
  CHAT_API_BASE_URL,
  EXTRA_API_HEADERS,
  RESPONSES_API_ENDPOINT,
  EMBEDDINGS_API_ENDPOINT,
  OPENAI_API_KEY,
  OPENROUTER_API_KEY,
  resolveModelForProvider,
  buildResponsesRequest,
} from '../config.js'

export type { AIProvider, WebSearchConfig, ResponsesRequestOptions } from '../config.js'
