import OpenAI from 'openai'
import { AI_API_KEY, CHAT_API_BASE_URL, EXTRA_API_HEADERS, resolveModelForProvider } from '../../config.js'

export const openai = new OpenAI({
  apiKey: AI_API_KEY,
  baseURL: CHAT_API_BASE_URL,
  defaultHeaders: EXTRA_API_HEADERS,
})

export { resolveModelForProvider }
