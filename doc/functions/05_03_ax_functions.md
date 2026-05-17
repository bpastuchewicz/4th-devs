# 05_03_ax — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph classify["classify"]
    createClassifier["createClassifier()"]
    loadDemos["loadDemos()"]
    getReadyClassifier["getReadyClassifier()"]
    classifyEmail["classifyEmail()"]
  end
  subgraph logger["logger"]
    logDemosSource["logDemosSource()"]
    logStart["logStart()"]
    logEmail["logEmail()"]
    logDone["logDone()"]
    logTrainingStart["logTrainingStart()"]
    logOptimizationResult["logOptimizationResult()"]
    logValidationHeader["logValidationHeader()"]
    logValidationRow["logValidationRow()"]
    logValidationAvg["logValidationAvg()"]
    priorityIcon["priorityIcon()"]
    scoreIcon["scoreIcon()"]
    colorLabel["colorLabel()"]
  end
  subgraph index["index"]
    main["main()"]
  end
  createClassifier --> loadDemos
  createClassifier --> getReadyClassifier
  createClassifier --> logDemosSource
  loadDemos --> createClassifier
  loadDemos --> getReadyClassifier
  loadDemos --> logDemosSource
  getReadyClassifier --> createClassifier
  getReadyClassifier --> loadDemos
  getReadyClassifier --> logDemosSource
  main --> classifyEmail
  main --> logStart
  main --> logEmail
  main --> logDone
  main --> createClassifier
  main --> logTrainingStart
  main --> logOptimizationResult
  main --> logValidationHeader
  main --> logValidationRow
  main --> logValidationAvg
  logStart --> priorityIcon
  logStart --> scoreIcon
  logEmail --> priorityIcon
  logEmail --> scoreIcon
  logDone --> scoreIcon
  logDemosSource --> scoreIcon
  logTrainingStart --> scoreIcon
  logOptimizationResult --> scoreIcon
  logValidationHeader --> scoreIcon
  logValidationRow --> scoreIcon
  colorLabel --> priorityIcon
  colorLabel --> scoreIcon
  priorityIcon --> scoreIcon
  scoreIcon --> priorityIcon
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `createClassifier` | `classify.ts` | `loadDemos`, `getReadyClassifier`, `logDemosSource` |
| `classifyEmail` | `classify.ts` |  |
| `loadDemos` | `classify.ts` | `createClassifier`, `getReadyClassifier`, `logDemosSource` |
| `getReadyClassifier` | `classify.ts` | `createClassifier`, `loadDemos`, `logDemosSource` |
| `main` | `index.ts` | `classifyEmail`, `logStart`, `logEmail`, `logDone`, `createClassifier`, `logTrainingStart`, `logOptimizationResult`, `logValidationHeader`, `logValidationRow`, `logValidationAvg` |
| `logStart` | `logger.ts` | `priorityIcon`, `scoreIcon` |
| `logEmail` | `logger.ts` | `priorityIcon`, `scoreIcon` |
| `logDone` | `logger.ts` | `scoreIcon` |
| `logDemosSource` | `logger.ts` | `scoreIcon` |
| `logTrainingStart` | `logger.ts` | `scoreIcon` |
| `logOptimizationResult` | `logger.ts` | `scoreIcon` |
| `logValidationHeader` | `logger.ts` | `scoreIcon` |
| `logValidationRow` | `logger.ts` | `scoreIcon` |
| `logValidationAvg` | `logger.ts` |  |
| `colorLabel` | `logger.ts` | `priorityIcon`, `scoreIcon` |
| `priorityIcon` | `logger.ts` | `scoreIcon` |
| `scoreIcon` | `logger.ts` | `priorityIcon` |