/**
 * Centralny, otypowany re-export konfiguracji AI z root config.js.
 *
 * Importuj ten plik z lekcji TypeScript zamiast bezpośrednio z ../../config.js:
 *   import { AI_API_KEY, CHAT_API_BASE_URL, EXTRA_API_HEADERS, resolveModelForProvider } from '../../src/config.js'
 *
 * Plik nie tworzy klienta OpenAI – zależność openai jest wyłącznie w poszczególnych lekcjach.
 *
 * Obsługiwani dostawcy: openai | openrouter | copilot (GITHUB_TOKEN).
 * Konfiguracja Copilot (fetch patch, wymiana tokenów) instalowana jest automatycznie
 * jako efekt uboczny importu root config.js.
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

// ---------------------------------------------------------------------------
// Stałe współdzielone przez moduły ai/ i memory/
// ---------------------------------------------------------------------------

/** Przybliżona liczba znaków na jeden token (szacowanie tokenów bez API). */
export const TOKEN_CHARS_PER_TOKEN = 4

/** Mnożnik bezpieczeństwa dla szacowania budżetu tokenów. */
export const TOKEN_SAFETY_MARGIN = 1.2

/** Maksymalna długość jednej sekcji wiadomości przekazywana do obserwatora. */
export const OBSERVER_MAX_SECTION_CHARS = 6_000

/** Maksymalna długość payload narzędzia przekazywana do obserwatora. */
export const OBSERVER_MAX_TOOL_PAYLOAD_CHARS = 3_000

/** Maksymalna liczba tokenów wyjściowych obserwatora. */
export const OBSERVER_MAX_OUTPUT_TOKENS = 8_000

/** Maksymalna liczba tokenów wyjściowych reflektora. */
export const REFLECTOR_MAX_OUTPUT_TOKENS = 10_000
