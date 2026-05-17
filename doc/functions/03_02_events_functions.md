# 03_02_events — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph autonomy_capability_map["autonomy/capability-map"]
    buildCapabilityMap["buildCapabilityMap()"]
    listAgentNamesFromWorkspace["listAgentNamesFromWorkspace()"]
    toCapabilityEntry["toCapabilityEntry()"]
  end
  subgraph helpers_agent_template["helpers/agent-template"]
    loadAgentTemplate["loadAgentTemplate()"]
  end
  subgraph autonomy_contract["autonomy/contract"]
    readGoalContract["readGoalContract()"]
    asStringArray["asStringArray()"]
    asApprovalRequirements["asApprovalRequirements()"]
    asGoalId["asGoalId()"]
  end
  subgraph config_index["config/index"]
    parsePositiveInt["parsePositiveInt()"]
    readFlag["readFlag()"]
    parseBoolean["parseBoolean()"]
  end
  subgraph helpers_fs["helpers/fs"]
    exists["exists()"]
  end
  subgraph autonomy_plan_generate["autonomy/plan-generate"]
    asTaskPriority["asTaskPriority()"]
    parsePlanTask["parsePlanTask()"]
    generatePlanDecision["generatePlanDecision()"]
    parseJsonFromModelOutput["parseJsonFromModelOutput()"]
    parsePlanDecision["parsePlanDecision()"]
    buildPlanPrompt["buildPlanPrompt()"]
    buildRepairPrompt["buildRepairPrompt()"]
    callPlanner["callPlanner()"]
    repairPlanDecision["repairPlanDecision()"]
    generateReplanDecision["generateReplanDecision()"]
    formatCapabilityMap["formatCapabilityMap()"]
    parseReplanDecision["parseReplanDecision()"]
    parsePlanSpec["parsePlanSpec()"]
    isAnalyticalGoal["isAnalyticalGoal()"]
    buildGoalPayload["buildGoalPayload()"]
    buildQualityConstraints["buildQualityConstraints()"]
    getPlannerModel["getPlannerModel()"]
    parseReplanPatch["parseReplanPatch()"]
  end
  subgraph features_tasks_index["features/tasks/index"]
    asString["asString()"]
    asNumber["asNumber()"]
    asOptionalNumber["asOptionalNumber()"]
    asOwner["asOwner()"]
    asOwnerOptional["asOwnerOptional()"]
    asStatus["asStatus()"]
    asPriority["asPriority()"]
    listTasks["listTasks()"]
    saveTask["saveTask()"]
    findTaskById["findTaskById()"]
    createTask["createTask()"]
    reconcileDependencyStates["reconcileDependencyStates()"]
    listWaitingHumanTasks["listWaitingHumanTasks()"]
    reopenTaskWithHumanAnswer["reopenTaskWithHumanAnswer()"]
    allTasksCompleted["allTasksCompleted()"]
    readTaskFromPath["readTaskFromPath()"]
    writeTask["writeTask()"]
    hasReachedSchedule["hasReachedSchedule()"]
    pendingDependencies["pendingDependencies()"]
    compareTaskPriority["compareTaskPriority()"]
    claimNextTask["claimNextTask()"]
    markTaskCompleted["markTaskCompleted()"]
    markTaskWaitingHuman["markTaskWaitingHuman()"]
    markTaskBlocked["markTaskBlocked()"]
    recoverStaleInProgressTasks["recoverStaleInProgressTasks()"]
    countTasksByStatus["countTasksByStatus()"]
    compactFrontmatter["compactFrontmatter()"]
    normalizeTaskFrontmatter["normalizeTaskFrontmatter()"]
    serializeTask["serializeTask()"]
  end
  subgraph autonomy_materialize["autonomy/materialize"]
    toWorkflowFromPlan["toWorkflowFromPlan()"]
    buildPlanSnapshotPath["buildPlanSnapshotPath()"]
    writePlanSnapshot["writePlanSnapshot()"]
    writeAutonomyState["writeAutonomyState()"]
    writeNoGoFile["writeNoGoFile()"]
  end
  subgraph helpers_paths["helpers/paths"]
    slugify["slugify()"]
    asRelativeSafePath["asRelativeSafePath()"]
    isPlainMarkdownFilename["isPlainMarkdownFilename()"]
    isPathSafe["isPathSafe()"]
    asRelativeSafePaths["asRelativeSafePaths()"]
  end
  subgraph core_openai["core/openai"]
    getOpenAI["getOpenAI()"]
  end
  subgraph autonomy_plan_validate["autonomy/plan-validate"]
    validatePlanDecision["validatePlanDecision()"]
    hasUnique["hasUnique()"]
    validateMustHaveCoverage["validateMustHaveCoverage()"]
    validateTaskOwnersAndCapabilities["validateTaskOwnersAndCapabilities()"]
    validateDependencies["validateDependencies()"]
    validateForbidden["validateForbidden()"]
    normalize["normalize()"]
    collectPlanCorpus["collectPlanCorpus()"]
    hasCycle["hasCycle()"]
  end
  subgraph autonomy_replan["autonomy/replan"]
    maybeApplyReplan["maybeApplyReplan()"]
    nowIso["nowIso()"]
    emitSkipIfChanged["emitSkipIfChanged()"]
    readStateFromDisk["readStateFromDisk()"]
    detectReplanTrigger["detectReplanTrigger()"]
    patchNeedsManualApproval["patchNeedsManualApproval()"]
    validatePatchSet["validatePatchSet()"]
    applyPatchSet["applyPatchSet()"]
    writeReplanSnapshot["writeReplanSnapshot()"]
  end
  subgraph autonomy_runtime["autonomy/runtime"]
    resolveAutonomousWorkflow["resolveAutonomousWorkflow()"]
  end
  subgraph autonomy_feasibility["autonomy/feasibility"]
    toNoGoDecision["toNoGoDecision()"]
  end
  subgraph bootstrap["bootstrap"]
    ensureWorkspaceInitialized["ensureWorkspaceInitialized()"]
    assertAgentTemplatesExist["assertAgentTemplatesExist()"]
    ensureProjectFile["ensureProjectFile()"]
    ensureProjectReadme["ensureProjectReadme()"]
    syncGoalAliasToProjectWorkspace["syncGoalAliasToProjectWorkspace()"]
    seedTasksIfNeeded["seedTasksIfNeeded()"]
    ensureFile["ensureFile()"]
  end
  subgraph workflows_registry["workflows/registry"]
    resolveWorkflow["resolveWorkflow()"]
    listWorkflows["listWorkflows()"]
  end
  subgraph core_agent_runner["core/agent-runner"]
    createFreshSession["createFreshSession()"]
    runAgent["runAgent()"]
  end
  subgraph helpers_agent_response_loop["helpers/agent-response-loop"]
    createUsageTotals["createUsageTotals()"]
    buildResponsesTools["buildResponsesTools()"]
    resolveFunctionTools["resolveFunctionTools()"]
    prepareTurnRequest["prepareTurnRequest()"]
    updateUsageTotals["updateUsageTotals()"]
    appendAssistantMessage["appendAssistantMessage()"]
    createDoneResult["createDoneResult()"]
    createFailedResult["createFailedResult()"]
    createWaitingHumanResult["createWaitingHumanResult()"]
    parseModelOutput["parseModelOutput()"]
    executeFunctionCalls["executeFunctionCalls()"]
    messagesToResponseInput["messagesToResponseInput()"]
    buildUsage["buildUsage()"]
    parseToolArguments["parseToolArguments()"]
    parseResponseOutput["parseResponseOutput()"]
    extractPathArgs["extractPathArgs()"]
    executeMcpTool["executeMcpTool()"]
  end
  subgraph core_events["core/events"]
    ensureEventPath["ensureEventPath()"]
    stringifyEvent["stringifyEvent()"]
  end
  subgraph core_logger["core/logger"]
    parseLogLevel["parseLogLevel()"]
    shouldLog["shouldLog()"]
    write["write()"]
  end
  subgraph features_heartbeat_index["features/heartbeat/index"]
    runHeartbeatLoop["runHeartbeatLoop()"]
    buildVerboseDataSummary["buildVerboseDataSummary()"]
    resolveWaitingHumans["resolveWaitingHumans()"]
    sleep["sleep()"]
    readNumber["readNumber()"]
    truncate["truncate()"]
    countWords["countWords()"]
    isTextLikeOutputPath["isTextLikeOutputPath()"]
    formatDurationMs["formatDurationMs()"]
    chooseAutoHumanAnswer["chooseAutoHumanAnswer()"]
    collectOutputContentStats["collectOutputContentStats()"]
    askHuman["askHuman()"]
    buildTaskPrompt["buildTaskPrompt()"]
    writeWaitFile["writeWaitFile()"]
    markProjectCompleted["markProjectCompleted()"]
    snapshotSessionMemory["snapshotSessionMemory()"]
    maybeCompleteProject["maybeCompleteProject()"]
    runAgentWithTimeout["runAgentWithTimeout()"]
  end
  subgraph tools_index["tools/index"]
    findTool["findTool()"]
  end
  subgraph memory_observer["memory/observer"]
    getContent["getContent()"]
    serializeMessages["serializeMessages()"]
    parseObserverOutput["parseObserverOutput()"]
    buildPrompt["buildPrompt()"]
    extractTag["extractTag()"]
    runObserver["runObserver()"]
  end
  subgraph helpers_tokens["helpers/tokens"]
    estimateMessagesTokens["estimateMessagesTokens()"]
    recordActualUsage["recordActualUsage()"]
    getCalibration["getCalibration()"]
    estimateTokensRaw["estimateTokensRaw()"]
    estimateTokens["estimateTokens()"]
    withSafetyMargin["withSafetyMargin()"]
    estimateMessageTokens["estimateMessageTokens()"]
    estimateMessagesTokensRaw["estimateMessagesTokensRaw()"]
  end
  subgraph memory_processor["memory/processor"]
    processMemory["processMemory()"]
    buildObservationAppendix["buildObservationAppendix()"]
    runObservation["runObservation()"]
    runReflection["runReflection()"]
    flushMemory["flushMemory()"]
    sanitizeSessionId["sanitizeSessionId()"]
    nextCounter["nextCounter()"]
    pad["pad()"]
    persistObserverLog["persistObserverLog()"]
    persistReflectorLog["persistReflectorLog()"]
    splitByTailBudget["splitByTailBudget()"]
  end
  subgraph index["index"]
    requestShutdown["requestShutdown()"]
    main["main()"]
  end
  subgraph mcp_client["mcp/client"]
    createMcpManager["createMcpManager()"]
    loadMcpConfig["loadMcpConfig()"]
    createStdioTransport["createStdioTransport()"]
    extractText["extractText()"]
    parsePrefixedName["parsePrefixedName()"]
    mapTools["mapTools()"]
    buildTransportEnv["buildTransportEnv()"]
  end
  subgraph memory_reflector["memory/reflector"]
    runReflector["runReflector()"]
  end
  subgraph tools_common["tools/common"]
    asWorkspaceSafePath["asWorkspaceSafePath()"]
    asWorkspaceSafePaths["asWorkspaceSafePaths()"]
    toSlug["toSlug()"]
  end
  subgraph tools_image["tools/image"]
    getGeminiApiKey["getGeminiApiKey()"]
    callGeminiInteractions["callGeminiInteractions()"]
    extractGeminiImage["extractGeminiImage()"]
    buildImagePrompt["buildImagePrompt()"]
    geminiGenerate["geminiGenerate()"]
    geminiEdit["geminiEdit()"]
  end
  subgraph tools_render_html["tools/render-html"]
    markdownToHtml["markdownToHtml()"]
  end
  buildCapabilityMap --> listAgentNamesFromWorkspace
  buildCapabilityMap --> toCapabilityEntry
  listAgentNamesFromWorkspace --> toCapabilityEntry
  listAgentNamesFromWorkspace --> loadAgentTemplate
  toCapabilityEntry --> listAgentNamesFromWorkspace
  toCapabilityEntry --> loadAgentTemplate
  readGoalContract --> asStringArray
  readGoalContract --> asApprovalRequirements
  readGoalContract --> asGoalId
  readGoalContract --> parsePositiveInt
  readGoalContract --> exists
  asStringArray --> asApprovalRequirements
  asStringArray --> asGoalId
  asStringArray --> parsePositiveInt
  asStringArray --> exists
  asStringArray --> asTaskPriority
  asStringArray --> parsePlanTask
  asStringArray --> asString
  asStringArray --> asNumber
  asStringArray --> asOptionalNumber
  asStringArray --> asOwner
  asStringArray --> asOwnerOptional
  asStringArray --> asStatus
  asStringArray --> asPriority
  asApprovalRequirements --> asStringArray
  asApprovalRequirements --> asGoalId
  asApprovalRequirements --> parsePositiveInt
  asApprovalRequirements --> exists
  asGoalId --> asStringArray
  asGoalId --> asApprovalRequirements
  asGoalId --> parsePositiveInt
  asGoalId --> exists
  toWorkflowFromPlan --> buildPlanSnapshotPath
  toWorkflowFromPlan --> slugify
  writePlanSnapshot --> buildPlanSnapshotPath
  buildPlanSnapshotPath --> slugify
  generatePlanDecision --> asStringArray
  generatePlanDecision --> parseJsonFromModelOutput
  generatePlanDecision --> parsePlanTask
  generatePlanDecision --> parsePlanDecision
  generatePlanDecision --> buildPlanPrompt
  generatePlanDecision --> buildRepairPrompt
  generatePlanDecision --> callPlanner
  repairPlanDecision --> asStringArray
  repairPlanDecision --> parseJsonFromModelOutput
  repairPlanDecision --> parsePlanTask
  repairPlanDecision --> parsePlanDecision
  repairPlanDecision --> buildRepairPrompt
  repairPlanDecision --> callPlanner
  generateReplanDecision --> parseJsonFromModelOutput
  generateReplanDecision --> formatCapabilityMap
  generateReplanDecision --> callPlanner
  generateReplanDecision --> parseReplanDecision
  parseJsonFromModelOutput --> asStringArray
  parseJsonFromModelOutput --> asTaskPriority
  parseJsonFromModelOutput --> parsePlanTask
  asTaskPriority --> asStringArray
  asTaskPriority --> parsePlanTask
  parsePlanTask --> asStringArray
  parsePlanTask --> asTaskPriority
  parsePlanSpec --> asStringArray
  parsePlanSpec --> parsePlanTask
  parsePlanDecision --> asStringArray
  parsePlanDecision --> parsePlanSpec
  parsePlanDecision --> isAnalyticalGoal
  formatCapabilityMap --> isAnalyticalGoal
  buildGoalPayload --> isAnalyticalGoal
  isAnalyticalGoal --> buildQualityConstraints
  buildQualityConstraints --> formatCapabilityMap
  buildQualityConstraints --> buildGoalPayload
  buildQualityConstraints --> isAnalyticalGoal
  buildPlanPrompt --> formatCapabilityMap
  buildPlanPrompt --> buildGoalPayload
  buildPlanPrompt --> buildQualityConstraints
  buildPlanPrompt --> getPlannerModel
  buildPlanPrompt --> getOpenAI
  buildPlanPrompt --> loadAgentTemplate
  buildRepairPrompt --> parseJsonFromModelOutput
  buildRepairPrompt --> parsePlanDecision
  buildRepairPrompt --> formatCapabilityMap
  buildRepairPrompt --> buildGoalPayload
  buildRepairPrompt --> buildQualityConstraints
  buildRepairPrompt --> buildPlanPrompt
  buildRepairPrompt --> getPlannerModel
  buildRepairPrompt --> callPlanner
  buildRepairPrompt --> getOpenAI
  buildRepairPrompt --> loadAgentTemplate
  getPlannerModel --> parseJsonFromModelOutput
  getPlannerModel --> parsePlanTask
  getPlannerModel --> parsePlanDecision
  getPlannerModel --> buildPlanPrompt
  getPlannerModel --> buildRepairPrompt
  getPlannerModel --> callPlanner
  getPlannerModel --> getOpenAI
  getPlannerModel --> loadAgentTemplate
  callPlanner --> parseJsonFromModelOutput
  callPlanner --> parsePlanTask
  callPlanner --> parsePlanDecision
  callPlanner --> buildPlanPrompt
  callPlanner --> buildRepairPrompt
  callPlanner --> getPlannerModel
  callPlanner --> getOpenAI
  parseReplanPatch --> asStringArray
  parseReplanPatch --> parsePlanTask
  parseReplanDecision --> parseJsonFromModelOutput
  parseReplanDecision --> formatCapabilityMap
  parseReplanDecision --> callPlanner
  validatePlanDecision --> hasUnique
  validatePlanDecision --> validateMustHaveCoverage
  validatePlanDecision --> validateTaskOwnersAndCapabilities
  validatePlanDecision --> validateDependencies
  validatePlanDecision --> validateForbidden
  validatePlanDecision --> asRelativeSafePath
  validatePlanDecision --> isPlainMarkdownFilename
  hasUnique --> normalize
  collectPlanCorpus --> normalize
  hasCycle --> normalize
  validateMustHaveCoverage --> normalize
  validateTaskOwnersAndCapabilities --> collectPlanCorpus
  validateTaskOwnersAndCapabilities --> hasCycle
  validateDependencies --> hasUnique
  validateDependencies --> collectPlanCorpus
  validateDependencies --> hasCycle
  validateDependencies --> asRelativeSafePath
  validateDependencies --> isPlainMarkdownFilename
  validateForbidden --> hasUnique
  validateForbidden --> collectPlanCorpus
  validateForbidden --> validateMustHaveCoverage
  validateForbidden --> validateTaskOwnersAndCapabilities
  validateForbidden --> validateDependencies
  validateForbidden --> asRelativeSafePath
  validateForbidden --> isPlainMarkdownFilename
  maybeApplyReplan --> writeAutonomyState
  maybeApplyReplan --> generateReplanDecision
  maybeApplyReplan --> nowIso
  maybeApplyReplan --> emitSkipIfChanged
  maybeApplyReplan --> readStateFromDisk
  maybeApplyReplan --> detectReplanTrigger
  maybeApplyReplan --> patchNeedsManualApproval
  maybeApplyReplan --> validatePatchSet
  maybeApplyReplan --> applyPatchSet
  maybeApplyReplan --> writeReplanSnapshot
  maybeApplyReplan --> listTasks
  emitSkipIfChanged --> nowIso
  readStateFromDisk --> nowIso
  detectReplanTrigger --> isPlainMarkdownFilename
  patchNeedsManualApproval --> isPlainMarkdownFilename
  validatePatchSet --> isPlainMarkdownFilename
  applyPatchSet --> nowIso
  applyPatchSet --> saveTask
  applyPatchSet --> findTaskById
  applyPatchSet --> createTask
  writeReplanSnapshot --> generateReplanDecision
  writeReplanSnapshot --> nowIso
  writeReplanSnapshot --> emitSkipIfChanged
  writeReplanSnapshot --> readStateFromDisk
  writeReplanSnapshot --> detectReplanTrigger
  writeReplanSnapshot --> patchNeedsManualApproval
  writeReplanSnapshot --> validatePatchSet
  writeReplanSnapshot --> applyPatchSet
  writeReplanSnapshot --> listTasks
  resolveAutonomousWorkflow --> buildCapabilityMap
  resolveAutonomousWorkflow --> readGoalContract
  resolveAutonomousWorkflow --> toNoGoDecision
  resolveAutonomousWorkflow --> writePlanSnapshot
  resolveAutonomousWorkflow --> writeNoGoFile
  resolveAutonomousWorkflow --> generatePlanDecision
  resolveAutonomousWorkflow --> validatePlanDecision
  resolveAutonomousWorkflow --> listTasks
  ensureWorkspaceInitialized --> assertAgentTemplatesExist
  ensureWorkspaceInitialized --> ensureProjectFile
  ensureWorkspaceInitialized --> ensureProjectReadme
  ensureWorkspaceInitialized --> syncGoalAliasToProjectWorkspace
  ensureWorkspaceInitialized --> seedTasksIfNeeded
  ensureWorkspaceInitialized --> resolveWorkflow
  ensureFile --> createTask
  ensureFile --> exists
  assertAgentTemplatesExist --> ensureFile
  assertAgentTemplatesExist --> createTask
  assertAgentTemplatesExist --> exists
  ensureProjectFile --> ensureFile
  ensureProjectFile --> createTask
  ensureProjectFile --> exists
  ensureProjectFile --> resolveWorkflow
  ensureProjectReadme --> ensureFile
  ensureProjectReadme --> assertAgentTemplatesExist
  ensureProjectReadme --> ensureProjectFile
  ensureProjectReadme --> syncGoalAliasToProjectWorkspace
  ensureProjectReadme --> seedTasksIfNeeded
  ensureProjectReadme --> createTask
  ensureProjectReadme --> exists
  ensureProjectReadme --> resolveWorkflow
  syncGoalAliasToProjectWorkspace --> assertAgentTemplatesExist
  syncGoalAliasToProjectWorkspace --> ensureProjectFile
  syncGoalAliasToProjectWorkspace --> ensureProjectReadme
  syncGoalAliasToProjectWorkspace --> seedTasksIfNeeded
  syncGoalAliasToProjectWorkspace --> createTask
  syncGoalAliasToProjectWorkspace --> exists
  syncGoalAliasToProjectWorkspace --> resolveWorkflow
  seedTasksIfNeeded --> assertAgentTemplatesExist
  seedTasksIfNeeded --> ensureProjectFile
  seedTasksIfNeeded --> ensureProjectReadme
  seedTasksIfNeeded --> syncGoalAliasToProjectWorkspace
  seedTasksIfNeeded --> createTask
  seedTasksIfNeeded --> resolveWorkflow
  readFlag --> parsePositiveInt
  parseBoolean --> parsePositiveInt
  createFreshSession --> getOpenAI
  createFreshSession --> createUsageTotals
  createFreshSession --> buildResponsesTools
  createFreshSession --> resolveFunctionTools
  createFreshSession --> prepareTurnRequest
  createFreshSession --> updateUsageTotals
  createFreshSession --> appendAssistantMessage
  createFreshSession --> createDoneResult
  createFreshSession --> createFailedResult
  createFreshSession --> createWaitingHumanResult
  createFreshSession --> parseModelOutput
  createFreshSession --> executeFunctionCalls
  createFreshSession --> loadAgentTemplate
  runAgent --> getOpenAI
  runAgent --> createUsageTotals
  runAgent --> buildResponsesTools
  runAgent --> resolveFunctionTools
  runAgent --> prepareTurnRequest
  runAgent --> updateUsageTotals
  runAgent --> appendAssistantMessage
  runAgent --> createDoneResult
  runAgent --> createFailedResult
  runAgent --> createWaitingHumanResult
  runAgent --> parseModelOutput
  runAgent --> executeFunctionCalls
  runAgent --> loadAgentTemplate
  ensureEventPath --> stringifyEvent
  stringifyEvent --> ensureEventPath
  parseLogLevel --> shouldLog
  parseLogLevel --> write
  shouldLog --> write
  write --> shouldLog
  runHeartbeatLoop --> buildCapabilityMap
  runHeartbeatLoop --> parsePositiveInt
  runHeartbeatLoop --> createFreshSession
  runHeartbeatLoop --> buildVerboseDataSummary
  runHeartbeatLoop --> resolveWaitingHumans
  runHeartbeatLoop --> reconcileDependencyStates
  sleep --> readNumber
  truncate --> countWords
  truncate --> readNumber
  truncate --> isTextLikeOutputPath
  truncate --> findTool
  truncate --> getContent
  countWords --> readNumber
  countWords --> isTextLikeOutputPath
  formatDurationMs --> countWords
  formatDurationMs --> readNumber
  formatDurationMs --> isTextLikeOutputPath
  readNumber --> countWords
  readNumber --> isTextLikeOutputPath
  buildVerboseDataSummary --> countWords
  buildVerboseDataSummary --> readNumber
  buildVerboseDataSummary --> isTextLikeOutputPath
  isTextLikeOutputPath --> countWords
  isTextLikeOutputPath --> chooseAutoHumanAnswer
  isTextLikeOutputPath --> listWaitingHumanTasks
  collectOutputContentStats --> countWords
  collectOutputContentStats --> isTextLikeOutputPath
  collectOutputContentStats --> chooseAutoHumanAnswer
  collectOutputContentStats --> askHuman
  collectOutputContentStats --> listWaitingHumanTasks
  buildTaskPrompt --> truncate
  buildTaskPrompt --> writeWaitFile
  buildTaskPrompt --> chooseAutoHumanAnswer
  buildTaskPrompt --> askHuman
  buildTaskPrompt --> listWaitingHumanTasks
  buildTaskPrompt --> reopenTaskWithHumanAnswer
  writeWaitFile --> truncate
  writeWaitFile --> chooseAutoHumanAnswer
  writeWaitFile --> askHuman
  writeWaitFile --> listWaitingHumanTasks
  writeWaitFile --> reopenTaskWithHumanAnswer
  chooseAutoHumanAnswer --> truncate
  chooseAutoHumanAnswer --> writeWaitFile
  chooseAutoHumanAnswer --> askHuman
  chooseAutoHumanAnswer --> markProjectCompleted
  chooseAutoHumanAnswer --> listWaitingHumanTasks
  chooseAutoHumanAnswer --> reopenTaskWithHumanAnswer
  chooseAutoHumanAnswer --> allTasksCompleted
  askHuman --> runAgent
  askHuman --> truncate
  askHuman --> writeWaitFile
  askHuman --> chooseAutoHumanAnswer
  askHuman --> markProjectCompleted
  askHuman --> listWaitingHumanTasks
  askHuman --> reopenTaskWithHumanAnswer
  askHuman --> allTasksCompleted
  resolveWaitingHumans --> createFreshSession
  resolveWaitingHumans --> runAgent
  resolveWaitingHumans --> truncate
  resolveWaitingHumans --> writeWaitFile
  resolveWaitingHumans --> chooseAutoHumanAnswer
  resolveWaitingHumans --> askHuman
  resolveWaitingHumans --> markProjectCompleted
  resolveWaitingHumans --> listWaitingHumanTasks
  resolveWaitingHumans --> reopenTaskWithHumanAnswer
  resolveWaitingHumans --> allTasksCompleted
  snapshotSessionMemory --> buildCapabilityMap
  snapshotSessionMemory --> parsePositiveInt
  snapshotSessionMemory --> createFreshSession
  snapshotSessionMemory --> runAgent
  snapshotSessionMemory --> buildVerboseDataSummary
  snapshotSessionMemory --> markProjectCompleted
  snapshotSessionMemory --> allTasksCompleted
  markProjectCompleted --> buildCapabilityMap
  markProjectCompleted --> parsePositiveInt
  markProjectCompleted --> createFreshSession
  markProjectCompleted --> runAgent
  markProjectCompleted --> buildVerboseDataSummary
  markProjectCompleted --> allTasksCompleted
  maybeCompleteProject --> buildCapabilityMap
  maybeCompleteProject --> parsePositiveInt
  maybeCompleteProject --> createFreshSession
  maybeCompleteProject --> runAgent
  maybeCompleteProject --> buildVerboseDataSummary
  maybeCompleteProject --> markProjectCompleted
  maybeCompleteProject --> allTasksCompleted
  runAgentWithTimeout --> buildCapabilityMap
  runAgentWithTimeout --> parsePositiveInt
  runAgentWithTimeout --> createFreshSession
  runAgentWithTimeout --> runAgent
  runAgentWithTimeout --> buildVerboseDataSummary
  saveTask --> listTasks
  saveTask --> readTaskFromPath
  saveTask --> writeTask
  saveTask --> isPlainMarkdownFilename
  findTaskById --> listTasks
  findTaskById --> readTaskFromPath
  findTaskById --> writeTask
  findTaskById --> isPlainMarkdownFilename
  createTask --> listTasks
  createTask --> readTaskFromPath
  createTask --> writeTask
  createTask --> isPlainMarkdownFilename
  listTasks --> readTaskFromPath
  listTasks --> hasReachedSchedule
  listTasks --> pendingDependencies
  listTasks --> compareTaskPriority
  claimNextTask --> listTasks
  claimNextTask --> readTaskFromPath
  claimNextTask --> writeTask
  claimNextTask --> hasReachedSchedule
  claimNextTask --> pendingDependencies
  claimNextTask --> compareTaskPriority
  reconcileDependencyStates --> listTasks
  reconcileDependencyStates --> writeTask
  reconcileDependencyStates --> hasReachedSchedule
  reconcileDependencyStates --> pendingDependencies
  listWaitingHumanTasks --> listTasks
  listWaitingHumanTasks --> writeTask
  markTaskCompleted --> listTasks
  markTaskCompleted --> readTaskFromPath
  markTaskCompleted --> writeTask
  markTaskWaitingHuman --> listTasks
  markTaskWaitingHuman --> readTaskFromPath
  markTaskWaitingHuman --> writeTask
  markTaskBlocked --> listTasks
  markTaskBlocked --> readTaskFromPath
  markTaskBlocked --> writeTask
  reopenTaskWithHumanAnswer --> listTasks
  reopenTaskWithHumanAnswer --> readTaskFromPath
  reopenTaskWithHumanAnswer --> writeTask
  recoverStaleInProgressTasks --> listTasks
  recoverStaleInProgressTasks --> readTaskFromPath
  recoverStaleInProgressTasks --> writeTask
  allTasksCompleted --> listTasks
  countTasksByStatus --> listTasks
  asString --> asStringArray
  asString --> asNumber
  asString --> asOptionalNumber
  asString --> asOwner
  asString --> asOwnerOptional
  asString --> asStatus
  asString --> asPriority
  asNumber --> asStringArray
  asNumber --> asString
  asNumber --> asOptionalNumber
  asNumber --> asOwner
  asNumber --> asOwnerOptional
  asNumber --> asStatus
  asNumber --> asPriority
  asOptionalNumber --> asStringArray
  asOptionalNumber --> asString
  asOptionalNumber --> asNumber
  asOptionalNumber --> asOwner
  asOptionalNumber --> asOwnerOptional
  asOptionalNumber --> asStatus
  asOptionalNumber --> asPriority
  asOptionalNumber --> compactFrontmatter
  asOwner --> asStringArray
  asOwner --> asString
  asOwner --> asNumber
  asOwner --> asOptionalNumber
  asOwner --> asOwnerOptional
  asOwner --> asStatus
  asOwner --> asPriority
  asOwner --> normalizeTaskFrontmatter
  asOwner --> compactFrontmatter
  asOwnerOptional --> asStringArray
  asOwnerOptional --> asString
  asOwnerOptional --> asNumber
  asOwnerOptional --> asOptionalNumber
  asOwnerOptional --> asOwner
  asOwnerOptional --> asStatus
  asOwnerOptional --> asPriority
  asOwnerOptional --> normalizeTaskFrontmatter
  asOwnerOptional --> compactFrontmatter
  asStatus --> asStringArray
  asStatus --> asString
  asStatus --> asNumber
  asStatus --> asOptionalNumber
  asStatus --> asOwner
  asStatus --> asOwnerOptional
  asStatus --> asPriority
  asStatus --> normalizeTaskFrontmatter
  asStatus --> compactFrontmatter
  asStatus --> serializeTask
  asStatus --> writeTask
  asPriority --> asStringArray
  asPriority --> listTasks
  asPriority --> asString
  asPriority --> asNumber
  asPriority --> asOptionalNumber
  asPriority --> asOwner
  asPriority --> asOwnerOptional
  asPriority --> asStatus
  asPriority --> normalizeTaskFrontmatter
  asPriority --> compactFrontmatter
  asPriority --> serializeTask
  asPriority --> writeTask
  normalizeTaskFrontmatter --> asStringArray
  normalizeTaskFrontmatter --> listTasks
  normalizeTaskFrontmatter --> asString
  normalizeTaskFrontmatter --> asNumber
  normalizeTaskFrontmatter --> asOptionalNumber
  normalizeTaskFrontmatter --> asOwner
  normalizeTaskFrontmatter --> asOwnerOptional
  normalizeTaskFrontmatter --> asStatus
  normalizeTaskFrontmatter --> asPriority
  normalizeTaskFrontmatter --> compactFrontmatter
  normalizeTaskFrontmatter --> serializeTask
  normalizeTaskFrontmatter --> writeTask
  compactFrontmatter --> listTasks
  compactFrontmatter --> normalizeTaskFrontmatter
  compactFrontmatter --> serializeTask
  compactFrontmatter --> readTaskFromPath
  compactFrontmatter --> writeTask
  compactFrontmatter --> isPlainMarkdownFilename
  serializeTask --> listTasks
  serializeTask --> normalizeTaskFrontmatter
  serializeTask --> compactFrontmatter
  serializeTask --> readTaskFromPath
  serializeTask --> writeTask
  serializeTask --> isPlainMarkdownFilename
  readTaskFromPath --> listTasks
  readTaskFromPath --> normalizeTaskFrontmatter
  readTaskFromPath --> serializeTask
  readTaskFromPath --> writeTask
  readTaskFromPath --> isPlainMarkdownFilename
  writeTask --> listTasks
  writeTask --> serializeTask
  writeTask --> readTaskFromPath
  writeTask --> isPlainMarkdownFilename
  hasReachedSchedule --> listTasks
  hasReachedSchedule --> readTaskFromPath
  hasReachedSchedule --> writeTask
  hasReachedSchedule --> pendingDependencies
  hasReachedSchedule --> compareTaskPriority
  pendingDependencies --> listTasks
  pendingDependencies --> readTaskFromPath
  pendingDependencies --> writeTask
  pendingDependencies --> hasReachedSchedule
  pendingDependencies --> compareTaskPriority
  compareTaskPriority --> listTasks
  compareTaskPriority --> readTaskFromPath
  compareTaskPriority --> writeTask
  compareTaskPriority --> hasReachedSchedule
  compareTaskPriority --> pendingDependencies
  createUsageTotals --> findTool
  buildResponsesTools --> findTool
  resolveFunctionTools --> messagesToResponseInput
  resolveFunctionTools --> estimateMessagesTokens
  resolveFunctionTools --> recordActualUsage
  resolveFunctionTools --> processMemory
  resolveFunctionTools --> findTool
  messagesToResponseInput --> estimateMessagesTokens
  messagesToResponseInput --> recordActualUsage
  messagesToResponseInput --> processMemory
  prepareTurnRequest --> messagesToResponseInput
  prepareTurnRequest --> buildUsage
  prepareTurnRequest --> estimateMessagesTokens
  prepareTurnRequest --> recordActualUsage
  prepareTurnRequest --> getCalibration
  prepareTurnRequest --> processMemory
  updateUsageTotals --> parseToolArguments
  updateUsageTotals --> parseResponseOutput
  updateUsageTotals --> buildUsage
  updateUsageTotals --> recordActualUsage
  updateUsageTotals --> getCalibration
  appendAssistantMessage --> extractPathArgs
  appendAssistantMessage --> parseToolArguments
  appendAssistantMessage --> parseResponseOutput
  appendAssistantMessage --> buildUsage
  appendAssistantMessage --> executeMcpTool
  appendAssistantMessage --> getCalibration
  createDoneResult --> truncate
  createDoneResult --> extractPathArgs
  createDoneResult --> parseToolArguments
  createDoneResult --> parseResponseOutput
  createDoneResult --> buildUsage
  createDoneResult --> executeMcpTool
  createDoneResult --> findTool
  createFailedResult --> truncate
  createFailedResult --> extractPathArgs
  createFailedResult --> parseToolArguments
  createFailedResult --> parseResponseOutput
  createFailedResult --> buildUsage
  createFailedResult --> executeMcpTool
  createFailedResult --> findTool
  createWaitingHumanResult --> truncate
  createWaitingHumanResult --> extractPathArgs
  createWaitingHumanResult --> parseToolArguments
  createWaitingHumanResult --> parseResponseOutput
  createWaitingHumanResult --> buildUsage
  createWaitingHumanResult --> executeMcpTool
  createWaitingHumanResult --> findTool
  parseModelOutput --> truncate
  parseModelOutput --> extractPathArgs
  parseModelOutput --> parseToolArguments
  parseModelOutput --> parseResponseOutput
  parseModelOutput --> executeMcpTool
  parseModelOutput --> findTool
  executeFunctionCalls --> truncate
  executeFunctionCalls --> extractPathArgs
  executeFunctionCalls --> parseToolArguments
  executeFunctionCalls --> executeMcpTool
  executeFunctionCalls --> findTool
  extractPathArgs --> findTool
  parseToolArguments --> messagesToResponseInput
  parseToolArguments --> buildUsage
  parseToolArguments --> estimateMessagesTokens
  parseToolArguments --> recordActualUsage
  parseToolArguments --> getCalibration
  parseToolArguments --> processMemory
  parseResponseOutput --> parseToolArguments
  parseResponseOutput --> buildUsage
  parseResponseOutput --> getCalibration
  buildUsage --> extractPathArgs
  buildUsage --> parseToolArguments
  buildUsage --> parseResponseOutput
  buildUsage --> executeMcpTool
  buildUsage --> getCalibration
  buildUsage --> findTool
  executeMcpTool --> truncate
  executeMcpTool --> extractPathArgs
  executeMcpTool --> parseToolArguments
  executeMcpTool --> findTool
  isPathSafe --> asRelativeSafePath
  asRelativeSafePath --> isPathSafe
  asRelativeSafePaths --> asRelativeSafePath
  estimateTokensRaw --> estimateTokens
  estimateTokensRaw --> withSafetyMargin
  estimateTokensRaw --> estimateMessageTokens
  estimateTokens --> estimateTokensRaw
  estimateTokens --> withSafetyMargin
  estimateTokens --> estimateMessageTokens
  withSafetyMargin --> estimateTokensRaw
  withSafetyMargin --> estimateTokens
  withSafetyMargin --> estimateMessageTokens
  estimateMessageTokens --> estimateTokensRaw
  estimateMessageTokens --> estimateTokens
  estimateMessageTokens --> withSafetyMargin
  estimateMessagesTokens --> estimateTokensRaw
  estimateMessagesTokens --> withSafetyMargin
  estimateMessagesTokens --> estimateMessageTokens
  estimateMessagesTokensRaw --> estimateTokensRaw
  requestShutdown --> resolveAutonomousWorkflow
  requestShutdown --> ensureWorkspaceInitialized
  requestShutdown --> runHeartbeatLoop
  requestShutdown --> exists
  requestShutdown --> main
  requestShutdown --> createMcpManager
  requestShutdown --> resolveWorkflow
  main --> resolveAutonomousWorkflow
  main --> ensureWorkspaceInitialized
  main --> runHeartbeatLoop
  main --> exists
  main --> requestShutdown
  main --> createMcpManager
  main --> resolveWorkflow
  createMcpManager --> loadMcpConfig
  createMcpManager --> createStdioTransport
  createMcpManager --> extractText
  createMcpManager --> parsePrefixedName
  createMcpManager --> mapTools
  loadMcpConfig --> buildTransportEnv
  loadMcpConfig --> createStdioTransport
  buildTransportEnv --> loadMcpConfig
  buildTransportEnv --> createStdioTransport
  createStdioTransport --> loadMcpConfig
  createStdioTransport --> buildTransportEnv
  createStdioTransport --> mapTools
  extractText --> loadMcpConfig
  extractText --> createStdioTransport
  extractText --> parsePrefixedName
  extractText --> mapTools
  parsePrefixedName --> loadMcpConfig
  parsePrefixedName --> createStdioTransport
  parsePrefixedName --> extractText
  parsePrefixedName --> mapTools
  mapTools --> loadMcpConfig
  mapTools --> createStdioTransport
  mapTools --> extractText
  mapTools --> parsePrefixedName
  serializeMessages --> truncate
  serializeMessages --> getContent
  parseObserverOutput --> estimateTokens
  parseObserverOutput --> serializeMessages
  parseObserverOutput --> buildPrompt
  parseObserverOutput --> extractTag
  runObserver --> estimateTokens
  runObserver --> serializeMessages
  runObserver --> parseObserverOutput
  runObserver --> buildPrompt
  getContent --> truncate
  buildPrompt --> estimateTokens
  buildPrompt --> serializeMessages
  buildPrompt --> parseObserverOutput
  buildPrompt --> extractTag
  extractTag --> estimateTokens
  extractTag --> serializeMessages
  extractTag --> parseObserverOutput
  extractTag --> buildPrompt
  processMemory --> getOpenAI
  processMemory --> estimateMessagesTokensRaw
  processMemory --> buildObservationAppendix
  processMemory --> runObservation
  processMemory --> runReflection
  flushMemory --> getOpenAI
  flushMemory --> runObservation
  flushMemory --> runReflection
  sanitizeSessionId --> estimateMessageTokens
  sanitizeSessionId --> nextCounter
  sanitizeSessionId --> pad
  nextCounter --> estimateMessageTokens
  nextCounter --> sanitizeSessionId
  nextCounter --> pad
  pad --> estimateMessageTokens
  pad --> sanitizeSessionId
  pad --> nextCounter
  persistObserverLog --> estimateMessageTokens
  persistObserverLog --> sanitizeSessionId
  persistObserverLog --> nextCounter
  persistObserverLog --> pad
  persistReflectorLog --> estimateTokens
  persistReflectorLog --> estimateMessageTokens
  persistReflectorLog --> runObserver
  persistReflectorLog --> sanitizeSessionId
  persistReflectorLog --> nextCounter
  persistReflectorLog --> pad
  persistReflectorLog --> persistObserverLog
  persistReflectorLog --> splitByTailBudget
  buildObservationAppendix --> estimateTokens
  buildObservationAppendix --> estimateMessageTokens
  buildObservationAppendix --> runObserver
  buildObservationAppendix --> persistObserverLog
  buildObservationAppendix --> persistReflectorLog
  buildObservationAppendix --> splitByTailBudget
  buildObservationAppendix --> runReflector
  splitByTailBudget --> estimateTokens
  splitByTailBudget --> estimateMessageTokens
  splitByTailBudget --> estimateMessagesTokensRaw
  splitByTailBudget --> runObserver
  splitByTailBudget --> persistObserverLog
  splitByTailBudget --> persistReflectorLog
  splitByTailBudget --> runReflector
  runObservation --> estimateTokens
  runObservation --> estimateMessagesTokensRaw
  runObservation --> runObserver
  runObservation --> persistObserverLog
  runObservation --> persistReflectorLog
  runObservation --> buildObservationAppendix
  runObservation --> splitByTailBudget
  runObservation --> runReflector
  runReflection --> getOpenAI
  runReflection --> estimateMessagesTokensRaw
  runReflection --> persistReflectorLog
  runReflection --> buildObservationAppendix
  runReflection --> runObservation
  runReflection --> runReflector
  runReflector --> estimateTokens
  runReflector --> buildPrompt
  runReflector --> extractTag
  asWorkspaceSafePath --> asRelativeSafePath
  asWorkspaceSafePath --> asRelativeSafePaths
  asWorkspaceSafePath --> slugify
  asWorkspaceSafePaths --> asRelativeSafePaths
  asWorkspaceSafePaths --> slugify
  toSlug --> slugify
  getGeminiApiKey --> callGeminiInteractions
  getGeminiApiKey --> extractGeminiImage
  buildImagePrompt --> getGeminiApiKey
  buildImagePrompt --> callGeminiInteractions
  buildImagePrompt --> extractGeminiImage
  callGeminiInteractions --> getGeminiApiKey
  callGeminiInteractions --> extractGeminiImage
  extractGeminiImage --> callGeminiInteractions
  geminiGenerate --> callGeminiInteractions
  geminiGenerate --> extractGeminiImage
  geminiEdit --> asWorkspaceSafePaths
  geminiEdit --> callGeminiInteractions
  geminiEdit --> extractGeminiImage
  markdownToHtml --> asWorkspaceSafePath
  resolveWorkflow --> listWorkflows
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `buildCapabilityMap` | `autonomy/capability-map.ts` | `listAgentNamesFromWorkspace`, `toCapabilityEntry` |
| `listAgentNamesFromWorkspace` | `autonomy/capability-map.ts` | `toCapabilityEntry`, `loadAgentTemplate` |
| `toCapabilityEntry` | `autonomy/capability-map.ts` | `listAgentNamesFromWorkspace`, `loadAgentTemplate` |
| `readGoalContract` | `autonomy/contract.ts` | `asStringArray`, `asApprovalRequirements`, `asGoalId`, `parsePositiveInt`, `exists` |
| `asStringArray` | `autonomy/contract.ts` | `asApprovalRequirements`, `asGoalId`, `parsePositiveInt`, `exists`, `asTaskPriority`, `parsePlanTask`, `asString`, `asNumber`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `asPriority` |
| `asApprovalRequirements` | `autonomy/contract.ts` | `asStringArray`, `asGoalId`, `parsePositiveInt`, `exists` |
| `asGoalId` | `autonomy/contract.ts` | `asStringArray`, `asApprovalRequirements`, `parsePositiveInt`, `exists` |
| `toNoGoDecision` | `autonomy/feasibility.ts` |  |
| `toWorkflowFromPlan` | `autonomy/materialize.ts` | `buildPlanSnapshotPath`, `slugify` |
| `writePlanSnapshot` | `autonomy/materialize.ts` | `buildPlanSnapshotPath` |
| `writeAutonomyState` | `autonomy/materialize.ts` |  |
| `writeNoGoFile` | `autonomy/materialize.ts` |  |
| `buildPlanSnapshotPath` | `autonomy/materialize.ts` | `slugify` |
| `generatePlanDecision` | `autonomy/plan-generate.ts` | `asStringArray`, `parseJsonFromModelOutput`, `parsePlanTask`, `parsePlanDecision`, `buildPlanPrompt`, `buildRepairPrompt`, `callPlanner` |
| `repairPlanDecision` | `autonomy/plan-generate.ts` | `asStringArray`, `parseJsonFromModelOutput`, `parsePlanTask`, `parsePlanDecision`, `buildRepairPrompt`, `callPlanner` |
| `generateReplanDecision` | `autonomy/plan-generate.ts` | `parseJsonFromModelOutput`, `formatCapabilityMap`, `callPlanner`, `parseReplanDecision` |
| `parseJsonFromModelOutput` | `autonomy/plan-generate.ts` | `asStringArray`, `asTaskPriority`, `parsePlanTask` |
| `asTaskPriority` | `autonomy/plan-generate.ts` | `asStringArray`, `parsePlanTask` |
| `parsePlanTask` | `autonomy/plan-generate.ts` | `asStringArray`, `asTaskPriority` |
| `parsePlanSpec` | `autonomy/plan-generate.ts` | `asStringArray`, `parsePlanTask` |
| `parsePlanDecision` | `autonomy/plan-generate.ts` | `asStringArray`, `parsePlanSpec`, `isAnalyticalGoal` |
| `formatCapabilityMap` | `autonomy/plan-generate.ts` | `isAnalyticalGoal` |
| `buildGoalPayload` | `autonomy/plan-generate.ts` | `isAnalyticalGoal` |
| `isAnalyticalGoal` | `autonomy/plan-generate.ts` | `buildQualityConstraints` |
| `buildQualityConstraints` | `autonomy/plan-generate.ts` | `formatCapabilityMap`, `buildGoalPayload`, `isAnalyticalGoal` |
| `buildPlanPrompt` | `autonomy/plan-generate.ts` | `formatCapabilityMap`, `buildGoalPayload`, `buildQualityConstraints`, `getPlannerModel`, `getOpenAI`, `loadAgentTemplate` |
| `buildRepairPrompt` | `autonomy/plan-generate.ts` | `parseJsonFromModelOutput`, `parsePlanDecision`, `formatCapabilityMap`, `buildGoalPayload`, `buildQualityConstraints`, `buildPlanPrompt`, `getPlannerModel`, `callPlanner`, `getOpenAI`, `loadAgentTemplate` |
| `getPlannerModel` | `autonomy/plan-generate.ts` | `parseJsonFromModelOutput`, `parsePlanTask`, `parsePlanDecision`, `buildPlanPrompt`, `buildRepairPrompt`, `callPlanner`, `getOpenAI`, `loadAgentTemplate` |
| `callPlanner` | `autonomy/plan-generate.ts` | `parseJsonFromModelOutput`, `parsePlanTask`, `parsePlanDecision`, `buildPlanPrompt`, `buildRepairPrompt`, `getPlannerModel`, `getOpenAI` |
| `parseReplanPatch` | `autonomy/plan-generate.ts` | `asStringArray`, `parsePlanTask` |
| `parseReplanDecision` | `autonomy/plan-generate.ts` | `parseJsonFromModelOutput`, `formatCapabilityMap`, `callPlanner` |
| `validatePlanDecision` | `autonomy/plan-validate.ts` | `hasUnique`, `validateMustHaveCoverage`, `validateTaskOwnersAndCapabilities`, `validateDependencies`, `validateForbidden`, `asRelativeSafePath`, `isPlainMarkdownFilename` |
| `normalize` | `autonomy/plan-validate.ts` |  |
| `hasUnique` | `autonomy/plan-validate.ts` | `normalize` |
| `collectPlanCorpus` | `autonomy/plan-validate.ts` | `normalize` |
| `hasCycle` | `autonomy/plan-validate.ts` | `normalize` |
| `validateMustHaveCoverage` | `autonomy/plan-validate.ts` | `normalize` |
| `validateTaskOwnersAndCapabilities` | `autonomy/plan-validate.ts` | `collectPlanCorpus`, `hasCycle` |
| `validateDependencies` | `autonomy/plan-validate.ts` | `hasUnique`, `collectPlanCorpus`, `hasCycle`, `asRelativeSafePath`, `isPlainMarkdownFilename` |
| `validateForbidden` | `autonomy/plan-validate.ts` | `hasUnique`, `collectPlanCorpus`, `validateMustHaveCoverage`, `validateTaskOwnersAndCapabilities`, `validateDependencies`, `asRelativeSafePath`, `isPlainMarkdownFilename` |
| `maybeApplyReplan` | `autonomy/replan.ts` | `writeAutonomyState`, `generateReplanDecision`, `nowIso`, `emitSkipIfChanged`, `readStateFromDisk`, `detectReplanTrigger`, `patchNeedsManualApproval`, `validatePatchSet`, `applyPatchSet`, `writeReplanSnapshot`, `listTasks` |
| `nowIso` | `autonomy/replan.ts` |  |
| `emitSkipIfChanged` | `autonomy/replan.ts` | `nowIso` |
| `readStateFromDisk` | `autonomy/replan.ts` | `nowIso` |
| `detectReplanTrigger` | `autonomy/replan.ts` | `isPlainMarkdownFilename` |
| `patchNeedsManualApproval` | `autonomy/replan.ts` | `isPlainMarkdownFilename` |
| `validatePatchSet` | `autonomy/replan.ts` | `isPlainMarkdownFilename` |
| `applyPatchSet` | `autonomy/replan.ts` | `nowIso`, `saveTask`, `findTaskById`, `createTask` |
| `writeReplanSnapshot` | `autonomy/replan.ts` | `generateReplanDecision`, `nowIso`, `emitSkipIfChanged`, `readStateFromDisk`, `detectReplanTrigger`, `patchNeedsManualApproval`, `validatePatchSet`, `applyPatchSet`, `listTasks` |
| `resolveAutonomousWorkflow` | `autonomy/runtime.ts` | `buildCapabilityMap`, `readGoalContract`, `toNoGoDecision`, `writePlanSnapshot`, `writeNoGoFile`, `generatePlanDecision`, `validatePlanDecision`, `listTasks` |
| `ensureWorkspaceInitialized` | `bootstrap.ts` | `assertAgentTemplatesExist`, `ensureProjectFile`, `ensureProjectReadme`, `syncGoalAliasToProjectWorkspace`, `seedTasksIfNeeded`, `resolveWorkflow` |
| `ensureFile` | `bootstrap.ts` | `createTask`, `exists` |
| `assertAgentTemplatesExist` | `bootstrap.ts` | `ensureFile`, `createTask`, `exists` |
| `ensureProjectFile` | `bootstrap.ts` | `ensureFile`, `createTask`, `exists`, `resolveWorkflow` |
| `ensureProjectReadme` | `bootstrap.ts` | `ensureFile`, `assertAgentTemplatesExist`, `ensureProjectFile`, `syncGoalAliasToProjectWorkspace`, `seedTasksIfNeeded`, `createTask`, `exists`, `resolveWorkflow` |
| `syncGoalAliasToProjectWorkspace` | `bootstrap.ts` | `assertAgentTemplatesExist`, `ensureProjectFile`, `ensureProjectReadme`, `seedTasksIfNeeded`, `createTask`, `exists`, `resolveWorkflow` |
| `seedTasksIfNeeded` | `bootstrap.ts` | `assertAgentTemplatesExist`, `ensureProjectFile`, `ensureProjectReadme`, `syncGoalAliasToProjectWorkspace`, `createTask`, `resolveWorkflow` |
| `readFlag` | `config/index.ts` | `parsePositiveInt` |
| `parsePositiveInt` | `config/index.ts` |  |
| `parseBoolean` | `config/index.ts` | `parsePositiveInt` |
| `createFreshSession` | `core/agent-runner.ts` | `getOpenAI`, `createUsageTotals`, `buildResponsesTools`, `resolveFunctionTools`, `prepareTurnRequest`, `updateUsageTotals`, `appendAssistantMessage`, `createDoneResult`, `createFailedResult`, `createWaitingHumanResult`, `parseModelOutput`, `executeFunctionCalls`, `loadAgentTemplate` |
| `runAgent` | `core/agent-runner.ts` | `getOpenAI`, `createUsageTotals`, `buildResponsesTools`, `resolveFunctionTools`, `prepareTurnRequest`, `updateUsageTotals`, `appendAssistantMessage`, `createDoneResult`, `createFailedResult`, `createWaitingHumanResult`, `parseModelOutput`, `executeFunctionCalls`, `loadAgentTemplate` |
| `ensureEventPath` | `core/events.ts` | `stringifyEvent` |
| `stringifyEvent` | `core/events.ts` | `ensureEventPath` |
| `parseLogLevel` | `core/logger.ts` | `shouldLog`, `write` |
| `shouldLog` | `core/logger.ts` | `write` |
| `write` | `core/logger.ts` | `shouldLog` |
| `getOpenAI` | `core/openai.ts` |  |
| `runHeartbeatLoop` | `features/heartbeat/index.ts` | `buildCapabilityMap`, `parsePositiveInt`, `createFreshSession`, `buildVerboseDataSummary`, `resolveWaitingHumans`, `reconcileDependencyStates` |
| `sleep` | `features/heartbeat/index.ts` | `readNumber` |
| `truncate` | `features/heartbeat/index.ts` | `countWords`, `readNumber`, `isTextLikeOutputPath`, `findTool`, `getContent` |
| `countWords` | `features/heartbeat/index.ts` | `readNumber`, `isTextLikeOutputPath` |
| `formatDurationMs` | `features/heartbeat/index.ts` | `countWords`, `readNumber`, `isTextLikeOutputPath` |
| `readNumber` | `features/heartbeat/index.ts` | `countWords`, `isTextLikeOutputPath` |
| `buildVerboseDataSummary` | `features/heartbeat/index.ts` | `countWords`, `readNumber`, `isTextLikeOutputPath` |
| `isTextLikeOutputPath` | `features/heartbeat/index.ts` | `countWords`, `chooseAutoHumanAnswer`, `listWaitingHumanTasks` |
| `collectOutputContentStats` | `features/heartbeat/index.ts` | `countWords`, `isTextLikeOutputPath`, `chooseAutoHumanAnswer`, `askHuman`, `listWaitingHumanTasks` |
| `buildTaskPrompt` | `features/heartbeat/index.ts` | `truncate`, `writeWaitFile`, `chooseAutoHumanAnswer`, `askHuman`, `listWaitingHumanTasks`, `reopenTaskWithHumanAnswer` |
| `writeWaitFile` | `features/heartbeat/index.ts` | `truncate`, `chooseAutoHumanAnswer`, `askHuman`, `listWaitingHumanTasks`, `reopenTaskWithHumanAnswer` |
| `chooseAutoHumanAnswer` | `features/heartbeat/index.ts` | `truncate`, `writeWaitFile`, `askHuman`, `markProjectCompleted`, `listWaitingHumanTasks`, `reopenTaskWithHumanAnswer`, `allTasksCompleted` |
| `askHuman` | `features/heartbeat/index.ts` | `runAgent`, `truncate`, `writeWaitFile`, `chooseAutoHumanAnswer`, `markProjectCompleted`, `listWaitingHumanTasks`, `reopenTaskWithHumanAnswer`, `allTasksCompleted` |
| `resolveWaitingHumans` | `features/heartbeat/index.ts` | `createFreshSession`, `runAgent`, `truncate`, `writeWaitFile`, `chooseAutoHumanAnswer`, `askHuman`, `markProjectCompleted`, `listWaitingHumanTasks`, `reopenTaskWithHumanAnswer`, `allTasksCompleted` |
| `snapshotSessionMemory` | `features/heartbeat/index.ts` | `buildCapabilityMap`, `parsePositiveInt`, `createFreshSession`, `runAgent`, `buildVerboseDataSummary`, `markProjectCompleted`, `allTasksCompleted` |
| `markProjectCompleted` | `features/heartbeat/index.ts` | `buildCapabilityMap`, `parsePositiveInt`, `createFreshSession`, `runAgent`, `buildVerboseDataSummary`, `allTasksCompleted` |
| `maybeCompleteProject` | `features/heartbeat/index.ts` | `buildCapabilityMap`, `parsePositiveInt`, `createFreshSession`, `runAgent`, `buildVerboseDataSummary`, `markProjectCompleted`, `allTasksCompleted` |
| `runAgentWithTimeout` | `features/heartbeat/index.ts` | `buildCapabilityMap`, `parsePositiveInt`, `createFreshSession`, `runAgent`, `buildVerboseDataSummary` |
| `saveTask` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `isPlainMarkdownFilename` |
| `findTaskById` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `isPlainMarkdownFilename` |
| `createTask` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `isPlainMarkdownFilename` |
| `listTasks` | `features/tasks/index.ts` | `readTaskFromPath`, `hasReachedSchedule`, `pendingDependencies`, `compareTaskPriority` |
| `claimNextTask` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `hasReachedSchedule`, `pendingDependencies`, `compareTaskPriority` |
| `reconcileDependencyStates` | `features/tasks/index.ts` | `listTasks`, `writeTask`, `hasReachedSchedule`, `pendingDependencies` |
| `listWaitingHumanTasks` | `features/tasks/index.ts` | `listTasks`, `writeTask` |
| `markTaskCompleted` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask` |
| `markTaskWaitingHuman` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask` |
| `markTaskBlocked` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask` |
| `reopenTaskWithHumanAnswer` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask` |
| `recoverStaleInProgressTasks` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask` |
| `allTasksCompleted` | `features/tasks/index.ts` | `listTasks` |
| `countTasksByStatus` | `features/tasks/index.ts` | `listTasks` |
| `asString` | `features/tasks/index.ts` | `asStringArray`, `asNumber`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `asPriority` |
| `asNumber` | `features/tasks/index.ts` | `asStringArray`, `asString`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `asPriority` |
| `asOptionalNumber` | `features/tasks/index.ts` | `asStringArray`, `asString`, `asNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `asPriority`, `compactFrontmatter` |
| `asOwner` | `features/tasks/index.ts` | `asStringArray`, `asString`, `asNumber`, `asOptionalNumber`, `asOwnerOptional`, `asStatus`, `asPriority`, `normalizeTaskFrontmatter`, `compactFrontmatter` |
| `asOwnerOptional` | `features/tasks/index.ts` | `asStringArray`, `asString`, `asNumber`, `asOptionalNumber`, `asOwner`, `asStatus`, `asPriority`, `normalizeTaskFrontmatter`, `compactFrontmatter` |
| `asStatus` | `features/tasks/index.ts` | `asStringArray`, `asString`, `asNumber`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asPriority`, `normalizeTaskFrontmatter`, `compactFrontmatter`, `serializeTask`, `writeTask` |
| `asPriority` | `features/tasks/index.ts` | `asStringArray`, `listTasks`, `asString`, `asNumber`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `normalizeTaskFrontmatter`, `compactFrontmatter`, `serializeTask`, `writeTask` |
| `normalizeTaskFrontmatter` | `features/tasks/index.ts` | `asStringArray`, `listTasks`, `asString`, `asNumber`, `asOptionalNumber`, `asOwner`, `asOwnerOptional`, `asStatus`, `asPriority`, `compactFrontmatter`, `serializeTask`, `writeTask` |
| `compactFrontmatter` | `features/tasks/index.ts` | `listTasks`, `normalizeTaskFrontmatter`, `serializeTask`, `readTaskFromPath`, `writeTask`, `isPlainMarkdownFilename` |
| `serializeTask` | `features/tasks/index.ts` | `listTasks`, `normalizeTaskFrontmatter`, `compactFrontmatter`, `readTaskFromPath`, `writeTask`, `isPlainMarkdownFilename` |
| `readTaskFromPath` | `features/tasks/index.ts` | `listTasks`, `normalizeTaskFrontmatter`, `serializeTask`, `writeTask`, `isPlainMarkdownFilename` |
| `writeTask` | `features/tasks/index.ts` | `listTasks`, `serializeTask`, `readTaskFromPath`, `isPlainMarkdownFilename` |
| `hasReachedSchedule` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `pendingDependencies`, `compareTaskPriority` |
| `pendingDependencies` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `hasReachedSchedule`, `compareTaskPriority` |
| `compareTaskPriority` | `features/tasks/index.ts` | `listTasks`, `readTaskFromPath`, `writeTask`, `hasReachedSchedule`, `pendingDependencies` |
| `createUsageTotals` | `helpers/agent-response-loop.ts` | `findTool` |
| `buildResponsesTools` | `helpers/agent-response-loop.ts` | `findTool` |
| `resolveFunctionTools` | `helpers/agent-response-loop.ts` | `messagesToResponseInput`, `estimateMessagesTokens`, `recordActualUsage`, `processMemory`, `findTool` |
| `messagesToResponseInput` | `helpers/agent-response-loop.ts` | `estimateMessagesTokens`, `recordActualUsage`, `processMemory` |
| `prepareTurnRequest` | `helpers/agent-response-loop.ts` | `messagesToResponseInput`, `buildUsage`, `estimateMessagesTokens`, `recordActualUsage`, `getCalibration`, `processMemory` |
| `updateUsageTotals` | `helpers/agent-response-loop.ts` | `parseToolArguments`, `parseResponseOutput`, `buildUsage`, `recordActualUsage`, `getCalibration` |
| `appendAssistantMessage` | `helpers/agent-response-loop.ts` | `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `buildUsage`, `executeMcpTool`, `getCalibration` |
| `createDoneResult` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `buildUsage`, `executeMcpTool`, `findTool` |
| `createFailedResult` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `buildUsage`, `executeMcpTool`, `findTool` |
| `createWaitingHumanResult` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `buildUsage`, `executeMcpTool`, `findTool` |
| `parseModelOutput` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `executeMcpTool`, `findTool` |
| `executeFunctionCalls` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `executeMcpTool`, `findTool` |
| `extractPathArgs` | `helpers/agent-response-loop.ts` | `findTool` |
| `parseToolArguments` | `helpers/agent-response-loop.ts` | `messagesToResponseInput`, `buildUsage`, `estimateMessagesTokens`, `recordActualUsage`, `getCalibration`, `processMemory` |
| `parseResponseOutput` | `helpers/agent-response-loop.ts` | `parseToolArguments`, `buildUsage`, `getCalibration` |
| `buildUsage` | `helpers/agent-response-loop.ts` | `extractPathArgs`, `parseToolArguments`, `parseResponseOutput`, `executeMcpTool`, `getCalibration`, `findTool` |
| `executeMcpTool` | `helpers/agent-response-loop.ts` | `truncate`, `extractPathArgs`, `parseToolArguments`, `findTool` |
| `loadAgentTemplate` | `helpers/agent-template.ts` |  |
| `exists` | `helpers/fs.ts` |  |
| `isPathSafe` | `helpers/paths.ts` | `asRelativeSafePath` |
| `asRelativeSafePath` | `helpers/paths.ts` | `isPathSafe` |
| `asRelativeSafePaths` | `helpers/paths.ts` | `asRelativeSafePath` |
| `isPlainMarkdownFilename` | `helpers/paths.ts` |  |
| `slugify` | `helpers/paths.ts` |  |
| `estimateTokensRaw` | `helpers/tokens.ts` | `estimateTokens`, `withSafetyMargin`, `estimateMessageTokens` |
| `estimateTokens` | `helpers/tokens.ts` | `estimateTokensRaw`, `withSafetyMargin`, `estimateMessageTokens` |
| `withSafetyMargin` | `helpers/tokens.ts` | `estimateTokensRaw`, `estimateTokens`, `estimateMessageTokens` |
| `estimateMessageTokens` | `helpers/tokens.ts` | `estimateTokensRaw`, `estimateTokens`, `withSafetyMargin` |
| `estimateMessagesTokens` | `helpers/tokens.ts` | `estimateTokensRaw`, `withSafetyMargin`, `estimateMessageTokens` |
| `estimateMessagesTokensRaw` | `helpers/tokens.ts` | `estimateTokensRaw` |
| `recordActualUsage` | `helpers/tokens.ts` |  |
| `getCalibration` | `helpers/tokens.ts` |  |
| `requestShutdown` | `index.ts` | `resolveAutonomousWorkflow`, `ensureWorkspaceInitialized`, `runHeartbeatLoop`, `exists`, `main`, `createMcpManager`, `resolveWorkflow` |
| `main` | `index.ts` | `resolveAutonomousWorkflow`, `ensureWorkspaceInitialized`, `runHeartbeatLoop`, `exists`, `requestShutdown`, `createMcpManager`, `resolveWorkflow` |
| `createMcpManager` | `mcp/client.ts` | `loadMcpConfig`, `createStdioTransport`, `extractText`, `parsePrefixedName`, `mapTools` |
| `loadMcpConfig` | `mcp/client.ts` | `buildTransportEnv`, `createStdioTransport` |
| `buildTransportEnv` | `mcp/client.ts` | `loadMcpConfig`, `createStdioTransport` |
| `createStdioTransport` | `mcp/client.ts` | `loadMcpConfig`, `buildTransportEnv`, `mapTools` |
| `extractText` | `mcp/client.ts` | `loadMcpConfig`, `createStdioTransport`, `parsePrefixedName`, `mapTools` |
| `parsePrefixedName` | `mcp/client.ts` | `loadMcpConfig`, `createStdioTransport`, `extractText`, `mapTools` |
| `mapTools` | `mcp/client.ts` | `loadMcpConfig`, `createStdioTransport`, `extractText`, `parsePrefixedName` |
| `serializeMessages` | `memory/observer.ts` | `truncate`, `getContent` |
| `parseObserverOutput` | `memory/observer.ts` | `estimateTokens`, `serializeMessages`, `buildPrompt`, `extractTag` |
| `runObserver` | `memory/observer.ts` | `estimateTokens`, `serializeMessages`, `parseObserverOutput`, `buildPrompt` |
| `getContent` | `memory/observer.ts` | `truncate` |
| `buildPrompt` | `memory/observer.ts` | `estimateTokens`, `serializeMessages`, `parseObserverOutput`, `extractTag` |
| `extractTag` | `memory/observer.ts` | `estimateTokens`, `serializeMessages`, `parseObserverOutput`, `buildPrompt` |
| `processMemory` | `memory/processor.ts` | `getOpenAI`, `estimateMessagesTokensRaw`, `buildObservationAppendix`, `runObservation`, `runReflection` |
| `flushMemory` | `memory/processor.ts` | `getOpenAI`, `runObservation`, `runReflection` |
| `sanitizeSessionId` | `memory/processor.ts` | `estimateMessageTokens`, `nextCounter`, `pad` |
| `nextCounter` | `memory/processor.ts` | `estimateMessageTokens`, `sanitizeSessionId`, `pad` |
| `pad` | `memory/processor.ts` | `estimateMessageTokens`, `sanitizeSessionId`, `nextCounter` |
| `persistObserverLog` | `memory/processor.ts` | `estimateMessageTokens`, `sanitizeSessionId`, `nextCounter`, `pad` |
| `persistReflectorLog` | `memory/processor.ts` | `estimateTokens`, `estimateMessageTokens`, `runObserver`, `sanitizeSessionId`, `nextCounter`, `pad`, `persistObserverLog`, `splitByTailBudget` |
| `buildObservationAppendix` | `memory/processor.ts` | `estimateTokens`, `estimateMessageTokens`, `runObserver`, `persistObserverLog`, `persistReflectorLog`, `splitByTailBudget`, `runReflector` |
| `splitByTailBudget` | `memory/processor.ts` | `estimateTokens`, `estimateMessageTokens`, `estimateMessagesTokensRaw`, `runObserver`, `persistObserverLog`, `persistReflectorLog`, `runReflector` |
| `runObservation` | `memory/processor.ts` | `estimateTokens`, `estimateMessagesTokensRaw`, `runObserver`, `persistObserverLog`, `persistReflectorLog`, `buildObservationAppendix`, `splitByTailBudget`, `runReflector` |
| `runReflection` | `memory/processor.ts` | `getOpenAI`, `estimateMessagesTokensRaw`, `persistReflectorLog`, `buildObservationAppendix`, `runObservation`, `runReflector` |
| `runReflector` | `memory/reflector.ts` | `estimateTokens`, `buildPrompt`, `extractTag` |
| `asWorkspaceSafePath` | `tools/common.ts` | `asRelativeSafePath`, `asRelativeSafePaths`, `slugify` |
| `asWorkspaceSafePaths` | `tools/common.ts` | `asRelativeSafePaths`, `slugify` |
| `toSlug` | `tools/common.ts` | `slugify` |
| `getGeminiApiKey` | `tools/image.ts` | `callGeminiInteractions`, `extractGeminiImage` |
| `buildImagePrompt` | `tools/image.ts` | `getGeminiApiKey`, `callGeminiInteractions`, `extractGeminiImage` |
| `callGeminiInteractions` | `tools/image.ts` | `getGeminiApiKey`, `extractGeminiImage` |
| `extractGeminiImage` | `tools/image.ts` | `callGeminiInteractions` |
| `geminiGenerate` | `tools/image.ts` | `callGeminiInteractions`, `extractGeminiImage` |
| `geminiEdit` | `tools/image.ts` | `asWorkspaceSafePaths`, `callGeminiInteractions`, `extractGeminiImage` |
| `findTool` | `tools/index.ts` |  |
| `markdownToHtml` | `tools/render-html.ts` | `asWorkspaceSafePath` |
| `listWorkflows` | `workflows/registry.ts` |  |
| `resolveWorkflow` | `workflows/registry.ts` | `listWorkflows` |