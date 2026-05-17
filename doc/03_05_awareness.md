# 03_05_awareness - Dokumentacja techniczna

## Cel

Agent świadomości kontekstowej z pamięcią trwałą, heurystykami odświeżania i delegacją scouta przez MCP.

## Mechanika

- Wstrzykiwanie aktualnej daty i czasu w każdej turze
- Odczyt profilu, środowiska i pamięci z workspace/
- Delegacja look_around do sub-agenta scout
- Snapshoty awareness odświeżane wg heurystyk:
  - bootstrap,
  - date-sensitive,
  - weather,
  - periodic.

## Przepływ runtime

1. runCli inicjuje runAwarenessTurn.
2. Metadata (now_iso, weekday, timezone) jest wstrzykiwana.
3. runResponsesLoop iteruje do maxTurns.
4. openai.responses.create z parallel_tool_calls=true.
5. executeTool(call) → load/save state w awareness-state.ts.
6. tool == look_around → MCP odczyt profilu/środowiska/pamięci.
7. Każdy wynik narzędzia dopisywany do trace jsonl.
8. Brak function calls → final answer.

## Stan i persystencja

- awareness-state.ts zarządza ładowaniem i zapisem snapshotów.
- Ślad wywołań utrwalany w trace jsonl.
- Profil, środowisko i pamięć w workspace/.

## Błędy i fallbacki

- Zbyt rzadkie odświeżanie snapshotów może dać nieaktualny kontekst.
- Zbyt częste odświeżanie podnosi koszt i latencję.

## Diagram Mermaid

```mermaid
flowchart TD
  CLI[src/index.ts runCli] --> TURN[src/core/agent.ts runAwarenessTurn]
  TURN --> META[inject metadata now_iso/weekday/timezone]
  META --> LOOP[src/core/responses-loop.ts runResponsesLoop]
  LOOP --> R{turn < maxTurns}
  R -->|tak| RESP[openai.responses.create parallel_tool_calls=true]
  RESP --> FC{function calls?}
  FC -->|tak| EXEC[executeTool(call)]
  EXEC --> STATE[src/core/awareness-state.ts load/save state]
  STATE --> TRACE[append jsonl trace]
  TRACE --> R
  FC -->|nie| FINAL[final answer]
  EXEC --> SCOUT{tool == look_around?}
  SCOUT -->|tak| MCP[MCP read profile/environment/memory]
  MCP --> STATE
```

## Źródła kodu

- [src/index.ts](../03_05_awareness/src/index.ts)
- [src/core/agent.ts](../03_05_awareness/src/core/agent.ts)
- [src/core/responses-loop.ts](../03_05_awareness/src/core/responses-loop.ts)
- [src/core/awareness-state.ts](../03_05_awareness/src/core/awareness-state.ts)
