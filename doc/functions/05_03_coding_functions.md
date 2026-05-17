# 05_03_coding — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph agent["agent"]
    runAgent["runAgent()"]
    truncate["truncate()"]
    getMessageText["getMessageText()"]
    readUsage["readUsage()"]
    runToolCall["runToolCall()"]
  end
  subgraph memory["memory"]
    addUserMessage["addUserMessage()"]
    addAssistantMessage["addAssistantMessage()"]
    addToolCall["addToolCall()"]
    addToolResult["addToolResult()"]
    buildInstructions["buildInstructions()"]
    maybeCompactMemory["maybeCompactMemory()"]
    createSession["createSession()"]
    serializeMessages["serializeMessages()"]
    persistSummary["persistSummary()"]
  end
  subgraph index["index"]
    createRuntimeSession["createRuntimeSession()"]
    main["main()"]
  end
  subgraph logger["logger"]
    createSessionLogger["createSessionLogger()"]
  end
  subgraph mcp["mcp"]
    connectMcp["connectMcp()"]
  end
  runAgent --> truncate
  runAgent --> getMessageText
  runAgent --> readUsage
  runAgent --> runToolCall
  runAgent --> addUserMessage
  runAgent --> addAssistantMessage
  runAgent --> addToolCall
  runAgent --> addToolResult
  runAgent --> buildInstructions
  runAgent --> maybeCompactMemory
  truncate --> readUsage
  truncate --> addUserMessage
  truncate --> buildInstructions
  truncate --> maybeCompactMemory
  getMessageText --> truncate
  getMessageText --> readUsage
  getMessageText --> addUserMessage
  getMessageText --> buildInstructions
  getMessageText --> maybeCompactMemory
  readUsage --> truncate
  readUsage --> getMessageText
  readUsage --> addUserMessage
  readUsage --> addAssistantMessage
  readUsage --> buildInstructions
  readUsage --> maybeCompactMemory
  runToolCall --> truncate
  runToolCall --> getMessageText
  runToolCall --> readUsage
  runToolCall --> addUserMessage
  runToolCall --> addAssistantMessage
  runToolCall --> addToolCall
  runToolCall --> buildInstructions
  runToolCall --> maybeCompactMemory
  createRuntimeSession --> runAgent
  createRuntimeSession --> main
  createRuntimeSession --> createSessionLogger
  createRuntimeSession --> connectMcp
  createRuntimeSession --> createSession
  main --> runAgent
  main --> createRuntimeSession
  main --> connectMcp
  createSession --> serializeMessages
  addUserMessage --> serializeMessages
  addUserMessage --> persistSummary
  addAssistantMessage --> serializeMessages
  addAssistantMessage --> persistSummary
  addToolCall --> serializeMessages
  addToolCall --> persistSummary
  addToolResult --> serializeMessages
  addToolResult --> persistSummary
  buildInstructions --> serializeMessages
  buildInstructions --> persistSummary
  maybeCompactMemory --> serializeMessages
  maybeCompactMemory --> persistSummary
  serializeMessages --> persistSummary
  persistSummary --> serializeMessages
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `runAgent` | `agent.ts` | `truncate`, `getMessageText`, `readUsage`, `runToolCall`, `addUserMessage`, `addAssistantMessage`, `addToolCall`, `addToolResult`, `buildInstructions`, `maybeCompactMemory` |
| `truncate` | `agent.ts` | `readUsage`, `addUserMessage`, `buildInstructions`, `maybeCompactMemory` |
| `getMessageText` | `agent.ts` | `truncate`, `readUsage`, `addUserMessage`, `buildInstructions`, `maybeCompactMemory` |
| `readUsage` | `agent.ts` | `truncate`, `getMessageText`, `addUserMessage`, `addAssistantMessage`, `buildInstructions`, `maybeCompactMemory` |
| `runToolCall` | `agent.ts` | `truncate`, `getMessageText`, `readUsage`, `addUserMessage`, `addAssistantMessage`, `addToolCall`, `buildInstructions`, `maybeCompactMemory` |
| `createRuntimeSession` | `index.ts` | `runAgent`, `main`, `createSessionLogger`, `connectMcp`, `createSession` |
| `main` | `index.ts` | `runAgent`, `createRuntimeSession`, `connectMcp` |
| `createSessionLogger` | `logger.ts` |  |
| `connectMcp` | `mcp.ts` |  |
| `createSession` | `memory.ts` | `serializeMessages` |
| `addUserMessage` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `addAssistantMessage` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `addToolCall` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `addToolResult` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `buildInstructions` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `maybeCompactMemory` | `memory.ts` | `serializeMessages`, `persistSummary` |
| `serializeMessages` | `memory.ts` | `persistSummary` |
| `persistSummary` | `memory.ts` | `serializeMessages` |