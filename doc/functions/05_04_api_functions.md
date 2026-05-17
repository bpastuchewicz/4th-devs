# 05_04_api — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph adapters_ai_google_google_domain_error["adapters/ai/google/google-domain-error"]
    toGoogleDomainError["toGoogleDomainError()"]
    isGoogleTimeoutError["isGoogleTimeoutError()"]
  end
  subgraph adapters_ai_google_google_provider["adapters/ai/google/google-provider"]
    createGoogleProvider["createGoogleProvider()"]
    resolveConfigured["resolveConfigured()"]
    notConfiguredError["notConfiguredError()"]
    installDiagnosticFetch["installDiagnosticFetch()"]
    getThoughtItemId["getThoughtItemId()"]
  end
  subgraph adapters_ai_google_google_request["adapters/ai/google/google-request"]
    ensureGoogleCompatibleRequest["ensureGoogleCompatibleRequest()"]
    buildConfig["buildConfig()"]
    mapServiceTier["mapServiceTier()"]
    buildSystemInstruction["buildSystemInstruction()"]
    buildTools["buildTools()"]
    buildToolConfig["buildToolConfig()"]
    buildHttpOptions["buildHttpOptions()"]
    toThinkingConfig["toThinkingConfig()"]
    toGoogleFunctionCallArgs["toGoogleFunctionCallArgs()"]
    toGoogleFunctionResponse["toGoogleFunctionResponse()"]
    toGoogleReasoningText["toGoogleReasoningText()"]
    toGooglePart["toGooglePart()"]
    sanitizeSchemaNode["sanitizeSchemaNode()"]
    buildContents["buildContents()"]
    sanitizeToolSchema["sanitizeToolSchema()"]
    buildFunctionTools["buildFunctionTools()"]
    buildNativeTools["buildNativeTools()"]
    toThinkingLevel["toThinkingLevel()"]
  end
  subgraph adapters_ai_google_google_response["adapters/ai/google/google-response"]
    normalizeResponse["normalizeResponse()"]
    toDomainFromUrl["toDomainFromUrl()"]
    dedupeStrings["dedupeStrings()"]
    dedupeWebReferences["dedupeWebReferences()"]
    normalizeGroundingReferences["normalizeGroundingReferences()"]
    normalizeToolCall["normalizeToolCall()"]
    getPrimaryCandidate["getPrimaryCandidate()"]
    mapUsage["mapUsage()"]
    getRequestId["getRequestId()"]
    getCandidateParts["getCandidateParts()"]
    normalizeWebSearches["normalizeWebSearches()"]
    getTerminalIssue["getTerminalIssue()"]
    toThoughtSummary["toThoughtSummary()"]
    flushAssistantMessage["flushAssistantMessage()"]
    hasDurableOutput["hasDurableOutput()"]
    toPromptBlockedIssue["toPromptBlockedIssue()"]
    toCandidateFinishIssue["toCandidateFinishIssue()"]
  end
  subgraph adapters_ai_openai_openai_domain_error["adapters/ai/openai/openai-domain-error"]
    toOpenAiDomainError["toOpenAiDomainError()"]
    withToolContext["withToolContext()"]
  end
  subgraph adapters_ai_openai_openai_provider["adapters/ai/openai/openai-provider"]
    logOpenAiRequestDebug["logOpenAiRequestDebug()"]
    createOpenAiProvider["createOpenAiProvider()"]
    getFunctionToolNames["getFunctionToolNames()"]
    getToolDescriptors["getToolDescriptors()"]
    getReplayFunctionCallNames["getReplayFunctionCallNames()"]
    getRequestRunId["getRequestRunId()"]
    getErrorCode["getErrorCode()"]
    getErrorParam["getErrorParam()"]
    getReasoningSummaryParts["getReasoningSummaryParts()"]
    flattenReasoningSummaryParts["flattenReasoningSummaryParts()"]
  end
  subgraph adapters_ai_openai_openai_request["adapters/ai/openai/openai-request"]
    createRequestBody["createRequestBody()"]
    createRequestOptions["createRequestOptions()"]
    createBaseRequestBody["createBaseRequestBody()"]
    ensureOpenAiCompatibleRequest["ensureOpenAiCompatibleRequest()"]
    isOpenAiResponseIncludable["isOpenAiResponseIncludable()"]
    toOpenAiInclude["toOpenAiInclude()"]
    toOpenAiReasoningSummary["toOpenAiReasoningSummary()"]
    toOpenAiAssistantMessage["toOpenAiAssistantMessage()"]
    toOpenAiMessageContent["toOpenAiMessageContent()"]
    toOpenAiInput["toOpenAiInput()"]
    toOpenAiFunctionTools["toOpenAiFunctionTools()"]
    toOpenAiNativeTools["toOpenAiNativeTools()"]
    toOpenAiTools["toOpenAiTools()"]
    toOpenAiToolChoice["toOpenAiToolChoice()"]
  end
  subgraph adapters_http_idempotency["adapters/http/idempotency"]
    isRecord["isRecord()"]
    toRequestHash["toRequestHash()"]
    normalizeJsonValue["normalizeJsonValue()"]
    addMilliseconds["addMilliseconds()"]
  end
  subgraph domain_ai_json_utils["domain/ai/json-utils"]
    parseRequiredJson["parseRequiredJson()"]
  end
  subgraph application_interactions_build_run_interaction_request["application/interactions/build-run-interaction-request"]
    toAssistantProviderMessageId["toAssistantProviderMessageId()"]
    toVisibleMessages["toVisibleMessages()"]
    toItemMessages["toItemMessages()"]
    toItemTextContent["toItemTextContent()"]
    toMappedFunctionOutputJson["toMappedFunctionOutputJson()"]
    toReasoningProviderItemId["toReasoningProviderItemId()"]
  end
  subgraph application_interactions_model_visible_user_content["application/interactions/model-visible-user-content"]
    buildModelVisibleMessageContent["buildModelVisibleMessageContent()"]
    groupInlineImageFilesByMessageId["groupInlineImageFilesByMessageId()"]
    collectInlineReferencedUploadedFileIds["collectInlineReferencedUploadedFileIds()"]
    listMarkdownImageReferences["listMarkdownImageReferences()"]
    isEscaped["isEscaped()"]
    findClosingBracket["findClosingBracket()"]
    findClosingParen["findClosingParen()"]
    readImageDestination["readImageDestination()"]
    readUploadedFileId["readUploadedFileId()"]
    normalizeRemoteImageUrl["normalizeRemoteImageUrl()"]
    appendText["appendText()"]
    toInlineImagePart["toInlineImagePart()"]
  end
  subgraph domain_agents_agent_types["domain/agents/agent-types"]
    toChildRunReplayOutput["toChildRunReplayOutput()"]
  end
  subgraph adapters_ai_openai_openai_response["adapters/ai/openai/openai-response"]
    toUrlCitationReference["toUrlCitationReference()"]
    createOpenAiWebSearchActivity["createOpenAiWebSearchActivity()"]
    mergeOpenAiWebSearchActivity["mergeOpenAiWebSearchActivity()"]
    collectOutputTextReferences["collectOutputTextReferences()"]
    normalizeOutputItems["normalizeOutputItems()"]
    normalizeMessages["normalizeMessages()"]
    mergeWebSearchStatus["mergeWebSearchStatus()"]
    toWebSearchSourceReferences["toWebSearchSourceReferences()"]
    updateOpenAiWebSearchActivityStatus["updateOpenAiWebSearchActivityStatus()"]
  end
  subgraph adapters_observability_langfuse_exporter["adapters/observability/langfuse/exporter"]
    tryParseJson["tryParseJson()"]
    asString["asString()"]
    createLangfuseExporter["createLangfuseExporter()"]
    isTerminalRootRunEvent["isTerminalRootRunEvent()"]
    normalizeBaseUrl["normalizeBaseUrl()"]
    collectObservationKeys["collectObservationKeys()"]
    loadTraceSnapshot["loadTraceSnapshot()"]
    exportRunObservation["exportRunObservation()"]
    truncateText["truncateText()"]
    normalizeTagValue["normalizeTagValue()"]
    asNumber["asNumber()"]
    toDisplayNameFromAlias["toDisplayNameFromAlias()"]
    toEventPayload["toEventPayload()"]
    toRunInput["toRunInput()"]
    toErrorOutput["toErrorOutput()"]
    toErrorMessage["toErrorMessage()"]
    toTag["toTag()"]
    toStructuredContentPart["toStructuredContentPart()"]
    toStructuredMessages["toStructuredMessages()"]
    toStructuredGenerationTools["toStructuredGenerationTools()"]
    toStructuredNativeTools["toStructuredNativeTools()"]
    toStructuredGenerationOutputItems["toStructuredGenerationOutputItems()"]
    hasNonMessageOutputItem["hasNonMessageOutputItem()"]
    normalizeUsageKey["normalizeUsageKey()"]
    toStructuredGenerationToolCalls["toStructuredGenerationToolCalls()"]
    toNumericRecord["toNumericRecord()"]
    findUsageValue["findUsageValue()"]
    collectUsageDetails["collectUsageDetails()"]
    toCanonicalUsageKey["toCanonicalUsageKey()"]
    toRunOutput["toRunOutput()"]
    toGenerationInput["toGenerationInput()"]
    toGenerationModelParameters["toGenerationModelParameters()"]
    toGenerationOutput["toGenerationOutput()"]
    toGenerationUsageDetails["toGenerationUsageDetails()"]
    toTraceId["toTraceId()"]
    createRandomHex["createRandomHex()"]
    toObservationId["toObservationId()"]
    toScoreId["toScoreId()"]
    toRunObservationName["toRunObservationName()"]
    collectToolObservationKeys["collectToolObservationKeys()"]
    toRunScope["toRunScope()"]
    findRunLifecycleEvent["findRunLifecycleEvent()"]
    findTurn["findTurn()"]
    toAgentMetadata["toAgentMetadata()"]
    toRunIdsMetadata["toRunIdsMetadata()"]
    toRuntimeMetadata["toRuntimeMetadata()"]
    collectChildRunMetadata["collectChildRunMetadata()"]
    toGenerationToolSummaryMetadata["toGenerationToolSummaryMetadata()"]
    toRunMetadata["toRunMetadata()"]
    toGenerationMetadata["toGenerationMetadata()"]
    toToolMetadata["toToolMetadata()"]
    toWebSearchMetadata["toWebSearchMetadata()"]
    toRootTraceMetadata["toRootTraceMetadata()"]
    toRootTraceName["toRootTraceName()"]
    toRootTraceTags["toRootTraceTags()"]
    toToolWaitingOutput["toToolWaitingOutput()"]
    buildRunTree["buildRunTree()"]
    toRunWaitingStatusMessage["toRunWaitingStatusMessage()"]
    toRelevantRunEvents["toRelevantRunEvents()"]
    pickLatestEvent["pickLatestEvent()"]
    buildToolSnapshots["buildToolSnapshots()"]
    buildWebSearchSnapshots["buildWebSearchSnapshots()"]
    mergeToolSnapshotsByTurn["mergeToolSnapshotsByTurn()"]
    buildGenerationSnapshots["buildGenerationSnapshots()"]
    buildRunSnapshot["buildRunSnapshot()"]
    endObservation["endObservation()"]
    isRetryableLangfuseStatusCode["isRetryableLangfuseStatusCode()"]
    toLangfuseProviderError["toLangfuseProviderError()"]
    exportToolObservation["exportToolObservation()"]
    appendScores["appendScores()"]
  end
  subgraph domain_ai_reasoning_summary["domain/ai/reasoning-summary"]
    flattenReasoningSummaryText["flattenReasoningSummaryText()"]
  end
  subgraph domain_events_domain_event_repository["domain/events/domain-event-repository"]
    createDomainEventRepository["createDomainEventRepository()"]
  end
  subgraph application_agents_agent_runtime_policy["application/agents/agent-runtime-policy"]
    isNativeToolAllowedForRun["isNativeToolAllowedForRun()"]
    isToolAllowedForRun["isToolAllowedForRun()"]
    getGrantedToolProfileId["getGrantedToolProfileId()"]
    hasNativeToolGrant["hasNativeToolGrant()"]
    isModelProvider["isModelProvider()"]
    isPlainObject["isPlainObject()"]
    getOptionalString["getOptionalString()"]
    getToolPolicy["getToolPolicy()"]
    resolveRuntimeSettingsFromAgentRevision["resolveRuntimeSettingsFromAgentRevision()"]
    getGrantedMcpProfile["getGrantedMcpProfile()"]
  end
  subgraph application_interactions_assemble_thread_interaction_request["application/interactions/assemble-thread-interaction-request"]
    assembleThreadInteractionRequest["assembleThreadInteractionRequest()"]
    toMetadata["toMetadata()"]
    toFallbackMessages["toFallbackMessages()"]
    toSummaryMessages["toSummaryMessages()"]
    toAgentProfileMessages["toAgentProfileMessages()"]
    toObservationMessages["toObservationMessages()"]
    toReflectionMessages["toReflectionMessages()"]
    toActiveMcpToolMessages["toActiveMcpToolMessages()"]
    resolveRequestedProvider["resolveRequestedProvider()"]
    resolveRequestedModel["resolveRequestedModel()"]
    resolveRequestedModelAlias["resolveRequestedModelAlias()"]
    resolveRequestedReasoning["resolveRequestedReasoning()"]
    resolveRequestedMaxOutputTokens["resolveRequestedMaxOutputTokens()"]
    resolveRequestedTemperature["resolveRequestedTemperature()"]
    isReasoningOptions["isReasoningOptions()"]
  end
  subgraph application_interactions_context_bundle["application/interactions/context-bundle"]
    applyLatestBudgetCalibration["applyLatestBudgetCalibration()"]
    createContextLayer["createContextLayer()"]
    createContextBudgetReport["createContextBudgetReport()"]
    estimateMessageTokens["estimateMessageTokens()"]
    estimateTextTokens["estimateTextTokens()"]
    estimateUnknownTokens["estimateUnknownTokens()"]
    toBudgetRequestOverhead["toBudgetRequestOverhead()"]
    estimateContentTokens["estimateContentTokens()"]
  end
  subgraph application_interactions_load_thread_context["application/interactions/load-thread-context"]
    loadThreadContext["loadThreadContext()"]
    loadAgentProfile["loadAgentProfile()"]
    ensureLatestSummaryObserved["ensureLatestSummaryObserved()"]
    ensureRunLocalReflected["ensureRunLocalReflected()"]
    loadScopedMemoryState["loadScopedMemoryState()"]
  end
  subgraph application_runtime_drive_run["application/runtime/drive-run"]
    toInactiveRunError["toInactiveRunError()"]
    toRunCancelledExecutionError["toRunCancelledExecutionError()"]
    executeRunTurnLoop["executeRunTurnLoop()"]
  end
  subgraph application_runtime_run_cancellation["application/runtime/run-cancellation"]
    finalizeRunCancellation["finalizeRunCancellation()"]
    classifyRunForCancelCommand["classifyRunForCancelCommand()"]
    cancelRunSubtree["cancelRunSubtree()"]
    isTerminalRunStatus["isTerminalRunStatus()"]
    toAlreadyTerminalCancellationConflict["toAlreadyTerminalCancellationConflict()"]
    toCancellationMetadata["toCancellationMetadata()"]
    classifyRunForCancelRecovery["classifyRunForCancelRecovery()"]
    commitRunCancelledState["commitRunCancelledState()"]
    requestRunCancellation["requestRunCancellation()"]
    cancelPendingWaits["cancelPendingWaits()"]
    failIncompleteToolExecutions["failIncompleteToolExecutions()"]
  end
  subgraph application_runtime_run_execution_convergence["application/runtime/run-execution-convergence"]
    convergeRunExecutionConflict["convergeRunExecutionConflict()"]
    waitForRunToReachDurableState["waitForRunToReachDurableState()"]
    toRunExecutionTerminalError["toRunExecutionTerminalError()"]
  end
  subgraph application_runtime_run_persistence["application/runtime/run-persistence"]
    failRun["failRun()"]
    buildRunTranscriptSnapshot["buildRunTranscriptSnapshot()"]
    persistAssistantSnapshotMessageInTransaction["persistAssistantSnapshotMessageInTransaction()"]
    listRunTranscriptEvents["listRunTranscriptEvents()"]
    buildOutputTextFromTranscriptEvents["buildOutputTextFromTranscriptEvents()"]
    readRunOutputText["readRunOutputText()"]
    readRunTranscriptMetadata["readRunTranscriptMetadata()"]
    readRunSnapshotMetadata["readRunSnapshotMetadata()"]
    buildAssistantTranscriptMetadata["buildAssistantTranscriptMetadata()"]
    collectAssistantTranscriptBlocks["collectAssistantTranscriptBlocks()"]
    persistUsageEntry["persistUsageEntry()"]
    toPersistenceFailure["toPersistenceFailure()"]
    getPersistedOutputItems["getPersistedOutputItems()"]
    persistUsageEntryInTransaction["persistUsageEntryInTransaction()"]
    persistOutputItemsInTransaction["persistOutputItemsInTransaction()"]
    persistOutputItems["persistOutputItems()"]
    completeRunWithAssistantMessage["completeRunWithAssistantMessage()"]
    markRunWaiting["markRunWaiting()"]
    compactRunContextAtBoundary["compactRunContextAtBoundary()"]
    refreshWaitingRunSnapshot["refreshWaitingRunSnapshot()"]
    toPersistedAppsMeta["toPersistedAppsMeta()"]
    toStringArray["toStringArray()"]
    toPersistedWebReferences["toPersistedWebReferences()"]
    toPersistedWebSearchStatus["toPersistedWebSearchStatus()"]
    mergePersistedWebSearchStatus["mergePersistedWebSearchStatus()"]
    compareTranscriptBlockOrder["compareTranscriptBlockOrder()"]
  end
  subgraph application_runtime_run_tool_execution["application/runtime/run-tool-execution"]
    toToolContext["toToolContext()"]
    toCancellationError["toCancellationError()"]
    prepareToolExecution["prepareToolExecution()"]
    executeOneToolCall["executeOneToolCall()"]
    persistToolCalledEvents["persistToolCalledEvents()"]
    persistToolOutcomes["persistToolOutcomes()"]
    serializeToolOutput["serializeToolOutput()"]
    toToolErrorOutput["toToolErrorOutput()"]
    toDurationMs["toDurationMs()"]
  end
  subgraph domain_ai_usage_ledger_repository["domain/ai/usage-ledger-repository"]
    createUsageLedgerRepository["createUsageLedgerRepository()"]
  end
  subgraph adapters_blob_local_blob_store["adapters/blob/local-blob-store"]
    createLocalBlobStore["createLocalBlobStore()"]
    resolveStoragePath["resolveStoragePath()"]
    normalizeStorageKey["normalizeStorageKey()"]
  end
  subgraph adapters_http_auth_api_key_auth_middleware["adapters/http/auth/api-key-auth-middleware"]
    apiKeyAuthMiddleware["apiKeyAuthMiddleware()"]
  end
  subgraph adapters_http_auth_tenant_scope["adapters/http/auth/tenant-scope"]
    parseTenantIdHeader["parseTenantIdHeader()"]
    resolveTenantScopeForAccount["resolveTenantScopeForAccount()"]
  end
  subgraph domain_identity_api_key_repository["domain/identity/api-key-repository"]
    createApiKeyRepository["createApiKeyRepository()"]
    toApiKeyAuthRecord["toApiKeyAuthRecord()"]
  end
  subgraph shared_api_key["shared/api-key"]
    hashApiKeySecret["hashApiKeySecret()"]
    parseBearerToken["parseBearerToken()"]
  end
  subgraph adapters_http_auth_auth_session_auth_middleware["adapters/http/auth/auth-session-auth-middleware"]
    authSessionAuthMiddleware["authSessionAuthMiddleware()"]
  end
  subgraph domain_identity_auth_session_repository["domain/identity/auth-session-repository"]
    createAuthSessionRepository["createAuthSessionRepository()"]
    toAuthSessionAuthRecord["toAuthSessionAuthRecord()"]
  end
  subgraph shared_auth_session["shared/auth-session"]
    hashAuthSessionSecret["hashAuthSessionSecret()"]
    createAuthSessionSecret["createAuthSessionSecret()"]
  end
  subgraph domain_tenancy_tenant_membership_repository["domain/tenancy/tenant-membership-repository"]
    createTenantMembershipRepository["createTenantMembershipRepository()"]
    toTenantMembershipRecord["toTenantMembershipRecord()"]
  end
  subgraph domain_operations_http_idempotency_key_repository["domain/operations/http-idempotency-key-repository"]
    createHttpIdempotencyKeyRepository["createHttpIdempotencyKeyRepository()"]
  end
  subgraph adapters_mcp_apps_meta["adapters/mcp/apps-meta"]
    toVisibility["toVisibility()"]
    parseMcpAppsToolMeta["parseMcpAppsToolMeta()"]
    isMcpToolModelVisible["isMcpToolModelVisible()"]
  end
  subgraph adapters_mcp_normalize_result["adapters/mcp/normalize-result"]
    extractErrorMessage["extractErrorMessage()"]
    normalizeContentBlock["normalizeContentBlock()"]
    normalizeMcpCallToolResult["normalizeMcpCallToolResult()"]
  end
  subgraph application_runtime_job_dependencies["application/runtime/job-dependencies"]
    isTerminalDependencyStatus["isTerminalDependencyStatus()"]
    isDelegatedChildSuspended["isDelegatedChildSuspended()"]
    dependenciesSatisfiedForJob["dependenciesSatisfiedForJob()"]
  end
  subgraph domain_runtime_run_dependency_repository["domain/runtime/run-dependency-repository"]
    createRunDependencyRepository["createRunDependencyRepository()"]
    toRunDependencyRecord["toRunDependencyRecord()"]
  end
  subgraph domain_runtime_run_repository["domain/runtime/run-repository"]
    createRunRepository["createRunRepository()"]
    toRunRecord["toRunRecord()"]
  end
  subgraph domain_sessions_session_message_repository["domain/sessions/session-message-repository"]
    getById["getById()"]
    createSessionMessageRepository["createSessionMessageRepository()"]
    toSessionMessageRecord["toSessionMessageRecord()"]
    listByThread["listByThread()"]
  end
  subgraph application_runtime_rebuild_run_execution_output["application/runtime/rebuild-run-execution-output"]
    toUsage["toUsage()"]
    readLatestAssistantItemId["readLatestAssistantItemId()"]
    rebuildRunExecutionOutput["rebuildRunExecutionOutput()"]
  end
  subgraph domain_runtime_item_repository["domain/runtime/item-repository"]
    createItemRepository["createItemRepository()"]
    createMessage["createMessage()"]
    toItemRecord["toItemRecord()"]
  end
  subgraph application_runtime_run_projection["application/runtime/run-projection"]
    toProjectedItemRole["toProjectedItemRole()"]
    readProjectedProviderPayload["readProjectedProviderPayload()"]
    readProjectedSessionMessageId["readProjectedSessionMessageId()"]
    readResponseId["readResponseId()"]
    listVisibleMessages["listVisibleMessages()"]
    ensureProjectedThreadContext["ensureProjectedThreadContext()"]
    projectVisibleMessagesToRunItems["projectVisibleMessagesToRunItems()"]
    listRunItems["listRunItems()"]
    isProjectionOnlyThreadContext["isProjectionOnlyThreadContext()"]
  end
  subgraph application_runtime_tool_apps_meta["application/runtime/tool-apps-meta"]
    extractOutputAppsMeta["extractOutputAppsMeta()"]
    getToolAppsMetaPayload["getToolAppsMetaPayload()"]
  end
  subgraph application_system_observability_quarantine["application/system/observability-quarantine"]
    toPayloadIdentity["toPayloadIdentity()"]
    listObservabilityQuarantine["listObservabilityQuarantine()"]
    replayObservabilityQuarantineEntry["replayObservabilityQuarantineEntry()"]
    toQuarantineEntry["toQuarantineEntry()"]
  end
  subgraph domain_events_event_outbox_repository["domain/events/event-outbox-repository"]
    createEventOutboxRepository["createEventOutboxRepository()"]
  end
  subgraph application_system_observability_replay["application/system/observability-replay"]
    findTerminalRootRunId["findTerminalRootRunId()"]
    replayObservabilityRun["replayObservabilityRun()"]
    replayObservabilitySession["replayObservabilitySession()"]
    collectLatestTerminalRootRunEvents["collectLatestTerminalRootRunEvents()"]
    enqueueReplayEntries["enqueueReplayEntries()"]
  end
  subgraph application_events_background_dispatcher["application/events/background-dispatcher"]
    dispatchBackgroundEvent["dispatchBackgroundEvent()"]
    toInternalTenantScope["toInternalTenantScope()"]
  end
  subgraph application_events_langfuse_dispatcher["application/events/langfuse-dispatcher"]
    dispatchLangfuseEvent["dispatchLangfuseEvent()"]
  end
  subgraph application_events_projection_dispatcher["application/events/projection-dispatcher"]
    dispatchProjectionEvent["dispatchProjectionEvent()"]
    dispatchRunContextProjection["dispatchRunContextProjection()"]
    dispatchMessagePostedProjection["dispatchMessagePostedProjection()"]
    readPayloadString["readPayloadString()"]
  end
  subgraph application_commands_internal_command_context["application/commands/internal-command-context"]
    createInternalCommandContext["createInternalCommandContext()"]
  end
  subgraph application_runtime_readiness_engine["application/runtime/readiness-engine"]
    decisionKey["decisionKey()"]
    firstUnskipped["firstUnskipped()"]
    matchesDecisionFilter["matchesDecisionFilter()"]
    compareNullableAsc["compareNullableAsc()"]
    compareNumberAsc["compareNumberAsc()"]
    compareStringAsc["compareStringAsc()"]
    createReadinessEngine["createReadinessEngine()"]
    firstFilteredUnskipped["firstFilteredUnskipped()"]
    isHeartbeatPast["isHeartbeatPast()"]
    isDue["isDue()"]
    compareWaitingSnapshots["compareWaitingSnapshots()"]
    compareStaleSnapshots["compareStaleSnapshots()"]
    compareReadySnapshots["compareReadySnapshots()"]
    compareResolvedWaitSnapshots["compareResolvedWaitSnapshots()"]
    compareTimedOutWaitSnapshots["compareTimedOutWaitSnapshots()"]
  end
  subgraph adapters_http_routes_v1_account_routes["adapters/http/routes/v1/account-routes"]
    createAccountRoutes["createAccountRoutes()"]
    toAccountPreferencesService["toAccountPreferencesService()"]
  end
  subgraph adapters_http_parse_json_body["adapters/http/parse-json-body"]
    parseJsonBody["parseJsonBody()"]
  end
  subgraph app_require_tenant_scope["app/require-tenant-scope"]
    requireTenantScope["requireTenantScope()"]
  end
  subgraph application_preferences_account_preferences_service["application/preferences/account-preferences-service"]
    parseAccountPreferencesPatchInput["parseAccountPreferencesPatchInput()"]
    createAccountPreferencesService["createAccountPreferencesService()"]
    toView["toView()"]
  end
  subgraph adapters_http_routes_v1_agent_routes["adapters/http/routes/v1/agent-routes"]
    createAgentRoutes["createAgentRoutes()"]
    toAgentManagementService["toAgentManagementService()"]
    parseListAgentsOptions["parseListAgentsOptions()"]
  end
  subgraph application_agents_agent_management_service["application/agents/agent-management-service"]
    parseCreateAgentInput["parseCreateAgentInput()"]
    parseUpdateAgentInput["parseUpdateAgentInput()"]
    parseMarkdownUpdateInput["parseMarkdownUpdateInput()"]
    createAgentManagementService["createAgentManagementService()"]
    toMarkdownTools["toMarkdownTools()"]
    formatZodError["formatZodError()"]
    requireWritableScope["requireWritableScope()"]
    toStructuredMarkdownDocument["toStructuredMarkdownDocument()"]
    toMergedStructuredUpdateDocument["toMergedStructuredUpdateDocument()"]
    summarizeAgent["summarizeAgent()"]
    matchesAgentListOptions["matchesAgentListOptions()"]
  end
  subgraph adapters_http_routes_v1_api_routes["adapters/http/routes/v1/api-routes"]
    createApiRoutes["createApiRoutes()"]
  end
  subgraph adapters_http_routes_v1_auth_routes["adapters/http/routes/v1/auth-routes"]
    createAuthRoutes["createAuthRoutes()"]
    toAuthPayload["toAuthPayload()"]
    buildAuthResponse["buildAuthResponse()"]
    sessionCookieOptions["sessionCookieOptions()"]
    issueAuthSession["issueAuthSession()"]
  end
  subgraph adapters_http_routes_v1_event_routes["adapters/http/routes/v1/event-routes"]
    createEventRoutes["createEventRoutes()"]
    parseOptionalInteger["parseOptionalInteger()"]
    parseFollow["parseFollow()"]
    parseEventCategory["parseEventCategory()"]
  end
  subgraph adapters_http_routes_v1_file_picker_routes["adapters/http/routes/v1/file-picker-routes"]
    createFilePickerRoutes["createFilePickerRoutes()"]
  end
  subgraph adapters_http_routes_v1_file_routes["adapters/http/routes/v1/file-routes"]
    createFileRoutes["createFileRoutes()"]
    toFileSummary["toFileSummary()"]
    toDispositionFilename["toDispositionFilename()"]
  end
  subgraph adapters_http_routes_v1_mcp_routes["adapters/http/routes/v1/mcp-routes"]
    createMcpRoutes["createMcpRoutes()"]
    toStoredServerConfig["toStoredServerConfig()"]
    isStaticServerVisibleToTenant["isStaticServerVisibleToTenant()"]
    toApiDbServer["toApiDbServer()"]
    toApiStaticServer["toApiStaticServer()"]
    resolveRequestedToolProfileId["resolveRequestedToolProfileId()"]
    toApiStaticServerConfig["toApiStaticServerConfig()"]
    renderOauthCompletionPage["renderOauthCompletionPage()"]
    escapeHtml["escapeHtml()"]
    resolveAuthorizationCodeServer["resolveAuthorizationCodeServer()"]
  end
  subgraph adapters_http_routes_v1_run_routes["adapters/http/routes/v1/run-routes"]
    createRunRoutes["createRunRoutes()"]
    toCommandContext["toCommandContext()"]
  end
  subgraph adapters_http_routes_v1_session_routes["adapters/http/routes/v1/session-routes"]
    createSessionRoutes["createSessionRoutes()"]
    buildBootstrapSessionRecoverySnapshot["buildBootstrapSessionRecoverySnapshot()"]
    toBootstrapSessionSuccess["toBootstrapSessionSuccess()"]
    toBootstrapExecuteOverrides["toBootstrapExecuteOverrides()"]
  end
  subgraph adapters_http_routes_v1_system_routes["adapters/http/routes/v1/system-routes"]
    createSystemRoutes["createSystemRoutes()"]
  end
  subgraph adapters_http_routes_v1_thread_routes["adapters/http/routes/v1/thread-routes"]
    createThreadRoutes["createThreadRoutes()"]
    buildThreadInteractionRecoverySnapshot["buildThreadInteractionRecoverySnapshot()"]
    toThreadInteractionSuccess["toThreadInteractionSuccess()"]
    toThreadExecuteOverrides["toThreadExecuteOverrides()"]
    toThreadMemoryObservationRecord["toThreadMemoryObservationRecord()"]
    toThreadMemoryReflectionRecord["toThreadMemoryReflectionRecord()"]
  end
  subgraph adapters_http_routes_v1_tool_profile_routes["adapters/http/routes/v1/tool-profile-routes"]
    createToolProfileRoutes["createToolProfileRoutes()"]
    toToolProfileService["toToolProfileService()"]
  end
  subgraph adapters_http_routes_v1_upload_routes["adapters/http/routes/v1/upload-routes"]
    createUploadRoutes["createUploadRoutes()"]
    isUploadedFileLike["isUploadedFileLike()"]
  end
  subgraph app_require_authenticated_account["app/require-authenticated-account"]
    requireAuthenticatedAccount["requireAuthenticatedAccount()"]
  end
  subgraph domain_identity_password_credential_repository["domain/identity/password-credential-repository"]
    createPasswordCredentialRepository["createPasswordCredentialRepository()"]
  end
  subgraph shared_password["shared/password"]
    verifyPassword["verifyPassword()"]
    normalizeAuthEmail["normalizeAuthEmail()"]
    hashPassword["hashPassword()"]
    toBuffer["toBuffer()"]
  end
  subgraph application_access_resource_access["application/access/resource-access"]
    createResourceAccessService["createResourceAccessService()"]
    hasTenantResourceOverride["hasTenantResourceOverride()"]
    canAccessSessionOwnerResource["canAccessSessionOwnerResource()"]
    isRecoverableLinkLookupError["isRecoverableLinkLookupError()"]
  end
  subgraph application_files_file_picker_search["application/files/file-picker-search"]
    searchFilePicker["searchFilePicker()"]
    scoreEntry["scoreEntry()"]
    dedupeAttachments["dedupeAttachments()"]
    filterFilesWithPresentBlobs["filterFilesWithPresentBlobs()"]
    clampLimit["clampLimit()"]
    normalizeSeparators["normalizeSeparators()"]
    normalizeBlobStorageKey["normalizeBlobStorageKey()"]
    escapeRegex["escapeRegex()"]
    globToRegex["globToRegex()"]
    resolveBlobStoragePath["resolveBlobStoragePath()"]
    matchIgnoreRule["matchIgnoreRule()"]
    compileIgnoreRule["compileIgnoreRule()"]
    readIgnoreRules["readIgnoreRules()"]
    isIgnored["isIgnored()"]
    toDepth["toDepth()"]
    toFileExtension["toFileExtension()"]
    buildWorkspaceIndex["buildWorkspaceIndex()"]
    dedupeSortedIndices["dedupeSortedIndices()"]
    extensionBoost["extensionBoost()"]
    recencyBoost["recencyBoost()"]
    mapNameIndicesToPathIndices["mapNameIndicesToPathIndices()"]
    fuzzyIndices["fuzzyIndices()"]
    toAttachmentEntry["toAttachmentEntry()"]
    toSearchResultItem["toSearchResultItem()"]
  end
  subgraph domain_files_file_repository["domain/files/file-repository"]
    createFileRepository["createFileRepository()"]
    toFileRecord["toFileRecord()"]
  end
  subgraph domain_mcp_mcp_server_repository["domain/mcp/mcp-server-repository"]
    createMcpServerRepository["createMcpServerRepository()"]
    toMcpServerConfig["toMcpServerConfig()"]
    toMcpServerRecord["toMcpServerRecord()"]
  end
  subgraph adapters_mcp_stored_auth["adapters/mcp/stored-auth"]
    protectStoredHttpAuthConfig["protectStoredHttpAuthConfig()"]
    encryptStoredSecret["encryptStoredSecret()"]
    decryptStoredSecret["decryptStoredSecret()"]
    revealStoredHttpAuthConfig["revealStoredHttpAuthConfig()"]
  end
  subgraph adapters_mcp_oauth_authorization_code["adapters/mcp/oauth-authorization-code"]
    canStartAuthorizationCodeOAuth["canStartAuthorizationCodeOAuth()"]
    toAuthorizationCodeServerConfig["toAuthorizationCodeServerConfig()"]
    isAuthorizationCodeServer["isAuthorizationCodeServer()"]
    toAuthorizationCodeAuthConfig["toAuthorizationCodeAuthConfig()"]
  end
  subgraph application_commands_cancel_run["application/commands/cancel-run"]
    createCancelRunCommand["createCancelRunCommand()"]
    parseCancelRunInput["parseCancelRunInput()"]
  end
  subgraph application_commands_execute_run["application/commands/execute-run"]
    parseExecuteRunInput["parseExecuteRunInput()"]
    createExecuteRunCommand["createExecuteRunCommand()"]
    toConfigSnapshot["toConfigSnapshot()"]
    resolveConfigSnapshotReasoning["resolveConfigSnapshotReasoning()"]
  end
  subgraph application_commands_resume_run["application/commands/resume-run"]
    createResumeRunCommand["createResumeRunCommand()"]
    parseResumeRunInput["parseResumeRunInput()"]
  end
  subgraph application_runtime_job_read_model["application/runtime/job-read-model"]
    loadRunJobReadModel["loadRunJobReadModel()"]
    loadThreadRootJobReadModel["loadThreadRootJobReadModel()"]
    toJobReadModel["toJobReadModel()"]
  end
  subgraph application_runtime_run_command_recovery["application/runtime/run-command-recovery"]
    recoverExecuteRunOutput["recoverExecuteRunOutput()"]
    readAuthorizedRun["readAuthorizedRun()"]
    rebuildDurableRunOutput["rebuildDurableRunOutput()"]
    recoverResumeRunOutput["recoverResumeRunOutput()"]
    recoverCancelRunOutput["recoverCancelRunOutput()"]
    delay["delay()"]
    toRecoveryDeadline["toRecoveryDeadline()"]
  end
  subgraph application_commands_bootstrap_session["application/commands/bootstrap-session"]
    createBootstrapSessionCommand["createBootstrapSessionCommand()"]
    parseBootstrapSessionInput["parseBootstrapSessionInput()"]
  end
  subgraph application_commands_create_session_thread["application/commands/create-session-thread"]
    parseCreateSessionThreadInput["parseCreateSessionThreadInput()"]
    createCreateSessionThreadCommand["createCreateSessionThreadCommand()"]
  end
  subgraph application_commands_create_session["application/commands/create-session"]
    parseCreateSessionInput["parseCreateSessionInput()"]
    createCreateSessionCommand["createCreateSessionCommand()"]
  end
  subgraph application_runtime_run_wait_resolution["application/runtime/run-wait-resolution"]
    resolveRunWait["resolveRunWait()"]
    toChildRunResultKind["toChildRunResultKind()"]
    toChildRunSummary["toChildRunSummary()"]
    isConfirmationWait["isConfirmationWait()"]
    toPendingWaitSummary["toPendingWaitSummary()"]
    toToolFailure["toToolFailure()"]
    toPersistedWaitOutput["toPersistedWaitOutput()"]
    loadPendingWaitSummaries["loadPendingWaitSummaries()"]
    appendChildRunCompletedEvent["appendChildRunCompletedEvent()"]
    resumeOrStayWaiting["resumeOrStayWaiting()"]
  end
  subgraph application_system_models_catalog["application/system/models-catalog"]
    buildModelsCatalog["buildModelsCatalog()"]
    resolveContextWindowForModel["resolveContextWindowForModel()"]
    getReasoningModesForTarget["getReasoningModesForTarget()"]
  end
  subgraph application_system_observability_status["application/system/observability-status"]
    buildObservabilityStatus["buildObservabilityStatus()"]
    resolveWorkerTarget["resolveWorkerTarget()"]
    emptyTopicStatus["emptyTopicStatus()"]
    minIsoTimestamp["minIsoTimestamp()"]
    mergeRetryBuckets["mergeRetryBuckets()"]
    toWorkerStatuses["toWorkerStatuses()"]
  end
  subgraph application_commands_branch_thread["application/commands/branch-thread"]
    createBranchThreadCommand["createBranchThreadCommand()"]
    parseBranchThreadInput["parseBranchThreadInput()"]
    hasActiveRootJobStatus["hasActiveRootJobStatus()"]
    copyThreadMessagesThroughSource["copyThreadMessagesThroughSource()"]
    isBranchableMessage["isBranchableMessage()"]
  end
  subgraph application_commands_delete_thread["application/commands/delete-thread"]
    createDeleteThreadCommand["createDeleteThreadCommand()"]
    collectThreadSubtreeIds["collectThreadSubtreeIds()"]
  end
  subgraph application_commands_edit_thread_message["application/commands/edit-thread-message"]
    createEditThreadMessageCommand["createEditThreadMessageCommand()"]
    parseEditThreadMessageInput["parseEditThreadMessageInput()"]
    toContent["toContent()"]
  end
  subgraph application_commands_post_thread_message["application/commands/post-thread-message"]
    createPostThreadMessageCommand["createPostThreadMessageCommand()"]
    parsePostThreadMessageInput["parsePostThreadMessageInput()"]
  end
  subgraph application_commands_start_thread_interaction["application/commands/start-thread-interaction"]
    createStartThreadInteractionCommand["createStartThreadInteractionCommand()"]
    parseStartThreadInteractionInput["parseStartThreadInteractionInput()"]
    deriveTask["deriveTask()"]
    pickReusableRootJob["pickReusableRootJob()"]
  end
  subgraph application_runtime_thread_activity_read_model["application/runtime/thread-activity-read-model"]
    loadThreadActivityReadModel["loadThreadActivityReadModel()"]
    toEpochMs["toEpochMs()"]
    compareThreadActivityReadModels["compareThreadActivityReadModels()"]
    isCompletedWithinWindow["isCompletedWithinWindow()"]
    loadCurrentRun["loadCurrentRun()"]
    loadPendingWaits["loadPendingWaits()"]
    resolvePendingWaitState["resolvePendingWaitState()"]
    toActivityReadModel["toActivityReadModel()"]
  end
  subgraph domain_sessions_session_thread_repository["domain/sessions/session-thread-repository"]
    createSessionThreadRepository["createSessionThreadRepository()"]
    toSessionThreadRecord["toSessionThreadRecord()"]
    buildConversationSearchQuery["buildConversationSearchQuery()"]
    toSessionThreadRecordFromRaw["toSessionThreadRecordFromRaw()"]
  end
  subgraph application_tool_access_tool_profile_service["application/tool-access/tool-profile-service"]
    parseCreateToolProfileInput["parseCreateToolProfileInput()"]
    parseUpdateToolProfileInput["parseUpdateToolProfileInput()"]
    createToolProfileService["createToolProfileService()"]
    requireMembership["requireMembership()"]
    canWriteToolProfiles["canWriteToolProfiles()"]
    toToolProfileSummary["toToolProfileSummary()"]
    canEditToolProfile["canEditToolProfile()"]
  end
  subgraph application_files_upload_file["application/files/upload-file"]
    createUploadFileCommand["createUploadFileCommand()"]
    sanitizeFilenameSegment["sanitizeFilenameSegment()"]
    toAttachmentFilename["toAttachmentFilename()"]
    toStorageKey["toStorageKey()"]
    markUploadFailed["markUploadFailed()"]
  end
  subgraph adapters_mcp_client_factory["adapters/mcp/client-factory"]
    createMcpClientBundle["createMcpClientBundle()"]
    toStreamableRequestOptions["toStreamableRequestOptions()"]
  end
  subgraph adapters_mcp_gateway["adapters/mcp/gateway"]
    createMcpGateway["createMcpGateway()"]
    isServerAvailableForScope["isServerAvailableForScope()"]
    mapLogLevel["mapLogLevel()"]
    toMcpTraceObservationKey["toMcpTraceObservationKey()"]
    toW3cTraceparent["toW3cTraceparent()"]
    isStaticToolAllowedForTenant["isStaticToolAllowedForTenant()"]
    summarizeError["summarizeError()"]
    looksLikeOAuthChallenge["looksLikeOAuthChallenge()"]
    buildMcpTraceMeta["buildMcpTraceMeta()"]
    toSyntheticScope["toSyntheticScope()"]
    isToolAssignedToProfile["isToolAssignedToProfile()"]
    getConfirmationTargetRef["getConfirmationTargetRef()"]
    isWorkspaceScopedFilesServer["isWorkspaceScopedFilesServer()"]
    prefixScopedPath["prefixScopedPath()"]
    resolveWorkspaceScopedMountRoot["resolveWorkspaceScopedMountRoot()"]
    resolveScopedFilesystemRoot["resolveScopedFilesystemRoot()"]
    toScopedPrefix["toScopedPrefix()"]
    stripScopedPath["stripScopedPath()"]
    stripScopedPathReferences["stripScopedPathReferences()"]
    rewriteWorkspaceScopedJson["rewriteWorkspaceScopedJson()"]
    rewriteWorkspaceScopedArgs["rewriteWorkspaceScopedArgs()"]
    rewriteWorkspaceScopedOutput["rewriteWorkspaceScopedOutput()"]
    resolveWorkspaceScopedPrefix["resolveWorkspaceScopedPrefix()"]
  end
  subgraph domain_mcp_mcp_oauth_credential_repository["domain/mcp/mcp-oauth-credential-repository"]
    createMcpOauthCredentialRepository["createMcpOauthCredentialRepository()"]
  end
  subgraph adapters_mcp_normalize_tool["adapters/mcp/normalize-tool"]
    getMcpRuntimeNameAliasesFromRuntimeName["getMcpRuntimeNameAliasesFromRuntimeName()"]
    buildMcpRuntimeName["buildMcpRuntimeName()"]
    toLegacyMcpRuntimeName["toLegacyMcpRuntimeName()"]
    toCanonicalMcpRuntimeName["toCanonicalMcpRuntimeName()"]
    toRuntimePrefix["toRuntimePrefix()"]
    toRuntimeSuffix["toRuntimeSuffix()"]
    cloneSchemaObject["cloneSchemaObject()"]
    normalizeMcpTool["normalizeMcpTool()"]
    slugify["slugify()"]
  end
  subgraph adapters_observability_langfuse_trace_identity["adapters/observability/langfuse/trace-identity"]
    toLangfuseObservationId["toLangfuseObservationId()"]
    toLangfuseTraceId["toLangfuseTraceId()"]
  end
  subgraph domain_mcp_mcp_tool_assignment_repository["domain/mcp/mcp-tool-assignment-repository"]
    createMcpToolAssignmentRepository["createMcpToolAssignmentRepository()"]
    toMcpToolAssignmentRecord["toMcpToolAssignmentRecord()"]
  end
  subgraph domain_agents_workspace_repository["domain/agents/workspace-repository"]
    createWorkspaceRepository["createWorkspaceRepository()"]
    toWorkspaceRecord["toWorkspaceRecord()"]
  end
  subgraph adapters_mcp_tool_fingerprint["adapters/mcp/tool-fingerprint"]
    createMcpToolFingerprint["createMcpToolFingerprint()"]
    canonicalize["canonicalize()"]
  end
  subgraph adapters_mcp_oauth_provider["adapters/mcp/oauth-provider"]
    beginStoredMcpAuthorization["beginStoredMcpAuthorization()"]
    createStoredMcpOAuthProvider["createStoredMcpOAuthProvider()"]
    completeStoredMcpAuthorization["completeStoredMcpAuthorization()"]
    buildClientMetadata["buildClientMetadata()"]
    toStaticClientInformation["toStaticClientInformation()"]
  end
  subgraph adapters_mcp_stored_oauth["adapters/mcp/stored-oauth"]
    protectStoredOauthTokens["protectStoredOauthTokens()"]
    protectStoredOauthClientInformation["protectStoredOauthClientInformation()"]
    cloneStoredOauthDiscoveryState["cloneStoredOauthDiscoveryState()"]
    revealStoredOauthTokens["revealStoredOauthTokens()"]
    revealStoredOauthClientInformation["revealStoredOauthClientInformation()"]
  end
  subgraph domain_mcp_mcp_oauth_authorization_repository["domain/mcp/mcp-oauth-authorization-repository"]
    createMcpOauthAuthorizationRepository["createMcpOauthAuthorizationRepository()"]
    toRecord["toRecord()"]
  end
  subgraph shared_secret_box["shared/secret-box"]
    isEncryptedSecret["isEncryptedSecret()"]
    createSecretBox["createSecretBox()"]
    deriveKey["deriveKey()"]
  end
  subgraph application_commands_event_store["application/commands/event-store"]
    createEventStore["createEventStore()"]
    isEventOutboxTopic["isEventOutboxTopic()"]
    normalizeOutboxTopics["normalizeOutboxTopics()"]
  end
  subgraph application_runtime_run_events["application/runtime/run-events"]
    createRunEventPayload["createRunEventPayload()"]
    resolveRunEventThreadId["resolveRunEventThreadId()"]
    appendRunEvent["appendRunEvent()"]
    appendDomainEvent["appendDomainEvent()"]
    readRunEventThreadId["readRunEventThreadId()"]
  end
  subgraph application_runtime_run_telemetry["application/runtime/run-telemetry"]
    tryAppendRunTelemetryEvent["tryAppendRunTelemetryEvent()"]
    warnTelemetryDrop["warnTelemetryDrop()"]
    emitProgressReported["emitProgressReported()"]
    emitTurnStarted["emitTurnStarted()"]
    emitGenerationStarted["emitGenerationStarted()"]
    emitGenerationFailed["emitGenerationFailed()"]
    emitReasoningSummaryDelta["emitReasoningSummaryDelta()"]
    emitReasoningSummaryDone["emitReasoningSummaryDone()"]
    emitStreamDelta["emitStreamDelta()"]
    toStructuredToolDefinitions["toStructuredToolDefinitions()"]
    toStructuredOutputItems["toStructuredOutputItems()"]
    toStructuredToolCalls["toStructuredToolCalls()"]
    emitTurnCompleted["emitTurnCompleted()"]
    emitGenerationCompleted["emitGenerationCompleted()"]
    emitStreamDone["emitStreamDone()"]
    emitWebSearchProgress["emitWebSearchProgress()"]
  end
  subgraph app_config["app/config"]
    loadConfig["loadConfig()"]
    parseCsv["parseCsv()"]
    parseInteger["parseInteger()"]
    parseBoolean["parseBoolean()"]
    parseNonNegativeInteger["parseNonNegativeInteger()"]
    parseOptionalString["parseOptionalString()"]
    parseUnitInterval["parseUnitInterval()"]
    parseBasePath["parseBasePath()"]
    parseAuthMethods["parseAuthMethods()"]
    deriveAuthMethodsFromMode["deriveAuthMethodsFromMode()"]
    resolveMcpServers["resolveMcpServers()"]
  end
  subgraph app_create_app["app/create-app"]
    createApp["createApp()"]
    resolveCorsOrigin["resolveCorsOrigin()"]
  end
  subgraph adapters_http_api_envelope["adapters/http/api-envelope"]
    errorEnvelope["errorEnvelope()"]
  end
  subgraph adapters_http_routes_root_routes["adapters/http/routes/root-routes"]
    createRootRoutes["createRootRoutes()"]
  end
  subgraph app_middleware_access_log["app/middleware/access-log"]
    accessLogMiddleware["accessLogMiddleware()"]
    resolveEventLevel["resolveEventLevel()"]
  end
  subgraph app_middleware_api_response["app/middleware/api-response"]
    apiResponseMiddleware["apiResponseMiddleware()"]
  end
  subgraph app_middleware_request_size_guard["app/middleware/request-size-guard"]
    requestSizeGuardMiddleware["requestSizeGuardMiddleware()"]
  end
  subgraph app_middleware_runtime_context["app/middleware/runtime-context"]
    runtimeContextMiddleware["runtimeContextMiddleware()"]
  end
  subgraph shared_errors["shared/errors"]
    isDomainErrorException["isDomainErrorException()"]
    toHttpStatus["toHttpStatus()"]
  end
  subgraph app_load_env["app/load-env"]
    loadEnvFileIntoProcess["loadEnvFileIntoProcess()"]
    normalizeValue["normalizeValue()"]
  end
  subgraph app_middleware_request_context["app/middleware/request-context"]
    createRequestId["createRequestId()"]
    createTraceId["createTraceId()"]
  end
  subgraph app_runtime["app/runtime"]
    resolveRuntimeMcpServers["resolveRuntimeMcpServers()"]
    createAppRuntime["createAppRuntime()"]
    initializeAppRuntime["initializeAppRuntime()"]
    closeAppRuntime["closeAppRuntime()"]
  end
  subgraph application_agents_register_agent_native_tools["application/agents/register-agent-native-tools"]
    registerAgentNativeTools["registerAgentNativeTools()"]
    resolveSuspendWaitPair["resolveSuspendWaitPair()"]
  end
  subgraph application_events_realtime_relay["application/events/realtime-relay"]
    createRealtimeEventRelay["createRealtimeEventRelay()"]
    matchesCategory["matchesCategory()"]
    matchesScope["matchesScope()"]
    clearPendingTimer["clearPendingTimer()"]
  end
  subgraph application_interactions_interaction_service["application/interactions/interaction-service"]
    createAiInteractionService["createAiInteractionService()"]
    resolveInteractionRequest["resolveInteractionRequest()"]
    requireConfiguredProvider["requireConfiguredProvider()"]
  end
  subgraph application_runtime_active_run_registry["application/runtime/active-run-registry"]
    createActiveRunRegistry["createActiveRunRegistry()"]
  end
  subgraph db_client["db/client"]
    createDatabaseClient["createDatabaseClient()"]
    applyPragmas["applyPragmas()"]
  end
  subgraph domain_tooling_tool_registry["domain/tooling/tool-registry"]
    createToolRegistry["createToolRegistry()"]
  end
  subgraph shared_logger["shared/logger"]
    createLogger["createLogger()"]
  end
  subgraph shared_time["shared/time"]
    createSystemClock["createSystemClock()"]
  end
  subgraph index["index"]
    shutdown["shutdown()"]
    closeHttpServer["closeHttpServer()"]
  end
  subgraph domain_runtime_tool_execution_repository["domain/runtime/tool-execution-repository"]
    createToolExecutionRepository["createToolExecutionRepository()"]
    toToolExecutionRecord["toToolExecutionRecord()"]
  end
  subgraph domain_sessions_work_session_repository["domain/sessions/work-session-repository"]
    createWorkSessionRepository["createWorkSessionRepository()"]
    toWorkSessionRecord["toWorkSessionRecord()"]
  end
  subgraph application_agents_agent_capabilities["application/agents/agent-capabilities"]
    getAgentDescription["getAgentDescription()"]
    normalizeText["normalizeText()"]
    toOptionalText["toOptionalText()"]
    getNativeToolNames["getNativeToolNames()"]
    listAgentCapabilities["listAgentCapabilities()"]
  end
  subgraph application_agents_agent_markdown["application/agents/agent-markdown"]
    parseStoredAgentFrontmatter["parseStoredAgentFrontmatter()"]
    toAgentMarkdownFrontmatterJson["toAgentMarkdownFrontmatterJson()"]
    toValidationError["toValidationError()"]
    normalizeNewlines["normalizeNewlines()"]
    toTypedFrontmatter["toTypedFrontmatter()"]
    parseAgentMarkdown["parseAgentMarkdown()"]
    normalizeInstructionsMd["normalizeInstructionsMd()"]
    parseFrontmatterJson["parseFrontmatterJson()"]
    serializeAgentMarkdown["serializeAgentMarkdown()"]
  end
  subgraph domain_mcp_mcp_tool_cache_repository["domain/mcp/mcp-tool-cache-repository"]
    createMcpToolCacheRepository["createMcpToolCacheRepository()"]
  end
  subgraph application_interactions_normalize_interaction_response["application/interactions/normalize-interaction-response"]
    normalizeAssistantMessageContent["normalizeAssistantMessageContent()"]
    normalizeAssistantOutputText["normalizeAssistantOutputText()"]
  end
  subgraph application_agents_agent_access["application/agents/agent-access"]
    canWriteAgents["canWriteAgents()"]
    canReadAgent["canReadAgent()"]
  end
  subgraph application_agents_agent_sync_service["application/agents/agent-sync-service"]
    createAgentSyncService["createAgentSyncService()"]
    buildModelConfigJson["buildModelConfigJson()"]
    buildToolPolicyJson["buildToolPolicyJson()"]
    buildMemoryPolicyJson["buildMemoryPolicyJson()"]
    buildWorkspacePolicyJson["buildWorkspacePolicyJson()"]
    toConflictError["toConflictError()"]
    toExportDocument["toExportDocument()"]
    buildChecksumSha256["buildChecksumSha256()"]
    buildResolvedConfigJson["buildResolvedConfigJson()"]
    normalizeTools["normalizeTools()"]
    toRevisionToolProfileId["toRevisionToolProfileId()"]
    resolveSubagentDefinitions["resolveSubagentDefinitions()"]
  end
  subgraph domain_agents_agent_repository["domain/agents/agent-repository"]
    createAgentRepository["createAgentRepository()"]
    toAgentRecord["toAgentRecord()"]
  end
  subgraph domain_agents_agent_revision_repository["domain/agents/agent-revision-repository"]
    createAgentRevisionRepository["createAgentRevisionRepository()"]
    toAgentRevisionRecord["toAgentRevisionRecord()"]
  end
  subgraph domain_agents_agent_subagent_link_repository["domain/agents/agent-subagent-link-repository"]
    createAgentSubagentLinkRepository["createAgentSubagentLinkRepository()"]
  end
  subgraph domain_preferences_account_preferences_repository["domain/preferences/account-preferences-repository"]
    createAccountPreferencesRepository["createAccountPreferencesRepository()"]
    toAccountPreferencesRecord["toAccountPreferencesRecord()"]
  end
  subgraph application_tool_access_tool_profile_access["application/tool-access/tool-profile-access"]
    canReadToolProfile["canReadToolProfile()"]
    canViewToolProfile["canViewToolProfile()"]
  end
  subgraph domain_tool_access_tool_profile_repository["domain/tool-access/tool-profile-repository"]
    createToolProfileRepository["createToolProfileRepository()"]
    toToolProfileRecord["toToolProfileRecord()"]
  end
  subgraph application_agents_delegation_service["application/agents/delegation-service"]
    createDelegationService["createDelegationService()"]
    createEventAppender["createEventAppender()"]
    formatDelegationHandoffText["formatDelegationHandoffText()"]
    collectParentVisibleFileIds["collectParentVisibleFileIds()"]
    formatDelegatedTaskText["formatDelegatedTaskText()"]
    toApiVersion["toApiVersion()"]
    linkInputFilesToChildRun["linkInputFilesToChildRun()"]
  end
  subgraph domain_files_file_link_repository["domain/files/file-link-repository"]
    createFileLinkRepository["createFileLinkRepository()"]
  end
  subgraph domain_runtime_job_dependency_repository["domain/runtime/job-dependency-repository"]
    createJobDependencyRepository["createJobDependencyRepository()"]
  end
  subgraph domain_runtime_job_repository["domain/runtime/job-repository"]
    createJobRepository["createJobRepository()"]
    toJobRecord["toJobRecord()"]
    buildUpdatePatch["buildUpdatePatch()"]
  end
  subgraph application_agents_resume_delegated_run_service["application/agents/resume-delegated-run-service"]
    resumeDelegatedRun["resumeDelegatedRun()"]
  end
  subgraph application_agents_root_run_agent_binding["application/agents/root-run-agent-binding"]
    resolveRootRunAgentBinding["resolveRootRunAgentBinding()"]
    resolveReadableAgent["resolveReadableAgent()"]
  end
  subgraph application_agents_root_run_target_input["application/agents/root-run-target-input"]
    resolveRootRunTargetSelection["resolveRootRunTargetSelection()"]
  end
  subgraph application_workspaces_workspace_service["application/workspaces/workspace-service"]
    createWorkspaceService["createWorkspaceService()"]
    toWorkspaceBaseRoot["toWorkspaceBaseRoot()"]
    toWorkspaceRootRef["toWorkspaceRootRef()"]
    ensureWorkspaceDirectories["ensureWorkspaceDirectories()"]
    ensureDirectory["ensureDirectory()"]
    toAgentsRef["toAgentsRef()"]
    toVaultRef["toVaultRef()"]
    toAttachmentsRef["toAttachmentsRef()"]
    toSessionRef["toSessionRef()"]
    toRunRef["toRunRef()"]
  end
  subgraph application_workspaces_workspace_events["application/workspaces/workspace-events"]
    appendWorkspaceLifecycleEvents["appendWorkspaceLifecycleEvents()"]
    toPayload["toPayload()"]
  end
  subgraph application_commands_thread_history_pruning["application/commands/thread-history-pruning"]
    pruneThreadHistoryInTransaction["pruneThreadHistoryInTransaction()"]
    blocksPermanentDelete["blocksPermanentDelete()"]
    jsonStringAt["jsonStringAt()"]
  end
  subgraph application_events_outbox_signal["application/events/outbox-signal"]
    signalOutboxPending["signalOutboxPending()"]
  end
  subgraph domain_events_committed_event_contract["domain/events/committed-event-contract"]
    getCanonicalCommittedEventContract["getCanonicalCommittedEventContract()"]
    resolveCanonicalCommittedEventOutboxTopics["resolveCanonicalCommittedEventOutboxTopics()"]
    isRootRunTerminalObservabilityTrigger["isRootRunTerminalObservabilityTrigger()"]
    toContracts["toContracts()"]
  end
  subgraph application_runtime_job_sync["application/runtime/job-sync"]
    queueLinkedJob["queueLinkedJob()"]
    reopenThreadRootJobForNewMessage["reopenThreadRootJobForNewMessage()"]
    updateRunLinkedJob["updateRunLinkedJob()"]
    markLinkedJobRunning["markLinkedJobRunning()"]
    markLinkedJobWaiting["markLinkedJobWaiting()"]
    markRunJobBlocked["markRunJobBlocked()"]
    markRunJobCompleted["markRunJobCompleted()"]
    markRunJobCancelled["markRunJobCancelled()"]
    recordLinkedJobHeartbeat["recordLinkedJobHeartbeat()"]
  end
  subgraph application_runtime_child_run_delivery["application/runtime/child-run-delivery"]
    toToolArgs["toToolArgs()"]
    requiresApprovalForWait["requiresApprovalForWait()"]
    loadChildRunResultEnvelope["loadChildRunResultEnvelope()"]
    toRunSummary["toRunSummary()"]
    loadSuspendedWaitSummaries["loadSuspendedWaitSummaries()"]
    deliverChildResultToParentWaits["deliverChildResultToParentWaits()"]
    isParentDeliverableSuspendedWait["isParentDeliverableSuspendedWait()"]
  end
  subgraph application_commands_file_link_cleanup["application/commands/file-link-cleanup"]
    buildFileDeletionPlanFromDirectLinks["buildFileDeletionPlanFromDirectLinks()"]
    uniqueStrings["uniqueStrings()"]
    selectFileDeletionPlan["selectFileDeletionPlan()"]
  end
  subgraph application_commands_thread_message_files["application/commands/thread-message-files"]
    replaceMessageFiles["replaceMessageFiles()"]
    ensureFilesAttachedToMessage["ensureFilesAttachedToMessage()"]
  end
  subgraph application_naming_thread_title_service["application/naming/thread-title-service"]
    processThreadNamingRequest["processThreadNamingRequest()"]
    toFailureError["toFailureError()"]
    shouldSkipAutoFirstMessageRename["shouldSkipAutoFirstMessageRename()"]
    shouldSkipManualRegenerateRename["shouldSkipManualRegenerateRename()"]
  end
  subgraph application_events_outbox_worker["application/events/outbox-worker"]
    createEventOutboxWorker["createEventOutboxWorker()"]
    createDispatchers["createDispatchers()"]
    createEventOutboxLane["createEventOutboxLane()"]
    createLaneBackedEventOutboxWorker["createLaneBackedEventOutboxWorker()"]
    createObservabilityOutboxWorker["createObservabilityOutboxWorker()"]
    shouldQuarantineObservabilityFailure["shouldQuarantineObservabilityFailure()"]
  end
  subgraph application_runtime_run_execution_scope["application/runtime/run-execution-scope"]
    resolveExecutionScopeForSession["resolveExecutionScopeForSession()"]
  end
  subgraph domain_events_event_stream_filter["domain/events/event-stream-filter"]
    matchesSession["matchesSession()"]
    matchesThread["matchesThread()"]
    matchesRun["matchesRun()"]
    matchesDomainEventStreamScope["matchesDomainEventStreamScope()"]
  end
  subgraph application_files_file_context["application/files/file-context"]
    loadVisibleFileContext["loadVisibleFileContext()"]
    toTextContent["toTextContent()"]
    loadEntry["loadEntry()"]
    resolveFileLabel["resolveFileLabel()"]
    toFileContextMessages["toFileContextMessages()"]
    isTextLikeMimeType["isTextLikeMimeType()"]
    toInlineText["toInlineText()"]
    toMetadataOnlyText["toMetadataOnlyText()"]
  end
  subgraph application_naming_thread_title_sampler["application/naming/thread-title-sampler"]
    normalizeLineEndings["normalizeLineEndings()"]
    normalizeExcerpt["normalizeExcerpt()"]
    stripLargeTextPasteHiddenMetadata["stripLargeTextPasteHiddenMetadata()"]
    toMessageText["toMessageText()"]
    trimLongExcerpt["trimLongExcerpt()"]
    normalizeMessageText["normalizeMessageText()"]
    capCombinedSource["capCombinedSource()"]
    sampleThreadTitleSourceText["sampleThreadTitleSourceText()"]
    sampleAutoFirstMessage["sampleAutoFirstMessage()"]
    sampleManualRegenerate["sampleManualRegenerate()"]
  end
  subgraph domain_files_file_access["domain/files/file-access"]
    isMimeTypeAllowed["isMimeTypeAllowed()"]
  end
  subgraph domain_files_upload_repository["domain/files/upload-repository"]
    createUploadRepository["createUploadRepository()"]
    toUploadRecord["toUploadRecord()"]
  end
  subgraph application_interactions_interaction_tooling["application/interactions/interaction-tooling"]
    buildInteractionToolingRequest["buildInteractionToolingRequest()"]
    isModelVisibleFunctionToolName["isModelVisibleFunctionToolName()"]
    toToolDefinitions["toToolDefinitions()"]
  end
  subgraph application_memory_observe_summary["application/memory/observe-summary"]
    formatObservationMemoryText["formatObservationMemoryText()"]
    estimateObservationTokenCount["estimateObservationTokenCount()"]
    observeSummary["observeSummary()"]
    resolveObserverTarget["resolveObserverTarget()"]
    toObservationBlock["toObservationBlock()"]
  end
  subgraph application_memory_reflect_run_local_memory["application/memory/reflect-run-local-memory"]
    formatReflectionMemoryText["formatReflectionMemoryText()"]
    reflectRunLocalMemory["reflectRunLocalMemory()"]
    estimateReflectionTokenCount["estimateReflectionTokenCount()"]
    shouldReflectRunLocalObservations["shouldReflectRunLocalObservations()"]
    resolveReflectorTarget["resolveReflectorTarget()"]
    toReflectionBlock["toReflectionBlock()"]
    resolveReflectionSourceTokenThreshold["resolveReflectionSourceTokenThreshold()"]
    toObservationBlocks["toObservationBlocks()"]
  end
  subgraph domain_ai_model_registry["domain/ai/model-registry"]
    resolveAiModelTarget["resolveAiModelTarget()"]
    resolveDefaultTarget["resolveDefaultTarget()"]
  end
  subgraph application_runtime_context_compaction["application/runtime/context-compaction"]
    maybeCompactMainThreadContext["maybeCompactMainThreadContext()"]
    summarizeHeadItems["summarizeHeadItems()"]
    toSummaryMessageTokens["toSummaryMessageTokens()"]
    computeTailStart["computeTailStart()"]
    getUnsummarizedItems["getUnsummarizedItems()"]
    shouldCompact["shouldCompact()"]
    resolveCompactionThresholds["resolveCompactionThresholds()"]
    truncate["truncate()"]
    findFunctionCallIndex["findFunctionCallIndex()"]
    getItemTokenCount["getItemTokenCount()"]
    findFunctionResultIndex["findFunctionResultIndex()"]
    adjustTailStartForBoundaries["adjustTailStartForBoundaries()"]
  end
  subgraph domain_runtime_context_summary_repository["domain/runtime/context-summary-repository"]
    createContextSummaryRepository["createContextSummaryRepository()"]
  end
  subgraph application_memory_memory_scope["application/memory/memory-scope"]
    resolveWritableMemoryScope["resolveWritableMemoryScope()"]
    resolveReadableMemoryScopes["resolveReadableMemoryScopes()"]
  end
  subgraph domain_memory_memory_record_repository["domain/memory/memory-record-repository"]
    createMemoryRecordRepository["createMemoryRecordRepository()"]
  end
  subgraph application_naming_thread_title_generator["application/naming/thread-title-generator"]
    generateThreadTitle["generateThreadTitle()"]
    resolveTitleTarget["resolveTitleTarget()"]
    sanitizeGeneratedTitle["sanitizeGeneratedTitle()"]
  end
  subgraph application_naming_thread_title_events["application/naming/thread-title-events"]
    appendThreadNamingStartedEvent["appendThreadNamingStartedEvent()"]
    appendThreadNamingFailedEvent["appendThreadNamingFailedEvent()"]
  end
  subgraph application_runtime_run_concurrency["application/runtime/run-concurrency"]
    assertRunSnapshotCurrent["assertRunSnapshotCurrent()"]
  end
  subgraph application_runtime_job_events["application/runtime/job-events"]
    appendJobCreatedEvents["appendJobCreatedEvents()"]
    appendJobStatusChangeEvent["appendJobStatusChangeEvent()"]
    appendJobEvent["appendJobEvent()"]
    toStatusEventType["toStatusEventType()"]
    toBasePayload["toBasePayload()"]
  end
  subgraph application_runtime_job_status_reasons["application/runtime/job-status-reasons"]
    buildRunLinkedJobQueueReason["buildRunLinkedJobQueueReason()"]
    buildDelegatedChildJobQueueReason["buildDelegatedChildJobQueueReason()"]
    buildRunLinkedJobRunningReason["buildRunLinkedJobRunningReason()"]
    buildRunLinkedJobWaitingReason["buildRunLinkedJobWaitingReason()"]
    buildRunLinkedJobBlockedReason["buildRunLinkedJobBlockedReason()"]
    buildRunLinkedJobTerminalReason["buildRunLinkedJobTerminalReason()"]
    buildThreadInteractionJobQueueReason["buildThreadInteractionJobQueueReason()"]
    buildSessionBootstrapJobQueueReason["buildSessionBootstrapJobQueueReason()"]
    buildNewUserMessageJobQueueReason["buildNewUserMessageJobQueueReason()"]
    parseJobQueueReason["parseJobQueueReason()"]
  end
  subgraph application_runtime_multiagent_worker["application/runtime/multiagent-worker"]
    createMultiagentWorker["createMultiagentWorker()"]
  end
  subgraph application_runtime_readiness_actions["application/runtime/readiness-actions"]
    createReadinessActions["createReadinessActions()"]
  end
  subgraph application_runtime_run_generation_stream["application/runtime/run-generation-stream"]
    streamRunInteraction["streamRunInteraction()"]
    backfillIncompleteGoogleStreamResponse["backfillIncompleteGoogleStreamResponse()"]
  end
  subgraph db_ensure_migration_journal["db/ensure-migration-journal"]
    ensureMigrationJournal["ensureMigrationJournal()"]
    getUserTableNames["getUserTableNames()"]
    resolveLegacyBaselineTag["resolveLegacyBaselineTag()"]
    readMigrationJournal["readMigrationJournal()"]
    readMigrationHash["readMigrationHash()"]
    createMigrationsTable["createMigrationsTable()"]
    matchesTableSet["matchesTableSet()"]
    hasSchemaObject["hasSchemaObject()"]
  end
  subgraph db_sqlite_adapter["db/sqlite-adapter"]
    openSqliteDatabase["openSqliteDatabase()"]
    migrateSqliteDatabase["migrateSqliteDatabase()"]
    isBunRuntime["isBunRuntime()"]
    normalizeMigrationStatement["normalizeMigrationStatement()"]
  end
  subgraph db_seed_main_account["db/seed-main-account"]
    formatSeedInstructions["formatSeedInstructions()"]
    main["main()"]
  end
  subgraph db_seeds_seed_main_account["db/seeds/seed-main-account"]
    seedMainAccount["seedMainAccount()"]
    createAssistantToolProfileId["createAssistantToolProfileId()"]
    resolveMainAccountSeedManifestPath["resolveMainAccountSeedManifestPath()"]
    writeMainAccountSeedManifest["writeMainAccountSeedManifest()"]
    resolveMainAccountApiKeySecret["resolveMainAccountApiKeySecret()"]
    resolveMainAccountSeedInput["resolveMainAccountSeedInput()"]
    isCurrentMainAccountSeedManifest["isCurrentMainAccountSeedManifest()"]
    readMainAccountSeedManifest["readMainAccountSeedManifest()"]
    createMainAccountApiKeySecret["createMainAccountApiKeySecret()"]
    createMainAccountPassword["createMainAccountPassword()"]
    createGeneratedSeedIds["createGeneratedSeedIds()"]
  end
  toGoogleDomainError --> isGoogleTimeoutError
  createGoogleProvider --> toGoogleDomainError
  createGoogleProvider --> resolveConfigured
  createGoogleProvider --> notConfiguredError
  createGoogleProvider --> installDiagnosticFetch
  createGoogleProvider --> ensureGoogleCompatibleRequest
  createGoogleProvider --> buildConfig
  createGoogleProvider --> normalizeResponse
  notConfiguredError --> normalizeResponse
  notConfiguredError --> toOpenAiDomainError
  notConfiguredError --> logOpenAiRequestDebug
  notConfiguredError --> createRequestBody
  notConfiguredError --> createRequestOptions
  getThoughtItemId --> toDomainFromUrl
  getThoughtItemId --> dedupeStrings
  getThoughtItemId --> dedupeWebReferences
  getThoughtItemId --> normalizeGroundingReferences
  installDiagnosticFetch --> toGoogleDomainError
  installDiagnosticFetch --> resolveConfigured
  installDiagnosticFetch --> notConfiguredError
  installDiagnosticFetch --> ensureGoogleCompatibleRequest
  installDiagnosticFetch --> buildConfig
  installDiagnosticFetch --> normalizeResponse
  ensureGoogleCompatibleRequest --> isRecord
  ensureGoogleCompatibleRequest --> parseRequiredJson
  buildConfig --> mapServiceTier
  buildConfig --> buildSystemInstruction
  buildConfig --> buildTools
  buildConfig --> buildToolConfig
  buildConfig --> buildHttpOptions
  buildConfig --> toThinkingConfig
  mapServiceTier --> toGoogleFunctionCallArgs
  mapServiceTier --> isRecord
  mapServiceTier --> parseRequiredJson
  toGoogleFunctionResponse --> toGoogleFunctionCallArgs
  toGoogleFunctionResponse --> isRecord
  toGoogleFunctionResponse --> parseRequiredJson
  toGoogleReasoningText --> toGoogleFunctionResponse
  toGoogleReasoningText --> toGoogleFunctionCallArgs
  toGoogleReasoningText --> isRecord
  toGoogleReasoningText --> parseRequiredJson
  toGoogleReasoningText --> toAssistantProviderMessageId
  toGoogleReasoningText --> buildModelVisibleMessageContent
  toGoogleReasoningText --> groupInlineImageFilesByMessageId
  toGoogleReasoningText --> toChildRunReplayOutput
  toGoogleFunctionCallArgs --> toGoogleFunctionResponse
  toGoogleFunctionCallArgs --> toGoogleReasoningText
  toGoogleFunctionCallArgs --> isRecord
  toGoogleFunctionCallArgs --> parseRequiredJson
  toGooglePart --> toGoogleFunctionResponse
  toGooglePart --> toGoogleReasoningText
  toGooglePart --> toGoogleFunctionCallArgs
  buildSystemInstruction --> toGooglePart
  buildSystemInstruction --> sanitizeSchemaNode
  buildContents --> toGooglePart
  buildContents --> sanitizeSchemaNode
  buildContents --> sanitizeToolSchema
  buildContents --> buildFunctionTools
  buildContents --> buildNativeTools
  sanitizeSchemaNode --> sanitizeToolSchema
  sanitizeSchemaNode --> buildFunctionTools
  sanitizeSchemaNode --> buildNativeTools
  sanitizeToolSchema --> sanitizeSchemaNode
  sanitizeToolSchema --> buildFunctionTools
  sanitizeToolSchema --> buildNativeTools
  buildFunctionTools --> sanitizeToolSchema
  buildFunctionTools --> buildNativeTools
  buildNativeTools --> buildFunctionTools
  buildNativeTools --> toThinkingLevel
  buildTools --> buildFunctionTools
  buildTools --> buildNativeTools
  buildTools --> toThinkingLevel
  buildTools --> toThinkingConfig
  buildToolConfig --> buildHttpOptions
  buildToolConfig --> toThinkingLevel
  buildToolConfig --> toThinkingConfig
  buildHttpOptions --> mapServiceTier
  buildHttpOptions --> buildSystemInstruction
  buildHttpOptions --> buildTools
  buildHttpOptions --> buildToolConfig
  buildHttpOptions --> toThinkingLevel
  buildHttpOptions --> toThinkingConfig
  toThinkingLevel --> mapServiceTier
  toThinkingLevel --> buildSystemInstruction
  toThinkingLevel --> buildTools
  toThinkingLevel --> buildToolConfig
  toThinkingLevel --> buildHttpOptions
  toThinkingLevel --> toThinkingConfig
  toThinkingConfig --> mapServiceTier
  toThinkingConfig --> buildSystemInstruction
  toThinkingConfig --> buildTools
  toThinkingConfig --> buildToolConfig
  toThinkingConfig --> buildHttpOptions
  toThinkingConfig --> toThinkingLevel
  normalizeToolCall --> getPrimaryCandidate
  normalizeToolCall --> toDomainFromUrl
  normalizeToolCall --> dedupeWebReferences
  normalizeToolCall --> toUrlCitationReference
  normalizeToolCall --> tryParseJson
  mapUsage --> getPrimaryCandidate
  mapUsage --> toDomainFromUrl
  mapUsage --> normalizeToolCall
  mapUsage --> createOpenAiWebSearchActivity
  mapUsage --> mergeOpenAiWebSearchActivity
  mapUsage --> collectOutputTextReferences
  mapUsage --> flattenReasoningSummaryText
  getRequestId --> getPrimaryCandidate
  getRequestId --> toDomainFromUrl
  getRequestId --> dedupeStrings
  getRequestId --> dedupeWebReferences
  getRequestId --> normalizeGroundingReferences
  normalizeResponse --> getThoughtItemId
  normalizeResponse --> normalizeToolCall
  normalizeResponse --> getRequestId
  normalizeResponse --> getPrimaryCandidate
  normalizeResponse --> getCandidateParts
  normalizeResponse --> normalizeWebSearches
  normalizeResponse --> getTerminalIssue
  normalizeResponse --> toThoughtSummary
  normalizeResponse --> flushAssistantMessage
  normalizeResponse --> mapUsage
  normalizeResponse --> normalizeOutputItems
  normalizeResponse --> normalizeMessages
  getPrimaryCandidate --> toDomainFromUrl
  getPrimaryCandidate --> dedupeStrings
  getPrimaryCandidate --> dedupeWebReferences
  getPrimaryCandidate --> normalizeGroundingReferences
  getCandidateParts --> getPrimaryCandidate
  getCandidateParts --> toDomainFromUrl
  getCandidateParts --> dedupeStrings
  getCandidateParts --> dedupeWebReferences
  getCandidateParts --> normalizeGroundingReferences
  toDomainFromUrl --> dedupeStrings
  toDomainFromUrl --> dedupeWebReferences
  toDomainFromUrl --> normalizeGroundingReferences
  toDomainFromUrl --> createOpenAiWebSearchActivity
  toDomainFromUrl --> toUrlCitationReference
  dedupeStrings --> toDomainFromUrl
  dedupeStrings --> dedupeWebReferences
  dedupeStrings --> normalizeGroundingReferences
  dedupeStrings --> createOpenAiWebSearchActivity
  dedupeStrings --> mergeWebSearchStatus
  dedupeStrings --> toUrlCitationReference
  dedupeStrings --> createDomainEventRepository
  dedupeWebReferences --> toDomainFromUrl
  dedupeWebReferences --> dedupeStrings
  dedupeWebReferences --> normalizeGroundingReferences
  dedupeWebReferences --> createOpenAiWebSearchActivity
  dedupeWebReferences --> mergeWebSearchStatus
  dedupeWebReferences --> toUrlCitationReference
  dedupeWebReferences --> createDomainEventRepository
  normalizeGroundingReferences --> toDomainFromUrl
  normalizeGroundingReferences --> dedupeStrings
  normalizeGroundingReferences --> dedupeWebReferences
  normalizeWebSearches --> dedupeStrings
  normalizeWebSearches --> normalizeGroundingReferences
  normalizeWebSearches --> mapUsage
  normalizeWebSearches --> dedupeWebReferences
  normalizeWebSearches --> createOpenAiWebSearchActivity
  normalizeWebSearches --> mergeOpenAiWebSearchActivity
  normalizeWebSearches --> collectOutputTextReferences
  normalizeWebSearches --> normalizeOutputItems
  normalizeWebSearches --> normalizeMessages
  hasDurableOutput --> getThoughtItemId
  hasDurableOutput --> normalizeToolCall
  hasDurableOutput --> getPrimaryCandidate
  hasDurableOutput --> getCandidateParts
  hasDurableOutput --> normalizeWebSearches
  hasDurableOutput --> toPromptBlockedIssue
  hasDurableOutput --> toCandidateFinishIssue
  hasDurableOutput --> toThoughtSummary
  hasDurableOutput --> flushAssistantMessage
  getTerminalIssue --> getThoughtItemId
  getTerminalIssue --> normalizeToolCall
  getTerminalIssue --> getPrimaryCandidate
  getTerminalIssue --> getCandidateParts
  getTerminalIssue --> normalizeWebSearches
  getTerminalIssue --> toPromptBlockedIssue
  getTerminalIssue --> toCandidateFinishIssue
  getTerminalIssue --> hasDurableOutput
  getTerminalIssue --> toThoughtSummary
  getTerminalIssue --> flushAssistantMessage
  toThoughtSummary --> getThoughtItemId
  toThoughtSummary --> normalizeToolCall
  toThoughtSummary --> getCandidateParts
  toThoughtSummary --> normalizeWebSearches
  toThoughtSummary --> getTerminalIssue
  toThoughtSummary --> flushAssistantMessage
  flushAssistantMessage --> getThoughtItemId
  flushAssistantMessage --> normalizeToolCall
  flushAssistantMessage --> getCandidateParts
  flushAssistantMessage --> normalizeWebSearches
  flushAssistantMessage --> getTerminalIssue
  flushAssistantMessage --> toThoughtSummary
  toOpenAiDomainError --> withToolContext
  createOpenAiProvider --> notConfiguredError
  createOpenAiProvider --> normalizeResponse
  createOpenAiProvider --> toOpenAiDomainError
  createOpenAiProvider --> getFunctionToolNames
  createOpenAiProvider --> logOpenAiRequestDebug
  createOpenAiProvider --> createRequestBody
  createOpenAiProvider --> createRequestOptions
  getFunctionToolNames --> getToolDescriptors
  getFunctionToolNames --> getReplayFunctionCallNames
  getFunctionToolNames --> getRequestRunId
  getToolDescriptors --> getFunctionToolNames
  getToolDescriptors --> getReplayFunctionCallNames
  getToolDescriptors --> getRequestRunId
  getReplayFunctionCallNames --> getFunctionToolNames
  getReplayFunctionCallNames --> getToolDescriptors
  getReplayFunctionCallNames --> getRequestRunId
  getReplayFunctionCallNames --> getErrorCode
  getReplayFunctionCallNames --> getErrorParam
  getReplayFunctionCallNames --> isNativeToolAllowedForRun
  getReplayFunctionCallNames --> isToolAllowedForRun
  getReplayFunctionCallNames --> assembleThreadInteractionRequest
  getReplayFunctionCallNames --> applyLatestBudgetCalibration
  getReplayFunctionCallNames --> loadThreadContext
  getReplayFunctionCallNames --> toInactiveRunError
  getReplayFunctionCallNames --> toRunCancelledExecutionError
  getReplayFunctionCallNames --> finalizeRunCancellation
  getReplayFunctionCallNames --> convergeRunExecutionConflict
  getReplayFunctionCallNames --> failRun
  getReplayFunctionCallNames --> toToolContext
  getReplayFunctionCallNames --> createUsageLedgerRepository
  getRequestRunId --> getFunctionToolNames
  getRequestRunId --> getToolDescriptors
  getRequestRunId --> getReplayFunctionCallNames
  getRequestRunId --> getErrorCode
  getRequestRunId --> getErrorParam
  getErrorCode --> getFunctionToolNames
  getErrorCode --> getToolDescriptors
  getErrorCode --> getReplayFunctionCallNames
  getErrorCode --> getRequestRunId
  getErrorCode --> getErrorParam
  getErrorParam --> getFunctionToolNames
  getErrorParam --> getToolDescriptors
  getErrorParam --> getReplayFunctionCallNames
  getErrorParam --> getRequestRunId
  getErrorParam --> getErrorCode
  logOpenAiRequestDebug --> getFunctionToolNames
  logOpenAiRequestDebug --> getToolDescriptors
  logOpenAiRequestDebug --> getReplayFunctionCallNames
  logOpenAiRequestDebug --> getRequestRunId
  logOpenAiRequestDebug --> getErrorCode
  logOpenAiRequestDebug --> getErrorParam
  getReasoningSummaryParts --> notConfiguredError
  getReasoningSummaryParts --> normalizeResponse
  getReasoningSummaryParts --> toOpenAiDomainError
  getReasoningSummaryParts --> getFunctionToolNames
  getReasoningSummaryParts --> logOpenAiRequestDebug
  getReasoningSummaryParts --> createRequestBody
  getReasoningSummaryParts --> createRequestOptions
  flattenReasoningSummaryParts --> notConfiguredError
  flattenReasoningSummaryParts --> normalizeResponse
  flattenReasoningSummaryParts --> toOpenAiDomainError
  flattenReasoningSummaryParts --> getFunctionToolNames
  flattenReasoningSummaryParts --> logOpenAiRequestDebug
  flattenReasoningSummaryParts --> createRequestBody
  flattenReasoningSummaryParts --> createRequestOptions
  createRequestBody --> createBaseRequestBody
  ensureOpenAiCompatibleRequest --> isOpenAiResponseIncludable
  toOpenAiInclude --> isOpenAiResponseIncludable
  toOpenAiReasoningSummary --> toOpenAiAssistantMessage
  toOpenAiMessageContent --> toOpenAiAssistantMessage
  toOpenAiAssistantMessage --> toOpenAiReasoningSummary
  toOpenAiAssistantMessage --> toOpenAiMessageContent
  toOpenAiInput --> toOpenAiReasoningSummary
  toOpenAiInput --> toOpenAiMessageContent
  toOpenAiInput --> toOpenAiAssistantMessage
  toOpenAiInput --> toOpenAiFunctionTools
  toOpenAiInput --> toOpenAiNativeTools
  toOpenAiFunctionTools --> ensureOpenAiCompatibleRequest
  toOpenAiFunctionTools --> toOpenAiInclude
  toOpenAiFunctionTools --> toOpenAiInput
  toOpenAiFunctionTools --> toOpenAiNativeTools
  toOpenAiFunctionTools --> toOpenAiTools
  toOpenAiFunctionTools --> toOpenAiToolChoice
  toOpenAiNativeTools --> createRequestBody
  toOpenAiNativeTools --> ensureOpenAiCompatibleRequest
  toOpenAiNativeTools --> toOpenAiInclude
  toOpenAiNativeTools --> toOpenAiInput
  toOpenAiNativeTools --> toOpenAiFunctionTools
  toOpenAiNativeTools --> toOpenAiTools
  toOpenAiNativeTools --> toOpenAiToolChoice
  toOpenAiTools --> createRequestBody
  toOpenAiTools --> ensureOpenAiCompatibleRequest
  toOpenAiTools --> toOpenAiInclude
  toOpenAiTools --> toOpenAiInput
  toOpenAiTools --> toOpenAiFunctionTools
  toOpenAiTools --> toOpenAiNativeTools
  toOpenAiTools --> toOpenAiToolChoice
  toOpenAiToolChoice --> createRequestBody
  toOpenAiToolChoice --> ensureOpenAiCompatibleRequest
  toOpenAiToolChoice --> toOpenAiInclude
  toOpenAiToolChoice --> toOpenAiInput
  toOpenAiToolChoice --> toOpenAiTools
  toOpenAiToolChoice --> createBaseRequestBody
  createBaseRequestBody --> createRequestBody
  createBaseRequestBody --> ensureOpenAiCompatibleRequest
  createBaseRequestBody --> toOpenAiInclude
  createBaseRequestBody --> toOpenAiInput
  createBaseRequestBody --> toOpenAiTools
  createBaseRequestBody --> toOpenAiToolChoice
  createOpenAiWebSearchActivity --> dedupeStrings
  createOpenAiWebSearchActivity --> dedupeWebReferences
  createOpenAiWebSearchActivity --> mergeWebSearchStatus
  createOpenAiWebSearchActivity --> toWebSearchSourceReferences
  updateOpenAiWebSearchActivityStatus --> normalizeToolCall
  updateOpenAiWebSearchActivityStatus --> dedupeStrings
  updateOpenAiWebSearchActivityStatus --> dedupeWebReferences
  updateOpenAiWebSearchActivityStatus --> createOpenAiWebSearchActivity
  updateOpenAiWebSearchActivityStatus --> mergeWebSearchStatus
  updateOpenAiWebSearchActivityStatus --> toWebSearchSourceReferences
  mergeOpenAiWebSearchActivity --> normalizeToolCall
  mergeOpenAiWebSearchActivity --> dedupeStrings
  mergeOpenAiWebSearchActivity --> dedupeWebReferences
  mergeOpenAiWebSearchActivity --> createOpenAiWebSearchActivity
  mergeOpenAiWebSearchActivity --> mergeWebSearchStatus
  mergeOpenAiWebSearchActivity --> toWebSearchSourceReferences
  mergeOpenAiWebSearchActivity --> flattenReasoningSummaryText
  mergeWebSearchStatus --> toDomainFromUrl
  mergeWebSearchStatus --> dedupeWebReferences
  mergeWebSearchStatus --> createOpenAiWebSearchActivity
  mergeWebSearchStatus --> toUrlCitationReference
  toUrlCitationReference --> toDomainFromUrl
  toUrlCitationReference --> dedupeStrings
  toUrlCitationReference --> dedupeWebReferences
  toUrlCitationReference --> createOpenAiWebSearchActivity
  toUrlCitationReference --> mergeWebSearchStatus
  collectOutputTextReferences --> toDomainFromUrl
  collectOutputTextReferences --> dedupeStrings
  collectOutputTextReferences --> dedupeWebReferences
  collectOutputTextReferences --> createOpenAiWebSearchActivity
  collectOutputTextReferences --> mergeWebSearchStatus
  collectOutputTextReferences --> toUrlCitationReference
  collectOutputTextReferences --> toWebSearchSourceReferences
  toWebSearchSourceReferences --> toDomainFromUrl
  toWebSearchSourceReferences --> dedupeStrings
  toWebSearchSourceReferences --> dedupeWebReferences
  toWebSearchSourceReferences --> createOpenAiWebSearchActivity
  toWebSearchSourceReferences --> mergeWebSearchStatus
  normalizeOutputItems --> normalizeToolCall
  normalizeOutputItems --> dedupeWebReferences
  normalizeOutputItems --> createOpenAiWebSearchActivity
  normalizeOutputItems --> mergeOpenAiWebSearchActivity
  normalizeOutputItems --> collectOutputTextReferences
  normalizeOutputItems --> flattenReasoningSummaryText
  normalizeMessages --> mapUsage
  normalizeMessages --> dedupeWebReferences
  normalizeMessages --> normalizeWebSearches
  normalizeMessages --> createOpenAiWebSearchActivity
  normalizeMessages --> mergeOpenAiWebSearchActivity
  normalizeMessages --> collectOutputTextReferences
  normalizeMessages --> normalizeOutputItems
  createLocalBlobStore --> resolveStoragePath
  normalizeStorageKey --> resolveStoragePath
  resolveStoragePath --> normalizeStorageKey
  apiKeyAuthMiddleware --> parseTenantIdHeader
  apiKeyAuthMiddleware --> resolveTenantScopeForAccount
  apiKeyAuthMiddleware --> createApiKeyRepository
  apiKeyAuthMiddleware --> hashApiKeySecret
  apiKeyAuthMiddleware --> parseBearerToken
  authSessionAuthMiddleware --> parseTenantIdHeader
  authSessionAuthMiddleware --> resolveTenantScopeForAccount
  authSessionAuthMiddleware --> createAuthSessionRepository
  authSessionAuthMiddleware --> hashAuthSessionSecret
  parseTenantIdHeader --> createTenantMembershipRepository
  resolveTenantScopeForAccount --> createTenantMembershipRepository
  toRequestHash --> normalizeJsonValue
  toRequestHash --> createHttpIdempotencyKeyRepository
  isRecord --> toRequestHash
  isRecord --> normalizeJsonValue
  isRecord --> toVisibility
  isRecord --> extractErrorMessage
  isRecord --> normalizeContentBlock
  isRecord --> isTerminalDependencyStatus
  isRecord --> isDelegatedChildSuspended
  isRecord --> createRunDependencyRepository
  isRecord --> createRunRepository
  isRecord --> getById
  isRecord --> toUsage
  isRecord --> readLatestAssistantItemId
  isRecord --> createItemRepository
  isRecord --> dedupeWebReferences
  isRecord --> createDomainEventRepository
  isRecord --> toProjectedItemRole
  isRecord --> readProjectedProviderPayload
  isRecord --> readProjectedSessionMessageId
  isRecord --> readResponseId
  isRecord --> extractOutputAppsMeta
  isRecord --> asString
  isRecord --> toPayloadIdentity
  isRecord --> createEventOutboxRepository
  isRecord --> findTerminalRootRunId
  normalizeJsonValue --> toRequestHash
  normalizeJsonValue --> isRecord
  normalizeJsonValue --> createHttpIdempotencyKeyRepository
  addMilliseconds --> toRequestHash
  addMilliseconds --> createHttpIdempotencyKeyRepository
  addMilliseconds --> dispatchBackgroundEvent
  addMilliseconds --> dispatchLangfuseEvent
  addMilliseconds --> dispatchProjectionEvent
  addMilliseconds --> createEventOutboxRepository
  addMilliseconds --> createInternalCommandContext
  addMilliseconds --> createRunDependencyRepository
  addMilliseconds --> createRunRepository
  addMilliseconds --> decisionKey
  addMilliseconds --> firstUnskipped
  addMilliseconds --> matchesDecisionFilter
  addMilliseconds --> compareNullableAsc
  addMilliseconds --> compareNumberAsc
  addMilliseconds --> compareStringAsc
  createAccountRoutes --> parseJsonBody
  createAccountRoutes --> toAccountPreferencesService
  createAccountRoutes --> requireTenantScope
  createAccountRoutes --> parseAccountPreferencesPatchInput
  toAccountPreferencesService --> parseJsonBody
  toAccountPreferencesService --> requireTenantScope
  toAccountPreferencesService --> parseAccountPreferencesPatchInput
  toAccountPreferencesService --> createAccountPreferencesService
  createAgentRoutes --> parseJsonBody
  createAgentRoutes --> toAgentManagementService
  createAgentRoutes --> parseListAgentsOptions
  createAgentRoutes --> requireTenantScope
  createAgentRoutes --> parseCreateAgentInput
  createAgentRoutes --> parseUpdateAgentInput
  createAgentRoutes --> parseMarkdownUpdateInput
  toAgentManagementService --> parseJsonBody
  toAgentManagementService --> parseListAgentsOptions
  toAgentManagementService --> requireTenantScope
  toAgentManagementService --> parseCreateAgentInput
  toAgentManagementService --> parseUpdateAgentInput
  toAgentManagementService --> createAgentManagementService
  parseListAgentsOptions --> parseJsonBody
  parseListAgentsOptions --> toAgentManagementService
  parseListAgentsOptions --> requireTenantScope
  parseListAgentsOptions --> parseCreateAgentInput
  parseListAgentsOptions --> parseUpdateAgentInput
  createApiRoutes --> createAccountRoutes
  createApiRoutes --> createAgentRoutes
  createApiRoutes --> createAuthRoutes
  createApiRoutes --> createEventRoutes
  createApiRoutes --> createFilePickerRoutes
  createApiRoutes --> createFileRoutes
  createApiRoutes --> createMcpRoutes
  createApiRoutes --> createRunRoutes
  createApiRoutes --> createSessionRoutes
  createApiRoutes --> createSystemRoutes
  createApiRoutes --> createThreadRoutes
  createApiRoutes --> createToolProfileRoutes
  createApiRoutes --> createUploadRoutes
  createAuthRoutes --> parseJsonBody
  createAuthRoutes --> toAuthPayload
  createAuthRoutes --> buildAuthResponse
  createAuthRoutes --> sessionCookieOptions
  createAuthRoutes --> issueAuthSession
  createAuthRoutes --> requireAuthenticatedAccount
  createAuthRoutes --> createAuthSessionRepository
  createAuthRoutes --> createPasswordCredentialRepository
  createAuthRoutes --> verifyPassword
  toAuthPayload --> parseJsonBody
  toAuthPayload --> buildAuthResponse
  toAuthPayload --> sessionCookieOptions
  toAuthPayload --> requireAuthenticatedAccount
  toAuthPayload --> createAuthSessionRepository
  toAuthPayload --> createTenantMembershipRepository
  toAuthPayload --> createAuthSessionSecret
  toAuthPayload --> hashAuthSessionSecret
  buildAuthResponse --> parseJsonBody
  buildAuthResponse --> toAuthPayload
  buildAuthResponse --> sessionCookieOptions
  buildAuthResponse --> requireAuthenticatedAccount
  buildAuthResponse --> createAuthSessionRepository
  buildAuthResponse --> createPasswordCredentialRepository
  buildAuthResponse --> createTenantMembershipRepository
  buildAuthResponse --> createAuthSessionSecret
  buildAuthResponse --> hashAuthSessionSecret
  sessionCookieOptions --> parseJsonBody
  sessionCookieOptions --> toAuthPayload
  sessionCookieOptions --> buildAuthResponse
  sessionCookieOptions --> issueAuthSession
  sessionCookieOptions --> requireAuthenticatedAccount
  sessionCookieOptions --> createAuthSessionRepository
  sessionCookieOptions --> createPasswordCredentialRepository
  sessionCookieOptions --> createAuthSessionSecret
  sessionCookieOptions --> hashAuthSessionSecret
  sessionCookieOptions --> verifyPassword
  issueAuthSession --> parseJsonBody
  issueAuthSession --> toAuthPayload
  issueAuthSession --> buildAuthResponse
  issueAuthSession --> sessionCookieOptions
  issueAuthSession --> requireAuthenticatedAccount
  issueAuthSession --> createAuthSessionRepository
  issueAuthSession --> createPasswordCredentialRepository
  issueAuthSession --> createAuthSessionSecret
  issueAuthSession --> hashAuthSessionSecret
  issueAuthSession --> verifyPassword
  createEventRoutes --> parseOptionalInteger
  createEventRoutes --> parseFollow
  createEventRoutes --> parseEventCategory
  createEventRoutes --> requireTenantScope
  createEventRoutes --> createResourceAccessService
  createEventRoutes --> createDomainEventRepository
  parseOptionalInteger --> parseFollow
  parseOptionalInteger --> parseEventCategory
  parseOptionalInteger --> requireTenantScope
  parseOptionalInteger --> createResourceAccessService
  parseOptionalInteger --> createDomainEventRepository
  parseFollow --> parseOptionalInteger
  parseFollow --> parseEventCategory
  parseFollow --> requireTenantScope
  parseFollow --> createResourceAccessService
  parseFollow --> createDomainEventRepository
  parseEventCategory --> parseOptionalInteger
  parseEventCategory --> parseFollow
  parseEventCategory --> requireTenantScope
  parseEventCategory --> createResourceAccessService
  parseEventCategory --> createDomainEventRepository
  createFilePickerRoutes --> requireTenantScope
  createFilePickerRoutes --> searchFilePicker
  createFileRoutes --> toFileSummary
  createFileRoutes --> toDispositionFilename
  createFileRoutes --> requireTenantScope
  createFileRoutes --> createResourceAccessService
  createFileRoutes --> createFileRepository
  toFileSummary --> toDispositionFilename
  toFileSummary --> requireTenantScope
  toFileSummary --> createResourceAccessService
  toFileSummary --> createFileRepository
  toDispositionFilename --> toFileSummary
  toDispositionFilename --> requireTenantScope
  toDispositionFilename --> createResourceAccessService
  toDispositionFilename --> createFileRepository
  createMcpRoutes --> toStoredServerConfig
  createMcpRoutes --> isStaticServerVisibleToTenant
  createMcpRoutes --> toApiDbServer
  createMcpRoutes --> toApiStaticServer
  createMcpRoutes --> requireTenantScope
  createMcpRoutes --> createMcpServerRepository
  resolveRequestedToolProfileId --> protectStoredHttpAuthConfig
  toStoredServerConfig --> protectStoredHttpAuthConfig
  isStaticServerVisibleToTenant --> toApiStaticServerConfig
  isStaticServerVisibleToTenant --> toMcpServerConfig
  toApiStaticServerConfig --> toMcpServerConfig
  toApiDbServer --> toApiStaticServerConfig
  toApiDbServer --> toMcpServerConfig
  toApiStaticServer --> toApiStaticServerConfig
  renderOauthCompletionPage --> escapeHtml
  resolveAuthorizationCodeServer --> toStoredServerConfig
  resolveAuthorizationCodeServer --> isStaticServerVisibleToTenant
  resolveAuthorizationCodeServer --> toApiDbServer
  resolveAuthorizationCodeServer --> toApiStaticServer
  resolveAuthorizationCodeServer --> canStartAuthorizationCodeOAuth
  resolveAuthorizationCodeServer --> toAuthorizationCodeServerConfig
  resolveAuthorizationCodeServer --> requireTenantScope
  resolveAuthorizationCodeServer --> toMcpServerConfig
  resolveAuthorizationCodeServer --> createMcpServerRepository
  resolveAuthorizationCodeServer --> getById
  createRunRoutes --> parseJsonBody
  createRunRoutes --> toCommandContext
  createRunRoutes --> requireTenantScope
  createRunRoutes --> createResourceAccessService
  createRunRoutes --> createCancelRunCommand
  createRunRoutes --> parseExecuteRunInput
  createRunRoutes --> createExecuteRunCommand
  createRunRoutes --> createResumeRunCommand
  createRunRoutes --> loadRunJobReadModel
  createRunRoutes --> recoverExecuteRunOutput
  toCommandContext --> parseJsonBody
  toCommandContext --> requireTenantScope
  toCommandContext --> createResourceAccessService
  toCommandContext --> createCancelRunCommand
  toCommandContext --> parseExecuteRunInput
  toCommandContext --> createExecuteRunCommand
  toCommandContext --> createResumeRunCommand
  toCommandContext --> loadRunJobReadModel
  toCommandContext --> recoverExecuteRunOutput
  toCommandContext --> createBootstrapSessionCommand
  toCommandContext --> parseCreateSessionThreadInput
  toCommandContext --> createCreateSessionThreadCommand
  toCommandContext --> parseCreateSessionInput
  toCommandContext --> createCreateSessionCommand
  toCommandContext --> resolveRunWait
  toCommandContext --> createRunRepository
  toCommandContext --> getById
  createSessionRoutes --> parseJsonBody
  createSessionRoutes --> toCommandContext
  createSessionRoutes --> requireTenantScope
  createSessionRoutes --> createResourceAccessService
  createSessionRoutes --> createBootstrapSessionCommand
  createSessionRoutes --> parseCreateSessionThreadInput
  createSessionRoutes --> createCreateSessionThreadCommand
  createSessionRoutes --> parseCreateSessionInput
  createSessionRoutes --> createCreateSessionCommand
  createSessionRoutes --> createExecuteRunCommand
  createSessionRoutes --> createFileRepository
  buildBootstrapSessionRecoverySnapshot --> parseJsonBody
  buildBootstrapSessionRecoverySnapshot --> toCommandContext
  buildBootstrapSessionRecoverySnapshot --> requireTenantScope
  buildBootstrapSessionRecoverySnapshot --> createBootstrapSessionCommand
  buildBootstrapSessionRecoverySnapshot --> parseCreateSessionThreadInput
  buildBootstrapSessionRecoverySnapshot --> createCreateSessionThreadCommand
  buildBootstrapSessionRecoverySnapshot --> parseCreateSessionInput
  buildBootstrapSessionRecoverySnapshot --> createCreateSessionCommand
  buildBootstrapSessionRecoverySnapshot --> createExecuteRunCommand
  toBootstrapSessionSuccess --> parseJsonBody
  toBootstrapSessionSuccess --> toCommandContext
  toBootstrapSessionSuccess --> requireTenantScope
  toBootstrapSessionSuccess --> createBootstrapSessionCommand
  toBootstrapSessionSuccess --> parseCreateSessionThreadInput
  toBootstrapSessionSuccess --> createCreateSessionThreadCommand
  toBootstrapSessionSuccess --> parseCreateSessionInput
  toBootstrapSessionSuccess --> createCreateSessionCommand
  toBootstrapSessionSuccess --> createExecuteRunCommand
  toBootstrapExecuteOverrides --> parseJsonBody
  toBootstrapExecuteOverrides --> toCommandContext
  toBootstrapExecuteOverrides --> requireTenantScope
  toBootstrapExecuteOverrides --> createBootstrapSessionCommand
  toBootstrapExecuteOverrides --> parseCreateSessionThreadInput
  toBootstrapExecuteOverrides --> createCreateSessionThreadCommand
  toBootstrapExecuteOverrides --> parseCreateSessionInput
  toBootstrapExecuteOverrides --> createCreateSessionCommand
  toBootstrapExecuteOverrides --> createExecuteRunCommand
  createSystemRoutes --> requireTenantScope
  createSystemRoutes --> buildModelsCatalog
  createSystemRoutes --> listObservabilityQuarantine
  createSystemRoutes --> replayObservabilityQuarantineEntry
  createSystemRoutes --> replayObservabilityRun
  createSystemRoutes --> replayObservabilitySession
  createSystemRoutes --> buildObservabilityStatus
  createThreadRoutes --> requireTenantScope
  createThreadRoutes --> createBranchThreadCommand
  createThreadRoutes --> createDeleteThreadCommand
  createThreadRoutes --> createEditThreadMessageCommand
  createThreadRoutes --> createExecuteRunCommand
  createThreadRoutes --> createPostThreadMessageCommand
  createThreadRoutes --> createStartThreadInteractionCommand
  createThreadRoutes --> loadThreadRootJobReadModel
  createThreadRoutes --> loadThreadActivityReadModel
  createThreadRoutes --> createSessionThreadRepository
  buildThreadInteractionRecoverySnapshot --> requireTenantScope
  buildThreadInteractionRecoverySnapshot --> createBranchThreadCommand
  buildThreadInteractionRecoverySnapshot --> createDeleteThreadCommand
  buildThreadInteractionRecoverySnapshot --> createEditThreadMessageCommand
  buildThreadInteractionRecoverySnapshot --> createExecuteRunCommand
  buildThreadInteractionRecoverySnapshot --> createPostThreadMessageCommand
  buildThreadInteractionRecoverySnapshot --> createStartThreadInteractionCommand
  buildThreadInteractionRecoverySnapshot --> loadThreadRootJobReadModel
  buildThreadInteractionRecoverySnapshot --> createSessionThreadRepository
  toThreadInteractionSuccess --> requireTenantScope
  toThreadInteractionSuccess --> createBranchThreadCommand
  toThreadInteractionSuccess --> createDeleteThreadCommand
  toThreadInteractionSuccess --> createEditThreadMessageCommand
  toThreadInteractionSuccess --> createExecuteRunCommand
  toThreadInteractionSuccess --> createPostThreadMessageCommand
  toThreadInteractionSuccess --> createStartThreadInteractionCommand
  toThreadInteractionSuccess --> loadThreadRootJobReadModel
  toThreadInteractionSuccess --> createSessionThreadRepository
  toThreadExecuteOverrides --> requireTenantScope
  toThreadExecuteOverrides --> createBranchThreadCommand
  toThreadExecuteOverrides --> createDeleteThreadCommand
  toThreadExecuteOverrides --> createEditThreadMessageCommand
  toThreadExecuteOverrides --> createExecuteRunCommand
  toThreadExecuteOverrides --> createPostThreadMessageCommand
  toThreadExecuteOverrides --> createStartThreadInteractionCommand
  toThreadExecuteOverrides --> loadThreadRootJobReadModel
  toThreadExecuteOverrides --> createSessionThreadRepository
  toThreadMemoryObservationRecord --> requireTenantScope
  toThreadMemoryObservationRecord --> createBranchThreadCommand
  toThreadMemoryObservationRecord --> createDeleteThreadCommand
  toThreadMemoryObservationRecord --> createEditThreadMessageCommand
  toThreadMemoryObservationRecord --> createExecuteRunCommand
  toThreadMemoryObservationRecord --> createPostThreadMessageCommand
  toThreadMemoryObservationRecord --> createStartThreadInteractionCommand
  toThreadMemoryObservationRecord --> loadThreadRootJobReadModel
  toThreadMemoryObservationRecord --> loadThreadActivityReadModel
  toThreadMemoryObservationRecord --> createSessionThreadRepository
  toThreadMemoryReflectionRecord --> requireTenantScope
  toThreadMemoryReflectionRecord --> createBranchThreadCommand
  toThreadMemoryReflectionRecord --> createDeleteThreadCommand
  toThreadMemoryReflectionRecord --> createEditThreadMessageCommand
  toThreadMemoryReflectionRecord --> createExecuteRunCommand
  toThreadMemoryReflectionRecord --> createPostThreadMessageCommand
  toThreadMemoryReflectionRecord --> createStartThreadInteractionCommand
  toThreadMemoryReflectionRecord --> loadThreadRootJobReadModel
  toThreadMemoryReflectionRecord --> loadThreadActivityReadModel
  toThreadMemoryReflectionRecord --> createSessionThreadRepository
  createToolProfileRoutes --> parseJsonBody
  createToolProfileRoutes --> toToolProfileService
  createToolProfileRoutes --> requireTenantScope
  createToolProfileRoutes --> parseCreateToolProfileInput
  createToolProfileRoutes --> parseUpdateToolProfileInput
  toToolProfileService --> parseJsonBody
  toToolProfileService --> requireTenantScope
  toToolProfileService --> parseCreateToolProfileInput
  toToolProfileService --> parseUpdateToolProfileInput
  toToolProfileService --> createToolProfileService
  createUploadRoutes --> isUploadedFileLike
  createUploadRoutes --> requireTenantScope
  createUploadRoutes --> createUploadFileCommand
  isUploadedFileLike --> requireTenantScope
  isUploadedFileLike --> createUploadFileCommand
  parseMcpAppsToolMeta --> isRecord
  parseMcpAppsToolMeta --> toVisibility
  toVisibility --> isRecord
  createMcpClientBundle --> toStreamableRequestOptions
  createMcpGateway --> isServerAvailableForScope
  createMcpGateway --> isAuthorizationCodeServer
  createMcpGateway --> toAuthorizationCodeServerConfig
  createMcpGateway --> createMcpOauthCredentialRepository
  mapLogLevel --> toMcpTraceObservationKey
  mapLogLevel --> toW3cTraceparent
  mapLogLevel --> isStaticToolAllowedForTenant
  mapLogLevel --> getMcpRuntimeNameAliasesFromRuntimeName
  mapLogLevel --> toLangfuseObservationId
  mapLogLevel --> toLangfuseTraceId
  mapLogLevel --> createMcpToolAssignmentRepository
  summarizeError --> toMcpTraceObservationKey
  summarizeError --> toW3cTraceparent
  summarizeError --> isStaticToolAllowedForTenant
  summarizeError --> getMcpRuntimeNameAliasesFromRuntimeName
  summarizeError --> toLangfuseObservationId
  summarizeError --> toLangfuseTraceId
  summarizeError --> createMcpToolAssignmentRepository
  looksLikeOAuthChallenge --> toMcpTraceObservationKey
  looksLikeOAuthChallenge --> toW3cTraceparent
  looksLikeOAuthChallenge --> isStaticToolAllowedForTenant
  looksLikeOAuthChallenge --> getMcpRuntimeNameAliasesFromRuntimeName
  looksLikeOAuthChallenge --> toLangfuseObservationId
  looksLikeOAuthChallenge --> toLangfuseTraceId
  looksLikeOAuthChallenge --> createMcpToolAssignmentRepository
  toMcpTraceObservationKey --> toW3cTraceparent
  toMcpTraceObservationKey --> isStaticToolAllowedForTenant
  toMcpTraceObservationKey --> getMcpRuntimeNameAliasesFromRuntimeName
  toMcpTraceObservationKey --> toLangfuseObservationId
  toMcpTraceObservationKey --> toLangfuseTraceId
  toMcpTraceObservationKey --> createMcpToolAssignmentRepository
  toW3cTraceparent --> toMcpTraceObservationKey
  toW3cTraceparent --> isStaticToolAllowedForTenant
  toW3cTraceparent --> getMcpRuntimeNameAliasesFromRuntimeName
  toW3cTraceparent --> toLangfuseObservationId
  toW3cTraceparent --> toLangfuseTraceId
  toW3cTraceparent --> createMcpToolAssignmentRepository
  buildMcpTraceMeta --> toMcpTraceObservationKey
  buildMcpTraceMeta --> toW3cTraceparent
  buildMcpTraceMeta --> isStaticToolAllowedForTenant
  buildMcpTraceMeta --> getMcpRuntimeNameAliasesFromRuntimeName
  buildMcpTraceMeta --> toLangfuseObservationId
  buildMcpTraceMeta --> toLangfuseTraceId
  buildMcpTraceMeta --> createMcpToolAssignmentRepository
  isStaticToolAllowedForTenant --> getMcpRuntimeNameAliasesFromRuntimeName
  isStaticToolAllowedForTenant --> createWorkspaceRepository
  isStaticToolAllowedForTenant --> createMcpToolAssignmentRepository
  isStaticToolAllowedForTenant --> getById
  isServerAvailableForScope --> isStaticToolAllowedForTenant
  isServerAvailableForScope --> getMcpRuntimeNameAliasesFromRuntimeName
  isServerAvailableForScope --> createWorkspaceRepository
  isServerAvailableForScope --> createMcpToolAssignmentRepository
  isServerAvailableForScope --> getById
  toSyntheticScope --> getMcpRuntimeNameAliasesFromRuntimeName
  toSyntheticScope --> createWorkspaceRepository
  toSyntheticScope --> createMcpToolAssignmentRepository
  toSyntheticScope --> getById
  isToolAssignedToProfile --> getMcpRuntimeNameAliasesFromRuntimeName
  isToolAssignedToProfile --> createWorkspaceRepository
  isToolAssignedToProfile --> createMcpToolAssignmentRepository
  isToolAssignedToProfile --> getById
  getConfirmationTargetRef --> createWorkspaceRepository
  getConfirmationTargetRef --> getById
  isWorkspaceScopedFilesServer --> prefixScopedPath
  isWorkspaceScopedFilesServer --> createWorkspaceRepository
  isWorkspaceScopedFilesServer --> getById
  resolveWorkspaceScopedMountRoot --> prefixScopedPath
  resolveWorkspaceScopedMountRoot --> createWorkspaceRepository
  resolveWorkspaceScopedMountRoot --> getById
  resolveScopedFilesystemRoot --> prefixScopedPath
  resolveScopedFilesystemRoot --> createWorkspaceRepository
  resolveScopedFilesystemRoot --> getById
  toScopedPrefix --> prefixScopedPath
  toScopedPrefix --> stripScopedPath
  toScopedPrefix --> stripScopedPathReferences
  toScopedPrefix --> rewriteWorkspaceScopedJson
  prefixScopedPath --> stripScopedPath
  prefixScopedPath --> stripScopedPathReferences
  prefixScopedPath --> rewriteWorkspaceScopedJson
  rewriteWorkspaceScopedArgs --> isWorkspaceScopedFilesServer
  rewriteWorkspaceScopedArgs --> resolveWorkspaceScopedMountRoot
  rewriteWorkspaceScopedArgs --> prefixScopedPath
  rewriteWorkspaceScopedArgs --> stripScopedPath
  rewriteWorkspaceScopedArgs --> stripScopedPathReferences
  rewriteWorkspaceScopedArgs --> rewriteWorkspaceScopedJson
  stripScopedPath --> isWorkspaceScopedFilesServer
  stripScopedPath --> resolveWorkspaceScopedMountRoot
  stripScopedPath --> resolveScopedFilesystemRoot
  stripScopedPath --> toScopedPrefix
  stripScopedPath --> stripScopedPathReferences
  stripScopedPath --> rewriteWorkspaceScopedJson
  stripScopedPathReferences --> isWorkspaceScopedFilesServer
  stripScopedPathReferences --> resolveWorkspaceScopedMountRoot
  stripScopedPathReferences --> resolveScopedFilesystemRoot
  stripScopedPathReferences --> toScopedPrefix
  stripScopedPathReferences --> stripScopedPath
  stripScopedPathReferences --> rewriteWorkspaceScopedJson
  rewriteWorkspaceScopedJson --> isWorkspaceScopedFilesServer
  rewriteWorkspaceScopedJson --> resolveWorkspaceScopedMountRoot
  rewriteWorkspaceScopedJson --> resolveScopedFilesystemRoot
  rewriteWorkspaceScopedJson --> toScopedPrefix
  rewriteWorkspaceScopedJson --> stripScopedPath
  rewriteWorkspaceScopedJson --> stripScopedPathReferences
  rewriteWorkspaceScopedOutput --> isWorkspaceScopedFilesServer
  rewriteWorkspaceScopedOutput --> resolveWorkspaceScopedMountRoot
  rewriteWorkspaceScopedOutput --> resolveScopedFilesystemRoot
  rewriteWorkspaceScopedOutput --> toScopedPrefix
  rewriteWorkspaceScopedOutput --> rewriteWorkspaceScopedJson
  rewriteWorkspaceScopedOutput --> toAuthorizationCodeServerConfig
  rewriteWorkspaceScopedOutput --> createMcpOauthCredentialRepository
  resolveWorkspaceScopedPrefix --> isServerAvailableForScope
  resolveWorkspaceScopedPrefix --> isWorkspaceScopedFilesServer
  resolveWorkspaceScopedPrefix --> resolveWorkspaceScopedMountRoot
  resolveWorkspaceScopedPrefix --> resolveScopedFilesystemRoot
  resolveWorkspaceScopedPrefix --> toScopedPrefix
  resolveWorkspaceScopedPrefix --> isAuthorizationCodeServer
  resolveWorkspaceScopedPrefix --> toAuthorizationCodeServerConfig
  resolveWorkspaceScopedPrefix --> createMcpOauthCredentialRepository
  normalizeMcpCallToolResult --> isRecord
  normalizeMcpCallToolResult --> extractErrorMessage
  normalizeMcpCallToolResult --> normalizeContentBlock
  extractErrorMessage --> isRecord
  extractErrorMessage --> normalizeContentBlock
  normalizeContentBlock --> isRecord
  normalizeContentBlock --> extractErrorMessage
  buildMcpRuntimeName --> parseMcpAppsToolMeta
  buildMcpRuntimeName --> isMcpToolModelVisible
  buildMcpRuntimeName --> toLegacyMcpRuntimeName
  buildMcpRuntimeName --> toCanonicalMcpRuntimeName
  buildMcpRuntimeName --> toRuntimePrefix
  buildMcpRuntimeName --> toRuntimeSuffix
  buildMcpRuntimeName --> cloneSchemaObject
  buildMcpRuntimeName --> createMcpToolFingerprint
  toLegacyMcpRuntimeName --> parseMcpAppsToolMeta
  toLegacyMcpRuntimeName --> isMcpToolModelVisible
  toLegacyMcpRuntimeName --> buildMcpRuntimeName
  toLegacyMcpRuntimeName --> toCanonicalMcpRuntimeName
  toLegacyMcpRuntimeName --> cloneSchemaObject
  toLegacyMcpRuntimeName --> createMcpToolFingerprint
  toCanonicalMcpRuntimeName --> parseMcpAppsToolMeta
  toCanonicalMcpRuntimeName --> isMcpToolModelVisible
  toCanonicalMcpRuntimeName --> buildMcpRuntimeName
  toCanonicalMcpRuntimeName --> toLegacyMcpRuntimeName
  toCanonicalMcpRuntimeName --> cloneSchemaObject
  toCanonicalMcpRuntimeName --> createMcpToolFingerprint
  getMcpRuntimeNameAliasesFromRuntimeName --> parseMcpAppsToolMeta
  getMcpRuntimeNameAliasesFromRuntimeName --> isMcpToolModelVisible
  getMcpRuntimeNameAliasesFromRuntimeName --> buildMcpRuntimeName
  getMcpRuntimeNameAliasesFromRuntimeName --> toLegacyMcpRuntimeName
  getMcpRuntimeNameAliasesFromRuntimeName --> toCanonicalMcpRuntimeName
  getMcpRuntimeNameAliasesFromRuntimeName --> cloneSchemaObject
  getMcpRuntimeNameAliasesFromRuntimeName --> createMcpToolFingerprint
  normalizeMcpTool --> parseMcpAppsToolMeta
  normalizeMcpTool --> isMcpToolModelVisible
  normalizeMcpTool --> buildMcpRuntimeName
  normalizeMcpTool --> cloneSchemaObject
  normalizeMcpTool --> createMcpToolFingerprint
  slugify --> parseMcpAppsToolMeta
  slugify --> isMcpToolModelVisible
  slugify --> buildMcpRuntimeName
  slugify --> toLegacyMcpRuntimeName
  slugify --> toCanonicalMcpRuntimeName
  slugify --> toRuntimePrefix
  slugify --> toRuntimeSuffix
  slugify --> cloneSchemaObject
  slugify --> createMcpToolFingerprint
  toRuntimePrefix --> parseMcpAppsToolMeta
  toRuntimePrefix --> isMcpToolModelVisible
  toRuntimePrefix --> buildMcpRuntimeName
  toRuntimePrefix --> toLegacyMcpRuntimeName
  toRuntimePrefix --> toCanonicalMcpRuntimeName
  toRuntimePrefix --> slugify
  toRuntimePrefix --> toRuntimeSuffix
  toRuntimePrefix --> cloneSchemaObject
  toRuntimePrefix --> createMcpToolFingerprint
  toRuntimeSuffix --> parseMcpAppsToolMeta
  toRuntimeSuffix --> isMcpToolModelVisible
  toRuntimeSuffix --> buildMcpRuntimeName
  toRuntimeSuffix --> toLegacyMcpRuntimeName
  toRuntimeSuffix --> toCanonicalMcpRuntimeName
  toRuntimeSuffix --> slugify
  toRuntimeSuffix --> toRuntimePrefix
  toRuntimeSuffix --> cloneSchemaObject
  toRuntimeSuffix --> createMcpToolFingerprint
  cloneSchemaObject --> parseMcpAppsToolMeta
  cloneSchemaObject --> isMcpToolModelVisible
  cloneSchemaObject --> buildMcpRuntimeName
  cloneSchemaObject --> createMcpToolFingerprint
  isAuthorizationCodeServer --> toAuthorizationCodeAuthConfig
  canStartAuthorizationCodeOAuth --> toAuthorizationCodeAuthConfig
  toAuthorizationCodeServerConfig --> toAuthorizationCodeAuthConfig
  beginStoredMcpAuthorization --> createStoredMcpOAuthProvider
  completeStoredMcpAuthorization --> createStoredMcpOAuthProvider
  buildClientMetadata --> protectStoredOauthTokens
  buildClientMetadata --> protectStoredOauthClientInformation
  buildClientMetadata --> cloneStoredOauthDiscoveryState
  buildClientMetadata --> createMcpOauthAuthorizationRepository
  buildClientMetadata --> createMcpOauthCredentialRepository
  buildClientMetadata --> getById
  toStaticClientInformation --> buildClientMetadata
  toStaticClientInformation --> protectStoredOauthTokens
  toStaticClientInformation --> protectStoredOauthClientInformation
  toStaticClientInformation --> cloneStoredOauthDiscoveryState
  toStaticClientInformation --> createMcpOauthAuthorizationRepository
  toStaticClientInformation --> createMcpOauthCredentialRepository
  toStaticClientInformation --> getById
  encryptStoredSecret --> isEncryptedSecret
  encryptStoredSecret --> createSecretBox
  decryptStoredSecret --> encryptStoredSecret
  decryptStoredSecret --> isEncryptedSecret
  decryptStoredSecret --> createSecretBox
  protectStoredHttpAuthConfig --> encryptStoredSecret
  protectStoredHttpAuthConfig --> decryptStoredSecret
  revealStoredHttpAuthConfig --> decryptStoredSecret
  protectStoredOauthTokens --> encryptStoredSecret
  protectStoredOauthTokens --> decryptStoredSecret
  revealStoredOauthTokens --> encryptStoredSecret
  revealStoredOauthTokens --> decryptStoredSecret
  protectStoredOauthClientInformation --> encryptStoredSecret
  protectStoredOauthClientInformation --> decryptStoredSecret
  revealStoredOauthClientInformation --> decryptStoredSecret
  createMcpToolFingerprint --> canonicalize
  createLangfuseExporter --> isTerminalRootRunEvent
  createLangfuseExporter --> normalizeBaseUrl
  createLangfuseExporter --> collectObservationKeys
  createLangfuseExporter --> loadTraceSnapshot
  createLangfuseExporter --> exportRunObservation
  isTerminalRootRunEvent --> isRecord
  isTerminalRootRunEvent --> asString
  isTerminalRootRunEvent --> truncateText
  isTerminalRootRunEvent --> normalizeTagValue
  normalizeBaseUrl --> isRecord
  normalizeBaseUrl --> asString
  normalizeBaseUrl --> truncateText
  normalizeBaseUrl --> normalizeTagValue
  asString --> isRecord
  asString --> truncateText
  asString --> normalizeTagValue
  asString --> toPayloadIdentity
  asString --> createEventOutboxRepository
  asString --> findTerminalRootRunId
  asString --> collectLatestTerminalRootRunEvents
  asString --> createDomainEventRepository
  asString --> createRunRepository
  asString --> getById
  asNumber --> isRecord
  asNumber --> asString
  asNumber --> truncateText
  asNumber --> normalizeTagValue
  toDisplayNameFromAlias --> isRecord
  toDisplayNameFromAlias --> asString
  toDisplayNameFromAlias --> truncateText
  toDisplayNameFromAlias --> normalizeTagValue
  toEventPayload --> isRecord
  toEventPayload --> asString
  toEventPayload --> truncateText
  toEventPayload --> normalizeTagValue
  toRunInput --> isRecord
  toRunInput --> asString
  toRunInput --> truncateText
  toRunInput --> normalizeTagValue
  toErrorOutput --> isRecord
  toErrorOutput --> asString
  toErrorOutput --> truncateText
  toErrorOutput --> normalizeTagValue
  toErrorMessage --> isRecord
  toErrorMessage --> asString
  toErrorMessage --> truncateText
  toErrorMessage --> normalizeTagValue
  truncateText --> isRecord
  truncateText --> asString
  truncateText --> normalizeTagValue
  truncateText --> tryParseJson
  normalizeTagValue --> isRecord
  normalizeTagValue --> asString
  normalizeTagValue --> truncateText
  normalizeTagValue --> tryParseJson
  toTag --> isRecord
  toTag --> asString
  toTag --> truncateText
  toTag --> normalizeTagValue
  toTag --> tryParseJson
  tryParseJson --> isRecord
  tryParseJson --> asString
  toStructuredContentPart --> isRecord
  toStructuredContentPart --> asString
  toStructuredContentPart --> tryParseJson
  toStructuredMessages --> isRecord
  toStructuredMessages --> asString
  toStructuredMessages --> toStructuredContentPart
  toStructuredGenerationTools --> isRecord
  toStructuredGenerationTools --> asString
  toStructuredGenerationTools --> toStructuredContentPart
  toStructuredNativeTools --> isRecord
  toStructuredNativeTools --> asString
  toStructuredNativeTools --> toStructuredContentPart
  toStructuredGenerationOutputItems --> isRecord
  toStructuredGenerationOutputItems --> asString
  toStructuredGenerationOutputItems --> toStructuredContentPart
  hasNonMessageOutputItem --> isRecord
  hasNonMessageOutputItem --> asString
  hasNonMessageOutputItem --> asNumber
  hasNonMessageOutputItem --> normalizeUsageKey
  toStructuredGenerationToolCalls --> isRecord
  toStructuredGenerationToolCalls --> asString
  toStructuredGenerationToolCalls --> asNumber
  toStructuredGenerationToolCalls --> normalizeUsageKey
  toNumericRecord --> isRecord
  toNumericRecord --> asString
  toNumericRecord --> asNumber
  toNumericRecord --> toEventPayload
  toNumericRecord --> normalizeUsageKey
  normalizeUsageKey --> isRecord
  normalizeUsageKey --> asString
  normalizeUsageKey --> asNumber
  normalizeUsageKey --> toEventPayload
  findUsageValue --> isRecord
  findUsageValue --> asString
  findUsageValue --> asNumber
  findUsageValue --> toEventPayload
  findUsageValue --> toStructuredMessages
  findUsageValue --> toStructuredGenerationTools
  findUsageValue --> toStructuredNativeTools
  findUsageValue --> normalizeUsageKey
  collectUsageDetails --> isRecord
  collectUsageDetails --> asString
  collectUsageDetails --> asNumber
  collectUsageDetails --> toEventPayload
  collectUsageDetails --> toStructuredMessages
  collectUsageDetails --> toStructuredGenerationTools
  collectUsageDetails --> toStructuredNativeTools
  collectUsageDetails --> normalizeUsageKey
  toCanonicalUsageKey --> isRecord
  toCanonicalUsageKey --> asString
  toCanonicalUsageKey --> asNumber
  toCanonicalUsageKey --> toEventPayload
  toCanonicalUsageKey --> toStructuredMessages
  toCanonicalUsageKey --> toStructuredGenerationTools
  toCanonicalUsageKey --> toStructuredNativeTools
  toCanonicalUsageKey --> normalizeUsageKey
  toRunOutput --> isRecord
  toRunOutput --> asString
  toRunOutput --> asNumber
  toRunOutput --> toEventPayload
  toRunOutput --> toStructuredMessages
  toRunOutput --> toStructuredGenerationTools
  toRunOutput --> toStructuredNativeTools
  toGenerationInput --> isRecord
  toGenerationInput --> asString
  toGenerationInput --> asNumber
  toGenerationInput --> toStructuredMessages
  toGenerationInput --> toStructuredGenerationTools
  toGenerationInput --> toStructuredNativeTools
  toGenerationInput --> toStructuredGenerationOutputItems
  toGenerationInput --> hasNonMessageOutputItem
  toGenerationInput --> toStructuredGenerationToolCalls
  toGenerationModelParameters --> isRecord
  toGenerationModelParameters --> asString
  toGenerationModelParameters --> asNumber
  toGenerationModelParameters --> toErrorOutput
  toGenerationModelParameters --> toStructuredMessages
  toGenerationModelParameters --> toStructuredGenerationOutputItems
  toGenerationModelParameters --> hasNonMessageOutputItem
  toGenerationModelParameters --> toStructuredGenerationToolCalls
  toGenerationModelParameters --> findUsageValue
  toGenerationModelParameters --> collectUsageDetails
  toGenerationModelParameters --> toCanonicalUsageKey
  toGenerationModelParameters --> createEventStore
  toGenerationModelParameters --> createRunEventPayload
  toGenerationModelParameters --> tryAppendRunTelemetryEvent
  toGenerationModelParameters --> warnTelemetryDrop
  toGenerationOutput --> isRecord
  toGenerationOutput --> asString
  toGenerationOutput --> asNumber
  toGenerationOutput --> toErrorOutput
  toGenerationOutput --> toStructuredMessages
  toGenerationOutput --> toStructuredGenerationOutputItems
  toGenerationOutput --> hasNonMessageOutputItem
  toGenerationOutput --> toStructuredGenerationToolCalls
  toGenerationOutput --> findUsageValue
  toGenerationOutput --> collectUsageDetails
  toGenerationOutput --> toCanonicalUsageKey
  toGenerationUsageDetails --> isRecord
  toGenerationUsageDetails --> asNumber
  toGenerationUsageDetails --> toNumericRecord
  toGenerationUsageDetails --> findUsageValue
  toGenerationUsageDetails --> collectUsageDetails
  toGenerationUsageDetails --> toCanonicalUsageKey
  toGenerationUsageDetails --> toTraceId
  toGenerationUsageDetails --> createRandomHex
  toGenerationUsageDetails --> toLangfuseObservationId
  toGenerationUsageDetails --> toLangfuseTraceId
  toObservationId --> asString
  toObservationId --> asNumber
  toObservationId --> toDisplayNameFromAlias
  toObservationId --> toTraceId
  toObservationId --> createRandomHex
  toObservationId --> toLangfuseObservationId
  toObservationId --> toLangfuseTraceId
  toTraceId --> asString
  toTraceId --> asNumber
  toTraceId --> toDisplayNameFromAlias
  toTraceId --> createRandomHex
  toTraceId --> toLangfuseTraceId
  toScoreId --> asString
  toScoreId --> asNumber
  toScoreId --> toDisplayNameFromAlias
  toScoreId --> toTraceId
  toScoreId --> createRandomHex
  toScoreId --> toRunObservationName
  createRandomHex --> asString
  createRandomHex --> asNumber
  createRandomHex --> toDisplayNameFromAlias
  createRandomHex --> toTraceId
  createRandomHex --> toRunObservationName
  collectObservationKeys --> asString
  collectObservationKeys --> asNumber
  collectObservationKeys --> toDisplayNameFromAlias
  collectObservationKeys --> toObservationId
  collectObservationKeys --> toTraceId
  collectObservationKeys --> toRunObservationName
  collectToolObservationKeys --> asString
  collectToolObservationKeys --> asNumber
  collectToolObservationKeys --> toDisplayNameFromAlias
  collectToolObservationKeys --> toObservationId
  collectToolObservationKeys --> toTraceId
  collectToolObservationKeys --> toRunObservationName
  toRunScope --> isRecord
  toRunScope --> asString
  toRunScope --> asNumber
  toRunScope --> toDisplayNameFromAlias
  toRunScope --> toObservationId
  toRunScope --> toTraceId
  toRunScope --> toRunObservationName
  findRunLifecycleEvent --> isRecord
  findRunLifecycleEvent --> asString
  findRunLifecycleEvent --> asNumber
  findRunLifecycleEvent --> toDisplayNameFromAlias
  findRunLifecycleEvent --> toObservationId
  findRunLifecycleEvent --> toTraceId
  findRunLifecycleEvent --> toRunObservationName
  findTurn --> isRecord
  findTurn --> asString
  findTurn --> asNumber
  findTurn --> toDisplayNameFromAlias
  findTurn --> toObservationId
  findTurn --> toTraceId
  findTurn --> toRunObservationName
  toRunObservationName --> isRecord
  toRunObservationName --> asString
  toRunObservationName --> asNumber
  toRunObservationName --> toDisplayNameFromAlias
  toRunObservationName --> toObservationId
  toRunObservationName --> toTraceId
  toAgentMetadata --> isRecord
  toAgentMetadata --> asString
  toAgentMetadata --> asNumber
  toAgentMetadata --> toObservationId
  toAgentMetadata --> toTraceId
  toAgentMetadata --> toRunObservationName
  toRunIdsMetadata --> isRecord
  toRunIdsMetadata --> asString
  toRunIdsMetadata --> asNumber
  toRunIdsMetadata --> toObservationId
  toRunIdsMetadata --> toTraceId
  toRuntimeMetadata --> isRecord
  toRuntimeMetadata --> asString
  toRuntimeMetadata --> asNumber
  collectChildRunMetadata --> toObservationId
  toGenerationToolSummaryMetadata --> toObservationId
  toGenerationToolSummaryMetadata --> collectChildRunMetadata
  toRunMetadata --> asString
  toRunMetadata --> asNumber
  toRunMetadata --> toAgentMetadata
  toRunMetadata --> toRunIdsMetadata
  toRunMetadata --> toRuntimeMetadata
  toGenerationMetadata --> asString
  toGenerationMetadata --> asNumber
  toGenerationMetadata --> toObservationId
  toGenerationMetadata --> toAgentMetadata
  toGenerationMetadata --> toRunIdsMetadata
  toGenerationMetadata --> toRuntimeMetadata
  toGenerationMetadata --> collectChildRunMetadata
  toGenerationMetadata --> toGenerationToolSummaryMetadata
  toToolMetadata --> isRecord
  toToolMetadata --> asString
  toToolMetadata --> toObservationId
  toToolMetadata --> findTurn
  toToolMetadata --> collectChildRunMetadata
  toWebSearchMetadata --> isRecord
  toWebSearchMetadata --> asString
  toWebSearchMetadata --> truncateText
  toWebSearchMetadata --> findTurn
  toRootTraceMetadata --> isRecord
  toRootTraceMetadata --> asString
  toRootTraceMetadata --> truncateText
  toRootTraceMetadata --> toTag
  toRootTraceName --> asString
  toRootTraceName --> toEventPayload
  toRootTraceName --> truncateText
  toRootTraceName --> toTag
  toRootTraceTags --> asString
  toRootTraceTags --> toEventPayload
  toRootTraceTags --> toTag
  toToolWaitingOutput --> asString
  toToolWaitingOutput --> toEventPayload
  toToolWaitingOutput --> buildRunTree
  toRunWaitingStatusMessage --> asString
  toRunWaitingStatusMessage --> toEventPayload
  toRunWaitingStatusMessage --> buildRunTree
  toRelevantRunEvents --> asString
  toRelevantRunEvents --> toEventPayload
  toRelevantRunEvents --> findTurn
  toRelevantRunEvents --> buildRunTree
  pickLatestEvent --> asString
  pickLatestEvent --> toEventPayload
  pickLatestEvent --> findTurn
  pickLatestEvent --> buildRunTree
  buildRunTree --> asString
  buildRunTree --> toEventPayload
  buildRunTree --> findTurn
  buildToolSnapshots --> asString
  buildToolSnapshots --> toEventPayload
  buildToolSnapshots --> findTurn
  buildWebSearchSnapshots --> asString
  buildWebSearchSnapshots --> toEventPayload
  buildWebSearchSnapshots --> findTurn
  buildWebSearchSnapshots --> toWebSearchMetadata
  mergeToolSnapshotsByTurn --> asString
  mergeToolSnapshotsByTurn --> toEventPayload
  mergeToolSnapshotsByTurn --> findTurn
  mergeToolSnapshotsByTurn --> pickLatestEvent
  buildGenerationSnapshots --> asString
  buildGenerationSnapshots --> toEventPayload
  buildGenerationSnapshots --> toGenerationInput
  buildGenerationSnapshots --> findTurn
  buildGenerationSnapshots --> toGenerationMetadata
  buildGenerationSnapshots --> pickLatestEvent
  buildRunSnapshot --> toEventPayload
  buildRunSnapshot --> toRunInput
  buildRunSnapshot --> toErrorMessage
  buildRunSnapshot --> toRunOutput
  buildRunSnapshot --> findRunLifecycleEvent
  buildRunSnapshot --> toRunObservationName
  buildRunSnapshot --> toRunMetadata
  buildRunSnapshot --> toRunWaitingStatusMessage
  buildRunSnapshot --> toRelevantRunEvents
  buildRunSnapshot --> pickLatestEvent
  buildRunSnapshot --> buildToolSnapshots
  buildRunSnapshot --> buildWebSearchSnapshots
  buildRunSnapshot --> mergeToolSnapshotsByTurn
  buildRunSnapshot --> buildGenerationSnapshots
  loadTraceSnapshot --> asString
  loadTraceSnapshot --> toEventPayload
  loadTraceSnapshot --> toRunScope
  loadTraceSnapshot --> findRunLifecycleEvent
  loadTraceSnapshot --> toRootTraceMetadata
  loadTraceSnapshot --> toRootTraceName
  loadTraceSnapshot --> toRelevantRunEvents
  loadTraceSnapshot --> pickLatestEvent
  loadTraceSnapshot --> buildRunTree
  loadTraceSnapshot --> buildRunSnapshot
  loadTraceSnapshot --> createDomainEventRepository
  loadTraceSnapshot --> createRunRepository
  loadTraceSnapshot --> getById
  endObservation --> isRetryableLangfuseStatusCode
  toLangfuseProviderError --> isRetryableLangfuseStatusCode
  exportRunObservation --> exportToolObservation
  exportToolObservation --> toObservationId
  exportToolObservation --> toTraceId
  exportToolObservation --> toScoreId
  exportToolObservation --> endObservation
  exportToolObservation --> exportRunObservation
  appendScores --> toObservationId
  appendScores --> toTraceId
  appendScores --> toScoreId
  appendScores --> toLangfuseProviderError
  loadConfig --> parseCsv
  loadConfig --> parseInteger
  loadConfig --> parseBoolean
  loadConfig --> parseNonNegativeInteger
  loadConfig --> parseOptionalString
  loadConfig --> parseUnitInterval
  loadConfig --> parseBasePath
  loadConfig --> parseAuthMethods
  parseInteger --> deriveAuthMethodsFromMode
  parseBoolean --> deriveAuthMethodsFromMode
  parseNonNegativeInteger --> deriveAuthMethodsFromMode
  parseOptionalString --> deriveAuthMethodsFromMode
  parseUnitInterval --> deriveAuthMethodsFromMode
  parseBasePath --> deriveAuthMethodsFromMode
  deriveAuthMethodsFromMode --> parseOptionalString
  parseAuthMethods --> parseOptionalString
  parseAuthMethods --> deriveAuthMethodsFromMode
  resolveMcpServers --> parseOptionalString
  createApp --> errorEnvelope
  createApp --> apiKeyAuthMiddleware
  createApp --> authSessionAuthMiddleware
  createApp --> createRootRoutes
  createApp --> createApiRoutes
  createApp --> resolveCorsOrigin
  createApp --> accessLogMiddleware
  createApp --> apiResponseMiddleware
  createApp --> requestSizeGuardMiddleware
  createApp --> runtimeContextMiddleware
  createApp --> isDomainErrorException
  createApp --> toHttpStatus
  resolveCorsOrigin --> errorEnvelope
  resolveCorsOrigin --> apiKeyAuthMiddleware
  resolveCorsOrigin --> authSessionAuthMiddleware
  resolveCorsOrigin --> createRootRoutes
  resolveCorsOrigin --> createApiRoutes
  resolveCorsOrigin --> accessLogMiddleware
  resolveCorsOrigin --> apiResponseMiddleware
  resolveCorsOrigin --> requestSizeGuardMiddleware
  resolveCorsOrigin --> runtimeContextMiddleware
  resolveCorsOrigin --> isDomainErrorException
  resolveCorsOrigin --> toHttpStatus
  loadEnvFileIntoProcess --> normalizeValue
  accessLogMiddleware --> resolveEventLevel
  createRequestId --> createTraceId
  createTraceId --> createRequestId
  requestSizeGuardMiddleware --> errorEnvelope
  resolveRuntimeMcpServers --> createGoogleProvider
  resolveRuntimeMcpServers --> createOpenAiProvider
  resolveRuntimeMcpServers --> createLocalBlobStore
  resolveRuntimeMcpServers --> createMcpGateway
  resolveRuntimeMcpServers --> createLangfuseExporter
  resolveRuntimeMcpServers --> registerAgentNativeTools
  resolveRuntimeMcpServers --> createRealtimeEventRelay
  resolveRuntimeMcpServers --> createAiInteractionService
  resolveRuntimeMcpServers --> createActiveRunRegistry
  resolveRuntimeMcpServers --> createDatabaseClient
  resolveRuntimeMcpServers --> createToolRegistry
  resolveRuntimeMcpServers --> createLogger
  resolveRuntimeMcpServers --> createSystemClock
  createAppRuntime --> createGoogleProvider
  createAppRuntime --> createOpenAiProvider
  createAppRuntime --> createLocalBlobStore
  createAppRuntime --> createMcpGateway
  createAppRuntime --> createLangfuseExporter
  createAppRuntime --> resolveRuntimeMcpServers
  createAppRuntime --> registerAgentNativeTools
  createAppRuntime --> createRealtimeEventRelay
  createAppRuntime --> createAiInteractionService
  createAppRuntime --> createActiveRunRegistry
  createAppRuntime --> createDatabaseClient
  createAppRuntime --> createToolRegistry
  createAppRuntime --> createLogger
  createAppRuntime --> createSystemClock
  initializeAppRuntime --> shutdown
  closeAppRuntime --> shutdown
  hasTenantResourceOverride --> canAccessSessionOwnerResource
  hasTenantResourceOverride --> isRecoverableLinkLookupError
  hasTenantResourceOverride --> createFileRepository
  hasTenantResourceOverride --> createRunRepository
  hasTenantResourceOverride --> createToolExecutionRepository
  hasTenantResourceOverride --> createSessionMessageRepository
  hasTenantResourceOverride --> getById
  hasTenantResourceOverride --> createSessionThreadRepository
  hasTenantResourceOverride --> createWorkSessionRepository
  createResourceAccessService --> canAccessSessionOwnerResource
  createResourceAccessService --> isRecoverableLinkLookupError
  createResourceAccessService --> createFileRepository
  createResourceAccessService --> createRunRepository
  createResourceAccessService --> createToolExecutionRepository
  createResourceAccessService --> createSessionMessageRepository
  createResourceAccessService --> getById
  createResourceAccessService --> createSessionThreadRepository
  createResourceAccessService --> createWorkSessionRepository
  canAccessSessionOwnerResource --> createFileRepository
  canAccessSessionOwnerResource --> createRunRepository
  canAccessSessionOwnerResource --> createToolExecutionRepository
  canAccessSessionOwnerResource --> createSessionMessageRepository
  canAccessSessionOwnerResource --> getById
  canAccessSessionOwnerResource --> createSessionThreadRepository
  canAccessSessionOwnerResource --> createWorkSessionRepository
  isRecoverableLinkLookupError --> canAccessSessionOwnerResource
  isRecoverableLinkLookupError --> createFileRepository
  isRecoverableLinkLookupError --> createRunRepository
  isRecoverableLinkLookupError --> createToolExecutionRepository
  isRecoverableLinkLookupError --> createSessionMessageRepository
  isRecoverableLinkLookupError --> getById
  isRecoverableLinkLookupError --> createSessionThreadRepository
  isRecoverableLinkLookupError --> createWorkSessionRepository
  getAgentDescription --> getMcpRuntimeNameAliasesFromRuntimeName
  getAgentDescription --> normalizeText
  getAgentDescription --> toOptionalText
  getAgentDescription --> getNativeToolNames
  getAgentDescription --> parseStoredAgentFrontmatter
  getAgentDescription --> getGrantedToolProfileId
  getAgentDescription --> createMcpToolAssignmentRepository
  getAgentDescription --> createMcpToolCacheRepository
  listAgentCapabilities --> getMcpRuntimeNameAliasesFromRuntimeName
  listAgentCapabilities --> normalizeText
  listAgentCapabilities --> toOptionalText
  listAgentCapabilities --> getNativeToolNames
  listAgentCapabilities --> getGrantedToolProfileId
  listAgentCapabilities --> createMcpToolAssignmentRepository
  listAgentCapabilities --> createMcpToolCacheRepository
  normalizeText --> getMcpRuntimeNameAliasesFromRuntimeName
  normalizeText --> getNativeToolNames
  normalizeText --> parseStoredAgentFrontmatter
  normalizeText --> getGrantedToolProfileId
  normalizeText --> createMcpToolAssignmentRepository
  normalizeText --> createMcpToolCacheRepository
  normalizeText --> normalizeAssistantMessageContent
  toOptionalText --> getMcpRuntimeNameAliasesFromRuntimeName
  toOptionalText --> normalizeText
  toOptionalText --> getNativeToolNames
  toOptionalText --> parseStoredAgentFrontmatter
  toOptionalText --> getGrantedToolProfileId
  toOptionalText --> createMcpToolAssignmentRepository
  toOptionalText --> createMcpToolCacheRepository
  getNativeToolNames --> getMcpRuntimeNameAliasesFromRuntimeName
  getNativeToolNames --> normalizeText
  getNativeToolNames --> parseStoredAgentFrontmatter
  getNativeToolNames --> getGrantedToolProfileId
  getNativeToolNames --> createMcpToolAssignmentRepository
  getNativeToolNames --> createMcpToolCacheRepository
  parseCreateAgentInput --> canWriteAgents
  parseCreateAgentInput --> toMarkdownTools
  parseUpdateAgentInput --> canWriteAgents
  parseUpdateAgentInput --> toMarkdownTools
  parseMarkdownUpdateInput --> canWriteAgents
  parseMarkdownUpdateInput --> toMarkdownTools
  createAgentManagementService --> canReadAgent
  createAgentManagementService --> getAgentDescription
  createAgentManagementService --> createAgentSyncService
  createAgentManagementService --> requireMembership
  createAgentManagementService --> createAgentRepository
  createAgentManagementService --> createAgentRevisionRepository
  createAgentManagementService --> createAgentSubagentLinkRepository
  createAgentManagementService --> createAccountPreferencesRepository
  createAgentManagementService --> getById
  createAgentManagementService --> createTenantMembershipRepository
  formatZodError --> canWriteAgents
  formatZodError --> toView
  formatZodError --> canReadToolProfile
  formatZodError --> requireMembership
  formatZodError --> createAccountPreferencesRepository
  formatZodError --> getById
  formatZodError --> createTenantMembershipRepository
  formatZodError --> createToolProfileRepository
  formatZodError --> canWriteToolProfiles
  formatZodError --> toToolProfileSummary
  requireWritableScope --> canWriteAgents
  requireWritableScope --> toMarkdownTools
  toStructuredMarkdownDocument --> toMarkdownTools
  toMergedStructuredUpdateDocument --> canReadAgent
  toMergedStructuredUpdateDocument --> toMarkdownTools
  toMergedStructuredUpdateDocument --> createAgentSyncService
  toMergedStructuredUpdateDocument --> requireMembership
  toMergedStructuredUpdateDocument --> createAgentRepository
  toMergedStructuredUpdateDocument --> getById
  toMergedStructuredUpdateDocument --> createTenantMembershipRepository
  summarizeAgent --> canReadAgent
  summarizeAgent --> createAgentSyncService
  summarizeAgent --> requireMembership
  summarizeAgent --> createAgentRepository
  summarizeAgent --> createAgentRevisionRepository
  summarizeAgent --> createAgentSubagentLinkRepository
  summarizeAgent --> createAccountPreferencesRepository
  summarizeAgent --> getById
  summarizeAgent --> createTenantMembershipRepository
  matchesAgentListOptions --> canReadAgent
  matchesAgentListOptions --> getAgentDescription
  matchesAgentListOptions --> createAgentSyncService
  matchesAgentListOptions --> requireMembership
  matchesAgentListOptions --> createAgentRepository
  matchesAgentListOptions --> createAgentRevisionRepository
  matchesAgentListOptions --> createAgentSubagentLinkRepository
  matchesAgentListOptions --> createAccountPreferencesRepository
  matchesAgentListOptions --> getById
  matchesAgentListOptions --> createTenantMembershipRepository
  toAgentMarkdownFrontmatterJson --> formatZodError
  toAgentMarkdownFrontmatterJson --> toValidationError
  toAgentMarkdownFrontmatterJson --> normalizeNewlines
  toAgentMarkdownFrontmatterJson --> toTypedFrontmatter
  parseAgentMarkdown --> toAgentMarkdownFrontmatterJson
  parseAgentMarkdown --> toValidationError
  parseAgentMarkdown --> normalizeNewlines
  parseAgentMarkdown --> normalizeInstructionsMd
  parseAgentMarkdown --> parseFrontmatterJson
  parseStoredAgentFrontmatter --> toAgentMarkdownFrontmatterJson
  parseStoredAgentFrontmatter --> normalizeNewlines
  parseStoredAgentFrontmatter --> normalizeInstructionsMd
  parseStoredAgentFrontmatter --> parseFrontmatterJson
  serializeAgentMarkdown --> toAgentMarkdownFrontmatterJson
  serializeAgentMarkdown --> normalizeNewlines
  serializeAgentMarkdown --> normalizeInstructionsMd
  toValidationError --> normalizeNewlines
  toValidationError --> buildModelConfigJson
  toValidationError --> buildToolPolicyJson
  toValidationError --> buildMemoryPolicyJson
  toValidationError --> buildWorkspacePolicyJson
  normalizeInstructionsMd --> normalizeNewlines
  parseFrontmatterJson --> formatZodError
  parseFrontmatterJson --> toAgentMarkdownFrontmatterJson
  parseFrontmatterJson --> toValidationError
  parseFrontmatterJson --> normalizeNewlines
  parseFrontmatterJson --> normalizeInstructionsMd
  parseFrontmatterJson --> toTypedFrontmatter
  getGrantedToolProfileId --> hasNativeToolGrant
  getGrantedToolProfileId --> isModelProvider
  getGrantedToolProfileId --> isPlainObject
  getGrantedToolProfileId --> getOptionalString
  getGrantedToolProfileId --> getToolPolicy
  getGrantedToolProfileId --> createAgentRevisionRepository
  getGrantedToolProfileId --> getById
  resolveRuntimeSettingsFromAgentRevision --> getGrantedToolProfileId
  resolveRuntimeSettingsFromAgentRevision --> hasNativeToolGrant
  resolveRuntimeSettingsFromAgentRevision --> isModelProvider
  resolveRuntimeSettingsFromAgentRevision --> isPlainObject
  resolveRuntimeSettingsFromAgentRevision --> getOptionalString
  resolveRuntimeSettingsFromAgentRevision --> getToolPolicy
  resolveRuntimeSettingsFromAgentRevision --> createAgentRevisionRepository
  resolveRuntimeSettingsFromAgentRevision --> getById
  hasNativeToolGrant --> getGrantedToolProfileId
  hasNativeToolGrant --> getToolPolicy
  hasNativeToolGrant --> createAgentRevisionRepository
  hasNativeToolGrant --> getById
  getGrantedMcpProfile --> getGrantedToolProfileId
  getGrantedMcpProfile --> hasNativeToolGrant
  getGrantedMcpProfile --> createAgentRevisionRepository
  getGrantedMcpProfile --> getById
  isNativeToolAllowedForRun --> getGrantedToolProfileId
  isNativeToolAllowedForRun --> hasNativeToolGrant
  isNativeToolAllowedForRun --> createAgentRevisionRepository
  isNativeToolAllowedForRun --> getById
  isToolAllowedForRun --> getGrantedToolProfileId
  isToolAllowedForRun --> hasNativeToolGrant
  isToolAllowedForRun --> createAgentRevisionRepository
  isToolAllowedForRun --> getById
  isModelProvider --> getGrantedToolProfileId
  isModelProvider --> hasNativeToolGrant
  isModelProvider --> isPlainObject
  isModelProvider --> getOptionalString
  isModelProvider --> getToolPolicy
  isModelProvider --> createAgentRevisionRepository
  isModelProvider --> getById
  isPlainObject --> getGrantedToolProfileId
  isPlainObject --> hasNativeToolGrant
  isPlainObject --> isModelProvider
  isPlainObject --> getOptionalString
  isPlainObject --> getToolPolicy
  isPlainObject --> createAgentRevisionRepository
  isPlainObject --> getById
  getOptionalString --> getGrantedToolProfileId
  getOptionalString --> hasNativeToolGrant
  getOptionalString --> isModelProvider
  getOptionalString --> isPlainObject
  getOptionalString --> getToolPolicy
  getOptionalString --> createAgentRevisionRepository
  getOptionalString --> getById
  getToolPolicy --> getGrantedToolProfileId
  getToolPolicy --> hasNativeToolGrant
  getToolPolicy --> isModelProvider
  getToolPolicy --> isPlainObject
  getToolPolicy --> getOptionalString
  getToolPolicy --> createAgentRevisionRepository
  getToolPolicy --> getById
  createAgentSyncService --> parseAgentMarkdown
  createAgentSyncService --> serializeAgentMarkdown
  createAgentSyncService --> toConflictError
  createAgentSyncService --> toExportDocument
  createAgentSyncService --> createEventStore
  createAgentSyncService --> createAgentRepository
  createAgentSyncService --> createAgentRevisionRepository
  createAgentSyncService --> createAgentSubagentLinkRepository
  createAgentSyncService --> getById
  buildChecksumSha256 --> buildModelConfigJson
  buildChecksumSha256 --> buildToolPolicyJson
  buildChecksumSha256 --> buildMemoryPolicyJson
  buildChecksumSha256 --> buildWorkspacePolicyJson
  toConflictError --> buildModelConfigJson
  toConflictError --> buildToolPolicyJson
  toConflictError --> buildMemoryPolicyJson
  toConflictError --> buildWorkspacePolicyJson
  toConflictError --> toChildRunReplayOutput
  buildModelConfigJson --> buildToolPolicyJson
  buildModelConfigJson --> buildMemoryPolicyJson
  buildModelConfigJson --> buildWorkspacePolicyJson
  buildToolPolicyJson --> toValidationError
  buildToolPolicyJson --> buildModelConfigJson
  buildToolPolicyJson --> buildMemoryPolicyJson
  buildToolPolicyJson --> buildWorkspacePolicyJson
  buildMemoryPolicyJson --> toValidationError
  buildMemoryPolicyJson --> buildModelConfigJson
  buildMemoryPolicyJson --> buildToolPolicyJson
  buildMemoryPolicyJson --> buildWorkspacePolicyJson
  buildWorkspacePolicyJson --> parseStoredAgentFrontmatter
  buildWorkspacePolicyJson --> toValidationError
  buildWorkspacePolicyJson --> buildModelConfigJson
  buildWorkspacePolicyJson --> buildToolPolicyJson
  buildWorkspacePolicyJson --> buildMemoryPolicyJson
  buildResolvedConfigJson --> parseStoredAgentFrontmatter
  buildResolvedConfigJson --> toValidationError
  buildResolvedConfigJson --> buildModelConfigJson
  buildResolvedConfigJson --> buildToolPolicyJson
  buildResolvedConfigJson --> buildMemoryPolicyJson
  buildResolvedConfigJson --> buildWorkspacePolicyJson
  normalizeTools --> parseStoredAgentFrontmatter
  normalizeTools --> toValidationError
  normalizeTools --> createAgentRepository
  normalizeTools --> createAgentRevisionRepository
  normalizeTools --> createAgentSubagentLinkRepository
  toRevisionToolProfileId --> parseStoredAgentFrontmatter
  toRevisionToolProfileId --> toValidationError
  toRevisionToolProfileId --> createAgentRepository
  toRevisionToolProfileId --> createAgentRevisionRepository
  toRevisionToolProfileId --> createAgentSubagentLinkRepository
  toRevisionToolProfileId --> getById
  resolveSubagentDefinitions --> parseStoredAgentFrontmatter
  resolveSubagentDefinitions --> toValidationError
  resolveSubagentDefinitions --> createAgentRepository
  resolveSubagentDefinitions --> createAgentRevisionRepository
  resolveSubagentDefinitions --> createAgentSubagentLinkRepository
  resolveSubagentDefinitions --> getById
  toExportDocument --> parseAgentMarkdown
  toExportDocument --> parseStoredAgentFrontmatter
  toExportDocument --> serializeAgentMarkdown
  toExportDocument --> createAgentRepository
  toExportDocument --> createAgentRevisionRepository
  toExportDocument --> createAgentSubagentLinkRepository
  toExportDocument --> getById
  createDelegationService --> canReadAgent
  createDelegationService --> createEventAppender
  createDelegationService --> createEventStore
  createDelegationService --> createAgentRepository
  createDelegationService --> createAgentRevisionRepository
  createDelegationService --> createAgentSubagentLinkRepository
  createDelegationService --> createFileLinkRepository
  createDelegationService --> createFileRepository
  createDelegationService --> createItemRepository
  createDelegationService --> createJobDependencyRepository
  createDelegationService --> createJobRepository
  createDelegationService --> createRunRepository
  createDelegationService --> createSessionMessageRepository
  createDelegationService --> getById
  formatDelegationHandoffText --> collectParentVisibleFileIds
  formatDelegatedTaskText --> collectParentVisibleFileIds
  toApiVersion --> collectParentVisibleFileIds
  createEventAppender --> collectParentVisibleFileIds
  linkInputFilesToChildRun --> collectParentVisibleFileIds
  linkInputFilesToChildRun --> createAgentRepository
  linkInputFilesToChildRun --> createAgentRevisionRepository
  linkInputFilesToChildRun --> createAgentSubagentLinkRepository
  linkInputFilesToChildRun --> createFileLinkRepository
  linkInputFilesToChildRun --> createFileRepository
  linkInputFilesToChildRun --> createItemRepository
  linkInputFilesToChildRun --> createRunRepository
  registerAgentNativeTools --> isNativeToolAllowedForRun
  registerAgentNativeTools --> createDelegationService
  resolveSuspendWaitPair --> createDelegationService
  resumeDelegatedRun --> toCommandContext
  resumeDelegatedRun --> resolveRunWait
  resumeDelegatedRun --> createRunRepository
  resumeDelegatedRun --> getById
  resolveRootRunAgentBinding --> resolveRuntimeSettingsFromAgentRevision
  resolveRootRunAgentBinding --> resolveReadableAgent
  resolveRootRunAgentBinding --> createAccountPreferencesRepository
  resolveReadableAgent --> canReadAgent
  resolveReadableAgent --> createAgentRepository
  resolveReadableAgent --> createAgentRevisionRepository
  resolveReadableAgent --> createAccountPreferencesRepository
  resolveReadableAgent --> getById
  parseBootstrapSessionInput --> resolveRootRunAgentBinding
  parseBootstrapSessionInput --> resolveRootRunTargetSelection
  parseBootstrapSessionInput --> createEventStore
  parseBootstrapSessionInput --> requireMembership
  parseBootstrapSessionInput --> createWorkspaceService
  parseBootstrapSessionInput --> createRunRepository
  parseBootstrapSessionInput --> createSessionMessageRepository
  parseBootstrapSessionInput --> createSessionThreadRepository
  parseBootstrapSessionInput --> createWorkSessionRepository
  parseBootstrapSessionInput --> createTenantMembershipRepository
  createBootstrapSessionCommand --> resolveRootRunAgentBinding
  createBootstrapSessionCommand --> resolveRootRunTargetSelection
  createBootstrapSessionCommand --> createEventStore
  createBootstrapSessionCommand --> requireMembership
  createBootstrapSessionCommand --> createWorkspaceService
  createBootstrapSessionCommand --> createRunRepository
  createBootstrapSessionCommand --> createSessionMessageRepository
  createBootstrapSessionCommand --> createSessionThreadRepository
  createBootstrapSessionCommand --> createWorkSessionRepository
  createBootstrapSessionCommand --> createTenantMembershipRepository
  parseBranchThreadInput --> createResourceAccessService
  parseBranchThreadInput --> hasActiveRootJobStatus
  parseBranchThreadInput --> copyThreadMessagesThroughSource
  parseBranchThreadInput --> createEventStore
  parseBranchThreadInput --> loadThreadRootJobReadModel
  parseBranchThreadInput --> createFileLinkRepository
  parseBranchThreadInput --> createFileRepository
  parseBranchThreadInput --> createSessionMessageRepository
  parseBranchThreadInput --> createSessionThreadRepository
  createBranchThreadCommand --> createResourceAccessService
  createBranchThreadCommand --> hasActiveRootJobStatus
  createBranchThreadCommand --> copyThreadMessagesThroughSource
  createBranchThreadCommand --> createEventStore
  createBranchThreadCommand --> loadThreadRootJobReadModel
  createBranchThreadCommand --> createFileLinkRepository
  createBranchThreadCommand --> createFileRepository
  createBranchThreadCommand --> createSessionMessageRepository
  createBranchThreadCommand --> createSessionThreadRepository
  hasActiveRootJobStatus --> createResourceAccessService
  hasActiveRootJobStatus --> isBranchableMessage
  hasActiveRootJobStatus --> loadThreadRootJobReadModel
  hasActiveRootJobStatus --> createSessionMessageRepository
  isBranchableMessage --> createResourceAccessService
  isBranchableMessage --> hasActiveRootJobStatus
  isBranchableMessage --> copyThreadMessagesThroughSource
  isBranchableMessage --> loadThreadRootJobReadModel
  isBranchableMessage --> createSessionMessageRepository
  copyThreadMessagesThroughSource --> createResourceAccessService
  copyThreadMessagesThroughSource --> hasActiveRootJobStatus
  copyThreadMessagesThroughSource --> isBranchableMessage
  copyThreadMessagesThroughSource --> loadThreadRootJobReadModel
  copyThreadMessagesThroughSource --> createSessionMessageRepository
  parseCancelRunInput --> createResourceAccessService
  parseCancelRunInput --> createEventStore
  parseCancelRunInput --> classifyRunForCancelCommand
  parseCancelRunInput --> cancelRunSubtree
  parseCancelRunInput --> finalizeRunCancellation
  parseCancelRunInput --> requireMembership
  parseCancelRunInput --> createRunDependencyRepository
  parseCancelRunInput --> createRunRepository
  parseCancelRunInput --> createToolExecutionRepository
  parseCancelRunInput --> createTenantMembershipRepository
  createCancelRunCommand --> createResourceAccessService
  createCancelRunCommand --> createEventStore
  createCancelRunCommand --> classifyRunForCancelCommand
  createCancelRunCommand --> cancelRunSubtree
  createCancelRunCommand --> finalizeRunCancellation
  createCancelRunCommand --> requireMembership
  createCancelRunCommand --> createRunDependencyRepository
  createCancelRunCommand --> createRunRepository
  createCancelRunCommand --> createToolExecutionRepository
  createCancelRunCommand --> createTenantMembershipRepository
  parseCreateSessionThreadInput --> createResourceAccessService
  parseCreateSessionThreadInput --> createEventStore
  parseCreateSessionThreadInput --> requireMembership
  parseCreateSessionThreadInput --> createSessionThreadRepository
  parseCreateSessionThreadInput --> createTenantMembershipRepository
  createCreateSessionThreadCommand --> createResourceAccessService
  createCreateSessionThreadCommand --> createEventStore
  createCreateSessionThreadCommand --> requireMembership
  createCreateSessionThreadCommand --> createSessionThreadRepository
  createCreateSessionThreadCommand --> createTenantMembershipRepository
  parseCreateSessionInput --> createEventStore
  parseCreateSessionInput --> requireMembership
  parseCreateSessionInput --> appendWorkspaceLifecycleEvents
  parseCreateSessionInput --> createWorkspaceService
  parseCreateSessionInput --> createWorkSessionRepository
  parseCreateSessionInput --> createTenantMembershipRepository
  createCreateSessionCommand --> createEventStore
  createCreateSessionCommand --> requireMembership
  createCreateSessionCommand --> appendWorkspaceLifecycleEvents
  createCreateSessionCommand --> createWorkspaceService
  createCreateSessionCommand --> createWorkSessionRepository
  createCreateSessionCommand --> createTenantMembershipRepository
  createDeleteThreadCommand --> createResourceAccessService
  createDeleteThreadCommand --> collectThreadSubtreeIds
  createDeleteThreadCommand --> pruneThreadHistoryInTransaction
  collectThreadSubtreeIds --> createResourceAccessService
  collectThreadSubtreeIds --> pruneThreadHistoryInTransaction
  parseEditThreadMessageInput --> createResourceAccessService
  parseEditThreadMessageInput --> createEventStore
  parseEditThreadMessageInput --> requireMembership
  parseEditThreadMessageInput --> createFileLinkRepository
  parseEditThreadMessageInput --> createJobRepository
  parseEditThreadMessageInput --> createRunRepository
  parseEditThreadMessageInput --> createSessionMessageRepository
  parseEditThreadMessageInput --> getById
  parseEditThreadMessageInput --> createTenantMembershipRepository
  createEditThreadMessageCommand --> createResourceAccessService
  createEditThreadMessageCommand --> createEventStore
  createEditThreadMessageCommand --> requireMembership
  createEditThreadMessageCommand --> createFileLinkRepository
  createEditThreadMessageCommand --> createJobRepository
  createEditThreadMessageCommand --> createRunRepository
  createEditThreadMessageCommand --> createSessionMessageRepository
  createEditThreadMessageCommand --> getById
  createEditThreadMessageCommand --> createTenantMembershipRepository
  toContent --> createResourceAccessService
  toContent --> createEventStore
  toContent --> requireMembership
  toContent --> createFileLinkRepository
  toContent --> createJobRepository
  toContent --> createRunRepository
  toContent --> createSessionMessageRepository
  toContent --> getById
  toContent --> createTenantMembershipRepository
  toContent --> resolveRootRunAgentBinding
  toContent --> resolveRootRunTargetSelection
  createEventStore --> isEventOutboxTopic
  createEventStore --> normalizeOutboxTopics
  createEventStore --> signalOutboxPending
  createEventStore --> getCanonicalCommittedEventContract
  createEventStore --> resolveCanonicalCommittedEventOutboxTopics
  isEventOutboxTopic --> normalizeOutboxTopics
  isEventOutboxTopic --> getCanonicalCommittedEventContract
  isEventOutboxTopic --> resolveCanonicalCommittedEventOutboxTopics
  normalizeOutboxTopics --> isEventOutboxTopic
  normalizeOutboxTopics --> getCanonicalCommittedEventContract
  normalizeOutboxTopics --> resolveCanonicalCommittedEventOutboxTopics
  parseExecuteRunInput --> createResourceAccessService
  parseExecuteRunInput --> toConfigSnapshot
  parseExecuteRunInput --> queueLinkedJob
  parseExecuteRunInput --> waitForRunToReachDurableState
  parseExecuteRunInput --> requireMembership
  parseExecuteRunInput --> createRunRepository
  parseExecuteRunInput --> createTenantMembershipRepository
  createExecuteRunCommand --> createResourceAccessService
  createExecuteRunCommand --> toConfigSnapshot
  createExecuteRunCommand --> queueLinkedJob
  createExecuteRunCommand --> waitForRunToReachDurableState
  createExecuteRunCommand --> requireMembership
  createExecuteRunCommand --> createRunRepository
  createExecuteRunCommand --> createTenantMembershipRepository
  resolveConfigSnapshotReasoning --> createResourceAccessService
  resolveConfigSnapshotReasoning --> toConfigSnapshot
  resolveConfigSnapshotReasoning --> requireMembership
  resolveConfigSnapshotReasoning --> createRunRepository
  resolveConfigSnapshotReasoning --> createTenantMembershipRepository
  toConfigSnapshot --> createResourceAccessService
  toConfigSnapshot --> resolveConfigSnapshotReasoning
  toConfigSnapshot --> queueLinkedJob
  toConfigSnapshot --> waitForRunToReachDurableState
  toConfigSnapshot --> requireMembership
  toConfigSnapshot --> createRunRepository
  toConfigSnapshot --> createTenantMembershipRepository
  toConfigSnapshot --> toToolArgs
  toConfigSnapshot --> requiresApprovalForWait
  toConfigSnapshot --> resolveRunEventThreadId
  toConfigSnapshot --> toChildRunResultKind
  toConfigSnapshot --> toChildRunSummary
  toConfigSnapshot --> isConfirmationWait
  buildFileDeletionPlanFromDirectLinks --> uniqueStrings
  selectFileDeletionPlan --> buildFileDeletionPlanFromDirectLinks
  uniqueStrings --> blocksPermanentDelete
  parsePostThreadMessageInput --> createResourceAccessService
  parsePostThreadMessageInput --> toContent
  parsePostThreadMessageInput --> createEventStore
  parsePostThreadMessageInput --> reopenThreadRootJobForNewMessage
  parsePostThreadMessageInput --> requireMembership
  parsePostThreadMessageInput --> createSessionMessageRepository
  parsePostThreadMessageInput --> createTenantMembershipRepository
  createPostThreadMessageCommand --> createResourceAccessService
  createPostThreadMessageCommand --> toContent
  createPostThreadMessageCommand --> createEventStore
  createPostThreadMessageCommand --> reopenThreadRootJobForNewMessage
  createPostThreadMessageCommand --> requireMembership
  createPostThreadMessageCommand --> createSessionMessageRepository
  createPostThreadMessageCommand --> createTenantMembershipRepository
  parseResumeRunInput --> waitForRunToReachDurableState
  parseResumeRunInput --> resolveRunWait
  createResumeRunCommand --> waitForRunToReachDurableState
  createResumeRunCommand --> resolveRunWait
  parseStartThreadInteractionInput --> createResourceAccessService
  parseStartThreadInteractionInput --> resolveRootRunAgentBinding
  parseStartThreadInteractionInput --> resolveRootRunTargetSelection
  parseStartThreadInteractionInput --> requireMembership
  parseStartThreadInteractionInput --> createFileLinkRepository
  parseStartThreadInteractionInput --> createJobRepository
  parseStartThreadInteractionInput --> createRunRepository
  parseStartThreadInteractionInput --> createSessionMessageRepository
  parseStartThreadInteractionInput --> createWorkSessionRepository
  parseStartThreadInteractionInput --> createTenantMembershipRepository
  createStartThreadInteractionCommand --> createResourceAccessService
  createStartThreadInteractionCommand --> resolveRootRunAgentBinding
  createStartThreadInteractionCommand --> resolveRootRunTargetSelection
  createStartThreadInteractionCommand --> createEventStore
  createStartThreadInteractionCommand --> requireMembership
  createStartThreadInteractionCommand --> createWorkspaceService
  createStartThreadInteractionCommand --> createFileLinkRepository
  createStartThreadInteractionCommand --> createJobRepository
  createStartThreadInteractionCommand --> createRunRepository
  createStartThreadInteractionCommand --> createSessionMessageRepository
  createStartThreadInteractionCommand --> createWorkSessionRepository
  createStartThreadInteractionCommand --> createTenantMembershipRepository
  deriveTask --> createResourceAccessService
  deriveTask --> resolveRootRunAgentBinding
  deriveTask --> resolveRootRunTargetSelection
  deriveTask --> requireMembership
  deriveTask --> createRunRepository
  deriveTask --> createTenantMembershipRepository
  pickReusableRootJob --> createResourceAccessService
  pickReusableRootJob --> resolveRootRunAgentBinding
  pickReusableRootJob --> resolveRootRunTargetSelection
  pickReusableRootJob --> requireMembership
  pickReusableRootJob --> createRunRepository
  pickReusableRootJob --> createTenantMembershipRepository
  pruneThreadHistoryInTransaction --> uniqueStrings
  pruneThreadHistoryInTransaction --> blocksPermanentDelete
  jsonStringAt --> uniqueStrings
  jsonStringAt --> blocksPermanentDelete
  blocksPermanentDelete --> uniqueStrings
  replaceMessageFiles --> buildFileDeletionPlanFromDirectLinks
  replaceMessageFiles --> jsonStringAt
  replaceMessageFiles --> ensureFilesAttachedToMessage
  dispatchBackgroundEvent --> createInternalCommandContext
  dispatchBackgroundEvent --> toInternalTenantScope
  dispatchBackgroundEvent --> processThreadNamingRequest
  toInternalTenantScope --> createInternalCommandContext
  toInternalTenantScope --> processThreadNamingRequest
  createEventOutboxWorker --> createDispatchers
  createEventOutboxWorker --> createEventOutboxLane
  createEventOutboxWorker --> createLaneBackedEventOutboxWorker
  createObservabilityOutboxWorker --> createDispatchers
  createObservabilityOutboxWorker --> createEventOutboxLane
  createObservabilityOutboxWorker --> createLaneBackedEventOutboxWorker
  shouldQuarantineObservabilityFailure --> addMilliseconds
  shouldQuarantineObservabilityFailure --> dispatchBackgroundEvent
  shouldQuarantineObservabilityFailure --> dispatchLangfuseEvent
  shouldQuarantineObservabilityFailure --> dispatchProjectionEvent
  shouldQuarantineObservabilityFailure --> createEventOutboxRepository
  createDispatchers --> addMilliseconds
  createDispatchers --> dispatchBackgroundEvent
  createDispatchers --> dispatchLangfuseEvent
  createDispatchers --> shouldQuarantineObservabilityFailure
  createDispatchers --> dispatchProjectionEvent
  createDispatchers --> createEventOutboxRepository
  createEventOutboxLane --> addMilliseconds
  createEventOutboxLane --> shouldQuarantineObservabilityFailure
  createEventOutboxLane --> createEventOutboxRepository
  createLaneBackedEventOutboxWorker --> createDispatchers
  createLaneBackedEventOutboxWorker --> createEventOutboxLane
  createLaneBackedEventOutboxWorker --> createEventOutboxRepository
  dispatchProjectionEvent --> dispatchRunContextProjection
  dispatchProjectionEvent --> dispatchMessagePostedProjection
  readPayloadString --> createInternalCommandContext
  readPayloadString --> resolveExecutionScopeForSession
  readPayloadString --> listVisibleMessages
  readPayloadString --> ensureProjectedThreadContext
  readPayloadString --> createRunRepository
  readPayloadString --> createSessionMessageRepository
  readPayloadString --> getById
  readPayloadString --> matchesSession
  readPayloadString --> matchesThread
  readPayloadString --> matchesRun
  dispatchRunContextProjection --> createInternalCommandContext
  dispatchRunContextProjection --> readPayloadString
  dispatchRunContextProjection --> resolveExecutionScopeForSession
  dispatchRunContextProjection --> listVisibleMessages
  dispatchRunContextProjection --> ensureProjectedThreadContext
  dispatchRunContextProjection --> createRunRepository
  dispatchRunContextProjection --> createSessionMessageRepository
  dispatchRunContextProjection --> getById
  dispatchMessagePostedProjection --> createInternalCommandContext
  dispatchMessagePostedProjection --> readPayloadString
  dispatchMessagePostedProjection --> dispatchRunContextProjection
  dispatchMessagePostedProjection --> resolveExecutionScopeForSession
  dispatchMessagePostedProjection --> ensureProjectedThreadContext
  dispatchMessagePostedProjection --> createRunRepository
  dispatchMessagePostedProjection --> createSessionMessageRepository
  createRealtimeEventRelay --> matchesCategory
  createRealtimeEventRelay --> matchesScope
  createRealtimeEventRelay --> clearPendingTimer
  matchesCategory --> matchesScope
  matchesCategory --> clearPendingTimer
  matchesCategory --> matchesDomainEventStreamScope
  matchesScope --> matchesCategory
  matchesScope --> clearPendingTimer
  matchesScope --> matchesDomainEventStreamScope
  clearPendingTimer --> matchesCategory
  clearPendingTimer --> matchesScope
  loadVisibleFileContext --> toTextContent
  loadVisibleFileContext --> loadEntry
  loadVisibleFileContext --> resolveFileLabel
  loadVisibleFileContext --> createFileRepository
  toFileContextMessages --> toTextContent
  toFileContextMessages --> resolveFileLabel
  isTextLikeMimeType --> toInlineText
  isTextLikeMimeType --> toMetadataOnlyText
  toTextContent --> isTextLikeMimeType
  toTextContent --> toInlineText
  toTextContent --> toMetadataOnlyText
  toTextContent --> buildModelVisibleMessageContent
  toTextContent --> groupInlineImageFilesByMessageId
  toTextContent --> toChildRunReplayOutput
  toInlineText --> isTextLikeMimeType
  toInlineText --> toMetadataOnlyText
  toInlineText --> createFileRepository
  toMetadataOnlyText --> isTextLikeMimeType
  toMetadataOnlyText --> toInlineText
  toMetadataOnlyText --> createFileRepository
  loadEntry --> isTextLikeMimeType
  loadEntry --> toInlineText
  loadEntry --> toMetadataOnlyText
  loadEntry --> createFileRepository
  resolveFileLabel --> toTextContent
  searchFilePicker --> createResourceAccessService
  searchFilePicker --> scoreEntry
  searchFilePicker --> dedupeAttachments
  searchFilePicker --> filterFilesWithPresentBlobs
  searchFilePicker --> clampLimit
  searchFilePicker --> createWorkspaceService
  searchFilePicker --> createFileRepository
  normalizeSeparators --> normalizeBlobStorageKey
  normalizeSeparators --> escapeRegex
  normalizeSeparators --> globToRegex
  normalizeBlobStorageKey --> normalizeSeparators
  normalizeBlobStorageKey --> escapeRegex
  normalizeBlobStorageKey --> globToRegex
  resolveBlobStoragePath --> normalizeSeparators
  resolveBlobStoragePath --> normalizeBlobStorageKey
  resolveBlobStoragePath --> escapeRegex
  resolveBlobStoragePath --> globToRegex
  resolveBlobStoragePath --> matchIgnoreRule
  escapeRegex --> normalizeSeparators
  escapeRegex --> globToRegex
  escapeRegex --> compileIgnoreRule
  escapeRegex --> matchIgnoreRule
  escapeRegex --> normalizeLineEndings
  escapeRegex --> normalizeExcerpt
  escapeRegex --> stripLargeTextPasteHiddenMetadata
  escapeRegex --> toMessageText
  escapeRegex --> trimLongExcerpt
  escapeRegex --> normalizeMessageText
  escapeRegex --> capCombinedSource
  globToRegex --> normalizeSeparators
  globToRegex --> escapeRegex
  globToRegex --> compileIgnoreRule
  globToRegex --> matchIgnoreRule
  compileIgnoreRule --> normalizeSeparators
  compileIgnoreRule --> globToRegex
  compileIgnoreRule --> matchIgnoreRule
  compileIgnoreRule --> readIgnoreRules
  matchIgnoreRule --> normalizeSeparators
  matchIgnoreRule --> compileIgnoreRule
  matchIgnoreRule --> isIgnored
  matchIgnoreRule --> readIgnoreRules
  matchIgnoreRule --> toDepth
  isIgnored --> normalizeSeparators
  isIgnored --> compileIgnoreRule
  isIgnored --> matchIgnoreRule
  isIgnored --> readIgnoreRules
  isIgnored --> toFileExtension
  isIgnored --> toDepth
  readIgnoreRules --> normalizeSeparators
  readIgnoreRules --> compileIgnoreRule
  readIgnoreRules --> isIgnored
  readIgnoreRules --> toFileExtension
  readIgnoreRules --> toDepth
  toFileExtension --> normalizeSeparators
  toFileExtension --> isIgnored
  toFileExtension --> readIgnoreRules
  toFileExtension --> toDepth
  toFileExtension --> buildWorkspaceIndex
  toDepth --> normalizeSeparators
  toDepth --> isIgnored
  toDepth --> readIgnoreRules
  toDepth --> toFileExtension
  toDepth --> buildWorkspaceIndex
  buildWorkspaceIndex --> normalizeSeparators
  buildWorkspaceIndex --> isIgnored
  buildWorkspaceIndex --> readIgnoreRules
  buildWorkspaceIndex --> toFileExtension
  buildWorkspaceIndex --> toDepth
  dedupeSortedIndices --> extensionBoost
  dedupeSortedIndices --> recencyBoost
  mapNameIndicesToPathIndices --> extensionBoost
  mapNameIndicesToPathIndices --> recencyBoost
  recencyBoost --> extensionBoost
  recencyBoost --> fuzzyIndices
  recencyBoost --> dedupeSortedIndices
  recencyBoost --> mapNameIndicesToPathIndices
  scoreEntry --> toFileExtension
  scoreEntry --> extensionBoost
  scoreEntry --> fuzzyIndices
  scoreEntry --> dedupeSortedIndices
  scoreEntry --> mapNameIndicesToPathIndices
  scoreEntry --> recencyBoost
  toAttachmentEntry --> resolveBlobStoragePath
  toAttachmentEntry --> toFileExtension
  toAttachmentEntry --> createWorkspaceService
  dedupeAttachments --> resolveBlobStoragePath
  dedupeAttachments --> toAttachmentEntry
  dedupeAttachments --> createWorkspaceService
  dedupeAttachments --> createFileRepository
  filterFilesWithPresentBlobs --> createResourceAccessService
  filterFilesWithPresentBlobs --> resolveBlobStoragePath
  filterFilesWithPresentBlobs --> createWorkspaceService
  filterFilesWithPresentBlobs --> createFileRepository
  clampLimit --> createResourceAccessService
  clampLimit --> dedupeAttachments
  clampLimit --> filterFilesWithPresentBlobs
  clampLimit --> createWorkspaceService
  clampLimit --> createFileRepository
  toSearchResultItem --> createResourceAccessService
  toSearchResultItem --> scoreEntry
  toSearchResultItem --> dedupeAttachments
  toSearchResultItem --> filterFilesWithPresentBlobs
  toSearchResultItem --> clampLimit
  toSearchResultItem --> createWorkspaceService
  toSearchResultItem --> createFileRepository
  createUploadFileCommand --> createResourceAccessService
  createUploadFileCommand --> requireMembership
  createUploadFileCommand --> createWorkspaceService
  createUploadFileCommand --> isMimeTypeAllowed
  createUploadFileCommand --> createUploadRepository
  createUploadFileCommand --> createTenantMembershipRepository
  sanitizeFilenameSegment --> createEventStore
  sanitizeFilenameSegment --> toAttachmentFilename
  sanitizeFilenameSegment --> requireMembership
  sanitizeFilenameSegment --> createUploadRepository
  sanitizeFilenameSegment --> createTenantMembershipRepository
  toAttachmentFilename --> createEventStore
  toAttachmentFilename --> sanitizeFilenameSegment
  toAttachmentFilename --> requireMembership
  toAttachmentFilename --> createUploadRepository
  toAttachmentFilename --> createTenantMembershipRepository
  toStorageKey --> createEventStore
  toStorageKey --> toAttachmentFilename
  toStorageKey --> requireMembership
  toStorageKey --> isMimeTypeAllowed
  toStorageKey --> createUploadRepository
  toStorageKey --> createTenantMembershipRepository
  markUploadFailed --> createResourceAccessService
  markUploadFailed --> createEventStore
  markUploadFailed --> requireMembership
  markUploadFailed --> isMimeTypeAllowed
  markUploadFailed --> createUploadRepository
  markUploadFailed --> createTenantMembershipRepository
  assembleThreadInteractionRequest --> toFileContextMessages
  assembleThreadInteractionRequest --> toMetadata
  assembleThreadInteractionRequest --> toFallbackMessages
  assembleThreadInteractionRequest --> toSummaryMessages
  assembleThreadInteractionRequest --> toAgentProfileMessages
  assembleThreadInteractionRequest --> toObservationMessages
  assembleThreadInteractionRequest --> toReflectionMessages
  assembleThreadInteractionRequest --> toActiveMcpToolMessages
  assembleThreadInteractionRequest --> resolveRequestedProvider
  assembleThreadInteractionRequest --> resolveRequestedModel
  assembleThreadInteractionRequest --> resolveRequestedModelAlias
  assembleThreadInteractionRequest --> resolveRequestedReasoning
  assembleThreadInteractionRequest --> resolveRequestedMaxOutputTokens
  assembleThreadInteractionRequest --> resolveRequestedTemperature
  assembleThreadInteractionRequest --> toVisibleMessages
  assembleThreadInteractionRequest --> toItemMessages
  assembleThreadInteractionRequest --> createContextLayer
  assembleThreadInteractionRequest --> createContextBudgetReport
  assembleThreadInteractionRequest --> buildInteractionToolingRequest
  assembleThreadInteractionRequest --> collectInlineReferencedUploadedFileIds
  toMetadata --> toTextContent
  toMetadata --> formatObservationMemoryText
  toMetadata --> formatReflectionMemoryText
  toFallbackMessages --> toTextContent
  toFallbackMessages --> formatObservationMemoryText
  toFallbackMessages --> formatReflectionMemoryText
  toSummaryMessages --> toTextContent
  toSummaryMessages --> formatObservationMemoryText
  toSummaryMessages --> formatReflectionMemoryText
  toAgentProfileMessages --> toTextContent
  toAgentProfileMessages --> formatObservationMemoryText
  toAgentProfileMessages --> formatReflectionMemoryText
  toObservationMessages --> toTextContent
  toObservationMessages --> isReasoningOptions
  toObservationMessages --> formatObservationMemoryText
  toObservationMessages --> formatReflectionMemoryText
  toReflectionMessages --> toTextContent
  toReflectionMessages --> isReasoningOptions
  toReflectionMessages --> formatReflectionMemoryText
  toActiveMcpToolMessages --> resolveRequestedProvider
  toActiveMcpToolMessages --> isReasoningOptions
  toActiveMcpToolMessages --> resolveRequestedMaxOutputTokens
  resolveRequestedProvider --> isReasoningOptions
  resolveRequestedProvider --> resolveRequestedMaxOutputTokens
  resolveRequestedProvider --> toItemMessages
  resolveRequestedModel --> resolveRequestedProvider
  resolveRequestedModel --> isReasoningOptions
  resolveRequestedModel --> resolveRequestedMaxOutputTokens
  resolveRequestedModel --> toItemMessages
  resolveRequestedModel --> createContextLayer
  resolveRequestedModel --> collectInlineReferencedUploadedFileIds
  resolveRequestedModelAlias --> toSummaryMessages
  resolveRequestedModelAlias --> toAgentProfileMessages
  resolveRequestedModelAlias --> toActiveMcpToolMessages
  resolveRequestedModelAlias --> resolveRequestedProvider
  resolveRequestedModelAlias --> isReasoningOptions
  resolveRequestedModelAlias --> resolveRequestedMaxOutputTokens
  resolveRequestedModelAlias --> toItemMessages
  resolveRequestedModelAlias --> createContextLayer
  resolveRequestedModelAlias --> collectInlineReferencedUploadedFileIds
  isReasoningOptions --> toSummaryMessages
  isReasoningOptions --> toAgentProfileMessages
  isReasoningOptions --> toObservationMessages
  isReasoningOptions --> toReflectionMessages
  isReasoningOptions --> toActiveMcpToolMessages
  isReasoningOptions --> resolveRequestedProvider
  isReasoningOptions --> resolveRequestedMaxOutputTokens
  isReasoningOptions --> toVisibleMessages
  isReasoningOptions --> toItemMessages
  isReasoningOptions --> createContextLayer
  isReasoningOptions --> collectInlineReferencedUploadedFileIds
  resolveRequestedReasoning --> toFileContextMessages
  resolveRequestedReasoning --> toFallbackMessages
  resolveRequestedReasoning --> toSummaryMessages
  resolveRequestedReasoning --> toAgentProfileMessages
  resolveRequestedReasoning --> toObservationMessages
  resolveRequestedReasoning --> toReflectionMessages
  resolveRequestedReasoning --> toActiveMcpToolMessages
  resolveRequestedReasoning --> resolveRequestedProvider
  resolveRequestedReasoning --> isReasoningOptions
  resolveRequestedReasoning --> resolveRequestedMaxOutputTokens
  resolveRequestedReasoning --> toVisibleMessages
  resolveRequestedReasoning --> toItemMessages
  resolveRequestedReasoning --> createContextLayer
  resolveRequestedReasoning --> collectInlineReferencedUploadedFileIds
  resolveRequestedMaxOutputTokens --> toFileContextMessages
  resolveRequestedMaxOutputTokens --> toMetadata
  resolveRequestedMaxOutputTokens --> toFallbackMessages
  resolveRequestedMaxOutputTokens --> toSummaryMessages
  resolveRequestedMaxOutputTokens --> toAgentProfileMessages
  resolveRequestedMaxOutputTokens --> toObservationMessages
  resolveRequestedMaxOutputTokens --> toReflectionMessages
  resolveRequestedMaxOutputTokens --> toActiveMcpToolMessages
  resolveRequestedMaxOutputTokens --> resolveRequestedProvider
  resolveRequestedMaxOutputTokens --> resolveRequestedModel
  resolveRequestedMaxOutputTokens --> resolveRequestedModelAlias
  resolveRequestedMaxOutputTokens --> toVisibleMessages
  resolveRequestedMaxOutputTokens --> toItemMessages
  resolveRequestedMaxOutputTokens --> createContextLayer
  resolveRequestedMaxOutputTokens --> buildInteractionToolingRequest
  resolveRequestedMaxOutputTokens --> collectInlineReferencedUploadedFileIds
  resolveRequestedTemperature --> toFileContextMessages
  resolveRequestedTemperature --> toMetadata
  resolveRequestedTemperature --> toFallbackMessages
  resolveRequestedTemperature --> toSummaryMessages
  resolveRequestedTemperature --> toAgentProfileMessages
  resolveRequestedTemperature --> toObservationMessages
  resolveRequestedTemperature --> toReflectionMessages
  resolveRequestedTemperature --> toActiveMcpToolMessages
  resolveRequestedTemperature --> resolveRequestedProvider
  resolveRequestedTemperature --> resolveRequestedModel
  resolveRequestedTemperature --> resolveRequestedModelAlias
  resolveRequestedTemperature --> resolveRequestedReasoning
  resolveRequestedTemperature --> resolveRequestedMaxOutputTokens
  resolveRequestedTemperature --> toVisibleMessages
  resolveRequestedTemperature --> toItemMessages
  resolveRequestedTemperature --> createContextLayer
  resolveRequestedTemperature --> createContextBudgetReport
  resolveRequestedTemperature --> buildInteractionToolingRequest
  resolveRequestedTemperature --> collectInlineReferencedUploadedFileIds
  toVisibleMessages --> toItemTextContent
  toVisibleMessages --> toMappedFunctionOutputJson
  toVisibleMessages --> toAssistantProviderMessageId
  toVisibleMessages --> buildModelVisibleMessageContent
  toVisibleMessages --> groupInlineImageFilesByMessageId
  toItemMessages --> toItemTextContent
  toItemMessages --> toMappedFunctionOutputJson
  toItemMessages --> toAssistantProviderMessageId
  toItemMessages --> toReasoningProviderItemId
  toItemMessages --> buildModelVisibleMessageContent
  toItemTextContent --> buildModelVisibleMessageContent
  toItemTextContent --> groupInlineImageFilesByMessageId
  toItemTextContent --> toChildRunReplayOutput
  toMappedFunctionOutputJson --> toItemTextContent
  toMappedFunctionOutputJson --> toAssistantProviderMessageId
  toMappedFunctionOutputJson --> buildModelVisibleMessageContent
  toMappedFunctionOutputJson --> groupInlineImageFilesByMessageId
  toMappedFunctionOutputJson --> toChildRunReplayOutput
  toAssistantProviderMessageId --> toItemTextContent
  toAssistantProviderMessageId --> buildModelVisibleMessageContent
  toAssistantProviderMessageId --> groupInlineImageFilesByMessageId
  toReasoningProviderItemId --> toItemTextContent
  toReasoningProviderItemId --> toAssistantProviderMessageId
  toReasoningProviderItemId --> buildModelVisibleMessageContent
  toReasoningProviderItemId --> groupInlineImageFilesByMessageId
  estimateMessageTokens --> estimateTextTokens
  estimateMessageTokens --> estimateUnknownTokens
  estimateMessageTokens --> toBudgetRequestOverhead
  estimateMessageTokens --> estimateContentTokens
  createContextLayer --> estimateMessageTokens
  createContextLayer --> estimateUnknownTokens
  createContextLayer --> toBudgetRequestOverhead
  createContextBudgetReport --> estimateUnknownTokens
  createContextBudgetReport --> toBudgetRequestOverhead
  estimateTextTokens --> estimateMessageTokens
  estimateTextTokens --> estimateUnknownTokens
  estimateTextTokens --> toBudgetRequestOverhead
  estimateTextTokens --> estimateContentTokens
  estimateUnknownTokens --> estimateMessageTokens
  estimateUnknownTokens --> estimateTextTokens
  estimateUnknownTokens --> toBudgetRequestOverhead
  estimateUnknownTokens --> estimateContentTokens
  toBudgetRequestOverhead --> estimateMessageTokens
  toBudgetRequestOverhead --> estimateTextTokens
  toBudgetRequestOverhead --> estimateUnknownTokens
  toBudgetRequestOverhead --> estimateContentTokens
  estimateContentTokens --> estimateMessageTokens
  estimateContentTokens --> estimateTextTokens
  estimateContentTokens --> estimateUnknownTokens
  estimateContentTokens --> toBudgetRequestOverhead
  createAiInteractionService --> resolveInteractionRequest
  createAiInteractionService --> requireConfiguredProvider
  resolveInteractionRequest --> requireConfiguredProvider
  resolveInteractionRequest --> resolveAiModelTarget
  requireConfiguredProvider --> resolveInteractionRequest
  isModelVisibleFunctionToolName --> toToolDefinitions
  toToolDefinitions --> isModelVisibleFunctionToolName
  buildInteractionToolingRequest --> toToolDefinitions
  loadThreadContext --> loadVisibleFileContext
  loadThreadContext --> loadAgentProfile
  loadThreadContext --> ensureLatestSummaryObserved
  loadThreadContext --> ensureRunLocalReflected
  loadThreadContext --> loadScopedMemoryState
  loadThreadContext --> maybeCompactMainThreadContext
  loadThreadContext --> listVisibleMessages
  loadThreadContext --> ensureProjectedThreadContext
  loadThreadContext --> createContextSummaryRepository
  loadThreadContext --> createRunDependencyRepository
  loadAgentProfile --> getAgentDescription
  loadAgentProfile --> listAgentCapabilities
  loadAgentProfile --> resolveWritableMemoryScope
  loadAgentProfile --> tryAppendRunTelemetryEvent
  loadAgentProfile --> createAgentRepository
  loadAgentProfile --> createAgentRevisionRepository
  loadAgentProfile --> createAgentSubagentLinkRepository
  loadAgentProfile --> createMemoryRecordRepository
  loadAgentProfile --> getById
  ensureLatestSummaryObserved --> loadScopedMemoryState
  ensureLatestSummaryObserved --> resolveWritableMemoryScope
  ensureLatestSummaryObserved --> estimateObservationTokenCount
  ensureLatestSummaryObserved --> observeSummary
  ensureLatestSummaryObserved --> reflectRunLocalMemory
  ensureLatestSummaryObserved --> tryAppendRunTelemetryEvent
  ensureLatestSummaryObserved --> emitProgressReported
  ensureLatestSummaryObserved --> createMemoryRecordRepository
  ensureRunLocalReflected --> loadScopedMemoryState
  ensureRunLocalReflected --> resolveWritableMemoryScope
  ensureRunLocalReflected --> estimateReflectionTokenCount
  ensureRunLocalReflected --> reflectRunLocalMemory
  ensureRunLocalReflected --> tryAppendRunTelemetryEvent
  ensureRunLocalReflected --> createMemoryRecordRepository
  loadScopedMemoryState --> loadVisibleFileContext
  loadScopedMemoryState --> resolveReadableMemoryScopes
  loadScopedMemoryState --> maybeCompactMainThreadContext
  loadScopedMemoryState --> listVisibleMessages
  loadScopedMemoryState --> ensureProjectedThreadContext
  loadScopedMemoryState --> createMemoryRecordRepository
  loadScopedMemoryState --> createContextSummaryRepository
  loadScopedMemoryState --> createRunDependencyRepository
  listMarkdownImageReferences --> isEscaped
  listMarkdownImageReferences --> findClosingBracket
  listMarkdownImageReferences --> findClosingParen
  listMarkdownImageReferences --> readImageDestination
  listMarkdownImageReferences --> readUploadedFileId
  listMarkdownImageReferences --> normalizeRemoteImageUrl
  buildModelVisibleMessageContent --> listMarkdownImageReferences
  buildModelVisibleMessageContent --> readUploadedFileId
  buildModelVisibleMessageContent --> appendText
  buildModelVisibleMessageContent --> toInlineImagePart
  groupInlineImageFilesByMessageId --> listMarkdownImageReferences
  groupInlineImageFilesByMessageId --> readUploadedFileId
  collectInlineReferencedUploadedFileIds --> listMarkdownImageReferences
  collectInlineReferencedUploadedFileIds --> readUploadedFileId
  isEscaped --> findClosingBracket
  isEscaped --> findClosingParen
  isEscaped --> readImageDestination
  findClosingBracket --> isEscaped
  findClosingBracket --> findClosingParen
  findClosingBracket --> readImageDestination
  findClosingParen --> isEscaped
  findClosingParen --> findClosingBracket
  findClosingParen --> readImageDestination
  readImageDestination --> isEscaped
  readImageDestination --> findClosingBracket
  readImageDestination --> findClosingParen
  readUploadedFileId --> listMarkdownImageReferences
  readUploadedFileId --> normalizeRemoteImageUrl
  readUploadedFileId --> appendText
  readUploadedFileId --> toInlineImagePart
  normalizeRemoteImageUrl --> listMarkdownImageReferences
  normalizeRemoteImageUrl --> readUploadedFileId
  normalizeRemoteImageUrl --> appendText
  normalizeRemoteImageUrl --> toInlineImagePart
  appendText --> listMarkdownImageReferences
  appendText --> readUploadedFileId
  appendText --> normalizeRemoteImageUrl
  appendText --> toInlineImagePart
  toInlineImagePart --> listMarkdownImageReferences
  toInlineImagePart --> readUploadedFileId
  toInlineImagePart --> normalizeRemoteImageUrl
  toInlineImagePart --> appendText
  normalizeAssistantMessageContent --> normalizeText
  normalizeAssistantOutputText --> normalizeText
  normalizeAssistantOutputText --> normalizeAssistantMessageContent
  resolveReadableMemoryScopes --> resolveWritableMemoryScope
  estimateObservationTokenCount --> toTextContent
  estimateObservationTokenCount --> estimateMessageTokens
  estimateObservationTokenCount --> resolveObserverTarget
  formatObservationMemoryText --> toTextContent
  formatObservationMemoryText --> resolveObserverTarget
  observeSummary --> toTextContent
  observeSummary --> resolveObserverTarget
  resolveObserverTarget --> toTextContent
  resolveObserverTarget --> estimateMessageTokens
  toObservationBlock --> toTextContent
  toObservationBlock --> resolveObserverTarget
  shouldReflectRunLocalObservations --> toTextContent
  shouldReflectRunLocalObservations --> estimateMessageTokens
  shouldReflectRunLocalObservations --> resolveReflectorTarget
  shouldReflectRunLocalObservations --> toReflectionBlock
  shouldReflectRunLocalObservations --> resolveReflectionSourceTokenThreshold
  shouldReflectRunLocalObservations --> resolveContextWindowForModel
  estimateReflectionTokenCount --> toTextContent
  estimateReflectionTokenCount --> estimateMessageTokens
  estimateReflectionTokenCount --> shouldReflectRunLocalObservations
  estimateReflectionTokenCount --> resolveReflectorTarget
  estimateReflectionTokenCount --> toReflectionBlock
  estimateReflectionTokenCount --> resolveReflectionSourceTokenThreshold
  estimateReflectionTokenCount --> resolveContextWindowForModel
  formatReflectionMemoryText --> toTextContent
  formatReflectionMemoryText --> shouldReflectRunLocalObservations
  formatReflectionMemoryText --> resolveReflectorTarget
  formatReflectionMemoryText --> toReflectionBlock
  formatReflectionMemoryText --> resolveReflectionSourceTokenThreshold
  formatReflectionMemoryText --> resolveContextWindowForModel
  reflectRunLocalMemory --> toTextContent
  reflectRunLocalMemory --> shouldReflectRunLocalObservations
  reflectRunLocalMemory --> resolveReflectorTarget
  reflectRunLocalMemory --> toReflectionBlock
  reflectRunLocalMemory --> resolveReflectionSourceTokenThreshold
  resolveReflectorTarget --> toTextContent
  resolveReflectorTarget --> estimateMessageTokens
  resolveReflectorTarget --> shouldReflectRunLocalObservations
  resolveReflectorTarget --> resolveReflectionSourceTokenThreshold
  resolveReflectorTarget --> resolveContextWindowForModel
  toReflectionBlock --> toTextContent
  toReflectionBlock --> shouldReflectRunLocalObservations
  toReflectionBlock --> resolveReflectorTarget
  toReflectionBlock --> resolveReflectionSourceTokenThreshold
  toReflectionBlock --> resolveContextWindowForModel
  toObservationBlocks --> toTextContent
  toObservationBlocks --> shouldReflectRunLocalObservations
  toObservationBlocks --> resolveReflectorTarget
  toObservationBlocks --> toReflectionBlock
  toObservationBlocks --> resolveReflectionSourceTokenThreshold
  toObservationBlocks --> resolveContextWindowForModel
  resolveReflectionSourceTokenThreshold --> toTextContent
  resolveReflectionSourceTokenThreshold --> shouldReflectRunLocalObservations
  resolveReflectionSourceTokenThreshold --> resolveReflectorTarget
  resolveReflectionSourceTokenThreshold --> toReflectionBlock
  resolveReflectionSourceTokenThreshold --> resolveContextWindowForModel
  generateThreadTitle --> toTextContent
  generateThreadTitle --> resolveTitleTarget
  generateThreadTitle --> sanitizeGeneratedTitle
  resolveTitleTarget --> toTextContent
  resolveTitleTarget --> sanitizeGeneratedTitle
  sanitizeGeneratedTitle --> toTextContent
  sanitizeGeneratedTitle --> resolveTitleTarget
  sampleThreadTitleSourceText --> sampleAutoFirstMessage
  sampleThreadTitleSourceText --> sampleManualRegenerate
  normalizeLineEndings --> normalizeExcerpt
  normalizeLineEndings --> stripLargeTextPasteHiddenMetadata
  normalizeLineEndings --> toMessageText
  normalizeLineEndings --> trimLongExcerpt
  normalizeLineEndings --> normalizeMessageText
  normalizeLineEndings --> capCombinedSource
  normalizeLineEndings --> sampleAutoFirstMessage
  normalizeLineEndings --> sampleManualRegenerate
  normalizeExcerpt --> normalizeLineEndings
  normalizeExcerpt --> stripLargeTextPasteHiddenMetadata
  normalizeExcerpt --> toMessageText
  normalizeExcerpt --> trimLongExcerpt
  normalizeExcerpt --> normalizeMessageText
  normalizeExcerpt --> capCombinedSource
  normalizeExcerpt --> sampleAutoFirstMessage
  normalizeExcerpt --> sampleManualRegenerate
  stripLargeTextPasteHiddenMetadata --> normalizeLineEndings
  stripLargeTextPasteHiddenMetadata --> normalizeExcerpt
  stripLargeTextPasteHiddenMetadata --> toMessageText
  stripLargeTextPasteHiddenMetadata --> trimLongExcerpt
  stripLargeTextPasteHiddenMetadata --> normalizeMessageText
  stripLargeTextPasteHiddenMetadata --> capCombinedSource
  stripLargeTextPasteHiddenMetadata --> sampleAutoFirstMessage
  stripLargeTextPasteHiddenMetadata --> sampleManualRegenerate
  toMessageText --> normalizeExcerpt
  toMessageText --> stripLargeTextPasteHiddenMetadata
  toMessageText --> trimLongExcerpt
  toMessageText --> normalizeMessageText
  toMessageText --> capCombinedSource
  toMessageText --> sampleAutoFirstMessage
  toMessageText --> sampleManualRegenerate
  trimLongExcerpt --> normalizeExcerpt
  trimLongExcerpt --> stripLargeTextPasteHiddenMetadata
  trimLongExcerpt --> toMessageText
  trimLongExcerpt --> normalizeMessageText
  trimLongExcerpt --> capCombinedSource
  trimLongExcerpt --> sampleAutoFirstMessage
  trimLongExcerpt --> sampleManualRegenerate
  normalizeMessageText --> normalizeExcerpt
  normalizeMessageText --> stripLargeTextPasteHiddenMetadata
  normalizeMessageText --> toMessageText
  normalizeMessageText --> trimLongExcerpt
  normalizeMessageText --> capCombinedSource
  normalizeMessageText --> sampleAutoFirstMessage
  normalizeMessageText --> sampleManualRegenerate
  capCombinedSource --> trimLongExcerpt
  capCombinedSource --> normalizeMessageText
  capCombinedSource --> sampleAutoFirstMessage
  capCombinedSource --> sampleManualRegenerate
  sampleAutoFirstMessage --> trimLongExcerpt
  sampleAutoFirstMessage --> normalizeMessageText
  sampleAutoFirstMessage --> capCombinedSource
  sampleAutoFirstMessage --> sampleManualRegenerate
  sampleManualRegenerate --> trimLongExcerpt
  sampleManualRegenerate --> normalizeMessageText
  sampleManualRegenerate --> capCombinedSource
  sampleManualRegenerate --> sampleAutoFirstMessage
  processThreadNamingRequest --> createEventStore
  processThreadNamingRequest --> appendThreadNamingStartedEvent
  processThreadNamingRequest --> appendThreadNamingFailedEvent
  processThreadNamingRequest --> generateThreadTitle
  processThreadNamingRequest --> sampleThreadTitleSourceText
  processThreadNamingRequest --> toFailureError
  processThreadNamingRequest --> shouldSkipAutoFirstMessageRename
  processThreadNamingRequest --> createRunRepository
  processThreadNamingRequest --> createSessionMessageRepository
  processThreadNamingRequest --> getById
  processThreadNamingRequest --> createSessionThreadRepository
  toFailureError --> createEventStore
  toFailureError --> appendThreadNamingStartedEvent
  toFailureError --> appendThreadNamingFailedEvent
  toFailureError --> generateThreadTitle
  toFailureError --> sampleThreadTitleSourceText
  toFailureError --> createRunRepository
  toFailureError --> createSessionMessageRepository
  toFailureError --> getById
  toFailureError --> createSessionThreadRepository
  shouldSkipAutoFirstMessageRename --> createEventStore
  shouldSkipAutoFirstMessageRename --> appendThreadNamingStartedEvent
  shouldSkipAutoFirstMessageRename --> appendThreadNamingFailedEvent
  shouldSkipAutoFirstMessageRename --> generateThreadTitle
  shouldSkipAutoFirstMessageRename --> sampleThreadTitleSourceText
  shouldSkipAutoFirstMessageRename --> toFailureError
  shouldSkipAutoFirstMessageRename --> createRunRepository
  shouldSkipAutoFirstMessageRename --> createSessionMessageRepository
  shouldSkipAutoFirstMessageRename --> getById
  shouldSkipAutoFirstMessageRename --> createSessionThreadRepository
  shouldSkipManualRegenerateRename --> createEventStore
  shouldSkipManualRegenerateRename --> appendThreadNamingStartedEvent
  shouldSkipManualRegenerateRename --> appendThreadNamingFailedEvent
  shouldSkipManualRegenerateRename --> generateThreadTitle
  shouldSkipManualRegenerateRename --> sampleThreadTitleSourceText
  shouldSkipManualRegenerateRename --> toFailureError
  shouldSkipManualRegenerateRename --> createRunRepository
  shouldSkipManualRegenerateRename --> createSessionMessageRepository
  shouldSkipManualRegenerateRename --> getById
  shouldSkipManualRegenerateRename --> createSessionThreadRepository
  parseAccountPreferencesPatchInput --> canReadAgent
  parseAccountPreferencesPatchInput --> formatZodError
  parseAccountPreferencesPatchInput --> toView
  parseAccountPreferencesPatchInput --> canReadToolProfile
  parseAccountPreferencesPatchInput --> requireMembership
  parseAccountPreferencesPatchInput --> createAgentRepository
  parseAccountPreferencesPatchInput --> createAccountPreferencesRepository
  parseAccountPreferencesPatchInput --> getById
  parseAccountPreferencesPatchInput --> createTenantMembershipRepository
  parseAccountPreferencesPatchInput --> createToolProfileRepository
  createAccountPreferencesService --> canReadAgent
  createAccountPreferencesService --> toView
  createAccountPreferencesService --> canReadToolProfile
  createAccountPreferencesService --> requireMembership
  createAccountPreferencesService --> createAgentRepository
  createAccountPreferencesService --> createAccountPreferencesRepository
  createAccountPreferencesService --> getById
  createAccountPreferencesService --> createTenantMembershipRepository
  createAccountPreferencesService --> createToolProfileRepository
  toView --> formatZodError
  toView --> canReadToolProfile
  toView --> requireMembership
  toView --> createAccountPreferencesRepository
  toView --> getById
  toView --> createTenantMembershipRepository
  toView --> createToolProfileRepository
  loadChildRunResultEnvelope --> toRunSummary
  loadChildRunResultEnvelope --> loadSuspendedWaitSummaries
  loadChildRunResultEnvelope --> resolveRunWait
  loadChildRunResultEnvelope --> createRunDependencyRepository
  loadChildRunResultEnvelope --> createRunRepository
  loadChildRunResultEnvelope --> getById
  deliverChildResultToParentWaits --> loadChildRunResultEnvelope
  deliverChildResultToParentWaits --> resolveRunWait
  deliverChildResultToParentWaits --> createRunDependencyRepository
  deliverChildResultToParentWaits --> createRunRepository
  deliverChildResultToParentWaits --> getById
  toRunSummary --> toToolArgs
  toRunSummary --> requiresApprovalForWait
  toRunSummary --> loadSuspendedWaitSummaries
  toRunSummary --> createRunDependencyRepository
  toRunSummary --> createToolExecutionRepository
  toRunSummary --> getById
  toToolArgs --> toRunSummary
  toToolArgs --> requiresApprovalForWait
  toToolArgs --> loadSuspendedWaitSummaries
  toToolArgs --> createRunDependencyRepository
  toToolArgs --> createToolExecutionRepository
  toToolArgs --> getById
  toToolArgs --> dedupeWebReferences
  toToolArgs --> isToolAllowedForRun
  toToolArgs --> assertRunSnapshotCurrent
  toToolArgs --> toToolContext
  toToolArgs --> toCancellationError
  toToolArgs --> toConflictError
  toToolArgs --> isConfirmationWait
  toToolArgs --> toChildRunReplayOutput
  requiresApprovalForWait --> toRunSummary
  requiresApprovalForWait --> toToolArgs
  requiresApprovalForWait --> loadSuspendedWaitSummaries
  requiresApprovalForWait --> createRunDependencyRepository
  requiresApprovalForWait --> createToolExecutionRepository
  requiresApprovalForWait --> getById
  requiresApprovalForWait --> resolveRunEventThreadId
  requiresApprovalForWait --> toChildRunResultKind
  requiresApprovalForWait --> toChildRunSummary
  requiresApprovalForWait --> isConfirmationWait
  requiresApprovalForWait --> toPendingWaitSummary
  requiresApprovalForWait --> toEpochMs
  requiresApprovalForWait --> createRunRepository
  isParentDeliverableSuspendedWait --> toRunSummary
  isParentDeliverableSuspendedWait --> toToolArgs
  isParentDeliverableSuspendedWait --> requiresApprovalForWait
  isParentDeliverableSuspendedWait --> loadSuspendedWaitSummaries
  isParentDeliverableSuspendedWait --> createRunDependencyRepository
  isParentDeliverableSuspendedWait --> createRunRepository
  isParentDeliverableSuspendedWait --> createToolExecutionRepository
  isParentDeliverableSuspendedWait --> getById
  loadSuspendedWaitSummaries --> toRunSummary
  loadSuspendedWaitSummaries --> toToolArgs
  loadSuspendedWaitSummaries --> requiresApprovalForWait
  loadSuspendedWaitSummaries --> createRunDependencyRepository
  loadSuspendedWaitSummaries --> createRunRepository
  loadSuspendedWaitSummaries --> createToolExecutionRepository
  loadSuspendedWaitSummaries --> getById
  maybeCompactMainThreadContext --> toItemMessages
  maybeCompactMainThreadContext --> estimateMessageTokens
  maybeCompactMainThreadContext --> summarizeHeadItems
  maybeCompactMainThreadContext --> toSummaryMessageTokens
  maybeCompactMainThreadContext --> computeTailStart
  maybeCompactMainThreadContext --> getUnsummarizedItems
  maybeCompactMainThreadContext --> shouldCompact
  maybeCompactMainThreadContext --> resolveCompactionThresholds
  maybeCompactMainThreadContext --> createContextSummaryRepository
  truncate --> toTextContent
  truncate --> toItemMessages
  truncate --> estimateMessageTokens
  summarizeHeadItems --> toTextContent
  summarizeHeadItems --> toItemMessages
  summarizeHeadItems --> estimateMessageTokens
  summarizeHeadItems --> truncate
  summarizeHeadItems --> findFunctionCallIndex
  toSummaryMessageTokens --> toTextContent
  toSummaryMessageTokens --> toItemMessages
  toSummaryMessageTokens --> estimateMessageTokens
  toSummaryMessageTokens --> getItemTokenCount
  toSummaryMessageTokens --> findFunctionCallIndex
  toSummaryMessageTokens --> findFunctionResultIndex
  toSummaryMessageTokens --> adjustTailStartForBoundaries
  getItemTokenCount --> toItemMessages
  getItemTokenCount --> estimateMessageTokens
  getItemTokenCount --> findFunctionCallIndex
  getItemTokenCount --> findFunctionResultIndex
  getItemTokenCount --> adjustTailStartForBoundaries
  findFunctionCallIndex --> toItemMessages
  findFunctionCallIndex --> estimateMessageTokens
  findFunctionCallIndex --> getItemTokenCount
  findFunctionCallIndex --> findFunctionResultIndex
  findFunctionCallIndex --> adjustTailStartForBoundaries
  findFunctionResultIndex --> toItemMessages
  findFunctionResultIndex --> estimateMessageTokens
  findFunctionResultIndex --> getItemTokenCount
  findFunctionResultIndex --> findFunctionCallIndex
  findFunctionResultIndex --> adjustTailStartForBoundaries
  adjustTailStartForBoundaries --> toItemMessages
  adjustTailStartForBoundaries --> estimateMessageTokens
  adjustTailStartForBoundaries --> getItemTokenCount
  adjustTailStartForBoundaries --> findFunctionCallIndex
  adjustTailStartForBoundaries --> findFunctionResultIndex
  adjustTailStartForBoundaries --> resolveContextWindowForModel
  computeTailStart --> toItemMessages
  computeTailStart --> estimateMessageTokens
  computeTailStart --> getItemTokenCount
  computeTailStart --> adjustTailStartForBoundaries
  computeTailStart --> getUnsummarizedItems
  computeTailStart --> shouldCompact
  computeTailStart --> resolveCompactionThresholds
  computeTailStart --> resolveContextWindowForModel
  computeTailStart --> createContextSummaryRepository
  getUnsummarizedItems --> toItemMessages
  getUnsummarizedItems --> estimateMessageTokens
  getUnsummarizedItems --> summarizeHeadItems
  getUnsummarizedItems --> toSummaryMessageTokens
  getUnsummarizedItems --> computeTailStart
  getUnsummarizedItems --> shouldCompact
  getUnsummarizedItems --> resolveCompactionThresholds
  getUnsummarizedItems --> resolveContextWindowForModel
  getUnsummarizedItems --> createContextSummaryRepository
  shouldCompact --> toItemMessages
  shouldCompact --> estimateMessageTokens
  shouldCompact --> summarizeHeadItems
  shouldCompact --> toSummaryMessageTokens
  shouldCompact --> computeTailStart
  shouldCompact --> getUnsummarizedItems
  shouldCompact --> resolveCompactionThresholds
  shouldCompact --> resolveContextWindowForModel
  shouldCompact --> createContextSummaryRepository
  resolveCompactionThresholds --> toItemMessages
  resolveCompactionThresholds --> estimateMessageTokens
  resolveCompactionThresholds --> summarizeHeadItems
  resolveCompactionThresholds --> toSummaryMessageTokens
  resolveCompactionThresholds --> computeTailStart
  resolveCompactionThresholds --> getUnsummarizedItems
  resolveCompactionThresholds --> shouldCompact
  resolveCompactionThresholds --> resolveContextWindowForModel
  resolveCompactionThresholds --> createContextSummaryRepository
  executeRunTurnLoop --> isNativeToolAllowedForRun
  executeRunTurnLoop --> isToolAllowedForRun
  executeRunTurnLoop --> assembleThreadInteractionRequest
  executeRunTurnLoop --> applyLatestBudgetCalibration
  executeRunTurnLoop --> loadThreadContext
  executeRunTurnLoop --> toInactiveRunError
  executeRunTurnLoop --> toRunCancelledExecutionError
  executeRunTurnLoop --> finalizeRunCancellation
  executeRunTurnLoop --> convergeRunExecutionConflict
  executeRunTurnLoop --> failRun
  executeRunTurnLoop --> toToolContext
  executeRunTurnLoop --> createUsageLedgerRepository
  toInactiveRunError --> isNativeToolAllowedForRun
  toInactiveRunError --> isToolAllowedForRun
  toInactiveRunError --> assembleThreadInteractionRequest
  toInactiveRunError --> loadThreadContext
  toInactiveRunError --> toRunCancelledExecutionError
  toInactiveRunError --> finalizeRunCancellation
  toInactiveRunError --> convergeRunExecutionConflict
  toInactiveRunError --> failRun
  toInactiveRunError --> toToolContext
  toRunCancelledExecutionError --> isNativeToolAllowedForRun
  toRunCancelledExecutionError --> isToolAllowedForRun
  toRunCancelledExecutionError --> assembleThreadInteractionRequest
  toRunCancelledExecutionError --> loadThreadContext
  toRunCancelledExecutionError --> toInactiveRunError
  toRunCancelledExecutionError --> finalizeRunCancellation
  toRunCancelledExecutionError --> convergeRunExecutionConflict
  toRunCancelledExecutionError --> failRun
  toRunCancelledExecutionError --> toToolContext
  toRunCancelledExecutionError --> createUsageLedgerRepository
  dependenciesSatisfiedForJob --> isTerminalDependencyStatus
  dependenciesSatisfiedForJob --> isDelegatedChildSuspended
  isTerminalDependencyStatus --> isRecord
  isTerminalDependencyStatus --> isDelegatedChildSuspended
  isTerminalDependencyStatus --> createRunDependencyRepository
  isTerminalDependencyStatus --> createRunRepository
  isTerminalDependencyStatus --> getById
  isDelegatedChildSuspended --> isRecord
  isDelegatedChildSuspended --> isTerminalDependencyStatus
  isDelegatedChildSuspended --> createRunDependencyRepository
  isDelegatedChildSuspended --> createRunRepository
  isDelegatedChildSuspended --> getById
  appendJobCreatedEvents --> appendJobStatusChangeEvent
  appendJobCreatedEvents --> appendJobEvent
  appendJobCreatedEvents --> toStatusEventType
  appendJobStatusChangeEvent --> appendJobEvent
  appendJobStatusChangeEvent --> toStatusEventType
  toBasePayload --> appendJobStatusChangeEvent
  toBasePayload --> appendJobEvent
  toBasePayload --> toStatusEventType
  appendJobEvent --> appendJobStatusChangeEvent
  appendJobEvent --> toBasePayload
  appendJobEvent --> toStatusEventType
  toStatusEventType --> appendJobStatusChangeEvent
  toStatusEventType --> appendJobEvent
  loadRunJobReadModel --> toJobReadModel
  loadRunJobReadModel --> createJobRepository
  loadRunJobReadModel --> getById
  loadThreadRootJobReadModel --> toJobReadModel
  loadThreadRootJobReadModel --> createJobRepository
  toJobReadModel --> createJobDependencyRepository
  toJobReadModel --> createJobRepository
  toJobReadModel --> getById
  buildRunLinkedJobQueueReason --> isRecord
  buildDelegatedChildJobQueueReason --> isRecord
  buildRunLinkedJobRunningReason --> isRecord
  buildRunLinkedJobWaitingReason --> isRecord
  buildRunLinkedJobBlockedReason --> isRecord
  buildRunLinkedJobTerminalReason --> isRecord
  buildThreadInteractionJobQueueReason --> isRecord
  buildSessionBootstrapJobQueueReason --> isRecord
  buildNewUserMessageJobQueueReason --> isRecord
  parseJobQueueReason --> isRecord
  queueLinkedJob --> buildRunLinkedJobQueueReason
  queueLinkedJob --> buildRunLinkedJobRunningReason
  queueLinkedJob --> buildRunLinkedJobWaitingReason
  queueLinkedJob --> updateRunLinkedJob
  markLinkedJobRunning --> buildRunLinkedJobRunningReason
  markLinkedJobRunning --> buildRunLinkedJobWaitingReason
  markLinkedJobRunning --> buildRunLinkedJobBlockedReason
  markLinkedJobRunning --> updateRunLinkedJob
  markLinkedJobWaiting --> buildRunLinkedJobWaitingReason
  markLinkedJobWaiting --> buildRunLinkedJobBlockedReason
  markLinkedJobWaiting --> buildRunLinkedJobTerminalReason
  markLinkedJobWaiting --> updateRunLinkedJob
  markRunJobBlocked --> buildRunLinkedJobBlockedReason
  markRunJobBlocked --> buildRunLinkedJobTerminalReason
  markRunJobBlocked --> updateRunLinkedJob
  markRunJobCompleted --> buildRunLinkedJobTerminalReason
  markRunJobCompleted --> updateRunLinkedJob
  markRunJobCompleted --> createJobRepository
  markRunJobCancelled --> appendJobStatusChangeEvent
  markRunJobCancelled --> buildRunLinkedJobTerminalReason
  markRunJobCancelled --> buildNewUserMessageJobQueueReason
  markRunJobCancelled --> updateRunLinkedJob
  markRunJobCancelled --> createJobRepository
  recordLinkedJobHeartbeat --> appendJobStatusChangeEvent
  recordLinkedJobHeartbeat --> buildNewUserMessageJobQueueReason
  recordLinkedJobHeartbeat --> updateRunLinkedJob
  recordLinkedJobHeartbeat --> createJobRepository
  reopenThreadRootJobForNewMessage --> appendJobStatusChangeEvent
  reopenThreadRootJobForNewMessage --> buildNewUserMessageJobQueueReason
  reopenThreadRootJobForNewMessage --> createJobRepository
  updateRunLinkedJob --> appendJobStatusChangeEvent
  updateRunLinkedJob --> buildRunLinkedJobQueueReason
  updateRunLinkedJob --> buildRunLinkedJobRunningReason
  updateRunLinkedJob --> createJobRepository
  updateRunLinkedJob --> getById
  createMultiagentWorker --> createReadinessActions
  createMultiagentWorker --> createReadinessEngine
  createReadinessActions --> addMilliseconds
  createReadinessActions --> createEventStore
  createReadinessActions --> createInternalCommandContext
  createReadinessActions --> markRunJobBlocked
  createReadinessActions --> appendRunEvent
  createReadinessActions --> createRunDependencyRepository
  createReadinessActions --> createRunRepository
  createReadinessEngine --> resolveExecutionScopeForSession
  createReadinessEngine --> createRunDependencyRepository
  decisionKey --> firstUnskipped
  decisionKey --> matchesDecisionFilter
  decisionKey --> compareNullableAsc
  decisionKey --> compareNumberAsc
  decisionKey --> compareStringAsc
  firstUnskipped --> decisionKey
  firstUnskipped --> matchesDecisionFilter
  firstUnskipped --> compareNullableAsc
  firstUnskipped --> compareNumberAsc
  firstUnskipped --> compareStringAsc
  matchesDecisionFilter --> firstUnskipped
  matchesDecisionFilter --> compareNullableAsc
  matchesDecisionFilter --> compareNumberAsc
  matchesDecisionFilter --> compareStringAsc
  firstFilteredUnskipped --> firstUnskipped
  firstFilteredUnskipped --> matchesDecisionFilter
  firstFilteredUnskipped --> compareNullableAsc
  firstFilteredUnskipped --> compareNumberAsc
  firstFilteredUnskipped --> compareStringAsc
  firstFilteredUnskipped --> createRunDependencyRepository
  isHeartbeatPast --> compareNullableAsc
  isHeartbeatPast --> compareNumberAsc
  isHeartbeatPast --> compareStringAsc
  isHeartbeatPast --> createRunDependencyRepository
  isDue --> compareNullableAsc
  isDue --> compareNumberAsc
  isDue --> compareStringAsc
  isDue --> createRunDependencyRepository
  compareNullableAsc --> compareNumberAsc
  compareNullableAsc --> compareStringAsc
  compareNullableAsc --> createRunDependencyRepository
  compareNumberAsc --> compareNullableAsc
  compareNumberAsc --> compareStringAsc
  compareNumberAsc --> createRunDependencyRepository
  compareStringAsc --> compareNullableAsc
  compareStringAsc --> compareNumberAsc
  compareStringAsc --> createRunDependencyRepository
  compareWaitingSnapshots --> compareNullableAsc
  compareWaitingSnapshots --> compareNumberAsc
  compareWaitingSnapshots --> compareStringAsc
  compareWaitingSnapshots --> createRunDependencyRepository
  compareStaleSnapshots --> compareNullableAsc
  compareStaleSnapshots --> compareNumberAsc
  compareStaleSnapshots --> compareStringAsc
  compareStaleSnapshots --> createRunDependencyRepository
  compareReadySnapshots --> compareNullableAsc
  compareReadySnapshots --> compareNumberAsc
  compareReadySnapshots --> compareStringAsc
  compareReadySnapshots --> createRunDependencyRepository
  compareResolvedWaitSnapshots --> compareNullableAsc
  compareResolvedWaitSnapshots --> compareStringAsc
  compareResolvedWaitSnapshots --> createRunDependencyRepository
  compareTimedOutWaitSnapshots --> compareNullableAsc
  compareTimedOutWaitSnapshots --> compareStringAsc
  compareTimedOutWaitSnapshots --> resolveExecutionScopeForSession
  compareTimedOutWaitSnapshots --> createRunDependencyRepository
  rebuildRunExecutionOutput --> isRecord
  rebuildRunExecutionOutput --> toUsage
  rebuildRunExecutionOutput --> readLatestAssistantItemId
  toUsage --> isRecord
  toUsage --> readLatestAssistantItemId
  toUsage --> createItemRepository
  readLatestAssistantItemId --> isRecord
  readLatestAssistantItemId --> toUsage
  readLatestAssistantItemId --> createItemRepository
  isTerminalRunStatus --> toAlreadyTerminalCancellationConflict
  isTerminalRunStatus --> appendDomainEvent
  isTerminalRunStatus --> toRunExecutionTerminalError
  isTerminalRunStatus --> buildRunTranscriptSnapshot
  isTerminalRunStatus --> persistAssistantSnapshotMessageInTransaction
  classifyRunForCancelCommand --> isTerminalRunStatus
  classifyRunForCancelCommand --> toCancellationMetadata
  classifyRunForCancelCommand --> toAlreadyTerminalCancellationConflict
  classifyRunForCancelCommand --> appendDomainEvent
  classifyRunForCancelCommand --> toRunExecutionTerminalError
  classifyRunForCancelCommand --> buildRunTranscriptSnapshot
  classifyRunForCancelCommand --> persistAssistantSnapshotMessageInTransaction
  classifyRunForCancelRecovery --> toCancellationMetadata
  classifyRunForCancelRecovery --> resolveRunEventThreadId
  classifyRunForCancelRecovery --> appendDomainEvent
  classifyRunForCancelRecovery --> toRunExecutionTerminalError
  classifyRunForCancelRecovery --> buildRunTranscriptSnapshot
  classifyRunForCancelRecovery --> persistAssistantSnapshotMessageInTransaction
  cancelRunSubtree --> createEventStore
  cancelRunSubtree --> isTerminalRunStatus
  cancelRunSubtree --> commitRunCancelledState
  cancelRunSubtree --> requestRunCancellation
  cancelRunSubtree --> cancelPendingWaits
  cancelRunSubtree --> failIncompleteToolExecutions
  cancelRunSubtree --> createRunDependencyRepository
  cancelRunSubtree --> createRunRepository
  cancelRunSubtree --> createToolExecutionRepository
  cancelRunSubtree --> getById
  finalizeRunCancellation --> createEventStore
  finalizeRunCancellation --> commitRunCancelledState
  finalizeRunCancellation --> cancelPendingWaits
  finalizeRunCancellation --> failIncompleteToolExecutions
  finalizeRunCancellation --> createRunDependencyRepository
  finalizeRunCancellation --> createRunRepository
  finalizeRunCancellation --> createToolExecutionRepository
  finalizeRunCancellation --> getById
  toCancellationMetadata --> isTerminalRunStatus
  toCancellationMetadata --> toAlreadyTerminalCancellationConflict
  toCancellationMetadata --> appendDomainEvent
  toCancellationMetadata --> toRunExecutionTerminalError
  toCancellationMetadata --> buildRunTranscriptSnapshot
  toCancellationMetadata --> persistAssistantSnapshotMessageInTransaction
  toAlreadyTerminalCancellationConflict --> isTerminalRunStatus
  toAlreadyTerminalCancellationConflict --> toCancellationMetadata
  toAlreadyTerminalCancellationConflict --> appendDomainEvent
  toAlreadyTerminalCancellationConflict --> toRunExecutionTerminalError
  toAlreadyTerminalCancellationConflict --> buildRunTranscriptSnapshot
  toAlreadyTerminalCancellationConflict --> persistAssistantSnapshotMessageInTransaction
  commitRunCancelledState --> markRunJobCancelled
  commitRunCancelledState --> toCancellationMetadata
  commitRunCancelledState --> resolveRunEventThreadId
  commitRunCancelledState --> appendDomainEvent
  commitRunCancelledState --> buildRunTranscriptSnapshot
  commitRunCancelledState --> persistAssistantSnapshotMessageInTransaction
  requestRunCancellation --> toCancellationMetadata
  requestRunCancellation --> resolveRunEventThreadId
  cancelPendingWaits --> resolveRunEventThreadId
  failIncompleteToolExecutions --> isTerminalRunStatus
  failIncompleteToolExecutions --> cancelRunSubtree
  failIncompleteToolExecutions --> requestRunCancellation
  failIncompleteToolExecutions --> cancelPendingWaits
  failIncompleteToolExecutions --> resolveRunEventThreadId
  recoverExecuteRunOutput --> readAuthorizedRun
  recoverExecuteRunOutput --> rebuildDurableRunOutput
  recoverExecuteRunOutput --> createRunDependencyRepository
  recoverExecuteRunOutput --> getById
  recoverResumeRunOutput --> classifyRunForCancelRecovery
  recoverResumeRunOutput --> readAuthorizedRun
  recoverResumeRunOutput --> rebuildDurableRunOutput
  recoverResumeRunOutput --> createRunDependencyRepository
  recoverResumeRunOutput --> getById
  recoverCancelRunOutput --> classifyRunForCancelRecovery
  recoverCancelRunOutput --> readAuthorizedRun
  delay --> createResourceAccessService
  delay --> rebuildRunExecutionOutput
  delay --> toRecoveryDeadline
  delay --> readAuthorizedRun
  delay --> rebuildDurableRunOutput
  delay --> createRunDependencyRepository
  delay --> toRunExecutionTerminalError
  delay --> createRunRepository
  delay --> getById
  toRecoveryDeadline --> createResourceAccessService
  toRecoveryDeadline --> rebuildRunExecutionOutput
  toRecoveryDeadline --> delay
  toRecoveryDeadline --> readAuthorizedRun
  toRecoveryDeadline --> rebuildDurableRunOutput
  toRecoveryDeadline --> createRunDependencyRepository
  readAuthorizedRun --> createResourceAccessService
  readAuthorizedRun --> rebuildRunExecutionOutput
  readAuthorizedRun --> delay
  readAuthorizedRun --> toRecoveryDeadline
  readAuthorizedRun --> rebuildDurableRunOutput
  readAuthorizedRun --> createRunDependencyRepository
  rebuildDurableRunOutput --> rebuildRunExecutionOutput
  rebuildDurableRunOutput --> delay
  rebuildDurableRunOutput --> toRecoveryDeadline
  rebuildDurableRunOutput --> readAuthorizedRun
  rebuildDurableRunOutput --> createRunDependencyRepository
  rebuildDurableRunOutput --> getById
  assertRunSnapshotCurrent --> createRunRepository
  assertRunSnapshotCurrent --> getById
  resolveRunEventThreadId --> createRunEventPayload
  resolveRunEventThreadId --> appendDomainEvent
  resolveRunEventThreadId --> readRunEventThreadId
  createRunEventPayload --> resolveRunEventThreadId
  createRunEventPayload --> appendDomainEvent
  appendDomainEvent --> createRunEventPayload
  appendRunEvent --> createRunEventPayload
  appendRunEvent --> appendDomainEvent
  readRunEventThreadId --> resolveRunEventThreadId
  readRunEventThreadId --> createRunEventPayload
  readRunEventThreadId --> appendDomainEvent
  toRunExecutionTerminalError --> rebuildRunExecutionOutput
  toRunExecutionTerminalError --> delay
  toRunExecutionTerminalError --> createRunRepository
  toRunExecutionTerminalError --> getById
  convergeRunExecutionConflict --> rebuildRunExecutionOutput
  convergeRunExecutionConflict --> delay
  convergeRunExecutionConflict --> toRunExecutionTerminalError
  convergeRunExecutionConflict --> createRunDependencyRepository
  convergeRunExecutionConflict --> createRunRepository
  convergeRunExecutionConflict --> getById
  waitForRunToReachDurableState --> rebuildRunExecutionOutput
  waitForRunToReachDurableState --> delay
  waitForRunToReachDurableState --> toRunExecutionTerminalError
  waitForRunToReachDurableState --> createRunDependencyRepository
  waitForRunToReachDurableState --> createRunRepository
  waitForRunToReachDurableState --> getById
  streamRunInteraction --> emitProgressReported
  streamRunInteraction --> emitTurnStarted
  streamRunInteraction --> emitGenerationStarted
  streamRunInteraction --> emitGenerationFailed
  streamRunInteraction --> emitReasoningSummaryDelta
  streamRunInteraction --> emitReasoningSummaryDone
  streamRunInteraction --> emitStreamDelta
  backfillIncompleteGoogleStreamResponse --> normalizeAssistantOutputText
  backfillIncompleteGoogleStreamResponse --> emitProgressReported
  backfillIncompleteGoogleStreamResponse --> emitTurnStarted
  backfillIncompleteGoogleStreamResponse --> emitGenerationStarted
  backfillIncompleteGoogleStreamResponse --> emitGenerationFailed
  buildRunTranscriptSnapshot --> isRecord
  buildRunTranscriptSnapshot --> listRunTranscriptEvents
  buildRunTranscriptSnapshot --> buildOutputTextFromTranscriptEvents
  buildRunTranscriptSnapshot --> readRunOutputText
  buildRunTranscriptSnapshot --> readRunTranscriptMetadata
  buildRunTranscriptSnapshot --> readRunSnapshotMetadata
  buildRunTranscriptSnapshot --> buildAssistantTranscriptMetadata
  buildRunTranscriptSnapshot --> createSessionMessageRepository
  persistAssistantSnapshotMessageInTransaction --> isRecord
  persistAssistantSnapshotMessageInTransaction --> readRunSnapshotMetadata
  persistAssistantSnapshotMessageInTransaction --> collectAssistantTranscriptBlocks
  persistAssistantSnapshotMessageInTransaction --> createSessionMessageRepository
  persistUsageEntry --> assertRunSnapshotCurrent
  persistUsageEntry --> toPersistenceFailure
  persistUsageEntry --> getPersistedOutputItems
  persistUsageEntry --> persistUsageEntryInTransaction
  persistUsageEntry --> persistOutputItemsInTransaction
  persistUsageEntry --> createUsageLedgerRepository
  persistUsageEntry --> createItemRepository
  persistOutputItems --> assertRunSnapshotCurrent
  persistOutputItems --> toPersistenceFailure
  persistOutputItems --> getPersistedOutputItems
  persistOutputItems --> persistOutputItemsInTransaction
  persistOutputItems --> createItemRepository
  persistOutputItems --> createMessage
  completeRunWithAssistantMessage --> createEventStore
  completeRunWithAssistantMessage --> normalizeAssistantMessageContent
  completeRunWithAssistantMessage --> normalizeAssistantOutputText
  completeRunWithAssistantMessage --> appendDomainEvent
  completeRunWithAssistantMessage --> buildAssistantTranscriptMetadata
  completeRunWithAssistantMessage --> persistUsageEntryInTransaction
  completeRunWithAssistantMessage --> persistOutputItemsInTransaction
  completeRunWithAssistantMessage --> createRunRepository
  completeRunWithAssistantMessage --> createSessionMessageRepository
  markRunWaiting --> createEventStore
  markRunWaiting --> markLinkedJobWaiting
  markRunWaiting --> appendRunEvent
  markRunWaiting --> toPersistenceFailure
  markRunWaiting --> buildAssistantTranscriptMetadata
  markRunWaiting --> compactRunContextAtBoundary
  markRunWaiting --> createRunDependencyRepository
  markRunWaiting --> createRunRepository
  refreshWaitingRunSnapshot --> isRecord
  refreshWaitingRunSnapshot --> createEventStore
  refreshWaitingRunSnapshot --> markLinkedJobWaiting
  refreshWaitingRunSnapshot --> appendRunEvent
  refreshWaitingRunSnapshot --> readRunOutputText
  refreshWaitingRunSnapshot --> buildAssistantTranscriptMetadata
  refreshWaitingRunSnapshot --> createRunDependencyRepository
  refreshWaitingRunSnapshot --> createRunRepository
  failRun --> createEventStore
  failRun --> markRunJobBlocked
  failRun --> appendRunEvent
  failRun --> buildRunTranscriptSnapshot
  failRun --> toPersistenceFailure
  failRun --> emitProgressReported
  failRun --> createRunRepository
  toPersistedAppsMeta --> dedupeWebReferences
  toStringArray --> dedupeWebReferences
  toStringArray --> createDomainEventRepository
  toPersistedWebReferences --> dedupeWebReferences
  toPersistedWebReferences --> createDomainEventRepository
  toPersistedWebSearchStatus --> isRecord
  toPersistedWebSearchStatus --> createDomainEventRepository
  mergePersistedWebSearchStatus --> isRecord
  mergePersistedWebSearchStatus --> createDomainEventRepository
  listRunTranscriptEvents --> isRecord
  listRunTranscriptEvents --> createDomainEventRepository
  buildOutputTextFromTranscriptEvents --> isRecord
  compareTranscriptBlockOrder --> isRecord
  compareTranscriptBlockOrder --> listRunTranscriptEvents
  compareTranscriptBlockOrder --> createRunRepository
  readRunOutputText --> isRecord
  readRunOutputText --> listRunTranscriptEvents
  readRunOutputText --> createRunRepository
  readRunTranscriptMetadata --> isRecord
  readRunTranscriptMetadata --> listRunTranscriptEvents
  readRunTranscriptMetadata --> createRunRepository
  readRunSnapshotMetadata --> isRecord
  readRunSnapshotMetadata --> listRunTranscriptEvents
  readRunSnapshotMetadata --> createRunRepository
  collectAssistantTranscriptBlocks --> listRunTranscriptEvents
  collectAssistantTranscriptBlocks --> createRunRepository
  buildAssistantTranscriptMetadata --> maybeCompactMainThreadContext
  buildAssistantTranscriptMetadata --> toPersistenceFailure
  buildAssistantTranscriptMetadata --> collectAssistantTranscriptBlocks
  buildAssistantTranscriptMetadata --> persistUsageEntryInTransaction
  buildAssistantTranscriptMetadata --> createItemRepository
  buildAssistantTranscriptMetadata --> createRunDependencyRepository
  getPersistedOutputItems --> maybeCompactMainThreadContext
  getPersistedOutputItems --> assertRunSnapshotCurrent
  getPersistedOutputItems --> toPersistenceFailure
  getPersistedOutputItems --> persistUsageEntryInTransaction
  getPersistedOutputItems --> createUsageLedgerRepository
  getPersistedOutputItems --> createItemRepository
  getPersistedOutputItems --> createRunDependencyRepository
  compactRunContextAtBoundary --> maybeCompactMainThreadContext
  compactRunContextAtBoundary --> assertRunSnapshotCurrent
  compactRunContextAtBoundary --> toPersistenceFailure
  compactRunContextAtBoundary --> persistUsageEntryInTransaction
  compactRunContextAtBoundary --> persistOutputItemsInTransaction
  compactRunContextAtBoundary --> createUsageLedgerRepository
  compactRunContextAtBoundary --> createItemRepository
  compactRunContextAtBoundary --> createRunDependencyRepository
  persistUsageEntryInTransaction --> assertRunSnapshotCurrent
  persistUsageEntryInTransaction --> toPersistenceFailure
  persistUsageEntryInTransaction --> getPersistedOutputItems
  persistUsageEntryInTransaction --> persistOutputItemsInTransaction
  persistUsageEntryInTransaction --> createUsageLedgerRepository
  persistUsageEntryInTransaction --> createItemRepository
  persistUsageEntryInTransaction --> createMessage
  persistOutputItemsInTransaction --> assertRunSnapshotCurrent
  persistOutputItemsInTransaction --> getPersistedOutputItems
  persistOutputItemsInTransaction --> createItemRepository
  persistOutputItemsInTransaction --> createMessage
  toProjectedItemRole --> isRecord
  toProjectedItemRole --> readProjectedProviderPayload
  toProjectedItemRole --> readProjectedSessionMessageId
  toProjectedItemRole --> readResponseId
  toProjectedItemRole --> createItemRepository
  projectVisibleMessagesToRunItems --> toProjectedItemRole
  projectVisibleMessagesToRunItems --> readProjectedSessionMessageId
  projectVisibleMessagesToRunItems --> readResponseId
  projectVisibleMessagesToRunItems --> createItemRepository
  listVisibleMessages --> projectVisibleMessagesToRunItems
  listVisibleMessages --> listRunItems
  listVisibleMessages --> isProjectionOnlyThreadContext
  listVisibleMessages --> createItemRepository
  listVisibleMessages --> createSessionMessageRepository
  listRunItems --> projectVisibleMessagesToRunItems
  listRunItems --> isProjectionOnlyThreadContext
  listRunItems --> createItemRepository
  ensureProjectedThreadContext --> projectVisibleMessagesToRunItems
  ensureProjectedThreadContext --> listRunItems
  ensureProjectedThreadContext --> isProjectionOnlyThreadContext
  readProjectedProviderPayload --> isRecord
  readProjectedProviderPayload --> toProjectedItemRole
  readProjectedProviderPayload --> readProjectedSessionMessageId
  readProjectedProviderPayload --> readResponseId
  readProjectedProviderPayload --> createItemRepository
  readProjectedSessionMessageId --> toProjectedItemRole
  readProjectedSessionMessageId --> readProjectedProviderPayload
  readProjectedSessionMessageId --> readResponseId
  readProjectedSessionMessageId --> createItemRepository
  readResponseId --> toProjectedItemRole
  readResponseId --> readProjectedProviderPayload
  readResponseId --> readProjectedSessionMessageId
  readResponseId --> createItemRepository
  isProjectionOnlyThreadContext --> toProjectedItemRole
  isProjectionOnlyThreadContext --> readProjectedSessionMessageId
  isProjectionOnlyThreadContext --> readResponseId
  isProjectionOnlyThreadContext --> createItemRepository
  tryAppendRunTelemetryEvent --> toStructuredMessages
  tryAppendRunTelemetryEvent --> toGenerationModelParameters
  tryAppendRunTelemetryEvent --> createEventStore
  tryAppendRunTelemetryEvent --> createRunEventPayload
  tryAppendRunTelemetryEvent --> warnTelemetryDrop
  tryAppendRunTelemetryEvent --> toStructuredToolDefinitions
  emitProgressReported --> toStructuredMessages
  emitProgressReported --> toGenerationModelParameters
  emitProgressReported --> tryAppendRunTelemetryEvent
  emitProgressReported --> toStructuredToolDefinitions
  emitProgressReported --> toStructuredOutputItems
  emitTurnStarted --> toStructuredMessages
  emitTurnStarted --> toGenerationModelParameters
  emitTurnStarted --> tryAppendRunTelemetryEvent
  emitTurnStarted --> toStructuredToolDefinitions
  emitTurnStarted --> toStructuredToolCalls
  emitTurnStarted --> toStructuredOutputItems
  emitTurnCompleted --> toStructuredMessages
  emitTurnCompleted --> toGenerationModelParameters
  emitTurnCompleted --> tryAppendRunTelemetryEvent
  emitTurnCompleted --> toStructuredToolDefinitions
  emitTurnCompleted --> toStructuredToolCalls
  emitTurnCompleted --> toStructuredOutputItems
  emitGenerationStarted --> toStructuredMessages
  emitGenerationStarted --> toGenerationModelParameters
  emitGenerationStarted --> tryAppendRunTelemetryEvent
  emitGenerationStarted --> toStructuredToolDefinitions
  emitGenerationStarted --> toStructuredToolCalls
  emitGenerationStarted --> toStructuredOutputItems
  emitGenerationCompleted --> toStructuredMessages
  emitGenerationCompleted --> tryAppendRunTelemetryEvent
  emitGenerationCompleted --> toStructuredToolCalls
  emitGenerationCompleted --> toStructuredOutputItems
  emitGenerationFailed --> tryAppendRunTelemetryEvent
  emitReasoningSummaryDelta --> tryAppendRunTelemetryEvent
  emitReasoningSummaryDone --> tryAppendRunTelemetryEvent
  emitStreamDelta --> tryAppendRunTelemetryEvent
  emitStreamDone --> tryAppendRunTelemetryEvent
  emitWebSearchProgress --> tryAppendRunTelemetryEvent
  toStructuredOutputItems --> createEventStore
  toStructuredOutputItems --> createRunEventPayload
  toStructuredOutputItems --> warnTelemetryDrop
  toToolContext --> isToolAllowedForRun
  toToolContext --> toCancellationError
  prepareToolExecution --> isToolAllowedForRun
  prepareToolExecution --> toToolContext
  prepareToolExecution --> toCancellationError
  executeOneToolCall --> isToolAllowedForRun
  executeOneToolCall --> createEventStore
  executeOneToolCall --> assertRunSnapshotCurrent
  executeOneToolCall --> resolveRunEventThreadId
  executeOneToolCall --> appendDomainEvent
  executeOneToolCall --> toToolContext
  executeOneToolCall --> toCancellationError
  executeOneToolCall --> getToolAppsMetaPayload
  executeOneToolCall --> createToolExecutionRepository
  persistToolCalledEvents --> createEventStore
  persistToolCalledEvents --> toToolArgs
  persistToolCalledEvents --> assertRunSnapshotCurrent
  persistToolCalledEvents --> resolveRunEventThreadId
  persistToolCalledEvents --> appendDomainEvent
  persistToolCalledEvents --> getToolAppsMetaPayload
  persistToolCalledEvents --> createItemRepository
  persistToolCalledEvents --> createRunDependencyRepository
  persistToolCalledEvents --> createToolExecutionRepository
  persistToolOutcomes --> createEventStore
  persistToolOutcomes --> assertRunSnapshotCurrent
  persistToolOutcomes --> resolveRunEventThreadId
  persistToolOutcomes --> appendDomainEvent
  persistToolOutcomes --> serializeToolOutput
  persistToolOutcomes --> toToolErrorOutput
  persistToolOutcomes --> toDurationMs
  persistToolOutcomes --> getToolAppsMetaPayload
  persistToolOutcomes --> createItemRepository
  persistToolOutcomes --> createRunDependencyRepository
  persistToolOutcomes --> createToolExecutionRepository
  serializeToolOutput --> isToolAllowedForRun
  serializeToolOutput --> toToolContext
  serializeToolOutput --> toCancellationError
  serializeToolOutput --> toConflictError
  serializeToolOutput --> toChildRunReplayOutput
  toToolErrorOutput --> isToolAllowedForRun
  toToolErrorOutput --> createEventStore
  toToolErrorOutput --> assertRunSnapshotCurrent
  toToolErrorOutput --> resolveRunEventThreadId
  toToolErrorOutput --> toToolContext
  toToolErrorOutput --> toCancellationError
  toToolErrorOutput --> createToolExecutionRepository
  toToolErrorOutput --> toToolArgs
  toToolErrorOutput --> requiresApprovalForWait
  toToolErrorOutput --> toChildRunResultKind
  toToolErrorOutput --> isConfirmationWait
  toDurationMs --> isToolAllowedForRun
  toDurationMs --> createEventStore
  toDurationMs --> assertRunSnapshotCurrent
  toDurationMs --> resolveRunEventThreadId
  toDurationMs --> toToolContext
  toDurationMs --> toCancellationError
  toDurationMs --> getToolAppsMetaPayload
  toDurationMs --> createToolExecutionRepository
  toCancellationError --> isToolAllowedForRun
  toCancellationError --> createEventStore
  toCancellationError --> assertRunSnapshotCurrent
  toCancellationError --> resolveRunEventThreadId
  toCancellationError --> toToolContext
  toCancellationError --> getToolAppsMetaPayload
  toCancellationError --> createToolExecutionRepository
  resolveRunWait --> createResourceAccessService
  resolveRunWait --> toConfigSnapshot
  resolveRunWait --> requiresApprovalForWait
  resolveRunWait --> resolveRunEventThreadId
  resolveRunWait --> requireMembership
  resolveRunWait --> createRunDependencyRepository
  resolveRunWait --> createRunRepository
  resolveRunWait --> createToolExecutionRepository
  resolveRunWait --> getById
  resolveRunWait --> createTenantMembershipRepository
  toToolFailure --> toConflictError
  toToolFailure --> toToolArgs
  toToolFailure --> isConfirmationWait
  toToolFailure --> toChildRunReplayOutput
  toPersistedWaitOutput --> toToolArgs
  toPersistedWaitOutput --> requiresApprovalForWait
  toPersistedWaitOutput --> isConfirmationWait
  toPersistedWaitOutput --> toChildRunReplayOutput
  toChildRunResultKind --> toToolArgs
  toChildRunResultKind --> requiresApprovalForWait
  toChildRunResultKind --> isConfirmationWait
  toChildRunSummary --> toToolArgs
  toChildRunSummary --> requiresApprovalForWait
  toChildRunSummary --> toChildRunResultKind
  toChildRunSummary --> isConfirmationWait
  isConfirmationWait --> toToolArgs
  isConfirmationWait --> requiresApprovalForWait
  isConfirmationWait --> resolveRunEventThreadId
  isConfirmationWait --> toChildRunResultKind
  isConfirmationWait --> toChildRunSummary
  isConfirmationWait --> toPendingWaitSummary
  isConfirmationWait --> createRunDependencyRepository
  isConfirmationWait --> createToolExecutionRepository
  isConfirmationWait --> getById
  toPendingWaitSummary --> toToolArgs
  toPendingWaitSummary --> requiresApprovalForWait
  toPendingWaitSummary --> resolveRunEventThreadId
  toPendingWaitSummary --> toChildRunResultKind
  toPendingWaitSummary --> toChildRunSummary
  toPendingWaitSummary --> loadPendingWaitSummaries
  toPendingWaitSummary --> createRunDependencyRepository
  toPendingWaitSummary --> createToolExecutionRepository
  toPendingWaitSummary --> getById
  appendChildRunCompletedEvent --> resolveRunEventThreadId
  appendChildRunCompletedEvent --> refreshWaitingRunSnapshot
  appendChildRunCompletedEvent --> toChildRunResultKind
  appendChildRunCompletedEvent --> toChildRunSummary
  appendChildRunCompletedEvent --> toPendingWaitSummary
  appendChildRunCompletedEvent --> loadPendingWaitSummaries
  appendChildRunCompletedEvent --> createRunDependencyRepository
  appendChildRunCompletedEvent --> createToolExecutionRepository
  appendChildRunCompletedEvent --> getById
  loadPendingWaitSummaries --> createResourceAccessService
  loadPendingWaitSummaries --> toConfigSnapshot
  loadPendingWaitSummaries --> refreshWaitingRunSnapshot
  loadPendingWaitSummaries --> toPendingWaitSummary
  loadPendingWaitSummaries --> requireMembership
  loadPendingWaitSummaries --> createRunDependencyRepository
  loadPendingWaitSummaries --> createRunRepository
  loadPendingWaitSummaries --> createToolExecutionRepository
  loadPendingWaitSummaries --> getById
  loadPendingWaitSummaries --> createTenantMembershipRepository
  resumeOrStayWaiting --> createResourceAccessService
  resumeOrStayWaiting --> toConfigSnapshot
  resumeOrStayWaiting --> resolveRunEventThreadId
  resumeOrStayWaiting --> refreshWaitingRunSnapshot
  resumeOrStayWaiting --> loadPendingWaitSummaries
  resumeOrStayWaiting --> requireMembership
  resumeOrStayWaiting --> createRunDependencyRepository
  resumeOrStayWaiting --> createRunRepository
  resumeOrStayWaiting --> getById
  resumeOrStayWaiting --> createTenantMembershipRepository
  compareThreadActivityReadModels --> loadThreadRootJobReadModel
  compareThreadActivityReadModels --> isCompletedWithinWindow
  compareThreadActivityReadModels --> loadCurrentRun
  compareThreadActivityReadModels --> loadPendingWaits
  compareThreadActivityReadModels --> resolvePendingWaitState
  compareThreadActivityReadModels --> toActivityReadModel
  loadThreadActivityReadModel --> loadThreadRootJobReadModel
  loadThreadActivityReadModel --> isCompletedWithinWindow
  loadThreadActivityReadModel --> loadCurrentRun
  loadThreadActivityReadModel --> loadPendingWaits
  loadThreadActivityReadModel --> resolvePendingWaitState
  loadThreadActivityReadModel --> toActivityReadModel
  toEpochMs --> requiresApprovalForWait
  toEpochMs --> createRunDependencyRepository
  toEpochMs --> createRunRepository
  toEpochMs --> createToolExecutionRepository
  toEpochMs --> getById
  isCompletedWithinWindow --> requiresApprovalForWait
  isCompletedWithinWindow --> loadThreadRootJobReadModel
  isCompletedWithinWindow --> toEpochMs
  isCompletedWithinWindow --> loadCurrentRun
  isCompletedWithinWindow --> createRunDependencyRepository
  isCompletedWithinWindow --> createRunRepository
  isCompletedWithinWindow --> createToolExecutionRepository
  isCompletedWithinWindow --> getById
  loadCurrentRun --> requiresApprovalForWait
  loadCurrentRun --> loadThreadRootJobReadModel
  loadCurrentRun --> loadPendingWaits
  loadCurrentRun --> resolvePendingWaitState
  loadCurrentRun --> toActivityReadModel
  loadCurrentRun --> createRunDependencyRepository
  loadCurrentRun --> createRunRepository
  loadCurrentRun --> createToolExecutionRepository
  loadCurrentRun --> getById
  loadPendingWaits --> requiresApprovalForWait
  loadPendingWaits --> loadThreadRootJobReadModel
  loadPendingWaits --> loadCurrentRun
  loadPendingWaits --> resolvePendingWaitState
  loadPendingWaits --> toActivityReadModel
  loadPendingWaits --> createRunDependencyRepository
  loadPendingWaits --> createToolExecutionRepository
  loadPendingWaits --> getById
  resolvePendingWaitState --> requiresApprovalForWait
  resolvePendingWaitState --> loadThreadRootJobReadModel
  resolvePendingWaitState --> isCompletedWithinWindow
  resolvePendingWaitState --> loadCurrentRun
  resolvePendingWaitState --> loadPendingWaits
  resolvePendingWaitState --> toActivityReadModel
  resolvePendingWaitState --> createToolExecutionRepository
  resolvePendingWaitState --> getById
  toActivityReadModel --> loadThreadRootJobReadModel
  toActivityReadModel --> isCompletedWithinWindow
  toActivityReadModel --> loadCurrentRun
  toActivityReadModel --> loadPendingWaits
  toActivityReadModel --> resolvePendingWaitState
  getToolAppsMetaPayload --> extractOutputAppsMeta
  extractOutputAppsMeta --> isRecord
  resolveContextWindowForModel --> getReasoningModesForTarget
  buildModelsCatalog --> resolveContextWindowForModel
  buildModelsCatalog --> getReasoningModesForTarget
  getReasoningModesForTarget --> resolveContextWindowForModel
  listObservabilityQuarantine --> createEventOutboxRepository
  replayObservabilityQuarantineEntry --> createEventOutboxRepository
  toPayloadIdentity --> isRecord
  toPayloadIdentity --> asString
  toPayloadIdentity --> createEventOutboxRepository
  toQuarantineEntry --> toPayloadIdentity
  toQuarantineEntry --> createEventOutboxRepository
  replayObservabilityRun --> collectLatestTerminalRootRunEvents
  replayObservabilityRun --> enqueueReplayEntries
  replayObservabilityRun --> createDomainEventRepository
  replayObservabilityRun --> createRunRepository
  replayObservabilityRun --> getById
  replayObservabilityRun --> createWorkSessionRepository
  replayObservabilitySession --> collectLatestTerminalRootRunEvents
  replayObservabilitySession --> enqueueReplayEntries
  replayObservabilitySession --> createDomainEventRepository
  replayObservabilitySession --> getById
  replayObservabilitySession --> createWorkSessionRepository
  findTerminalRootRunId --> isRecord
  findTerminalRootRunId --> asString
  findTerminalRootRunId --> collectLatestTerminalRootRunEvents
  findTerminalRootRunId --> createDomainEventRepository
  findTerminalRootRunId --> createEventOutboxRepository
  findTerminalRootRunId --> createRunRepository
  findTerminalRootRunId --> getById
  collectLatestTerminalRootRunEvents --> findTerminalRootRunId
  collectLatestTerminalRootRunEvents --> enqueueReplayEntries
  collectLatestTerminalRootRunEvents --> createDomainEventRepository
  collectLatestTerminalRootRunEvents --> createEventOutboxRepository
  collectLatestTerminalRootRunEvents --> createRunRepository
  collectLatestTerminalRootRunEvents --> getById
  enqueueReplayEntries --> collectLatestTerminalRootRunEvents
  enqueueReplayEntries --> createDomainEventRepository
  enqueueReplayEntries --> createEventOutboxRepository
  enqueueReplayEntries --> createRunRepository
  enqueueReplayEntries --> getById
  enqueueReplayEntries --> createWorkSessionRepository
  buildObservabilityStatus --> resolveWorkerTarget
  buildObservabilityStatus --> emptyTopicStatus
  buildObservabilityStatus --> createEventOutboxRepository
  resolveWorkerTarget --> minIsoTimestamp
  minIsoTimestamp --> resolveWorkerTarget
  mergeRetryBuckets --> resolveWorkerTarget
  mergeRetryBuckets --> minIsoTimestamp
  emptyTopicStatus --> resolveWorkerTarget
  emptyTopicStatus --> minIsoTimestamp
  emptyTopicStatus --> mergeRetryBuckets
  emptyTopicStatus --> createEventOutboxRepository
  toWorkerStatuses --> minIsoTimestamp
  toWorkerStatuses --> mergeRetryBuckets
  toWorkerStatuses --> createEventOutboxRepository
  canReadToolProfile --> canViewToolProfile
  parseCreateToolProfileInput --> canViewToolProfile
  parseCreateToolProfileInput --> canWriteToolProfiles
  parseCreateToolProfileInput --> toToolProfileSummary
  parseCreateToolProfileInput --> requireMembership
  parseCreateToolProfileInput --> getById
  parseCreateToolProfileInput --> createTenantMembershipRepository
  parseCreateToolProfileInput --> createToolProfileRepository
  parseUpdateToolProfileInput --> canViewToolProfile
  parseUpdateToolProfileInput --> canWriteToolProfiles
  parseUpdateToolProfileInput --> toToolProfileSummary
  parseUpdateToolProfileInput --> requireMembership
  parseUpdateToolProfileInput --> getById
  parseUpdateToolProfileInput --> createTenantMembershipRepository
  parseUpdateToolProfileInput --> createToolProfileRepository
  createToolProfileService --> canViewToolProfile
  createToolProfileService --> canWriteToolProfiles
  createToolProfileService --> canEditToolProfile
  createToolProfileService --> toToolProfileSummary
  createToolProfileService --> requireMembership
  createToolProfileService --> getById
  createToolProfileService --> createToolProfileRepository
  canWriteToolProfiles --> canViewToolProfile
  canWriteToolProfiles --> toToolProfileSummary
  canWriteToolProfiles --> requireMembership
  canWriteToolProfiles --> getById
  canWriteToolProfiles --> createTenantMembershipRepository
  canWriteToolProfiles --> createToolProfileRepository
  canEditToolProfile --> canViewToolProfile
  canEditToolProfile --> canWriteToolProfiles
  canEditToolProfile --> toToolProfileSummary
  canEditToolProfile --> requireMembership
  canEditToolProfile --> getById
  canEditToolProfile --> createTenantMembershipRepository
  canEditToolProfile --> createToolProfileRepository
  toToolProfileSummary --> canViewToolProfile
  toToolProfileSummary --> canWriteToolProfiles
  toToolProfileSummary --> requireMembership
  toToolProfileSummary --> getById
  toToolProfileSummary --> createTenantMembershipRepository
  toToolProfileSummary --> createToolProfileRepository
  requireMembership --> canViewToolProfile
  requireMembership --> canWriteToolProfiles
  requireMembership --> canEditToolProfile
  requireMembership --> toToolProfileSummary
  requireMembership --> getById
  requireMembership --> createTenantMembershipRepository
  requireMembership --> createToolProfileRepository
  appendWorkspaceLifecycleEvents --> toPayload
  createWorkspaceService --> toWorkspaceBaseRoot
  createWorkspaceService --> toWorkspaceRootRef
  createWorkspaceService --> ensureWorkspaceDirectories
  createWorkspaceService --> createWorkspaceRepository
  ensureDirectory --> toWorkspaceBaseRoot
  ensureDirectory --> toWorkspaceRootRef
  ensureDirectory --> toAgentsRef
  ensureDirectory --> toVaultRef
  ensureDirectory --> ensureWorkspaceDirectories
  ensureDirectory --> createWorkspaceRepository
  toWorkspaceBaseRoot --> ensureDirectory
  toWorkspaceBaseRoot --> toWorkspaceRootRef
  toWorkspaceBaseRoot --> toAgentsRef
  toWorkspaceBaseRoot --> toVaultRef
  toWorkspaceBaseRoot --> ensureWorkspaceDirectories
  toWorkspaceBaseRoot --> createWorkspaceRepository
  toWorkspaceRootRef --> ensureDirectory
  toWorkspaceRootRef --> toWorkspaceBaseRoot
  toWorkspaceRootRef --> toAgentsRef
  toWorkspaceRootRef --> toVaultRef
  toWorkspaceRootRef --> ensureWorkspaceDirectories
  toWorkspaceRootRef --> createWorkspaceRepository
  toAgentsRef --> ensureDirectory
  toAgentsRef --> toWorkspaceBaseRoot
  toAgentsRef --> toWorkspaceRootRef
  toAgentsRef --> toVaultRef
  toAgentsRef --> ensureWorkspaceDirectories
  toAgentsRef --> createWorkspaceRepository
  toVaultRef --> ensureDirectory
  toVaultRef --> toWorkspaceBaseRoot
  toVaultRef --> toWorkspaceRootRef
  toVaultRef --> toAgentsRef
  toVaultRef --> ensureWorkspaceDirectories
  toVaultRef --> createWorkspaceRepository
  toAttachmentsRef --> ensureDirectory
  toAttachmentsRef --> toWorkspaceBaseRoot
  toAttachmentsRef --> toWorkspaceRootRef
  toAttachmentsRef --> toAgentsRef
  toAttachmentsRef --> toVaultRef
  toAttachmentsRef --> ensureWorkspaceDirectories
  toAttachmentsRef --> createWorkspaceRepository
  toSessionRef --> ensureDirectory
  toSessionRef --> toWorkspaceBaseRoot
  toSessionRef --> toWorkspaceRootRef
  toSessionRef --> toAgentsRef
  toSessionRef --> toVaultRef
  toSessionRef --> ensureWorkspaceDirectories
  toSessionRef --> createWorkspaceRepository
  toRunRef --> ensureDirectory
  toRunRef --> toWorkspaceBaseRoot
  toRunRef --> toWorkspaceRootRef
  toRunRef --> toAgentsRef
  toRunRef --> toVaultRef
  toRunRef --> ensureWorkspaceDirectories
  toRunRef --> createWorkspaceRepository
  ensureWorkspaceDirectories --> ensureDirectory
  ensureWorkspaceDirectories --> toWorkspaceBaseRoot
  ensureWorkspaceDirectories --> toWorkspaceRootRef
  ensureWorkspaceDirectories --> toAgentsRef
  ensureWorkspaceDirectories --> toVaultRef
  ensureWorkspaceDirectories --> createWorkspaceRepository
  createDatabaseClient --> applyPragmas
  createDatabaseClient --> ensureMigrationJournal
  createDatabaseClient --> openSqliteDatabase
  createDatabaseClient --> migrateSqliteDatabase
  applyPragmas --> ensureMigrationJournal
  applyPragmas --> openSqliteDatabase
  applyPragmas --> migrateSqliteDatabase
  ensureMigrationJournal --> getUserTableNames
  ensureMigrationJournal --> resolveLegacyBaselineTag
  ensureMigrationJournal --> readMigrationJournal
  ensureMigrationJournal --> readMigrationHash
  ensureMigrationJournal --> createMigrationsTable
  getUserTableNames --> matchesTableSet
  getUserTableNames --> hasSchemaObject
  getUserTableNames --> resolveLegacyBaselineTag
  getUserTableNames --> readMigrationJournal
  matchesTableSet --> getUserTableNames
  matchesTableSet --> hasSchemaObject
  matchesTableSet --> resolveLegacyBaselineTag
  matchesTableSet --> readMigrationJournal
  matchesTableSet --> createMigrationsTable
  hasSchemaObject --> getUserTableNames
  hasSchemaObject --> matchesTableSet
  hasSchemaObject --> resolveLegacyBaselineTag
  hasSchemaObject --> readMigrationJournal
  hasSchemaObject --> readMigrationHash
  hasSchemaObject --> createMigrationsTable
  resolveLegacyBaselineTag --> getUserTableNames
  resolveLegacyBaselineTag --> matchesTableSet
  resolveLegacyBaselineTag --> hasSchemaObject
  resolveLegacyBaselineTag --> readMigrationJournal
  resolveLegacyBaselineTag --> readMigrationHash
  resolveLegacyBaselineTag --> createMigrationsTable
  readMigrationJournal --> getUserTableNames
  readMigrationJournal --> resolveLegacyBaselineTag
  readMigrationJournal --> readMigrationHash
  readMigrationJournal --> createMigrationsTable
  readMigrationHash --> getUserTableNames
  readMigrationHash --> resolveLegacyBaselineTag
  readMigrationHash --> readMigrationJournal
  readMigrationHash --> createMigrationsTable
  createMigrationsTable --> getUserTableNames
  createMigrationsTable --> resolveLegacyBaselineTag
  createMigrationsTable --> readMigrationJournal
  createMigrationsTable --> readMigrationHash
  formatSeedInstructions --> loadConfig
  formatSeedInstructions --> createAppRuntime
  formatSeedInstructions --> initializeAppRuntime
  formatSeedInstructions --> closeAppRuntime
  formatSeedInstructions --> main
  formatSeedInstructions --> seedMainAccount
  main --> loadConfig
  main --> createAppRuntime
  main --> initializeAppRuntime
  main --> closeAppRuntime
  main --> formatSeedInstructions
  main --> seedMainAccount
  seedMainAccount --> createAssistantToolProfileId
  seedMainAccount --> resolveMainAccountSeedManifestPath
  seedMainAccount --> writeMainAccountSeedManifest
  seedMainAccount --> resolveMainAccountApiKeySecret
  seedMainAccount --> resolveMainAccountSeedInput
  seedMainAccount --> hashApiKeySecret
  seedMainAccount --> normalizeAuthEmail
  seedMainAccount --> hashPassword
  isCurrentMainAccountSeedManifest --> readMainAccountSeedManifest
  createMainAccountApiKeySecret --> isCurrentMainAccountSeedManifest
  createMainAccountApiKeySecret --> createMainAccountPassword
  createMainAccountApiKeySecret --> readMainAccountSeedManifest
  createMainAccountPassword --> isCurrentMainAccountSeedManifest
  createMainAccountPassword --> createMainAccountApiKeySecret
  createMainAccountPassword --> createGeneratedSeedIds
  createMainAccountPassword --> readMainAccountSeedManifest
  createGeneratedSeedIds --> isCurrentMainAccountSeedManifest
  createGeneratedSeedIds --> createMainAccountApiKeySecret
  createGeneratedSeedIds --> createMainAccountPassword
  createGeneratedSeedIds --> readMainAccountSeedManifest
  createAssistantToolProfileId --> isCurrentMainAccountSeedManifest
  createAssistantToolProfileId --> createMainAccountApiKeySecret
  createAssistantToolProfileId --> createMainAccountPassword
  createAssistantToolProfileId --> createGeneratedSeedIds
  createAssistantToolProfileId --> resolveMainAccountSeedManifestPath
  createAssistantToolProfileId --> readMainAccountSeedManifest
  createAssistantToolProfileId --> resolveMainAccountSeedInput
  resolveMainAccountSeedManifestPath --> isCurrentMainAccountSeedManifest
  resolveMainAccountSeedManifestPath --> createMainAccountApiKeySecret
  resolveMainAccountSeedManifestPath --> createMainAccountPassword
  resolveMainAccountSeedManifestPath --> createGeneratedSeedIds
  resolveMainAccountSeedManifestPath --> readMainAccountSeedManifest
  resolveMainAccountSeedManifestPath --> resolveMainAccountApiKeySecret
  resolveMainAccountSeedManifestPath --> resolveMainAccountSeedInput
  readMainAccountSeedManifest --> isCurrentMainAccountSeedManifest
  readMainAccountSeedManifest --> createMainAccountApiKeySecret
  readMainAccountSeedManifest --> createMainAccountPassword
  readMainAccountSeedManifest --> createGeneratedSeedIds
  readMainAccountSeedManifest --> resolveMainAccountSeedManifestPath
  readMainAccountSeedManifest --> resolveMainAccountApiKeySecret
  readMainAccountSeedManifest --> resolveMainAccountSeedInput
  readMainAccountSeedManifest --> hashApiKeySecret
  readMainAccountSeedManifest --> hashPassword
  writeMainAccountSeedManifest --> isCurrentMainAccountSeedManifest
  writeMainAccountSeedManifest --> createMainAccountApiKeySecret
  writeMainAccountSeedManifest --> createMainAccountPassword
  writeMainAccountSeedManifest --> createGeneratedSeedIds
  writeMainAccountSeedManifest --> createAssistantToolProfileId
  writeMainAccountSeedManifest --> resolveMainAccountSeedManifestPath
  writeMainAccountSeedManifest --> readMainAccountSeedManifest
  writeMainAccountSeedManifest --> resolveMainAccountApiKeySecret
  writeMainAccountSeedManifest --> resolveMainAccountSeedInput
  writeMainAccountSeedManifest --> hashApiKeySecret
  writeMainAccountSeedManifest --> hashPassword
  resolveMainAccountApiKeySecret --> isCurrentMainAccountSeedManifest
  resolveMainAccountApiKeySecret --> createMainAccountApiKeySecret
  resolveMainAccountApiKeySecret --> createMainAccountPassword
  resolveMainAccountApiKeySecret --> createGeneratedSeedIds
  resolveMainAccountApiKeySecret --> createAssistantToolProfileId
  resolveMainAccountApiKeySecret --> resolveMainAccountSeedManifestPath
  resolveMainAccountApiKeySecret --> readMainAccountSeedManifest
  resolveMainAccountApiKeySecret --> writeMainAccountSeedManifest
  resolveMainAccountApiKeySecret --> resolveMainAccountSeedInput
  resolveMainAccountApiKeySecret --> hashApiKeySecret
  resolveMainAccountApiKeySecret --> normalizeAuthEmail
  resolveMainAccountApiKeySecret --> hashPassword
  resolveMainAccountSeedInput --> isCurrentMainAccountSeedManifest
  resolveMainAccountSeedInput --> createGeneratedSeedIds
  resolveMainAccountSeedInput --> createAssistantToolProfileId
  resolveMainAccountSeedInput --> resolveMainAccountSeedManifestPath
  resolveMainAccountSeedInput --> readMainAccountSeedManifest
  resolveMainAccountSeedInput --> writeMainAccountSeedManifest
  resolveMainAccountSeedInput --> resolveMainAccountApiKeySecret
  resolveMainAccountSeedInput --> hashApiKeySecret
  resolveMainAccountSeedInput --> normalizeAuthEmail
  resolveMainAccountSeedInput --> hashPassword
  openSqliteDatabase --> isBunRuntime
  openSqliteDatabase --> normalizeMigrationStatement
  migrateSqliteDatabase --> isBunRuntime
  migrateSqliteDatabase --> normalizeMigrationStatement
  normalizeMigrationStatement --> isBunRuntime
  createAgentRepository --> toAgentRecord
  createAgentRepository --> getById
  toAgentRecord --> getById
  createAgentRevisionRepository --> toAgentRevisionRecord
  createWorkspaceRepository --> toWorkspaceRecord
  resolveAiModelTarget --> resolveDefaultTarget
  getCanonicalCommittedEventContract --> isRecord
  getCanonicalCommittedEventContract --> asString
  getCanonicalCommittedEventContract --> isRootRunTerminalObservabilityTrigger
  resolveCanonicalCommittedEventOutboxTopics --> getCanonicalCommittedEventContract
  resolveCanonicalCommittedEventOutboxTopics --> isRootRunTerminalObservabilityTrigger
  toContracts --> isRecord
  toContracts --> asString
  toContracts --> getCanonicalCommittedEventContract
  toContracts --> isRootRunTerminalObservabilityTrigger
  isRootRunTerminalObservabilityTrigger --> isRecord
  isRootRunTerminalObservabilityTrigger --> asString
  isRootRunTerminalObservabilityTrigger --> getCanonicalCommittedEventContract
  createDomainEventRepository --> jsonStringAt
  matchesDomainEventStreamScope --> matchesSession
  matchesDomainEventStreamScope --> matchesThread
  matchesDomainEventStreamScope --> matchesRun
  matchesSession --> readPayloadString
  matchesSession --> matchesThread
  matchesSession --> matchesRun
  matchesThread --> readPayloadString
  matchesThread --> matchesSession
  matchesThread --> matchesRun
  matchesRun --> readPayloadString
  matchesRun --> matchesSession
  matchesRun --> matchesThread
  createFileRepository --> toFileRecord
  createUploadRepository --> toUploadRecord
  createUploadRepository --> getById
  toUploadRecord --> getById
  createApiKeyRepository --> toApiKeyAuthRecord
  createAuthSessionRepository --> toAuthSessionAuthRecord
  createPasswordCredentialRepository --> normalizeAuthEmail
  createMcpOauthAuthorizationRepository --> toRecord
  createMcpOauthCredentialRepository --> toRecord
  toMcpServerConfig --> revealStoredHttpAuthConfig
  toMcpServerConfig --> toMcpServerRecord
  createMcpServerRepository --> toMcpServerRecord
  createMcpServerRepository --> getById
  toMcpServerRecord --> revealStoredHttpAuthConfig
  createMcpToolAssignmentRepository --> toMcpToolAssignmentRecord
  createHttpIdempotencyKeyRepository --> toRecord
  createAccountPreferencesRepository --> toAccountPreferencesRecord
  createContextSummaryRepository --> toRecord
  createItemRepository --> createMessage
  toItemRecord --> createMessage
  createMessage --> toSessionMessageRecord
  createJobRepository --> toJobRecord
  buildUpdatePatch --> toJobRecord
  createRunDependencyRepository --> toRunDependencyRecord
  createRunRepository --> toRunRecord
  createRunRepository --> getById
  toRunRecord --> getById
  createToolExecutionRepository --> toToolExecutionRecord
  createToolExecutionRepository --> getById
  toToolExecutionRecord --> getById
  createSessionMessageRepository --> createMessage
  createSessionMessageRepository --> getById
  createSessionMessageRepository --> listByThread
  toSessionMessageRecord --> createMessage
  toSessionMessageRecord --> getById
  getById --> toSessionMessageRecord
  createSessionThreadRepository --> toSessionThreadRecord
  createSessionThreadRepository --> buildConversationSearchQuery
  toSessionThreadRecordFromRaw --> toSessionThreadRecord
  buildConversationSearchQuery --> toSessionThreadRecord
  createWorkSessionRepository --> getById
  createWorkSessionRepository --> toWorkSessionRecord
  createTenantMembershipRepository --> toTenantMembershipRecord
  createToolProfileRepository --> getById
  createToolProfileRepository --> toToolProfileRecord
  toToolProfileRecord --> getById
  closeHttpServer --> closeAppRuntime
  closeHttpServer --> shutdown
  shutdown --> closeAppRuntime
  shutdown --> closeHttpServer
  normalizeAuthEmail --> toBuffer
  hashPassword --> toBuffer
  verifyPassword --> toBuffer
  isEncryptedSecret --> deriveKey
  createSecretBox --> deriveKey
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `toGoogleDomainError` | `adapters/ai/google/google-domain-error.ts` | `isGoogleTimeoutError` |
| `isGoogleTimeoutError` | `adapters/ai/google/google-domain-error.ts` |  |
| `createGoogleProvider` | `adapters/ai/google/google-provider.ts` | `toGoogleDomainError`, `resolveConfigured`, `notConfiguredError`, `installDiagnosticFetch`, `ensureGoogleCompatibleRequest`, `buildConfig`, `normalizeResponse` |
| `resolveConfigured` | `adapters/ai/google/google-provider.ts` |  |
| `notConfiguredError` | `adapters/ai/google/google-provider.ts` | `normalizeResponse`, `toOpenAiDomainError`, `logOpenAiRequestDebug`, `createRequestBody`, `createRequestOptions` |
| `getThoughtItemId` | `adapters/ai/google/google-provider.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `normalizeGroundingReferences` |
| `installDiagnosticFetch` | `adapters/ai/google/google-provider.ts` | `toGoogleDomainError`, `resolveConfigured`, `notConfiguredError`, `ensureGoogleCompatibleRequest`, `buildConfig`, `normalizeResponse` |
| `ensureGoogleCompatibleRequest` | `adapters/ai/google/google-request.ts` | `isRecord`, `parseRequiredJson` |
| `buildConfig` | `adapters/ai/google/google-request.ts` | `mapServiceTier`, `buildSystemInstruction`, `buildTools`, `buildToolConfig`, `buildHttpOptions`, `toThinkingConfig` |
| `mapServiceTier` | `adapters/ai/google/google-request.ts` | `toGoogleFunctionCallArgs`, `isRecord`, `parseRequiredJson` |
| `toGoogleFunctionResponse` | `adapters/ai/google/google-request.ts` | `toGoogleFunctionCallArgs`, `isRecord`, `parseRequiredJson` |
| `toGoogleReasoningText` | `adapters/ai/google/google-request.ts` | `toGoogleFunctionResponse`, `toGoogleFunctionCallArgs`, `isRecord`, `parseRequiredJson`, `toAssistantProviderMessageId`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId`, `toChildRunReplayOutput` |
| `toGoogleFunctionCallArgs` | `adapters/ai/google/google-request.ts` | `toGoogleFunctionResponse`, `toGoogleReasoningText`, `isRecord`, `parseRequiredJson` |
| `toGooglePart` | `adapters/ai/google/google-request.ts` | `toGoogleFunctionResponse`, `toGoogleReasoningText`, `toGoogleFunctionCallArgs` |
| `buildSystemInstruction` | `adapters/ai/google/google-request.ts` | `toGooglePart`, `sanitizeSchemaNode` |
| `buildContents` | `adapters/ai/google/google-request.ts` | `toGooglePart`, `sanitizeSchemaNode`, `sanitizeToolSchema`, `buildFunctionTools`, `buildNativeTools` |
| `sanitizeSchemaNode` | `adapters/ai/google/google-request.ts` | `sanitizeToolSchema`, `buildFunctionTools`, `buildNativeTools` |
| `sanitizeToolSchema` | `adapters/ai/google/google-request.ts` | `sanitizeSchemaNode`, `buildFunctionTools`, `buildNativeTools` |
| `buildFunctionTools` | `adapters/ai/google/google-request.ts` | `sanitizeToolSchema`, `buildNativeTools` |
| `buildNativeTools` | `adapters/ai/google/google-request.ts` | `buildFunctionTools`, `toThinkingLevel` |
| `buildTools` | `adapters/ai/google/google-request.ts` | `buildFunctionTools`, `buildNativeTools`, `toThinkingLevel`, `toThinkingConfig` |
| `buildToolConfig` | `adapters/ai/google/google-request.ts` | `buildHttpOptions`, `toThinkingLevel`, `toThinkingConfig` |
| `buildHttpOptions` | `adapters/ai/google/google-request.ts` | `mapServiceTier`, `buildSystemInstruction`, `buildTools`, `buildToolConfig`, `toThinkingLevel`, `toThinkingConfig` |
| `toThinkingLevel` | `adapters/ai/google/google-request.ts` | `mapServiceTier`, `buildSystemInstruction`, `buildTools`, `buildToolConfig`, `buildHttpOptions`, `toThinkingConfig` |
| `toThinkingConfig` | `adapters/ai/google/google-request.ts` | `mapServiceTier`, `buildSystemInstruction`, `buildTools`, `buildToolConfig`, `buildHttpOptions`, `toThinkingLevel` |
| `normalizeToolCall` | `adapters/ai/google/google-response.ts` | `getPrimaryCandidate`, `toDomainFromUrl`, `dedupeWebReferences`, `toUrlCitationReference`, `tryParseJson` |
| `mapUsage` | `adapters/ai/google/google-response.ts` | `getPrimaryCandidate`, `toDomainFromUrl`, `normalizeToolCall`, `createOpenAiWebSearchActivity`, `mergeOpenAiWebSearchActivity`, `collectOutputTextReferences`, `flattenReasoningSummaryText` |
| `getRequestId` | `adapters/ai/google/google-response.ts` | `getPrimaryCandidate`, `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `normalizeGroundingReferences` |
| `normalizeResponse` | `adapters/ai/google/google-response.ts` | `getThoughtItemId`, `normalizeToolCall`, `getRequestId`, `getPrimaryCandidate`, `getCandidateParts`, `normalizeWebSearches`, `getTerminalIssue`, `toThoughtSummary`, `flushAssistantMessage`, `mapUsage`, `normalizeOutputItems`, `normalizeMessages` |
| `getPrimaryCandidate` | `adapters/ai/google/google-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `normalizeGroundingReferences` |
| `getCandidateParts` | `adapters/ai/google/google-response.ts` | `getPrimaryCandidate`, `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `normalizeGroundingReferences` |
| `toDomainFromUrl` | `adapters/ai/google/google-response.ts` | `dedupeStrings`, `dedupeWebReferences`, `normalizeGroundingReferences`, `createOpenAiWebSearchActivity`, `toUrlCitationReference` |
| `dedupeStrings` | `adapters/ai/google/google-response.ts` | `toDomainFromUrl`, `dedupeWebReferences`, `normalizeGroundingReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus`, `toUrlCitationReference`, `createDomainEventRepository` |
| `dedupeWebReferences` | `adapters/ai/google/google-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `normalizeGroundingReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus`, `toUrlCitationReference`, `createDomainEventRepository` |
| `normalizeGroundingReferences` | `adapters/ai/google/google-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences` |
| `normalizeWebSearches` | `adapters/ai/google/google-response.ts` | `dedupeStrings`, `normalizeGroundingReferences`, `mapUsage`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeOpenAiWebSearchActivity`, `collectOutputTextReferences`, `normalizeOutputItems`, `normalizeMessages` |
| `toPromptBlockedIssue` | `adapters/ai/google/google-response.ts` |  |
| `toCandidateFinishIssue` | `adapters/ai/google/google-response.ts` |  |
| `hasDurableOutput` | `adapters/ai/google/google-response.ts` | `getThoughtItemId`, `normalizeToolCall`, `getPrimaryCandidate`, `getCandidateParts`, `normalizeWebSearches`, `toPromptBlockedIssue`, `toCandidateFinishIssue`, `toThoughtSummary`, `flushAssistantMessage` |
| `getTerminalIssue` | `adapters/ai/google/google-response.ts` | `getThoughtItemId`, `normalizeToolCall`, `getPrimaryCandidate`, `getCandidateParts`, `normalizeWebSearches`, `toPromptBlockedIssue`, `toCandidateFinishIssue`, `hasDurableOutput`, `toThoughtSummary`, `flushAssistantMessage` |
| `toThoughtSummary` | `adapters/ai/google/google-response.ts` | `getThoughtItemId`, `normalizeToolCall`, `getCandidateParts`, `normalizeWebSearches`, `getTerminalIssue`, `flushAssistantMessage` |
| `flushAssistantMessage` | `adapters/ai/google/google-response.ts` | `getThoughtItemId`, `normalizeToolCall`, `getCandidateParts`, `normalizeWebSearches`, `getTerminalIssue`, `toThoughtSummary` |
| `toOpenAiDomainError` | `adapters/ai/openai/openai-domain-error.ts` | `withToolContext` |
| `withToolContext` | `adapters/ai/openai/openai-domain-error.ts` |  |
| `createOpenAiProvider` | `adapters/ai/openai/openai-provider.ts` | `notConfiguredError`, `normalizeResponse`, `toOpenAiDomainError`, `getFunctionToolNames`, `logOpenAiRequestDebug`, `createRequestBody`, `createRequestOptions` |
| `getFunctionToolNames` | `adapters/ai/openai/openai-provider.ts` | `getToolDescriptors`, `getReplayFunctionCallNames`, `getRequestRunId` |
| `getToolDescriptors` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getReplayFunctionCallNames`, `getRequestRunId` |
| `getReplayFunctionCallNames` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getToolDescriptors`, `getRequestRunId`, `getErrorCode`, `getErrorParam`, `isNativeToolAllowedForRun`, `isToolAllowedForRun`, `assembleThreadInteractionRequest`, `applyLatestBudgetCalibration`, `loadThreadContext`, `toInactiveRunError`, `toRunCancelledExecutionError`, `finalizeRunCancellation`, `convergeRunExecutionConflict`, `failRun`, `toToolContext`, `createUsageLedgerRepository` |
| `getRequestRunId` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getToolDescriptors`, `getReplayFunctionCallNames`, `getErrorCode`, `getErrorParam` |
| `getErrorCode` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getToolDescriptors`, `getReplayFunctionCallNames`, `getRequestRunId`, `getErrorParam` |
| `getErrorParam` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getToolDescriptors`, `getReplayFunctionCallNames`, `getRequestRunId`, `getErrorCode` |
| `logOpenAiRequestDebug` | `adapters/ai/openai/openai-provider.ts` | `getFunctionToolNames`, `getToolDescriptors`, `getReplayFunctionCallNames`, `getRequestRunId`, `getErrorCode`, `getErrorParam` |
| `getReasoningSummaryParts` | `adapters/ai/openai/openai-provider.ts` | `notConfiguredError`, `normalizeResponse`, `toOpenAiDomainError`, `getFunctionToolNames`, `logOpenAiRequestDebug`, `createRequestBody`, `createRequestOptions` |
| `flattenReasoningSummaryParts` | `adapters/ai/openai/openai-provider.ts` | `notConfiguredError`, `normalizeResponse`, `toOpenAiDomainError`, `getFunctionToolNames`, `logOpenAiRequestDebug`, `createRequestBody`, `createRequestOptions` |
| `createRequestBody` | `adapters/ai/openai/openai-request.ts` | `createBaseRequestBody` |
| `createRequestOptions` | `adapters/ai/openai/openai-request.ts` |  |
| `ensureOpenAiCompatibleRequest` | `adapters/ai/openai/openai-request.ts` | `isOpenAiResponseIncludable` |
| `isOpenAiResponseIncludable` | `adapters/ai/openai/openai-request.ts` |  |
| `toOpenAiInclude` | `adapters/ai/openai/openai-request.ts` | `isOpenAiResponseIncludable` |
| `toOpenAiReasoningSummary` | `adapters/ai/openai/openai-request.ts` | `toOpenAiAssistantMessage` |
| `toOpenAiMessageContent` | `adapters/ai/openai/openai-request.ts` | `toOpenAiAssistantMessage` |
| `toOpenAiAssistantMessage` | `adapters/ai/openai/openai-request.ts` | `toOpenAiReasoningSummary`, `toOpenAiMessageContent` |
| `toOpenAiInput` | `adapters/ai/openai/openai-request.ts` | `toOpenAiReasoningSummary`, `toOpenAiMessageContent`, `toOpenAiAssistantMessage`, `toOpenAiFunctionTools`, `toOpenAiNativeTools` |
| `toOpenAiFunctionTools` | `adapters/ai/openai/openai-request.ts` | `ensureOpenAiCompatibleRequest`, `toOpenAiInclude`, `toOpenAiInput`, `toOpenAiNativeTools`, `toOpenAiTools`, `toOpenAiToolChoice` |
| `toOpenAiNativeTools` | `adapters/ai/openai/openai-request.ts` | `createRequestBody`, `ensureOpenAiCompatibleRequest`, `toOpenAiInclude`, `toOpenAiInput`, `toOpenAiFunctionTools`, `toOpenAiTools`, `toOpenAiToolChoice` |
| `toOpenAiTools` | `adapters/ai/openai/openai-request.ts` | `createRequestBody`, `ensureOpenAiCompatibleRequest`, `toOpenAiInclude`, `toOpenAiInput`, `toOpenAiFunctionTools`, `toOpenAiNativeTools`, `toOpenAiToolChoice` |
| `toOpenAiToolChoice` | `adapters/ai/openai/openai-request.ts` | `createRequestBody`, `ensureOpenAiCompatibleRequest`, `toOpenAiInclude`, `toOpenAiInput`, `toOpenAiTools`, `createBaseRequestBody` |
| `createBaseRequestBody` | `adapters/ai/openai/openai-request.ts` | `createRequestBody`, `ensureOpenAiCompatibleRequest`, `toOpenAiInclude`, `toOpenAiInput`, `toOpenAiTools`, `toOpenAiToolChoice` |
| `createOpenAiWebSearchActivity` | `adapters/ai/openai/openai-response.ts` | `dedupeStrings`, `dedupeWebReferences`, `mergeWebSearchStatus`, `toWebSearchSourceReferences` |
| `updateOpenAiWebSearchActivityStatus` | `adapters/ai/openai/openai-response.ts` | `normalizeToolCall`, `dedupeStrings`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus`, `toWebSearchSourceReferences` |
| `mergeOpenAiWebSearchActivity` | `adapters/ai/openai/openai-response.ts` | `normalizeToolCall`, `dedupeStrings`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus`, `toWebSearchSourceReferences`, `flattenReasoningSummaryText` |
| `mergeWebSearchStatus` | `adapters/ai/openai/openai-response.ts` | `toDomainFromUrl`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `toUrlCitationReference` |
| `toUrlCitationReference` | `adapters/ai/openai/openai-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus` |
| `collectOutputTextReferences` | `adapters/ai/openai/openai-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus`, `toUrlCitationReference`, `toWebSearchSourceReferences` |
| `toWebSearchSourceReferences` | `adapters/ai/openai/openai-response.ts` | `toDomainFromUrl`, `dedupeStrings`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeWebSearchStatus` |
| `normalizeOutputItems` | `adapters/ai/openai/openai-response.ts` | `normalizeToolCall`, `dedupeWebReferences`, `createOpenAiWebSearchActivity`, `mergeOpenAiWebSearchActivity`, `collectOutputTextReferences`, `flattenReasoningSummaryText` |
| `normalizeMessages` | `adapters/ai/openai/openai-response.ts` | `mapUsage`, `dedupeWebReferences`, `normalizeWebSearches`, `createOpenAiWebSearchActivity`, `mergeOpenAiWebSearchActivity`, `collectOutputTextReferences`, `normalizeOutputItems` |
| `createLocalBlobStore` | `adapters/blob/local-blob-store.ts` | `resolveStoragePath` |
| `normalizeStorageKey` | `adapters/blob/local-blob-store.ts` | `resolveStoragePath` |
| `resolveStoragePath` | `adapters/blob/local-blob-store.ts` | `normalizeStorageKey` |
| `errorEnvelope` | `adapters/http/api-envelope.ts` |  |
| `apiKeyAuthMiddleware` | `adapters/http/auth/api-key-auth-middleware.ts` | `parseTenantIdHeader`, `resolveTenantScopeForAccount`, `createApiKeyRepository`, `hashApiKeySecret`, `parseBearerToken` |
| `authSessionAuthMiddleware` | `adapters/http/auth/auth-session-auth-middleware.ts` | `parseTenantIdHeader`, `resolveTenantScopeForAccount`, `createAuthSessionRepository`, `hashAuthSessionSecret` |
| `parseTenantIdHeader` | `adapters/http/auth/tenant-scope.ts` | `createTenantMembershipRepository` |
| `resolveTenantScopeForAccount` | `adapters/http/auth/tenant-scope.ts` | `createTenantMembershipRepository` |
| `toRequestHash` | `adapters/http/idempotency.ts` | `normalizeJsonValue`, `createHttpIdempotencyKeyRepository` |
| `isRecord` | `adapters/http/idempotency.ts` | `toRequestHash`, `normalizeJsonValue`, `toVisibility`, `extractErrorMessage`, `normalizeContentBlock`, `isTerminalDependencyStatus`, `isDelegatedChildSuspended`, `createRunDependencyRepository`, `createRunRepository`, `getById`, `toUsage`, `readLatestAssistantItemId`, `createItemRepository`, `dedupeWebReferences`, `createDomainEventRepository`, `toProjectedItemRole`, `readProjectedProviderPayload`, `readProjectedSessionMessageId`, `readResponseId`, `extractOutputAppsMeta`, `asString`, `toPayloadIdentity`, `createEventOutboxRepository`, `findTerminalRootRunId` |
| `normalizeJsonValue` | `adapters/http/idempotency.ts` | `toRequestHash`, `isRecord`, `createHttpIdempotencyKeyRepository` |
| `addMilliseconds` | `adapters/http/idempotency.ts` | `toRequestHash`, `createHttpIdempotencyKeyRepository`, `dispatchBackgroundEvent`, `dispatchLangfuseEvent`, `dispatchProjectionEvent`, `createEventOutboxRepository`, `createInternalCommandContext`, `createRunDependencyRepository`, `createRunRepository`, `decisionKey`, `firstUnskipped`, `matchesDecisionFilter`, `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc` |
| `parseJsonBody` | `adapters/http/parse-json-body.ts` |  |
| `createRootRoutes` | `adapters/http/routes/root-routes.ts` |  |
| `createAccountRoutes` | `adapters/http/routes/v1/account-routes.ts` | `parseJsonBody`, `toAccountPreferencesService`, `requireTenantScope`, `parseAccountPreferencesPatchInput` |
| `toAccountPreferencesService` | `adapters/http/routes/v1/account-routes.ts` | `parseJsonBody`, `requireTenantScope`, `parseAccountPreferencesPatchInput`, `createAccountPreferencesService` |
| `createAgentRoutes` | `adapters/http/routes/v1/agent-routes.ts` | `parseJsonBody`, `toAgentManagementService`, `parseListAgentsOptions`, `requireTenantScope`, `parseCreateAgentInput`, `parseUpdateAgentInput`, `parseMarkdownUpdateInput` |
| `toAgentManagementService` | `adapters/http/routes/v1/agent-routes.ts` | `parseJsonBody`, `parseListAgentsOptions`, `requireTenantScope`, `parseCreateAgentInput`, `parseUpdateAgentInput`, `createAgentManagementService` |
| `parseListAgentsOptions` | `adapters/http/routes/v1/agent-routes.ts` | `parseJsonBody`, `toAgentManagementService`, `requireTenantScope`, `parseCreateAgentInput`, `parseUpdateAgentInput` |
| `createApiRoutes` | `adapters/http/routes/v1/api-routes.ts` | `createAccountRoutes`, `createAgentRoutes`, `createAuthRoutes`, `createEventRoutes`, `createFilePickerRoutes`, `createFileRoutes`, `createMcpRoutes`, `createRunRoutes`, `createSessionRoutes`, `createSystemRoutes`, `createThreadRoutes`, `createToolProfileRoutes`, `createUploadRoutes` |
| `createAuthRoutes` | `adapters/http/routes/v1/auth-routes.ts` | `parseJsonBody`, `toAuthPayload`, `buildAuthResponse`, `sessionCookieOptions`, `issueAuthSession`, `requireAuthenticatedAccount`, `createAuthSessionRepository`, `createPasswordCredentialRepository`, `verifyPassword` |
| `toAuthPayload` | `adapters/http/routes/v1/auth-routes.ts` | `parseJsonBody`, `buildAuthResponse`, `sessionCookieOptions`, `requireAuthenticatedAccount`, `createAuthSessionRepository`, `createTenantMembershipRepository`, `createAuthSessionSecret`, `hashAuthSessionSecret` |
| `buildAuthResponse` | `adapters/http/routes/v1/auth-routes.ts` | `parseJsonBody`, `toAuthPayload`, `sessionCookieOptions`, `requireAuthenticatedAccount`, `createAuthSessionRepository`, `createPasswordCredentialRepository`, `createTenantMembershipRepository`, `createAuthSessionSecret`, `hashAuthSessionSecret` |
| `sessionCookieOptions` | `adapters/http/routes/v1/auth-routes.ts` | `parseJsonBody`, `toAuthPayload`, `buildAuthResponse`, `issueAuthSession`, `requireAuthenticatedAccount`, `createAuthSessionRepository`, `createPasswordCredentialRepository`, `createAuthSessionSecret`, `hashAuthSessionSecret`, `verifyPassword` |
| `issueAuthSession` | `adapters/http/routes/v1/auth-routes.ts` | `parseJsonBody`, `toAuthPayload`, `buildAuthResponse`, `sessionCookieOptions`, `requireAuthenticatedAccount`, `createAuthSessionRepository`, `createPasswordCredentialRepository`, `createAuthSessionSecret`, `hashAuthSessionSecret`, `verifyPassword` |
| `createEventRoutes` | `adapters/http/routes/v1/event-routes.ts` | `parseOptionalInteger`, `parseFollow`, `parseEventCategory`, `requireTenantScope`, `createResourceAccessService`, `createDomainEventRepository` |
| `parseOptionalInteger` | `adapters/http/routes/v1/event-routes.ts` | `parseFollow`, `parseEventCategory`, `requireTenantScope`, `createResourceAccessService`, `createDomainEventRepository` |
| `parseFollow` | `adapters/http/routes/v1/event-routes.ts` | `parseOptionalInteger`, `parseEventCategory`, `requireTenantScope`, `createResourceAccessService`, `createDomainEventRepository` |
| `parseEventCategory` | `adapters/http/routes/v1/event-routes.ts` | `parseOptionalInteger`, `parseFollow`, `requireTenantScope`, `createResourceAccessService`, `createDomainEventRepository` |
| `createFilePickerRoutes` | `adapters/http/routes/v1/file-picker-routes.ts` | `requireTenantScope`, `searchFilePicker` |
| `createFileRoutes` | `adapters/http/routes/v1/file-routes.ts` | `toFileSummary`, `toDispositionFilename`, `requireTenantScope`, `createResourceAccessService`, `createFileRepository` |
| `toFileSummary` | `adapters/http/routes/v1/file-routes.ts` | `toDispositionFilename`, `requireTenantScope`, `createResourceAccessService`, `createFileRepository` |
| `toDispositionFilename` | `adapters/http/routes/v1/file-routes.ts` | `toFileSummary`, `requireTenantScope`, `createResourceAccessService`, `createFileRepository` |
| `createMcpRoutes` | `adapters/http/routes/v1/mcp-routes.ts` | `toStoredServerConfig`, `isStaticServerVisibleToTenant`, `toApiDbServer`, `toApiStaticServer`, `requireTenantScope`, `createMcpServerRepository` |
| `resolveRequestedToolProfileId` | `adapters/http/routes/v1/mcp-routes.ts` | `protectStoredHttpAuthConfig` |
| `toStoredServerConfig` | `adapters/http/routes/v1/mcp-routes.ts` | `protectStoredHttpAuthConfig` |
| `isStaticServerVisibleToTenant` | `adapters/http/routes/v1/mcp-routes.ts` | `toApiStaticServerConfig`, `toMcpServerConfig` |
| `toApiStaticServerConfig` | `adapters/http/routes/v1/mcp-routes.ts` | `toMcpServerConfig` |
| `toApiDbServer` | `adapters/http/routes/v1/mcp-routes.ts` | `toApiStaticServerConfig`, `toMcpServerConfig` |
| `toApiStaticServer` | `adapters/http/routes/v1/mcp-routes.ts` | `toApiStaticServerConfig` |
| `escapeHtml` | `adapters/http/routes/v1/mcp-routes.ts` |  |
| `renderOauthCompletionPage` | `adapters/http/routes/v1/mcp-routes.ts` | `escapeHtml` |
| `resolveAuthorizationCodeServer` | `adapters/http/routes/v1/mcp-routes.ts` | `toStoredServerConfig`, `isStaticServerVisibleToTenant`, `toApiDbServer`, `toApiStaticServer`, `canStartAuthorizationCodeOAuth`, `toAuthorizationCodeServerConfig`, `requireTenantScope`, `toMcpServerConfig`, `createMcpServerRepository`, `getById` |
| `createRunRoutes` | `adapters/http/routes/v1/run-routes.ts` | `parseJsonBody`, `toCommandContext`, `requireTenantScope`, `createResourceAccessService`, `createCancelRunCommand`, `parseExecuteRunInput`, `createExecuteRunCommand`, `createResumeRunCommand`, `loadRunJobReadModel`, `recoverExecuteRunOutput` |
| `toCommandContext` | `adapters/http/routes/v1/run-routes.ts` | `parseJsonBody`, `requireTenantScope`, `createResourceAccessService`, `createCancelRunCommand`, `parseExecuteRunInput`, `createExecuteRunCommand`, `createResumeRunCommand`, `loadRunJobReadModel`, `recoverExecuteRunOutput`, `createBootstrapSessionCommand`, `parseCreateSessionThreadInput`, `createCreateSessionThreadCommand`, `parseCreateSessionInput`, `createCreateSessionCommand`, `resolveRunWait`, `createRunRepository`, `getById` |
| `createSessionRoutes` | `adapters/http/routes/v1/session-routes.ts` | `parseJsonBody`, `toCommandContext`, `requireTenantScope`, `createResourceAccessService`, `createBootstrapSessionCommand`, `parseCreateSessionThreadInput`, `createCreateSessionThreadCommand`, `parseCreateSessionInput`, `createCreateSessionCommand`, `createExecuteRunCommand`, `createFileRepository` |
| `buildBootstrapSessionRecoverySnapshot` | `adapters/http/routes/v1/session-routes.ts` | `parseJsonBody`, `toCommandContext`, `requireTenantScope`, `createBootstrapSessionCommand`, `parseCreateSessionThreadInput`, `createCreateSessionThreadCommand`, `parseCreateSessionInput`, `createCreateSessionCommand`, `createExecuteRunCommand` |
| `toBootstrapSessionSuccess` | `adapters/http/routes/v1/session-routes.ts` | `parseJsonBody`, `toCommandContext`, `requireTenantScope`, `createBootstrapSessionCommand`, `parseCreateSessionThreadInput`, `createCreateSessionThreadCommand`, `parseCreateSessionInput`, `createCreateSessionCommand`, `createExecuteRunCommand` |
| `toBootstrapExecuteOverrides` | `adapters/http/routes/v1/session-routes.ts` | `parseJsonBody`, `toCommandContext`, `requireTenantScope`, `createBootstrapSessionCommand`, `parseCreateSessionThreadInput`, `createCreateSessionThreadCommand`, `parseCreateSessionInput`, `createCreateSessionCommand`, `createExecuteRunCommand` |
| `createSystemRoutes` | `adapters/http/routes/v1/system-routes.ts` | `requireTenantScope`, `buildModelsCatalog`, `listObservabilityQuarantine`, `replayObservabilityQuarantineEntry`, `replayObservabilityRun`, `replayObservabilitySession`, `buildObservabilityStatus` |
| `createThreadRoutes` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `loadThreadActivityReadModel`, `createSessionThreadRepository` |
| `buildThreadInteractionRecoverySnapshot` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `createSessionThreadRepository` |
| `toThreadInteractionSuccess` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `createSessionThreadRepository` |
| `toThreadExecuteOverrides` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `createSessionThreadRepository` |
| `toThreadMemoryObservationRecord` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `loadThreadActivityReadModel`, `createSessionThreadRepository` |
| `toThreadMemoryReflectionRecord` | `adapters/http/routes/v1/thread-routes.ts` | `requireTenantScope`, `createBranchThreadCommand`, `createDeleteThreadCommand`, `createEditThreadMessageCommand`, `createExecuteRunCommand`, `createPostThreadMessageCommand`, `createStartThreadInteractionCommand`, `loadThreadRootJobReadModel`, `loadThreadActivityReadModel`, `createSessionThreadRepository` |
| `createToolProfileRoutes` | `adapters/http/routes/v1/tool-profile-routes.ts` | `parseJsonBody`, `toToolProfileService`, `requireTenantScope`, `parseCreateToolProfileInput`, `parseUpdateToolProfileInput` |
| `toToolProfileService` | `adapters/http/routes/v1/tool-profile-routes.ts` | `parseJsonBody`, `requireTenantScope`, `parseCreateToolProfileInput`, `parseUpdateToolProfileInput`, `createToolProfileService` |
| `createUploadRoutes` | `adapters/http/routes/v1/upload-routes.ts` | `isUploadedFileLike`, `requireTenantScope`, `createUploadFileCommand` |
| `isUploadedFileLike` | `adapters/http/routes/v1/upload-routes.ts` | `requireTenantScope`, `createUploadFileCommand` |
| `parseMcpAppsToolMeta` | `adapters/mcp/apps-meta.ts` | `isRecord`, `toVisibility` |
| `isMcpToolModelVisible` | `adapters/mcp/apps-meta.ts` |  |
| `toVisibility` | `adapters/mcp/apps-meta.ts` | `isRecord` |
| `createMcpClientBundle` | `adapters/mcp/client-factory.ts` | `toStreamableRequestOptions` |
| `toStreamableRequestOptions` | `adapters/mcp/client-factory.ts` |  |
| `createMcpGateway` | `adapters/mcp/gateway.ts` | `isServerAvailableForScope`, `isAuthorizationCodeServer`, `toAuthorizationCodeServerConfig`, `createMcpOauthCredentialRepository` |
| `mapLogLevel` | `adapters/mcp/gateway.ts` | `toMcpTraceObservationKey`, `toW3cTraceparent`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `summarizeError` | `adapters/mcp/gateway.ts` | `toMcpTraceObservationKey`, `toW3cTraceparent`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `looksLikeOAuthChallenge` | `adapters/mcp/gateway.ts` | `toMcpTraceObservationKey`, `toW3cTraceparent`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `toMcpTraceObservationKey` | `adapters/mcp/gateway.ts` | `toW3cTraceparent`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `toW3cTraceparent` | `adapters/mcp/gateway.ts` | `toMcpTraceObservationKey`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `buildMcpTraceMeta` | `adapters/mcp/gateway.ts` | `toMcpTraceObservationKey`, `toW3cTraceparent`, `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `toLangfuseObservationId`, `toLangfuseTraceId`, `createMcpToolAssignmentRepository` |
| `isStaticToolAllowedForTenant` | `adapters/mcp/gateway.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `createWorkspaceRepository`, `createMcpToolAssignmentRepository`, `getById` |
| `isServerAvailableForScope` | `adapters/mcp/gateway.ts` | `isStaticToolAllowedForTenant`, `getMcpRuntimeNameAliasesFromRuntimeName`, `createWorkspaceRepository`, `createMcpToolAssignmentRepository`, `getById` |
| `toSyntheticScope` | `adapters/mcp/gateway.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `createWorkspaceRepository`, `createMcpToolAssignmentRepository`, `getById` |
| `isToolAssignedToProfile` | `adapters/mcp/gateway.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `createWorkspaceRepository`, `createMcpToolAssignmentRepository`, `getById` |
| `getConfirmationTargetRef` | `adapters/mcp/gateway.ts` | `createWorkspaceRepository`, `getById` |
| `isWorkspaceScopedFilesServer` | `adapters/mcp/gateway.ts` | `prefixScopedPath`, `createWorkspaceRepository`, `getById` |
| `resolveWorkspaceScopedMountRoot` | `adapters/mcp/gateway.ts` | `prefixScopedPath`, `createWorkspaceRepository`, `getById` |
| `resolveScopedFilesystemRoot` | `adapters/mcp/gateway.ts` | `prefixScopedPath`, `createWorkspaceRepository`, `getById` |
| `toScopedPrefix` | `adapters/mcp/gateway.ts` | `prefixScopedPath`, `stripScopedPath`, `stripScopedPathReferences`, `rewriteWorkspaceScopedJson` |
| `prefixScopedPath` | `adapters/mcp/gateway.ts` | `stripScopedPath`, `stripScopedPathReferences`, `rewriteWorkspaceScopedJson` |
| `rewriteWorkspaceScopedArgs` | `adapters/mcp/gateway.ts` | `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `prefixScopedPath`, `stripScopedPath`, `stripScopedPathReferences`, `rewriteWorkspaceScopedJson` |
| `stripScopedPath` | `adapters/mcp/gateway.ts` | `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `resolveScopedFilesystemRoot`, `toScopedPrefix`, `stripScopedPathReferences`, `rewriteWorkspaceScopedJson` |
| `stripScopedPathReferences` | `adapters/mcp/gateway.ts` | `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `resolveScopedFilesystemRoot`, `toScopedPrefix`, `stripScopedPath`, `rewriteWorkspaceScopedJson` |
| `rewriteWorkspaceScopedJson` | `adapters/mcp/gateway.ts` | `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `resolveScopedFilesystemRoot`, `toScopedPrefix`, `stripScopedPath`, `stripScopedPathReferences` |
| `rewriteWorkspaceScopedOutput` | `adapters/mcp/gateway.ts` | `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `resolveScopedFilesystemRoot`, `toScopedPrefix`, `rewriteWorkspaceScopedJson`, `toAuthorizationCodeServerConfig`, `createMcpOauthCredentialRepository` |
| `resolveWorkspaceScopedPrefix` | `adapters/mcp/gateway.ts` | `isServerAvailableForScope`, `isWorkspaceScopedFilesServer`, `resolveWorkspaceScopedMountRoot`, `resolveScopedFilesystemRoot`, `toScopedPrefix`, `isAuthorizationCodeServer`, `toAuthorizationCodeServerConfig`, `createMcpOauthCredentialRepository` |
| `normalizeMcpCallToolResult` | `adapters/mcp/normalize-result.ts` | `isRecord`, `extractErrorMessage`, `normalizeContentBlock` |
| `extractErrorMessage` | `adapters/mcp/normalize-result.ts` | `isRecord`, `normalizeContentBlock` |
| `normalizeContentBlock` | `adapters/mcp/normalize-result.ts` | `isRecord`, `extractErrorMessage` |
| `buildMcpRuntimeName` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `toLegacyMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `toRuntimePrefix`, `toRuntimeSuffix`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `toLegacyMcpRuntimeName` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `toCanonicalMcpRuntimeName` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toLegacyMcpRuntimeName`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `getMcpRuntimeNameAliasesFromRuntimeName` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toLegacyMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `normalizeMcpTool` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `slugify` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toLegacyMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `toRuntimePrefix`, `toRuntimeSuffix`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `toRuntimePrefix` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toLegacyMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `slugify`, `toRuntimeSuffix`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `toRuntimeSuffix` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `toLegacyMcpRuntimeName`, `toCanonicalMcpRuntimeName`, `slugify`, `toRuntimePrefix`, `cloneSchemaObject`, `createMcpToolFingerprint` |
| `cloneSchemaObject` | `adapters/mcp/normalize-tool.ts` | `parseMcpAppsToolMeta`, `isMcpToolModelVisible`, `buildMcpRuntimeName`, `createMcpToolFingerprint` |
| `isAuthorizationCodeServer` | `adapters/mcp/oauth-authorization-code.ts` | `toAuthorizationCodeAuthConfig` |
| `canStartAuthorizationCodeOAuth` | `adapters/mcp/oauth-authorization-code.ts` | `toAuthorizationCodeAuthConfig` |
| `toAuthorizationCodeAuthConfig` | `adapters/mcp/oauth-authorization-code.ts` |  |
| `toAuthorizationCodeServerConfig` | `adapters/mcp/oauth-authorization-code.ts` | `toAuthorizationCodeAuthConfig` |
| `createStoredMcpOAuthProvider` | `adapters/mcp/oauth-provider.ts` |  |
| `beginStoredMcpAuthorization` | `adapters/mcp/oauth-provider.ts` | `createStoredMcpOAuthProvider` |
| `completeStoredMcpAuthorization` | `adapters/mcp/oauth-provider.ts` | `createStoredMcpOAuthProvider` |
| `buildClientMetadata` | `adapters/mcp/oauth-provider.ts` | `protectStoredOauthTokens`, `protectStoredOauthClientInformation`, `cloneStoredOauthDiscoveryState`, `createMcpOauthAuthorizationRepository`, `createMcpOauthCredentialRepository`, `getById` |
| `toStaticClientInformation` | `adapters/mcp/oauth-provider.ts` | `buildClientMetadata`, `protectStoredOauthTokens`, `protectStoredOauthClientInformation`, `cloneStoredOauthDiscoveryState`, `createMcpOauthAuthorizationRepository`, `createMcpOauthCredentialRepository`, `getById` |
| `encryptStoredSecret` | `adapters/mcp/stored-auth.ts` | `isEncryptedSecret`, `createSecretBox` |
| `decryptStoredSecret` | `adapters/mcp/stored-auth.ts` | `encryptStoredSecret`, `isEncryptedSecret`, `createSecretBox` |
| `protectStoredHttpAuthConfig` | `adapters/mcp/stored-auth.ts` | `encryptStoredSecret`, `decryptStoredSecret` |
| `revealStoredHttpAuthConfig` | `adapters/mcp/stored-auth.ts` | `decryptStoredSecret` |
| `protectStoredOauthTokens` | `adapters/mcp/stored-oauth.ts` | `encryptStoredSecret`, `decryptStoredSecret` |
| `revealStoredOauthTokens` | `adapters/mcp/stored-oauth.ts` | `encryptStoredSecret`, `decryptStoredSecret` |
| `protectStoredOauthClientInformation` | `adapters/mcp/stored-oauth.ts` | `encryptStoredSecret`, `decryptStoredSecret` |
| `revealStoredOauthClientInformation` | `adapters/mcp/stored-oauth.ts` | `decryptStoredSecret` |
| `cloneStoredOauthDiscoveryState` | `adapters/mcp/stored-oauth.ts` |  |
| `createMcpToolFingerprint` | `adapters/mcp/tool-fingerprint.ts` | `canonicalize` |
| `canonicalize` | `adapters/mcp/tool-fingerprint.ts` |  |
| `createLangfuseExporter` | `adapters/observability/langfuse/exporter.ts` | `isTerminalRootRunEvent`, `normalizeBaseUrl`, `collectObservationKeys`, `loadTraceSnapshot`, `exportRunObservation` |
| `isTerminalRootRunEvent` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `normalizeBaseUrl` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `asString` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `truncateText`, `normalizeTagValue`, `toPayloadIdentity`, `createEventOutboxRepository`, `findTerminalRootRunId`, `collectLatestTerminalRootRunEvents`, `createDomainEventRepository`, `createRunRepository`, `getById` |
| `asNumber` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `toDisplayNameFromAlias` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `toEventPayload` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `toRunInput` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `toErrorOutput` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `toErrorMessage` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue` |
| `truncateText` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `normalizeTagValue`, `tryParseJson` |
| `normalizeTagValue` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `tryParseJson` |
| `toTag` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `normalizeTagValue`, `tryParseJson` |
| `tryParseJson` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString` |
| `toStructuredContentPart` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `tryParseJson` |
| `toStructuredMessages` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `toStructuredContentPart` |
| `toStructuredGenerationTools` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `toStructuredContentPart` |
| `toStructuredNativeTools` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `toStructuredContentPart` |
| `toStructuredGenerationOutputItems` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `toStructuredContentPart` |
| `hasNonMessageOutputItem` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `normalizeUsageKey` |
| `toStructuredGenerationToolCalls` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `normalizeUsageKey` |
| `toNumericRecord` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload`, `normalizeUsageKey` |
| `normalizeUsageKey` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload` |
| `findUsageValue` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload`, `toStructuredMessages`, `toStructuredGenerationTools`, `toStructuredNativeTools`, `normalizeUsageKey` |
| `collectUsageDetails` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload`, `toStructuredMessages`, `toStructuredGenerationTools`, `toStructuredNativeTools`, `normalizeUsageKey` |
| `toCanonicalUsageKey` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload`, `toStructuredMessages`, `toStructuredGenerationTools`, `toStructuredNativeTools`, `normalizeUsageKey` |
| `toRunOutput` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toEventPayload`, `toStructuredMessages`, `toStructuredGenerationTools`, `toStructuredNativeTools` |
| `toGenerationInput` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toStructuredMessages`, `toStructuredGenerationTools`, `toStructuredNativeTools`, `toStructuredGenerationOutputItems`, `hasNonMessageOutputItem`, `toStructuredGenerationToolCalls` |
| `toGenerationModelParameters` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toErrorOutput`, `toStructuredMessages`, `toStructuredGenerationOutputItems`, `hasNonMessageOutputItem`, `toStructuredGenerationToolCalls`, `findUsageValue`, `collectUsageDetails`, `toCanonicalUsageKey`, `createEventStore`, `createRunEventPayload`, `tryAppendRunTelemetryEvent`, `warnTelemetryDrop` |
| `toGenerationOutput` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toErrorOutput`, `toStructuredMessages`, `toStructuredGenerationOutputItems`, `hasNonMessageOutputItem`, `toStructuredGenerationToolCalls`, `findUsageValue`, `collectUsageDetails`, `toCanonicalUsageKey` |
| `toGenerationUsageDetails` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asNumber`, `toNumericRecord`, `findUsageValue`, `collectUsageDetails`, `toCanonicalUsageKey`, `toTraceId`, `createRandomHex`, `toLangfuseObservationId`, `toLangfuseTraceId` |
| `toObservationId` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `toTraceId`, `createRandomHex`, `toLangfuseObservationId`, `toLangfuseTraceId` |
| `toTraceId` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `createRandomHex`, `toLangfuseTraceId` |
| `toScoreId` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `toTraceId`, `createRandomHex`, `toRunObservationName` |
| `createRandomHex` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `toTraceId`, `toRunObservationName` |
| `collectObservationKeys` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `collectToolObservationKeys` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `toRunScope` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `findRunLifecycleEvent` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `findTurn` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `toRunObservationName` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toDisplayNameFromAlias`, `toObservationId`, `toTraceId` |
| `toAgentMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toObservationId`, `toTraceId`, `toRunObservationName` |
| `toRunIdsMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber`, `toObservationId`, `toTraceId` |
| `toRuntimeMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `asNumber` |
| `collectChildRunMetadata` | `adapters/observability/langfuse/exporter.ts` | `toObservationId` |
| `toGenerationToolSummaryMetadata` | `adapters/observability/langfuse/exporter.ts` | `toObservationId`, `collectChildRunMetadata` |
| `toRunMetadata` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toAgentMetadata`, `toRunIdsMetadata`, `toRuntimeMetadata` |
| `toGenerationMetadata` | `adapters/observability/langfuse/exporter.ts` | `asString`, `asNumber`, `toObservationId`, `toAgentMetadata`, `toRunIdsMetadata`, `toRuntimeMetadata`, `collectChildRunMetadata`, `toGenerationToolSummaryMetadata` |
| `toToolMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `toObservationId`, `findTurn`, `collectChildRunMetadata` |
| `toWebSearchMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `findTurn` |
| `toRootTraceMetadata` | `adapters/observability/langfuse/exporter.ts` | `isRecord`, `asString`, `truncateText`, `toTag` |
| `toRootTraceName` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `truncateText`, `toTag` |
| `toRootTraceTags` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `toTag` |
| `toToolWaitingOutput` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `buildRunTree` |
| `toRunWaitingStatusMessage` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `buildRunTree` |
| `toRelevantRunEvents` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn`, `buildRunTree` |
| `pickLatestEvent` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn`, `buildRunTree` |
| `buildRunTree` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn` |
| `buildToolSnapshots` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn` |
| `buildWebSearchSnapshots` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn`, `toWebSearchMetadata` |
| `mergeToolSnapshotsByTurn` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `findTurn`, `pickLatestEvent` |
| `buildGenerationSnapshots` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `toGenerationInput`, `findTurn`, `toGenerationMetadata`, `pickLatestEvent` |
| `buildRunSnapshot` | `adapters/observability/langfuse/exporter.ts` | `toEventPayload`, `toRunInput`, `toErrorMessage`, `toRunOutput`, `findRunLifecycleEvent`, `toRunObservationName`, `toRunMetadata`, `toRunWaitingStatusMessage`, `toRelevantRunEvents`, `pickLatestEvent`, `buildToolSnapshots`, `buildWebSearchSnapshots`, `mergeToolSnapshotsByTurn`, `buildGenerationSnapshots` |
| `loadTraceSnapshot` | `adapters/observability/langfuse/exporter.ts` | `asString`, `toEventPayload`, `toRunScope`, `findRunLifecycleEvent`, `toRootTraceMetadata`, `toRootTraceName`, `toRelevantRunEvents`, `pickLatestEvent`, `buildRunTree`, `buildRunSnapshot`, `createDomainEventRepository`, `createRunRepository`, `getById` |
| `endObservation` | `adapters/observability/langfuse/exporter.ts` | `isRetryableLangfuseStatusCode` |
| `isRetryableLangfuseStatusCode` | `adapters/observability/langfuse/exporter.ts` |  |
| `toLangfuseProviderError` | `adapters/observability/langfuse/exporter.ts` | `isRetryableLangfuseStatusCode` |
| `exportRunObservation` | `adapters/observability/langfuse/exporter.ts` | `exportToolObservation` |
| `exportToolObservation` | `adapters/observability/langfuse/exporter.ts` | `toObservationId`, `toTraceId`, `toScoreId`, `endObservation`, `exportRunObservation` |
| `appendScores` | `adapters/observability/langfuse/exporter.ts` | `toObservationId`, `toTraceId`, `toScoreId`, `toLangfuseProviderError` |
| `toLangfuseObservationId` | `adapters/observability/langfuse/trace-identity.ts` |  |
| `toLangfuseTraceId` | `adapters/observability/langfuse/trace-identity.ts` |  |
| `loadConfig` | `app/config.ts` | `parseCsv`, `parseInteger`, `parseBoolean`, `parseNonNegativeInteger`, `parseOptionalString`, `parseUnitInterval`, `parseBasePath`, `parseAuthMethods` |
| `parseCsv` | `app/config.ts` |  |
| `parseInteger` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `parseBoolean` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `parseNonNegativeInteger` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `parseOptionalString` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `parseUnitInterval` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `parseBasePath` | `app/config.ts` | `deriveAuthMethodsFromMode` |
| `deriveAuthMethodsFromMode` | `app/config.ts` | `parseOptionalString` |
| `parseAuthMethods` | `app/config.ts` | `parseOptionalString`, `deriveAuthMethodsFromMode` |
| `resolveMcpServers` | `app/config.ts` | `parseOptionalString` |
| `createApp` | `app/create-app.ts` | `errorEnvelope`, `apiKeyAuthMiddleware`, `authSessionAuthMiddleware`, `createRootRoutes`, `createApiRoutes`, `resolveCorsOrigin`, `accessLogMiddleware`, `apiResponseMiddleware`, `requestSizeGuardMiddleware`, `runtimeContextMiddleware`, `isDomainErrorException`, `toHttpStatus` |
| `resolveCorsOrigin` | `app/create-app.ts` | `errorEnvelope`, `apiKeyAuthMiddleware`, `authSessionAuthMiddleware`, `createRootRoutes`, `createApiRoutes`, `accessLogMiddleware`, `apiResponseMiddleware`, `requestSizeGuardMiddleware`, `runtimeContextMiddleware`, `isDomainErrorException`, `toHttpStatus` |
| `loadEnvFileIntoProcess` | `app/load-env.ts` | `normalizeValue` |
| `normalizeValue` | `app/load-env.ts` |  |
| `accessLogMiddleware` | `app/middleware/access-log.ts` | `resolveEventLevel` |
| `resolveEventLevel` | `app/middleware/access-log.ts` |  |
| `apiResponseMiddleware` | `app/middleware/api-response.ts` |  |
| `createRequestId` | `app/middleware/request-context.ts` | `createTraceId` |
| `createTraceId` | `app/middleware/request-context.ts` | `createRequestId` |
| `requestSizeGuardMiddleware` | `app/middleware/request-size-guard.ts` | `errorEnvelope` |
| `runtimeContextMiddleware` | `app/middleware/runtime-context.ts` |  |
| `requireAuthenticatedAccount` | `app/require-authenticated-account.ts` |  |
| `requireTenantScope` | `app/require-tenant-scope.ts` |  |
| `resolveRuntimeMcpServers` | `app/runtime.ts` | `createGoogleProvider`, `createOpenAiProvider`, `createLocalBlobStore`, `createMcpGateway`, `createLangfuseExporter`, `registerAgentNativeTools`, `createRealtimeEventRelay`, `createAiInteractionService`, `createActiveRunRegistry`, `createDatabaseClient`, `createToolRegistry`, `createLogger`, `createSystemClock` |
| `createAppRuntime` | `app/runtime.ts` | `createGoogleProvider`, `createOpenAiProvider`, `createLocalBlobStore`, `createMcpGateway`, `createLangfuseExporter`, `resolveRuntimeMcpServers`, `registerAgentNativeTools`, `createRealtimeEventRelay`, `createAiInteractionService`, `createActiveRunRegistry`, `createDatabaseClient`, `createToolRegistry`, `createLogger`, `createSystemClock` |
| `initializeAppRuntime` | `app/runtime.ts` | `shutdown` |
| `closeAppRuntime` | `app/runtime.ts` | `shutdown` |
| `hasTenantResourceOverride` | `application/access/resource-access.ts` | `canAccessSessionOwnerResource`, `isRecoverableLinkLookupError`, `createFileRepository`, `createRunRepository`, `createToolExecutionRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository`, `createWorkSessionRepository` |
| `createResourceAccessService` | `application/access/resource-access.ts` | `canAccessSessionOwnerResource`, `isRecoverableLinkLookupError`, `createFileRepository`, `createRunRepository`, `createToolExecutionRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository`, `createWorkSessionRepository` |
| `canAccessSessionOwnerResource` | `application/access/resource-access.ts` | `createFileRepository`, `createRunRepository`, `createToolExecutionRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository`, `createWorkSessionRepository` |
| `isRecoverableLinkLookupError` | `application/access/resource-access.ts` | `canAccessSessionOwnerResource`, `createFileRepository`, `createRunRepository`, `createToolExecutionRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository`, `createWorkSessionRepository` |
| `canReadAgent` | `application/agents/agent-access.ts` |  |
| `canWriteAgents` | `application/agents/agent-access.ts` |  |
| `getAgentDescription` | `application/agents/agent-capabilities.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `normalizeText`, `toOptionalText`, `getNativeToolNames`, `parseStoredAgentFrontmatter`, `getGrantedToolProfileId`, `createMcpToolAssignmentRepository`, `createMcpToolCacheRepository` |
| `listAgentCapabilities` | `application/agents/agent-capabilities.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `normalizeText`, `toOptionalText`, `getNativeToolNames`, `getGrantedToolProfileId`, `createMcpToolAssignmentRepository`, `createMcpToolCacheRepository` |
| `normalizeText` | `application/agents/agent-capabilities.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `getNativeToolNames`, `parseStoredAgentFrontmatter`, `getGrantedToolProfileId`, `createMcpToolAssignmentRepository`, `createMcpToolCacheRepository`, `normalizeAssistantMessageContent` |
| `toOptionalText` | `application/agents/agent-capabilities.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `normalizeText`, `getNativeToolNames`, `parseStoredAgentFrontmatter`, `getGrantedToolProfileId`, `createMcpToolAssignmentRepository`, `createMcpToolCacheRepository` |
| `getNativeToolNames` | `application/agents/agent-capabilities.ts` | `getMcpRuntimeNameAliasesFromRuntimeName`, `normalizeText`, `parseStoredAgentFrontmatter`, `getGrantedToolProfileId`, `createMcpToolAssignmentRepository`, `createMcpToolCacheRepository` |
| `parseCreateAgentInput` | `application/agents/agent-management-service.ts` | `canWriteAgents`, `toMarkdownTools` |
| `parseUpdateAgentInput` | `application/agents/agent-management-service.ts` | `canWriteAgents`, `toMarkdownTools` |
| `parseMarkdownUpdateInput` | `application/agents/agent-management-service.ts` | `canWriteAgents`, `toMarkdownTools` |
| `createAgentManagementService` | `application/agents/agent-management-service.ts` | `canReadAgent`, `getAgentDescription`, `createAgentSyncService`, `requireMembership`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository` |
| `formatZodError` | `application/agents/agent-management-service.ts` | `canWriteAgents`, `toView`, `canReadToolProfile`, `requireMembership`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository`, `canWriteToolProfiles`, `toToolProfileSummary` |
| `requireWritableScope` | `application/agents/agent-management-service.ts` | `canWriteAgents`, `toMarkdownTools` |
| `toMarkdownTools` | `application/agents/agent-management-service.ts` |  |
| `toStructuredMarkdownDocument` | `application/agents/agent-management-service.ts` | `toMarkdownTools` |
| `toMergedStructuredUpdateDocument` | `application/agents/agent-management-service.ts` | `canReadAgent`, `toMarkdownTools`, `createAgentSyncService`, `requireMembership`, `createAgentRepository`, `getById`, `createTenantMembershipRepository` |
| `summarizeAgent` | `application/agents/agent-management-service.ts` | `canReadAgent`, `createAgentSyncService`, `requireMembership`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository` |
| `matchesAgentListOptions` | `application/agents/agent-management-service.ts` | `canReadAgent`, `getAgentDescription`, `createAgentSyncService`, `requireMembership`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository` |
| `toAgentMarkdownFrontmatterJson` | `application/agents/agent-markdown.ts` | `formatZodError`, `toValidationError`, `normalizeNewlines`, `toTypedFrontmatter` |
| `parseAgentMarkdown` | `application/agents/agent-markdown.ts` | `toAgentMarkdownFrontmatterJson`, `toValidationError`, `normalizeNewlines`, `normalizeInstructionsMd`, `parseFrontmatterJson` |
| `parseStoredAgentFrontmatter` | `application/agents/agent-markdown.ts` | `toAgentMarkdownFrontmatterJson`, `normalizeNewlines`, `normalizeInstructionsMd`, `parseFrontmatterJson` |
| `serializeAgentMarkdown` | `application/agents/agent-markdown.ts` | `toAgentMarkdownFrontmatterJson`, `normalizeNewlines`, `normalizeInstructionsMd` |
| `toValidationError` | `application/agents/agent-markdown.ts` | `normalizeNewlines`, `buildModelConfigJson`, `buildToolPolicyJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson` |
| `normalizeNewlines` | `application/agents/agent-markdown.ts` |  |
| `normalizeInstructionsMd` | `application/agents/agent-markdown.ts` | `normalizeNewlines` |
| `toTypedFrontmatter` | `application/agents/agent-markdown.ts` |  |
| `parseFrontmatterJson` | `application/agents/agent-markdown.ts` | `formatZodError`, `toAgentMarkdownFrontmatterJson`, `toValidationError`, `normalizeNewlines`, `normalizeInstructionsMd`, `toTypedFrontmatter` |
| `getGrantedToolProfileId` | `application/agents/agent-runtime-policy.ts` | `hasNativeToolGrant`, `isModelProvider`, `isPlainObject`, `getOptionalString`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `resolveRuntimeSettingsFromAgentRevision` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `isModelProvider`, `isPlainObject`, `getOptionalString`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `hasNativeToolGrant` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `getGrantedMcpProfile` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `createAgentRevisionRepository`, `getById` |
| `isNativeToolAllowedForRun` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `createAgentRevisionRepository`, `getById` |
| `isToolAllowedForRun` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `createAgentRevisionRepository`, `getById` |
| `isModelProvider` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `isPlainObject`, `getOptionalString`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `isPlainObject` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `isModelProvider`, `getOptionalString`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `getOptionalString` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `isModelProvider`, `isPlainObject`, `getToolPolicy`, `createAgentRevisionRepository`, `getById` |
| `getToolPolicy` | `application/agents/agent-runtime-policy.ts` | `getGrantedToolProfileId`, `hasNativeToolGrant`, `isModelProvider`, `isPlainObject`, `getOptionalString`, `createAgentRevisionRepository`, `getById` |
| `createAgentSyncService` | `application/agents/agent-sync-service.ts` | `parseAgentMarkdown`, `serializeAgentMarkdown`, `toConflictError`, `toExportDocument`, `createEventStore`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `getById` |
| `buildChecksumSha256` | `application/agents/agent-sync-service.ts` | `buildModelConfigJson`, `buildToolPolicyJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson` |
| `toConflictError` | `application/agents/agent-sync-service.ts` | `buildModelConfigJson`, `buildToolPolicyJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson`, `toChildRunReplayOutput` |
| `buildModelConfigJson` | `application/agents/agent-sync-service.ts` | `buildToolPolicyJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson` |
| `buildToolPolicyJson` | `application/agents/agent-sync-service.ts` | `toValidationError`, `buildModelConfigJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson` |
| `buildMemoryPolicyJson` | `application/agents/agent-sync-service.ts` | `toValidationError`, `buildModelConfigJson`, `buildToolPolicyJson`, `buildWorkspacePolicyJson` |
| `buildWorkspacePolicyJson` | `application/agents/agent-sync-service.ts` | `parseStoredAgentFrontmatter`, `toValidationError`, `buildModelConfigJson`, `buildToolPolicyJson`, `buildMemoryPolicyJson` |
| `buildResolvedConfigJson` | `application/agents/agent-sync-service.ts` | `parseStoredAgentFrontmatter`, `toValidationError`, `buildModelConfigJson`, `buildToolPolicyJson`, `buildMemoryPolicyJson`, `buildWorkspacePolicyJson` |
| `normalizeTools` | `application/agents/agent-sync-service.ts` | `parseStoredAgentFrontmatter`, `toValidationError`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository` |
| `toRevisionToolProfileId` | `application/agents/agent-sync-service.ts` | `parseStoredAgentFrontmatter`, `toValidationError`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `getById` |
| `resolveSubagentDefinitions` | `application/agents/agent-sync-service.ts` | `parseStoredAgentFrontmatter`, `toValidationError`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `getById` |
| `toExportDocument` | `application/agents/agent-sync-service.ts` | `parseAgentMarkdown`, `parseStoredAgentFrontmatter`, `serializeAgentMarkdown`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `getById` |
| `createDelegationService` | `application/agents/delegation-service.ts` | `canReadAgent`, `createEventAppender`, `createEventStore`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createFileLinkRepository`, `createFileRepository`, `createItemRepository`, `createJobDependencyRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `getById` |
| `formatDelegationHandoffText` | `application/agents/delegation-service.ts` | `collectParentVisibleFileIds` |
| `formatDelegatedTaskText` | `application/agents/delegation-service.ts` | `collectParentVisibleFileIds` |
| `toApiVersion` | `application/agents/delegation-service.ts` | `collectParentVisibleFileIds` |
| `createEventAppender` | `application/agents/delegation-service.ts` | `collectParentVisibleFileIds` |
| `collectParentVisibleFileIds` | `application/agents/delegation-service.ts` |  |
| `linkInputFilesToChildRun` | `application/agents/delegation-service.ts` | `collectParentVisibleFileIds`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createFileLinkRepository`, `createFileRepository`, `createItemRepository`, `createRunRepository` |
| `registerAgentNativeTools` | `application/agents/register-agent-native-tools.ts` | `isNativeToolAllowedForRun`, `createDelegationService` |
| `resolveSuspendWaitPair` | `application/agents/register-agent-native-tools.ts` | `createDelegationService` |
| `resumeDelegatedRun` | `application/agents/resume-delegated-run-service.ts` | `toCommandContext`, `resolveRunWait`, `createRunRepository`, `getById` |
| `resolveRootRunAgentBinding` | `application/agents/root-run-agent-binding.ts` | `resolveRuntimeSettingsFromAgentRevision`, `resolveReadableAgent`, `createAccountPreferencesRepository` |
| `resolveReadableAgent` | `application/agents/root-run-agent-binding.ts` | `canReadAgent`, `createAgentRepository`, `createAgentRevisionRepository`, `createAccountPreferencesRepository`, `getById` |
| `resolveRootRunTargetSelection` | `application/agents/root-run-target-input.ts` |  |
| `parseBootstrapSessionInput` | `application/commands/bootstrap-session.ts` | `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `createEventStore`, `requireMembership`, `createWorkspaceService`, `createRunRepository`, `createSessionMessageRepository`, `createSessionThreadRepository`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `createBootstrapSessionCommand` | `application/commands/bootstrap-session.ts` | `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `createEventStore`, `requireMembership`, `createWorkspaceService`, `createRunRepository`, `createSessionMessageRepository`, `createSessionThreadRepository`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `parseBranchThreadInput` | `application/commands/branch-thread.ts` | `createResourceAccessService`, `hasActiveRootJobStatus`, `copyThreadMessagesThroughSource`, `createEventStore`, `loadThreadRootJobReadModel`, `createFileLinkRepository`, `createFileRepository`, `createSessionMessageRepository`, `createSessionThreadRepository` |
| `createBranchThreadCommand` | `application/commands/branch-thread.ts` | `createResourceAccessService`, `hasActiveRootJobStatus`, `copyThreadMessagesThroughSource`, `createEventStore`, `loadThreadRootJobReadModel`, `createFileLinkRepository`, `createFileRepository`, `createSessionMessageRepository`, `createSessionThreadRepository` |
| `hasActiveRootJobStatus` | `application/commands/branch-thread.ts` | `createResourceAccessService`, `isBranchableMessage`, `loadThreadRootJobReadModel`, `createSessionMessageRepository` |
| `isBranchableMessage` | `application/commands/branch-thread.ts` | `createResourceAccessService`, `hasActiveRootJobStatus`, `copyThreadMessagesThroughSource`, `loadThreadRootJobReadModel`, `createSessionMessageRepository` |
| `copyThreadMessagesThroughSource` | `application/commands/branch-thread.ts` | `createResourceAccessService`, `hasActiveRootJobStatus`, `isBranchableMessage`, `loadThreadRootJobReadModel`, `createSessionMessageRepository` |
| `parseCancelRunInput` | `application/commands/cancel-run.ts` | `createResourceAccessService`, `createEventStore`, `classifyRunForCancelCommand`, `cancelRunSubtree`, `finalizeRunCancellation`, `requireMembership`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `createTenantMembershipRepository` |
| `createCancelRunCommand` | `application/commands/cancel-run.ts` | `createResourceAccessService`, `createEventStore`, `classifyRunForCancelCommand`, `cancelRunSubtree`, `finalizeRunCancellation`, `requireMembership`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `createTenantMembershipRepository` |
| `parseCreateSessionThreadInput` | `application/commands/create-session-thread.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `createSessionThreadRepository`, `createTenantMembershipRepository` |
| `createCreateSessionThreadCommand` | `application/commands/create-session-thread.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `createSessionThreadRepository`, `createTenantMembershipRepository` |
| `parseCreateSessionInput` | `application/commands/create-session.ts` | `createEventStore`, `requireMembership`, `appendWorkspaceLifecycleEvents`, `createWorkspaceService`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `createCreateSessionCommand` | `application/commands/create-session.ts` | `createEventStore`, `requireMembership`, `appendWorkspaceLifecycleEvents`, `createWorkspaceService`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `createDeleteThreadCommand` | `application/commands/delete-thread.ts` | `createResourceAccessService`, `collectThreadSubtreeIds`, `pruneThreadHistoryInTransaction` |
| `collectThreadSubtreeIds` | `application/commands/delete-thread.ts` | `createResourceAccessService`, `pruneThreadHistoryInTransaction` |
| `parseEditThreadMessageInput` | `application/commands/edit-thread-message.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `createFileLinkRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createTenantMembershipRepository` |
| `createEditThreadMessageCommand` | `application/commands/edit-thread-message.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `createFileLinkRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createTenantMembershipRepository` |
| `toContent` | `application/commands/edit-thread-message.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `createFileLinkRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createTenantMembershipRepository`, `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection` |
| `createEventStore` | `application/commands/event-store.ts` | `isEventOutboxTopic`, `normalizeOutboxTopics`, `signalOutboxPending`, `getCanonicalCommittedEventContract`, `resolveCanonicalCommittedEventOutboxTopics` |
| `isEventOutboxTopic` | `application/commands/event-store.ts` | `normalizeOutboxTopics`, `getCanonicalCommittedEventContract`, `resolveCanonicalCommittedEventOutboxTopics` |
| `normalizeOutboxTopics` | `application/commands/event-store.ts` | `isEventOutboxTopic`, `getCanonicalCommittedEventContract`, `resolveCanonicalCommittedEventOutboxTopics` |
| `parseExecuteRunInput` | `application/commands/execute-run.ts` | `createResourceAccessService`, `toConfigSnapshot`, `queueLinkedJob`, `waitForRunToReachDurableState`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository` |
| `createExecuteRunCommand` | `application/commands/execute-run.ts` | `createResourceAccessService`, `toConfigSnapshot`, `queueLinkedJob`, `waitForRunToReachDurableState`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository` |
| `resolveConfigSnapshotReasoning` | `application/commands/execute-run.ts` | `createResourceAccessService`, `toConfigSnapshot`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository` |
| `toConfigSnapshot` | `application/commands/execute-run.ts` | `createResourceAccessService`, `resolveConfigSnapshotReasoning`, `queueLinkedJob`, `waitForRunToReachDurableState`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository`, `toToolArgs`, `requiresApprovalForWait`, `resolveRunEventThreadId`, `toChildRunResultKind`, `toChildRunSummary`, `isConfirmationWait` |
| `buildFileDeletionPlanFromDirectLinks` | `application/commands/file-link-cleanup.ts` | `uniqueStrings` |
| `selectFileDeletionPlan` | `application/commands/file-link-cleanup.ts` | `buildFileDeletionPlanFromDirectLinks` |
| `uniqueStrings` | `application/commands/file-link-cleanup.ts` | `blocksPermanentDelete` |
| `createInternalCommandContext` | `application/commands/internal-command-context.ts` |  |
| `parsePostThreadMessageInput` | `application/commands/post-thread-message.ts` | `createResourceAccessService`, `toContent`, `createEventStore`, `reopenThreadRootJobForNewMessage`, `requireMembership`, `createSessionMessageRepository`, `createTenantMembershipRepository` |
| `createPostThreadMessageCommand` | `application/commands/post-thread-message.ts` | `createResourceAccessService`, `toContent`, `createEventStore`, `reopenThreadRootJobForNewMessage`, `requireMembership`, `createSessionMessageRepository`, `createTenantMembershipRepository` |
| `parseResumeRunInput` | `application/commands/resume-run.ts` | `waitForRunToReachDurableState`, `resolveRunWait` |
| `createResumeRunCommand` | `application/commands/resume-run.ts` | `waitForRunToReachDurableState`, `resolveRunWait` |
| `parseStartThreadInteractionInput` | `application/commands/start-thread-interaction.ts` | `createResourceAccessService`, `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `requireMembership`, `createFileLinkRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `createStartThreadInteractionCommand` | `application/commands/start-thread-interaction.ts` | `createResourceAccessService`, `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `createEventStore`, `requireMembership`, `createWorkspaceService`, `createFileLinkRepository`, `createJobRepository`, `createRunRepository`, `createSessionMessageRepository`, `createWorkSessionRepository`, `createTenantMembershipRepository` |
| `deriveTask` | `application/commands/start-thread-interaction.ts` | `createResourceAccessService`, `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository` |
| `pickReusableRootJob` | `application/commands/start-thread-interaction.ts` | `createResourceAccessService`, `resolveRootRunAgentBinding`, `resolveRootRunTargetSelection`, `requireMembership`, `createRunRepository`, `createTenantMembershipRepository` |
| `pruneThreadHistoryInTransaction` | `application/commands/thread-history-pruning.ts` | `uniqueStrings`, `blocksPermanentDelete` |
| `jsonStringAt` | `application/commands/thread-history-pruning.ts` | `uniqueStrings`, `blocksPermanentDelete` |
| `blocksPermanentDelete` | `application/commands/thread-history-pruning.ts` | `uniqueStrings` |
| `ensureFilesAttachedToMessage` | `application/commands/thread-message-files.ts` |  |
| `replaceMessageFiles` | `application/commands/thread-message-files.ts` | `buildFileDeletionPlanFromDirectLinks`, `jsonStringAt`, `ensureFilesAttachedToMessage` |
| `dispatchBackgroundEvent` | `application/events/background-dispatcher.ts` | `createInternalCommandContext`, `toInternalTenantScope`, `processThreadNamingRequest` |
| `toInternalTenantScope` | `application/events/background-dispatcher.ts` | `createInternalCommandContext`, `processThreadNamingRequest` |
| `dispatchLangfuseEvent` | `application/events/langfuse-dispatcher.ts` |  |
| `signalOutboxPending` | `application/events/outbox-signal.ts` |  |
| `createEventOutboxWorker` | `application/events/outbox-worker.ts` | `createDispatchers`, `createEventOutboxLane`, `createLaneBackedEventOutboxWorker` |
| `createObservabilityOutboxWorker` | `application/events/outbox-worker.ts` | `createDispatchers`, `createEventOutboxLane`, `createLaneBackedEventOutboxWorker` |
| `shouldQuarantineObservabilityFailure` | `application/events/outbox-worker.ts` | `addMilliseconds`, `dispatchBackgroundEvent`, `dispatchLangfuseEvent`, `dispatchProjectionEvent`, `createEventOutboxRepository` |
| `createDispatchers` | `application/events/outbox-worker.ts` | `addMilliseconds`, `dispatchBackgroundEvent`, `dispatchLangfuseEvent`, `shouldQuarantineObservabilityFailure`, `dispatchProjectionEvent`, `createEventOutboxRepository` |
| `createEventOutboxLane` | `application/events/outbox-worker.ts` | `addMilliseconds`, `shouldQuarantineObservabilityFailure`, `createEventOutboxRepository` |
| `createLaneBackedEventOutboxWorker` | `application/events/outbox-worker.ts` | `createDispatchers`, `createEventOutboxLane`, `createEventOutboxRepository` |
| `dispatchProjectionEvent` | `application/events/projection-dispatcher.ts` | `dispatchRunContextProjection`, `dispatchMessagePostedProjection` |
| `readPayloadString` | `application/events/projection-dispatcher.ts` | `createInternalCommandContext`, `resolveExecutionScopeForSession`, `listVisibleMessages`, `ensureProjectedThreadContext`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `matchesSession`, `matchesThread`, `matchesRun` |
| `dispatchRunContextProjection` | `application/events/projection-dispatcher.ts` | `createInternalCommandContext`, `readPayloadString`, `resolveExecutionScopeForSession`, `listVisibleMessages`, `ensureProjectedThreadContext`, `createRunRepository`, `createSessionMessageRepository`, `getById` |
| `dispatchMessagePostedProjection` | `application/events/projection-dispatcher.ts` | `createInternalCommandContext`, `readPayloadString`, `dispatchRunContextProjection`, `resolveExecutionScopeForSession`, `ensureProjectedThreadContext`, `createRunRepository`, `createSessionMessageRepository` |
| `createRealtimeEventRelay` | `application/events/realtime-relay.ts` | `matchesCategory`, `matchesScope`, `clearPendingTimer` |
| `matchesCategory` | `application/events/realtime-relay.ts` | `matchesScope`, `clearPendingTimer`, `matchesDomainEventStreamScope` |
| `matchesScope` | `application/events/realtime-relay.ts` | `matchesCategory`, `clearPendingTimer`, `matchesDomainEventStreamScope` |
| `clearPendingTimer` | `application/events/realtime-relay.ts` | `matchesCategory`, `matchesScope` |
| `loadVisibleFileContext` | `application/files/file-context.ts` | `toTextContent`, `loadEntry`, `resolveFileLabel`, `createFileRepository` |
| `toFileContextMessages` | `application/files/file-context.ts` | `toTextContent`, `resolveFileLabel` |
| `isTextLikeMimeType` | `application/files/file-context.ts` | `toInlineText`, `toMetadataOnlyText` |
| `toTextContent` | `application/files/file-context.ts` | `isTextLikeMimeType`, `toInlineText`, `toMetadataOnlyText`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId`, `toChildRunReplayOutput` |
| `toInlineText` | `application/files/file-context.ts` | `isTextLikeMimeType`, `toMetadataOnlyText`, `createFileRepository` |
| `toMetadataOnlyText` | `application/files/file-context.ts` | `isTextLikeMimeType`, `toInlineText`, `createFileRepository` |
| `loadEntry` | `application/files/file-context.ts` | `isTextLikeMimeType`, `toInlineText`, `toMetadataOnlyText`, `createFileRepository` |
| `resolveFileLabel` | `application/files/file-context.ts` | `toTextContent` |
| `searchFilePicker` | `application/files/file-picker-search.ts` | `createResourceAccessService`, `scoreEntry`, `dedupeAttachments`, `filterFilesWithPresentBlobs`, `clampLimit`, `createWorkspaceService`, `createFileRepository` |
| `normalizeSeparators` | `application/files/file-picker-search.ts` | `normalizeBlobStorageKey`, `escapeRegex`, `globToRegex` |
| `normalizeBlobStorageKey` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `escapeRegex`, `globToRegex` |
| `resolveBlobStoragePath` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `normalizeBlobStorageKey`, `escapeRegex`, `globToRegex`, `matchIgnoreRule` |
| `escapeRegex` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `globToRegex`, `compileIgnoreRule`, `matchIgnoreRule`, `normalizeLineEndings`, `normalizeExcerpt`, `stripLargeTextPasteHiddenMetadata`, `toMessageText`, `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource` |
| `globToRegex` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `escapeRegex`, `compileIgnoreRule`, `matchIgnoreRule` |
| `compileIgnoreRule` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `globToRegex`, `matchIgnoreRule`, `readIgnoreRules` |
| `matchIgnoreRule` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `compileIgnoreRule`, `isIgnored`, `readIgnoreRules`, `toDepth` |
| `isIgnored` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `compileIgnoreRule`, `matchIgnoreRule`, `readIgnoreRules`, `toFileExtension`, `toDepth` |
| `readIgnoreRules` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `compileIgnoreRule`, `isIgnored`, `toFileExtension`, `toDepth` |
| `toFileExtension` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `isIgnored`, `readIgnoreRules`, `toDepth`, `buildWorkspaceIndex` |
| `toDepth` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `isIgnored`, `readIgnoreRules`, `toFileExtension`, `buildWorkspaceIndex` |
| `buildWorkspaceIndex` | `application/files/file-picker-search.ts` | `normalizeSeparators`, `isIgnored`, `readIgnoreRules`, `toFileExtension`, `toDepth` |
| `extensionBoost` | `application/files/file-picker-search.ts` |  |
| `fuzzyIndices` | `application/files/file-picker-search.ts` |  |
| `dedupeSortedIndices` | `application/files/file-picker-search.ts` | `extensionBoost`, `recencyBoost` |
| `mapNameIndicesToPathIndices` | `application/files/file-picker-search.ts` | `extensionBoost`, `recencyBoost` |
| `recencyBoost` | `application/files/file-picker-search.ts` | `extensionBoost`, `fuzzyIndices`, `dedupeSortedIndices`, `mapNameIndicesToPathIndices` |
| `scoreEntry` | `application/files/file-picker-search.ts` | `toFileExtension`, `extensionBoost`, `fuzzyIndices`, `dedupeSortedIndices`, `mapNameIndicesToPathIndices`, `recencyBoost` |
| `toAttachmentEntry` | `application/files/file-picker-search.ts` | `resolveBlobStoragePath`, `toFileExtension`, `createWorkspaceService` |
| `dedupeAttachments` | `application/files/file-picker-search.ts` | `resolveBlobStoragePath`, `toAttachmentEntry`, `createWorkspaceService`, `createFileRepository` |
| `filterFilesWithPresentBlobs` | `application/files/file-picker-search.ts` | `createResourceAccessService`, `resolveBlobStoragePath`, `createWorkspaceService`, `createFileRepository` |
| `clampLimit` | `application/files/file-picker-search.ts` | `createResourceAccessService`, `dedupeAttachments`, `filterFilesWithPresentBlobs`, `createWorkspaceService`, `createFileRepository` |
| `toSearchResultItem` | `application/files/file-picker-search.ts` | `createResourceAccessService`, `scoreEntry`, `dedupeAttachments`, `filterFilesWithPresentBlobs`, `clampLimit`, `createWorkspaceService`, `createFileRepository` |
| `createUploadFileCommand` | `application/files/upload-file.ts` | `createResourceAccessService`, `requireMembership`, `createWorkspaceService`, `isMimeTypeAllowed`, `createUploadRepository`, `createTenantMembershipRepository` |
| `sanitizeFilenameSegment` | `application/files/upload-file.ts` | `createEventStore`, `toAttachmentFilename`, `requireMembership`, `createUploadRepository`, `createTenantMembershipRepository` |
| `toAttachmentFilename` | `application/files/upload-file.ts` | `createEventStore`, `sanitizeFilenameSegment`, `requireMembership`, `createUploadRepository`, `createTenantMembershipRepository` |
| `toStorageKey` | `application/files/upload-file.ts` | `createEventStore`, `toAttachmentFilename`, `requireMembership`, `isMimeTypeAllowed`, `createUploadRepository`, `createTenantMembershipRepository` |
| `markUploadFailed` | `application/files/upload-file.ts` | `createResourceAccessService`, `createEventStore`, `requireMembership`, `isMimeTypeAllowed`, `createUploadRepository`, `createTenantMembershipRepository` |
| `assembleThreadInteractionRequest` | `application/interactions/assemble-thread-interaction-request.ts` | `toFileContextMessages`, `toMetadata`, `toFallbackMessages`, `toSummaryMessages`, `toAgentProfileMessages`, `toObservationMessages`, `toReflectionMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `resolveRequestedModel`, `resolveRequestedModelAlias`, `resolveRequestedReasoning`, `resolveRequestedMaxOutputTokens`, `resolveRequestedTemperature`, `toVisibleMessages`, `toItemMessages`, `createContextLayer`, `createContextBudgetReport`, `buildInteractionToolingRequest`, `collectInlineReferencedUploadedFileIds` |
| `toMetadata` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `formatObservationMemoryText`, `formatReflectionMemoryText` |
| `toFallbackMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `formatObservationMemoryText`, `formatReflectionMemoryText` |
| `toSummaryMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `formatObservationMemoryText`, `formatReflectionMemoryText` |
| `toAgentProfileMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `formatObservationMemoryText`, `formatReflectionMemoryText` |
| `toObservationMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `isReasoningOptions`, `formatObservationMemoryText`, `formatReflectionMemoryText` |
| `toReflectionMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `toTextContent`, `isReasoningOptions`, `formatReflectionMemoryText` |
| `toActiveMcpToolMessages` | `application/interactions/assemble-thread-interaction-request.ts` | `resolveRequestedProvider`, `isReasoningOptions`, `resolveRequestedMaxOutputTokens` |
| `resolveRequestedProvider` | `application/interactions/assemble-thread-interaction-request.ts` | `isReasoningOptions`, `resolveRequestedMaxOutputTokens`, `toItemMessages` |
| `resolveRequestedModel` | `application/interactions/assemble-thread-interaction-request.ts` | `resolveRequestedProvider`, `isReasoningOptions`, `resolveRequestedMaxOutputTokens`, `toItemMessages`, `createContextLayer`, `collectInlineReferencedUploadedFileIds` |
| `resolveRequestedModelAlias` | `application/interactions/assemble-thread-interaction-request.ts` | `toSummaryMessages`, `toAgentProfileMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `isReasoningOptions`, `resolveRequestedMaxOutputTokens`, `toItemMessages`, `createContextLayer`, `collectInlineReferencedUploadedFileIds` |
| `isReasoningOptions` | `application/interactions/assemble-thread-interaction-request.ts` | `toSummaryMessages`, `toAgentProfileMessages`, `toObservationMessages`, `toReflectionMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `resolveRequestedMaxOutputTokens`, `toVisibleMessages`, `toItemMessages`, `createContextLayer`, `collectInlineReferencedUploadedFileIds` |
| `resolveRequestedReasoning` | `application/interactions/assemble-thread-interaction-request.ts` | `toFileContextMessages`, `toFallbackMessages`, `toSummaryMessages`, `toAgentProfileMessages`, `toObservationMessages`, `toReflectionMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `isReasoningOptions`, `resolveRequestedMaxOutputTokens`, `toVisibleMessages`, `toItemMessages`, `createContextLayer`, `collectInlineReferencedUploadedFileIds` |
| `resolveRequestedMaxOutputTokens` | `application/interactions/assemble-thread-interaction-request.ts` | `toFileContextMessages`, `toMetadata`, `toFallbackMessages`, `toSummaryMessages`, `toAgentProfileMessages`, `toObservationMessages`, `toReflectionMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `resolveRequestedModel`, `resolveRequestedModelAlias`, `toVisibleMessages`, `toItemMessages`, `createContextLayer`, `buildInteractionToolingRequest`, `collectInlineReferencedUploadedFileIds` |
| `resolveRequestedTemperature` | `application/interactions/assemble-thread-interaction-request.ts` | `toFileContextMessages`, `toMetadata`, `toFallbackMessages`, `toSummaryMessages`, `toAgentProfileMessages`, `toObservationMessages`, `toReflectionMessages`, `toActiveMcpToolMessages`, `resolveRequestedProvider`, `resolveRequestedModel`, `resolveRequestedModelAlias`, `resolveRequestedReasoning`, `resolveRequestedMaxOutputTokens`, `toVisibleMessages`, `toItemMessages`, `createContextLayer`, `createContextBudgetReport`, `buildInteractionToolingRequest`, `collectInlineReferencedUploadedFileIds` |
| `toVisibleMessages` | `application/interactions/build-run-interaction-request.ts` | `toItemTextContent`, `toMappedFunctionOutputJson`, `toAssistantProviderMessageId`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId` |
| `toItemMessages` | `application/interactions/build-run-interaction-request.ts` | `toItemTextContent`, `toMappedFunctionOutputJson`, `toAssistantProviderMessageId`, `toReasoningProviderItemId`, `buildModelVisibleMessageContent` |
| `toItemTextContent` | `application/interactions/build-run-interaction-request.ts` | `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId`, `toChildRunReplayOutput` |
| `toMappedFunctionOutputJson` | `application/interactions/build-run-interaction-request.ts` | `toItemTextContent`, `toAssistantProviderMessageId`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId`, `toChildRunReplayOutput` |
| `toAssistantProviderMessageId` | `application/interactions/build-run-interaction-request.ts` | `toItemTextContent`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId` |
| `toReasoningProviderItemId` | `application/interactions/build-run-interaction-request.ts` | `toItemTextContent`, `toAssistantProviderMessageId`, `buildModelVisibleMessageContent`, `groupInlineImageFilesByMessageId` |
| `estimateMessageTokens` | `application/interactions/context-bundle.ts` | `estimateTextTokens`, `estimateUnknownTokens`, `toBudgetRequestOverhead`, `estimateContentTokens` |
| `createContextLayer` | `application/interactions/context-bundle.ts` | `estimateMessageTokens`, `estimateUnknownTokens`, `toBudgetRequestOverhead` |
| `createContextBudgetReport` | `application/interactions/context-bundle.ts` | `estimateUnknownTokens`, `toBudgetRequestOverhead` |
| `applyLatestBudgetCalibration` | `application/interactions/context-bundle.ts` |  |
| `estimateTextTokens` | `application/interactions/context-bundle.ts` | `estimateMessageTokens`, `estimateUnknownTokens`, `toBudgetRequestOverhead`, `estimateContentTokens` |
| `estimateUnknownTokens` | `application/interactions/context-bundle.ts` | `estimateMessageTokens`, `estimateTextTokens`, `toBudgetRequestOverhead`, `estimateContentTokens` |
| `toBudgetRequestOverhead` | `application/interactions/context-bundle.ts` | `estimateMessageTokens`, `estimateTextTokens`, `estimateUnknownTokens`, `estimateContentTokens` |
| `estimateContentTokens` | `application/interactions/context-bundle.ts` | `estimateMessageTokens`, `estimateTextTokens`, `estimateUnknownTokens`, `toBudgetRequestOverhead` |
| `createAiInteractionService` | `application/interactions/interaction-service.ts` | `resolveInteractionRequest`, `requireConfiguredProvider` |
| `resolveInteractionRequest` | `application/interactions/interaction-service.ts` | `requireConfiguredProvider`, `resolveAiModelTarget` |
| `requireConfiguredProvider` | `application/interactions/interaction-service.ts` | `resolveInteractionRequest` |
| `isModelVisibleFunctionToolName` | `application/interactions/interaction-tooling.ts` | `toToolDefinitions` |
| `toToolDefinitions` | `application/interactions/interaction-tooling.ts` | `isModelVisibleFunctionToolName` |
| `buildInteractionToolingRequest` | `application/interactions/interaction-tooling.ts` | `toToolDefinitions` |
| `loadThreadContext` | `application/interactions/load-thread-context.ts` | `loadVisibleFileContext`, `loadAgentProfile`, `ensureLatestSummaryObserved`, `ensureRunLocalReflected`, `loadScopedMemoryState`, `maybeCompactMainThreadContext`, `listVisibleMessages`, `ensureProjectedThreadContext`, `createContextSummaryRepository`, `createRunDependencyRepository` |
| `loadAgentProfile` | `application/interactions/load-thread-context.ts` | `getAgentDescription`, `listAgentCapabilities`, `resolveWritableMemoryScope`, `tryAppendRunTelemetryEvent`, `createAgentRepository`, `createAgentRevisionRepository`, `createAgentSubagentLinkRepository`, `createMemoryRecordRepository`, `getById` |
| `ensureLatestSummaryObserved` | `application/interactions/load-thread-context.ts` | `loadScopedMemoryState`, `resolveWritableMemoryScope`, `estimateObservationTokenCount`, `observeSummary`, `reflectRunLocalMemory`, `tryAppendRunTelemetryEvent`, `emitProgressReported`, `createMemoryRecordRepository` |
| `ensureRunLocalReflected` | `application/interactions/load-thread-context.ts` | `loadScopedMemoryState`, `resolveWritableMemoryScope`, `estimateReflectionTokenCount`, `reflectRunLocalMemory`, `tryAppendRunTelemetryEvent`, `createMemoryRecordRepository` |
| `loadScopedMemoryState` | `application/interactions/load-thread-context.ts` | `loadVisibleFileContext`, `resolveReadableMemoryScopes`, `maybeCompactMainThreadContext`, `listVisibleMessages`, `ensureProjectedThreadContext`, `createMemoryRecordRepository`, `createContextSummaryRepository`, `createRunDependencyRepository` |
| `listMarkdownImageReferences` | `application/interactions/model-visible-user-content.ts` | `isEscaped`, `findClosingBracket`, `findClosingParen`, `readImageDestination`, `readUploadedFileId`, `normalizeRemoteImageUrl` |
| `buildModelVisibleMessageContent` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId`, `appendText`, `toInlineImagePart` |
| `groupInlineImageFilesByMessageId` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId` |
| `collectInlineReferencedUploadedFileIds` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId` |
| `isEscaped` | `application/interactions/model-visible-user-content.ts` | `findClosingBracket`, `findClosingParen`, `readImageDestination` |
| `findClosingBracket` | `application/interactions/model-visible-user-content.ts` | `isEscaped`, `findClosingParen`, `readImageDestination` |
| `findClosingParen` | `application/interactions/model-visible-user-content.ts` | `isEscaped`, `findClosingBracket`, `readImageDestination` |
| `readImageDestination` | `application/interactions/model-visible-user-content.ts` | `isEscaped`, `findClosingBracket`, `findClosingParen` |
| `readUploadedFileId` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `normalizeRemoteImageUrl`, `appendText`, `toInlineImagePart` |
| `normalizeRemoteImageUrl` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId`, `appendText`, `toInlineImagePart` |
| `appendText` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId`, `normalizeRemoteImageUrl`, `toInlineImagePart` |
| `toInlineImagePart` | `application/interactions/model-visible-user-content.ts` | `listMarkdownImageReferences`, `readUploadedFileId`, `normalizeRemoteImageUrl`, `appendText` |
| `normalizeAssistantMessageContent` | `application/interactions/normalize-interaction-response.ts` | `normalizeText` |
| `normalizeAssistantOutputText` | `application/interactions/normalize-interaction-response.ts` | `normalizeText`, `normalizeAssistantMessageContent` |
| `resolveWritableMemoryScope` | `application/memory/memory-scope.ts` |  |
| `resolveReadableMemoryScopes` | `application/memory/memory-scope.ts` | `resolveWritableMemoryScope` |
| `estimateObservationTokenCount` | `application/memory/observe-summary.ts` | `toTextContent`, `estimateMessageTokens`, `resolveObserverTarget` |
| `formatObservationMemoryText` | `application/memory/observe-summary.ts` | `toTextContent`, `resolveObserverTarget` |
| `observeSummary` | `application/memory/observe-summary.ts` | `toTextContent`, `resolveObserverTarget` |
| `resolveObserverTarget` | `application/memory/observe-summary.ts` | `toTextContent`, `estimateMessageTokens` |
| `toObservationBlock` | `application/memory/observe-summary.ts` | `toTextContent`, `resolveObserverTarget` |
| `shouldReflectRunLocalObservations` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `estimateMessageTokens`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `estimateReflectionTokenCount` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `estimateMessageTokens`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `formatReflectionMemoryText` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `reflectRunLocalMemory` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveReflectionSourceTokenThreshold` |
| `resolveReflectorTarget` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `estimateMessageTokens`, `shouldReflectRunLocalObservations`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `toReflectionBlock` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `toObservationBlocks` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveReflectionSourceTokenThreshold`, `resolveContextWindowForModel` |
| `resolveReflectionSourceTokenThreshold` | `application/memory/reflect-run-local-memory.ts` | `toTextContent`, `shouldReflectRunLocalObservations`, `resolveReflectorTarget`, `toReflectionBlock`, `resolveContextWindowForModel` |
| `appendThreadNamingStartedEvent` | `application/naming/thread-title-events.ts` |  |
| `appendThreadNamingFailedEvent` | `application/naming/thread-title-events.ts` |  |
| `generateThreadTitle` | `application/naming/thread-title-generator.ts` | `toTextContent`, `resolveTitleTarget`, `sanitizeGeneratedTitle` |
| `resolveTitleTarget` | `application/naming/thread-title-generator.ts` | `toTextContent`, `sanitizeGeneratedTitle` |
| `sanitizeGeneratedTitle` | `application/naming/thread-title-generator.ts` | `toTextContent`, `resolveTitleTarget` |
| `sampleThreadTitleSourceText` | `application/naming/thread-title-sampler.ts` | `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `normalizeLineEndings` | `application/naming/thread-title-sampler.ts` | `normalizeExcerpt`, `stripLargeTextPasteHiddenMetadata`, `toMessageText`, `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `normalizeExcerpt` | `application/naming/thread-title-sampler.ts` | `normalizeLineEndings`, `stripLargeTextPasteHiddenMetadata`, `toMessageText`, `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `stripLargeTextPasteHiddenMetadata` | `application/naming/thread-title-sampler.ts` | `normalizeLineEndings`, `normalizeExcerpt`, `toMessageText`, `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `toMessageText` | `application/naming/thread-title-sampler.ts` | `normalizeExcerpt`, `stripLargeTextPasteHiddenMetadata`, `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `trimLongExcerpt` | `application/naming/thread-title-sampler.ts` | `normalizeExcerpt`, `stripLargeTextPasteHiddenMetadata`, `toMessageText`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `normalizeMessageText` | `application/naming/thread-title-sampler.ts` | `normalizeExcerpt`, `stripLargeTextPasteHiddenMetadata`, `toMessageText`, `trimLongExcerpt`, `capCombinedSource`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `capCombinedSource` | `application/naming/thread-title-sampler.ts` | `trimLongExcerpt`, `normalizeMessageText`, `sampleAutoFirstMessage`, `sampleManualRegenerate` |
| `sampleAutoFirstMessage` | `application/naming/thread-title-sampler.ts` | `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleManualRegenerate` |
| `sampleManualRegenerate` | `application/naming/thread-title-sampler.ts` | `trimLongExcerpt`, `normalizeMessageText`, `capCombinedSource`, `sampleAutoFirstMessage` |
| `processThreadNamingRequest` | `application/naming/thread-title-service.ts` | `createEventStore`, `appendThreadNamingStartedEvent`, `appendThreadNamingFailedEvent`, `generateThreadTitle`, `sampleThreadTitleSourceText`, `toFailureError`, `shouldSkipAutoFirstMessageRename`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository` |
| `toFailureError` | `application/naming/thread-title-service.ts` | `createEventStore`, `appendThreadNamingStartedEvent`, `appendThreadNamingFailedEvent`, `generateThreadTitle`, `sampleThreadTitleSourceText`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository` |
| `shouldSkipAutoFirstMessageRename` | `application/naming/thread-title-service.ts` | `createEventStore`, `appendThreadNamingStartedEvent`, `appendThreadNamingFailedEvent`, `generateThreadTitle`, `sampleThreadTitleSourceText`, `toFailureError`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository` |
| `shouldSkipManualRegenerateRename` | `application/naming/thread-title-service.ts` | `createEventStore`, `appendThreadNamingStartedEvent`, `appendThreadNamingFailedEvent`, `generateThreadTitle`, `sampleThreadTitleSourceText`, `toFailureError`, `createRunRepository`, `createSessionMessageRepository`, `getById`, `createSessionThreadRepository` |
| `parseAccountPreferencesPatchInput` | `application/preferences/account-preferences-service.ts` | `canReadAgent`, `formatZodError`, `toView`, `canReadToolProfile`, `requireMembership`, `createAgentRepository`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `createAccountPreferencesService` | `application/preferences/account-preferences-service.ts` | `canReadAgent`, `toView`, `canReadToolProfile`, `requireMembership`, `createAgentRepository`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `toView` | `application/preferences/account-preferences-service.ts` | `formatZodError`, `canReadToolProfile`, `requireMembership`, `createAccountPreferencesRepository`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `createActiveRunRegistry` | `application/runtime/active-run-registry.ts` |  |
| `loadChildRunResultEnvelope` | `application/runtime/child-run-delivery.ts` | `toRunSummary`, `loadSuspendedWaitSummaries`, `resolveRunWait`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `deliverChildResultToParentWaits` | `application/runtime/child-run-delivery.ts` | `loadChildRunResultEnvelope`, `resolveRunWait`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `toRunSummary` | `application/runtime/child-run-delivery.ts` | `toToolArgs`, `requiresApprovalForWait`, `loadSuspendedWaitSummaries`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById` |
| `toToolArgs` | `application/runtime/child-run-delivery.ts` | `toRunSummary`, `requiresApprovalForWait`, `loadSuspendedWaitSummaries`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById`, `dedupeWebReferences`, `isToolAllowedForRun`, `assertRunSnapshotCurrent`, `toToolContext`, `toCancellationError`, `toConflictError`, `isConfirmationWait`, `toChildRunReplayOutput` |
| `requiresApprovalForWait` | `application/runtime/child-run-delivery.ts` | `toRunSummary`, `toToolArgs`, `loadSuspendedWaitSummaries`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById`, `resolveRunEventThreadId`, `toChildRunResultKind`, `toChildRunSummary`, `isConfirmationWait`, `toPendingWaitSummary`, `toEpochMs`, `createRunRepository` |
| `isParentDeliverableSuspendedWait` | `application/runtime/child-run-delivery.ts` | `toRunSummary`, `toToolArgs`, `requiresApprovalForWait`, `loadSuspendedWaitSummaries`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `loadSuspendedWaitSummaries` | `application/runtime/child-run-delivery.ts` | `toRunSummary`, `toToolArgs`, `requiresApprovalForWait`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `maybeCompactMainThreadContext` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `summarizeHeadItems`, `toSummaryMessageTokens`, `computeTailStart`, `getUnsummarizedItems`, `shouldCompact`, `resolveCompactionThresholds`, `createContextSummaryRepository` |
| `truncate` | `application/runtime/context-compaction.ts` | `toTextContent`, `toItemMessages`, `estimateMessageTokens` |
| `summarizeHeadItems` | `application/runtime/context-compaction.ts` | `toTextContent`, `toItemMessages`, `estimateMessageTokens`, `truncate`, `findFunctionCallIndex` |
| `toSummaryMessageTokens` | `application/runtime/context-compaction.ts` | `toTextContent`, `toItemMessages`, `estimateMessageTokens`, `getItemTokenCount`, `findFunctionCallIndex`, `findFunctionResultIndex`, `adjustTailStartForBoundaries` |
| `getItemTokenCount` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `findFunctionCallIndex`, `findFunctionResultIndex`, `adjustTailStartForBoundaries` |
| `findFunctionCallIndex` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `getItemTokenCount`, `findFunctionResultIndex`, `adjustTailStartForBoundaries` |
| `findFunctionResultIndex` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `getItemTokenCount`, `findFunctionCallIndex`, `adjustTailStartForBoundaries` |
| `adjustTailStartForBoundaries` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `getItemTokenCount`, `findFunctionCallIndex`, `findFunctionResultIndex`, `resolveContextWindowForModel` |
| `computeTailStart` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `getItemTokenCount`, `adjustTailStartForBoundaries`, `getUnsummarizedItems`, `shouldCompact`, `resolveCompactionThresholds`, `resolveContextWindowForModel`, `createContextSummaryRepository` |
| `getUnsummarizedItems` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `summarizeHeadItems`, `toSummaryMessageTokens`, `computeTailStart`, `shouldCompact`, `resolveCompactionThresholds`, `resolveContextWindowForModel`, `createContextSummaryRepository` |
| `shouldCompact` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `summarizeHeadItems`, `toSummaryMessageTokens`, `computeTailStart`, `getUnsummarizedItems`, `resolveCompactionThresholds`, `resolveContextWindowForModel`, `createContextSummaryRepository` |
| `resolveCompactionThresholds` | `application/runtime/context-compaction.ts` | `toItemMessages`, `estimateMessageTokens`, `summarizeHeadItems`, `toSummaryMessageTokens`, `computeTailStart`, `getUnsummarizedItems`, `shouldCompact`, `resolveContextWindowForModel`, `createContextSummaryRepository` |
| `executeRunTurnLoop` | `application/runtime/drive-run.ts` | `isNativeToolAllowedForRun`, `isToolAllowedForRun`, `assembleThreadInteractionRequest`, `applyLatestBudgetCalibration`, `loadThreadContext`, `toInactiveRunError`, `toRunCancelledExecutionError`, `finalizeRunCancellation`, `convergeRunExecutionConflict`, `failRun`, `toToolContext`, `createUsageLedgerRepository` |
| `toInactiveRunError` | `application/runtime/drive-run.ts` | `isNativeToolAllowedForRun`, `isToolAllowedForRun`, `assembleThreadInteractionRequest`, `loadThreadContext`, `toRunCancelledExecutionError`, `finalizeRunCancellation`, `convergeRunExecutionConflict`, `failRun`, `toToolContext` |
| `toRunCancelledExecutionError` | `application/runtime/drive-run.ts` | `isNativeToolAllowedForRun`, `isToolAllowedForRun`, `assembleThreadInteractionRequest`, `loadThreadContext`, `toInactiveRunError`, `finalizeRunCancellation`, `convergeRunExecutionConflict`, `failRun`, `toToolContext`, `createUsageLedgerRepository` |
| `dependenciesSatisfiedForJob` | `application/runtime/job-dependencies.ts` | `isTerminalDependencyStatus`, `isDelegatedChildSuspended` |
| `isTerminalDependencyStatus` | `application/runtime/job-dependencies.ts` | `isRecord`, `isDelegatedChildSuspended`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `isDelegatedChildSuspended` | `application/runtime/job-dependencies.ts` | `isRecord`, `isTerminalDependencyStatus`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `appendJobCreatedEvents` | `application/runtime/job-events.ts` | `appendJobStatusChangeEvent`, `appendJobEvent`, `toStatusEventType` |
| `appendJobStatusChangeEvent` | `application/runtime/job-events.ts` | `appendJobEvent`, `toStatusEventType` |
| `toBasePayload` | `application/runtime/job-events.ts` | `appendJobStatusChangeEvent`, `appendJobEvent`, `toStatusEventType` |
| `appendJobEvent` | `application/runtime/job-events.ts` | `appendJobStatusChangeEvent`, `toBasePayload`, `toStatusEventType` |
| `toStatusEventType` | `application/runtime/job-events.ts` | `appendJobStatusChangeEvent`, `appendJobEvent` |
| `loadRunJobReadModel` | `application/runtime/job-read-model.ts` | `toJobReadModel`, `createJobRepository`, `getById` |
| `loadThreadRootJobReadModel` | `application/runtime/job-read-model.ts` | `toJobReadModel`, `createJobRepository` |
| `toJobReadModel` | `application/runtime/job-read-model.ts` | `createJobDependencyRepository`, `createJobRepository`, `getById` |
| `buildRunLinkedJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildDelegatedChildJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildRunLinkedJobRunningReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildRunLinkedJobWaitingReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildRunLinkedJobBlockedReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildRunLinkedJobTerminalReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildThreadInteractionJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildSessionBootstrapJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `buildNewUserMessageJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `parseJobQueueReason` | `application/runtime/job-status-reasons.ts` | `isRecord` |
| `queueLinkedJob` | `application/runtime/job-sync.ts` | `buildRunLinkedJobQueueReason`, `buildRunLinkedJobRunningReason`, `buildRunLinkedJobWaitingReason`, `updateRunLinkedJob` |
| `markLinkedJobRunning` | `application/runtime/job-sync.ts` | `buildRunLinkedJobRunningReason`, `buildRunLinkedJobWaitingReason`, `buildRunLinkedJobBlockedReason`, `updateRunLinkedJob` |
| `markLinkedJobWaiting` | `application/runtime/job-sync.ts` | `buildRunLinkedJobWaitingReason`, `buildRunLinkedJobBlockedReason`, `buildRunLinkedJobTerminalReason`, `updateRunLinkedJob` |
| `markRunJobBlocked` | `application/runtime/job-sync.ts` | `buildRunLinkedJobBlockedReason`, `buildRunLinkedJobTerminalReason`, `updateRunLinkedJob` |
| `markRunJobCompleted` | `application/runtime/job-sync.ts` | `buildRunLinkedJobTerminalReason`, `updateRunLinkedJob`, `createJobRepository` |
| `markRunJobCancelled` | `application/runtime/job-sync.ts` | `appendJobStatusChangeEvent`, `buildRunLinkedJobTerminalReason`, `buildNewUserMessageJobQueueReason`, `updateRunLinkedJob`, `createJobRepository` |
| `recordLinkedJobHeartbeat` | `application/runtime/job-sync.ts` | `appendJobStatusChangeEvent`, `buildNewUserMessageJobQueueReason`, `updateRunLinkedJob`, `createJobRepository` |
| `reopenThreadRootJobForNewMessage` | `application/runtime/job-sync.ts` | `appendJobStatusChangeEvent`, `buildNewUserMessageJobQueueReason`, `createJobRepository` |
| `updateRunLinkedJob` | `application/runtime/job-sync.ts` | `appendJobStatusChangeEvent`, `buildRunLinkedJobQueueReason`, `buildRunLinkedJobRunningReason`, `createJobRepository`, `getById` |
| `createMultiagentWorker` | `application/runtime/multiagent-worker.ts` | `createReadinessActions`, `createReadinessEngine` |
| `createReadinessActions` | `application/runtime/readiness-actions.ts` | `addMilliseconds`, `createEventStore`, `createInternalCommandContext`, `markRunJobBlocked`, `appendRunEvent`, `createRunDependencyRepository`, `createRunRepository` |
| `createReadinessEngine` | `application/runtime/readiness-engine.ts` | `resolveExecutionScopeForSession`, `createRunDependencyRepository` |
| `decisionKey` | `application/runtime/readiness-engine.ts` | `firstUnskipped`, `matchesDecisionFilter`, `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc` |
| `firstUnskipped` | `application/runtime/readiness-engine.ts` | `decisionKey`, `matchesDecisionFilter`, `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc` |
| `matchesDecisionFilter` | `application/runtime/readiness-engine.ts` | `firstUnskipped`, `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc` |
| `firstFilteredUnskipped` | `application/runtime/readiness-engine.ts` | `firstUnskipped`, `matchesDecisionFilter`, `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `isHeartbeatPast` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `isDue` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareNullableAsc` | `application/runtime/readiness-engine.ts` | `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareNumberAsc` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareStringAsc` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `createRunDependencyRepository` |
| `compareWaitingSnapshots` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareStaleSnapshots` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareReadySnapshots` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareNumberAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareResolvedWaitSnapshots` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareStringAsc`, `createRunDependencyRepository` |
| `compareTimedOutWaitSnapshots` | `application/runtime/readiness-engine.ts` | `compareNullableAsc`, `compareStringAsc`, `resolveExecutionScopeForSession`, `createRunDependencyRepository` |
| `rebuildRunExecutionOutput` | `application/runtime/rebuild-run-execution-output.ts` | `isRecord`, `toUsage`, `readLatestAssistantItemId` |
| `toUsage` | `application/runtime/rebuild-run-execution-output.ts` | `isRecord`, `readLatestAssistantItemId`, `createItemRepository` |
| `readLatestAssistantItemId` | `application/runtime/rebuild-run-execution-output.ts` | `isRecord`, `toUsage`, `createItemRepository` |
| `isTerminalRunStatus` | `application/runtime/run-cancellation.ts` | `toAlreadyTerminalCancellationConflict`, `appendDomainEvent`, `toRunExecutionTerminalError`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `classifyRunForCancelCommand` | `application/runtime/run-cancellation.ts` | `isTerminalRunStatus`, `toCancellationMetadata`, `toAlreadyTerminalCancellationConflict`, `appendDomainEvent`, `toRunExecutionTerminalError`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `classifyRunForCancelRecovery` | `application/runtime/run-cancellation.ts` | `toCancellationMetadata`, `resolveRunEventThreadId`, `appendDomainEvent`, `toRunExecutionTerminalError`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `cancelRunSubtree` | `application/runtime/run-cancellation.ts` | `createEventStore`, `isTerminalRunStatus`, `commitRunCancelledState`, `requestRunCancellation`, `cancelPendingWaits`, `failIncompleteToolExecutions`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `finalizeRunCancellation` | `application/runtime/run-cancellation.ts` | `createEventStore`, `commitRunCancelledState`, `cancelPendingWaits`, `failIncompleteToolExecutions`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `toCancellationMetadata` | `application/runtime/run-cancellation.ts` | `isTerminalRunStatus`, `toAlreadyTerminalCancellationConflict`, `appendDomainEvent`, `toRunExecutionTerminalError`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `toAlreadyTerminalCancellationConflict` | `application/runtime/run-cancellation.ts` | `isTerminalRunStatus`, `toCancellationMetadata`, `appendDomainEvent`, `toRunExecutionTerminalError`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `commitRunCancelledState` | `application/runtime/run-cancellation.ts` | `markRunJobCancelled`, `toCancellationMetadata`, `resolveRunEventThreadId`, `appendDomainEvent`, `buildRunTranscriptSnapshot`, `persistAssistantSnapshotMessageInTransaction` |
| `requestRunCancellation` | `application/runtime/run-cancellation.ts` | `toCancellationMetadata`, `resolveRunEventThreadId` |
| `cancelPendingWaits` | `application/runtime/run-cancellation.ts` | `resolveRunEventThreadId` |
| `failIncompleteToolExecutions` | `application/runtime/run-cancellation.ts` | `isTerminalRunStatus`, `cancelRunSubtree`, `requestRunCancellation`, `cancelPendingWaits`, `resolveRunEventThreadId` |
| `recoverExecuteRunOutput` | `application/runtime/run-command-recovery.ts` | `readAuthorizedRun`, `rebuildDurableRunOutput`, `createRunDependencyRepository`, `getById` |
| `recoverResumeRunOutput` | `application/runtime/run-command-recovery.ts` | `classifyRunForCancelRecovery`, `readAuthorizedRun`, `rebuildDurableRunOutput`, `createRunDependencyRepository`, `getById` |
| `recoverCancelRunOutput` | `application/runtime/run-command-recovery.ts` | `classifyRunForCancelRecovery`, `readAuthorizedRun` |
| `delay` | `application/runtime/run-command-recovery.ts` | `createResourceAccessService`, `rebuildRunExecutionOutput`, `toRecoveryDeadline`, `readAuthorizedRun`, `rebuildDurableRunOutput`, `createRunDependencyRepository`, `toRunExecutionTerminalError`, `createRunRepository`, `getById` |
| `toRecoveryDeadline` | `application/runtime/run-command-recovery.ts` | `createResourceAccessService`, `rebuildRunExecutionOutput`, `delay`, `readAuthorizedRun`, `rebuildDurableRunOutput`, `createRunDependencyRepository` |
| `readAuthorizedRun` | `application/runtime/run-command-recovery.ts` | `createResourceAccessService`, `rebuildRunExecutionOutput`, `delay`, `toRecoveryDeadline`, `rebuildDurableRunOutput`, `createRunDependencyRepository` |
| `rebuildDurableRunOutput` | `application/runtime/run-command-recovery.ts` | `rebuildRunExecutionOutput`, `delay`, `toRecoveryDeadline`, `readAuthorizedRun`, `createRunDependencyRepository`, `getById` |
| `assertRunSnapshotCurrent` | `application/runtime/run-concurrency.ts` | `createRunRepository`, `getById` |
| `resolveRunEventThreadId` | `application/runtime/run-events.ts` | `createRunEventPayload`, `appendDomainEvent`, `readRunEventThreadId` |
| `createRunEventPayload` | `application/runtime/run-events.ts` | `resolveRunEventThreadId`, `appendDomainEvent` |
| `appendDomainEvent` | `application/runtime/run-events.ts` | `createRunEventPayload` |
| `appendRunEvent` | `application/runtime/run-events.ts` | `createRunEventPayload`, `appendDomainEvent` |
| `readRunEventThreadId` | `application/runtime/run-events.ts` | `resolveRunEventThreadId`, `createRunEventPayload`, `appendDomainEvent` |
| `toRunExecutionTerminalError` | `application/runtime/run-execution-convergence.ts` | `rebuildRunExecutionOutput`, `delay`, `createRunRepository`, `getById` |
| `convergeRunExecutionConflict` | `application/runtime/run-execution-convergence.ts` | `rebuildRunExecutionOutput`, `delay`, `toRunExecutionTerminalError`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `waitForRunToReachDurableState` | `application/runtime/run-execution-convergence.ts` | `rebuildRunExecutionOutput`, `delay`, `toRunExecutionTerminalError`, `createRunDependencyRepository`, `createRunRepository`, `getById` |
| `resolveExecutionScopeForSession` | `application/runtime/run-execution-scope.ts` |  |
| `streamRunInteraction` | `application/runtime/run-generation-stream.ts` | `emitProgressReported`, `emitTurnStarted`, `emitGenerationStarted`, `emitGenerationFailed`, `emitReasoningSummaryDelta`, `emitReasoningSummaryDone`, `emitStreamDelta` |
| `backfillIncompleteGoogleStreamResponse` | `application/runtime/run-generation-stream.ts` | `normalizeAssistantOutputText`, `emitProgressReported`, `emitTurnStarted`, `emitGenerationStarted`, `emitGenerationFailed` |
| `buildRunTranscriptSnapshot` | `application/runtime/run-persistence.ts` | `isRecord`, `listRunTranscriptEvents`, `buildOutputTextFromTranscriptEvents`, `readRunOutputText`, `readRunTranscriptMetadata`, `readRunSnapshotMetadata`, `buildAssistantTranscriptMetadata`, `createSessionMessageRepository` |
| `persistAssistantSnapshotMessageInTransaction` | `application/runtime/run-persistence.ts` | `isRecord`, `readRunSnapshotMetadata`, `collectAssistantTranscriptBlocks`, `createSessionMessageRepository` |
| `persistUsageEntry` | `application/runtime/run-persistence.ts` | `assertRunSnapshotCurrent`, `toPersistenceFailure`, `getPersistedOutputItems`, `persistUsageEntryInTransaction`, `persistOutputItemsInTransaction`, `createUsageLedgerRepository`, `createItemRepository` |
| `persistOutputItems` | `application/runtime/run-persistence.ts` | `assertRunSnapshotCurrent`, `toPersistenceFailure`, `getPersistedOutputItems`, `persistOutputItemsInTransaction`, `createItemRepository`, `createMessage` |
| `completeRunWithAssistantMessage` | `application/runtime/run-persistence.ts` | `createEventStore`, `normalizeAssistantMessageContent`, `normalizeAssistantOutputText`, `appendDomainEvent`, `buildAssistantTranscriptMetadata`, `persistUsageEntryInTransaction`, `persistOutputItemsInTransaction`, `createRunRepository`, `createSessionMessageRepository` |
| `markRunWaiting` | `application/runtime/run-persistence.ts` | `createEventStore`, `markLinkedJobWaiting`, `appendRunEvent`, `toPersistenceFailure`, `buildAssistantTranscriptMetadata`, `compactRunContextAtBoundary`, `createRunDependencyRepository`, `createRunRepository` |
| `refreshWaitingRunSnapshot` | `application/runtime/run-persistence.ts` | `isRecord`, `createEventStore`, `markLinkedJobWaiting`, `appendRunEvent`, `readRunOutputText`, `buildAssistantTranscriptMetadata`, `createRunDependencyRepository`, `createRunRepository` |
| `failRun` | `application/runtime/run-persistence.ts` | `createEventStore`, `markRunJobBlocked`, `appendRunEvent`, `buildRunTranscriptSnapshot`, `toPersistenceFailure`, `emitProgressReported`, `createRunRepository` |
| `toPersistenceFailure` | `application/runtime/run-persistence.ts` |  |
| `toPersistedAppsMeta` | `application/runtime/run-persistence.ts` | `dedupeWebReferences` |
| `toStringArray` | `application/runtime/run-persistence.ts` | `dedupeWebReferences`, `createDomainEventRepository` |
| `toPersistedWebReferences` | `application/runtime/run-persistence.ts` | `dedupeWebReferences`, `createDomainEventRepository` |
| `toPersistedWebSearchStatus` | `application/runtime/run-persistence.ts` | `isRecord`, `createDomainEventRepository` |
| `mergePersistedWebSearchStatus` | `application/runtime/run-persistence.ts` | `isRecord`, `createDomainEventRepository` |
| `listRunTranscriptEvents` | `application/runtime/run-persistence.ts` | `isRecord`, `createDomainEventRepository` |
| `buildOutputTextFromTranscriptEvents` | `application/runtime/run-persistence.ts` | `isRecord` |
| `compareTranscriptBlockOrder` | `application/runtime/run-persistence.ts` | `isRecord`, `listRunTranscriptEvents`, `createRunRepository` |
| `readRunOutputText` | `application/runtime/run-persistence.ts` | `isRecord`, `listRunTranscriptEvents`, `createRunRepository` |
| `readRunTranscriptMetadata` | `application/runtime/run-persistence.ts` | `isRecord`, `listRunTranscriptEvents`, `createRunRepository` |
| `readRunSnapshotMetadata` | `application/runtime/run-persistence.ts` | `isRecord`, `listRunTranscriptEvents`, `createRunRepository` |
| `collectAssistantTranscriptBlocks` | `application/runtime/run-persistence.ts` | `listRunTranscriptEvents`, `createRunRepository` |
| `buildAssistantTranscriptMetadata` | `application/runtime/run-persistence.ts` | `maybeCompactMainThreadContext`, `toPersistenceFailure`, `collectAssistantTranscriptBlocks`, `persistUsageEntryInTransaction`, `createItemRepository`, `createRunDependencyRepository` |
| `getPersistedOutputItems` | `application/runtime/run-persistence.ts` | `maybeCompactMainThreadContext`, `assertRunSnapshotCurrent`, `toPersistenceFailure`, `persistUsageEntryInTransaction`, `createUsageLedgerRepository`, `createItemRepository`, `createRunDependencyRepository` |
| `compactRunContextAtBoundary` | `application/runtime/run-persistence.ts` | `maybeCompactMainThreadContext`, `assertRunSnapshotCurrent`, `toPersistenceFailure`, `persistUsageEntryInTransaction`, `persistOutputItemsInTransaction`, `createUsageLedgerRepository`, `createItemRepository`, `createRunDependencyRepository` |
| `persistUsageEntryInTransaction` | `application/runtime/run-persistence.ts` | `assertRunSnapshotCurrent`, `toPersistenceFailure`, `getPersistedOutputItems`, `persistOutputItemsInTransaction`, `createUsageLedgerRepository`, `createItemRepository`, `createMessage` |
| `persistOutputItemsInTransaction` | `application/runtime/run-persistence.ts` | `assertRunSnapshotCurrent`, `getPersistedOutputItems`, `createItemRepository`, `createMessage` |
| `toProjectedItemRole` | `application/runtime/run-projection.ts` | `isRecord`, `readProjectedProviderPayload`, `readProjectedSessionMessageId`, `readResponseId`, `createItemRepository` |
| `projectVisibleMessagesToRunItems` | `application/runtime/run-projection.ts` | `toProjectedItemRole`, `readProjectedSessionMessageId`, `readResponseId`, `createItemRepository` |
| `listVisibleMessages` | `application/runtime/run-projection.ts` | `projectVisibleMessagesToRunItems`, `listRunItems`, `isProjectionOnlyThreadContext`, `createItemRepository`, `createSessionMessageRepository` |
| `listRunItems` | `application/runtime/run-projection.ts` | `projectVisibleMessagesToRunItems`, `isProjectionOnlyThreadContext`, `createItemRepository` |
| `ensureProjectedThreadContext` | `application/runtime/run-projection.ts` | `projectVisibleMessagesToRunItems`, `listRunItems`, `isProjectionOnlyThreadContext` |
| `readProjectedProviderPayload` | `application/runtime/run-projection.ts` | `isRecord`, `toProjectedItemRole`, `readProjectedSessionMessageId`, `readResponseId`, `createItemRepository` |
| `readProjectedSessionMessageId` | `application/runtime/run-projection.ts` | `toProjectedItemRole`, `readProjectedProviderPayload`, `readResponseId`, `createItemRepository` |
| `readResponseId` | `application/runtime/run-projection.ts` | `toProjectedItemRole`, `readProjectedProviderPayload`, `readProjectedSessionMessageId`, `createItemRepository` |
| `isProjectionOnlyThreadContext` | `application/runtime/run-projection.ts` | `toProjectedItemRole`, `readProjectedSessionMessageId`, `readResponseId`, `createItemRepository` |
| `tryAppendRunTelemetryEvent` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `toGenerationModelParameters`, `createEventStore`, `createRunEventPayload`, `warnTelemetryDrop`, `toStructuredToolDefinitions` |
| `emitProgressReported` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `toGenerationModelParameters`, `tryAppendRunTelemetryEvent`, `toStructuredToolDefinitions`, `toStructuredOutputItems` |
| `emitTurnStarted` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `toGenerationModelParameters`, `tryAppendRunTelemetryEvent`, `toStructuredToolDefinitions`, `toStructuredToolCalls`, `toStructuredOutputItems` |
| `emitTurnCompleted` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `toGenerationModelParameters`, `tryAppendRunTelemetryEvent`, `toStructuredToolDefinitions`, `toStructuredToolCalls`, `toStructuredOutputItems` |
| `emitGenerationStarted` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `toGenerationModelParameters`, `tryAppendRunTelemetryEvent`, `toStructuredToolDefinitions`, `toStructuredToolCalls`, `toStructuredOutputItems` |
| `emitGenerationCompleted` | `application/runtime/run-telemetry.ts` | `toStructuredMessages`, `tryAppendRunTelemetryEvent`, `toStructuredToolCalls`, `toStructuredOutputItems` |
| `emitGenerationFailed` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `emitReasoningSummaryDelta` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `emitReasoningSummaryDone` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `emitStreamDelta` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `emitStreamDone` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `emitWebSearchProgress` | `application/runtime/run-telemetry.ts` | `tryAppendRunTelemetryEvent` |
| `warnTelemetryDrop` | `application/runtime/run-telemetry.ts` |  |
| `toStructuredToolDefinitions` | `application/runtime/run-telemetry.ts` |  |
| `toStructuredToolCalls` | `application/runtime/run-telemetry.ts` |  |
| `toStructuredOutputItems` | `application/runtime/run-telemetry.ts` | `createEventStore`, `createRunEventPayload`, `warnTelemetryDrop` |
| `toToolContext` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `toCancellationError` |
| `prepareToolExecution` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `toToolContext`, `toCancellationError` |
| `executeOneToolCall` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `createEventStore`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `appendDomainEvent`, `toToolContext`, `toCancellationError`, `getToolAppsMetaPayload`, `createToolExecutionRepository` |
| `persistToolCalledEvents` | `application/runtime/run-tool-execution.ts` | `createEventStore`, `toToolArgs`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `appendDomainEvent`, `getToolAppsMetaPayload`, `createItemRepository`, `createRunDependencyRepository`, `createToolExecutionRepository` |
| `persistToolOutcomes` | `application/runtime/run-tool-execution.ts` | `createEventStore`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `appendDomainEvent`, `serializeToolOutput`, `toToolErrorOutput`, `toDurationMs`, `getToolAppsMetaPayload`, `createItemRepository`, `createRunDependencyRepository`, `createToolExecutionRepository` |
| `serializeToolOutput` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `toToolContext`, `toCancellationError`, `toConflictError`, `toChildRunReplayOutput` |
| `toToolErrorOutput` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `createEventStore`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `toToolContext`, `toCancellationError`, `createToolExecutionRepository`, `toToolArgs`, `requiresApprovalForWait`, `toChildRunResultKind`, `isConfirmationWait` |
| `toDurationMs` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `createEventStore`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `toToolContext`, `toCancellationError`, `getToolAppsMetaPayload`, `createToolExecutionRepository` |
| `toCancellationError` | `application/runtime/run-tool-execution.ts` | `isToolAllowedForRun`, `createEventStore`, `assertRunSnapshotCurrent`, `resolveRunEventThreadId`, `toToolContext`, `getToolAppsMetaPayload`, `createToolExecutionRepository` |
| `resolveRunWait` | `application/runtime/run-wait-resolution.ts` | `createResourceAccessService`, `toConfigSnapshot`, `requiresApprovalForWait`, `resolveRunEventThreadId`, `requireMembership`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById`, `createTenantMembershipRepository` |
| `toToolFailure` | `application/runtime/run-wait-resolution.ts` | `toConflictError`, `toToolArgs`, `isConfirmationWait`, `toChildRunReplayOutput` |
| `toPersistedWaitOutput` | `application/runtime/run-wait-resolution.ts` | `toToolArgs`, `requiresApprovalForWait`, `isConfirmationWait`, `toChildRunReplayOutput` |
| `toChildRunResultKind` | `application/runtime/run-wait-resolution.ts` | `toToolArgs`, `requiresApprovalForWait`, `isConfirmationWait` |
| `toChildRunSummary` | `application/runtime/run-wait-resolution.ts` | `toToolArgs`, `requiresApprovalForWait`, `toChildRunResultKind`, `isConfirmationWait` |
| `isConfirmationWait` | `application/runtime/run-wait-resolution.ts` | `toToolArgs`, `requiresApprovalForWait`, `resolveRunEventThreadId`, `toChildRunResultKind`, `toChildRunSummary`, `toPendingWaitSummary`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById` |
| `toPendingWaitSummary` | `application/runtime/run-wait-resolution.ts` | `toToolArgs`, `requiresApprovalForWait`, `resolveRunEventThreadId`, `toChildRunResultKind`, `toChildRunSummary`, `loadPendingWaitSummaries`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById` |
| `appendChildRunCompletedEvent` | `application/runtime/run-wait-resolution.ts` | `resolveRunEventThreadId`, `refreshWaitingRunSnapshot`, `toChildRunResultKind`, `toChildRunSummary`, `toPendingWaitSummary`, `loadPendingWaitSummaries`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById` |
| `loadPendingWaitSummaries` | `application/runtime/run-wait-resolution.ts` | `createResourceAccessService`, `toConfigSnapshot`, `refreshWaitingRunSnapshot`, `toPendingWaitSummary`, `requireMembership`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById`, `createTenantMembershipRepository` |
| `resumeOrStayWaiting` | `application/runtime/run-wait-resolution.ts` | `createResourceAccessService`, `toConfigSnapshot`, `resolveRunEventThreadId`, `refreshWaitingRunSnapshot`, `loadPendingWaitSummaries`, `requireMembership`, `createRunDependencyRepository`, `createRunRepository`, `getById`, `createTenantMembershipRepository` |
| `compareThreadActivityReadModels` | `application/runtime/thread-activity-read-model.ts` | `loadThreadRootJobReadModel`, `isCompletedWithinWindow`, `loadCurrentRun`, `loadPendingWaits`, `resolvePendingWaitState`, `toActivityReadModel` |
| `loadThreadActivityReadModel` | `application/runtime/thread-activity-read-model.ts` | `loadThreadRootJobReadModel`, `isCompletedWithinWindow`, `loadCurrentRun`, `loadPendingWaits`, `resolvePendingWaitState`, `toActivityReadModel` |
| `toEpochMs` | `application/runtime/thread-activity-read-model.ts` | `requiresApprovalForWait`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `isCompletedWithinWindow` | `application/runtime/thread-activity-read-model.ts` | `requiresApprovalForWait`, `loadThreadRootJobReadModel`, `toEpochMs`, `loadCurrentRun`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `loadCurrentRun` | `application/runtime/thread-activity-read-model.ts` | `requiresApprovalForWait`, `loadThreadRootJobReadModel`, `loadPendingWaits`, `resolvePendingWaitState`, `toActivityReadModel`, `createRunDependencyRepository`, `createRunRepository`, `createToolExecutionRepository`, `getById` |
| `loadPendingWaits` | `application/runtime/thread-activity-read-model.ts` | `requiresApprovalForWait`, `loadThreadRootJobReadModel`, `loadCurrentRun`, `resolvePendingWaitState`, `toActivityReadModel`, `createRunDependencyRepository`, `createToolExecutionRepository`, `getById` |
| `resolvePendingWaitState` | `application/runtime/thread-activity-read-model.ts` | `requiresApprovalForWait`, `loadThreadRootJobReadModel`, `isCompletedWithinWindow`, `loadCurrentRun`, `loadPendingWaits`, `toActivityReadModel`, `createToolExecutionRepository`, `getById` |
| `toActivityReadModel` | `application/runtime/thread-activity-read-model.ts` | `loadThreadRootJobReadModel`, `isCompletedWithinWindow`, `loadCurrentRun`, `loadPendingWaits`, `resolvePendingWaitState` |
| `getToolAppsMetaPayload` | `application/runtime/tool-apps-meta.ts` | `extractOutputAppsMeta` |
| `extractOutputAppsMeta` | `application/runtime/tool-apps-meta.ts` | `isRecord` |
| `resolveContextWindowForModel` | `application/system/models-catalog.ts` | `getReasoningModesForTarget` |
| `buildModelsCatalog` | `application/system/models-catalog.ts` | `resolveContextWindowForModel`, `getReasoningModesForTarget` |
| `getReasoningModesForTarget` | `application/system/models-catalog.ts` | `resolveContextWindowForModel` |
| `listObservabilityQuarantine` | `application/system/observability-quarantine.ts` | `createEventOutboxRepository` |
| `replayObservabilityQuarantineEntry` | `application/system/observability-quarantine.ts` | `createEventOutboxRepository` |
| `toPayloadIdentity` | `application/system/observability-quarantine.ts` | `isRecord`, `asString`, `createEventOutboxRepository` |
| `toQuarantineEntry` | `application/system/observability-quarantine.ts` | `toPayloadIdentity`, `createEventOutboxRepository` |
| `replayObservabilityRun` | `application/system/observability-replay.ts` | `collectLatestTerminalRootRunEvents`, `enqueueReplayEntries`, `createDomainEventRepository`, `createRunRepository`, `getById`, `createWorkSessionRepository` |
| `replayObservabilitySession` | `application/system/observability-replay.ts` | `collectLatestTerminalRootRunEvents`, `enqueueReplayEntries`, `createDomainEventRepository`, `getById`, `createWorkSessionRepository` |
| `findTerminalRootRunId` | `application/system/observability-replay.ts` | `isRecord`, `asString`, `collectLatestTerminalRootRunEvents`, `createDomainEventRepository`, `createEventOutboxRepository`, `createRunRepository`, `getById` |
| `collectLatestTerminalRootRunEvents` | `application/system/observability-replay.ts` | `findTerminalRootRunId`, `enqueueReplayEntries`, `createDomainEventRepository`, `createEventOutboxRepository`, `createRunRepository`, `getById` |
| `enqueueReplayEntries` | `application/system/observability-replay.ts` | `collectLatestTerminalRootRunEvents`, `createDomainEventRepository`, `createEventOutboxRepository`, `createRunRepository`, `getById`, `createWorkSessionRepository` |
| `buildObservabilityStatus` | `application/system/observability-status.ts` | `resolveWorkerTarget`, `emptyTopicStatus`, `createEventOutboxRepository` |
| `resolveWorkerTarget` | `application/system/observability-status.ts` | `minIsoTimestamp` |
| `minIsoTimestamp` | `application/system/observability-status.ts` | `resolveWorkerTarget` |
| `mergeRetryBuckets` | `application/system/observability-status.ts` | `resolveWorkerTarget`, `minIsoTimestamp` |
| `emptyTopicStatus` | `application/system/observability-status.ts` | `resolveWorkerTarget`, `minIsoTimestamp`, `mergeRetryBuckets`, `createEventOutboxRepository` |
| `toWorkerStatuses` | `application/system/observability-status.ts` | `minIsoTimestamp`, `mergeRetryBuckets`, `createEventOutboxRepository` |
| `canViewToolProfile` | `application/tool-access/tool-profile-access.ts` |  |
| `canReadToolProfile` | `application/tool-access/tool-profile-access.ts` | `canViewToolProfile` |
| `parseCreateToolProfileInput` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `toToolProfileSummary`, `requireMembership`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `parseUpdateToolProfileInput` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `toToolProfileSummary`, `requireMembership`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `createToolProfileService` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `canEditToolProfile`, `toToolProfileSummary`, `requireMembership`, `getById`, `createToolProfileRepository` |
| `canWriteToolProfiles` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `toToolProfileSummary`, `requireMembership`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `canEditToolProfile` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `toToolProfileSummary`, `requireMembership`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `toToolProfileSummary` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `requireMembership`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `requireMembership` | `application/tool-access/tool-profile-service.ts` | `canViewToolProfile`, `canWriteToolProfiles`, `canEditToolProfile`, `toToolProfileSummary`, `getById`, `createTenantMembershipRepository`, `createToolProfileRepository` |
| `appendWorkspaceLifecycleEvents` | `application/workspaces/workspace-events.ts` | `toPayload` |
| `toPayload` | `application/workspaces/workspace-events.ts` |  |
| `createWorkspaceService` | `application/workspaces/workspace-service.ts` | `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `ensureDirectory` | `application/workspaces/workspace-service.ts` | `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toWorkspaceBaseRoot` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toWorkspaceRootRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toAgentsRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toVaultRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toAttachmentsRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toSessionRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `toRunRef` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `ensureWorkspaceDirectories`, `createWorkspaceRepository` |
| `ensureWorkspaceDirectories` | `application/workspaces/workspace-service.ts` | `ensureDirectory`, `toWorkspaceBaseRoot`, `toWorkspaceRootRef`, `toAgentsRef`, `toVaultRef`, `createWorkspaceRepository` |
| `createDatabaseClient` | `db/client.ts` | `applyPragmas`, `ensureMigrationJournal`, `openSqliteDatabase`, `migrateSqliteDatabase` |
| `applyPragmas` | `db/client.ts` | `ensureMigrationJournal`, `openSqliteDatabase`, `migrateSqliteDatabase` |
| `ensureMigrationJournal` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `resolveLegacyBaselineTag`, `readMigrationJournal`, `readMigrationHash`, `createMigrationsTable` |
| `getUserTableNames` | `db/ensure-migration-journal.ts` | `matchesTableSet`, `hasSchemaObject`, `resolveLegacyBaselineTag`, `readMigrationJournal` |
| `matchesTableSet` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `hasSchemaObject`, `resolveLegacyBaselineTag`, `readMigrationJournal`, `createMigrationsTable` |
| `hasSchemaObject` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `matchesTableSet`, `resolveLegacyBaselineTag`, `readMigrationJournal`, `readMigrationHash`, `createMigrationsTable` |
| `resolveLegacyBaselineTag` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `matchesTableSet`, `hasSchemaObject`, `readMigrationJournal`, `readMigrationHash`, `createMigrationsTable` |
| `readMigrationJournal` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `resolveLegacyBaselineTag`, `readMigrationHash`, `createMigrationsTable` |
| `readMigrationHash` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `resolveLegacyBaselineTag`, `readMigrationJournal`, `createMigrationsTable` |
| `createMigrationsTable` | `db/ensure-migration-journal.ts` | `getUserTableNames`, `resolveLegacyBaselineTag`, `readMigrationJournal`, `readMigrationHash` |
| `formatSeedInstructions` | `db/seed-main-account.ts` | `loadConfig`, `createAppRuntime`, `initializeAppRuntime`, `closeAppRuntime`, `main`, `seedMainAccount` |
| `main` | `db/seed-main-account.ts` | `loadConfig`, `createAppRuntime`, `initializeAppRuntime`, `closeAppRuntime`, `formatSeedInstructions`, `seedMainAccount` |
| `seedMainAccount` | `db/seeds/seed-main-account.ts` | `createAssistantToolProfileId`, `resolveMainAccountSeedManifestPath`, `writeMainAccountSeedManifest`, `resolveMainAccountApiKeySecret`, `resolveMainAccountSeedInput`, `hashApiKeySecret`, `normalizeAuthEmail`, `hashPassword` |
| `isCurrentMainAccountSeedManifest` | `db/seeds/seed-main-account.ts` | `readMainAccountSeedManifest` |
| `createMainAccountApiKeySecret` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountPassword`, `readMainAccountSeedManifest` |
| `createMainAccountPassword` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createGeneratedSeedIds`, `readMainAccountSeedManifest` |
| `createGeneratedSeedIds` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `readMainAccountSeedManifest` |
| `createAssistantToolProfileId` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `createGeneratedSeedIds`, `resolveMainAccountSeedManifestPath`, `readMainAccountSeedManifest`, `resolveMainAccountSeedInput` |
| `resolveMainAccountSeedManifestPath` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `createGeneratedSeedIds`, `readMainAccountSeedManifest`, `resolveMainAccountApiKeySecret`, `resolveMainAccountSeedInput` |
| `readMainAccountSeedManifest` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `createGeneratedSeedIds`, `resolveMainAccountSeedManifestPath`, `resolveMainAccountApiKeySecret`, `resolveMainAccountSeedInput`, `hashApiKeySecret`, `hashPassword` |
| `writeMainAccountSeedManifest` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `createGeneratedSeedIds`, `createAssistantToolProfileId`, `resolveMainAccountSeedManifestPath`, `readMainAccountSeedManifest`, `resolveMainAccountApiKeySecret`, `resolveMainAccountSeedInput`, `hashApiKeySecret`, `hashPassword` |
| `resolveMainAccountApiKeySecret` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createMainAccountApiKeySecret`, `createMainAccountPassword`, `createGeneratedSeedIds`, `createAssistantToolProfileId`, `resolveMainAccountSeedManifestPath`, `readMainAccountSeedManifest`, `writeMainAccountSeedManifest`, `resolveMainAccountSeedInput`, `hashApiKeySecret`, `normalizeAuthEmail`, `hashPassword` |
| `resolveMainAccountSeedInput` | `db/seeds/seed-main-account.ts` | `isCurrentMainAccountSeedManifest`, `createGeneratedSeedIds`, `createAssistantToolProfileId`, `resolveMainAccountSeedManifestPath`, `readMainAccountSeedManifest`, `writeMainAccountSeedManifest`, `resolveMainAccountApiKeySecret`, `hashApiKeySecret`, `normalizeAuthEmail`, `hashPassword` |
| `openSqliteDatabase` | `db/sqlite-adapter.ts` | `isBunRuntime`, `normalizeMigrationStatement` |
| `migrateSqliteDatabase` | `db/sqlite-adapter.ts` | `isBunRuntime`, `normalizeMigrationStatement` |
| `isBunRuntime` | `db/sqlite-adapter.ts` |  |
| `normalizeMigrationStatement` | `db/sqlite-adapter.ts` | `isBunRuntime` |
| `createAgentRepository` | `domain/agents/agent-repository.ts` | `toAgentRecord`, `getById` |
| `toAgentRecord` | `domain/agents/agent-repository.ts` | `getById` |
| `createAgentRevisionRepository` | `domain/agents/agent-revision-repository.ts` | `toAgentRevisionRecord` |
| `toAgentRevisionRecord` | `domain/agents/agent-revision-repository.ts` |  |
| `createAgentSubagentLinkRepository` | `domain/agents/agent-subagent-link-repository.ts` |  |
| `toChildRunReplayOutput` | `domain/agents/agent-types.ts` |  |
| `createWorkspaceRepository` | `domain/agents/workspace-repository.ts` | `toWorkspaceRecord` |
| `toWorkspaceRecord` | `domain/agents/workspace-repository.ts` |  |
| `parseRequiredJson` | `domain/ai/json-utils.ts` |  |
| `resolveAiModelTarget` | `domain/ai/model-registry.ts` | `resolveDefaultTarget` |
| `resolveDefaultTarget` | `domain/ai/model-registry.ts` |  |
| `flattenReasoningSummaryText` | `domain/ai/reasoning-summary.ts` |  |
| `createUsageLedgerRepository` | `domain/ai/usage-ledger-repository.ts` |  |
| `getCanonicalCommittedEventContract` | `domain/events/committed-event-contract.ts` | `isRecord`, `asString`, `isRootRunTerminalObservabilityTrigger` |
| `resolveCanonicalCommittedEventOutboxTopics` | `domain/events/committed-event-contract.ts` | `getCanonicalCommittedEventContract`, `isRootRunTerminalObservabilityTrigger` |
| `toContracts` | `domain/events/committed-event-contract.ts` | `isRecord`, `asString`, `getCanonicalCommittedEventContract`, `isRootRunTerminalObservabilityTrigger` |
| `isRootRunTerminalObservabilityTrigger` | `domain/events/committed-event-contract.ts` | `isRecord`, `asString`, `getCanonicalCommittedEventContract` |
| `createDomainEventRepository` | `domain/events/domain-event-repository.ts` | `jsonStringAt` |
| `createEventOutboxRepository` | `domain/events/event-outbox-repository.ts` |  |
| `matchesDomainEventStreamScope` | `domain/events/event-stream-filter.ts` | `matchesSession`, `matchesThread`, `matchesRun` |
| `matchesSession` | `domain/events/event-stream-filter.ts` | `readPayloadString`, `matchesThread`, `matchesRun` |
| `matchesThread` | `domain/events/event-stream-filter.ts` | `readPayloadString`, `matchesSession`, `matchesRun` |
| `matchesRun` | `domain/events/event-stream-filter.ts` | `readPayloadString`, `matchesSession`, `matchesThread` |
| `isMimeTypeAllowed` | `domain/files/file-access.ts` |  |
| `createFileLinkRepository` | `domain/files/file-link-repository.ts` |  |
| `createFileRepository` | `domain/files/file-repository.ts` | `toFileRecord` |
| `toFileRecord` | `domain/files/file-repository.ts` |  |
| `createUploadRepository` | `domain/files/upload-repository.ts` | `toUploadRecord`, `getById` |
| `toUploadRecord` | `domain/files/upload-repository.ts` | `getById` |
| `createApiKeyRepository` | `domain/identity/api-key-repository.ts` | `toApiKeyAuthRecord` |
| `toApiKeyAuthRecord` | `domain/identity/api-key-repository.ts` |  |
| `createAuthSessionRepository` | `domain/identity/auth-session-repository.ts` | `toAuthSessionAuthRecord` |
| `toAuthSessionAuthRecord` | `domain/identity/auth-session-repository.ts` |  |
| `createPasswordCredentialRepository` | `domain/identity/password-credential-repository.ts` | `normalizeAuthEmail` |
| `createMcpOauthAuthorizationRepository` | `domain/mcp/mcp-oauth-authorization-repository.ts` | `toRecord` |
| `toRecord` | `domain/mcp/mcp-oauth-authorization-repository.ts` |  |
| `createMcpOauthCredentialRepository` | `domain/mcp/mcp-oauth-credential-repository.ts` | `toRecord` |
| `toMcpServerConfig` | `domain/mcp/mcp-server-repository.ts` | `revealStoredHttpAuthConfig`, `toMcpServerRecord` |
| `createMcpServerRepository` | `domain/mcp/mcp-server-repository.ts` | `toMcpServerRecord`, `getById` |
| `toMcpServerRecord` | `domain/mcp/mcp-server-repository.ts` | `revealStoredHttpAuthConfig` |
| `createMcpToolAssignmentRepository` | `domain/mcp/mcp-tool-assignment-repository.ts` | `toMcpToolAssignmentRecord` |
| `toMcpToolAssignmentRecord` | `domain/mcp/mcp-tool-assignment-repository.ts` |  |
| `createMcpToolCacheRepository` | `domain/mcp/mcp-tool-cache-repository.ts` |  |
| `createMemoryRecordRepository` | `domain/memory/memory-record-repository.ts` |  |
| `createHttpIdempotencyKeyRepository` | `domain/operations/http-idempotency-key-repository.ts` | `toRecord` |
| `createAccountPreferencesRepository` | `domain/preferences/account-preferences-repository.ts` | `toAccountPreferencesRecord` |
| `toAccountPreferencesRecord` | `domain/preferences/account-preferences-repository.ts` |  |
| `createContextSummaryRepository` | `domain/runtime/context-summary-repository.ts` | `toRecord` |
| `createItemRepository` | `domain/runtime/item-repository.ts` | `createMessage` |
| `toItemRecord` | `domain/runtime/item-repository.ts` | `createMessage` |
| `createMessage` | `domain/runtime/item-repository.ts` | `toSessionMessageRecord` |
| `createJobDependencyRepository` | `domain/runtime/job-dependency-repository.ts` |  |
| `createJobRepository` | `domain/runtime/job-repository.ts` | `toJobRecord` |
| `toJobRecord` | `domain/runtime/job-repository.ts` |  |
| `buildUpdatePatch` | `domain/runtime/job-repository.ts` | `toJobRecord` |
| `createRunDependencyRepository` | `domain/runtime/run-dependency-repository.ts` | `toRunDependencyRecord` |
| `toRunDependencyRecord` | `domain/runtime/run-dependency-repository.ts` |  |
| `createRunRepository` | `domain/runtime/run-repository.ts` | `toRunRecord`, `getById` |
| `toRunRecord` | `domain/runtime/run-repository.ts` | `getById` |
| `createToolExecutionRepository` | `domain/runtime/tool-execution-repository.ts` | `toToolExecutionRecord`, `getById` |
| `toToolExecutionRecord` | `domain/runtime/tool-execution-repository.ts` | `getById` |
| `createSessionMessageRepository` | `domain/sessions/session-message-repository.ts` | `createMessage`, `getById`, `listByThread` |
| `toSessionMessageRecord` | `domain/sessions/session-message-repository.ts` | `createMessage`, `getById` |
| `getById` | `domain/sessions/session-message-repository.ts` | `toSessionMessageRecord` |
| `listByThread` | `domain/sessions/session-message-repository.ts` |  |
| `createSessionThreadRepository` | `domain/sessions/session-thread-repository.ts` | `toSessionThreadRecord`, `buildConversationSearchQuery` |
| `toSessionThreadRecord` | `domain/sessions/session-thread-repository.ts` |  |
| `toSessionThreadRecordFromRaw` | `domain/sessions/session-thread-repository.ts` | `toSessionThreadRecord` |
| `buildConversationSearchQuery` | `domain/sessions/session-thread-repository.ts` | `toSessionThreadRecord` |
| `createWorkSessionRepository` | `domain/sessions/work-session-repository.ts` | `getById`, `toWorkSessionRecord` |
| `toWorkSessionRecord` | `domain/sessions/work-session-repository.ts` |  |
| `createTenantMembershipRepository` | `domain/tenancy/tenant-membership-repository.ts` | `toTenantMembershipRecord` |
| `toTenantMembershipRecord` | `domain/tenancy/tenant-membership-repository.ts` |  |
| `createToolProfileRepository` | `domain/tool-access/tool-profile-repository.ts` | `getById`, `toToolProfileRecord` |
| `toToolProfileRecord` | `domain/tool-access/tool-profile-repository.ts` | `getById` |
| `createToolRegistry` | `domain/tooling/tool-registry.ts` |  |
| `closeHttpServer` | `index.ts` | `closeAppRuntime`, `shutdown` |
| `shutdown` | `index.ts` | `closeAppRuntime`, `closeHttpServer` |
| `hashApiKeySecret` | `shared/api-key.ts` |  |
| `parseBearerToken` | `shared/api-key.ts` |  |
| `createAuthSessionSecret` | `shared/auth-session.ts` |  |
| `hashAuthSessionSecret` | `shared/auth-session.ts` |  |
| `isDomainErrorException` | `shared/errors.ts` |  |
| `toHttpStatus` | `shared/errors.ts` |  |
| `createLogger` | `shared/logger.ts` |  |
| `normalizeAuthEmail` | `shared/password.ts` | `toBuffer` |
| `hashPassword` | `shared/password.ts` | `toBuffer` |
| `verifyPassword` | `shared/password.ts` | `toBuffer` |
| `toBuffer` | `shared/password.ts` |  |
| `isEncryptedSecret` | `shared/secret-box.ts` | `deriveKey` |
| `createSecretBox` | `shared/secret-box.ts` | `deriveKey` |
| `deriveKey` | `shared/secret-box.ts` |  |
| `createSystemClock` | `shared/time.ts` |  |