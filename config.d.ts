/** Type declarations for the untyped root config.js */

export type AIProvider = 'openai' | 'openrouter' | 'copilot'

export declare const AI_PROVIDER: AIProvider
export declare const AI_API_KEY: string
export declare const RESPONSES_API_ENDPOINT: string
export declare const EMBEDDINGS_API_ENDPOINT: string
export declare const CHAT_API_BASE_URL: string
export declare const OPENROUTER_EXTRA_HEADERS: Record<string, string>
export declare const EXTRA_API_HEADERS: Record<string, string>
export declare const OPENAI_API_KEY: string
export declare const OPENROUTER_API_KEY: string

export declare function resolveModelForProvider(model: string): string

export interface WebSearchConfig {
  enabled?: boolean
  searchContextSize?: 'low' | 'medium' | 'high'
  engine?: 'native' | 'exa'
  maxResults?: number
  searchPrompt?: string
}

export interface ResponsesRequestOptions {
  model: string
  tools?: unknown
  plugins?: unknown
  webSearch?: boolean | WebSearchConfig
  [key: string]: unknown
}

export declare function buildResponsesRequest(
  options: ResponsesRequestOptions
): Record<string, unknown>
