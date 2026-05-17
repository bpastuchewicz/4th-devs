# 03_01 - Observability i Evals

## 03_01_observability

### Cel

Minimalny serwer agenta z pełnym śledzeniem przebiegu wywołań (tracing) przez Langfuse na granicy adaptera modelu.

### Główne komponenty

- Serwer HTTP (`POST /api/chat`, `GET /api/sessions`, `GET /api/health`)
- Agent konwersacyjny (Alice)
- Narzędzia: `get_current_time`, `sum_numbers`
- Warstwa telemetryczna Langfuse

### Przepływ żądania

1. Klient wysyła wiadomość do `/api/chat`.
2. Serwer uruchamia pętlę agenta (multi-turn).
3. Każda generacja i każde narzędzie jest logowane jako span.
4. Odpowiedź wraca do klienta.
5. Traces są flushowane po żądaniu i przy shutdown.

### Konfiguracja i runtime

- Domyślny port: `3000` (nadpisywalny przez `PORT`)
- Wymagany klucz: `OPENAI_API_KEY` lub `OPENROUTER_API_KEY`
- Opcjonalne: `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_BASE_URL`

### Ryzyka i uwagi operacyjne

- Brak kluczy Langfuse nie blokuje działania, ale wyłącza observability.
- Przy nagłym zamknięciu procesu część trace może nie zostać wysłana.

### Diagram Mermaid

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

### Źródła kodu

- [src/index.ts](../03_01_observability/src/index.ts)
- [src/app.ts](../03_01_observability/src/app.ts)
- [src/agent/run.ts](../03_01_observability/src/agent/run.ts)
- [src/agent/tools.ts](../03_01_observability/src/agent/tools.ts)
- [src/core/tracing/](../03_01_observability/src/core/tracing)

---

## 03_01_evals

### Cel

Rozszerzenie modułu observability o zautomatyzowane eksperymenty ewaluacyjne (tool-use i correctness), uruchamiane lokalnie i przez Langfuse datasets.

### Główne komponenty

- Ten sam serwer i agent co w `03_01_observability`
- Responses API
- Folder eksperymentów (`experiments/`)
- Evaluatory per-case i scoring run-level

### Przepływ ewaluacji

1. Skrypt eval tworzy lub aktualizuje dataset.
2. Dla każdej próbki uruchamiany jest scenariusz agenta.
3. Evaluator nadaje score dla próbki.
4. Wyniki agregowane są do poziomu eksperymentu.
5. Wynik i metryki trafiają do Langfuse.

### Konfiguracja i runtime

- Domyślny port serwera: `3010` (nadpisywalny przez `PORT`)
- Tryby uruchomienia:
  - serwer + demo klient,
  - standalone eksperymenty bez serwera.

### Ryzyka i uwagi operacyjne

- Niestabilność zestawu testowego może powodować dryf wyników.
- Zmiana promptów lub narzędzi wymaga aktualizacji oczekiwań evaluatorów.

### Diagram Mermaid

```mermaid
sequenceDiagram
    participant CLI as eval script
    participant DS as dataset
    participant AG as runAgent/agentLoop
    participant TC as executeTool
    participant EV as evaluators
    participant LF as langfuse experiment

    CLI->>DS: upsert test cases
    loop case in dataset
        CLI->>AG: execute scenario
        loop turn < maxTurns
            AG->>AG: complete()
            alt has tool calls
                AG->>TC: executeTool(call)
                TC-->>AG: tool result
            else no tool calls
                AG-->>CLI: final response
            end
        end
        CLI->>EV: score(item output)
        EV-->>CLI: score + reason
    end
    CLI->>LF: write per-item + run-level scores
```

### Źródła kodu

- [src/index.ts](../03_01_evals/src/index.ts)
- [src/app.ts](../03_01_evals/src/app.ts)
- [src/agent/run.ts](../03_01_evals/src/agent/run.ts)
- [src/agent/tools.ts](../03_01_evals/src/agent/tools.ts)
- [src/core/tracing/](../03_01_evals/src/core/tracing)

## Porównanie modułów 03_01

| Obszar | 03_01_observability | 03_01_evals |
|---|---|---|
| Tracing | Tak | Tak |
| Responses API | Nieobowiązkowe | Tak |
| Eksperymenty datasetowe | Nie | Tak |
| Standalone ocena bez serwera | Nie | Tak |
