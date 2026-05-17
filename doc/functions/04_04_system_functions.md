# 04_04_system — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph agent_js["agent.js"]
    chat["chat()"]
  end
  subgraph api_js["api.js"]
    complete["complete()"]
  end
  subgraph logger_js["logger.js"]
    logToolCall["logToolCall()"]
    logToolResult["logToolResult()"]
    initLogs["initLogs()"]
    colorize["colorize()"]
    label["label()"]
    summarizeArgs["summarizeArgs()"]
    summarizeResult["summarizeResult()"]
    writeLog["writeLog()"]
    logQuestion["logQuestion()"]
    logAnswer["logAnswer()"]
    logError["logError()"]
    charCount["charCount()"]
  end
  subgraph tools_registry_js["tools/registry.js"]
    findHandler["findHandler()"]
    tools["tools()"]
    registerMcpTools["registerMcpTools()"]
  end
  subgraph mcp_js["mcp.js"]
    connect["connect()"]
    listTools["listTools()"]
    callTool["callTool()"]
    close["close()"]
    loadConfig["loadConfig()"]
    connectServer["connectServer()"]
    toDefinitions["toDefinitions()"]
  end
  subgraph tools_delegate_js["tools/delegate.js"]
    createRun["createRun()"]
  end
  subgraph loader_js["loader.js"]
    loadAgent["loadAgent()"]
  end
  chat --> complete
  chat --> logToolCall
  chat --> logToolResult
  chat --> findHandler
  chat --> tools
  initLogs --> colorize
  initLogs --> label
  initLogs --> summarizeArgs
  initLogs --> summarizeResult
  initLogs --> writeLog
  logQuestion --> colorize
  logQuestion --> label
  logQuestion --> summarizeArgs
  logQuestion --> summarizeResult
  logQuestion --> writeLog
  logToolCall --> colorize
  logToolCall --> label
  logToolCall --> summarizeArgs
  logToolCall --> summarizeResult
  logToolCall --> writeLog
  logToolResult --> colorize
  logToolResult --> label
  logToolResult --> summarizeResult
  logToolResult --> writeLog
  logAnswer --> label
  logAnswer --> writeLog
  logError --> label
  logError --> writeLog
  colorize --> label
  colorize --> charCount
  colorize --> summarizeArgs
  colorize --> summarizeResult
  colorize --> writeLog
  label --> colorize
  label --> charCount
  label --> summarizeArgs
  label --> summarizeResult
  label --> writeLog
  charCount --> colorize
  charCount --> label
  charCount --> summarizeArgs
  charCount --> summarizeResult
  charCount --> writeLog
  summarizeArgs --> colorize
  summarizeArgs --> label
  summarizeArgs --> charCount
  summarizeArgs --> summarizeResult
  summarizeArgs --> writeLog
  summarizeResult --> colorize
  summarizeResult --> label
  summarizeResult --> charCount
  summarizeResult --> summarizeArgs
  summarizeResult --> writeLog
  writeLog --> colorize
  writeLog --> label
  writeLog --> summarizeArgs
  writeLog --> summarizeResult
  connect --> listTools
  connect --> callTool
  connect --> close
  connect --> loadConfig
  connect --> connectServer
  listTools --> callTool
  listTools --> close
  callTool --> close
  toDefinitions --> close
  loadConfig --> connect
  loadConfig --> listTools
  loadConfig --> callTool
  loadConfig --> close
  loadConfig --> connectServer
  connectServer --> connect
  connectServer --> listTools
  connectServer --> callTool
  connectServer --> close
  connectServer --> loadConfig
  createRun --> loadAgent
  registerMcpTools --> callTool
  registerMcpTools --> toDefinitions
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `chat` | `agent.js` | `complete`, `logToolCall`, `logToolResult`, `findHandler`, `tools` |
| `complete` | `api.js` |  |
| `loadAgent` | `loader.js` |  |
| `initLogs` | `logger.js` | `colorize`, `label`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `logQuestion` | `logger.js` | `colorize`, `label`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `logToolCall` | `logger.js` | `colorize`, `label`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `logToolResult` | `logger.js` | `colorize`, `label`, `summarizeResult`, `writeLog` |
| `logAnswer` | `logger.js` | `label`, `writeLog` |
| `logError` | `logger.js` | `label`, `writeLog` |
| `colorize` | `logger.js` | `label`, `charCount`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `label` | `logger.js` | `colorize`, `charCount`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `charCount` | `logger.js` | `colorize`, `label`, `summarizeArgs`, `summarizeResult`, `writeLog` |
| `summarizeArgs` | `logger.js` | `colorize`, `label`, `charCount`, `summarizeResult`, `writeLog` |
| `summarizeResult` | `logger.js` | `colorize`, `label`, `charCount`, `summarizeArgs`, `writeLog` |
| `writeLog` | `logger.js` | `colorize`, `label`, `summarizeArgs`, `summarizeResult` |
| `connect` | `mcp.js` | `listTools`, `callTool`, `close`, `loadConfig`, `connectServer` |
| `listTools` | `mcp.js` | `callTool`, `close` |
| `callTool` | `mcp.js` | `close` |
| `toDefinitions` | `mcp.js` | `close` |
| `close` | `mcp.js` |  |
| `loadConfig` | `mcp.js` | `connect`, `listTools`, `callTool`, `close`, `connectServer` |
| `connectServer` | `mcp.js` | `connect`, `listTools`, `callTool`, `close`, `loadConfig` |
| `createRun` | `tools/delegate.js` | `loadAgent` |
| `registerMcpTools` | `tools/registry.js` | `callTool`, `toDefinitions` |
| `findHandler` | `tools/registry.js` |  |
| `tools` | `tools/registry.js` |  |