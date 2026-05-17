# 05_ - Diagramy logiki wykonania (JS/TS)

## 05_01_agent_graph

```mermaid
flowchart TD
  IDX[src/index.ts] --> RT[createRuntime FileStore]
  RT --> START[startSession create session/actors/root task]
  START --> PROC[processSession]
  PROC --> LOOP{tasks remaining?}
  LOOP -->|tak| ONE[src/scheduler/loop.ts processOneTask]
  ONE --> CHILD{has unfinished children?}
  CHILD -->|tak| WAIT[mark waiting]
  CHILD -->|nie| RUN[src/scheduler/actor.ts runActorTask]
  RUN --> OK{result ok?}
  OK -->|tak| DONE[mark done + unblockParents]
  OK -->|nie| RETRY{recoverable and attempts < 3?}
  RETRY -->|tak| SCHED[scheduleRecoverableRetry]
  RETRY -->|nie| BLOCK[mark blocked]
  WAIT --> LOOP
  DONE --> LOOP
  SCHED --> LOOP
  BLOCK --> LOOP
  LOOP -->|nie| DASH[src/server.ts dashboard]
```

### Źródła kodu

- [src/index.ts](../05_01_agent_graph/src/index.ts)
- [src/runtime.ts](../05_01_agent_graph/src/runtime.ts)
- [src/scheduler/loop.ts](../05_01_agent_graph/src/scheduler/loop.ts)
- [src/scheduler/actor.ts](../05_01_agent_graph/src/scheduler/actor.ts)
- [src/server.ts](../05_01_agent_graph/src/server.ts)

---

## 05_02_ui

```mermaid
sequenceDiagram
  participant UI as src/App.svelte
  participant API as server/index.ts
  participant RUN as server/agent/run.ts streamLiveTurn
  participant OAI as OpenAI responses stream
  participant TOOL as tool handlers

  UI->>API: POST /api/chat/stream
  API->>RUN: streamLiveTurn(request)
  loop step < DEFAULT_MAX_STEPS
    RUN->>OAI: responses.create(stream=true)
    OAI-->>RUN: text deltas + output items
    alt function call detected
      RUN->>TOOL: execute tool
      TOOL-->>RUN: serialized output
    else no function calls
      RUN-->>API: assistant final events
    end
  end
  API-->>UI: SSE events (delta/tool/status)
```

### Źródła kodu

- [server/index.ts](../05_02_ui/server/index.ts)
- [server/agent/run.ts](../05_02_ui/server/agent/run.ts)
- [server/conversation/store.ts](../05_02_ui/server/conversation/store.ts)
- [server/ai/client.ts](../05_02_ui/server/ai/client.ts)
- [src/App.svelte](../05_02_ui/src/App.svelte)

---

## 05_02_voice

```mermaid
flowchart TD
  AG[src/agent.js defineAgent] --> PRE[prewarm VAD + MCP manager]
  PRE --> ENTRY[entry ctx.connect + waitForParticipant]
  ENTRY --> MODE[src/voice_mode.js resolveVoiceMode]
  MODE --> CFG[createSessionConfig]
  CFG --> SESS[new voice.AgentSession]
  SESS --> START[session.start agent+room]
  START --> EVT{speech/tool events}
  EVT --> TOOLS[src/tools.js execute MCP tool]
  TOOLS --> EVT
  EVT --> CLOSE[session close -> cleanup MCP]
```

### Źródła kodu

- [src/agent.js](../05_02_voice/src/agent.js)
- [src/voice_mode.js](../05_02_voice/src/voice_mode.js)
- [src/tools.js](../05_02_voice/src/tools.js)
- [src/mcp.js](../05_02_voice/src/mcp.js)
- [src/elevenlabs_tts.js](../05_02_voice/src/elevenlabs_tts.js)

---

## 05_03_autoprompt

```mermaid
flowchart TD
  CLI[src/cli/optimize.js] --> LOAD[loadProject]
  LOAD --> BASE[runEvaluation baseline]
  BASE --> ITER{iteration < maxIterations}
  ITER -->|tak| CANDS[generateCandidateStrategies]
  CANDS --> IMPROVE[suggestPromptImprovement parallel]
  IMPROVE --> EVAL[runEvaluation for each candidate]
  EVAL --> PICK[compareCandidateIterations pick best]
  PICK --> KEEP{is better than current?}
  KEEP -->|tak| UPDATE[current/best prompt update]
  KEEP -->|nie| NEXT[next iteration]
  UPDATE --> NEXT
  NEXT --> ITER
  ITER -->|nie| SAVE[writeOptimizeRun prompt.best + history]
```

### Źródła kodu

- [src/cli/optimize.js](../05_03_autoprompt/src/cli/optimize.js)
- [src/core/optimize-project.js](../05_03_autoprompt/src/core/optimize-project.js)
- [src/core/run-evaluation.js](../05_03_autoprompt/src/core/run-evaluation.js)
- [src/core/improve-prompt.js](../05_03_autoprompt/src/core/improve-prompt.js)
- [src/project/load-project.js](../05_03_autoprompt/src/project/load-project.js)

---

## 05_03_ax

```mermaid
flowchart TD
  IDX[src/index.ts] --> LOAD[src/emails.ts loadEmails]
  LOAD --> FOR[for each email]
  FOR --> CLS[src/classify.ts classifyEmail]
  CLS --> DEMO{demos.json loaded?}
  DEMO -->|tak| SETD[setDemos]
  DEMO -->|nie| SETE[setExamples fallback]
  SETD --> FWD[classifier.forward]
  SETE --> FWD
  FWD --> OUT[result labels/priority/needsReply/summary]
  OUT --> LOG[src/logger.ts logEmail]
  LOG --> FOR
```

### Źródła kodu

- [src/index.ts](../05_03_ax/src/index.ts)
- [src/classify.ts](../05_03_ax/src/classify.ts)
- [src/emails.ts](../05_03_ax/src/emails.ts)
- [src/examples.ts](../05_03_ax/src/examples.ts)
- [src/logger.ts](../05_03_ax/src/logger.ts)

---

## 05_03_coding

```mermaid
flowchart TD
  IDX[src/index.ts REPL] --> MCP[src/mcp.ts connectMcp]
  MCP --> INPUT[user input or command]
  INPUT --> CMD{demo/clear/quit?}
  CMD -->|clear| NEWS[new session]
  CMD -->|quit| END[close MCP + exit]
  CMD -->|message| RUN[src/agent.ts runAgent]
  RUN --> LOOP{turn < MAX_TURNS}
  LOOP -->|tak| COMP[responses.create]
  COMP --> MEM[src/memory.ts maybeCompactMemory]
  MEM --> FC{tool calls?}
  FC -->|tak| TOOL[runToolCall -> mcp.callTool]
  TOOL --> LOOP
  FC -->|nie| FINAL[assistant text]
  FINAL --> INPUT
```

### Źródła kodu

- [src/index.ts](../05_03_coding/src/index.ts)
- [src/agent.ts](../05_03_coding/src/agent.ts)
- [src/memory.ts](../05_03_coding/src/memory.ts)
- [src/mcp.ts](../05_03_coding/src/mcp.ts)
- [src/config.ts](../05_03_coding/src/config.ts)

---

## 05_04_api

```mermaid
flowchart TD
  IDX[src/index.ts] --> CFG[loadConfig + loadEnvFile]
  CFG --> RT[src/app/runtime.ts createAppRuntime]
  RT --> APP[src/app/create-app.ts createApp]
  APP --> MW[middleware chain]
  MW --> ROUTES[register API routes]
  ROUTES --> ERR{domain error?}
  ERR -->|tak| MAP[toHttpStatus + envelope]
  ERR -->|nie| E500[500 handler]
  MAP --> RESP[HTTP response]
  E500 --> RESP
  RESP --> SHUT[graceful shutdown SIGINT/SIGTERM]
```

### Źródła kodu

- [src/index.ts](../05_04_api/src/index.ts)
- [src/app/create-app.ts](../05_04_api/src/app/create-app.ts)
- [src/app/runtime.ts](../05_04_api/src/app/runtime.ts)
- [src/app/middleware/](../05_04_api/src/app/middleware)
- [src/adapters/http/routes/](../05_04_api/src/adapters/http/routes)

---

## 05_04_ui

```mermaid
flowchart TD
  MAIN[src/main.ts] --> APP[src/App.svelte onMount]
  APP --> AUTH{has auth session?}
  AUTH -->|nie| LOGIN[loginWithPassword]
  AUTH -->|tak| LOAD[listAgents/listThreads/listMcpServers]
  LOGIN --> LOAD
  LOAD --> STORES[init chat/view/palette stores]
  STORES --> INPUT[user message in composer]
  INPUT --> API[src/lib/services/api.ts POST chat]
  API --> RENDER[VirtualMessageList render updates]
  RENDER --> BG[background activity tracker]
  BG --> INPUT
```

### Źródła kodu

- [src/main.ts](../05_04_ui/src/main.ts)
- [src/App.svelte](../05_04_ui/src/App.svelte)
- [src/lib/services/api.ts](../05_04_ui/src/lib/services/api.ts)
- [src/lib/services/auth.ts](../05_04_ui/src/lib/services/auth.ts)
- [src/lib/stores/](../05_04_ui/src/lib/stores)
