import OpenAI from 'openai'
import { join } from 'node:path'
import type { MemoryConfig } from '../../src/types.js'
import { AI_API_KEY, CHAT_API_BASE_URL, EXTRA_API_HEADERS, resolveModelForProvider } from '../../src/config.js'

export { resolveModelForProvider }

export const WORKSPACE = join(process.cwd(), 'workspace')

export const openai = new OpenAI({
  apiKey: AI_API_KEY as string,
  baseURL: CHAT_API_BASE_URL as string,
  defaultHeaders: EXTRA_API_HEADERS as Record<string, string>,
})

export const SERVER_PORT = 3001

export const DEFAULT_AGENT_NAME = 'alice'
export const AGENT_MAX_TURNS = 25

// ---------------------------------------------------------------------------
// Stałe tokenowe i limitowe — re-eksport z globalnego src/config.ts
// ---------------------------------------------------------------------------
export {
  TOKEN_CHARS_PER_TOKEN,
  TOKEN_SAFETY_MARGIN,
  OBSERVER_MAX_SECTION_CHARS,
  OBSERVER_MAX_TOOL_PAYLOAD_CHARS,
  OBSERVER_MAX_OUTPUT_TOKENS,
  REFLECTOR_MAX_OUTPUT_TOKENS,
} from '../../src/config.js'

export const MEMORY_DIR = join(WORKSPACE, 'memory')

// Thresholds are intentionally low so the observer/reflector cycle
// triggers within a short demo conversation. In production you'd
// raise these significantly (e.g. 4000 / 2000 / 1200).
export const DEFAULT_MEMORY_CONFIG: MemoryConfig = {
  observationThresholdTokens: 400,
  reflectionThresholdTokens: 400,
  reflectionTargetTokens: 200,
  observerModel: 'gpt-4.1-mini',
  reflectorModel: 'gpt-4.1-mini',
}
