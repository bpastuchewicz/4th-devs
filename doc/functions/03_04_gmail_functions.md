# 03_04_gmail — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph agent_index["agent/index"]
    runAgent["runAgent()"]
    runAgentEval["runAgentEval()"]
  end
  subgraph agent_runtime["agent/runtime"]
    executeAgent["executeAgent()"]
    createRuntimeState["createRuntimeState()"]
    executeTurn["executeTurn()"]
    appendModelOutput["appendModelOutput()"]
    appendToolExecution["appendToolExecution()"]
  end
  subgraph agent_tool_call["agent/tool-call"]
    asResponseTools["asResponseTools()"]
    createToolRegistry["createToolRegistry()"]
    executeToolCall["executeToolCall()"]
    createToolTrace["createToolTrace()"]
    parseJson["parseJson()"]
    validateSchema["validateSchema()"]
    toErrorOutput["toErrorOutput()"]
    runHandler["runHandler()"]
  end
  subgraph prompt["prompt"]
    buildSystemPrompt["buildSystemPrompt()"]
  end
  subgraph core_completion["core/completion"]
    complete["complete()"]
    isReasoningModel["isReasoningModel()"]
    extractText["extractText()"]
    extractToolCalls["extractToolCalls()"]
  end
  subgraph hints_index["hints/index"]
    buildErrorHint["buildErrorHint()"]
    proposeAction["proposeAction()"]
    clampConfidence["clampConfidence()"]
    parseHttpStatus["parseHttpStatus()"]
    includesAny["includesAny()"]
    createHint["createHint()"]
    classifyErrorReason["classifyErrorReason()"]
    errorSummary["errorSummary()"]
    errorRecovery["errorRecovery()"]
  end
  subgraph auth["auth"]
    main["main()"]
  end
  subgraph gmail_auth["gmail/auth"]
    authenticateGmail["authenticateGmail()"]
    getGmailAuthClient["getGmailAuthClient()"]
    loadSavedAuthClient["loadSavedAuthClient()"]
    runInteractiveAuth["runInteractiveAuth()"]
    resolveCredentialsPath["resolveCredentialsPath()"]
    readClientSecrets["readClientSecrets()"]
    saveRefreshToken["saveRefreshToken()"]
  end
  subgraph agent_types["agent/types"]
    createSession["createSession()"]
  end
  subgraph evals_run_agent_eval["evals/run-agent-eval"]
    loadSessionHistory["loadSessionHistory()"]
    saveSessionHistory["saveSessionHistory()"]
    parseCliOptions["parseCliOptions()"]
    normalizeMaxTurns["normalizeMaxTurns()"]
    readStdinText["readStdinText()"]
    resolveSessionDir["resolveSessionDir()"]
    getSessionPath["getSessionPath()"]
  end
  subgraph scripts_probe_gmail_api_shapes["scripts/probe-gmail-api-shapes"]
    summarize["summarize()"]
    probeQuery["probeQuery()"]
    nowStamp["nowStamp()"]
    normalizeBoundedInt["normalizeBoundedInt()"]
    parseCsvQueries["parseCsvQueries()"]
    safeString["safeString()"]
    sanitizeForOutput["sanitizeForOutput()"]
    primitiveType["primitiveType()"]
    describeShape["describeShape()"]
    collectAttachmentRefs["collectAttachmentRefs()"]
    probeMessage["probeMessage()"]
  end
  subgraph config["config"]
    parseCsv["parseCsv()"]
    parseBoolean["parseBoolean()"]
  end
  subgraph gmail_client["gmail/client"]
    searchMessages["searchMessages()"]
    createGmailClient["createGmailClient()"]
    getHeaderValue["getHeaderValue()"]
    toTimestamp["toTimestamp()"]
    getLabelMap["getLabelMap()"]
    toSearchItem["toSearchItem()"]
    toReadMessage["toReadMessage()"]
    isNotFoundError["isNotFoundError()"]
    ensureReplyPrefix["ensureReplyPrefix()"]
    ensureForwardPrefix["ensureForwardPrefix()"]
    buildForwardBody["buildForwardBody()"]
    readMessages["readMessages()"]
    uniqueStrings["uniqueStrings()"]
    normalizeRecipientEmail["normalizeRecipientEmail()"]
    getEffectiveSendWhitelist["getEffectiveSendWhitelist()"]
    sendMessage["sendMessage()"]
    extractBodyText["extractBodyText()"]
    modifyMailboxItem["modifyMailboxItem()"]
    resolveLabels["resolveLabels()"]
    resolveThreadLabels["resolveThreadLabels()"]
    resolveLabelId["resolveLabelId()"]
    normalizeLabelName["normalizeLabelName()"]
    downloadAttachment["downloadAttachment()"]
    toBase64["toBase64()"]
    findAttachmentPart["findAttachmentPart()"]
    splitRecipients["splitRecipients()"]
    decodeBase64UrlUtf8["decodeBase64UrlUtf8()"]
    findPartBodyData["findPartBodyData()"]
    collectRecipients["collectRecipients()"]
    stripHtml["stripHtml()"]
    toIso["toIso()"]
    fetchLabelMap["fetchLabelMap()"]
    collectAttachments["collectAttachments()"]
    encodeMimeHeader["encodeMimeHeader()"]
    encodeBodyBase64["encodeBodyBase64()"]
    getAuthorizedUserEmail["getAuthorizedUserEmail()"]
    toRawMessage["toRawMessage()"]
  end
  subgraph gmail_mock_client["gmail/mock-client"]
    getMessage["getMessage()"]
    parseCursorOffset["parseCursorOffset()"]
    parseQuery["parseQuery()"]
    matchesQuery["matchesQuery()"]
    keywordScore["keywordScore()"]
    nextMockId["nextMockId()"]
    getThreadMessages["getThreadMessages()"]
    applyActionToLabels["applyActionToLabels()"]
    daysAgo["daysAgo()"]
    attachment["attachment()"]
    attachmentSummaries["attachmentSummaries()"]
    makeInitialMessages["makeInitialMessages()"]
    createState["createState()"]
    resolveFolderLabel["resolveFolderLabel()"]
  end
  subgraph hints_tool_hints["hints/tool-hints"]
    buildSearchHint["buildSearchHint()"]
    shortQuery["shortQuery()"]
    broadenQuery["broadenQuery()"]
    findFirstAttachment["findFirstAttachment()"]
    buildReadHint["buildReadHint()"]
    deriveMailboxState["deriveMailboxState()"]
    buildSendHint["buildSendHint()"]
    formatBytes["formatBytes()"]
    buildModifyHint["buildModifyHint()"]
    buildAttachmentHint["buildAttachmentHint()"]
  end
  subgraph tools_gmail_attachment["tools/gmail-attachment"]
    uploadFile["uploadFile()"]
  end
  subgraph tools_gmail_read["tools/gmail-read"]
    toSummary["toSummary()"]
  end
  subgraph tools_gmail_send["tools/gmail-send"]
    nonEmptyStrings["nonEmptyStrings()"]
  end
  runAgent --> executeAgent
  runAgentEval --> executeAgent
  executeAgent --> createRuntimeState
  executeAgent --> executeTurn
  executeAgent --> asResponseTools
  executeAgent --> createToolRegistry
  executeAgent --> buildSystemPrompt
  createRuntimeState --> appendModelOutput
  createRuntimeState --> appendToolExecution
  createRuntimeState --> executeTurn
  createRuntimeState --> asResponseTools
  createRuntimeState --> createToolRegistry
  createRuntimeState --> executeToolCall
  createRuntimeState --> complete
  createRuntimeState --> buildSystemPrompt
  appendModelOutput --> createRuntimeState
  appendModelOutput --> appendToolExecution
  appendModelOutput --> executeTurn
  appendModelOutput --> asResponseTools
  appendModelOutput --> createToolRegistry
  appendModelOutput --> executeToolCall
  appendModelOutput --> complete
  appendModelOutput --> buildSystemPrompt
  appendToolExecution --> createRuntimeState
  appendToolExecution --> appendModelOutput
  appendToolExecution --> executeTurn
  appendToolExecution --> asResponseTools
  appendToolExecution --> createToolRegistry
  appendToolExecution --> executeToolCall
  appendToolExecution --> complete
  appendToolExecution --> buildSystemPrompt
  executeTurn --> createRuntimeState
  executeTurn --> appendModelOutput
  executeTurn --> appendToolExecution
  executeTurn --> asResponseTools
  executeTurn --> createToolRegistry
  executeTurn --> executeToolCall
  executeTurn --> complete
  executeTurn --> buildSystemPrompt
  asResponseTools --> createToolTrace
  asResponseTools --> parseJson
  asResponseTools --> validateSchema
  asResponseTools --> toErrorOutput
  asResponseTools --> buildErrorHint
  createToolRegistry --> createToolTrace
  createToolRegistry --> parseJson
  createToolRegistry --> validateSchema
  createToolRegistry --> runHandler
  createToolRegistry --> toErrorOutput
  createToolRegistry --> buildErrorHint
  executeToolCall --> createToolTrace
  executeToolCall --> parseJson
  executeToolCall --> validateSchema
  executeToolCall --> runHandler
  executeToolCall --> toErrorOutput
  createToolTrace --> parseJson
  createToolTrace --> validateSchema
  createToolTrace --> runHandler
  createToolTrace --> toErrorOutput
  createToolTrace --> buildErrorHint
  parseJson --> createToolTrace
  parseJson --> validateSchema
  parseJson --> runHandler
  parseJson --> toErrorOutput
  parseJson --> buildErrorHint
  validateSchema --> createToolTrace
  validateSchema --> parseJson
  validateSchema --> runHandler
  validateSchema --> toErrorOutput
  validateSchema --> buildErrorHint
  runHandler --> createToolTrace
  runHandler --> parseJson
  runHandler --> validateSchema
  runHandler --> toErrorOutput
  runHandler --> buildErrorHint
  toErrorOutput --> createToolTrace
  toErrorOutput --> parseJson
  toErrorOutput --> validateSchema
  toErrorOutput --> runHandler
  toErrorOutput --> buildErrorHint
  main --> authenticateGmail
  main --> runAgentEval
  main --> createSession
  main --> loadSessionHistory
  main --> saveSessionHistory
  main --> parseCliOptions
  main --> runAgent
  main --> getGmailAuthClient
  main --> summarize
  main --> probeQuery
  main --> nowStamp
  parseCsv --> parseBoolean
  parseBoolean --> parseCsv
  complete --> isReasoningModel
  complete --> extractText
  complete --> extractToolCalls
  isReasoningModel --> extractText
  isReasoningModel --> extractToolCalls
  extractText --> isReasoningModel
  extractText --> extractToolCalls
  extractToolCalls --> isReasoningModel
  extractToolCalls --> extractText
  normalizeMaxTurns --> runAgentEval
  normalizeMaxTurns --> createSession
  normalizeMaxTurns --> readStdinText
  normalizeMaxTurns --> resolveSessionDir
  normalizeMaxTurns --> getSessionPath
  normalizeMaxTurns --> loadSessionHistory
  normalizeMaxTurns --> parseCliOptions
  readStdinText --> runAgentEval
  readStdinText --> createSession
  readStdinText --> normalizeMaxTurns
  readStdinText --> resolveSessionDir
  readStdinText --> getSessionPath
  readStdinText --> loadSessionHistory
  readStdinText --> saveSessionHistory
  readStdinText --> parseCliOptions
  resolveSessionDir --> runAgentEval
  resolveSessionDir --> createSession
  resolveSessionDir --> normalizeMaxTurns
  resolveSessionDir --> readStdinText
  resolveSessionDir --> getSessionPath
  resolveSessionDir --> loadSessionHistory
  resolveSessionDir --> saveSessionHistory
  resolveSessionDir --> parseCliOptions
  getSessionPath --> runAgentEval
  getSessionPath --> createSession
  getSessionPath --> main
  getSessionPath --> normalizeMaxTurns
  getSessionPath --> readStdinText
  getSessionPath --> resolveSessionDir
  getSessionPath --> loadSessionHistory
  getSessionPath --> saveSessionHistory
  getSessionPath --> parseCliOptions
  loadSessionHistory --> runAgentEval
  loadSessionHistory --> createSession
  loadSessionHistory --> main
  loadSessionHistory --> normalizeMaxTurns
  loadSessionHistory --> readStdinText
  loadSessionHistory --> resolveSessionDir
  loadSessionHistory --> getSessionPath
  loadSessionHistory --> saveSessionHistory
  loadSessionHistory --> parseCliOptions
  saveSessionHistory --> runAgentEval
  saveSessionHistory --> createSession
  saveSessionHistory --> main
  saveSessionHistory --> normalizeMaxTurns
  saveSessionHistory --> readStdinText
  saveSessionHistory --> resolveSessionDir
  saveSessionHistory --> getSessionPath
  saveSessionHistory --> loadSessionHistory
  saveSessionHistory --> parseCliOptions
  parseCliOptions --> runAgentEval
  parseCliOptions --> createSession
  parseCliOptions --> main
  parseCliOptions --> normalizeMaxTurns
  parseCliOptions --> readStdinText
  parseCliOptions --> resolveSessionDir
  parseCliOptions --> loadSessionHistory
  parseCliOptions --> saveSessionHistory
  parseCliOptions --> normalizeBoundedInt
  parseCliOptions --> parseCsvQueries
  parseCliOptions --> safeString
  parseCliOptions --> sanitizeForOutput
  parseCliOptions --> primitiveType
  parseCliOptions --> describeShape
  getGmailAuthClient --> loadSavedAuthClient
  getGmailAuthClient --> runInteractiveAuth
  authenticateGmail --> runInteractiveAuth
  resolveCredentialsPath --> readClientSecrets
  resolveCredentialsPath --> saveRefreshToken
  readClientSecrets --> resolveCredentialsPath
  readClientSecrets --> loadSavedAuthClient
  readClientSecrets --> saveRefreshToken
  readClientSecrets --> runInteractiveAuth
  loadSavedAuthClient --> resolveCredentialsPath
  loadSavedAuthClient --> readClientSecrets
  loadSavedAuthClient --> saveRefreshToken
  loadSavedAuthClient --> runInteractiveAuth
  saveRefreshToken --> resolveCredentialsPath
  saveRefreshToken --> readClientSecrets
  saveRefreshToken --> loadSavedAuthClient
  saveRefreshToken --> runInteractiveAuth
  runInteractiveAuth --> resolveCredentialsPath
  runInteractiveAuth --> loadSavedAuthClient
  runInteractiveAuth --> saveRefreshToken
  searchMessages --> createGmailClient
  searchMessages --> getHeaderValue
  searchMessages --> toTimestamp
  searchMessages --> getLabelMap
  searchMessages --> toSearchItem
  searchMessages --> toReadMessage
  searchMessages --> isNotFoundError
  searchMessages --> ensureReplyPrefix
  searchMessages --> ensureForwardPrefix
  searchMessages --> buildForwardBody
  searchMessages --> getMessage
  searchMessages --> parseCursorOffset
  searchMessages --> parseQuery
  searchMessages --> matchesQuery
  searchMessages --> keywordScore
  readMessages --> createGmailClient
  readMessages --> getHeaderValue
  readMessages --> toTimestamp
  readMessages --> getLabelMap
  readMessages --> toReadMessage
  readMessages --> ensureReplyPrefix
  readMessages --> isNotFoundError
  readMessages --> uniqueStrings
  readMessages --> ensureForwardPrefix
  readMessages --> buildForwardBody
  readMessages --> normalizeRecipientEmail
  readMessages --> getEffectiveSendWhitelist
  readMessages --> getMessage
  readMessages --> nextMockId
  sendMessage --> createGmailClient
  sendMessage --> getHeaderValue
  sendMessage --> uniqueStrings
  sendMessage --> extractBodyText
  sendMessage --> ensureReplyPrefix
  sendMessage --> ensureForwardPrefix
  sendMessage --> buildForwardBody
  sendMessage --> getEffectiveSendWhitelist
  sendMessage --> normalizeRecipientEmail
  sendMessage --> getMessage
  sendMessage --> nextMockId
  modifyMailboxItem --> createGmailClient
  modifyMailboxItem --> getLabelMap
  modifyMailboxItem --> resolveLabels
  modifyMailboxItem --> resolveThreadLabels
  modifyMailboxItem --> resolveLabelId
  modifyMailboxItem --> uniqueStrings
  modifyMailboxItem --> normalizeLabelName
  modifyMailboxItem --> getMessage
  modifyMailboxItem --> getThreadMessages
  modifyMailboxItem --> applyActionToLabels
  downloadAttachment --> createGmailClient
  downloadAttachment --> toBase64
  downloadAttachment --> findAttachmentPart
  downloadAttachment --> getMessage
  createGmailClient --> getGmailAuthClient
  createGmailClient --> getHeaderValue
  createGmailClient --> splitRecipients
  createGmailClient --> uniqueStrings
  createGmailClient --> toBase64
  getHeaderValue --> splitRecipients
  getHeaderValue --> uniqueStrings
  getHeaderValue --> toBase64
  getHeaderValue --> decodeBase64UrlUtf8
  splitRecipients --> getHeaderValue
  splitRecipients --> uniqueStrings
  splitRecipients --> toBase64
  splitRecipients --> decodeBase64UrlUtf8
  splitRecipients --> findPartBodyData
  uniqueStrings --> getHeaderValue
  uniqueStrings --> splitRecipients
  uniqueStrings --> toBase64
  uniqueStrings --> decodeBase64UrlUtf8
  uniqueStrings --> findPartBodyData
  uniqueStrings --> daysAgo
  uniqueStrings --> attachment
  collectRecipients --> getHeaderValue
  collectRecipients --> splitRecipients
  collectRecipients --> uniqueStrings
  collectRecipients --> toBase64
  collectRecipients --> decodeBase64UrlUtf8
  collectRecipients --> stripHtml
  collectRecipients --> findPartBodyData
  toIso --> getHeaderValue
  toIso --> toBase64
  toIso --> decodeBase64UrlUtf8
  toIso --> stripHtml
  toIso --> findPartBodyData
  toTimestamp --> getHeaderValue
  toTimestamp --> toBase64
  toTimestamp --> decodeBase64UrlUtf8
  toTimestamp --> stripHtml
  toTimestamp --> findPartBodyData
  normalizeLabelName --> toBase64
  normalizeLabelName --> decodeBase64UrlUtf8
  normalizeLabelName --> stripHtml
  normalizeLabelName --> findPartBodyData
  normalizeLabelName --> daysAgo
  normalizeLabelName --> attachment
  toBase64 --> decodeBase64UrlUtf8
  toBase64 --> stripHtml
  toBase64 --> findPartBodyData
  toBase64 --> findAttachmentPart
  toBase64 --> daysAgo
  toBase64 --> attachment
  decodeBase64UrlUtf8 --> toBase64
  decodeBase64UrlUtf8 --> stripHtml
  decodeBase64UrlUtf8 --> findPartBodyData
  decodeBase64UrlUtf8 --> findAttachmentPart
  stripHtml --> decodeBase64UrlUtf8
  stripHtml --> findPartBodyData
  stripHtml --> findAttachmentPart
  findPartBodyData --> normalizeLabelName
  findPartBodyData --> decodeBase64UrlUtf8
  findPartBodyData --> stripHtml
  findPartBodyData --> findAttachmentPart
  findPartBodyData --> fetchLabelMap
  extractBodyText --> normalizeLabelName
  extractBodyText --> decodeBase64UrlUtf8
  extractBodyText --> stripHtml
  extractBodyText --> findPartBodyData
  extractBodyText --> findAttachmentPart
  extractBodyText --> fetchLabelMap
  extractBodyText --> resolveLabels
  collectAttachments --> normalizeLabelName
  collectAttachments --> findAttachmentPart
  collectAttachments --> fetchLabelMap
  collectAttachments --> resolveLabels
  findAttachmentPart --> getHeaderValue
  findAttachmentPart --> collectRecipients
  findAttachmentPart --> toIso
  findAttachmentPart --> normalizeLabelName
  findAttachmentPart --> collectAttachments
  findAttachmentPart --> fetchLabelMap
  findAttachmentPart --> resolveLabels
  fetchLabelMap --> getHeaderValue
  fetchLabelMap --> collectRecipients
  fetchLabelMap --> toIso
  fetchLabelMap --> normalizeLabelName
  fetchLabelMap --> collectAttachments
  fetchLabelMap --> resolveLabels
  getLabelMap --> getHeaderValue
  getLabelMap --> collectRecipients
  getLabelMap --> toIso
  getLabelMap --> normalizeLabelName
  getLabelMap --> extractBodyText
  getLabelMap --> collectAttachments
  getLabelMap --> fetchLabelMap
  getLabelMap --> resolveLabels
  resolveLabels --> getHeaderValue
  resolveLabels --> collectRecipients
  resolveLabels --> toIso
  resolveLabels --> normalizeLabelName
  resolveLabels --> extractBodyText
  resolveLabels --> collectAttachments
  resolveThreadLabels --> getHeaderValue
  resolveThreadLabels --> collectRecipients
  resolveThreadLabels --> toIso
  resolveThreadLabels --> normalizeLabelName
  resolveThreadLabels --> extractBodyText
  resolveThreadLabels --> collectAttachments
  resolveThreadLabels --> resolveLabels
  resolveLabelId --> getHeaderValue
  resolveLabelId --> collectRecipients
  resolveLabelId --> toIso
  resolveLabelId --> normalizeLabelName
  resolveLabelId --> extractBodyText
  resolveLabelId --> collectAttachments
  resolveLabelId --> resolveLabels
  resolveLabelId --> encodeMimeHeader
  resolveLabelId --> uniqueStrings
  resolveLabelId --> toSearchItem
  resolveLabelId --> toReadMessage
  resolveLabelId --> parseCursorOffset
  resolveLabelId --> parseQuery
  resolveLabelId --> matchesQuery
  resolveLabelId --> keywordScore
  toSearchItem --> getHeaderValue
  toSearchItem --> collectRecipients
  toSearchItem --> toIso
  toSearchItem --> extractBodyText
  toSearchItem --> collectAttachments
  toSearchItem --> resolveLabels
  toSearchItem --> encodeMimeHeader
  toSearchItem --> encodeBodyBase64
  toSearchItem --> normalizeLabelName
  toSearchItem --> attachmentSummaries
  toReadMessage --> getHeaderValue
  toReadMessage --> collectRecipients
  toReadMessage --> toIso
  toReadMessage --> extractBodyText
  toReadMessage --> collectAttachments
  toReadMessage --> resolveLabels
  toReadMessage --> encodeMimeHeader
  toReadMessage --> encodeBodyBase64
  toReadMessage --> normalizeLabelName
  toReadMessage --> attachmentSummaries
  ensureReplyPrefix --> getHeaderValue
  ensureReplyPrefix --> encodeMimeHeader
  ensureReplyPrefix --> encodeBodyBase64
  ensureReplyPrefix --> uniqueStrings
  ensureReplyPrefix --> toSearchItem
  ensureReplyPrefix --> toReadMessage
  ensureReplyPrefix --> parseCursorOffset
  ensureReplyPrefix --> parseQuery
  ensureReplyPrefix --> matchesQuery
  ensureReplyPrefix --> keywordScore
  ensureForwardPrefix --> getHeaderValue
  ensureForwardPrefix --> encodeMimeHeader
  ensureForwardPrefix --> encodeBodyBase64
  ensureForwardPrefix --> uniqueStrings
  ensureForwardPrefix --> toSearchItem
  ensureForwardPrefix --> toReadMessage
  ensureForwardPrefix --> parseCursorOffset
  ensureForwardPrefix --> parseQuery
  ensureForwardPrefix --> matchesQuery
  ensureForwardPrefix --> keywordScore
  encodeMimeHeader --> getHeaderValue
  encodeMimeHeader --> uniqueStrings
  encodeMimeHeader --> encodeBodyBase64
  encodeMimeHeader --> getAuthorizedUserEmail
  encodeBodyBase64 --> getHeaderValue
  encodeBodyBase64 --> uniqueStrings
  encodeBodyBase64 --> encodeMimeHeader
  encodeBodyBase64 --> getAuthorizedUserEmail
  toRawMessage --> createGmailClient
  toRawMessage --> getHeaderValue
  toRawMessage --> uniqueStrings
  toRawMessage --> encodeMimeHeader
  toRawMessage --> encodeBodyBase64
  toRawMessage --> getAuthorizedUserEmail
  buildForwardBody --> createGmailClient
  buildForwardBody --> getHeaderValue
  buildForwardBody --> uniqueStrings
  buildForwardBody --> getLabelMap
  buildForwardBody --> getAuthorizedUserEmail
  buildForwardBody --> toSearchItem
  buildForwardBody --> toReadMessage
  buildForwardBody --> getMessage
  buildForwardBody --> parseCursorOffset
  buildForwardBody --> parseQuery
  buildForwardBody --> matchesQuery
  buildForwardBody --> keywordScore
  normalizeRecipientEmail --> createGmailClient
  normalizeRecipientEmail --> uniqueStrings
  normalizeRecipientEmail --> getLabelMap
  normalizeRecipientEmail --> toSearchItem
  normalizeRecipientEmail --> getAuthorizedUserEmail
  normalizeRecipientEmail --> toBase64
  normalizeRecipientEmail --> daysAgo
  normalizeRecipientEmail --> attachment
  getAuthorizedUserEmail --> createGmailClient
  getAuthorizedUserEmail --> getHeaderValue
  getAuthorizedUserEmail --> uniqueStrings
  getAuthorizedUserEmail --> getLabelMap
  getAuthorizedUserEmail --> toSearchItem
  getAuthorizedUserEmail --> toReadMessage
  getAuthorizedUserEmail --> isNotFoundError
  getEffectiveSendWhitelist --> createGmailClient
  getEffectiveSendWhitelist --> getHeaderValue
  getEffectiveSendWhitelist --> uniqueStrings
  getEffectiveSendWhitelist --> toTimestamp
  getEffectiveSendWhitelist --> getLabelMap
  getEffectiveSendWhitelist --> toSearchItem
  getEffectiveSendWhitelist --> toReadMessage
  getEffectiveSendWhitelist --> getAuthorizedUserEmail
  getEffectiveSendWhitelist --> isNotFoundError
  getEffectiveSendWhitelist --> ensureReplyPrefix
  getEffectiveSendWhitelist --> ensureForwardPrefix
  getEffectiveSendWhitelist --> getMessage
  getEffectiveSendWhitelist --> parseCursorOffset
  getEffectiveSendWhitelist --> parseQuery
  getEffectiveSendWhitelist --> matchesQuery
  getEffectiveSendWhitelist --> keywordScore
  isNotFoundError --> createGmailClient
  isNotFoundError --> getHeaderValue
  isNotFoundError --> toTimestamp
  isNotFoundError --> getLabelMap
  isNotFoundError --> toReadMessage
  daysAgo --> toBase64
  daysAgo --> attachment
  attachment --> toBase64
  attachment --> daysAgo
  makeInitialMessages --> daysAgo
  makeInitialMessages --> attachment
  createState --> normalizeLabelName
  createState --> makeInitialMessages
  createState --> attachmentSummaries
  getMessage --> normalizeLabelName
  getMessage --> attachmentSummaries
  getThreadMessages --> normalizeLabelName
  getThreadMessages --> attachmentSummaries
  attachmentSummaries --> normalizeLabelName
  parseCursorOffset --> resolveFolderLabel
  parseQuery --> resolveFolderLabel
  matchesQuery --> resolveFolderLabel
  keywordScore --> uniqueStrings
  keywordScore --> normalizeLabelName
  applyActionToLabels --> uniqueStrings
  applyActionToLabels --> normalizeLabelName
  applyActionToLabels --> parseQuery
  applyActionToLabels --> matchesQuery
  applyActionToLabels --> keywordScore
  nextMockId --> uniqueStrings
  nextMockId --> toSearchItem
  nextMockId --> toReadMessage
  nextMockId --> ensureReplyPrefix
  nextMockId --> getMessage
  nextMockId --> parseCursorOffset
  nextMockId --> parseQuery
  nextMockId --> matchesQuery
  nextMockId --> keywordScore
  proposeAction --> clampConfidence
  proposeAction --> parseHttpStatus
  proposeAction --> includesAny
  createHint --> parseHttpStatus
  createHint --> includesAny
  buildErrorHint --> createHint
  buildErrorHint --> parseHttpStatus
  buildErrorHint --> classifyErrorReason
  buildErrorHint --> errorSummary
  buildErrorHint --> errorRecovery
  clampConfidence --> parseHttpStatus
  clampConfidence --> includesAny
  parseHttpStatus --> createHint
  parseHttpStatus --> includesAny
  parseHttpStatus --> classifyErrorReason
  parseHttpStatus --> errorSummary
  parseHttpStatus --> errorRecovery
  includesAny --> createHint
  includesAny --> parseHttpStatus
  includesAny --> classifyErrorReason
  includesAny --> errorSummary
  includesAny --> errorRecovery
  classifyErrorReason --> createHint
  classifyErrorReason --> parseHttpStatus
  classifyErrorReason --> includesAny
  classifyErrorReason --> errorSummary
  classifyErrorReason --> errorRecovery
  errorSummary --> createHint
  errorSummary --> parseHttpStatus
  errorSummary --> classifyErrorReason
  errorSummary --> errorRecovery
  errorRecovery --> createHint
  errorRecovery --> parseHttpStatus
  errorRecovery --> classifyErrorReason
  errorRecovery --> errorSummary
  buildSearchHint --> proposeAction
  buildSearchHint --> createHint
  buildSearchHint --> shortQuery
  buildSearchHint --> broadenQuery
  buildSearchHint --> findFirstAttachment
  buildReadHint --> proposeAction
  buildReadHint --> createHint
  buildReadHint --> deriveMailboxState
  buildReadHint --> findFirstAttachment
  buildSendHint --> proposeAction
  buildSendHint --> createHint
  buildSendHint --> deriveMailboxState
  buildSendHint --> formatBytes
  deriveMailboxState --> proposeAction
  deriveMailboxState --> createHint
  deriveMailboxState --> formatBytes
  buildModifyHint --> proposeAction
  buildModifyHint --> createHint
  buildModifyHint --> deriveMailboxState
  buildModifyHint --> formatBytes
  buildAttachmentHint --> proposeAction
  buildAttachmentHint --> createHint
  buildAttachmentHint --> formatBytes
  shortQuery --> proposeAction
  shortQuery --> createHint
  shortQuery --> broadenQuery
  shortQuery --> findFirstAttachment
  broadenQuery --> proposeAction
  broadenQuery --> createHint
  broadenQuery --> shortQuery
  broadenQuery --> findFirstAttachment
  findFirstAttachment --> proposeAction
  findFirstAttachment --> createHint
  findFirstAttachment --> shortQuery
  findFirstAttachment --> broadenQuery
  formatBytes --> proposeAction
  formatBytes --> createHint
  formatBytes --> shortQuery
  formatBytes --> broadenQuery
  formatBytes --> findFirstAttachment
  normalizeBoundedInt --> parseCsvQueries
  normalizeBoundedInt --> safeString
  normalizeBoundedInt --> sanitizeForOutput
  normalizeBoundedInt --> primitiveType
  parseCsvQueries --> normalizeBoundedInt
  parseCsvQueries --> safeString
  parseCsvQueries --> sanitizeForOutput
  parseCsvQueries --> primitiveType
  parseCsvQueries --> describeShape
  safeString --> sanitizeForOutput
  safeString --> primitiveType
  safeString --> describeShape
  sanitizeForOutput --> safeString
  sanitizeForOutput --> primitiveType
  sanitizeForOutput --> describeShape
  primitiveType --> sanitizeForOutput
  primitiveType --> describeShape
  primitiveType --> summarize
  primitiveType --> collectAttachmentRefs
  describeShape --> sanitizeForOutput
  describeShape --> primitiveType
  describeShape --> summarize
  describeShape --> collectAttachmentRefs
  summarize --> safeString
  summarize --> sanitizeForOutput
  summarize --> describeShape
  summarize --> collectAttachmentRefs
  collectAttachmentRefs --> safeString
  collectAttachmentRefs --> summarize
  probeMessage --> safeString
  probeMessage --> summarize
  probeMessage --> collectAttachmentRefs
  probeQuery --> parseCliOptions
  probeQuery --> getGmailAuthClient
  probeQuery --> summarize
  probeQuery --> probeMessage
  probeQuery --> nowStamp
  nowStamp --> main
  nowStamp --> parseCliOptions
  nowStamp --> getGmailAuthClient
  nowStamp --> summarize
  nowStamp --> probeQuery
  uploadFile --> downloadAttachment
  uploadFile --> buildAttachmentHint
  toSummary --> readMessages
  toSummary --> buildReadHint
  toSummary --> searchMessages
  toSummary --> buildSearchHint
  nonEmptyStrings --> sendMessage
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `runAgent` | `agent/index.ts` | `executeAgent` |
| `runAgentEval` | `agent/index.ts` | `executeAgent` |
| `executeAgent` | `agent/runtime.ts` | `createRuntimeState`, `executeTurn`, `asResponseTools`, `createToolRegistry`, `buildSystemPrompt` |
| `createRuntimeState` | `agent/runtime.ts` | `appendModelOutput`, `appendToolExecution`, `executeTurn`, `asResponseTools`, `createToolRegistry`, `executeToolCall`, `complete`, `buildSystemPrompt` |
| `appendModelOutput` | `agent/runtime.ts` | `createRuntimeState`, `appendToolExecution`, `executeTurn`, `asResponseTools`, `createToolRegistry`, `executeToolCall`, `complete`, `buildSystemPrompt` |
| `appendToolExecution` | `agent/runtime.ts` | `createRuntimeState`, `appendModelOutput`, `executeTurn`, `asResponseTools`, `createToolRegistry`, `executeToolCall`, `complete`, `buildSystemPrompt` |
| `executeTurn` | `agent/runtime.ts` | `createRuntimeState`, `appendModelOutput`, `appendToolExecution`, `asResponseTools`, `createToolRegistry`, `executeToolCall`, `complete`, `buildSystemPrompt` |
| `asResponseTools` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `validateSchema`, `toErrorOutput`, `buildErrorHint` |
| `createToolRegistry` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `validateSchema`, `runHandler`, `toErrorOutput`, `buildErrorHint` |
| `executeToolCall` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `validateSchema`, `runHandler`, `toErrorOutput` |
| `createToolTrace` | `agent/tool-call.ts` | `parseJson`, `validateSchema`, `runHandler`, `toErrorOutput`, `buildErrorHint` |
| `parseJson` | `agent/tool-call.ts` | `createToolTrace`, `validateSchema`, `runHandler`, `toErrorOutput`, `buildErrorHint` |
| `validateSchema` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `runHandler`, `toErrorOutput`, `buildErrorHint` |
| `runHandler` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `validateSchema`, `toErrorOutput`, `buildErrorHint` |
| `toErrorOutput` | `agent/tool-call.ts` | `createToolTrace`, `parseJson`, `validateSchema`, `runHandler`, `buildErrorHint` |
| `createSession` | `agent/types.ts` |  |
| `main` | `auth.ts` | `authenticateGmail`, `runAgentEval`, `createSession`, `loadSessionHistory`, `saveSessionHistory`, `parseCliOptions`, `runAgent`, `getGmailAuthClient`, `summarize`, `probeQuery`, `nowStamp` |
| `parseCsv` | `config.ts` | `parseBoolean` |
| `parseBoolean` | `config.ts` | `parseCsv` |
| `complete` | `core/completion.ts` | `isReasoningModel`, `extractText`, `extractToolCalls` |
| `isReasoningModel` | `core/completion.ts` | `extractText`, `extractToolCalls` |
| `extractText` | `core/completion.ts` | `isReasoningModel`, `extractToolCalls` |
| `extractToolCalls` | `core/completion.ts` | `isReasoningModel`, `extractText` |
| `normalizeMaxTurns` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `readStdinText`, `resolveSessionDir`, `getSessionPath`, `loadSessionHistory`, `parseCliOptions` |
| `readStdinText` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `normalizeMaxTurns`, `resolveSessionDir`, `getSessionPath`, `loadSessionHistory`, `saveSessionHistory`, `parseCliOptions` |
| `resolveSessionDir` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `normalizeMaxTurns`, `readStdinText`, `getSessionPath`, `loadSessionHistory`, `saveSessionHistory`, `parseCliOptions` |
| `getSessionPath` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `main`, `normalizeMaxTurns`, `readStdinText`, `resolveSessionDir`, `loadSessionHistory`, `saveSessionHistory`, `parseCliOptions` |
| `loadSessionHistory` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `main`, `normalizeMaxTurns`, `readStdinText`, `resolveSessionDir`, `getSessionPath`, `saveSessionHistory`, `parseCliOptions` |
| `saveSessionHistory` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `main`, `normalizeMaxTurns`, `readStdinText`, `resolveSessionDir`, `getSessionPath`, `loadSessionHistory`, `parseCliOptions` |
| `parseCliOptions` | `evals/run-agent-eval.ts` | `runAgentEval`, `createSession`, `main`, `normalizeMaxTurns`, `readStdinText`, `resolveSessionDir`, `loadSessionHistory`, `saveSessionHistory`, `normalizeBoundedInt`, `parseCsvQueries`, `safeString`, `sanitizeForOutput`, `primitiveType`, `describeShape` |
| `getGmailAuthClient` | `gmail/auth.ts` | `loadSavedAuthClient`, `runInteractiveAuth` |
| `authenticateGmail` | `gmail/auth.ts` | `runInteractiveAuth` |
| `resolveCredentialsPath` | `gmail/auth.ts` | `readClientSecrets`, `saveRefreshToken` |
| `readClientSecrets` | `gmail/auth.ts` | `resolveCredentialsPath`, `loadSavedAuthClient`, `saveRefreshToken`, `runInteractiveAuth` |
| `loadSavedAuthClient` | `gmail/auth.ts` | `resolveCredentialsPath`, `readClientSecrets`, `saveRefreshToken`, `runInteractiveAuth` |
| `saveRefreshToken` | `gmail/auth.ts` | `resolveCredentialsPath`, `readClientSecrets`, `loadSavedAuthClient`, `runInteractiveAuth` |
| `runInteractiveAuth` | `gmail/auth.ts` | `resolveCredentialsPath`, `loadSavedAuthClient`, `saveRefreshToken` |
| `searchMessages` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `toTimestamp`, `getLabelMap`, `toSearchItem`, `toReadMessage`, `isNotFoundError`, `ensureReplyPrefix`, `ensureForwardPrefix`, `buildForwardBody`, `getMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `readMessages` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `toTimestamp`, `getLabelMap`, `toReadMessage`, `ensureReplyPrefix`, `isNotFoundError`, `uniqueStrings`, `ensureForwardPrefix`, `buildForwardBody`, `normalizeRecipientEmail`, `getEffectiveSendWhitelist`, `getMessage`, `nextMockId` |
| `sendMessage` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `uniqueStrings`, `extractBodyText`, `ensureReplyPrefix`, `ensureForwardPrefix`, `buildForwardBody`, `getEffectiveSendWhitelist`, `normalizeRecipientEmail`, `getMessage`, `nextMockId` |
| `modifyMailboxItem` | `gmail/client.ts` | `createGmailClient`, `getLabelMap`, `resolveLabels`, `resolveThreadLabels`, `resolveLabelId`, `uniqueStrings`, `normalizeLabelName`, `getMessage`, `getThreadMessages`, `applyActionToLabels` |
| `downloadAttachment` | `gmail/client.ts` | `createGmailClient`, `toBase64`, `findAttachmentPart`, `getMessage` |
| `createGmailClient` | `gmail/client.ts` | `getGmailAuthClient`, `getHeaderValue`, `splitRecipients`, `uniqueStrings`, `toBase64` |
| `getHeaderValue` | `gmail/client.ts` | `splitRecipients`, `uniqueStrings`, `toBase64`, `decodeBase64UrlUtf8` |
| `splitRecipients` | `gmail/client.ts` | `getHeaderValue`, `uniqueStrings`, `toBase64`, `decodeBase64UrlUtf8`, `findPartBodyData` |
| `uniqueStrings` | `gmail/client.ts` | `getHeaderValue`, `splitRecipients`, `toBase64`, `decodeBase64UrlUtf8`, `findPartBodyData`, `daysAgo`, `attachment` |
| `collectRecipients` | `gmail/client.ts` | `getHeaderValue`, `splitRecipients`, `uniqueStrings`, `toBase64`, `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData` |
| `toIso` | `gmail/client.ts` | `getHeaderValue`, `toBase64`, `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData` |
| `toTimestamp` | `gmail/client.ts` | `getHeaderValue`, `toBase64`, `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData` |
| `normalizeLabelName` | `gmail/client.ts` | `toBase64`, `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData`, `daysAgo`, `attachment` |
| `toBase64` | `gmail/client.ts` | `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData`, `findAttachmentPart`, `daysAgo`, `attachment` |
| `decodeBase64UrlUtf8` | `gmail/client.ts` | `toBase64`, `stripHtml`, `findPartBodyData`, `findAttachmentPart` |
| `stripHtml` | `gmail/client.ts` | `decodeBase64UrlUtf8`, `findPartBodyData`, `findAttachmentPart` |
| `findPartBodyData` | `gmail/client.ts` | `normalizeLabelName`, `decodeBase64UrlUtf8`, `stripHtml`, `findAttachmentPart`, `fetchLabelMap` |
| `extractBodyText` | `gmail/client.ts` | `normalizeLabelName`, `decodeBase64UrlUtf8`, `stripHtml`, `findPartBodyData`, `findAttachmentPart`, `fetchLabelMap`, `resolveLabels` |
| `collectAttachments` | `gmail/client.ts` | `normalizeLabelName`, `findAttachmentPart`, `fetchLabelMap`, `resolveLabels` |
| `findAttachmentPart` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `collectAttachments`, `fetchLabelMap`, `resolveLabels` |
| `fetchLabelMap` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `collectAttachments`, `resolveLabels` |
| `getLabelMap` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `extractBodyText`, `collectAttachments`, `fetchLabelMap`, `resolveLabels` |
| `resolveLabels` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `extractBodyText`, `collectAttachments` |
| `resolveThreadLabels` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `extractBodyText`, `collectAttachments`, `resolveLabels` |
| `resolveLabelId` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `normalizeLabelName`, `extractBodyText`, `collectAttachments`, `resolveLabels`, `encodeMimeHeader`, `uniqueStrings`, `toSearchItem`, `toReadMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `toSearchItem` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `extractBodyText`, `collectAttachments`, `resolveLabels`, `encodeMimeHeader`, `encodeBodyBase64`, `normalizeLabelName`, `attachmentSummaries` |
| `toReadMessage` | `gmail/client.ts` | `getHeaderValue`, `collectRecipients`, `toIso`, `extractBodyText`, `collectAttachments`, `resolveLabels`, `encodeMimeHeader`, `encodeBodyBase64`, `normalizeLabelName`, `attachmentSummaries` |
| `ensureReplyPrefix` | `gmail/client.ts` | `getHeaderValue`, `encodeMimeHeader`, `encodeBodyBase64`, `uniqueStrings`, `toSearchItem`, `toReadMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `ensureForwardPrefix` | `gmail/client.ts` | `getHeaderValue`, `encodeMimeHeader`, `encodeBodyBase64`, `uniqueStrings`, `toSearchItem`, `toReadMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `encodeMimeHeader` | `gmail/client.ts` | `getHeaderValue`, `uniqueStrings`, `encodeBodyBase64`, `getAuthorizedUserEmail` |
| `encodeBodyBase64` | `gmail/client.ts` | `getHeaderValue`, `uniqueStrings`, `encodeMimeHeader`, `getAuthorizedUserEmail` |
| `toRawMessage` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `uniqueStrings`, `encodeMimeHeader`, `encodeBodyBase64`, `getAuthorizedUserEmail` |
| `buildForwardBody` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `uniqueStrings`, `getLabelMap`, `getAuthorizedUserEmail`, `toSearchItem`, `toReadMessage`, `getMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `normalizeRecipientEmail` | `gmail/client.ts` | `createGmailClient`, `uniqueStrings`, `getLabelMap`, `toSearchItem`, `getAuthorizedUserEmail`, `toBase64`, `daysAgo`, `attachment` |
| `getAuthorizedUserEmail` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `uniqueStrings`, `getLabelMap`, `toSearchItem`, `toReadMessage`, `isNotFoundError` |
| `getEffectiveSendWhitelist` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `uniqueStrings`, `toTimestamp`, `getLabelMap`, `toSearchItem`, `toReadMessage`, `getAuthorizedUserEmail`, `isNotFoundError`, `ensureReplyPrefix`, `ensureForwardPrefix`, `getMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `isNotFoundError` | `gmail/client.ts` | `createGmailClient`, `getHeaderValue`, `toTimestamp`, `getLabelMap`, `toReadMessage` |
| `daysAgo` | `gmail/mock-client.ts` | `toBase64`, `attachment` |
| `attachment` | `gmail/mock-client.ts` | `toBase64`, `daysAgo` |
| `makeInitialMessages` | `gmail/mock-client.ts` | `daysAgo`, `attachment` |
| `createState` | `gmail/mock-client.ts` | `normalizeLabelName`, `makeInitialMessages`, `attachmentSummaries` |
| `getMessage` | `gmail/mock-client.ts` | `normalizeLabelName`, `attachmentSummaries` |
| `getThreadMessages` | `gmail/mock-client.ts` | `normalizeLabelName`, `attachmentSummaries` |
| `attachmentSummaries` | `gmail/mock-client.ts` | `normalizeLabelName` |
| `resolveFolderLabel` | `gmail/mock-client.ts` |  |
| `parseCursorOffset` | `gmail/mock-client.ts` | `resolveFolderLabel` |
| `parseQuery` | `gmail/mock-client.ts` | `resolveFolderLabel` |
| `matchesQuery` | `gmail/mock-client.ts` | `resolveFolderLabel` |
| `keywordScore` | `gmail/mock-client.ts` | `uniqueStrings`, `normalizeLabelName` |
| `applyActionToLabels` | `gmail/mock-client.ts` | `uniqueStrings`, `normalizeLabelName`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `nextMockId` | `gmail/mock-client.ts` | `uniqueStrings`, `toSearchItem`, `toReadMessage`, `ensureReplyPrefix`, `getMessage`, `parseCursorOffset`, `parseQuery`, `matchesQuery`, `keywordScore` |
| `proposeAction` | `hints/index.ts` | `clampConfidence`, `parseHttpStatus`, `includesAny` |
| `createHint` | `hints/index.ts` | `parseHttpStatus`, `includesAny` |
| `buildErrorHint` | `hints/index.ts` | `createHint`, `parseHttpStatus`, `classifyErrorReason`, `errorSummary`, `errorRecovery` |
| `clampConfidence` | `hints/index.ts` | `parseHttpStatus`, `includesAny` |
| `parseHttpStatus` | `hints/index.ts` | `createHint`, `includesAny`, `classifyErrorReason`, `errorSummary`, `errorRecovery` |
| `includesAny` | `hints/index.ts` | `createHint`, `parseHttpStatus`, `classifyErrorReason`, `errorSummary`, `errorRecovery` |
| `classifyErrorReason` | `hints/index.ts` | `createHint`, `parseHttpStatus`, `includesAny`, `errorSummary`, `errorRecovery` |
| `errorSummary` | `hints/index.ts` | `createHint`, `parseHttpStatus`, `classifyErrorReason`, `errorRecovery` |
| `errorRecovery` | `hints/index.ts` | `createHint`, `parseHttpStatus`, `classifyErrorReason`, `errorSummary` |
| `buildSearchHint` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `shortQuery`, `broadenQuery`, `findFirstAttachment` |
| `buildReadHint` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `deriveMailboxState`, `findFirstAttachment` |
| `buildSendHint` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `deriveMailboxState`, `formatBytes` |
| `deriveMailboxState` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `formatBytes` |
| `buildModifyHint` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `deriveMailboxState`, `formatBytes` |
| `buildAttachmentHint` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `formatBytes` |
| `shortQuery` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `broadenQuery`, `findFirstAttachment` |
| `broadenQuery` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `shortQuery`, `findFirstAttachment` |
| `findFirstAttachment` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `shortQuery`, `broadenQuery` |
| `formatBytes` | `hints/tool-hints.ts` | `proposeAction`, `createHint`, `shortQuery`, `broadenQuery`, `findFirstAttachment` |
| `buildSystemPrompt` | `prompt.ts` |  |
| `normalizeBoundedInt` | `scripts/probe-gmail-api-shapes.ts` | `parseCsvQueries`, `safeString`, `sanitizeForOutput`, `primitiveType` |
| `parseCsvQueries` | `scripts/probe-gmail-api-shapes.ts` | `normalizeBoundedInt`, `safeString`, `sanitizeForOutput`, `primitiveType`, `describeShape` |
| `safeString` | `scripts/probe-gmail-api-shapes.ts` | `sanitizeForOutput`, `primitiveType`, `describeShape` |
| `sanitizeForOutput` | `scripts/probe-gmail-api-shapes.ts` | `safeString`, `primitiveType`, `describeShape` |
| `primitiveType` | `scripts/probe-gmail-api-shapes.ts` | `sanitizeForOutput`, `describeShape`, `summarize`, `collectAttachmentRefs` |
| `describeShape` | `scripts/probe-gmail-api-shapes.ts` | `sanitizeForOutput`, `primitiveType`, `summarize`, `collectAttachmentRefs` |
| `summarize` | `scripts/probe-gmail-api-shapes.ts` | `safeString`, `sanitizeForOutput`, `describeShape`, `collectAttachmentRefs` |
| `collectAttachmentRefs` | `scripts/probe-gmail-api-shapes.ts` | `safeString`, `summarize` |
| `probeMessage` | `scripts/probe-gmail-api-shapes.ts` | `safeString`, `summarize`, `collectAttachmentRefs` |
| `probeQuery` | `scripts/probe-gmail-api-shapes.ts` | `parseCliOptions`, `getGmailAuthClient`, `summarize`, `probeMessage`, `nowStamp` |
| `nowStamp` | `scripts/probe-gmail-api-shapes.ts` | `main`, `parseCliOptions`, `getGmailAuthClient`, `summarize`, `probeQuery` |
| `uploadFile` | `tools/gmail-attachment.ts` | `downloadAttachment`, `buildAttachmentHint` |
| `toSummary` | `tools/gmail-read.ts` | `readMessages`, `buildReadHint`, `searchMessages`, `buildSearchHint` |
| `nonEmptyStrings` | `tools/gmail-send.ts` | `sendMessage` |