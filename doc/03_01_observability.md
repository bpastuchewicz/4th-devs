# 03_01_observability - Dokumentacja techniczna

## Cel

Minimalny serwer agenta z pełnym śledzeniem przebiegu wywołań (tracing) przez Langfuse na granicy adaptera modelu.

## Główne komponenty

- Serwer HTTP (POST /api/chat, GET /api/sessions, GET /api/health)
- Agent konwersacyjny (Alice)
- Narzędzia: get_current_time, sum_numbers
- Warstwa telemetryczna Langfuse

## Przepływ runtime

1. Klient wysyła wiadomość do /api/chat.
2. Serwer uruchamia pętlę agenta (multi-turn).
3. Każda generacja i każde narzędzie jest logowane jako span.
4. Odpowiedź wraca do klienta.
5. Traces są flushowane po żądaniu i przy shutdown.

## Konfiguracja i runtime

- Domyślny port: 3000 (nadpisywalny przez PORT)
- Wymagany klucz: OPENAI_API_KEY lub OPENROUTER_API_KEY
- Opcjonalne: LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_BASE_URL

## Błędy i fallbacki

- Brak kluczy Langfuse nie blokuje działania, ale wyłącza observability.
- Przy nagłym zamknięciu procesu część trace może nie zostać wysłana.

## Diagram Mermaid

```mermaid
flowchart TD
    I[src/index.ts bootstrap] --> APP[src/app.ts createApp]
    APP --> API[/POST /api/chat/]
    API --> RUN[src/agent/run.ts runAgent]
    RUN --> LOOP{agentLoop turn < 8}
    LOOP -->|tak| C[complete()]
    C --> CALLS{toolCalls.length > 0}
    CALLS -->|tak| W1[withTool executeTool]
    W1 --> PUSH[append tool outputs to messages]
    PUSH --> LOOP
    CALLS -->|nie| DONE[final text or fallback]
    DONE --> TRACE[record usage + trace spans]
    TRACE --> FLUSH[flush traces]
    FLUSH --> RESP[HTTP response]
    LOOP -->|nie| ERR[Exceeded maximum turns]
```

## Źródła kodu

- [src/index.ts](../03_01_observability/src/index.ts)
- [src/app.ts](../03_01_observability/src/app.ts)
- [src/agent/run.ts](../03_01_observability/src/agent/run.ts)
- [src/agent/tools.ts](../03_01_observability/src/agent/tools.ts)
- [src/core/tracing/](../03_01_observability/src/core/tracing)
