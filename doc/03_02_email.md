# 03_02_email - Dokumentacja techniczna

## Cel

Dwufazowy system obsługi skrzynki: triage (etykietowanie i decyzja) oraz draft (izolowane tworzenie odpowiedzi).

## Fazy

1. Triage:
   - analiza nieprzeczytanych maili,
   - konsultacja bazy wiedzy,
   - nadanie labeli i wyznaczenie pozycji do odpowiedzi.
2. Draft:
   - uruchamianie izolowanych sesji per reply plan,
   - scope bazy wiedzy ograniczony do konta nadawcy,
   - wygenerowanie draftu bez dostępu do narzędzi.

## Przepływ runtime

1. runAgent uruchamia fazę triage.
2. Pętla triage (max 12 tur) analizuje maile przez narzędzia email/KB.
3. Narzędzie mark_for_reply zbiera ReplyPlan[].
4. Dla każdego ReplyPlan baza wiedzy jest zawężana do konta nadawcy.
5. Uruchamiana jest izolowana sesja draft.
6. Po sesji KB jest odblokowywana.
7. Drafty są agregowane do wyniku końcowego.

## Błędy i fallbacki

- Niewłaściwe scope KB może powodować wyciek kontekstu między nadawcami.
- Brak walidacji języka/tonu może obniżyć jakość draftów.

## Diagram Mermaid

```mermaid
flowchart TD
    MAIN[src/index.ts runAgent] --> TRI[src/phases/triage.ts runTriagePhase]
    TRI --> TLOOP{triage turn < 12}
    TLOOP -->|tak| TCOMP[completion + tool calls]
    TCOMP --> THAS{tool calls?}
    THAS -->|tak| TEXEC[run email/KB tools]
    TEXEC --> MARK[mark_for_reply -> ReplyPlan[]]
    MARK --> TLOOP
    THAS -->|nie| PLANS[collect reply plans]
    PLANS --> FOR[for each ReplyPlan]
    FOR --> LOCK[lockKnowledgeToAccount]
    LOCK --> DRAFT[src/phases/draft.ts runDraftSession]
    DRAFT --> UNLOCK[unlockKnowledge]
    UNLOCK --> OUT[aggregate drafts]
```

## Źródła kodu

- [src/index.ts](../03_02_email/src/index.ts)
- [src/agent.ts](../03_02_email/src/agent.ts)
- [src/phases/triage.ts](../03_02_email/src/phases/triage.ts)
- [src/phases/draft.ts](../03_02_email/src/phases/draft.ts)
- [src/tools/index.ts](../03_02_email/src/tools/index.ts)
- [src/knowledge/access-lock.ts](../03_02_email/src/knowledge/access-lock.ts)
