# 05_01_agent_graph — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph ai_client["ai/client"]
    generateText["generateText()"]
    generateToolStep["generateToolStep()"]
    withRetry["withRetry()"]
    describeLlm["describeLlm()"]
    isRetryable["isRetryable()"]
    sleep["sleep()"]
  end
  subgraph ai_parsers["ai/parsers"]
    extractText["extractText()"]
    extractToolCalls["extractToolCalls()"]
    extractUsage["extractUsage()"]
    safeParseObject["safeParseObject()"]
  end
  subgraph agents_index["agents/index"]
    getAgentDefinition["getAgentDefinition()"]
  end
  subgraph domain["domain"]
    emptyUsage["emptyUsage()"]
    addUsage["addUsage()"]
    uuid["uuid()"]
    now["now()"]
  end
  subgraph memory_processor["memory/processor"]
    processTaskMemory["processTaskMemory()"]
    accumulateMemoryUsage["accumulateMemoryUsage()"]
    freshMemory["freshMemory()"]
    splitByTailBudget["splitByTailBudget()"]
    persistLog["persistLog()"]
    pad["pad()"]
    estimateItemTokens["estimateItemTokens()"]
  end
  subgraph runtime["runtime"]
    addItem["addItem()"]
    createRuntime["createRuntime()"]
    addRelation["addRelation()"]
    addArtifact["addArtifact()"]
    ensureRelation["ensureRelation()"]
  end
  subgraph scheduler_actor["scheduler/actor"]
    runActorTask["runActorTask()"]
    generateToolStepWithRetry["generateToolStepWithRetry()"]
  end
  subgraph scheduler_context["scheduler/context"]
    buildTaskPromptPrefix["buildTaskPromptPrefix()"]
    buildTaskRunInput["buildTaskRunInput()"]
    safeJson["safeJson()"]
    asText["asText()"]
    toDelegationMessage["toDelegationMessage()"]
    getChildTaskArtifacts["getChildTaskArtifacts()"]
    buildTaskSnapshot["buildTaskSnapshot()"]
    getActiveTaskItems["getActiveTaskItems()"]
    getActorToolNames["getActorToolNames()"]
    formatTaskLine["formatTaskLine()"]
    toInputItem["toInputItem()"]
  end
  subgraph scheduler_recovery["scheduler/recovery"]
    computeRetryDelayMs["computeRetryDelayMs()"]
    formatError["formatError()"]
    isTransientLlmError["isTransientLlmError()"]
    shouldAutoRetryTask["shouldAutoRetryTask()"]
    asRecord["asRecord()"]
  end
  subgraph tools_index["tools/index"]
    getActorConfig["getActorConfig()"]
    executeToolCall["executeToolCall()"]
  end
  subgraph dashboard_app_js["dashboard/app.js"]
    ensureAgent["ensureAgent()"]
    renderPipeline["renderPipeline()"]
    startGroup["startGroup()"]
    addFI["addFI()"]
    handleEvent["handleEvent()"]
    trunc["trunc()"]
    esc["esc()"]
    time["time()"]
    actorTag["actorTag()"]
    openDrawer["openDrawer()"]
    closeDrawer["closeDrawer()"]
    refreshSidebar["refreshSidebar()"]
    renderStats["renderStats()"]
    renderTasks["renderTasks()"]
    taskRow["taskRow()"]
    renderArtifacts["renderArtifacts()"]
    renderRelations["renderRelations()"]
    renderGraph["renderGraph()"]
    actorNodeId["actorNodeId()"]
    taskNodeId["taskNodeId()"]
    artifactNodeId["artifactNodeId()"]
    renderLegendItem["renderLegendItem()"]
    updateGraphChrome["updateGraphChrome()"]
    saveCurrentViewport["saveCurrentViewport()"]
    zoomGraph["zoomGraph()"]
    fitGraph["fitGraph()"]
    toggleFullscreen["toggleFullscreen()"]
    ensureGraphUi["ensureGraphUi()"]
    buildGraphSignature["buildGraphSignature()"]
    buildExecutionProjection["buildExecutionProjection()"]
    buildArtifactProjection["buildArtifactProjection()"]
    renderGraphNow["renderGraphNow()"]
    getGraphStyles["getGraphStyles()"]
  end
  subgraph events["events"]
    emit["emit()"]
    subscribe["subscribe()"]
    replay["replay()"]
  end
  subgraph index["index"]
    truncate["truncate()"]
    resolveLabel["resolveLabel()"]
    startSession["startSession()"]
    main["main()"]
    openBrowser["openBrowser()"]
    statusIcon["statusIcon()"]
  end
  subgraph log["log"]
    pre["pre()"]
    badge["badge()"]
    actorColor["actorColor()"]
    ts["ts()"]
  end
  subgraph scheduler_loop["scheduler/loop"]
    processSession["processSession()"]
    processOneTask["processOneTask()"]
    recoverStaleTasks["recoverStaleTasks()"]
    updateActorStatus["updateActorStatus()"]
    accumulateSessionUsage["accumulateSessionUsage()"]
    scheduleRecoverableRetry["scheduleRecoverableRetry()"]
  end
  subgraph server["server"]
    startServer["startServer()"]
    handleRequest["handleRequest()"]
    getState["getState()"]
    sendText["sendText()"]
    serveFile["serveFile()"]
    sseHandler["sseHandler()"]
    mimeFor["mimeFor()"]
    sendJson["sendJson()"]
    safeResolve["safeResolve()"]
  end
  subgraph memory_observer["memory/observer"]
    extractTag["extractTag()"]
    serializeItems["serializeItems()"]
    parseObserverOutput["parseObserverOutput()"]
    buildPrompt["buildPrompt()"]
    runObserver["runObserver()"]
    estimateTokens["estimateTokens()"]
  end
  subgraph memory_reflector["memory/reflector"]
    runReflector["runReflector()"]
  end
  subgraph scheduler_graph["scheduler/graph"]
    createGraphQueries["createGraphQueries()"]
    byNewestArtifact["byNewestArtifact()"]
    latestArtifacts["latestArtifacts()"]
  end
  subgraph tools_args["tools/args"]
    getString["getString()"]
    getStringArray["getStringArray()"]
    getOptionalString["getOptionalString()"]
    getPositiveInteger["getPositiveInteger()"]
    getToolNameArray["getToolNameArray()"]
  end
  subgraph tools_artifact_placeholders["tools/artifact/placeholders"]
    resolveFilePlaceholders["resolveFilePlaceholders()"]
  end
  subgraph tools_artifact_shared["tools/artifact/shared"]
    normalizeArtifactPath["normalizeArtifactPath()"]
    readArtifactContent["readArtifactContent()"]
    writeArtifactContent["writeArtifactContent()"]
    getLatestArtifactByPath["getLatestArtifactByPath()"]
    upsertArtifact["upsertArtifact()"]
    artifactFilePath["artifactFilePath()"]
    artifactFilesRoot["artifactFilesRoot()"]
  end
  generateText --> generateToolStep
  generateText --> withRetry
  generateText --> extractText
  generateText --> extractToolCalls
  generateText --> extractUsage
  generateToolStep --> withRetry
  generateToolStep --> extractText
  generateToolStep --> extractToolCalls
  generateToolStep --> extractUsage
  describeLlm --> generateText
  describeLlm --> generateToolStep
  describeLlm --> withRetry
  describeLlm --> isRetryable
  describeLlm --> sleep
  describeLlm --> extractText
  describeLlm --> extractUsage
  isRetryable --> generateText
  isRetryable --> generateToolStep
  isRetryable --> withRetry
  isRetryable --> sleep
  isRetryable --> extractText
  isRetryable --> extractToolCalls
  isRetryable --> extractUsage
  sleep --> generateText
  sleep --> generateToolStep
  sleep --> withRetry
  sleep --> isRetryable
  sleep --> extractText
  sleep --> extractToolCalls
  sleep --> extractUsage
  sleep --> getAgentDefinition
  sleep --> emptyUsage
  sleep --> addUsage
  sleep --> processTaskMemory
  sleep --> addItem
  sleep --> runActorTask
  sleep --> generateToolStepWithRetry
  sleep --> buildTaskPromptPrefix
  sleep --> buildTaskRunInput
  sleep --> computeRetryDelayMs
  sleep --> formatError
  sleep --> isTransientLlmError
  sleep --> getActorConfig
  extractText --> safeParseObject
  extractToolCalls --> safeParseObject
  ensureAgent --> renderPipeline
  ensureAgent --> startGroup
  ensureAgent --> addFI
  ensureAgent --> handleEvent
  ensureAgent --> trunc
  ensureAgent --> esc
  ensureAgent --> time
  renderPipeline --> startGroup
  renderPipeline --> addFI
  renderPipeline --> handleEvent
  renderPipeline --> trunc
  renderPipeline --> esc
  renderPipeline --> time
  startGroup --> ensureAgent
  startGroup --> renderPipeline
  startGroup --> addFI
  startGroup --> handleEvent
  startGroup --> trunc
  startGroup --> esc
  startGroup --> time
  startGroup --> actorTag
  addFI --> ensureAgent
  addFI --> renderPipeline
  addFI --> startGroup
  addFI --> handleEvent
  addFI --> trunc
  addFI --> esc
  addFI --> time
  addFI --> actorTag
  handleEvent --> ensureAgent
  handleEvent --> renderPipeline
  handleEvent --> startGroup
  handleEvent --> addFI
  handleEvent --> trunc
  handleEvent --> esc
  handleEvent --> actorTag
  openDrawer --> trunc
  openDrawer --> esc
  closeDrawer --> ensureAgent
  closeDrawer --> renderPipeline
  closeDrawer --> openDrawer
  closeDrawer --> refreshSidebar
  closeDrawer --> renderStats
  closeDrawer --> renderTasks
  closeDrawer --> taskRow
  closeDrawer --> renderArtifacts
  closeDrawer --> renderRelations
  closeDrawer --> renderGraph
  closeDrawer --> trunc
  closeDrawer --> esc
  refreshSidebar --> ensureAgent
  refreshSidebar --> renderPipeline
  refreshSidebar --> openDrawer
  refreshSidebar --> renderStats
  refreshSidebar --> renderTasks
  refreshSidebar --> taskRow
  refreshSidebar --> renderArtifacts
  refreshSidebar --> renderRelations
  refreshSidebar --> renderGraph
  refreshSidebar --> trunc
  refreshSidebar --> esc
  renderStats --> openDrawer
  renderStats --> renderTasks
  renderStats --> taskRow
  renderStats --> renderArtifacts
  renderStats --> renderRelations
  renderStats --> trunc
  renderStats --> esc
  renderTasks --> openDrawer
  renderTasks --> taskRow
  renderTasks --> renderArtifacts
  renderTasks --> renderRelations
  renderTasks --> trunc
  renderTasks --> esc
  taskRow --> openDrawer
  taskRow --> renderArtifacts
  taskRow --> renderRelations
  taskRow --> trunc
  taskRow --> esc
  renderArtifacts --> openDrawer
  renderArtifacts --> renderRelations
  renderArtifacts --> trunc
  renderArtifacts --> esc
  renderRelations --> actorNodeId
  renderRelations --> taskNodeId
  renderRelations --> artifactNodeId
  renderRelations --> renderLegendItem
  renderRelations --> trunc
  renderRelations --> esc
  actorNodeId --> taskNodeId
  actorNodeId --> artifactNodeId
  actorNodeId --> renderLegendItem
  actorNodeId --> updateGraphChrome
  actorNodeId --> saveCurrentViewport
  actorNodeId --> zoomGraph
  actorNodeId --> fitGraph
  actorNodeId --> toggleFullscreen
  actorNodeId --> ensureGraphUi
  actorNodeId --> renderGraph
  actorNodeId --> esc
  taskNodeId --> artifactNodeId
  taskNodeId --> renderLegendItem
  taskNodeId --> updateGraphChrome
  taskNodeId --> saveCurrentViewport
  taskNodeId --> zoomGraph
  taskNodeId --> fitGraph
  taskNodeId --> toggleFullscreen
  taskNodeId --> ensureGraphUi
  taskNodeId --> renderGraph
  taskNodeId --> esc
  artifactNodeId --> renderLegendItem
  artifactNodeId --> updateGraphChrome
  artifactNodeId --> saveCurrentViewport
  artifactNodeId --> zoomGraph
  artifactNodeId --> fitGraph
  artifactNodeId --> toggleFullscreen
  artifactNodeId --> ensureGraphUi
  artifactNodeId --> renderGraph
  artifactNodeId --> esc
  renderLegendItem --> updateGraphChrome
  renderLegendItem --> saveCurrentViewport
  renderLegendItem --> zoomGraph
  renderLegendItem --> fitGraph
  renderLegendItem --> toggleFullscreen
  renderLegendItem --> ensureGraphUi
  renderLegendItem --> renderGraph
  renderLegendItem --> esc
  updateGraphChrome --> saveCurrentViewport
  updateGraphChrome --> zoomGraph
  updateGraphChrome --> fitGraph
  updateGraphChrome --> toggleFullscreen
  updateGraphChrome --> ensureGraphUi
  updateGraphChrome --> buildGraphSignature
  updateGraphChrome --> renderGraph
  saveCurrentViewport --> updateGraphChrome
  saveCurrentViewport --> zoomGraph
  saveCurrentViewport --> fitGraph
  saveCurrentViewport --> toggleFullscreen
  saveCurrentViewport --> ensureGraphUi
  saveCurrentViewport --> buildGraphSignature
  saveCurrentViewport --> buildExecutionProjection
  saveCurrentViewport --> renderGraph
  zoomGraph --> updateGraphChrome
  zoomGraph --> saveCurrentViewport
  zoomGraph --> fitGraph
  zoomGraph --> toggleFullscreen
  zoomGraph --> ensureGraphUi
  zoomGraph --> buildGraphSignature
  zoomGraph --> buildExecutionProjection
  zoomGraph --> renderGraph
  fitGraph --> actorNodeId
  fitGraph --> updateGraphChrome
  fitGraph --> saveCurrentViewport
  fitGraph --> zoomGraph
  fitGraph --> toggleFullscreen
  fitGraph --> ensureGraphUi
  fitGraph --> buildGraphSignature
  fitGraph --> buildExecutionProjection
  fitGraph --> renderGraph
  toggleFullscreen --> actorNodeId
  toggleFullscreen --> updateGraphChrome
  toggleFullscreen --> saveCurrentViewport
  toggleFullscreen --> zoomGraph
  toggleFullscreen --> fitGraph
  toggleFullscreen --> ensureGraphUi
  toggleFullscreen --> buildGraphSignature
  toggleFullscreen --> buildExecutionProjection
  toggleFullscreen --> renderGraph
  ensureGraphUi --> actorNodeId
  ensureGraphUi --> taskNodeId
  ensureGraphUi --> updateGraphChrome
  ensureGraphUi --> saveCurrentViewport
  ensureGraphUi --> zoomGraph
  ensureGraphUi --> fitGraph
  ensureGraphUi --> toggleFullscreen
  ensureGraphUi --> buildGraphSignature
  ensureGraphUi --> buildExecutionProjection
  ensureGraphUi --> renderGraph
  buildGraphSignature --> actorNodeId
  buildGraphSignature --> taskNodeId
  buildGraphSignature --> buildExecutionProjection
  buildExecutionProjection --> actorNodeId
  buildExecutionProjection --> taskNodeId
  buildExecutionProjection --> buildGraphSignature
  buildArtifactProjection --> taskNodeId
  buildArtifactProjection --> artifactNodeId
  buildArtifactProjection --> buildGraphSignature
  renderGraphNow --> openDrawer
  renderGraphNow --> updateGraphChrome
  renderGraphNow --> saveCurrentViewport
  renderGraphNow --> ensureGraphUi
  renderGraphNow --> buildExecutionProjection
  renderGraphNow --> buildArtifactProjection
  renderGraphNow --> getGraphStyles
  renderGraphNow --> renderGraph
  renderGraph --> handleEvent
  renderGraph --> refreshSidebar
  renderGraph --> renderGraphNow
  trunc --> ensureAgent
  trunc --> renderPipeline
  trunc --> startGroup
  trunc --> addFI
  trunc --> esc
  esc --> ensureAgent
  esc --> renderPipeline
  esc --> startGroup
  esc --> addFI
  esc --> trunc
  time --> ensureAgent
  time --> renderPipeline
  time --> startGroup
  time --> addFI
  time --> trunc
  time --> esc
  actorTag --> ensureAgent
  actorTag --> renderPipeline
  actorTag --> startGroup
  actorTag --> addFI
  actorTag --> trunc
  actorTag --> esc
  actorTag --> time
  actorTag --> emit
  actorTag --> truncate
  actorTag --> pre
  actorTag --> badge
  actorTag --> actorColor
  resolveLabel --> getAgentDefinition
  resolveLabel --> describeLlm
  resolveLabel --> uuid
  resolveLabel --> now
  resolveLabel --> startSession
  resolveLabel --> main
  resolveLabel --> openBrowser
  resolveLabel --> truncate
  resolveLabel --> createRuntime
  resolveLabel --> addItem
  resolveLabel --> addRelation
  resolveLabel --> processSession
  resolveLabel --> startServer
  startSession --> getAgentDefinition
  startSession --> describeLlm
  startSession --> uuid
  startSession --> now
  startSession --> main
  startSession --> openBrowser
  startSession --> createRuntime
  startSession --> addItem
  startSession --> addRelation
  startSession --> processSession
  startSession --> startServer
  main --> describeLlm
  main --> now
  main --> resolveLabel
  main --> startSession
  main --> openBrowser
  main --> statusIcon
  main --> createRuntime
  main --> processSession
  main --> startServer
  openBrowser --> getAgentDefinition
  openBrowser --> describeLlm
  openBrowser --> uuid
  openBrowser --> now
  openBrowser --> resolveLabel
  openBrowser --> startSession
  openBrowser --> main
  openBrowser --> truncate
  openBrowser --> createRuntime
  openBrowser --> addItem
  openBrowser --> addRelation
  openBrowser --> processSession
  openBrowser --> startServer
  truncate --> getAgentDefinition
  truncate --> describeLlm
  truncate --> uuid
  truncate --> now
  truncate --> resolveLabel
  truncate --> startSession
  truncate --> main
  truncate --> openBrowser
  truncate --> createRuntime
  truncate --> addItem
  truncate --> addRelation
  truncate --> processSession
  truncate --> startServer
  truncate --> actorTag
  truncate --> emit
  truncate --> pre
  truncate --> badge
  truncate --> actorColor
  truncate --> extractTag
  truncate --> buildTaskPromptPrefix
  truncate --> safeJson
  truncate --> asText
  truncate --> toDelegationMessage
  statusIcon --> getAgentDefinition
  statusIcon --> describeLlm
  statusIcon --> uuid
  statusIcon --> now
  statusIcon --> resolveLabel
  statusIcon --> startSession
  statusIcon --> main
  statusIcon --> openBrowser
  statusIcon --> truncate
  statusIcon --> createRuntime
  statusIcon --> addItem
  statusIcon --> addRelation
  statusIcon --> processSession
  statusIcon --> startServer
  ts --> actorTag
  ts --> emit
  ts --> truncate
  ts --> pre
  ts --> badge
  ts --> actorColor
  pre --> actorTag
  pre --> emit
  pre --> truncate
  pre --> ts
  pre --> badge
  pre --> actorColor
  badge --> actorTag
  badge --> emit
  badge --> truncate
  badge --> pre
  badge --> actorColor
  actorColor --> actorTag
  actorColor --> emit
  actorColor --> truncate
  actorColor --> pre
  actorColor --> badge
  serializeItems --> truncate
  serializeItems --> extractTag
  parseObserverOutput --> generateText
  parseObserverOutput --> emptyUsage
  parseObserverOutput --> serializeItems
  parseObserverOutput --> buildPrompt
  parseObserverOutput --> extractTag
  runObserver --> generateText
  runObserver --> emptyUsage
  runObserver --> serializeItems
  runObserver --> parseObserverOutput
  runObserver --> buildPrompt
  buildPrompt --> generateText
  buildPrompt --> emptyUsage
  buildPrompt --> serializeItems
  buildPrompt --> parseObserverOutput
  buildPrompt --> extractTag
  buildPrompt --> addUsage
  buildPrompt --> estimateTokens
  extractTag --> generateText
  extractTag --> emptyUsage
  extractTag --> serializeItems
  extractTag --> parseObserverOutput
  extractTag --> buildPrompt
  extractTag --> addUsage
  extractTag --> estimateTokens
  processTaskMemory --> emptyUsage
  processTaskMemory --> addUsage
  processTaskMemory --> serializeItems
  processTaskMemory --> runObserver
  processTaskMemory --> estimateTokens
  processTaskMemory --> accumulateMemoryUsage
  processTaskMemory --> freshMemory
  processTaskMemory --> splitByTailBudget
  processTaskMemory --> persistLog
  processTaskMemory --> runReflector
  accumulateMemoryUsage --> emptyUsage
  accumulateMemoryUsage --> addUsage
  freshMemory --> serializeItems
  freshMemory --> estimateTokens
  freshMemory --> processTaskMemory
  freshMemory --> pad
  freshMemory --> estimateItemTokens
  pad --> emptyUsage
  pad --> serializeItems
  pad --> estimateTokens
  pad --> processTaskMemory
  pad --> freshMemory
  pad --> estimateItemTokens
  estimateItemTokens --> emptyUsage
  estimateItemTokens --> serializeItems
  estimateItemTokens --> estimateTokens
  estimateItemTokens --> processTaskMemory
  estimateItemTokens --> freshMemory
  estimateItemTokens --> pad
  splitByTailBudget --> emptyUsage
  splitByTailBudget --> serializeItems
  splitByTailBudget --> estimateTokens
  splitByTailBudget --> processTaskMemory
  splitByTailBudget --> freshMemory
  splitByTailBudget --> pad
  splitByTailBudget --> estimateItemTokens
  persistLog --> emptyUsage
  persistLog --> addUsage
  persistLog --> serializeItems
  persistLog --> runObserver
  persistLog --> estimateTokens
  persistLog --> processTaskMemory
  persistLog --> accumulateMemoryUsage
  persistLog --> freshMemory
  persistLog --> pad
  persistLog --> splitByTailBudget
  runReflector --> generateText
  runReflector --> emptyUsage
  runReflector --> addUsage
  runReflector --> estimateTokens
  runReflector --> buildPrompt
  runReflector --> extractTag
  createRuntime --> uuid
  createRuntime --> now
  createRuntime --> addRelation
  addItem --> uuid
  addItem --> now
  addItem --> addRelation
  addRelation --> uuid
  addRelation --> now
  addArtifact --> uuid
  addArtifact --> now
  addArtifact --> addRelation
  ensureRelation --> addRelation
  runActorTask --> getAgentDefinition
  runActorTask --> emptyUsage
  runActorTask --> addUsage
  runActorTask --> processTaskMemory
  runActorTask --> addItem
  runActorTask --> generateToolStepWithRetry
  runActorTask --> buildTaskPromptPrefix
  runActorTask --> buildTaskRunInput
  runActorTask --> formatError
  runActorTask --> executeToolCall
  runActorTask --> getActorConfig
  generateToolStepWithRetry --> getAgentDefinition
  generateToolStepWithRetry --> generateToolStep
  generateToolStepWithRetry --> sleep
  generateToolStepWithRetry --> emptyUsage
  generateToolStepWithRetry --> addUsage
  generateToolStepWithRetry --> processTaskMemory
  generateToolStepWithRetry --> addItem
  generateToolStepWithRetry --> runActorTask
  generateToolStepWithRetry --> buildTaskPromptPrefix
  generateToolStepWithRetry --> buildTaskRunInput
  generateToolStepWithRetry --> computeRetryDelayMs
  generateToolStepWithRetry --> formatError
  generateToolStepWithRetry --> isTransientLlmError
  generateToolStepWithRetry --> getActorConfig
  buildTaskPromptPrefix --> getChildTaskArtifacts
  buildTaskPromptPrefix --> buildTaskSnapshot
  buildTaskRunInput --> buildTaskSnapshot
  buildTaskRunInput --> getActiveTaskItems
  getChildTaskArtifacts --> buildTaskRunInput
  getChildTaskArtifacts --> buildTaskSnapshot
  getChildTaskArtifacts --> getActorToolNames
  getChildTaskArtifacts --> getActiveTaskItems
  getChildTaskArtifacts --> formatTaskLine
  buildTaskSnapshot --> buildTaskRunInput
  buildTaskSnapshot --> getChildTaskArtifacts
  buildTaskSnapshot --> getActorToolNames
  buildTaskSnapshot --> getActiveTaskItems
  buildTaskSnapshot --> formatTaskLine
  getActorToolNames --> truncate
  getActorToolNames --> safeJson
  getActorToolNames --> asText
  getActorToolNames --> toDelegationMessage
  safeJson --> truncate
  safeJson --> buildTaskPromptPrefix
  safeJson --> asText
  safeJson --> toDelegationMessage
  asText --> truncate
  asText --> buildTaskPromptPrefix
  asText --> safeJson
  asText --> toDelegationMessage
  getActiveTaskItems --> truncate
  getActiveTaskItems --> buildTaskPromptPrefix
  getActiveTaskItems --> safeJson
  getActiveTaskItems --> asText
  getActiveTaskItems --> toDelegationMessage
  toDelegationMessage --> truncate
  toDelegationMessage --> buildTaskPromptPrefix
  toDelegationMessage --> safeJson
  toDelegationMessage --> asText
  toInputItem --> truncate
  toInputItem --> buildTaskPromptPrefix
  toInputItem --> safeJson
  toInputItem --> asText
  toInputItem --> toDelegationMessage
  formatTaskLine --> truncate
  formatTaskLine --> buildTaskPromptPrefix
  formatTaskLine --> getChildTaskArtifacts
  formatTaskLine --> buildTaskSnapshot
  createGraphQueries --> shouldAutoRetryTask
  byNewestArtifact --> createGraphQueries
  byNewestArtifact --> shouldAutoRetryTask
  latestArtifacts --> createGraphQueries
  latestArtifacts --> shouldAutoRetryTask
  processSession --> createGraphQueries
  processSession --> processOneTask
  processSession --> recoverStaleTasks
  processOneTask --> runActorTask
  processOneTask --> createGraphQueries
  processOneTask --> updateActorStatus
  processOneTask --> accumulateSessionUsage
  processOneTask --> scheduleRecoverableRetry
  processOneTask --> formatError
  updateActorStatus --> now
  updateActorStatus --> emptyUsage
  updateActorStatus --> addUsage
  updateActorStatus --> createGraphQueries
  updateActorStatus --> processSession
  updateActorStatus --> processOneTask
  updateActorStatus --> accumulateSessionUsage
  updateActorStatus --> scheduleRecoverableRetry
  updateActorStatus --> recoverStaleTasks
  accumulateSessionUsage --> now
  accumulateSessionUsage --> emptyUsage
  accumulateSessionUsage --> addUsage
  accumulateSessionUsage --> createGraphQueries
  accumulateSessionUsage --> processSession
  accumulateSessionUsage --> processOneTask
  accumulateSessionUsage --> scheduleRecoverableRetry
  accumulateSessionUsage --> recoverStaleTasks
  scheduleRecoverableRetry --> now
  scheduleRecoverableRetry --> createGraphQueries
  scheduleRecoverableRetry --> processSession
  scheduleRecoverableRetry --> processOneTask
  scheduleRecoverableRetry --> recoverStaleTasks
  recoverStaleTasks --> createGraphQueries
  recoverStaleTasks --> processSession
  recoverStaleTasks --> processOneTask
  computeRetryDelayMs --> now
  computeRetryDelayMs --> formatError
  computeRetryDelayMs --> asRecord
  formatError --> now
  formatError --> asRecord
  isTransientLlmError --> now
  isTransientLlmError --> formatError
  isTransientLlmError --> asRecord
  shouldAutoRetryTask --> now
  asRecord --> now
  asRecord --> formatError
  startServer --> handleRequest
  startServer --> getState
  startServer --> sendText
  serveFile --> subscribe
  serveFile --> replay
  serveFile --> startServer
  serveFile --> sseHandler
  serveFile --> handleRequest
  serveFile --> getState
  serveFile --> mimeFor
  serveFile --> sendJson
  serveFile --> sendText
  serveFile --> safeResolve
  sseHandler --> subscribe
  sseHandler --> replay
  sseHandler --> startServer
  sseHandler --> serveFile
  sseHandler --> handleRequest
  sseHandler --> getState
  sseHandler --> sendJson
  sseHandler --> sendText
  sseHandler --> safeResolve
  handleRequest --> startServer
  handleRequest --> serveFile
  handleRequest --> sseHandler
  handleRequest --> getState
  handleRequest --> sendJson
  handleRequest --> sendText
  handleRequest --> safeResolve
  mimeFor --> subscribe
  mimeFor --> replay
  mimeFor --> serveFile
  mimeFor --> sseHandler
  mimeFor --> handleRequest
  mimeFor --> getState
  mimeFor --> sendJson
  mimeFor --> sendText
  mimeFor --> safeResolve
  sendJson --> subscribe
  sendJson --> replay
  sendJson --> serveFile
  sendJson --> sseHandler
  sendJson --> handleRequest
  sendJson --> getState
  sendJson --> mimeFor
  sendJson --> sendText
  sendJson --> safeResolve
  sendText --> subscribe
  sendText --> replay
  sendText --> serveFile
  sendText --> sseHandler
  sendText --> handleRequest
  sendText --> getState
  sendText --> mimeFor
  sendText --> sendJson
  sendText --> safeResolve
  safeResolve --> subscribe
  safeResolve --> replay
  safeResolve --> startServer
  safeResolve --> serveFile
  safeResolve --> sseHandler
  safeResolve --> handleRequest
  safeResolve --> getState
  safeResolve --> mimeFor
  safeResolve --> sendJson
  safeResolve --> sendText
  getString --> getStringArray
  getOptionalString --> getStringArray
  getPositiveInteger --> getStringArray
  getToolNameArray --> getStringArray
  resolveFilePlaceholders --> normalizeArtifactPath
  resolveFilePlaceholders --> readArtifactContent
  writeArtifactContent --> addArtifact
  writeArtifactContent --> ensureRelation
  writeArtifactContent --> getLatestArtifactByPath
  writeArtifactContent --> upsertArtifact
  writeArtifactContent --> artifactFilePath
  getLatestArtifactByPath --> addArtifact
  getLatestArtifactByPath --> ensureRelation
  getLatestArtifactByPath --> upsertArtifact
  upsertArtifact --> addArtifact
  upsertArtifact --> ensureRelation
  upsertArtifact --> getLatestArtifactByPath
  normalizeArtifactPath --> addArtifact
  normalizeArtifactPath --> ensureRelation
  normalizeArtifactPath --> writeArtifactContent
  normalizeArtifactPath --> getLatestArtifactByPath
  normalizeArtifactPath --> upsertArtifact
  normalizeArtifactPath --> artifactFilePath
  readArtifactContent --> addArtifact
  readArtifactContent --> ensureRelation
  readArtifactContent --> writeArtifactContent
  readArtifactContent --> getLatestArtifactByPath
  readArtifactContent --> upsertArtifact
  readArtifactContent --> artifactFilePath
  artifactFilesRoot --> addArtifact
  artifactFilesRoot --> ensureRelation
  artifactFilesRoot --> writeArtifactContent
  artifactFilesRoot --> getLatestArtifactByPath
  artifactFilesRoot --> upsertArtifact
  artifactFilesRoot --> artifactFilePath
  artifactFilePath --> addArtifact
  artifactFilePath --> ensureRelation
  artifactFilePath --> writeArtifactContent
  artifactFilePath --> getLatestArtifactByPath
  artifactFilePath --> upsertArtifact
  artifactFilePath --> artifactFilesRoot
  executeToolCall --> getAgentDefinition
  getActorConfig --> getAgentDefinition
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `getAgentDefinition` | `agents/index.ts` |  |
| `generateText` | `ai/client.ts` | `generateToolStep`, `withRetry`, `extractText`, `extractToolCalls`, `extractUsage` |
| `generateToolStep` | `ai/client.ts` | `withRetry`, `extractText`, `extractToolCalls`, `extractUsage` |
| `describeLlm` | `ai/client.ts` | `generateText`, `generateToolStep`, `withRetry`, `isRetryable`, `sleep`, `extractText`, `extractUsage` |
| `withRetry` | `ai/client.ts` |  |
| `isRetryable` | `ai/client.ts` | `generateText`, `generateToolStep`, `withRetry`, `sleep`, `extractText`, `extractToolCalls`, `extractUsage` |
| `sleep` | `ai/client.ts` | `generateText`, `generateToolStep`, `withRetry`, `isRetryable`, `extractText`, `extractToolCalls`, `extractUsage`, `getAgentDefinition`, `emptyUsage`, `addUsage`, `processTaskMemory`, `addItem`, `runActorTask`, `generateToolStepWithRetry`, `buildTaskPromptPrefix`, `buildTaskRunInput`, `computeRetryDelayMs`, `formatError`, `isTransientLlmError`, `getActorConfig` |
| `extractText` | `ai/parsers.ts` | `safeParseObject` |
| `extractToolCalls` | `ai/parsers.ts` | `safeParseObject` |
| `extractUsage` | `ai/parsers.ts` |  |
| `safeParseObject` | `ai/parsers.ts` |  |
| `ensureAgent` | `dashboard/app.js` | `renderPipeline`, `startGroup`, `addFI`, `handleEvent`, `trunc`, `esc`, `time` |
| `renderPipeline` | `dashboard/app.js` | `startGroup`, `addFI`, `handleEvent`, `trunc`, `esc`, `time` |
| `startGroup` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `addFI`, `handleEvent`, `trunc`, `esc`, `time`, `actorTag` |
| `addFI` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `handleEvent`, `trunc`, `esc`, `time`, `actorTag` |
| `handleEvent` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `addFI`, `trunc`, `esc`, `actorTag` |
| `openDrawer` | `dashboard/app.js` | `trunc`, `esc` |
| `closeDrawer` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `openDrawer`, `refreshSidebar`, `renderStats`, `renderTasks`, `taskRow`, `renderArtifacts`, `renderRelations`, `renderGraph`, `trunc`, `esc` |
| `refreshSidebar` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `openDrawer`, `renderStats`, `renderTasks`, `taskRow`, `renderArtifacts`, `renderRelations`, `renderGraph`, `trunc`, `esc` |
| `renderStats` | `dashboard/app.js` | `openDrawer`, `renderTasks`, `taskRow`, `renderArtifacts`, `renderRelations`, `trunc`, `esc` |
| `renderTasks` | `dashboard/app.js` | `openDrawer`, `taskRow`, `renderArtifacts`, `renderRelations`, `trunc`, `esc` |
| `taskRow` | `dashboard/app.js` | `openDrawer`, `renderArtifacts`, `renderRelations`, `trunc`, `esc` |
| `renderArtifacts` | `dashboard/app.js` | `openDrawer`, `renderRelations`, `trunc`, `esc` |
| `renderRelations` | `dashboard/app.js` | `actorNodeId`, `taskNodeId`, `artifactNodeId`, `renderLegendItem`, `trunc`, `esc` |
| `actorNodeId` | `dashboard/app.js` | `taskNodeId`, `artifactNodeId`, `renderLegendItem`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `renderGraph`, `esc` |
| `taskNodeId` | `dashboard/app.js` | `artifactNodeId`, `renderLegendItem`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `renderGraph`, `esc` |
| `artifactNodeId` | `dashboard/app.js` | `renderLegendItem`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `renderGraph`, `esc` |
| `renderLegendItem` | `dashboard/app.js` | `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `renderGraph`, `esc` |
| `updateGraphChrome` | `dashboard/app.js` | `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `buildGraphSignature`, `renderGraph` |
| `saveCurrentViewport` | `dashboard/app.js` | `updateGraphChrome`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `buildGraphSignature`, `buildExecutionProjection`, `renderGraph` |
| `zoomGraph` | `dashboard/app.js` | `updateGraphChrome`, `saveCurrentViewport`, `fitGraph`, `toggleFullscreen`, `ensureGraphUi`, `buildGraphSignature`, `buildExecutionProjection`, `renderGraph` |
| `fitGraph` | `dashboard/app.js` | `actorNodeId`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `toggleFullscreen`, `ensureGraphUi`, `buildGraphSignature`, `buildExecutionProjection`, `renderGraph` |
| `toggleFullscreen` | `dashboard/app.js` | `actorNodeId`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `ensureGraphUi`, `buildGraphSignature`, `buildExecutionProjection`, `renderGraph` |
| `ensureGraphUi` | `dashboard/app.js` | `actorNodeId`, `taskNodeId`, `updateGraphChrome`, `saveCurrentViewport`, `zoomGraph`, `fitGraph`, `toggleFullscreen`, `buildGraphSignature`, `buildExecutionProjection`, `renderGraph` |
| `buildGraphSignature` | `dashboard/app.js` | `actorNodeId`, `taskNodeId`, `buildExecutionProjection` |
| `buildExecutionProjection` | `dashboard/app.js` | `actorNodeId`, `taskNodeId`, `buildGraphSignature` |
| `buildArtifactProjection` | `dashboard/app.js` | `taskNodeId`, `artifactNodeId`, `buildGraphSignature` |
| `getGraphStyles` | `dashboard/app.js` |  |
| `renderGraphNow` | `dashboard/app.js` | `openDrawer`, `updateGraphChrome`, `saveCurrentViewport`, `ensureGraphUi`, `buildExecutionProjection`, `buildArtifactProjection`, `getGraphStyles`, `renderGraph` |
| `renderGraph` | `dashboard/app.js` | `handleEvent`, `refreshSidebar`, `renderGraphNow` |
| `trunc` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `addFI`, `esc` |
| `esc` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `addFI`, `trunc` |
| `time` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `addFI`, `trunc`, `esc` |
| `actorTag` | `dashboard/app.js` | `ensureAgent`, `renderPipeline`, `startGroup`, `addFI`, `trunc`, `esc`, `time`, `emit`, `truncate`, `pre`, `badge`, `actorColor` |
| `uuid` | `domain.ts` |  |
| `now` | `domain.ts` |  |
| `emptyUsage` | `domain.ts` |  |
| `addUsage` | `domain.ts` |  |
| `emit` | `events.ts` |  |
| `subscribe` | `events.ts` |  |
| `replay` | `events.ts` |  |
| `resolveLabel` | `index.ts` | `getAgentDefinition`, `describeLlm`, `uuid`, `now`, `startSession`, `main`, `openBrowser`, `truncate`, `createRuntime`, `addItem`, `addRelation`, `processSession`, `startServer` |
| `startSession` | `index.ts` | `getAgentDefinition`, `describeLlm`, `uuid`, `now`, `main`, `openBrowser`, `createRuntime`, `addItem`, `addRelation`, `processSession`, `startServer` |
| `main` | `index.ts` | `describeLlm`, `now`, `resolveLabel`, `startSession`, `openBrowser`, `statusIcon`, `createRuntime`, `processSession`, `startServer` |
| `openBrowser` | `index.ts` | `getAgentDefinition`, `describeLlm`, `uuid`, `now`, `resolveLabel`, `startSession`, `main`, `truncate`, `createRuntime`, `addItem`, `addRelation`, `processSession`, `startServer` |
| `truncate` | `index.ts` | `getAgentDefinition`, `describeLlm`, `uuid`, `now`, `resolveLabel`, `startSession`, `main`, `openBrowser`, `createRuntime`, `addItem`, `addRelation`, `processSession`, `startServer`, `actorTag`, `emit`, `pre`, `badge`, `actorColor`, `extractTag`, `buildTaskPromptPrefix`, `safeJson`, `asText`, `toDelegationMessage` |
| `statusIcon` | `index.ts` | `getAgentDefinition`, `describeLlm`, `uuid`, `now`, `resolveLabel`, `startSession`, `main`, `openBrowser`, `truncate`, `createRuntime`, `addItem`, `addRelation`, `processSession`, `startServer` |
| `ts` | `log.ts` | `actorTag`, `emit`, `truncate`, `pre`, `badge`, `actorColor` |
| `pre` | `log.ts` | `actorTag`, `emit`, `truncate`, `ts`, `badge`, `actorColor` |
| `badge` | `log.ts` | `actorTag`, `emit`, `truncate`, `pre`, `actorColor` |
| `actorColor` | `log.ts` | `actorTag`, `emit`, `truncate`, `pre`, `badge` |
| `serializeItems` | `memory/observer.ts` | `truncate`, `extractTag` |
| `parseObserverOutput` | `memory/observer.ts` | `generateText`, `emptyUsage`, `serializeItems`, `buildPrompt`, `extractTag` |
| `runObserver` | `memory/observer.ts` | `generateText`, `emptyUsage`, `serializeItems`, `parseObserverOutput`, `buildPrompt` |
| `estimateTokens` | `memory/observer.ts` |  |
| `buildPrompt` | `memory/observer.ts` | `generateText`, `emptyUsage`, `serializeItems`, `parseObserverOutput`, `extractTag`, `addUsage`, `estimateTokens` |
| `extractTag` | `memory/observer.ts` | `generateText`, `emptyUsage`, `serializeItems`, `parseObserverOutput`, `buildPrompt`, `addUsage`, `estimateTokens` |
| `processTaskMemory` | `memory/processor.ts` | `emptyUsage`, `addUsage`, `serializeItems`, `runObserver`, `estimateTokens`, `accumulateMemoryUsage`, `freshMemory`, `splitByTailBudget`, `persistLog`, `runReflector` |
| `accumulateMemoryUsage` | `memory/processor.ts` | `emptyUsage`, `addUsage` |
| `freshMemory` | `memory/processor.ts` | `serializeItems`, `estimateTokens`, `processTaskMemory`, `pad`, `estimateItemTokens` |
| `pad` | `memory/processor.ts` | `emptyUsage`, `serializeItems`, `estimateTokens`, `processTaskMemory`, `freshMemory`, `estimateItemTokens` |
| `estimateItemTokens` | `memory/processor.ts` | `emptyUsage`, `serializeItems`, `estimateTokens`, `processTaskMemory`, `freshMemory`, `pad` |
| `splitByTailBudget` | `memory/processor.ts` | `emptyUsage`, `serializeItems`, `estimateTokens`, `processTaskMemory`, `freshMemory`, `pad`, `estimateItemTokens` |
| `persistLog` | `memory/processor.ts` | `emptyUsage`, `addUsage`, `serializeItems`, `runObserver`, `estimateTokens`, `processTaskMemory`, `accumulateMemoryUsage`, `freshMemory`, `pad`, `splitByTailBudget` |
| `runReflector` | `memory/reflector.ts` | `generateText`, `emptyUsage`, `addUsage`, `estimateTokens`, `buildPrompt`, `extractTag` |
| `createRuntime` | `runtime.ts` | `uuid`, `now`, `addRelation` |
| `addItem` | `runtime.ts` | `uuid`, `now`, `addRelation` |
| `addRelation` | `runtime.ts` | `uuid`, `now` |
| `addArtifact` | `runtime.ts` | `uuid`, `now`, `addRelation` |
| `ensureRelation` | `runtime.ts` | `addRelation` |
| `runActorTask` | `scheduler/actor.ts` | `getAgentDefinition`, `emptyUsage`, `addUsage`, `processTaskMemory`, `addItem`, `generateToolStepWithRetry`, `buildTaskPromptPrefix`, `buildTaskRunInput`, `formatError`, `executeToolCall`, `getActorConfig` |
| `generateToolStepWithRetry` | `scheduler/actor.ts` | `getAgentDefinition`, `generateToolStep`, `sleep`, `emptyUsage`, `addUsage`, `processTaskMemory`, `addItem`, `runActorTask`, `buildTaskPromptPrefix`, `buildTaskRunInput`, `computeRetryDelayMs`, `formatError`, `isTransientLlmError`, `getActorConfig` |
| `buildTaskPromptPrefix` | `scheduler/context.ts` | `getChildTaskArtifacts`, `buildTaskSnapshot` |
| `buildTaskRunInput` | `scheduler/context.ts` | `buildTaskSnapshot`, `getActiveTaskItems` |
| `getChildTaskArtifacts` | `scheduler/context.ts` | `buildTaskRunInput`, `buildTaskSnapshot`, `getActorToolNames`, `getActiveTaskItems`, `formatTaskLine` |
| `buildTaskSnapshot` | `scheduler/context.ts` | `buildTaskRunInput`, `getChildTaskArtifacts`, `getActorToolNames`, `getActiveTaskItems`, `formatTaskLine` |
| `getActorToolNames` | `scheduler/context.ts` | `truncate`, `safeJson`, `asText`, `toDelegationMessage` |
| `safeJson` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `asText`, `toDelegationMessage` |
| `asText` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `safeJson`, `toDelegationMessage` |
| `getActiveTaskItems` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `safeJson`, `asText`, `toDelegationMessage` |
| `toDelegationMessage` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `safeJson`, `asText` |
| `toInputItem` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `safeJson`, `asText`, `toDelegationMessage` |
| `formatTaskLine` | `scheduler/context.ts` | `truncate`, `buildTaskPromptPrefix`, `getChildTaskArtifacts`, `buildTaskSnapshot` |
| `createGraphQueries` | `scheduler/graph.ts` | `shouldAutoRetryTask` |
| `byNewestArtifact` | `scheduler/graph.ts` | `createGraphQueries`, `shouldAutoRetryTask` |
| `latestArtifacts` | `scheduler/graph.ts` | `createGraphQueries`, `shouldAutoRetryTask` |
| `processSession` | `scheduler/loop.ts` | `createGraphQueries`, `processOneTask`, `recoverStaleTasks` |
| `processOneTask` | `scheduler/loop.ts` | `runActorTask`, `createGraphQueries`, `updateActorStatus`, `accumulateSessionUsage`, `scheduleRecoverableRetry`, `formatError` |
| `updateActorStatus` | `scheduler/loop.ts` | `now`, `emptyUsage`, `addUsage`, `createGraphQueries`, `processSession`, `processOneTask`, `accumulateSessionUsage`, `scheduleRecoverableRetry`, `recoverStaleTasks` |
| `accumulateSessionUsage` | `scheduler/loop.ts` | `now`, `emptyUsage`, `addUsage`, `createGraphQueries`, `processSession`, `processOneTask`, `scheduleRecoverableRetry`, `recoverStaleTasks` |
| `scheduleRecoverableRetry` | `scheduler/loop.ts` | `now`, `createGraphQueries`, `processSession`, `processOneTask`, `recoverStaleTasks` |
| `recoverStaleTasks` | `scheduler/loop.ts` | `createGraphQueries`, `processSession`, `processOneTask` |
| `computeRetryDelayMs` | `scheduler/recovery.ts` | `now`, `formatError`, `asRecord` |
| `formatError` | `scheduler/recovery.ts` | `now`, `asRecord` |
| `isTransientLlmError` | `scheduler/recovery.ts` | `now`, `formatError`, `asRecord` |
| `shouldAutoRetryTask` | `scheduler/recovery.ts` | `now` |
| `asRecord` | `scheduler/recovery.ts` | `now`, `formatError` |
| `startServer` | `server.ts` | `handleRequest`, `getState`, `sendText` |
| `serveFile` | `server.ts` | `subscribe`, `replay`, `startServer`, `sseHandler`, `handleRequest`, `getState`, `mimeFor`, `sendJson`, `sendText`, `safeResolve` |
| `sseHandler` | `server.ts` | `subscribe`, `replay`, `startServer`, `serveFile`, `handleRequest`, `getState`, `sendJson`, `sendText`, `safeResolve` |
| `handleRequest` | `server.ts` | `startServer`, `serveFile`, `sseHandler`, `getState`, `sendJson`, `sendText`, `safeResolve` |
| `getState` | `server.ts` |  |
| `mimeFor` | `server.ts` | `subscribe`, `replay`, `serveFile`, `sseHandler`, `handleRequest`, `getState`, `sendJson`, `sendText`, `safeResolve` |
| `sendJson` | `server.ts` | `subscribe`, `replay`, `serveFile`, `sseHandler`, `handleRequest`, `getState`, `mimeFor`, `sendText`, `safeResolve` |
| `sendText` | `server.ts` | `subscribe`, `replay`, `serveFile`, `sseHandler`, `handleRequest`, `getState`, `mimeFor`, `sendJson`, `safeResolve` |
| `safeResolve` | `server.ts` | `subscribe`, `replay`, `startServer`, `serveFile`, `sseHandler`, `handleRequest`, `getState`, `mimeFor`, `sendJson`, `sendText` |
| `getString` | `tools/args.ts` | `getStringArray` |
| `getOptionalString` | `tools/args.ts` | `getStringArray` |
| `getPositiveInteger` | `tools/args.ts` | `getStringArray` |
| `getStringArray` | `tools/args.ts` |  |
| `getToolNameArray` | `tools/args.ts` | `getStringArray` |
| `resolveFilePlaceholders` | `tools/artifact/placeholders.ts` | `normalizeArtifactPath`, `readArtifactContent` |
| `writeArtifactContent` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `getLatestArtifactByPath`, `upsertArtifact`, `artifactFilePath` |
| `getLatestArtifactByPath` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `upsertArtifact` |
| `upsertArtifact` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `getLatestArtifactByPath` |
| `normalizeArtifactPath` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `writeArtifactContent`, `getLatestArtifactByPath`, `upsertArtifact`, `artifactFilePath` |
| `readArtifactContent` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `writeArtifactContent`, `getLatestArtifactByPath`, `upsertArtifact`, `artifactFilePath` |
| `artifactFilesRoot` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `writeArtifactContent`, `getLatestArtifactByPath`, `upsertArtifact`, `artifactFilePath` |
| `artifactFilePath` | `tools/artifact/shared.ts` | `addArtifact`, `ensureRelation`, `writeArtifactContent`, `getLatestArtifactByPath`, `upsertArtifact`, `artifactFilesRoot` |
| `executeToolCall` | `tools/index.ts` | `getAgentDefinition` |
| `getActorConfig` | `tools/index.ts` | `getAgentDefinition` |