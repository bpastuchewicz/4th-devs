# 04_05_review — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph agent_js["agent.js"]
    runAgent["runAgent()"]
  end
  subgraph api_js["api.js"]
    complete["complete()"]
    extractText["extractText()"]
  end
  subgraph config_js["config.js"]
    getApiConfig["getApiConfig()"]
    resolveModel["resolveModel()"]
  end
  subgraph markdown_js["markdown.js"]
    parseMarkdownBlocks["parseMarkdownBlocks()"]
    findQuoteRange["findQuoteRange()"]
    withIdentity["withIdentity()"]
    nodeToBlocks["nodeToBlocks()"]
    blockToMarkdown["blockToMarkdown()"]
    serializeMarkdownBlocks["serializeMarkdownBlocks()"]
    resolveCommentRange["resolveCommentRange()"]
    rawSlice["rawSlice()"]
    joinLines["joinLines()"]
    stripHeadingPrefix["stripHeadingPrefix()"]
    stripBlockquoteLines["stripBlockquoteLines()"]
    renderHtml["renderHtml()"]
    createBlock["createBlock()"]
    processListItems["processListItems()"]
  end
  subgraph review_engine_js["review-engine.js"]
    runReview["runReview()"]
    buildInstructions["buildInstructions()"]
    createSession["createSession()"]
    emitCommentAddedEvent["emitCommentAddedEvent()"]
    generateReviewSummary["generateReviewSummary()"]
    reviewSingleBlock["reviewSingleBlock()"]
    rejectReviewComment["rejectReviewComment()"]
    resolveReviewComment["resolveReviewComment()"]
    convertToSuggestion["convertToSuggestion()"]
    acceptReviewComment["acceptReviewComment()"]
    revertReviewComment["revertReviewComment()"]
    batchAcceptComments["batchAcceptComments()"]
    staleOpenCommentsForBlock["staleOpenCommentsForBlock()"]
    batchRejectComments["batchRejectComments()"]
    rerunReviewBlock["rerunReviewBlock()"]
    getDocumentMarkdown["getDocumentMarkdown()"]
    updateBlock["updateBlock()"]
    formatBlock["formatBlock()"]
    formatPromptContext["formatPromptContext()"]
    buildAtOnceInput["buildAtOnceInput()"]
    buildParagraphInput["buildParagraphInput()"]
    countBy["countBy()"]
    sortForSummary["sortForSummary()"]
    buildFallbackSummary["buildFallbackSummary()"]
    noop["noop()"]
    truncate["truncate()"]
    buildSummaryInput["buildSummaryInput()"]
  end
  subgraph store_js["store.js"]
    loadDocument["loadDocument()"]
    loadPrompt["loadPrompt()"]
    loadAgent["loadAgent()"]
    saveReview["saveReview()"]
    loadReview["loadReview()"]
    saveDocument["saveDocument()"]
    listDocuments["listDocuments()"]
    listPrompts["listPrompts()"]
    hydrateReviewForDocument["hydrateReviewForDocument()"]
    loadLatestReviewForDocument["loadLatestReviewForDocument()"]
    projectPathFromAbsolute["projectPathFromAbsolute()"]
    ensureWithin["ensureWithin()"]
    ensureWithinWorkspace["ensureWithinWorkspace()"]
    normalizePromptPath["normalizePromptPath()"]
    normalizeContextFiles["normalizeContextFiles()"]
    readMarkdown["readMarkdown()"]
    walkMarkdownFiles["walkMarkdownFiles()"]
    createSummary["createSummary()"]
    workspacePathFromAbsolute["workspacePathFromAbsolute()"]
    toPosix["toPosix()"]
  end
  subgraph tools_js["tools.js"]
    createReviewTools["createReviewTools()"]
    overlaps["overlaps()"]
  end
  subgraph server_js["server.js"]
    startServer["startServer()"]
    sendJson["sendJson()"]
    parseBody["parseBody()"]
    tryServeStatic["tryServeStatic()"]
    listen["listen()"]
    sendText["sendText()"]
  end
  runAgent --> complete
  complete --> extractText
  complete --> getApiConfig
  complete --> resolveModel
  extractText --> getApiConfig
  extractText --> resolveModel
  parseMarkdownBlocks --> findQuoteRange
  parseMarkdownBlocks --> withIdentity
  parseMarkdownBlocks --> nodeToBlocks
  parseMarkdownBlocks --> blockToMarkdown
  serializeMarkdownBlocks --> findQuoteRange
  serializeMarkdownBlocks --> blockToMarkdown
  resolveCommentRange --> findQuoteRange
  rawSlice --> joinLines
  rawSlice --> stripHeadingPrefix
  rawSlice --> stripBlockquoteLines
  rawSlice --> renderHtml
  rawSlice --> createBlock
  rawSlice --> processListItems
  joinLines --> rawSlice
  joinLines --> stripHeadingPrefix
  joinLines --> stripBlockquoteLines
  joinLines --> renderHtml
  joinLines --> createBlock
  joinLines --> processListItems
  stripHeadingPrefix --> rawSlice
  stripHeadingPrefix --> joinLines
  stripHeadingPrefix --> stripBlockquoteLines
  stripHeadingPrefix --> renderHtml
  stripHeadingPrefix --> createBlock
  stripHeadingPrefix --> processListItems
  stripBlockquoteLines --> rawSlice
  stripBlockquoteLines --> joinLines
  stripBlockquoteLines --> stripHeadingPrefix
  stripBlockquoteLines --> renderHtml
  stripBlockquoteLines --> createBlock
  stripBlockquoteLines --> processListItems
  stripBlockquoteLines --> nodeToBlocks
  renderHtml --> rawSlice
  renderHtml --> joinLines
  renderHtml --> stripHeadingPrefix
  renderHtml --> stripBlockquoteLines
  renderHtml --> createBlock
  renderHtml --> withIdentity
  renderHtml --> processListItems
  renderHtml --> nodeToBlocks
  createBlock --> rawSlice
  createBlock --> joinLines
  createBlock --> stripHeadingPrefix
  createBlock --> stripBlockquoteLines
  createBlock --> renderHtml
  createBlock --> withIdentity
  createBlock --> processListItems
  createBlock --> nodeToBlocks
  withIdentity --> rawSlice
  withIdentity --> joinLines
  withIdentity --> stripHeadingPrefix
  withIdentity --> stripBlockquoteLines
  withIdentity --> createBlock
  withIdentity --> processListItems
  withIdentity --> nodeToBlocks
  processListItems --> rawSlice
  processListItems --> joinLines
  processListItems --> stripHeadingPrefix
  processListItems --> stripBlockquoteLines
  processListItems --> createBlock
  processListItems --> withIdentity
  processListItems --> nodeToBlocks
  nodeToBlocks --> rawSlice
  nodeToBlocks --> joinLines
  nodeToBlocks --> stripHeadingPrefix
  nodeToBlocks --> stripBlockquoteLines
  nodeToBlocks --> createBlock
  nodeToBlocks --> withIdentity
  nodeToBlocks --> processListItems
  nodeToBlocks --> blockToMarkdown
  blockToMarkdown --> findQuoteRange
  runReview --> buildInstructions
  runReview --> createSession
  runReview --> emitCommentAddedEvent
  runReview --> generateReviewSummary
  runReview --> reviewSingleBlock
  runReview --> loadDocument
  runReview --> loadPrompt
  runReview --> loadAgent
  runReview --> saveReview
  runReview --> createReviewTools
  rejectReviewComment --> resolveCommentRange
  rejectReviewComment --> loadDocument
  rejectReviewComment --> saveReview
  rejectReviewComment --> loadReview
  resolveReviewComment --> resolveCommentRange
  resolveReviewComment --> loadDocument
  resolveReviewComment --> saveReview
  resolveReviewComment --> loadReview
  convertToSuggestion --> resolveCommentRange
  convertToSuggestion --> loadDocument
  convertToSuggestion --> saveDocument
  convertToSuggestion --> saveReview
  convertToSuggestion --> loadReview
  acceptReviewComment --> resolveCommentRange
  acceptReviewComment --> loadDocument
  acceptReviewComment --> saveDocument
  acceptReviewComment --> saveReview
  acceptReviewComment --> loadReview
  revertReviewComment --> resolveCommentRange
  revertReviewComment --> loadDocument
  revertReviewComment --> saveDocument
  revertReviewComment --> saveReview
  revertReviewComment --> loadReview
  batchAcceptComments --> resolveCommentRange
  batchAcceptComments --> reviewSingleBlock
  batchAcceptComments --> staleOpenCommentsForBlock
  batchAcceptComments --> loadDocument
  batchAcceptComments --> saveDocument
  batchAcceptComments --> loadPrompt
  batchAcceptComments --> loadAgent
  batchAcceptComments --> saveReview
  batchAcceptComments --> loadReview
  batchRejectComments --> serializeMarkdownBlocks
  batchRejectComments --> generateReviewSummary
  batchRejectComments --> reviewSingleBlock
  batchRejectComments --> staleOpenCommentsForBlock
  batchRejectComments --> loadDocument
  batchRejectComments --> saveDocument
  batchRejectComments --> loadPrompt
  batchRejectComments --> loadAgent
  batchRejectComments --> saveReview
  batchRejectComments --> loadReview
  rerunReviewBlock --> serializeMarkdownBlocks
  rerunReviewBlock --> generateReviewSummary
  rerunReviewBlock --> reviewSingleBlock
  rerunReviewBlock --> staleOpenCommentsForBlock
  rerunReviewBlock --> loadDocument
  rerunReviewBlock --> saveDocument
  rerunReviewBlock --> loadPrompt
  rerunReviewBlock --> loadAgent
  rerunReviewBlock --> saveReview
  rerunReviewBlock --> loadReview
  getDocumentMarkdown --> serializeMarkdownBlocks
  getDocumentMarkdown --> loadDocument
  getDocumentMarkdown --> saveDocument
  updateBlock --> loadDocument
  updateBlock --> saveDocument
  formatBlock --> formatPromptContext
  formatPromptContext --> formatBlock
  buildInstructions --> formatBlock
  buildInstructions --> formatPromptContext
  buildAtOnceInput --> formatBlock
  buildParagraphInput --> formatBlock
  buildParagraphInput --> countBy
  buildParagraphInput --> sortForSummary
  createSession --> countBy
  createSession --> sortForSummary
  buildFallbackSummary --> countBy
  buildFallbackSummary --> sortForSummary
  noop --> truncate
  noop --> countBy
  noop --> sortForSummary
  noop --> findQuoteRange
  noop --> overlaps
  emitCommentAddedEvent --> truncate
  emitCommentAddedEvent --> countBy
  emitCommentAddedEvent --> sortForSummary
  truncate --> countBy
  truncate --> sortForSummary
  countBy --> complete
  countBy --> buildFallbackSummary
  countBy --> truncate
  countBy --> sortForSummary
  sortForSummary --> complete
  sortForSummary --> buildFallbackSummary
  sortForSummary --> truncate
  sortForSummary --> countBy
  buildSummaryInput --> complete
  buildSummaryInput --> buildFallbackSummary
  buildSummaryInput --> truncate
  buildSummaryInput --> countBy
  buildSummaryInput --> sortForSummary
  generateReviewSummary --> runAgent
  generateReviewSummary --> complete
  generateReviewSummary --> buildInstructions
  generateReviewSummary --> buildParagraphInput
  generateReviewSummary --> createSession
  generateReviewSummary --> buildFallbackSummary
  generateReviewSummary --> buildSummaryInput
  generateReviewSummary --> loadDocument
  generateReviewSummary --> loadPrompt
  generateReviewSummary --> loadAgent
  generateReviewSummary --> createReviewTools
  reviewSingleBlock --> runAgent
  reviewSingleBlock --> buildInstructions
  reviewSingleBlock --> buildParagraphInput
  reviewSingleBlock --> createSession
  reviewSingleBlock --> emitCommentAddedEvent
  reviewSingleBlock --> loadDocument
  reviewSingleBlock --> loadPrompt
  reviewSingleBlock --> loadAgent
  reviewSingleBlock --> saveReview
  reviewSingleBlock --> createReviewTools
  staleOpenCommentsForBlock --> buildInstructions
  staleOpenCommentsForBlock --> createSession
  staleOpenCommentsForBlock --> emitCommentAddedEvent
  staleOpenCommentsForBlock --> generateReviewSummary
  staleOpenCommentsForBlock --> reviewSingleBlock
  staleOpenCommentsForBlock --> loadDocument
  staleOpenCommentsForBlock --> loadPrompt
  staleOpenCommentsForBlock --> loadAgent
  staleOpenCommentsForBlock --> saveReview
  startServer --> runReview
  startServer --> rerunReviewBlock
  startServer --> getDocumentMarkdown
  startServer --> updateBlock
  startServer --> sendJson
  startServer --> parseBody
  startServer --> tryServeStatic
  startServer --> listDocuments
  startServer --> listPrompts
  startServer --> loadDocument
  startServer --> hydrateReviewForDocument
  startServer --> loadLatestReviewForDocument
  sendJson --> tryServeStatic
  sendJson --> listen
  sendJson --> listDocuments
  sendJson --> listPrompts
  sendText --> sendJson
  sendText --> tryServeStatic
  sendText --> listen
  sendText --> listDocuments
  sendText --> listPrompts
  sendText --> loadDocument
  sendText --> hydrateReviewForDocument
  sendText --> loadLatestReviewForDocument
  parseBody --> sendJson
  parseBody --> tryServeStatic
  parseBody --> listen
  parseBody --> listDocuments
  parseBody --> listPrompts
  parseBody --> loadDocument
  parseBody --> hydrateReviewForDocument
  parseBody --> loadLatestReviewForDocument
  tryServeStatic --> getDocumentMarkdown
  tryServeStatic --> sendJson
  tryServeStatic --> listen
  tryServeStatic --> listDocuments
  tryServeStatic --> listPrompts
  tryServeStatic --> loadDocument
  tryServeStatic --> hydrateReviewForDocument
  tryServeStatic --> loadLatestReviewForDocument
  listen --> runReview
  listen --> getDocumentMarkdown
  listen --> sendJson
  listen --> parseBody
  listen --> tryServeStatic
  listen --> listDocuments
  listen --> listPrompts
  listen --> loadDocument
  listen --> hydrateReviewForDocument
  listen --> loadLatestReviewForDocument
  listDocuments --> parseMarkdownBlocks
  listDocuments --> serializeMarkdownBlocks
  listDocuments --> projectPathFromAbsolute
  listDocuments --> ensureWithin
  listDocuments --> ensureWithinWorkspace
  listDocuments --> normalizePromptPath
  listDocuments --> normalizeContextFiles
  listDocuments --> readMarkdown
  listDocuments --> walkMarkdownFiles
  listDocuments --> createSummary
  listPrompts --> parseMarkdownBlocks
  listPrompts --> serializeMarkdownBlocks
  listPrompts --> projectPathFromAbsolute
  listPrompts --> workspacePathFromAbsolute
  listPrompts --> ensureWithin
  listPrompts --> ensureWithinWorkspace
  listPrompts --> normalizePromptPath
  listPrompts --> normalizeContextFiles
  listPrompts --> readMarkdown
  listPrompts --> walkMarkdownFiles
  listPrompts --> createSummary
  loadDocument --> parseMarkdownBlocks
  loadDocument --> serializeMarkdownBlocks
  loadDocument --> projectPathFromAbsolute
  loadDocument --> workspacePathFromAbsolute
  loadDocument --> ensureWithin
  loadDocument --> ensureWithinWorkspace
  loadDocument --> normalizePromptPath
  loadDocument --> normalizeContextFiles
  loadDocument --> readMarkdown
  saveDocument --> serializeMarkdownBlocks
  saveDocument --> projectPathFromAbsolute
  saveDocument --> workspacePathFromAbsolute
  saveDocument --> ensureWithin
  saveDocument --> ensureWithinWorkspace
  saveDocument --> normalizePromptPath
  saveDocument --> normalizeContextFiles
  saveDocument --> readMarkdown
  loadPrompt --> projectPathFromAbsolute
  loadPrompt --> workspacePathFromAbsolute
  loadPrompt --> ensureWithin
  loadPrompt --> ensureWithinWorkspace
  loadPrompt --> normalizePromptPath
  loadPrompt --> normalizeContextFiles
  loadPrompt --> readMarkdown
  loadAgent --> readMarkdown
  toPosix --> projectPathFromAbsolute
  toPosix --> readMarkdown
  toPosix --> walkMarkdownFiles
  toPosix --> createSummary
  projectPathFromAbsolute --> toPosix
  projectPathFromAbsolute --> readMarkdown
  projectPathFromAbsolute --> walkMarkdownFiles
  projectPathFromAbsolute --> createSummary
  workspacePathFromAbsolute --> toPosix
  workspacePathFromAbsolute --> projectPathFromAbsolute
  workspacePathFromAbsolute --> readMarkdown
  workspacePathFromAbsolute --> walkMarkdownFiles
  workspacePathFromAbsolute --> createSummary
  ensureWithin --> toPosix
  ensureWithin --> projectPathFromAbsolute
  ensureWithin --> normalizeContextFiles
  ensureWithin --> readMarkdown
  ensureWithin --> walkMarkdownFiles
  ensureWithin --> createSummary
  ensureWithinWorkspace --> toPosix
  ensureWithinWorkspace --> projectPathFromAbsolute
  ensureWithinWorkspace --> normalizeContextFiles
  ensureWithinWorkspace --> readMarkdown
  ensureWithinWorkspace --> walkMarkdownFiles
  ensureWithinWorkspace --> createSummary
  normalizePromptPath --> toPosix
  normalizePromptPath --> projectPathFromAbsolute
  normalizePromptPath --> normalizeContextFiles
  normalizePromptPath --> readMarkdown
  normalizePromptPath --> walkMarkdownFiles
  normalizePromptPath --> createSummary
  normalizeContextFiles --> parseMarkdownBlocks
  normalizeContextFiles --> toPosix
  normalizeContextFiles --> projectPathFromAbsolute
  normalizeContextFiles --> ensureWithin
  normalizeContextFiles --> readMarkdown
  normalizeContextFiles --> walkMarkdownFiles
  normalizeContextFiles --> createSummary
  readMarkdown --> parseMarkdownBlocks
  readMarkdown --> projectPathFromAbsolute
  readMarkdown --> ensureWithin
  readMarkdown --> normalizeContextFiles
  readMarkdown --> walkMarkdownFiles
  readMarkdown --> createSummary
  walkMarkdownFiles --> parseMarkdownBlocks
  walkMarkdownFiles --> serializeMarkdownBlocks
  walkMarkdownFiles --> projectPathFromAbsolute
  walkMarkdownFiles --> ensureWithin
  walkMarkdownFiles --> normalizeContextFiles
  walkMarkdownFiles --> readMarkdown
  walkMarkdownFiles --> createSummary
  createSummary --> parseMarkdownBlocks
  createSummary --> serializeMarkdownBlocks
  createSummary --> projectPathFromAbsolute
  createSummary --> ensureWithin
  createSummary --> normalizePromptPath
  createSummary --> normalizeContextFiles
  createSummary --> readMarkdown
  createSummary --> walkMarkdownFiles
  createReviewTools --> findQuoteRange
  createReviewTools --> overlaps
  overlaps --> findQuoteRange
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `runAgent` | `agent.js` | `complete` |
| `complete` | `api.js` | `extractText`, `getApiConfig`, `resolveModel` |
| `extractText` | `api.js` | `getApiConfig`, `resolveModel` |
| `getApiConfig` | `config.js` |  |
| `resolveModel` | `config.js` |  |
| `parseMarkdownBlocks` | `markdown.js` | `findQuoteRange`, `withIdentity`, `nodeToBlocks`, `blockToMarkdown` |
| `serializeMarkdownBlocks` | `markdown.js` | `findQuoteRange`, `blockToMarkdown` |
| `findQuoteRange` | `markdown.js` |  |
| `resolveCommentRange` | `markdown.js` | `findQuoteRange` |
| `rawSlice` | `markdown.js` | `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `renderHtml`, `createBlock`, `processListItems` |
| `joinLines` | `markdown.js` | `rawSlice`, `stripHeadingPrefix`, `stripBlockquoteLines`, `renderHtml`, `createBlock`, `processListItems` |
| `stripHeadingPrefix` | `markdown.js` | `rawSlice`, `joinLines`, `stripBlockquoteLines`, `renderHtml`, `createBlock`, `processListItems` |
| `stripBlockquoteLines` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `renderHtml`, `createBlock`, `processListItems`, `nodeToBlocks` |
| `renderHtml` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `createBlock`, `withIdentity`, `processListItems`, `nodeToBlocks` |
| `createBlock` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `renderHtml`, `withIdentity`, `processListItems`, `nodeToBlocks` |
| `withIdentity` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `createBlock`, `processListItems`, `nodeToBlocks` |
| `processListItems` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `createBlock`, `withIdentity`, `nodeToBlocks` |
| `nodeToBlocks` | `markdown.js` | `rawSlice`, `joinLines`, `stripHeadingPrefix`, `stripBlockquoteLines`, `createBlock`, `withIdentity`, `processListItems`, `blockToMarkdown` |
| `blockToMarkdown` | `markdown.js` | `findQuoteRange` |
| `runReview` | `review-engine.js` | `buildInstructions`, `createSession`, `emitCommentAddedEvent`, `generateReviewSummary`, `reviewSingleBlock`, `loadDocument`, `loadPrompt`, `loadAgent`, `saveReview`, `createReviewTools` |
| `rejectReviewComment` | `review-engine.js` | `resolveCommentRange`, `loadDocument`, `saveReview`, `loadReview` |
| `resolveReviewComment` | `review-engine.js` | `resolveCommentRange`, `loadDocument`, `saveReview`, `loadReview` |
| `convertToSuggestion` | `review-engine.js` | `resolveCommentRange`, `loadDocument`, `saveDocument`, `saveReview`, `loadReview` |
| `acceptReviewComment` | `review-engine.js` | `resolveCommentRange`, `loadDocument`, `saveDocument`, `saveReview`, `loadReview` |
| `revertReviewComment` | `review-engine.js` | `resolveCommentRange`, `loadDocument`, `saveDocument`, `saveReview`, `loadReview` |
| `batchAcceptComments` | `review-engine.js` | `resolveCommentRange`, `reviewSingleBlock`, `staleOpenCommentsForBlock`, `loadDocument`, `saveDocument`, `loadPrompt`, `loadAgent`, `saveReview`, `loadReview` |
| `batchRejectComments` | `review-engine.js` | `serializeMarkdownBlocks`, `generateReviewSummary`, `reviewSingleBlock`, `staleOpenCommentsForBlock`, `loadDocument`, `saveDocument`, `loadPrompt`, `loadAgent`, `saveReview`, `loadReview` |
| `rerunReviewBlock` | `review-engine.js` | `serializeMarkdownBlocks`, `generateReviewSummary`, `reviewSingleBlock`, `staleOpenCommentsForBlock`, `loadDocument`, `saveDocument`, `loadPrompt`, `loadAgent`, `saveReview`, `loadReview` |
| `getDocumentMarkdown` | `review-engine.js` | `serializeMarkdownBlocks`, `loadDocument`, `saveDocument` |
| `updateBlock` | `review-engine.js` | `loadDocument`, `saveDocument` |
| `formatBlock` | `review-engine.js` | `formatPromptContext` |
| `formatPromptContext` | `review-engine.js` | `formatBlock` |
| `buildInstructions` | `review-engine.js` | `formatBlock`, `formatPromptContext` |
| `buildAtOnceInput` | `review-engine.js` | `formatBlock` |
| `buildParagraphInput` | `review-engine.js` | `formatBlock`, `countBy`, `sortForSummary` |
| `createSession` | `review-engine.js` | `countBy`, `sortForSummary` |
| `buildFallbackSummary` | `review-engine.js` | `countBy`, `sortForSummary` |
| `noop` | `review-engine.js` | `truncate`, `countBy`, `sortForSummary`, `findQuoteRange`, `overlaps` |
| `emitCommentAddedEvent` | `review-engine.js` | `truncate`, `countBy`, `sortForSummary` |
| `truncate` | `review-engine.js` | `countBy`, `sortForSummary` |
| `countBy` | `review-engine.js` | `complete`, `buildFallbackSummary`, `truncate`, `sortForSummary` |
| `sortForSummary` | `review-engine.js` | `complete`, `buildFallbackSummary`, `truncate`, `countBy` |
| `buildSummaryInput` | `review-engine.js` | `complete`, `buildFallbackSummary`, `truncate`, `countBy`, `sortForSummary` |
| `generateReviewSummary` | `review-engine.js` | `runAgent`, `complete`, `buildInstructions`, `buildParagraphInput`, `createSession`, `buildFallbackSummary`, `buildSummaryInput`, `loadDocument`, `loadPrompt`, `loadAgent`, `createReviewTools` |
| `reviewSingleBlock` | `review-engine.js` | `runAgent`, `buildInstructions`, `buildParagraphInput`, `createSession`, `emitCommentAddedEvent`, `loadDocument`, `loadPrompt`, `loadAgent`, `saveReview`, `createReviewTools` |
| `staleOpenCommentsForBlock` | `review-engine.js` | `buildInstructions`, `createSession`, `emitCommentAddedEvent`, `generateReviewSummary`, `reviewSingleBlock`, `loadDocument`, `loadPrompt`, `loadAgent`, `saveReview` |
| `startServer` | `server.js` | `runReview`, `rerunReviewBlock`, `getDocumentMarkdown`, `updateBlock`, `sendJson`, `parseBody`, `tryServeStatic`, `listDocuments`, `listPrompts`, `loadDocument`, `hydrateReviewForDocument`, `loadLatestReviewForDocument` |
| `sendJson` | `server.js` | `tryServeStatic`, `listen`, `listDocuments`, `listPrompts` |
| `sendText` | `server.js` | `sendJson`, `tryServeStatic`, `listen`, `listDocuments`, `listPrompts`, `loadDocument`, `hydrateReviewForDocument`, `loadLatestReviewForDocument` |
| `parseBody` | `server.js` | `sendJson`, `tryServeStatic`, `listen`, `listDocuments`, `listPrompts`, `loadDocument`, `hydrateReviewForDocument`, `loadLatestReviewForDocument` |
| `tryServeStatic` | `server.js` | `getDocumentMarkdown`, `sendJson`, `listen`, `listDocuments`, `listPrompts`, `loadDocument`, `hydrateReviewForDocument`, `loadLatestReviewForDocument` |
| `listen` | `server.js` | `runReview`, `getDocumentMarkdown`, `sendJson`, `parseBody`, `tryServeStatic`, `listDocuments`, `listPrompts`, `loadDocument`, `hydrateReviewForDocument`, `loadLatestReviewForDocument` |
| `listDocuments` | `store.js` | `parseMarkdownBlocks`, `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `ensureWithin`, `ensureWithinWorkspace`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `listPrompts` | `store.js` | `parseMarkdownBlocks`, `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `workspacePathFromAbsolute`, `ensureWithin`, `ensureWithinWorkspace`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `loadDocument` | `store.js` | `parseMarkdownBlocks`, `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `workspacePathFromAbsolute`, `ensureWithin`, `ensureWithinWorkspace`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown` |
| `saveDocument` | `store.js` | `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `workspacePathFromAbsolute`, `ensureWithin`, `ensureWithinWorkspace`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown` |
| `loadPrompt` | `store.js` | `projectPathFromAbsolute`, `workspacePathFromAbsolute`, `ensureWithin`, `ensureWithinWorkspace`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown` |
| `loadAgent` | `store.js` | `readMarkdown` |
| `saveReview` | `store.js` |  |
| `loadReview` | `store.js` |  |
| `hydrateReviewForDocument` | `store.js` |  |
| `loadLatestReviewForDocument` | `store.js` |  |
| `toPosix` | `store.js` | `projectPathFromAbsolute`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `projectPathFromAbsolute` | `store.js` | `toPosix`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `workspacePathFromAbsolute` | `store.js` | `toPosix`, `projectPathFromAbsolute`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `ensureWithin` | `store.js` | `toPosix`, `projectPathFromAbsolute`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `ensureWithinWorkspace` | `store.js` | `toPosix`, `projectPathFromAbsolute`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `normalizePromptPath` | `store.js` | `toPosix`, `projectPathFromAbsolute`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `normalizeContextFiles` | `store.js` | `parseMarkdownBlocks`, `toPosix`, `projectPathFromAbsolute`, `ensureWithin`, `readMarkdown`, `walkMarkdownFiles`, `createSummary` |
| `readMarkdown` | `store.js` | `parseMarkdownBlocks`, `projectPathFromAbsolute`, `ensureWithin`, `normalizeContextFiles`, `walkMarkdownFiles`, `createSummary` |
| `walkMarkdownFiles` | `store.js` | `parseMarkdownBlocks`, `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `ensureWithin`, `normalizeContextFiles`, `readMarkdown`, `createSummary` |
| `createSummary` | `store.js` | `parseMarkdownBlocks`, `serializeMarkdownBlocks`, `projectPathFromAbsolute`, `ensureWithin`, `normalizePromptPath`, `normalizeContextFiles`, `readMarkdown`, `walkMarkdownFiles` |
| `createReviewTools` | `tools.js` | `findQuoteRange`, `overlaps` |
| `overlaps` | `tools.js` | `findQuoteRange` |