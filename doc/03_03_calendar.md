# 03_03_calendar - Dokumentacja techniczna

## Cel

Agent kalendarzowy działający w dwóch etapach: dodawanie wydarzeń i obsługa webhooków notyfikacyjnych.

## Fazy procesu

1. Add events phase:
   - przyjmuje serię próśb planistycznych,
   - korzysta z kontekstu czasu i lokalizacji,
   - tworzy wydarzenia narzędziami kalendarza.
2. Notification phase:
   - odbiera payloady nadchodzących wydarzeń,
   - wysyła dokładnie jedną notyfikację na wydarzenie.

## Przepływ runtime

1. runAgent uruchamia add phase (max 12 tur).
2. Każda tura wywołuje complete() – jeśli są toolCalls, handler je wykonuje.
3. Po zakończeniu add phase zebrane wyniki są przekazywane do notification phase.
4. Notification phase (max 12 tur) obsługuje send_notification per wydarzenie.
5. Brak toolCalls kończy daną fazę.

## Błędy i fallbacki

- Duplikaty webhooków wymagają idempotencji po stronie powiadomień.
- Błędy stref czasowych wpływają na poprawność terminów.

## Diagram Mermaid

```mermaid
flowchart TD
    IDX[src/index.ts runAgent] --> ADD[src/agent.ts runToolLoop add phase]
    ADD --> ALOOP{turn < 12}
    ALOOP -->|tak| ACOMP[complete()]
    ACOMP --> ACALL{toolCalls?}
    ACALL -->|tak| AEXEC[tool.handler(args)]
    AEXEC --> AAPPEND[append tool outputs]
    AAPPEND --> ALOOP
    ACALL -->|nie| ADONE[phase output]
    ADONE --> NOTIF[src/agent.ts runToolLoop notification phase]
    NOTIF --> NLOOP{turn < 12}
    NLOOP -->|tak| NCOMP[complete()]
    NCOMP --> NCALL{toolCalls?}
    NCALL -->|tak| NEXEC[send_notification handler]
    NEXEC --> NLOOP
    NCALL -->|nie| NDONE[final notifications]
```

## Źródła kodu

- [src/index.ts](../03_03_calendar/src/index.ts)
- [src/agent.ts](../03_03_calendar/src/agent.ts)
- [src/tools/index.ts](../03_03_calendar/src/tools/index.ts)
- [src/data/calendar.ts](../03_03_calendar/src/data/calendar.ts)
