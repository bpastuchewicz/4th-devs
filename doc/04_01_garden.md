# 04_01_garden - Dokumentacja techniczna

## Cel

Interaktywny agent REPL, który pracuje na sandboxowanym vault i wykonuje narzędzia przez pętlę tool-calling.

## Architektura logiczna

- CLI REPL z readline
- LazySandbox (sync lokalny -> wykonanie -> sync zwrotny)
- Agent loop z limitem tur
- Rejestr narzędzi (terminal, code mode, git push)

## Przepływ runtime

1. Użytkownik wpisuje wiadomość w REPL.
2. Wejście jest walidowane (isExitCommand).
3. Sandbox wykonuje syncLocalVaultNow.
4. Agent run uruchamia pętlę completion -> tool call.
5. Wynik narzędzia jest dopisywany do historii i następuje kolejna tura.
6. Po odpowiedzi końcowej następuje syncVaultBackNow.
7. Przy exit/quit proces kończy się z sandbox.destroy().

## Stan i persystencja

- Stan konwersacji utrzymywany w pamięci procesu.
- Stan plików utrzymywany w vault przez LazySandbox.
- Kontekst agenta i skilli ładowany z plików szablonów.

## Błędy i fallbacki

- Błąd narzędzia konwertowany do tekstowego outputu i zwracany do pętli.
- Brak narzędzia kończy się błędem dispatcher-a.
- Osiągnięcie limitu tur zwraca odpowiedź fallback (max turns reached).

## Diagram Mermaid

```mermaid
flowchart TD
  IDX["src/index.ts REPL"] --> ASK["readline question"]
  ASK --> EXIT{isExitCommand?}
  EXIT -->|tak| END["graceful shutdown + sandbox.destroy"]
  EXIT -->|nie| SYNC1["sandbox.syncLocalVaultNow"]
  SYNC1 --> RUN["src/agent/loop.ts run"]
  RUN --> LOOP{turn < MAX_TURNS}
  LOOP -->|tak| COMP["completion()"]
  COMP --> FC{function_call items?}
  FC -->|tak| EXEC["executeToolCall from tool registry"]
  EXEC --> APPEND["append tool output/error"]
  APPEND --> LOOP
  FC -->|nie| OUT["assistant response"]
  OUT --> SYNC2["sandbox.syncVaultBackNow"]
  SYNC2 --> ASK
  LOOP -->|nie| MAX["Max turns reached"]
```

## Źródła kodu

- [src/index.ts](../04_01_garden/src/index.ts)
- [src/agent/loop.ts](../04_01_garden/src/agent/loop.ts)
- [src/tools/index.ts](../04_01_garden/src/tools/index.ts)
- [src/sandbox/client.ts](../04_01_garden/src/sandbox/client.ts)
- [src/ai/client.ts](../04_01_garden/src/ai/client.ts)
