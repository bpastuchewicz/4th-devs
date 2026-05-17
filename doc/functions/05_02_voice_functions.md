# 05_02_voice — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph agent_js["agent.js"]
    buildOpenAISessionOptions["buildOpenAISessionOptions()"]
    createSessionConfig["createSessionConfig()"]
  end
  subgraph mcp_js["mcp.js"]
    createMcpManager["createMcpManager()"]
    loadConfig["loadConfig()"]
    buildEnv["buildEnv()"]
    extractText["extractText()"]
  end
  subgraph tools_js["tools.js"]
    createTools["createTools()"]
    toZod["toZod()"]
  end
  subgraph voice_mode_js["voice_mode.js"]
    getGoogleApiKey["getGoogleApiKey()"]
    resolveVoiceMode["resolveVoiceMode()"]
    readEnv["readEnv()"]
    hasOpenAIKey["hasOpenAIKey()"]
    hasElevenLabsKey["hasElevenLabsKey()"]
  end
  buildOpenAISessionOptions --> createSessionConfig
  buildOpenAISessionOptions --> createMcpManager
  buildOpenAISessionOptions --> createTools
  buildOpenAISessionOptions --> getGoogleApiKey
  buildOpenAISessionOptions --> resolveVoiceMode
  createSessionConfig --> buildOpenAISessionOptions
  createSessionConfig --> createMcpManager
  createSessionConfig --> createTools
  createSessionConfig --> getGoogleApiKey
  createSessionConfig --> resolveVoiceMode
  createMcpManager --> loadConfig
  createMcpManager --> buildEnv
  createMcpManager --> extractText
  loadConfig --> buildEnv
  loadConfig --> extractText
  buildEnv --> loadConfig
  buildEnv --> extractText
  extractText --> loadConfig
  extractText --> buildEnv
  createTools --> toZod
  getGoogleApiKey --> readEnv
  getGoogleApiKey --> hasOpenAIKey
  getGoogleApiKey --> hasElevenLabsKey
  resolveVoiceMode --> getGoogleApiKey
  resolveVoiceMode --> hasOpenAIKey
  resolveVoiceMode --> hasElevenLabsKey
  readEnv --> getGoogleApiKey
  readEnv --> hasOpenAIKey
  readEnv --> hasElevenLabsKey
  hasOpenAIKey --> getGoogleApiKey
  hasOpenAIKey --> readEnv
  hasOpenAIKey --> hasElevenLabsKey
  hasElevenLabsKey --> getGoogleApiKey
  hasElevenLabsKey --> readEnv
  hasElevenLabsKey --> hasOpenAIKey
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `buildOpenAISessionOptions` | `agent.js` | `createSessionConfig`, `createMcpManager`, `createTools`, `getGoogleApiKey`, `resolveVoiceMode` |
| `createSessionConfig` | `agent.js` | `buildOpenAISessionOptions`, `createMcpManager`, `createTools`, `getGoogleApiKey`, `resolveVoiceMode` |
| `createMcpManager` | `mcp.js` | `loadConfig`, `buildEnv`, `extractText` |
| `loadConfig` | `mcp.js` | `buildEnv`, `extractText` |
| `buildEnv` | `mcp.js` | `loadConfig`, `extractText` |
| `extractText` | `mcp.js` | `loadConfig`, `buildEnv` |
| `createTools` | `tools.js` | `toZod` |
| `toZod` | `tools.js` |  |
| `getGoogleApiKey` | `voice_mode.js` | `readEnv`, `hasOpenAIKey`, `hasElevenLabsKey` |
| `resolveVoiceMode` | `voice_mode.js` | `getGoogleApiKey`, `hasOpenAIKey`, `hasElevenLabsKey` |
| `readEnv` | `voice_mode.js` | `getGoogleApiKey`, `hasOpenAIKey`, `hasElevenLabsKey` |
| `hasOpenAIKey` | `voice_mode.js` | `getGoogleApiKey`, `readEnv`, `hasElevenLabsKey` |
| `hasElevenLabsKey` | `voice_mode.js` | `getGoogleApiKey`, `readEnv`, `hasOpenAIKey` |