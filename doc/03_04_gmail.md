# 03_04 - Gmail

## 03_04_gmail

### Cel

Agent Gmail oparty o natywne narzędzia API, OAuth oraz kontrakty schematów (Zod), z pakietem ewaluacji Promptfoo.

### Główne komponenty

- OAuth bootstrap (`gmail:auth`) i trwały token refresh
- Narzędzia:
  - `gmail_search`
  - `gmail_read`
  - `gmail_send`
  - `gmail_modify`
  - `gmail_attachment`
- Discovery-first loop: search -> read -> act
- Envelope odpowiedzi narzędzi: `{ data, hint }`

### Zasady bezpieczeństwa wysyłki

- `gmail_send` działa z whitelistą (`GMAIL_SEND_WHITELIST`).
- Odbiorcy poza whitelistą trafiają do trybu draft zamiast natychmiastowej wysyłki.

### Diagram Mermaid

```mermaid
flowchart TD
  IDX[src/index.ts] --> SESSION[src/agent/index.ts createSession]
  SESSION --> EXEC[src/agent/runtime.ts executeAgent]
  EXEC --> LOOP{turn < maxTurns(8)}
  LOOP -->|tak| TURN[executeTurn -> model completion]
  TURN --> HAS{toolCalls?}
  HAS -->|tak| CALL[src/agent/tool-call.ts executeToolCall]
  CALL --> PARSE[parse JSON args]
  PARSE --> VALIDATE[validateSchema Zod]
  VALIDATE --> RUNH[runHandler]
  RUNH --> TRACE[append AgentToolTrace]
  TRACE --> LOOP
  HAS -->|nie| DONE[final assistant response]
  RUNH --> SEND{tool == gmail_send?}
  SEND -->|tak| WL{recipient in whitelist?}
  WL -->|tak| SENT[send]
  WL -->|nie| DRAFT[draft mode]
```

### Źródła kodu

- [src/index.ts](../03_04_gmail/src/index.ts)
- [src/agent/index.ts](../03_04_gmail/src/agent/index.ts)
- [src/agent/runtime.ts](../03_04_gmail/src/agent/runtime.ts)
- [src/agent/tool-call.ts](../03_04_gmail/src/agent/tool-call.ts)
- [src/tools/index.ts](../03_04_gmail/src/tools/index.ts)

### Ewalucje

- Mocked suites: bez live Gmail.
- Live suites: pełna walidacja na realnym koncie.
- Raporty HTML: `evals/promptfoo/results/`.

### Ryzyka

- Błędy konfiguracji OAuth blokują dostęp do skrzynki.
- Nadmierne uprawnienia OAuth zwiększają powierzchnię ryzyka.
- Bez whitelisty trudno kontrolować przypadkową wysyłkę.
