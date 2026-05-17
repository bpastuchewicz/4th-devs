# 05_04_ui — Mapa zależności funkcji

## Diagram Mermaid

```mermaid
flowchart TD
  subgraph lib_attachments_intake_test["lib/attachments/intake.test"]
    createFile["createFile()"]
  end
  subgraph lib_attachments_intake["lib/attachments/intake"]
    toFileArray["toFileArray()"]
    collectTransferFiles["collectTransferFiles()"]
    hasTransferFiles["hasTransferFiles()"]
  end
  subgraph lib_stores_attachment_drafts_svelte["lib/stores/attachment-drafts.svelte"]
    createAttachmentDraftStore["createAttachmentDraftStore()"]
    normalizeMime["normalizeMime()"]
    inferKind["inferKind()"]
    cloneAttachment["cloneAttachment()"]
    toMessageAttachment["toMessageAttachment()"]
  end
  subgraph lib_stores_composer_attachments_svelte["lib/stores/composer-attachments.svelte"]
    createComposerAttachmentStore["createComposerAttachmentStore()"]
  end
  subgraph lib_attachments_model_visible_test["lib/attachments/model-visible.test"]
    imageAttachment["imageAttachment()"]
  end
  subgraph lib_attachments_model_visible["lib/attachments/model-visible"]
    filterInlineRenderedImageAttachments["filterInlineRenderedImageAttachments()"]
  end
  subgraph lib_attachments_presentation["lib/attachments/presentation"]
    formatAttachmentSize["formatAttachmentSize()"]
    getAttachmentImageColumnCount["getAttachmentImageColumnCount()"]
    getAttachmentImageGridMetrics["getAttachmentImageGridMetrics()"]
    stripTrailingZero["stripTrailingZero()"]
    getAttachmentExtension["getAttachmentExtension()"]
    estimateAttachmentImageGridHeight["estimateAttachmentImageGridHeight()"]
  end
  subgraph lib_services_backend["lib/services/backend"]
    trim["trim()"]
    toApiUrl["toApiUrl()"]
    createApiHeaders["createApiHeaders()"]
    apiFetch["apiFetch()"]
    normalizeBasePath["normalizeBasePath()"]
    getStorage["getStorage()"]
    readStoredTenantId["readStoredTenantId()"]
    fetchWithResolvedAuth["fetchWithResolvedAuth()"]
    getApiTenantId["getApiTenantId()"]
    withApiBaseUrl["withApiBaseUrl()"]
    setApiTenantId["setApiTenantId()"]
    apiBasePath["apiBasePath()"]
    apiBaseOrigin["apiBaseOrigin()"]
  end
  subgraph lib_command_palette_agent_browser_provider_svelte["lib/command-palette/agent-browser-provider.svelte"]
    createAgentBrowserProvider["createAgentBrowserProvider()"]
    visibilityToGroup["visibilityToGroup()"]
    toStaticResults["toStaticResults()"]
  end
  subgraph lib_command_palette_search["lib/command-palette/search"]
    searchCommands["searchCommands()"]
    scoreLabel["scoreLabel()"]
    scoreKeywords["scoreKeywords()"]
    findContiguousMatch["findContiguousMatch()"]
  end
  subgraph lib_services_api["lib/services/api"]
    listAgents["listAgents()"]
    listToolProfiles["listToolProfiles()"]
    listThreads["listThreads()"]
    listMcpServers["listMcpServers()"]
    getMcpServerTools["getMcpServerTools()"]
    bootstrapSession["bootstrapSession()"]
    renameAgent["renameAgent()"]
    deleteAgent["deleteAgent()"]
    getAgentMarkdown["getAgentMarkdown()"]
    updateAgentMarkdown["updateAgentMarkdown()"]
    getAccountPreferences["getAccountPreferences()"]
    getToolProfile["getToolProfile()"]
    createToolProfile["createToolProfile()"]
    updateToolProfile["updateToolProfile()"]
    updateAccountPreferences["updateAccountPreferences()"]
    getThread["getThread()"]
    cancelRun["cancelRun()"]
    createMcpServer["createMcpServer()"]
    updateMcpServer["updateMcpServer()"]
    refreshMcpServer["refreshMcpServer()"]
    beginMcpServerAuthorization["beginMcpServerAuthorization()"]
    deleteMcpServer["deleteMcpServer()"]
    parseBackendEvent["parseBackendEvent()"]
    assignMcpTool["assignMcpTool()"]
    deleteMcpToolAssignment["deleteMcpToolAssignment()"]
    streamThreadEvents["streamThreadEvents()"]
    isObject["isObject()"]
    getThreadsActivity["getThreadsActivity()"]
  end
  subgraph lib_services_response_errors["lib/services/response-errors"]
    humanizeErrorMessage["humanizeErrorMessage()"]
    readErrorResponseMessage["readErrorResponseMessage()"]
    extractErrorMessage["extractErrorMessage()"]
    asErrorPayload["asErrorPayload()"]
    isBlank["isBlank()"]
  end
  subgraph lib_command_palette_tool_profile_browser_provider_svelte["lib/command-palette/tool-profile-browser-provider.svelte"]
    scopeToGroup["scopeToGroup()"]
    createToolProfileBrowserProvider["createToolProfileBrowserProvider()"]
  end
  subgraph lib_command_palette_agent_provider_svelte["lib/command-palette/agent-provider.svelte"]
    createAgentProvider["createAgentProvider()"]
  end
  subgraph lib_command_palette_agent_provider_test["lib/command-palette/agent-provider.test"]
    createAgent["createAgent()"]
  end
  subgraph lib_command_palette_command_registry_test["lib/command-palette/command-registry.test"]
    createAppCommandsStub["createAppCommandsStub()"]
  end
  subgraph lib_command_palette_command_registry["lib/command-palette/command-registry"]
    createCommandsProvider["createCommandsProvider()"]
    createCommandRegistry["createCommandRegistry()"]
  end
  subgraph lib_command_palette_conversation_provider_svelte["lib/command-palette/conversation-provider.svelte"]
    createConversationProvider["createConversationProvider()"]
    formatUpdatedAt["formatUpdatedAt()"]
    deriveActivity["deriveActivity()"]
    toThreadLabel["toThreadLabel()"]
  end
  subgraph lib_command_palette_conversation_provider_test["lib/command-palette/conversation-provider.test"]
    createThread["createThread()"]
  end
  subgraph lib_commands_app_commands_test["lib/commands/app-commands.test"]
    createChatStoreStub["createChatStoreStub()"]
    createThemeStoreStub["createThemeStoreStub()"]
  end
  subgraph lib_commands_app_commands["lib/commands/app-commands"]
    createAppCommands["createAppCommands()"]
    modelSupportsReasoning["modelSupportsReasoning()"]
  end
  subgraph lib_command_palette_mcp_browser_provider_svelte["lib/command-palette/mcp-browser-provider.svelte"]
    createMcpBrowserProvider["createMcpBrowserProvider()"]
    statusToGroup["statusToGroup()"]
    groupOrder["groupOrder()"]
  end
  subgraph lib_command_palette_mcp_tools_provider_svelte["lib/command-palette/mcp-tools-provider.svelte"]
    createMcpToolsProvider["createMcpToolsProvider()"]
  end
  subgraph lib_command_palette_rename_provider["lib/command-palette/rename-provider"]
    createRenameProvider["createRenameProvider()"]
  end
  subgraph lib_command_palette_search_test["lib/command-palette/search.test"]
    item["item()"]
  end
  subgraph lib_command_palette_workspace_provider_svelte["lib/command-palette/workspace-provider.svelte"]
    createWorkspaceProvider["createWorkspaceProvider()"]
    getWorkspaceLabel["getWorkspaceLabel()"]
    toWorkspaceLabel["toWorkspaceLabel()"]
  end
  subgraph lib_command_palette_workspace_provider_test["lib/command-palette/workspace-provider.test"]
    createMembership["createMembership()"]
  end
  subgraph lib_components_blocks_block_accessibility["lib/components/blocks/block-accessibility"]
    getExpandablePanelId["getExpandablePanelId()"]
    sanitizeDomId["sanitizeDomId()"]
    getExpandableBlockName["getExpandableBlockName()"]
    getExpandableToggleLabel["getExpandableToggleLabel()"]
    getBlockLiveMode["getBlockLiveMode()"]
    getBlockAnnouncement["getBlockAnnouncement()"]
    getBlockRenderErrorMessage["getBlockRenderErrorMessage()"]
    getAdjacentExpandableIndex["getAdjacentExpandableIndex()"]
    focusAdjacentExpandableToggle["focusAdjacentExpandableToggle()"]
  end
  subgraph lib_components_blocks_tool_state["lib/components/blocks/tool-state"]
    isSuspendedToolBlock["isSuspendedToolBlock()"]
    getSuspendedToolLabel["getSuspendedToolLabel()"]
  end
  subgraph lib_components_blocks_block_visibility_test["lib/components/blocks/block-visibility.test"]
    textBlock["textBlock()"]
    toolBlock["toolBlock()"]
  end
  subgraph lib_components_blocks_block_visibility["lib/components/blocks/block-visibility"]
    buildVisibleBlocks["buildVisibleBlocks()"]
  end
  subgraph lib_components_blocks_delegation_state_test["lib/components/blocks/delegation-state.test"]
    delegateBlock["delegateBlock()"]
  end
  subgraph lib_components_blocks_delegation_state["lib/components/blocks/delegation-state"]
    getDelegationStatus["getDelegationStatus()"]
    getWaitingFooterState["getWaitingFooterState()"]
    getWaitingFooterLabel["getWaitingFooterLabel()"]
    isReplyWaitBlock["isReplyWaitBlock()"]
    isSuspendedBlock["isSuspendedBlock()"]
    isActiveDelegationParentBlock["isActiveDelegationParentBlock()"]
    readSuspendedWaits["readSuspendedWaits()"]
    readSuspendTargetKind["readSuspendTargetKind()"]
    isDelegationWithSuspendedOutput["isDelegationWithSuspendedOutput()"]
    dedupeAgentAliases["dedupeAgentAliases()"]
    isRecord["isRecord()"]
  end
  subgraph lib_stores_chat_store_svelte["lib/stores/chat-store.svelte"]
    toNumberOrNull["toNumberOrNull()"]
    cloneBlocks["cloneBlocks()"]
    parsePersistedAttachments["parsePersistedAttachments()"]
    isMessageFinishReason["isMessageFinishReason()"]
    parsePersistedLiveAssistantMessage["parsePersistedLiveAssistantMessage()"]
    createChatStore["createChatStore()"]
    cloneAttachments["cloneAttachments()"]
    messageTextFromParts["messageTextFromParts()"]
    readPersistedMessageFinishReason["readPersistedMessageFinishReason()"]
    cloneUiMessage["cloneUiMessage()"]
    toUiMessage["toUiMessage()"]
    isTerminalRunStatus["isTerminalRunStatus()"]
    isMessageAttachment["isMessageAttachment()"]
    estimateTextTokens["estimateTextTokens()"]
    parseUsage["parseUsage()"]
    isPendingWait["isPendingWait()"]
    parsePendingWaits["parsePendingWaits()"]
    toContextBudget["toContextBudget()"]
    withStreamingBudgetStart["withStreamingBudgetStart()"]
    withEstimatedOutputDelta["withEstimatedOutputDelta()"]
    withReconciledUsage["withReconciledUsage()"]
    isReplyablePendingWait["isReplyablePendingWait()"]
    readPersistedState["readPersistedState()"]
    getSelectedModelAliases["getSelectedModelAliases()"]
    deriveAvailableModels["deriveAvailableModels()"]
    pickPreferredModel["pickPreferredModel()"]
    deriveAvailableReasoningModes["deriveAvailableReasoningModes()"]
    pickPreferredReasoningMode["pickPreferredReasoningMode()"]
  end
  subgraph lib_components_blocks_render_items["lib/components/blocks/render-items"]
    buildBlockRenderItems["buildBlockRenderItems()"]
    isDelegationParentBlock["isDelegationParentBlock()"]
    isCompleteToolBlock["isCompleteToolBlock()"]
    buildDelegationGroups["buildDelegationGroups()"]
    buildChainItems["buildChainItems()"]
    isAppViewToolBlock["isAppViewToolBlock()"]
  end
  subgraph lib_components_composer_context_bar_summary["lib/components/composer/context-bar-summary"]
    buildLastCallSummary["buildLastCallSummary()"]
    formatTokens["formatTokens()"]
  end
  subgraph lib_components_icons_file_kind["lib/components/icons/file-kind"]
    getFileKindIconKey["getFileKindIconKey()"]
  end
  subgraph lib_components_icons_index["lib/components/icons/index"]
    fileKindIcon["fileKindIcon()"]
  end
  subgraph lib_dialogs_conversation_dialog_controller_svelte["lib/dialogs/conversation-dialog-controller.svelte"]
    createConversationDialogController["createConversationDialogController()"]
    createClosedState["createClosedState()"]
    toVisibleRequest["toVisibleRequest()"]
  end
  subgraph lib_dialogs_conversation_dialog_keyboard_test["lib/dialogs/conversation-dialog-keyboard.test"]
    keyboardEvent["keyboardEvent()"]
  end
  subgraph lib_dialogs_conversation_dialog_keyboard["lib/dialogs/conversation-dialog-keyboard"]
    getConversationDialogKeyAction["getConversationDialogKeyAction()"]
    isModifiedPrimarySubmit["isModifiedPrimarySubmit()"]
  end
  subgraph lib_lightbox_lightbox_adapters["lib/lightbox/lightbox-adapters"]
    imageDraftsToLightboxItems["imageDraftsToLightboxItems()"]
    isLightboxableImageSrc["isLightboxableImageSrc()"]
    collectLightboxableImages["collectLightboxableImages()"]
    imageAttachmentsToLightboxItems["imageAttachmentsToLightboxItems()"]
    imageElementsToLightboxItems["imageElementsToLightboxItems()"]
  end
  subgraph lib_lightbox_lightbox_controller_svelte["lib/lightbox/lightbox-controller.svelte"]
    createLightboxController["createLightboxController()"]
    clampIndex["clampIndex()"]
  end
  subgraph lib_mcp_connect_form["lib/mcp/connect-form"]
    isDuplicateMcpLabelConflict["isDuplicateMcpLabelConflict()"]
    getAutoRenamedLabel["getAutoRenamedLabel()"]
    serializeArgumentRows["serializeArgumentRows()"]
    serializeKeyValueRows["serializeKeyValueRows()"]
  end
  subgraph lib_prompt_editor_agent_mention_extension["lib/prompt-editor/agent-mention-extension"]
    getReferencedAgentFromEditor["getReferencedAgentFromEditor()"]
    toAgentLabel["toAgentLabel()"]
    toAgentSlug["toAgentSlug()"]
    getReferencedAgentIdFromEditor["getReferencedAgentIdFromEditor()"]
    escapeInlineCode["escapeInlineCode()"]
  end
  subgraph lib_services_markdown_render_markdown["lib/services/markdown/render-markdown"]
    renderMarkdown["renderMarkdown()"]
    injectCaret["injectCaret()"]
    normalizeOptions["normalizeOptions()"]
    cacheKeyFor["cacheKeyFor()"]
  end
  subgraph lib_prompt_editor_file_mention_extension["lib/prompt-editor/file-mention-extension"]
    toMentionText["toMentionText()"]
    toRenderedMention["toRenderedMention()"]
    getReferencedFileIdsFromEditor["getReferencedFileIdsFromEditor()"]
  end
  subgraph lib_prompt_editor_create_prompt_editor["lib/prompt-editor/create-prompt-editor"]
    createPromptEditor["createPromptEditor()"]
    hasClipboardHtml["hasClipboardHtml()"]
    getPastedUrl["getPastedUrl()"]
  end
  subgraph lib_prompt_editor_markdown["lib/prompt-editor/markdown"]
    createDocFromMessage["createDocFromMessage()"]
    getMarkdownFromEditor["getMarkdownFromEditor()"]
    stripAgentMentionNodes["stripAgentMentionNodes()"]
    sanitizeMarkdownPaste["sanitizeMarkdownPaste()"]
    getMarkdownPasteContent["getMarkdownPasteContent()"]
    getMarkdownWithoutAgentMentionsFromEditor["getMarkdownWithoutAgentMentionsFromEditor()"]
  end
  subgraph lib_prompt_editor_image_extension["lib/prompt-editor/image-extension"]
    escapeMarkdownText["escapeMarkdownText()"]
    escapeMarkdownTitle["escapeMarkdownTitle()"]
  end
  subgraph lib_prompt_editor_large_paste["lib/prompt-editor/large-paste"]
    shouldUploadLargeTextPaste["shouldUploadLargeTextPaste()"]
    buildLargeTextPasteHiddenMetadata["buildLargeTextPasteHiddenMetadata()"]
    normalizeLineEndings["normalizeLineEndings()"]
    formatFileStamp["formatFileStamp()"]
    appendLargeTextPasteHiddenMetadata["appendLargeTextPasteHiddenMetadata()"]
    stripLargeTextPasteHiddenMetadata["stripLargeTextPasteHiddenMetadata()"]
    createLargeTextPasteAttachment["createLargeTextPasteAttachment()"]
    pad["pad()"]
    padMilliseconds["padMilliseconds()"]
    escapeRegex["escapeRegex()"]
  end
  subgraph lib_services_sse["lib/services/sse"]
    createAbortError["createAbortError()"]
    parseFrame["parseFrame()"]
    createReconnectingSseConsumer["createReconnectingSseConsumer()"]
    consumeSse["consumeSse()"]
    isAbortError["isAbortError()"]
    flushFrame["flushFrame()"]
    waitForDelay["waitForDelay()"]
    shouldRetryReconnect["shouldRetryReconnect()"]
    forwardAbortSignal["forwardAbortSignal()"]
  end
  subgraph lib_runtime_chat_debug["lib/runtime/chat-debug"]
    registerChatDebugSnapshot["registerChatDebugSnapshot()"]
    installGlobals["installGlobals()"]
    logChatDebug["logChatDebug()"]
    isChatDebugEnabled["isChatDebugEnabled()"]
  end
  subgraph lib_services_markdown_test["lib/services/markdown.test"]
    snapshot["snapshot()"]
  end
  subgraph lib_runtime_incomplete_markdown["lib/runtime/incomplete-markdown"]
    hasIncompleteCodeFence["hasIncompleteCodeFence()"]
    prepareMarkdownForRender["prepareMarkdownForRender()"]
    hasTable["hasTable()"]
    repairIncompleteMarkdown["repairIncompleteMarkdown()"]
  end
  subgraph lib_runtime_materialize["lib/runtime/materialize"]
    materializePendingWaitBlocks["materializePendingWaitBlocks()"]
    applyEvent["applyEvent()"]
    findLatestOpenThinking["findLatestOpenThinking()"]
    updateTextRenderState["updateTextRenderState()"]
    createTextBlock["createTextBlock()"]
    parsePersistedAssistantTranscript["parsePersistedAssistantTranscript()"]
    isConfirmationPendingWait["isConfirmationPendingWait()"]
    createToolBlockFromPendingWait["createToolBlockFromPendingWait()"]
    mergePendingWaitBlocks["mergePendingWaitBlocks()"]
    materializePersistedAssistantBlocks["materializePersistedAssistantBlocks()"]
    closeStreamingText["closeStreamingText()"]
    closeThinking["closeThinking()"]
    upsertThinkingBlock["upsertThinkingBlock()"]
    materializeBlocks["materializeBlocks()"]
    extractAppsMetaFromPayload["extractAppsMetaFromPayload()"]
    readSourceRunId["readSourceRunId()"]
    dedupeStrings["dedupeStrings()"]
    dedupeWebSearchReferences["dedupeWebSearchReferences()"]
    mergeWebSearchStatus["mergeWebSearchStatus()"]
    isToolStatus["isToolStatus()"]
    parsePersistedApproval["parsePersistedApproval()"]
    parsePersistedConfirmation["parsePersistedConfirmation()"]
    parsePersistedAppsMeta["parsePersistedAppsMeta()"]
    extractAppsMetaFromOutcome["extractAppsMetaFromOutcome()"]
    parsePersistedToolBlock["parsePersistedToolBlock()"]
    parsePersistedWebSearchBlock["parsePersistedWebSearchBlock()"]
    parsePersistedThinkingBlock["parsePersistedThinkingBlock()"]
    parsePersistedTextBlock["parsePersistedTextBlock()"]
    parsePersistedTranscriptBlock["parsePersistedTranscriptBlock()"]
    readPersistedTranscript["readPersistedTranscript()"]
    parseLegacyPersistedAssistantTranscript["parseLegacyPersistedAssistantTranscript()"]
  end
  subgraph lib_runtime_streaming_markdown["lib/runtime/streaming-markdown"]
    rebuildIncrementalMarkdownView["rebuildIncrementalMarkdownView()"]
    syncIncrementalMarkdownView["syncIncrementalMarkdownView()"]
    createIncrementalMarkdownView["createIncrementalMarkdownView()"]
    splitBlocks["splitBlocks()"]
    toSegments["toSegments()"]
  end
  subgraph lib_runtime_message_height_estimator["lib/runtime/message-height-estimator"]
    supportsTightUserBubble["supportsTightUserBubble()"]
    normalizeWidth["normalizeWidth()"]
    buildFontShorthand["buildFontShorthand()"]
    getMarkdownFallbackSurface["getMarkdownFallbackSurface()"]
    layoutPreparedText["layoutPreparedText()"]
    estimateTextHeight["estimateTextHeight()"]
    prepareTextLayout["prepareTextLayout()"]
    countPreparedTextLines["countPreparedTextLines()"]
    findTightBubbleWidth["findTightBubbleWidth()"]
    getTextBlockLiveTailSources["getTextBlockLiveTailSources()"]
    describeMessageHeightEstimate["describeMessageHeightEstimate()"]
    clampWidth["clampWidth()"]
    uniqueFallbackSurfaces["uniqueFallbackSurfaces()"]
    estimateMarkdownSourceHeight["estimateMarkdownSourceHeight()"]
    getBlockFallbackSurfaces["getBlockFallbackSurfaces()"]
    createMessageHeightEstimator["createMessageHeightEstimator()"]
    getTextBlockSources["getTextBlockSources()"]
  end
  subgraph lib_runtime_parse_blocks["lib/runtime/parse-blocks"]
    parseMarkdownIntoBlocks["parseMarkdownIntoBlocks()"]
    countNonSelfClosingOpenTags["countNonSelfClosingOpenTags()"]
    countClosingTags["countClosingTags()"]
    countDoubleDollars["countDoubleDollars()"]
    parseMarkdownIntoBlocks["_parseMarkdownIntoBlocks()"]
    getOpenTagPattern["getOpenTagPattern()"]
    getCloseTagPattern["getCloseTagPattern()"]
  end
  subgraph lib_runtime_scroll_controller_test["lib/runtime/scroll-controller.test"]
    createContext["createContext()"]
  end
  subgraph lib_runtime_scroll_controller["lib/runtime/scroll-controller"]
    createScrollController["createScrollController()"]
  end
  subgraph lib_services_api_test["lib/services/api.test"]
    createPendingSseResponse["createPendingSseResponse()"]
    parseJsonRequestBody["parseJsonRequestBody()"]
  end
  subgraph lib_services_attachment_api["lib/services/attachment-api"]
    isUploadedBackendFileSummary["isUploadedBackendFileSummary()"]
    toAttachmentKind["toAttachmentKind()"]
    uploadAttachment["uploadAttachment()"]
  end
  subgraph lib_services_file_picker_api["lib/services/file-picker-api"]
    isBackendFilePickerResult["isBackendFilePickerResult()"]
    searchFilePicker["searchFilePicker()"]
  end
  subgraph lib_services_auth["lib/services/auth"]
    getAuthSession["getAuthSession()"]
    loginWithPassword["loginWithPassword()"]
    logout["logout()"]
  end
  subgraph lib_stores_chat_store_test["lib/stores/chat-store.test"]
    session["session()"]
    createStorage["createStorage()"]
    thread["thread()"]
    userMessage["userMessage()"]
    assistantMessage["assistantMessage()"]
    threadWith["threadWith()"]
    sessionWith["sessionWith()"]
    userMessageWith["userMessageWith()"]
    pendingConfirmationWait["pendingConfirmationWait()"]
    assistantMessageWithMetadata["assistantMessageWithMetadata()"]
    persistedToolTranscript["persistedToolTranscript()"]
    persistedReasoningWaitingTranscript["persistedReasoningWaitingTranscript()"]
    buildRun["buildRun()"]
    runEvent["runEvent()"]
    completedInteraction["completedInteraction()"]
  end
  subgraph lib_services_authenticated_asset["lib/services/authenticated-asset"]
    isAuthenticatedAssetUrl["isAuthenticatedAssetUrl()"]
    fetchAuthenticatedAssetObjectUrl["fetchAuthenticatedAssetObjectUrl()"]
    readPathname["readPathname()"]
    releaseCacheEntry["releaseCacheEntry()"]
    peekCachedDisplayUrl["peekCachedDisplayUrl()"]
    resolveImageDisplayUrl["resolveImageDisplayUrl()"]
    isAbsoluteHttpUrl["isAbsoluteHttpUrl()"]
  end
  subgraph lib_services_clipboard["lib/services/clipboard"]
    extensionForMimeType["extensionForMimeType()"]
    sanitizeFileName["sanitizeFileName()"]
    filenameFromPathname["filenameFromPathname()"]
    isSameOriginUrl["isSameOriginUrl()"]
    shouldUseApiFetch["shouldUseApiFetch()"]
    triggerDownload["triggerDownload()"]
    resolveDownloadFileName["resolveDownloadFileName()"]
    downloadBlob["downloadBlob()"]
    fetchImageBlob["fetchImageBlob()"]
    copyTextToClipboard["copyTextToClipboard()"]
    copyImageToClipboard["copyImageToClipboard()"]
    downloadImage["downloadImage()"]
  end
  subgraph lib_services_markdown_code_block_renderer["lib/services/markdown/code-block-renderer"]
    createCodeBlockRenderer["createCodeBlockRenderer()"]
    escapeHtml["escapeHtml()"]
    escapeAttribute["escapeAttribute()"]
    resolveLanguage["resolveLanguage()"]
    prettyLanguageLabel["prettyLanguageLabel()"]
    trimTrailingNewlines["trimTrailingNewlines()"]
    wrapLines["wrapLines()"]
  end
  subgraph lib_services_markdown_markdown_pipeline["lib/services/markdown/markdown-pipeline"]
    createMarkdownPipeline["createMarkdownPipeline()"]
    renderFileReference["renderFileReference()"]
    renderAgentReference["renderAgentReference()"]
  end
  subgraph lib_services_markdown_sanitize_html["lib/services/markdown/sanitize-html"]
    sanitizeHtml["sanitizeHtml()"]
  end
  subgraph lib_services_markdown_render_cache["lib/services/markdown/render-cache"]
    createRenderCache["createRenderCache()"]
  end
  subgraph lib_services_mcp_app_resources["lib/services/mcp-app-resources"]
    fetchAppResourceHtml["fetchAppResourceHtml()"]
    buildOriginSearchParams["buildOriginSearchParams()"]
    callMcpAppTool["callMcpAppTool()"]
    readMcpAppResource["readMcpAppResource()"]
    listMcpAppResources["listMcpAppResources()"]
    listMcpAppResourceTemplates["listMcpAppResourceTemplates()"]
  end
  subgraph lib_services_sse_test["lib/services/sse.test"]
    createChunkedResponse["createChunkedResponse()"]
  end
  subgraph lib_shortcuts_normalize["lib/shortcuts/normalize"]
    normalizeShortcutKey["normalizeShortcutKey()"]
    isModifierAlias["isModifierAlias()"]
    normalizeBaseKey["normalizeBaseKey()"]
    formatShortcut["formatShortcut()"]
    deriveBaseKeyFromEvent["deriveBaseKeyFromEvent()"]
    normalizeKeyboardEvent["normalizeKeyboardEvent()"]
  end
  subgraph lib_shortcuts_shortcut_manager_test["lib/shortcuts/shortcut-manager.test"]
    createKeyboardEvent["createKeyboardEvent()"]
  end
  subgraph lib_shortcuts_shortcut_manager["lib/shortcuts/shortcut-manager"]
    createShortcutManager["createShortcutManager()"]
    isEditableElement["isEditableElement()"]
  end
  subgraph lib_ui_layer_stack["lib/ui/layer-stack"]
    createShortcutLayerStack["createShortcutLayerStack()"]
  end
  subgraph lib_stores_background_activity_svelte["lib/stores/background-activity.svelte"]
    createBackgroundActivityStore["createBackgroundActivityStore()"]
    loadDismissed["loadDismissed()"]
    saveDismissed["saveDismissed()"]
    clearDismissed["clearDismissed()"]
  end
  subgraph lib_stores_chat_width_svelte["lib/stores/chat-width.svelte"]
    clamp["clamp()"]
    load["load()"]
  end
  subgraph lib_stores_message_navigator_svelte["lib/stores/message-navigator.svelte"]
    createMessageNavigator["createMessageNavigator()"]
  end
  subgraph lib_stores_typewriter_playback_svelte["lib/stores/typewriter-playback.svelte"]
    createTypewriterPlaybackStore["createTypewriterPlaybackStore()"]
  end
  subgraph lib_utils_perf["lib/utils/perf"]
    perfStats["perfStats()"]
    resetPerfStats["resetPerfStats()"]
    getBucket["getBucket()"]
  end
  subgraph test_preload["test-preload"]
    estimateCharWidth["estimateCharWidth()"]
    estimateTextWidth["estimateTextWidth()"]
    parseFontSize["parseFontSize()"]
  end
  createFile --> toFileArray
  createFile --> collectTransferFiles
  createFile --> hasTransferFiles
  createFile --> createAttachmentDraftStore
  createFile --> createComposerAttachmentStore
  collectTransferFiles --> toFileArray
  imageAttachment --> filterInlineRenderedImageAttachments
  formatAttachmentSize --> getAttachmentImageColumnCount
  formatAttachmentSize --> getAttachmentImageGridMetrics
  formatAttachmentSize --> stripTrailingZero
  formatAttachmentSize --> trim
  getAttachmentExtension --> getAttachmentImageColumnCount
  getAttachmentExtension --> getAttachmentImageGridMetrics
  getAttachmentExtension --> trim
  getAttachmentImageColumnCount --> getAttachmentImageGridMetrics
  getAttachmentImageGridMetrics --> getAttachmentImageColumnCount
  estimateAttachmentImageGridHeight --> getAttachmentImageGridMetrics
  stripTrailingZero --> getAttachmentImageColumnCount
  stripTrailingZero --> getAttachmentImageGridMetrics
  stripTrailingZero --> trim
  createAgentBrowserProvider --> visibilityToGroup
  createAgentBrowserProvider --> toStaticResults
  createAgentBrowserProvider --> searchCommands
  createAgentBrowserProvider --> listAgents
  createAgentBrowserProvider --> humanizeErrorMessage
  visibilityToGroup --> toStaticResults
  visibilityToGroup --> listAgents
  visibilityToGroup --> humanizeErrorMessage
  visibilityToGroup --> searchCommands
  toStaticResults --> visibilityToGroup
  toStaticResults --> listAgents
  toStaticResults --> humanizeErrorMessage
  toStaticResults --> searchCommands
  toStaticResults --> scopeToGroup
  toStaticResults --> listToolProfiles
  createAgentProvider --> visibilityToGroup
  createAgentProvider --> toStaticResults
  createAgentProvider --> searchCommands
  createAgentProvider --> listAgents
  createAgent --> createAgentProvider
  createAppCommandsStub --> createCommandsProvider
  createAppCommandsStub --> createCommandRegistry
  createCommandsProvider --> createCommandRegistry
  createCommandsProvider --> searchCommands
  createConversationProvider --> formatUpdatedAt
  createConversationProvider --> deriveActivity
  createConversationProvider --> toThreadLabel
  createConversationProvider --> listThreads
  createConversationProvider --> trim
  formatUpdatedAt --> listThreads
  formatUpdatedAt --> trim
  deriveActivity --> listThreads
  deriveActivity --> trim
  toThreadLabel --> formatUpdatedAt
  toThreadLabel --> deriveActivity
  toThreadLabel --> listThreads
  toThreadLabel --> trim
  createThread --> createConversationProvider
  createThread --> createChatStoreStub
  createThread --> createThemeStoreStub
  createThread --> createAppCommands
  createMcpBrowserProvider --> toStaticResults
  createMcpBrowserProvider --> statusToGroup
  createMcpBrowserProvider --> groupOrder
  createMcpBrowserProvider --> listMcpServers
  createMcpBrowserProvider --> humanizeErrorMessage
  statusToGroup --> groupOrder
  statusToGroup --> listMcpServers
  statusToGroup --> humanizeErrorMessage
  groupOrder --> statusToGroup
  groupOrder --> listMcpServers
  groupOrder --> humanizeErrorMessage
  createMcpToolsProvider --> toStaticResults
  createMcpToolsProvider --> searchCommands
  createMcpToolsProvider --> getMcpServerTools
  createMcpToolsProvider --> trim
  createMcpToolsProvider --> humanizeErrorMessage
  createRenameProvider --> trim
  item --> searchCommands
  searchCommands --> scoreLabel
  searchCommands --> scoreKeywords
  searchCommands --> trim
  findContiguousMatch --> scoreLabel
  findContiguousMatch --> scoreKeywords
  findContiguousMatch --> trim
  scoreLabel --> findContiguousMatch
  scoreLabel --> scoreKeywords
  scoreLabel --> trim
  scoreKeywords --> scoreLabel
  scoreKeywords --> trim
  createToolProfileBrowserProvider --> toStaticResults
  createToolProfileBrowserProvider --> searchCommands
  createToolProfileBrowserProvider --> scopeToGroup
  createToolProfileBrowserProvider --> listToolProfiles
  scopeToGroup --> toStaticResults
  scopeToGroup --> listToolProfiles
  createWorkspaceProvider --> searchCommands
  createWorkspaceProvider --> getWorkspaceLabel
  createWorkspaceProvider --> toWorkspaceLabel
  getWorkspaceLabel --> searchCommands
  getWorkspaceLabel --> toWorkspaceLabel
  toWorkspaceLabel --> searchCommands
  toWorkspaceLabel --> getWorkspaceLabel
  createMembership --> createWorkspaceProvider
  createChatStoreStub --> createThemeStoreStub
  createChatStoreStub --> createAppCommands
  createThemeStoreStub --> createChatStoreStub
  createThemeStoreStub --> createAppCommands
  modelSupportsReasoning --> trim
  createAppCommands --> trim
  getExpandablePanelId --> sanitizeDomId
  getExpandablePanelId --> getExpandableBlockName
  getExpandablePanelId --> isSuspendedToolBlock
  getExpandablePanelId --> getSuspendedToolLabel
  getExpandableToggleLabel --> getExpandableBlockName
  getExpandableToggleLabel --> isSuspendedToolBlock
  getExpandableToggleLabel --> getSuspendedToolLabel
  getBlockLiveMode --> isSuspendedToolBlock
  getBlockLiveMode --> getSuspendedToolLabel
  getBlockAnnouncement --> isSuspendedToolBlock
  getBlockAnnouncement --> getSuspendedToolLabel
  getBlockRenderErrorMessage --> getAdjacentExpandableIndex
  focusAdjacentExpandableToggle --> getAdjacentExpandableIndex
  sanitizeDomId --> getExpandableBlockName
  sanitizeDomId --> isSuspendedToolBlock
  sanitizeDomId --> getSuspendedToolLabel
  getExpandableBlockName --> sanitizeDomId
  getExpandableBlockName --> isSuspendedToolBlock
  getExpandableBlockName --> getSuspendedToolLabel
  textBlock --> toolBlock
  textBlock --> buildVisibleBlocks
  toolBlock --> textBlock
  toolBlock --> buildVisibleBlocks
  toolBlock --> isSuspendedToolBlock
  toolBlock --> getSuspendedToolLabel
  delegateBlock --> getDelegationStatus
  delegateBlock --> getWaitingFooterState
  delegateBlock --> getWaitingFooterLabel
  isReplyWaitBlock --> isSuspendedBlock
  isReplyWaitBlock --> isActiveDelegationParentBlock
  isReplyWaitBlock --> readSuspendedWaits
  isReplyWaitBlock --> readSuspendTargetKind
  isReplyWaitBlock --> isDelegationWithSuspendedOutput
  isReplyWaitBlock --> dedupeAgentAliases
  isReplyWaitBlock --> trim
  isSuspendedBlock --> isReplyWaitBlock
  isSuspendedBlock --> isActiveDelegationParentBlock
  isSuspendedBlock --> getWaitingFooterState
  isSuspendedBlock --> isDelegationWithSuspendedOutput
  isSuspendedBlock --> dedupeAgentAliases
  isSuspendedBlock --> trim
  isActiveDelegationParentBlock --> isReplyWaitBlock
  isActiveDelegationParentBlock --> isSuspendedBlock
  isActiveDelegationParentBlock --> getWaitingFooterState
  isActiveDelegationParentBlock --> isDelegationWithSuspendedOutput
  isActiveDelegationParentBlock --> dedupeAgentAliases
  isActiveDelegationParentBlock --> trim
  getDelegationStatus --> isReplyWaitBlock
  getDelegationStatus --> isSuspendedBlock
  getDelegationStatus --> isActiveDelegationParentBlock
  getDelegationStatus --> getWaitingFooterState
  getDelegationStatus --> dedupeAgentAliases
  getDelegationStatus --> trim
  getWaitingFooterState --> isReplyWaitBlock
  getWaitingFooterState --> isSuspendedBlock
  getWaitingFooterState --> isActiveDelegationParentBlock
  getWaitingFooterState --> dedupeAgentAliases
  getWaitingFooterState --> trim
  getWaitingFooterLabel --> getWaitingFooterState
  isRecord --> isReplyWaitBlock
  isRecord --> isSuspendedBlock
  isRecord --> readSuspendedWaits
  isRecord --> readSuspendTargetKind
  isRecord --> isDelegationWithSuspendedOutput
  isRecord --> trim
  isRecord --> toNumberOrNull
  readSuspendedWaits --> isReplyWaitBlock
  readSuspendedWaits --> isSuspendedBlock
  readSuspendedWaits --> isRecord
  readSuspendedWaits --> readSuspendTargetKind
  readSuspendedWaits --> isDelegationWithSuspendedOutput
  readSuspendTargetKind --> isReplyWaitBlock
  readSuspendTargetKind --> isSuspendedBlock
  readSuspendTargetKind --> isActiveDelegationParentBlock
  readSuspendTargetKind --> isRecord
  readSuspendTargetKind --> readSuspendedWaits
  readSuspendTargetKind --> isDelegationWithSuspendedOutput
  readSuspendTargetKind --> dedupeAgentAliases
  readSuspendTargetKind --> trim
  isDelegationWithSuspendedOutput --> isReplyWaitBlock
  isDelegationWithSuspendedOutput --> isSuspendedBlock
  isDelegationWithSuspendedOutput --> isActiveDelegationParentBlock
  isDelegationWithSuspendedOutput --> readSuspendedWaits
  isDelegationWithSuspendedOutput --> readSuspendTargetKind
  isDelegationWithSuspendedOutput --> dedupeAgentAliases
  isDelegationWithSuspendedOutput --> trim
  dedupeAgentAliases --> isReplyWaitBlock
  dedupeAgentAliases --> isSuspendedBlock
  dedupeAgentAliases --> isActiveDelegationParentBlock
  dedupeAgentAliases --> getWaitingFooterState
  dedupeAgentAliases --> trim
  buildBlockRenderItems --> isDelegationParentBlock
  buildBlockRenderItems --> isCompleteToolBlock
  buildBlockRenderItems --> buildDelegationGroups
  buildBlockRenderItems --> buildChainItems
  isDelegationParentBlock --> isAppViewToolBlock
  isDelegationParentBlock --> isCompleteToolBlock
  isDelegationParentBlock --> buildChainItems
  isAppViewToolBlock --> isDelegationParentBlock
  isAppViewToolBlock --> isCompleteToolBlock
  isAppViewToolBlock --> buildDelegationGroups
  isAppViewToolBlock --> buildChainItems
  isCompleteToolBlock --> isDelegationParentBlock
  isCompleteToolBlock --> isAppViewToolBlock
  isCompleteToolBlock --> buildDelegationGroups
  isCompleteToolBlock --> buildChainItems
  buildDelegationGroups --> isDelegationParentBlock
  buildDelegationGroups --> isAppViewToolBlock
  buildDelegationGroups --> isCompleteToolBlock
  buildDelegationGroups --> buildChainItems
  buildChainItems --> isDelegationParentBlock
  buildChainItems --> isCompleteToolBlock
  buildChainItems --> buildDelegationGroups
  isSuspendedToolBlock --> readSuspendTargetKind
  getSuspendedToolLabel --> readSuspendTargetKind
  buildLastCallSummary --> formatTokens
  getFileKindIconKey --> trim
  fileKindIcon --> getFileKindIconKey
  createConversationDialogController --> createClosedState
  createConversationDialogController --> toVisibleRequest
  createClosedState --> toVisibleRequest
  toVisibleRequest --> createClosedState
  keyboardEvent --> getConversationDialogKeyAction
  keyboardEvent --> isModifiedPrimarySubmit
  imageDraftsToLightboxItems --> isLightboxableImageSrc
  imageDraftsToLightboxItems --> collectLightboxableImages
  imageDraftsToLightboxItems --> trim
  imageAttachmentsToLightboxItems --> isLightboxableImageSrc
  imageAttachmentsToLightboxItems --> collectLightboxableImages
  imageAttachmentsToLightboxItems --> trim
  isLightboxableImageSrc --> collectLightboxableImages
  isLightboxableImageSrc --> trim
  collectLightboxableImages --> isLightboxableImageSrc
  collectLightboxableImages --> trim
  imageElementsToLightboxItems --> collectLightboxableImages
  createLightboxController --> clampIndex
  isDuplicateMcpLabelConflict --> trim
  getAutoRenamedLabel --> trim
  serializeArgumentRows --> trim
  serializeKeyValueRows --> trim
  getReferencedAgentFromEditor --> toAgentLabel
  getReferencedAgentFromEditor --> toAgentSlug
  getReferencedAgentFromEditor --> trim
  getReferencedAgentIdFromEditor --> getReferencedAgentFromEditor
  escapeInlineCode --> toAgentLabel
  escapeInlineCode --> toAgentSlug
  escapeInlineCode --> trim
  escapeInlineCode --> renderMarkdown
  escapeInlineCode --> toMentionText
  escapeInlineCode --> toRenderedMention
  toAgentLabel --> escapeInlineCode
  toAgentLabel --> toAgentSlug
  toAgentLabel --> trim
  toAgentLabel --> renderMarkdown
  toAgentSlug --> escapeInlineCode
  toAgentSlug --> toAgentLabel
  toAgentSlug --> trim
  toAgentSlug --> renderMarkdown
  createPromptEditor --> collectTransferFiles
  createPromptEditor --> createDocFromMessage
  createPromptEditor --> getMarkdownFromEditor
  hasClipboardHtml --> collectTransferFiles
  hasClipboardHtml --> createDocFromMessage
  hasClipboardHtml --> getMarkdownFromEditor
  hasClipboardHtml --> trim
  getPastedUrl --> collectTransferFiles
  getPastedUrl --> createDocFromMessage
  getPastedUrl --> getMarkdownFromEditor
  getPastedUrl --> trim
  getReferencedFileIdsFromEditor --> trim
  toMentionText --> escapeInlineCode
  toMentionText --> toRenderedMention
  toMentionText --> trim
  toMentionText --> renderMarkdown
  toRenderedMention --> escapeInlineCode
  toRenderedMention --> toMentionText
  toRenderedMention --> trim
  toRenderedMention --> renderMarkdown
  escapeMarkdownText --> escapeMarkdownTitle
  escapeMarkdownText --> trim
  escapeMarkdownText --> renderMarkdown
  escapeMarkdownTitle --> escapeMarkdownText
  escapeMarkdownTitle --> trim
  escapeMarkdownTitle --> renderMarkdown
  shouldUploadLargeTextPaste --> buildLargeTextPasteHiddenMetadata
  shouldUploadLargeTextPaste --> normalizeLineEndings
  shouldUploadLargeTextPaste --> formatFileStamp
  shouldUploadLargeTextPaste --> trim
  buildLargeTextPasteHiddenMetadata --> normalizeLineEndings
  buildLargeTextPasteHiddenMetadata --> formatFileStamp
  buildLargeTextPasteHiddenMetadata --> trim
  appendLargeTextPasteHiddenMetadata --> buildLargeTextPasteHiddenMetadata
  appendLargeTextPasteHiddenMetadata --> normalizeLineEndings
  appendLargeTextPasteHiddenMetadata --> formatFileStamp
  appendLargeTextPasteHiddenMetadata --> trim
  stripLargeTextPasteHiddenMetadata --> normalizeLineEndings
  stripLargeTextPasteHiddenMetadata --> formatFileStamp
  stripLargeTextPasteHiddenMetadata --> trim
  createLargeTextPasteAttachment --> normalizeLineEndings
  createLargeTextPasteAttachment --> formatFileStamp
  normalizeLineEndings --> buildLargeTextPasteHiddenMetadata
  normalizeLineEndings --> pad
  normalizeLineEndings --> padMilliseconds
  normalizeLineEndings --> escapeRegex
  normalizeLineEndings --> formatFileStamp
  normalizeLineEndings --> trim
  normalizeLineEndings --> createDocFromMessage
  normalizeLineEndings --> stripAgentMentionNodes
  normalizeLineEndings --> createAbortError
  normalizeLineEndings --> parseFrame
  pad --> buildLargeTextPasteHiddenMetadata
  pad --> normalizeLineEndings
  pad --> padMilliseconds
  pad --> escapeRegex
  pad --> formatFileStamp
  pad --> trim
  padMilliseconds --> buildLargeTextPasteHiddenMetadata
  padMilliseconds --> normalizeLineEndings
  padMilliseconds --> pad
  padMilliseconds --> escapeRegex
  padMilliseconds --> formatFileStamp
  padMilliseconds --> trim
  escapeRegex --> buildLargeTextPasteHiddenMetadata
  escapeRegex --> normalizeLineEndings
  escapeRegex --> pad
  escapeRegex --> padMilliseconds
  escapeRegex --> formatFileStamp
  escapeRegex --> trim
  formatFileStamp --> buildLargeTextPasteHiddenMetadata
  formatFileStamp --> normalizeLineEndings
  formatFileStamp --> pad
  formatFileStamp --> padMilliseconds
  formatFileStamp --> escapeRegex
  formatFileStamp --> trim
  createDocFromMessage --> normalizeLineEndings
  createDocFromMessage --> stripAgentMentionNodes
  sanitizeMarkdownPaste --> normalizeLineEndings
  sanitizeMarkdownPaste --> createDocFromMessage
  sanitizeMarkdownPaste --> stripAgentMentionNodes
  getMarkdownPasteContent --> normalizeLineEndings
  getMarkdownPasteContent --> createDocFromMessage
  getMarkdownPasteContent --> stripAgentMentionNodes
  getMarkdownFromEditor --> normalizeLineEndings
  getMarkdownFromEditor --> stripAgentMentionNodes
  getMarkdownWithoutAgentMentionsFromEditor --> normalizeLineEndings
  getMarkdownWithoutAgentMentionsFromEditor --> stripAgentMentionNodes
  stripAgentMentionNodes --> normalizeLineEndings
  registerChatDebugSnapshot --> installGlobals
  logChatDebug --> installGlobals
  isChatDebugEnabled --> installGlobals
  installGlobals --> snapshot
  hasIncompleteCodeFence --> prepareMarkdownForRender
  hasIncompleteCodeFence --> trim
  hasTable --> hasIncompleteCodeFence
  hasTable --> prepareMarkdownForRender
  hasTable --> trim
  prepareMarkdownForRender --> hasIncompleteCodeFence
  repairIncompleteMarkdown --> hasIncompleteCodeFence
  repairIncompleteMarkdown --> prepareMarkdownForRender
  materializePendingWaitBlocks --> applyEvent
  materializePendingWaitBlocks --> findLatestOpenThinking
  materializePendingWaitBlocks --> updateTextRenderState
  materializePendingWaitBlocks --> createTextBlock
  materializePendingWaitBlocks --> parsePersistedAssistantTranscript
  materializePendingWaitBlocks --> isConfirmationPendingWait
  materializePendingWaitBlocks --> createToolBlockFromPendingWait
  materializePendingWaitBlocks --> trim
  mergePendingWaitBlocks --> applyEvent
  mergePendingWaitBlocks --> findLatestOpenThinking
  mergePendingWaitBlocks --> updateTextRenderState
  mergePendingWaitBlocks --> createTextBlock
  mergePendingWaitBlocks --> parsePersistedAssistantTranscript
  mergePendingWaitBlocks --> isConfirmationPendingWait
  mergePendingWaitBlocks --> createToolBlockFromPendingWait
  mergePendingWaitBlocks --> trim
  materializePersistedAssistantBlocks --> applyEvent
  materializePersistedAssistantBlocks --> updateTextRenderState
  materializePersistedAssistantBlocks --> createTextBlock
  materializePersistedAssistantBlocks --> parsePersistedAssistantTranscript
  materializePersistedAssistantBlocks --> closeStreamingText
  materializePersistedAssistantBlocks --> closeThinking
  materializePersistedAssistantBlocks --> upsertThinkingBlock
  materializePersistedAssistantBlocks --> trim
  materializeBlocks --> isRecord
  materializeBlocks --> applyEvent
  materializeBlocks --> updateTextRenderState
  materializeBlocks --> createTextBlock
  materializeBlocks --> extractAppsMetaFromPayload
  materializeBlocks --> closeStreamingText
  materializeBlocks --> closeThinking
  materializeBlocks --> upsertThinkingBlock
  applyEvent --> isRecord
  applyEvent --> updateTextRenderState
  applyEvent --> createTextBlock
  applyEvent --> extractAppsMetaFromPayload
  applyEvent --> closeStreamingText
  applyEvent --> closeThinking
  applyEvent --> upsertThinkingBlock
  findLatestOpenThinking --> isRecord
  findLatestOpenThinking --> rebuildIncrementalMarkdownView
  findLatestOpenThinking --> syncIncrementalMarkdownView
  updateTextRenderState --> isRecord
  updateTextRenderState --> rebuildIncrementalMarkdownView
  updateTextRenderState --> syncIncrementalMarkdownView
  createTextBlock --> isRecord
  createTextBlock --> rebuildIncrementalMarkdownView
  readSourceRunId --> isRecord
  dedupeStrings --> isRecord
  dedupeWebSearchReferences --> isRecord
  mergeWebSearchStatus --> isRecord
  isToolStatus --> isRecord
  parsePersistedApproval --> isRecord
  parsePersistedApproval --> isToolStatus
  parsePersistedConfirmation --> isRecord
  parsePersistedConfirmation --> isToolStatus
  parsePersistedConfirmation --> parsePersistedAppsMeta
  parsePersistedAppsMeta --> isRecord
  parsePersistedAppsMeta --> isToolStatus
  parsePersistedAppsMeta --> parsePersistedApproval
  parsePersistedAppsMeta --> parsePersistedConfirmation
  extractAppsMetaFromOutcome --> isRecord
  extractAppsMetaFromOutcome --> isToolStatus
  extractAppsMetaFromOutcome --> parsePersistedApproval
  extractAppsMetaFromOutcome --> parsePersistedConfirmation
  extractAppsMetaFromOutcome --> parsePersistedAppsMeta
  extractAppsMetaFromPayload --> isRecord
  extractAppsMetaFromPayload --> isToolStatus
  extractAppsMetaFromPayload --> parsePersistedApproval
  extractAppsMetaFromPayload --> parsePersistedConfirmation
  extractAppsMetaFromPayload --> parsePersistedAppsMeta
  parsePersistedToolBlock --> isRecord
  parsePersistedToolBlock --> isToolStatus
  parsePersistedToolBlock --> parsePersistedApproval
  parsePersistedToolBlock --> parsePersistedConfirmation
  parsePersistedToolBlock --> parsePersistedAppsMeta
  parsePersistedWebSearchBlock --> isRecord
  parsePersistedWebSearchBlock --> readSourceRunId
  parsePersistedThinkingBlock --> isRecord
  parsePersistedThinkingBlock --> createTextBlock
  parsePersistedThinkingBlock --> readSourceRunId
  parsePersistedThinkingBlock --> parsePersistedToolBlock
  parsePersistedThinkingBlock --> parsePersistedWebSearchBlock
  parsePersistedThinkingBlock --> parsePersistedTextBlock
  parsePersistedThinkingBlock --> parsePersistedTranscriptBlock
  parsePersistedThinkingBlock --> readPersistedTranscript
  parsePersistedTextBlock --> isRecord
  parsePersistedTextBlock --> createTextBlock
  parsePersistedTextBlock --> readSourceRunId
  parsePersistedTextBlock --> parsePersistedToolBlock
  parsePersistedTextBlock --> parsePersistedWebSearchBlock
  parsePersistedTextBlock --> parsePersistedThinkingBlock
  parsePersistedTextBlock --> parsePersistedTranscriptBlock
  parsePersistedTextBlock --> readPersistedTranscript
  parsePersistedTextBlock --> parseLegacyPersistedAssistantTranscript
  parsePersistedTextBlock --> isConfirmationPendingWait
  parsePersistedTranscriptBlock --> isRecord
  parsePersistedTranscriptBlock --> parsePersistedToolBlock
  parsePersistedTranscriptBlock --> parsePersistedWebSearchBlock
  parsePersistedTranscriptBlock --> parsePersistedThinkingBlock
  parsePersistedTranscriptBlock --> parsePersistedTextBlock
  parsePersistedTranscriptBlock --> readPersistedTranscript
  parsePersistedTranscriptBlock --> parseLegacyPersistedAssistantTranscript
  parsePersistedTranscriptBlock --> isConfirmationPendingWait
  parsePersistedTranscriptBlock --> trim
  readPersistedTranscript --> isRecord
  readPersistedTranscript --> parsePersistedToolBlock
  readPersistedTranscript --> parsePersistedWebSearchBlock
  readPersistedTranscript --> parsePersistedTranscriptBlock
  readPersistedTranscript --> parseLegacyPersistedAssistantTranscript
  readPersistedTranscript --> isConfirmationPendingWait
  readPersistedTranscript --> trim
  parseLegacyPersistedAssistantTranscript --> parsePersistedToolBlock
  parseLegacyPersistedAssistantTranscript --> parsePersistedWebSearchBlock
  parseLegacyPersistedAssistantTranscript --> parsePersistedTranscriptBlock
  parseLegacyPersistedAssistantTranscript --> readPersistedTranscript
  parseLegacyPersistedAssistantTranscript --> isConfirmationPendingWait
  parseLegacyPersistedAssistantTranscript --> createToolBlockFromPendingWait
  parseLegacyPersistedAssistantTranscript --> trim
  parsePersistedAssistantTranscript --> findLatestOpenThinking
  parsePersistedAssistantTranscript --> updateTextRenderState
  parsePersistedAssistantTranscript --> parsePersistedTranscriptBlock
  parsePersistedAssistantTranscript --> readPersistedTranscript
  parsePersistedAssistantTranscript --> parseLegacyPersistedAssistantTranscript
  parsePersistedAssistantTranscript --> isConfirmationPendingWait
  parsePersistedAssistantTranscript --> createToolBlockFromPendingWait
  parsePersistedAssistantTranscript --> trim
  isConfirmationPendingWait --> findLatestOpenThinking
  isConfirmationPendingWait --> updateTextRenderState
  isConfirmationPendingWait --> createToolBlockFromPendingWait
  isConfirmationPendingWait --> trim
  isConfirmationPendingWait --> isRecord
  isConfirmationPendingWait --> cloneBlocks
  isConfirmationPendingWait --> parsePersistedAttachments
  isConfirmationPendingWait --> isMessageFinishReason
  isConfirmationPendingWait --> parsePersistedLiveAssistantMessage
  createToolBlockFromPendingWait --> findLatestOpenThinking
  createToolBlockFromPendingWait --> updateTextRenderState
  createToolBlockFromPendingWait --> isConfirmationPendingWait
  createToolBlockFromPendingWait --> trim
  closeStreamingText --> applyEvent
  closeStreamingText --> findLatestOpenThinking
  closeStreamingText --> updateTextRenderState
  closeStreamingText --> createTextBlock
  closeStreamingText --> parsePersistedAssistantTranscript
  closeStreamingText --> closeThinking
  closeStreamingText --> trim
  closeThinking --> applyEvent
  closeThinking --> findLatestOpenThinking
  closeThinking --> updateTextRenderState
  closeThinking --> createTextBlock
  closeThinking --> parsePersistedAssistantTranscript
  closeThinking --> upsertThinkingBlock
  closeThinking --> trim
  upsertThinkingBlock --> applyEvent
  upsertThinkingBlock --> updateTextRenderState
  upsertThinkingBlock --> createTextBlock
  upsertThinkingBlock --> parsePersistedAssistantTranscript
  upsertThinkingBlock --> closeThinking
  upsertThinkingBlock --> trim
  supportsTightUserBubble --> normalizeWidth
  supportsTightUserBubble --> buildFontShorthand
  supportsTightUserBubble --> getMarkdownFallbackSurface
  supportsTightUserBubble --> layoutPreparedText
  supportsTightUserBubble --> estimateTextHeight
  supportsTightUserBubble --> trim
  prepareTextLayout --> normalizeWidth
  prepareTextLayout --> buildFontShorthand
  prepareTextLayout --> getMarkdownFallbackSurface
  prepareTextLayout --> layoutPreparedText
  prepareTextLayout --> estimateTextHeight
  prepareTextLayout --> trim
  countPreparedTextLines --> normalizeWidth
  countPreparedTextLines --> getMarkdownFallbackSurface
  countPreparedTextLines --> layoutPreparedText
  countPreparedTextLines --> estimateTextHeight
  countPreparedTextLines --> parseMarkdownIntoBlocks
  countPreparedTextLines --> trim
  findTightBubbleWidth --> normalizeWidth
  findTightBubbleWidth --> getMarkdownFallbackSurface
  findTightBubbleWidth --> layoutPreparedText
  findTightBubbleWidth --> estimateTextHeight
  findTightBubbleWidth --> getTextBlockLiveTailSources
  findTightBubbleWidth --> parseMarkdownIntoBlocks
  findTightBubbleWidth --> trim
  describeMessageHeightEstimate --> prepareTextLayout
  describeMessageHeightEstimate --> clampWidth
  describeMessageHeightEstimate --> uniqueFallbackSurfaces
  describeMessageHeightEstimate --> getMarkdownFallbackSurface
  describeMessageHeightEstimate --> estimateMarkdownSourceHeight
  describeMessageHeightEstimate --> getTextBlockLiveTailSources
  describeMessageHeightEstimate --> getBlockFallbackSurfaces
  describeMessageHeightEstimate --> parseMarkdownIntoBlocks
  createMessageHeightEstimator --> supportsTightUserBubble
  createMessageHeightEstimator --> prepareTextLayout
  createMessageHeightEstimator --> clampWidth
  createMessageHeightEstimator --> estimateTextHeight
  createMessageHeightEstimator --> estimateMarkdownSourceHeight
  createMessageHeightEstimator --> getTextBlockLiveTailSources
  createMessageHeightEstimator --> parseMarkdownIntoBlocks
  normalizeWidth --> buildFontShorthand
  normalizeWidth --> layoutPreparedText
  normalizeWidth --> trim
  clampWidth --> normalizeWidth
  clampWidth --> buildFontShorthand
  clampWidth --> layoutPreparedText
  clampWidth --> trim
  buildFontShorthand --> normalizeWidth
  buildFontShorthand --> layoutPreparedText
  buildFontShorthand --> trim
  uniqueFallbackSurfaces --> normalizeWidth
  uniqueFallbackSurfaces --> buildFontShorthand
  uniqueFallbackSurfaces --> getMarkdownFallbackSurface
  uniqueFallbackSurfaces --> layoutPreparedText
  uniqueFallbackSurfaces --> trim
  getMarkdownFallbackSurface --> normalizeWidth
  getMarkdownFallbackSurface --> buildFontShorthand
  getMarkdownFallbackSurface --> layoutPreparedText
  getMarkdownFallbackSurface --> trim
  layoutPreparedText --> normalizeWidth
  layoutPreparedText --> getMarkdownFallbackSurface
  layoutPreparedText --> estimateTextHeight
  layoutPreparedText --> getTextBlockLiveTailSources
  layoutPreparedText --> parseMarkdownIntoBlocks
  layoutPreparedText --> trim
  estimateTextHeight --> uniqueFallbackSurfaces
  estimateTextHeight --> getMarkdownFallbackSurface
  estimateTextHeight --> layoutPreparedText
  estimateTextHeight --> getTextBlockLiveTailSources
  estimateTextHeight --> getTextBlockSources
  estimateTextHeight --> parseMarkdownIntoBlocks
  estimateTextHeight --> trim
  estimateMarkdownSourceHeight --> uniqueFallbackSurfaces
  estimateMarkdownSourceHeight --> getMarkdownFallbackSurface
  estimateMarkdownSourceHeight --> estimateTextHeight
  estimateMarkdownSourceHeight --> getTextBlockLiveTailSources
  estimateMarkdownSourceHeight --> getTextBlockSources
  estimateMarkdownSourceHeight --> parseMarkdownIntoBlocks
  estimateMarkdownSourceHeight --> trim
  getTextBlockLiveTailSources --> prepareTextLayout
  getTextBlockLiveTailSources --> clampWidth
  getTextBlockLiveTailSources --> uniqueFallbackSurfaces
  getTextBlockLiveTailSources --> getMarkdownFallbackSurface
  getTextBlockLiveTailSources --> getTextBlockSources
  getTextBlockLiveTailSources --> getBlockFallbackSurfaces
  getTextBlockLiveTailSources --> parseMarkdownIntoBlocks
  getTextBlockSources --> prepareTextLayout
  getTextBlockSources --> clampWidth
  getTextBlockSources --> uniqueFallbackSurfaces
  getTextBlockSources --> getMarkdownFallbackSurface
  getTextBlockSources --> estimateMarkdownSourceHeight
  getTextBlockSources --> getTextBlockLiveTailSources
  getTextBlockSources --> getBlockFallbackSurfaces
  getTextBlockSources --> parseMarkdownIntoBlocks
  getBlockFallbackSurfaces --> prepareTextLayout
  getBlockFallbackSurfaces --> clampWidth
  getBlockFallbackSurfaces --> uniqueFallbackSurfaces
  getBlockFallbackSurfaces --> getMarkdownFallbackSurface
  getBlockFallbackSurfaces --> estimateMarkdownSourceHeight
  getBlockFallbackSurfaces --> getTextBlockSources
  getBlockFallbackSurfaces --> parseMarkdownIntoBlocks
  parseMarkdownIntoBlocks --> countNonSelfClosingOpenTags
  parseMarkdownIntoBlocks --> countClosingTags
  parseMarkdownIntoBlocks --> countDoubleDollars
  parseMarkdownIntoBlocks --> parseMarkdownIntoBlocks
  getOpenTagPattern --> getCloseTagPattern
  getOpenTagPattern --> countNonSelfClosingOpenTags
  getOpenTagPattern --> countClosingTags
  getOpenTagPattern --> parseMarkdownIntoBlocks
  getCloseTagPattern --> getOpenTagPattern
  getCloseTagPattern --> countNonSelfClosingOpenTags
  getCloseTagPattern --> countClosingTags
  getCloseTagPattern --> parseMarkdownIntoBlocks
  countNonSelfClosingOpenTags --> getOpenTagPattern
  countNonSelfClosingOpenTags --> getCloseTagPattern
  countNonSelfClosingOpenTags --> countClosingTags
  countNonSelfClosingOpenTags --> countDoubleDollars
  countNonSelfClosingOpenTags --> parseMarkdownIntoBlocks
  countClosingTags --> getCloseTagPattern
  countClosingTags --> countNonSelfClosingOpenTags
  countClosingTags --> countDoubleDollars
  countClosingTags --> parseMarkdownIntoBlocks
  countDoubleDollars --> countNonSelfClosingOpenTags
  countDoubleDollars --> countClosingTags
  countDoubleDollars --> parseMarkdownIntoBlocks
  parseMarkdownIntoBlocks --> countNonSelfClosingOpenTags
  parseMarkdownIntoBlocks --> countClosingTags
  parseMarkdownIntoBlocks --> countDoubleDollars
  createContext --> createScrollController
  createIncrementalMarkdownView --> parseMarkdownIntoBlocks
  createIncrementalMarkdownView --> rebuildIncrementalMarkdownView
  createIncrementalMarkdownView --> splitBlocks
  createIncrementalMarkdownView --> toSegments
  rebuildIncrementalMarkdownView --> parseMarkdownIntoBlocks
  rebuildIncrementalMarkdownView --> createIncrementalMarkdownView
  rebuildIncrementalMarkdownView --> splitBlocks
  rebuildIncrementalMarkdownView --> toSegments
  syncIncrementalMarkdownView --> parseMarkdownIntoBlocks
  syncIncrementalMarkdownView --> createIncrementalMarkdownView
  syncIncrementalMarkdownView --> rebuildIncrementalMarkdownView
  syncIncrementalMarkdownView --> splitBlocks
  syncIncrementalMarkdownView --> toSegments
  splitBlocks --> parseMarkdownIntoBlocks
  splitBlocks --> createIncrementalMarkdownView
  splitBlocks --> rebuildIncrementalMarkdownView
  splitBlocks --> toSegments
  toSegments --> parseMarkdownIntoBlocks
  toSegments --> createIncrementalMarkdownView
  toSegments --> rebuildIncrementalMarkdownView
  toSegments --> splitBlocks
  createPendingSseResponse --> bootstrapSession
  parseJsonRequestBody --> bootstrapSession
  renameAgent --> trim
  deleteAgent --> trim
  getAgentMarkdown --> trim
  updateAgentMarkdown --> trim
  getAccountPreferences --> trim
  listToolProfiles --> trim
  getToolProfile --> trim
  createToolProfile --> trim
  updateToolProfile --> trim
  updateAccountPreferences --> trim
  getThread --> trim
  listThreads --> trim
  cancelRun --> trim
  createMcpServer --> trim
  listMcpServers --> trim
  updateMcpServer --> trim
  refreshMcpServer --> trim
  beginMcpServerAuthorization --> trim
  deleteMcpServer --> toApiUrl
  deleteMcpServer --> trim
  deleteMcpServer --> createReconnectingSseConsumer
  getMcpServerTools --> parseBackendEvent
  getMcpServerTools --> createApiHeaders
  getMcpServerTools --> toApiUrl
  getMcpServerTools --> trim
  getMcpServerTools --> createReconnectingSseConsumer
  assignMcpTool --> parseBackendEvent
  assignMcpTool --> createApiHeaders
  assignMcpTool --> toApiUrl
  assignMcpTool --> createReconnectingSseConsumer
  deleteMcpToolAssignment --> parseBackendEvent
  deleteMcpToolAssignment --> createApiHeaders
  deleteMcpToolAssignment --> toApiUrl
  deleteMcpToolAssignment --> createReconnectingSseConsumer
  streamThreadEvents --> parseBackendEvent
  streamThreadEvents --> createApiHeaders
  streamThreadEvents --> toApiUrl
  streamThreadEvents --> createReconnectingSseConsumer
  isObject --> isUploadedBackendFileSummary
  isObject --> toAttachmentKind
  isObject --> toApiUrl
  isObject --> trim
  isObject --> isBackendFilePickerResult
  parseBackendEvent --> isObject
  uploadAttachment --> isUploadedBackendFileSummary
  uploadAttachment --> toAttachmentKind
  uploadAttachment --> toApiUrl
  uploadAttachment --> trim
  isUploadedBackendFileSummary --> isObject
  isUploadedBackendFileSummary --> toAttachmentKind
  isUploadedBackendFileSummary --> toApiUrl
  isUploadedBackendFileSummary --> trim
  toAttachmentKind --> isUploadedBackendFileSummary
  toAttachmentKind --> toApiUrl
  toAttachmentKind --> trim
  getAuthSession --> apiFetch
  getAuthSession --> toApiUrl
  getAuthSession --> readErrorResponseMessage
  getAuthSession --> session
  loginWithPassword --> apiFetch
  loginWithPassword --> toApiUrl
  loginWithPassword --> readErrorResponseMessage
  logout --> apiFetch
  logout --> toApiUrl
  logout --> readErrorResponseMessage
  isAuthenticatedAssetUrl --> fetchAuthenticatedAssetObjectUrl
  isAuthenticatedAssetUrl --> readPathname
  isAuthenticatedAssetUrl --> releaseCacheEntry
  isAuthenticatedAssetUrl --> apiFetch
  fetchAuthenticatedAssetObjectUrl --> isAuthenticatedAssetUrl
  fetchAuthenticatedAssetObjectUrl --> releaseCacheEntry
  fetchAuthenticatedAssetObjectUrl --> apiFetch
  peekCachedDisplayUrl --> isAuthenticatedAssetUrl
  peekCachedDisplayUrl --> fetchAuthenticatedAssetObjectUrl
  peekCachedDisplayUrl --> releaseCacheEntry
  resolveImageDisplayUrl --> isAuthenticatedAssetUrl
  resolveImageDisplayUrl --> fetchAuthenticatedAssetObjectUrl
  resolveImageDisplayUrl --> releaseCacheEntry
  isAbsoluteHttpUrl --> isAuthenticatedAssetUrl
  isAbsoluteHttpUrl --> fetchAuthenticatedAssetObjectUrl
  isAbsoluteHttpUrl --> readPathname
  isAbsoluteHttpUrl --> releaseCacheEntry
  isAbsoluteHttpUrl --> apiFetch
  isAbsoluteHttpUrl --> trim
  isAbsoluteHttpUrl --> createApiHeaders
  isAbsoluteHttpUrl --> normalizeBasePath
  isAbsoluteHttpUrl --> getStorage
  isAbsoluteHttpUrl --> readStoredTenantId
  isAbsoluteHttpUrl --> fetchWithResolvedAuth
  readPathname --> isAuthenticatedAssetUrl
  readPathname --> fetchAuthenticatedAssetObjectUrl
  readPathname --> isAbsoluteHttpUrl
  readPathname --> releaseCacheEntry
  readPathname --> apiFetch
  readPathname --> trim
  readPathname --> extensionForMimeType
  readPathname --> sanitizeFileName
  readPathname --> filenameFromPathname
  readPathname --> isSameOriginUrl
  readPathname --> shouldUseApiFetch
  readPathname --> triggerDownload
  releaseCacheEntry --> isAuthenticatedAssetUrl
  releaseCacheEntry --> fetchAuthenticatedAssetObjectUrl
  getApiTenantId --> createApiHeaders
  getApiTenantId --> apiFetch
  getApiTenantId --> trim
  getApiTenantId --> getStorage
  getApiTenantId --> withApiBaseUrl
  getApiTenantId --> fetchWithResolvedAuth
  getApiTenantId --> readErrorResponseMessage
  setApiTenantId --> createApiHeaders
  setApiTenantId --> apiFetch
  setApiTenantId --> trim
  setApiTenantId --> getStorage
  setApiTenantId --> withApiBaseUrl
  setApiTenantId --> fetchWithResolvedAuth
  setApiTenantId --> readErrorResponseMessage
  createApiHeaders --> apiFetch
  createApiHeaders --> withApiBaseUrl
  createApiHeaders --> fetchWithResolvedAuth
  createApiHeaders --> readErrorResponseMessage
  apiFetch --> withApiBaseUrl
  apiFetch --> fetchWithResolvedAuth
  apiFetch --> readErrorResponseMessage
  toApiUrl --> withApiBaseUrl
  trim --> isAbsoluteHttpUrl
  trim --> createApiHeaders
  trim --> normalizeBasePath
  trim --> getStorage
  trim --> readStoredTenantId
  normalizeBasePath --> isAbsoluteHttpUrl
  normalizeBasePath --> createApiHeaders
  normalizeBasePath --> trim
  normalizeBasePath --> getStorage
  normalizeBasePath --> readStoredTenantId
  normalizeBasePath --> fetchWithResolvedAuth
  apiBasePath --> isAbsoluteHttpUrl
  apiBasePath --> createApiHeaders
  apiBasePath --> apiFetch
  apiBasePath --> trim
  apiBasePath --> normalizeBasePath
  apiBasePath --> getStorage
  apiBasePath --> readStoredTenantId
  apiBasePath --> withApiBaseUrl
  apiBasePath --> fetchWithResolvedAuth
  apiBaseOrigin --> isAbsoluteHttpUrl
  apiBaseOrigin --> createApiHeaders
  apiBaseOrigin --> apiFetch
  apiBaseOrigin --> trim
  apiBaseOrigin --> getStorage
  apiBaseOrigin --> readStoredTenantId
  apiBaseOrigin --> withApiBaseUrl
  apiBaseOrigin --> fetchWithResolvedAuth
  apiBaseOrigin --> readErrorResponseMessage
  getStorage --> isAbsoluteHttpUrl
  getStorage --> createApiHeaders
  getStorage --> apiFetch
  getStorage --> trim
  getStorage --> readStoredTenantId
  getStorage --> withApiBaseUrl
  getStorage --> fetchWithResolvedAuth
  getStorage --> readErrorResponseMessage
  getStorage --> isRecord
  getStorage --> toNumberOrNull
  readStoredTenantId --> isAbsoluteHttpUrl
  readStoredTenantId --> createApiHeaders
  readStoredTenantId --> apiFetch
  readStoredTenantId --> trim
  readStoredTenantId --> getStorage
  readStoredTenantId --> withApiBaseUrl
  readStoredTenantId --> fetchWithResolvedAuth
  readStoredTenantId --> readErrorResponseMessage
  withApiBaseUrl --> isAbsoluteHttpUrl
  withApiBaseUrl --> createApiHeaders
  withApiBaseUrl --> apiFetch
  withApiBaseUrl --> trim
  withApiBaseUrl --> getStorage
  withApiBaseUrl --> fetchWithResolvedAuth
  withApiBaseUrl --> readErrorResponseMessage
  fetchWithResolvedAuth --> createApiHeaders
  fetchWithResolvedAuth --> apiFetch
  fetchWithResolvedAuth --> withApiBaseUrl
  fetchWithResolvedAuth --> readErrorResponseMessage
  resolveDownloadFileName --> extensionForMimeType
  resolveDownloadFileName --> sanitizeFileName
  resolveDownloadFileName --> filenameFromPathname
  resolveDownloadFileName --> triggerDownload
  resolveDownloadFileName --> downloadBlob
  resolveDownloadFileName --> fetchImageBlob
  copyTextToClipboard --> resolveDownloadFileName
  copyTextToClipboard --> triggerDownload
  copyTextToClipboard --> downloadBlob
  copyTextToClipboard --> fetchImageBlob
  copyImageToClipboard --> resolveDownloadFileName
  copyImageToClipboard --> triggerDownload
  copyImageToClipboard --> downloadBlob
  copyImageToClipboard --> fetchImageBlob
  downloadImage --> resolveDownloadFileName
  downloadImage --> triggerDownload
  downloadImage --> downloadBlob
  downloadImage --> fetchImageBlob
  extensionForMimeType --> isAuthenticatedAssetUrl
  extensionForMimeType --> readPathname
  extensionForMimeType --> trim
  extensionForMimeType --> isSameOriginUrl
  extensionForMimeType --> shouldUseApiFetch
  extensionForMimeType --> triggerDownload
  sanitizeFileName --> isAuthenticatedAssetUrl
  sanitizeFileName --> readPathname
  sanitizeFileName --> apiFetch
  sanitizeFileName --> trim
  sanitizeFileName --> extensionForMimeType
  sanitizeFileName --> filenameFromPathname
  sanitizeFileName --> isSameOriginUrl
  sanitizeFileName --> shouldUseApiFetch
  sanitizeFileName --> triggerDownload
  filenameFromPathname --> isAuthenticatedAssetUrl
  filenameFromPathname --> readPathname
  filenameFromPathname --> apiFetch
  filenameFromPathname --> trim
  filenameFromPathname --> extensionForMimeType
  filenameFromPathname --> sanitizeFileName
  filenameFromPathname --> isSameOriginUrl
  filenameFromPathname --> shouldUseApiFetch
  filenameFromPathname --> triggerDownload
  isSameOriginUrl --> isAuthenticatedAssetUrl
  isSameOriginUrl --> apiFetch
  isSameOriginUrl --> trim
  isSameOriginUrl --> extensionForMimeType
  isSameOriginUrl --> sanitizeFileName
  isSameOriginUrl --> filenameFromPathname
  isSameOriginUrl --> shouldUseApiFetch
  isSameOriginUrl --> triggerDownload
  isSameOriginUrl --> fetchImageBlob
  shouldUseApiFetch --> isAuthenticatedAssetUrl
  shouldUseApiFetch --> apiFetch
  shouldUseApiFetch --> resolveDownloadFileName
  shouldUseApiFetch --> extensionForMimeType
  shouldUseApiFetch --> sanitizeFileName
  shouldUseApiFetch --> filenameFromPathname
  shouldUseApiFetch --> isSameOriginUrl
  shouldUseApiFetch --> triggerDownload
  shouldUseApiFetch --> downloadBlob
  shouldUseApiFetch --> fetchImageBlob
  triggerDownload --> apiFetch
  triggerDownload --> resolveDownloadFileName
  triggerDownload --> extensionForMimeType
  triggerDownload --> sanitizeFileName
  triggerDownload --> filenameFromPathname
  triggerDownload --> shouldUseApiFetch
  triggerDownload --> downloadBlob
  triggerDownload --> fetchImageBlob
  downloadBlob --> apiFetch
  downloadBlob --> resolveDownloadFileName
  downloadBlob --> extensionForMimeType
  downloadBlob --> sanitizeFileName
  downloadBlob --> filenameFromPathname
  downloadBlob --> shouldUseApiFetch
  downloadBlob --> triggerDownload
  downloadBlob --> fetchImageBlob
  fetchImageBlob --> apiFetch
  fetchImageBlob --> resolveDownloadFileName
  fetchImageBlob --> extensionForMimeType
  fetchImageBlob --> sanitizeFileName
  fetchImageBlob --> filenameFromPathname
  fetchImageBlob --> shouldUseApiFetch
  fetchImageBlob --> triggerDownload
  fetchImageBlob --> downloadBlob
  searchFilePicker --> isBackendFilePickerResult
  isBackendFilePickerResult --> isObject
  createCodeBlockRenderer --> trim
  createCodeBlockRenderer --> escapeHtml
  createCodeBlockRenderer --> escapeAttribute
  createCodeBlockRenderer --> resolveLanguage
  createCodeBlockRenderer --> prettyLanguageLabel
  createCodeBlockRenderer --> trimTrailingNewlines
  createCodeBlockRenderer --> wrapLines
  escapeHtml --> trim
  escapeHtml --> escapeAttribute
  escapeHtml --> resolveLanguage
  escapeHtml --> prettyLanguageLabel
  escapeHtml --> trimTrailingNewlines
  escapeHtml --> wrapLines
  escapeAttribute --> trim
  escapeAttribute --> escapeHtml
  escapeAttribute --> resolveLanguage
  escapeAttribute --> prettyLanguageLabel
  escapeAttribute --> trimTrailingNewlines
  escapeAttribute --> wrapLines
  resolveLanguage --> trim
  resolveLanguage --> escapeHtml
  resolveLanguage --> escapeAttribute
  resolveLanguage --> prettyLanguageLabel
  resolveLanguage --> trimTrailingNewlines
  resolveLanguage --> wrapLines
  prettyLanguageLabel --> trim
  prettyLanguageLabel --> escapeHtml
  prettyLanguageLabel --> escapeAttribute
  prettyLanguageLabel --> resolveLanguage
  prettyLanguageLabel --> trimTrailingNewlines
  prettyLanguageLabel --> wrapLines
  trimTrailingNewlines --> trim
  trimTrailingNewlines --> escapeHtml
  trimTrailingNewlines --> escapeAttribute
  trimTrailingNewlines --> resolveLanguage
  trimTrailingNewlines --> prettyLanguageLabel
  trimTrailingNewlines --> wrapLines
  wrapLines --> trim
  wrapLines --> escapeHtml
  wrapLines --> escapeAttribute
  wrapLines --> resolveLanguage
  wrapLines --> prettyLanguageLabel
  wrapLines --> trimTrailingNewlines
  createMarkdownPipeline --> renderFileReference
  createMarkdownPipeline --> renderAgentReference
  renderFileReference --> escapeHtml
  renderAgentReference --> escapeHtml
  renderAgentReference --> renderFileReference
  renderMarkdown --> injectCaret
  renderMarkdown --> normalizeOptions
  renderMarkdown --> cacheKeyFor
  renderMarkdown --> sanitizeHtml
  injectCaret --> createCodeBlockRenderer
  injectCaret --> createMarkdownPipeline
  injectCaret --> createRenderCache
  injectCaret --> normalizeOptions
  injectCaret --> cacheKeyFor
  injectCaret --> sanitizeHtml
  normalizeOptions --> injectCaret
  normalizeOptions --> cacheKeyFor
  normalizeOptions --> sanitizeHtml
  cacheKeyFor --> injectCaret
  cacheKeyFor --> normalizeOptions
  cacheKeyFor --> sanitizeHtml
  snapshot --> trim
  snapshot --> renderMarkdown
  fetchAppResourceHtml --> buildOriginSearchParams
  callMcpAppTool --> buildOriginSearchParams
  readMcpAppResource --> buildOriginSearchParams
  listMcpAppResources --> buildOriginSearchParams
  listMcpAppResourceTemplates --> buildOriginSearchParams
  extractErrorMessage --> trim
  extractErrorMessage --> asErrorPayload
  extractErrorMessage --> isBlank
  humanizeErrorMessage --> trim
  humanizeErrorMessage --> extractErrorMessage
  humanizeErrorMessage --> isBlank
  readErrorResponseMessage --> extractErrorMessage
  readErrorResponseMessage --> humanizeErrorMessage
  asErrorPayload --> trim
  asErrorPayload --> isBlank
  isBlank --> trim
  isBlank --> extractErrorMessage
  isBlank --> humanizeErrorMessage
  createChunkedResponse --> consumeSse
  createChunkedResponse --> createReconnectingSseConsumer
  isAbortError --> createAbortError
  isAbortError --> parseFrame
  consumeSse --> normalizeLineEndings
  consumeSse --> trim
  consumeSse --> readErrorResponseMessage
  consumeSse --> createAbortError
  consumeSse --> flushFrame
  createReconnectingSseConsumer --> isAbortError
  createReconnectingSseConsumer --> consumeSse
  createReconnectingSseConsumer --> createAbortError
  createReconnectingSseConsumer --> waitForDelay
  createReconnectingSseConsumer --> shouldRetryReconnect
  createReconnectingSseConsumer --> forwardAbortSignal
  createAbortError --> parseFrame
  waitForDelay --> readErrorResponseMessage
  waitForDelay --> createAbortError
  waitForDelay --> parseFrame
  parseFrame --> normalizeLineEndings
  parseFrame --> readErrorResponseMessage
  parseFrame --> createAbortError
  flushFrame --> normalizeLineEndings
  flushFrame --> trim
  flushFrame --> readErrorResponseMessage
  flushFrame --> createAbortError
  flushFrame --> parseFrame
  shouldRetryReconnect --> consumeSse
  shouldRetryReconnect --> createAbortError
  shouldRetryReconnect --> forwardAbortSignal
  forwardAbortSignal --> consumeSse
  forwardAbortSignal --> createAbortError
  normalizeShortcutKey --> trim
  normalizeShortcutKey --> isModifierAlias
  normalizeShortcutKey --> normalizeBaseKey
  normalizeShortcutKey --> formatShortcut
  normalizeShortcutKey --> deriveBaseKeyFromEvent
  normalizeKeyboardEvent --> formatShortcut
  normalizeKeyboardEvent --> deriveBaseKeyFromEvent
  isModifierAlias --> trim
  isModifierAlias --> normalizeBaseKey
  isModifierAlias --> formatShortcut
  isModifierAlias --> deriveBaseKeyFromEvent
  normalizeBaseKey --> trim
  normalizeBaseKey --> isModifierAlias
  normalizeBaseKey --> formatShortcut
  normalizeBaseKey --> deriveBaseKeyFromEvent
  formatShortcut --> trim
  formatShortcut --> isModifierAlias
  formatShortcut --> normalizeBaseKey
  formatShortcut --> deriveBaseKeyFromEvent
  deriveBaseKeyFromEvent --> isModifierAlias
  deriveBaseKeyFromEvent --> normalizeBaseKey
  deriveBaseKeyFromEvent --> formatShortcut
  createKeyboardEvent --> createShortcutManager
  createKeyboardEvent --> createShortcutLayerStack
  createShortcutManager --> normalizeShortcutKey
  createShortcutManager --> normalizeKeyboardEvent
  isEditableElement --> normalizeShortcutKey
  isEditableElement --> normalizeKeyboardEvent
  createAttachmentDraftStore --> trim
  createAttachmentDraftStore --> normalizeMime
  createAttachmentDraftStore --> inferKind
  normalizeMime --> trim
  normalizeMime --> inferKind
  normalizeMime --> cloneAttachment
  inferKind --> trim
  inferKind --> normalizeMime
  inferKind --> cloneAttachment
  cloneAttachment --> trim
  cloneAttachment --> normalizeMime
  cloneAttachment --> inferKind
  toMessageAttachment --> trim
  toMessageAttachment --> normalizeMime
  toMessageAttachment --> inferKind
  toMessageAttachment --> cloneAttachment
  createBackgroundActivityStore --> getThreadsActivity
  createBackgroundActivityStore --> trim
  createBackgroundActivityStore --> loadDismissed
  createBackgroundActivityStore --> saveDismissed
  createBackgroundActivityStore --> clearDismissed
  loadDismissed --> getThreadsActivity
  loadDismissed --> trim
  loadDismissed --> saveDismissed
  loadDismissed --> clearDismissed
  saveDismissed --> getThreadsActivity
  saveDismissed --> trim
  saveDismissed --> loadDismissed
  saveDismissed --> clearDismissed
  clearDismissed --> getThreadsActivity
  clearDismissed --> trim
  clearDismissed --> loadDismissed
  clearDismissed --> saveDismissed
  createChatStore --> getStorage
  createChatStore --> humanizeErrorMessage
  cloneAttachments --> stripLargeTextPasteHiddenMetadata
  cloneAttachments --> materializePersistedAssistantBlocks
  cloneAttachments --> trim
  cloneAttachments --> cloneBlocks
  cloneAttachments --> messageTextFromParts
  cloneAttachments --> readPersistedMessageFinishReason
  cloneAttachments --> isMessageFinishReason
  cloneBlocks --> stripLargeTextPasteHiddenMetadata
  cloneBlocks --> materializePersistedAssistantBlocks
  cloneBlocks --> trim
  cloneBlocks --> cloneAttachments
  cloneBlocks --> messageTextFromParts
  cloneBlocks --> readPersistedMessageFinishReason
  cloneBlocks --> isMessageFinishReason
  cloneUiMessage --> stripLargeTextPasteHiddenMetadata
  cloneUiMessage --> materializePersistedAssistantBlocks
  cloneUiMessage --> trim
  cloneUiMessage --> cloneAttachments
  cloneUiMessage --> cloneBlocks
  cloneUiMessage --> messageTextFromParts
  cloneUiMessage --> readPersistedMessageFinishReason
  cloneUiMessage --> isMessageFinishReason
  messageTextFromParts --> stripLargeTextPasteHiddenMetadata
  messageTextFromParts --> materializePersistedAssistantBlocks
  messageTextFromParts --> trim
  messageTextFromParts --> cloneAttachments
  messageTextFromParts --> readPersistedMessageFinishReason
  messageTextFromParts --> isMessageFinishReason
  readPersistedMessageFinishReason --> stripLargeTextPasteHiddenMetadata
  readPersistedMessageFinishReason --> materializePersistedAssistantBlocks
  readPersistedMessageFinishReason --> trim
  readPersistedMessageFinishReason --> cloneAttachments
  readPersistedMessageFinishReason --> messageTextFromParts
  readPersistedMessageFinishReason --> isMessageFinishReason
  toUiMessage --> stripLargeTextPasteHiddenMetadata
  toUiMessage --> materializePersistedAssistantBlocks
  toUiMessage --> trim
  toUiMessage --> cloneAttachments
  toUiMessage --> messageTextFromParts
  toUiMessage --> readPersistedMessageFinishReason
  isTerminalRunStatus --> isRecord
  isTerminalRunStatus --> trim
  isTerminalRunStatus --> toNumberOrNull
  isMessageAttachment --> isRecord
  isMessageAttachment --> trim
  isMessageAttachment --> toNumberOrNull
  parsePersistedAttachments --> isRecord
  parsePersistedAttachments --> trim
  parsePersistedAttachments --> toNumberOrNull
  estimateTextTokens --> isRecord
  estimateTextTokens --> trim
  estimateTextTokens --> toNumberOrNull
  toNumberOrNull --> isRecord
  parseUsage --> isRecord
  parseUsage --> toNumberOrNull
  isMessageFinishReason --> isRecord
  isMessageFinishReason --> estimateTextTokens
  isPendingWait --> isRecord
  isPendingWait --> estimateTextTokens
  parsePendingWaits --> estimateTextTokens
  toContextBudget --> isConfirmationPendingWait
  toContextBudget --> estimateTextTokens
  withStreamingBudgetStart --> isRecord
  withStreamingBudgetStart --> isConfirmationPendingWait
  withStreamingBudgetStart --> cloneBlocks
  withStreamingBudgetStart --> estimateTextTokens
  withStreamingBudgetStart --> isMessageFinishReason
  withEstimatedOutputDelta --> isRecord
  withEstimatedOutputDelta --> isConfirmationPendingWait
  withEstimatedOutputDelta --> cloneBlocks
  withEstimatedOutputDelta --> estimateTextTokens
  withEstimatedOutputDelta --> isMessageFinishReason
  withReconciledUsage --> isRecord
  withReconciledUsage --> isConfirmationPendingWait
  withReconciledUsage --> cloneBlocks
  withReconciledUsage --> parsePersistedAttachments
  withReconciledUsage --> estimateTextTokens
  withReconciledUsage --> isMessageFinishReason
  withReconciledUsage --> parsePersistedLiveAssistantMessage
  isReplyablePendingWait --> isRecord
  isReplyablePendingWait --> isConfirmationPendingWait
  isReplyablePendingWait --> cloneBlocks
  isReplyablePendingWait --> parsePersistedAttachments
  isReplyablePendingWait --> isMessageFinishReason
  isReplyablePendingWait --> parsePersistedLiveAssistantMessage
  parsePersistedLiveAssistantMessage --> isRecord
  parsePersistedLiveAssistantMessage --> cloneBlocks
  parsePersistedLiveAssistantMessage --> parsePersistedAttachments
  parsePersistedLiveAssistantMessage --> isMessageFinishReason
  readPersistedState --> parsePersistedAttachments
  readPersistedState --> parsePersistedLiveAssistantMessage
  readPersistedState --> getSelectedModelAliases
  deriveAvailableModels --> getSelectedModelAliases
  pickPreferredModel --> getSelectedModelAliases
  deriveAvailableReasoningModes --> getSelectedModelAliases
  pickPreferredReasoningMode --> getStorage
  createStorage --> thread
  createStorage --> session
  createStorage --> userMessage
  createStorage --> assistantMessage
  thread --> session
  thread --> userMessage
  thread --> assistantMessage
  threadWith --> thread
  threadWith --> session
  threadWith --> userMessage
  threadWith --> assistantMessage
  session --> userMessage
  session --> assistantMessage
  sessionWith --> session
  sessionWith --> userMessage
  sessionWith --> assistantMessage
  userMessage --> assistantMessage
  userMessageWith --> userMessage
  userMessageWith --> assistantMessage
  assistantMessage --> pendingConfirmationWait
  assistantMessageWithMetadata --> assistantMessage
  assistantMessageWithMetadata --> pendingConfirmationWait
  persistedToolTranscript --> pendingConfirmationWait
  persistedReasoningWaitingTranscript --> pendingConfirmationWait
  buildRun --> pendingConfirmationWait
  runEvent --> createChatStore
  runEvent --> createStorage
  completedInteraction --> createChatStore
  completedInteraction --> createStorage
  clamp --> load
  load --> clamp
  createComposerAttachmentStore --> createAttachmentDraftStore
  createMessageNavigator --> trim
  createMessageNavigator --> copyTextToClipboard
  createTypewriterPlaybackStore --> trim
  perfStats --> resetPerfStats
  resetPerfStats --> perfStats
  getBucket --> perfStats
  getBucket --> resetPerfStats
  estimateCharWidth --> estimateTextWidth
  estimateCharWidth --> parseFontSize
  estimateTextWidth --> estimateCharWidth
  estimateTextWidth --> parseFontSize
  parseFontSize --> estimateTextWidth
```

## Tabela wywołań

| Funkcja | Plik | Wywołuje |
|---------|------|----------|
| `createFile` | `lib/attachments/intake.test.ts` | `toFileArray`, `collectTransferFiles`, `hasTransferFiles`, `createAttachmentDraftStore`, `createComposerAttachmentStore` |
| `toFileArray` | `lib/attachments/intake.ts` |  |
| `collectTransferFiles` | `lib/attachments/intake.ts` | `toFileArray` |
| `hasTransferFiles` | `lib/attachments/intake.ts` |  |
| `imageAttachment` | `lib/attachments/model-visible.test.ts` | `filterInlineRenderedImageAttachments` |
| `filterInlineRenderedImageAttachments` | `lib/attachments/model-visible.ts` |  |
| `formatAttachmentSize` | `lib/attachments/presentation.ts` | `getAttachmentImageColumnCount`, `getAttachmentImageGridMetrics`, `stripTrailingZero`, `trim` |
| `getAttachmentExtension` | `lib/attachments/presentation.ts` | `getAttachmentImageColumnCount`, `getAttachmentImageGridMetrics`, `trim` |
| `getAttachmentImageColumnCount` | `lib/attachments/presentation.ts` | `getAttachmentImageGridMetrics` |
| `getAttachmentImageGridMetrics` | `lib/attachments/presentation.ts` | `getAttachmentImageColumnCount` |
| `estimateAttachmentImageGridHeight` | `lib/attachments/presentation.ts` | `getAttachmentImageGridMetrics` |
| `stripTrailingZero` | `lib/attachments/presentation.ts` | `getAttachmentImageColumnCount`, `getAttachmentImageGridMetrics`, `trim` |
| `createAgentBrowserProvider` | `lib/command-palette/agent-browser-provider.svelte.ts` | `visibilityToGroup`, `toStaticResults`, `searchCommands`, `listAgents`, `humanizeErrorMessage` |
| `visibilityToGroup` | `lib/command-palette/agent-browser-provider.svelte.ts` | `toStaticResults`, `listAgents`, `humanizeErrorMessage`, `searchCommands` |
| `toStaticResults` | `lib/command-palette/agent-browser-provider.svelte.ts` | `visibilityToGroup`, `listAgents`, `humanizeErrorMessage`, `searchCommands`, `scopeToGroup`, `listToolProfiles` |
| `createAgentProvider` | `lib/command-palette/agent-provider.svelte.ts` | `visibilityToGroup`, `toStaticResults`, `searchCommands`, `listAgents` |
| `createAgent` | `lib/command-palette/agent-provider.test.ts` | `createAgentProvider` |
| `createAppCommandsStub` | `lib/command-palette/command-registry.test.ts` | `createCommandsProvider`, `createCommandRegistry` |
| `createCommandsProvider` | `lib/command-palette/command-registry.ts` | `createCommandRegistry`, `searchCommands` |
| `createCommandRegistry` | `lib/command-palette/command-registry.ts` |  |
| `createConversationProvider` | `lib/command-palette/conversation-provider.svelte.ts` | `formatUpdatedAt`, `deriveActivity`, `toThreadLabel`, `listThreads`, `trim` |
| `formatUpdatedAt` | `lib/command-palette/conversation-provider.svelte.ts` | `listThreads`, `trim` |
| `deriveActivity` | `lib/command-palette/conversation-provider.svelte.ts` | `listThreads`, `trim` |
| `toThreadLabel` | `lib/command-palette/conversation-provider.svelte.ts` | `formatUpdatedAt`, `deriveActivity`, `listThreads`, `trim` |
| `createThread` | `lib/command-palette/conversation-provider.test.ts` | `createConversationProvider`, `createChatStoreStub`, `createThemeStoreStub`, `createAppCommands` |
| `createMcpBrowserProvider` | `lib/command-palette/mcp-browser-provider.svelte.ts` | `toStaticResults`, `statusToGroup`, `groupOrder`, `listMcpServers`, `humanizeErrorMessage` |
| `statusToGroup` | `lib/command-palette/mcp-browser-provider.svelte.ts` | `groupOrder`, `listMcpServers`, `humanizeErrorMessage` |
| `groupOrder` | `lib/command-palette/mcp-browser-provider.svelte.ts` | `statusToGroup`, `listMcpServers`, `humanizeErrorMessage` |
| `createMcpToolsProvider` | `lib/command-palette/mcp-tools-provider.svelte.ts` | `toStaticResults`, `searchCommands`, `getMcpServerTools`, `trim`, `humanizeErrorMessage` |
| `createRenameProvider` | `lib/command-palette/rename-provider.ts` | `trim` |
| `item` | `lib/command-palette/search.test.ts` | `searchCommands` |
| `searchCommands` | `lib/command-palette/search.ts` | `scoreLabel`, `scoreKeywords`, `trim` |
| `findContiguousMatch` | `lib/command-palette/search.ts` | `scoreLabel`, `scoreKeywords`, `trim` |
| `scoreLabel` | `lib/command-palette/search.ts` | `findContiguousMatch`, `scoreKeywords`, `trim` |
| `scoreKeywords` | `lib/command-palette/search.ts` | `scoreLabel`, `trim` |
| `createToolProfileBrowserProvider` | `lib/command-palette/tool-profile-browser-provider.svelte.ts` | `toStaticResults`, `searchCommands`, `scopeToGroup`, `listToolProfiles` |
| `scopeToGroup` | `lib/command-palette/tool-profile-browser-provider.svelte.ts` | `toStaticResults`, `listToolProfiles` |
| `createWorkspaceProvider` | `lib/command-palette/workspace-provider.svelte.ts` | `searchCommands`, `getWorkspaceLabel`, `toWorkspaceLabel` |
| `getWorkspaceLabel` | `lib/command-palette/workspace-provider.svelte.ts` | `searchCommands`, `toWorkspaceLabel` |
| `toWorkspaceLabel` | `lib/command-palette/workspace-provider.svelte.ts` | `searchCommands`, `getWorkspaceLabel` |
| `createMembership` | `lib/command-palette/workspace-provider.test.ts` | `createWorkspaceProvider` |
| `createChatStoreStub` | `lib/commands/app-commands.test.ts` | `createThemeStoreStub`, `createAppCommands` |
| `createThemeStoreStub` | `lib/commands/app-commands.test.ts` | `createChatStoreStub`, `createAppCommands` |
| `modelSupportsReasoning` | `lib/commands/app-commands.ts` | `trim` |
| `createAppCommands` | `lib/commands/app-commands.ts` | `trim` |
| `getExpandablePanelId` | `lib/components/blocks/block-accessibility.ts` | `sanitizeDomId`, `getExpandableBlockName`, `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `getExpandableToggleLabel` | `lib/components/blocks/block-accessibility.ts` | `getExpandableBlockName`, `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `getBlockLiveMode` | `lib/components/blocks/block-accessibility.ts` | `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `getBlockAnnouncement` | `lib/components/blocks/block-accessibility.ts` | `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `getBlockRenderErrorMessage` | `lib/components/blocks/block-accessibility.ts` | `getAdjacentExpandableIndex` |
| `getAdjacentExpandableIndex` | `lib/components/blocks/block-accessibility.ts` |  |
| `focusAdjacentExpandableToggle` | `lib/components/blocks/block-accessibility.ts` | `getAdjacentExpandableIndex` |
| `sanitizeDomId` | `lib/components/blocks/block-accessibility.ts` | `getExpandableBlockName`, `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `getExpandableBlockName` | `lib/components/blocks/block-accessibility.ts` | `sanitizeDomId`, `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `textBlock` | `lib/components/blocks/block-visibility.test.ts` | `toolBlock`, `buildVisibleBlocks` |
| `toolBlock` | `lib/components/blocks/block-visibility.test.ts` | `textBlock`, `buildVisibleBlocks`, `isSuspendedToolBlock`, `getSuspendedToolLabel` |
| `buildVisibleBlocks` | `lib/components/blocks/block-visibility.ts` |  |
| `delegateBlock` | `lib/components/blocks/delegation-state.test.ts` | `getDelegationStatus`, `getWaitingFooterState`, `getWaitingFooterLabel` |
| `isReplyWaitBlock` | `lib/components/blocks/delegation-state.ts` | `isSuspendedBlock`, `isActiveDelegationParentBlock`, `readSuspendedWaits`, `readSuspendTargetKind`, `isDelegationWithSuspendedOutput`, `dedupeAgentAliases`, `trim` |
| `isSuspendedBlock` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isActiveDelegationParentBlock`, `getWaitingFooterState`, `isDelegationWithSuspendedOutput`, `dedupeAgentAliases`, `trim` |
| `isActiveDelegationParentBlock` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `getWaitingFooterState`, `isDelegationWithSuspendedOutput`, `dedupeAgentAliases`, `trim` |
| `getDelegationStatus` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isActiveDelegationParentBlock`, `getWaitingFooterState`, `dedupeAgentAliases`, `trim` |
| `getWaitingFooterState` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isActiveDelegationParentBlock`, `dedupeAgentAliases`, `trim` |
| `getWaitingFooterLabel` | `lib/components/blocks/delegation-state.ts` | `getWaitingFooterState` |
| `isRecord` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `readSuspendedWaits`, `readSuspendTargetKind`, `isDelegationWithSuspendedOutput`, `trim`, `toNumberOrNull` |
| `readSuspendedWaits` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isRecord`, `readSuspendTargetKind`, `isDelegationWithSuspendedOutput` |
| `readSuspendTargetKind` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isActiveDelegationParentBlock`, `isRecord`, `readSuspendedWaits`, `isDelegationWithSuspendedOutput`, `dedupeAgentAliases`, `trim` |
| `isDelegationWithSuspendedOutput` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isActiveDelegationParentBlock`, `readSuspendedWaits`, `readSuspendTargetKind`, `dedupeAgentAliases`, `trim` |
| `dedupeAgentAliases` | `lib/components/blocks/delegation-state.ts` | `isReplyWaitBlock`, `isSuspendedBlock`, `isActiveDelegationParentBlock`, `getWaitingFooterState`, `trim` |
| `buildBlockRenderItems` | `lib/components/blocks/render-items.ts` | `isDelegationParentBlock`, `isCompleteToolBlock`, `buildDelegationGroups`, `buildChainItems` |
| `isDelegationParentBlock` | `lib/components/blocks/render-items.ts` | `isAppViewToolBlock`, `isCompleteToolBlock`, `buildChainItems` |
| `isAppViewToolBlock` | `lib/components/blocks/render-items.ts` | `isDelegationParentBlock`, `isCompleteToolBlock`, `buildDelegationGroups`, `buildChainItems` |
| `isCompleteToolBlock` | `lib/components/blocks/render-items.ts` | `isDelegationParentBlock`, `isAppViewToolBlock`, `buildDelegationGroups`, `buildChainItems` |
| `buildDelegationGroups` | `lib/components/blocks/render-items.ts` | `isDelegationParentBlock`, `isAppViewToolBlock`, `isCompleteToolBlock`, `buildChainItems` |
| `buildChainItems` | `lib/components/blocks/render-items.ts` | `isDelegationParentBlock`, `isCompleteToolBlock`, `buildDelegationGroups` |
| `isSuspendedToolBlock` | `lib/components/blocks/tool-state.ts` | `readSuspendTargetKind` |
| `getSuspendedToolLabel` | `lib/components/blocks/tool-state.ts` | `readSuspendTargetKind` |
| `formatTokens` | `lib/components/composer/context-bar-summary.ts` |  |
| `buildLastCallSummary` | `lib/components/composer/context-bar-summary.ts` | `formatTokens` |
| `getFileKindIconKey` | `lib/components/icons/file-kind.ts` | `trim` |
| `fileKindIcon` | `lib/components/icons/index.ts` | `getFileKindIconKey` |
| `createConversationDialogController` | `lib/dialogs/conversation-dialog-controller.svelte.ts` | `createClosedState`, `toVisibleRequest` |
| `createClosedState` | `lib/dialogs/conversation-dialog-controller.svelte.ts` | `toVisibleRequest` |
| `toVisibleRequest` | `lib/dialogs/conversation-dialog-controller.svelte.ts` | `createClosedState` |
| `keyboardEvent` | `lib/dialogs/conversation-dialog-keyboard.test.ts` | `getConversationDialogKeyAction`, `isModifiedPrimarySubmit` |
| `getConversationDialogKeyAction` | `lib/dialogs/conversation-dialog-keyboard.ts` |  |
| `isModifiedPrimarySubmit` | `lib/dialogs/conversation-dialog-keyboard.ts` |  |
| `imageDraftsToLightboxItems` | `lib/lightbox/lightbox-adapters.ts` | `isLightboxableImageSrc`, `collectLightboxableImages`, `trim` |
| `imageAttachmentsToLightboxItems` | `lib/lightbox/lightbox-adapters.ts` | `isLightboxableImageSrc`, `collectLightboxableImages`, `trim` |
| `isLightboxableImageSrc` | `lib/lightbox/lightbox-adapters.ts` | `collectLightboxableImages`, `trim` |
| `collectLightboxableImages` | `lib/lightbox/lightbox-adapters.ts` | `isLightboxableImageSrc`, `trim` |
| `imageElementsToLightboxItems` | `lib/lightbox/lightbox-adapters.ts` | `collectLightboxableImages` |
| `createLightboxController` | `lib/lightbox/lightbox-controller.svelte.ts` | `clampIndex` |
| `clampIndex` | `lib/lightbox/lightbox-controller.svelte.ts` |  |
| `isDuplicateMcpLabelConflict` | `lib/mcp/connect-form.ts` | `trim` |
| `getAutoRenamedLabel` | `lib/mcp/connect-form.ts` | `trim` |
| `serializeArgumentRows` | `lib/mcp/connect-form.ts` | `trim` |
| `serializeKeyValueRows` | `lib/mcp/connect-form.ts` | `trim` |
| `getReferencedAgentFromEditor` | `lib/prompt-editor/agent-mention-extension.ts` | `toAgentLabel`, `toAgentSlug`, `trim` |
| `getReferencedAgentIdFromEditor` | `lib/prompt-editor/agent-mention-extension.ts` | `getReferencedAgentFromEditor` |
| `escapeInlineCode` | `lib/prompt-editor/agent-mention-extension.ts` | `toAgentLabel`, `toAgentSlug`, `trim`, `renderMarkdown`, `toMentionText`, `toRenderedMention` |
| `toAgentLabel` | `lib/prompt-editor/agent-mention-extension.ts` | `escapeInlineCode`, `toAgentSlug`, `trim`, `renderMarkdown` |
| `toAgentSlug` | `lib/prompt-editor/agent-mention-extension.ts` | `escapeInlineCode`, `toAgentLabel`, `trim`, `renderMarkdown` |
| `createPromptEditor` | `lib/prompt-editor/create-prompt-editor.ts` | `collectTransferFiles`, `createDocFromMessage`, `getMarkdownFromEditor` |
| `hasClipboardHtml` | `lib/prompt-editor/create-prompt-editor.ts` | `collectTransferFiles`, `createDocFromMessage`, `getMarkdownFromEditor`, `trim` |
| `getPastedUrl` | `lib/prompt-editor/create-prompt-editor.ts` | `collectTransferFiles`, `createDocFromMessage`, `getMarkdownFromEditor`, `trim` |
| `getReferencedFileIdsFromEditor` | `lib/prompt-editor/file-mention-extension.ts` | `trim` |
| `toMentionText` | `lib/prompt-editor/file-mention-extension.ts` | `escapeInlineCode`, `toRenderedMention`, `trim`, `renderMarkdown` |
| `toRenderedMention` | `lib/prompt-editor/file-mention-extension.ts` | `escapeInlineCode`, `toMentionText`, `trim`, `renderMarkdown` |
| `escapeMarkdownText` | `lib/prompt-editor/image-extension.ts` | `escapeMarkdownTitle`, `trim`, `renderMarkdown` |
| `escapeMarkdownTitle` | `lib/prompt-editor/image-extension.ts` | `escapeMarkdownText`, `trim`, `renderMarkdown` |
| `shouldUploadLargeTextPaste` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `formatFileStamp`, `trim` |
| `buildLargeTextPasteHiddenMetadata` | `lib/prompt-editor/large-paste.ts` | `normalizeLineEndings`, `formatFileStamp`, `trim` |
| `appendLargeTextPasteHiddenMetadata` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `formatFileStamp`, `trim` |
| `stripLargeTextPasteHiddenMetadata` | `lib/prompt-editor/large-paste.ts` | `normalizeLineEndings`, `formatFileStamp`, `trim` |
| `createLargeTextPasteAttachment` | `lib/prompt-editor/large-paste.ts` | `normalizeLineEndings`, `formatFileStamp` |
| `normalizeLineEndings` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `pad`, `padMilliseconds`, `escapeRegex`, `formatFileStamp`, `trim`, `createDocFromMessage`, `stripAgentMentionNodes`, `createAbortError`, `parseFrame` |
| `pad` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `padMilliseconds`, `escapeRegex`, `formatFileStamp`, `trim` |
| `padMilliseconds` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `pad`, `escapeRegex`, `formatFileStamp`, `trim` |
| `escapeRegex` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `pad`, `padMilliseconds`, `formatFileStamp`, `trim` |
| `formatFileStamp` | `lib/prompt-editor/large-paste.ts` | `buildLargeTextPasteHiddenMetadata`, `normalizeLineEndings`, `pad`, `padMilliseconds`, `escapeRegex`, `trim` |
| `createDocFromMessage` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings`, `stripAgentMentionNodes` |
| `sanitizeMarkdownPaste` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings`, `createDocFromMessage`, `stripAgentMentionNodes` |
| `getMarkdownPasteContent` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings`, `createDocFromMessage`, `stripAgentMentionNodes` |
| `getMarkdownFromEditor` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings`, `stripAgentMentionNodes` |
| `getMarkdownWithoutAgentMentionsFromEditor` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings`, `stripAgentMentionNodes` |
| `stripAgentMentionNodes` | `lib/prompt-editor/markdown.ts` | `normalizeLineEndings` |
| `registerChatDebugSnapshot` | `lib/runtime/chat-debug.ts` | `installGlobals` |
| `logChatDebug` | `lib/runtime/chat-debug.ts` | `installGlobals` |
| `isChatDebugEnabled` | `lib/runtime/chat-debug.ts` | `installGlobals` |
| `installGlobals` | `lib/runtime/chat-debug.ts` | `snapshot` |
| `hasIncompleteCodeFence` | `lib/runtime/incomplete-markdown.ts` | `prepareMarkdownForRender`, `trim` |
| `hasTable` | `lib/runtime/incomplete-markdown.ts` | `hasIncompleteCodeFence`, `prepareMarkdownForRender`, `trim` |
| `prepareMarkdownForRender` | `lib/runtime/incomplete-markdown.ts` | `hasIncompleteCodeFence` |
| `repairIncompleteMarkdown` | `lib/runtime/incomplete-markdown.ts` | `hasIncompleteCodeFence`, `prepareMarkdownForRender` |
| `materializePendingWaitBlocks` | `lib/runtime/materialize.ts` | `applyEvent`, `findLatestOpenThinking`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `isConfirmationPendingWait`, `createToolBlockFromPendingWait`, `trim` |
| `mergePendingWaitBlocks` | `lib/runtime/materialize.ts` | `applyEvent`, `findLatestOpenThinking`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `isConfirmationPendingWait`, `createToolBlockFromPendingWait`, `trim` |
| `materializePersistedAssistantBlocks` | `lib/runtime/materialize.ts` | `applyEvent`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `closeStreamingText`, `closeThinking`, `upsertThinkingBlock`, `trim` |
| `materializeBlocks` | `lib/runtime/materialize.ts` | `isRecord`, `applyEvent`, `updateTextRenderState`, `createTextBlock`, `extractAppsMetaFromPayload`, `closeStreamingText`, `closeThinking`, `upsertThinkingBlock` |
| `applyEvent` | `lib/runtime/materialize.ts` | `isRecord`, `updateTextRenderState`, `createTextBlock`, `extractAppsMetaFromPayload`, `closeStreamingText`, `closeThinking`, `upsertThinkingBlock` |
| `findLatestOpenThinking` | `lib/runtime/materialize.ts` | `isRecord`, `rebuildIncrementalMarkdownView`, `syncIncrementalMarkdownView` |
| `updateTextRenderState` | `lib/runtime/materialize.ts` | `isRecord`, `rebuildIncrementalMarkdownView`, `syncIncrementalMarkdownView` |
| `createTextBlock` | `lib/runtime/materialize.ts` | `isRecord`, `rebuildIncrementalMarkdownView` |
| `readSourceRunId` | `lib/runtime/materialize.ts` | `isRecord` |
| `dedupeStrings` | `lib/runtime/materialize.ts` | `isRecord` |
| `dedupeWebSearchReferences` | `lib/runtime/materialize.ts` | `isRecord` |
| `mergeWebSearchStatus` | `lib/runtime/materialize.ts` | `isRecord` |
| `isToolStatus` | `lib/runtime/materialize.ts` | `isRecord` |
| `parsePersistedApproval` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus` |
| `parsePersistedConfirmation` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus`, `parsePersistedAppsMeta` |
| `parsePersistedAppsMeta` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus`, `parsePersistedApproval`, `parsePersistedConfirmation` |
| `extractAppsMetaFromOutcome` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus`, `parsePersistedApproval`, `parsePersistedConfirmation`, `parsePersistedAppsMeta` |
| `extractAppsMetaFromPayload` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus`, `parsePersistedApproval`, `parsePersistedConfirmation`, `parsePersistedAppsMeta` |
| `parsePersistedToolBlock` | `lib/runtime/materialize.ts` | `isRecord`, `isToolStatus`, `parsePersistedApproval`, `parsePersistedConfirmation`, `parsePersistedAppsMeta` |
| `parsePersistedWebSearchBlock` | `lib/runtime/materialize.ts` | `isRecord`, `readSourceRunId` |
| `parsePersistedThinkingBlock` | `lib/runtime/materialize.ts` | `isRecord`, `createTextBlock`, `readSourceRunId`, `parsePersistedToolBlock`, `parsePersistedWebSearchBlock`, `parsePersistedTextBlock`, `parsePersistedTranscriptBlock`, `readPersistedTranscript` |
| `parsePersistedTextBlock` | `lib/runtime/materialize.ts` | `isRecord`, `createTextBlock`, `readSourceRunId`, `parsePersistedToolBlock`, `parsePersistedWebSearchBlock`, `parsePersistedThinkingBlock`, `parsePersistedTranscriptBlock`, `readPersistedTranscript`, `parseLegacyPersistedAssistantTranscript`, `isConfirmationPendingWait` |
| `parsePersistedTranscriptBlock` | `lib/runtime/materialize.ts` | `isRecord`, `parsePersistedToolBlock`, `parsePersistedWebSearchBlock`, `parsePersistedThinkingBlock`, `parsePersistedTextBlock`, `readPersistedTranscript`, `parseLegacyPersistedAssistantTranscript`, `isConfirmationPendingWait`, `trim` |
| `readPersistedTranscript` | `lib/runtime/materialize.ts` | `isRecord`, `parsePersistedToolBlock`, `parsePersistedWebSearchBlock`, `parsePersistedTranscriptBlock`, `parseLegacyPersistedAssistantTranscript`, `isConfirmationPendingWait`, `trim` |
| `parseLegacyPersistedAssistantTranscript` | `lib/runtime/materialize.ts` | `parsePersistedToolBlock`, `parsePersistedWebSearchBlock`, `parsePersistedTranscriptBlock`, `readPersistedTranscript`, `isConfirmationPendingWait`, `createToolBlockFromPendingWait`, `trim` |
| `parsePersistedAssistantTranscript` | `lib/runtime/materialize.ts` | `findLatestOpenThinking`, `updateTextRenderState`, `parsePersistedTranscriptBlock`, `readPersistedTranscript`, `parseLegacyPersistedAssistantTranscript`, `isConfirmationPendingWait`, `createToolBlockFromPendingWait`, `trim` |
| `isConfirmationPendingWait` | `lib/runtime/materialize.ts` | `findLatestOpenThinking`, `updateTextRenderState`, `createToolBlockFromPendingWait`, `trim`, `isRecord`, `cloneBlocks`, `parsePersistedAttachments`, `isMessageFinishReason`, `parsePersistedLiveAssistantMessage` |
| `createToolBlockFromPendingWait` | `lib/runtime/materialize.ts` | `findLatestOpenThinking`, `updateTextRenderState`, `isConfirmationPendingWait`, `trim` |
| `closeStreamingText` | `lib/runtime/materialize.ts` | `applyEvent`, `findLatestOpenThinking`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `closeThinking`, `trim` |
| `closeThinking` | `lib/runtime/materialize.ts` | `applyEvent`, `findLatestOpenThinking`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `upsertThinkingBlock`, `trim` |
| `upsertThinkingBlock` | `lib/runtime/materialize.ts` | `applyEvent`, `updateTextRenderState`, `createTextBlock`, `parsePersistedAssistantTranscript`, `closeThinking`, `trim` |
| `supportsTightUserBubble` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `buildFontShorthand`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `estimateTextHeight`, `trim` |
| `prepareTextLayout` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `buildFontShorthand`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `estimateTextHeight`, `trim` |
| `countPreparedTextLines` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `estimateTextHeight`, `parseMarkdownIntoBlocks`, `trim` |
| `findTightBubbleWidth` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `estimateTextHeight`, `getTextBlockLiveTailSources`, `parseMarkdownIntoBlocks`, `trim` |
| `describeMessageHeightEstimate` | `lib/runtime/message-height-estimator.ts` | `prepareTextLayout`, `clampWidth`, `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `estimateMarkdownSourceHeight`, `getTextBlockLiveTailSources`, `getBlockFallbackSurfaces`, `parseMarkdownIntoBlocks` |
| `createMessageHeightEstimator` | `lib/runtime/message-height-estimator.ts` | `supportsTightUserBubble`, `prepareTextLayout`, `clampWidth`, `estimateTextHeight`, `estimateMarkdownSourceHeight`, `getTextBlockLiveTailSources`, `parseMarkdownIntoBlocks` |
| `normalizeWidth` | `lib/runtime/message-height-estimator.ts` | `buildFontShorthand`, `layoutPreparedText`, `trim` |
| `clampWidth` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `buildFontShorthand`, `layoutPreparedText`, `trim` |
| `buildFontShorthand` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `layoutPreparedText`, `trim` |
| `uniqueFallbackSurfaces` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `buildFontShorthand`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `trim` |
| `getMarkdownFallbackSurface` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `buildFontShorthand`, `layoutPreparedText`, `trim` |
| `layoutPreparedText` | `lib/runtime/message-height-estimator.ts` | `normalizeWidth`, `getMarkdownFallbackSurface`, `estimateTextHeight`, `getTextBlockLiveTailSources`, `parseMarkdownIntoBlocks`, `trim` |
| `estimateTextHeight` | `lib/runtime/message-height-estimator.ts` | `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `layoutPreparedText`, `getTextBlockLiveTailSources`, `getTextBlockSources`, `parseMarkdownIntoBlocks`, `trim` |
| `estimateMarkdownSourceHeight` | `lib/runtime/message-height-estimator.ts` | `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `estimateTextHeight`, `getTextBlockLiveTailSources`, `getTextBlockSources`, `parseMarkdownIntoBlocks`, `trim` |
| `getTextBlockLiveTailSources` | `lib/runtime/message-height-estimator.ts` | `prepareTextLayout`, `clampWidth`, `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `getTextBlockSources`, `getBlockFallbackSurfaces`, `parseMarkdownIntoBlocks` |
| `getTextBlockSources` | `lib/runtime/message-height-estimator.ts` | `prepareTextLayout`, `clampWidth`, `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `estimateMarkdownSourceHeight`, `getTextBlockLiveTailSources`, `getBlockFallbackSurfaces`, `parseMarkdownIntoBlocks` |
| `getBlockFallbackSurfaces` | `lib/runtime/message-height-estimator.ts` | `prepareTextLayout`, `clampWidth`, `uniqueFallbackSurfaces`, `getMarkdownFallbackSurface`, `estimateMarkdownSourceHeight`, `getTextBlockSources`, `parseMarkdownIntoBlocks` |
| `parseMarkdownIntoBlocks` | `lib/runtime/parse-blocks.ts` | `countNonSelfClosingOpenTags`, `countClosingTags`, `countDoubleDollars`, `_parseMarkdownIntoBlocks` |
| `getOpenTagPattern` | `lib/runtime/parse-blocks.ts` | `getCloseTagPattern`, `countNonSelfClosingOpenTags`, `countClosingTags`, `_parseMarkdownIntoBlocks` |
| `getCloseTagPattern` | `lib/runtime/parse-blocks.ts` | `getOpenTagPattern`, `countNonSelfClosingOpenTags`, `countClosingTags`, `_parseMarkdownIntoBlocks` |
| `countNonSelfClosingOpenTags` | `lib/runtime/parse-blocks.ts` | `getOpenTagPattern`, `getCloseTagPattern`, `countClosingTags`, `countDoubleDollars`, `_parseMarkdownIntoBlocks` |
| `countClosingTags` | `lib/runtime/parse-blocks.ts` | `getCloseTagPattern`, `countNonSelfClosingOpenTags`, `countDoubleDollars`, `_parseMarkdownIntoBlocks` |
| `countDoubleDollars` | `lib/runtime/parse-blocks.ts` | `countNonSelfClosingOpenTags`, `countClosingTags`, `_parseMarkdownIntoBlocks` |
| `_parseMarkdownIntoBlocks` | `lib/runtime/parse-blocks.ts` | `countNonSelfClosingOpenTags`, `countClosingTags`, `countDoubleDollars` |
| `createContext` | `lib/runtime/scroll-controller.test.ts` | `createScrollController` |
| `createScrollController` | `lib/runtime/scroll-controller.ts` |  |
| `createIncrementalMarkdownView` | `lib/runtime/streaming-markdown.ts` | `parseMarkdownIntoBlocks`, `rebuildIncrementalMarkdownView`, `splitBlocks`, `toSegments` |
| `rebuildIncrementalMarkdownView` | `lib/runtime/streaming-markdown.ts` | `parseMarkdownIntoBlocks`, `createIncrementalMarkdownView`, `splitBlocks`, `toSegments` |
| `syncIncrementalMarkdownView` | `lib/runtime/streaming-markdown.ts` | `parseMarkdownIntoBlocks`, `createIncrementalMarkdownView`, `rebuildIncrementalMarkdownView`, `splitBlocks`, `toSegments` |
| `splitBlocks` | `lib/runtime/streaming-markdown.ts` | `parseMarkdownIntoBlocks`, `createIncrementalMarkdownView`, `rebuildIncrementalMarkdownView`, `toSegments` |
| `toSegments` | `lib/runtime/streaming-markdown.ts` | `parseMarkdownIntoBlocks`, `createIncrementalMarkdownView`, `rebuildIncrementalMarkdownView`, `splitBlocks` |
| `createPendingSseResponse` | `lib/services/api.test.ts` | `bootstrapSession` |
| `parseJsonRequestBody` | `lib/services/api.test.ts` | `bootstrapSession` |
| `bootstrapSession` | `lib/services/api.ts` |  |
| `listAgents` | `lib/services/api.ts` |  |
| `renameAgent` | `lib/services/api.ts` | `trim` |
| `deleteAgent` | `lib/services/api.ts` | `trim` |
| `getAgentMarkdown` | `lib/services/api.ts` | `trim` |
| `updateAgentMarkdown` | `lib/services/api.ts` | `trim` |
| `getAccountPreferences` | `lib/services/api.ts` | `trim` |
| `listToolProfiles` | `lib/services/api.ts` | `trim` |
| `getToolProfile` | `lib/services/api.ts` | `trim` |
| `createToolProfile` | `lib/services/api.ts` | `trim` |
| `updateToolProfile` | `lib/services/api.ts` | `trim` |
| `updateAccountPreferences` | `lib/services/api.ts` | `trim` |
| `getThread` | `lib/services/api.ts` | `trim` |
| `listThreads` | `lib/services/api.ts` | `trim` |
| `getThreadsActivity` | `lib/services/api.ts` |  |
| `cancelRun` | `lib/services/api.ts` | `trim` |
| `createMcpServer` | `lib/services/api.ts` | `trim` |
| `listMcpServers` | `lib/services/api.ts` | `trim` |
| `updateMcpServer` | `lib/services/api.ts` | `trim` |
| `refreshMcpServer` | `lib/services/api.ts` | `trim` |
| `beginMcpServerAuthorization` | `lib/services/api.ts` | `trim` |
| `deleteMcpServer` | `lib/services/api.ts` | `toApiUrl`, `trim`, `createReconnectingSseConsumer` |
| `getMcpServerTools` | `lib/services/api.ts` | `parseBackendEvent`, `createApiHeaders`, `toApiUrl`, `trim`, `createReconnectingSseConsumer` |
| `assignMcpTool` | `lib/services/api.ts` | `parseBackendEvent`, `createApiHeaders`, `toApiUrl`, `createReconnectingSseConsumer` |
| `deleteMcpToolAssignment` | `lib/services/api.ts` | `parseBackendEvent`, `createApiHeaders`, `toApiUrl`, `createReconnectingSseConsumer` |
| `streamThreadEvents` | `lib/services/api.ts` | `parseBackendEvent`, `createApiHeaders`, `toApiUrl`, `createReconnectingSseConsumer` |
| `isObject` | `lib/services/api.ts` | `isUploadedBackendFileSummary`, `toAttachmentKind`, `toApiUrl`, `trim`, `isBackendFilePickerResult` |
| `parseBackendEvent` | `lib/services/api.ts` | `isObject` |
| `uploadAttachment` | `lib/services/attachment-api.ts` | `isUploadedBackendFileSummary`, `toAttachmentKind`, `toApiUrl`, `trim` |
| `isUploadedBackendFileSummary` | `lib/services/attachment-api.ts` | `isObject`, `toAttachmentKind`, `toApiUrl`, `trim` |
| `toAttachmentKind` | `lib/services/attachment-api.ts` | `isUploadedBackendFileSummary`, `toApiUrl`, `trim` |
| `getAuthSession` | `lib/services/auth.ts` | `apiFetch`, `toApiUrl`, `readErrorResponseMessage`, `session` |
| `loginWithPassword` | `lib/services/auth.ts` | `apiFetch`, `toApiUrl`, `readErrorResponseMessage` |
| `logout` | `lib/services/auth.ts` | `apiFetch`, `toApiUrl`, `readErrorResponseMessage` |
| `isAuthenticatedAssetUrl` | `lib/services/authenticated-asset.ts` | `fetchAuthenticatedAssetObjectUrl`, `readPathname`, `releaseCacheEntry`, `apiFetch` |
| `fetchAuthenticatedAssetObjectUrl` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `releaseCacheEntry`, `apiFetch` |
| `peekCachedDisplayUrl` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `fetchAuthenticatedAssetObjectUrl`, `releaseCacheEntry` |
| `resolveImageDisplayUrl` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `fetchAuthenticatedAssetObjectUrl`, `releaseCacheEntry` |
| `isAbsoluteHttpUrl` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `fetchAuthenticatedAssetObjectUrl`, `readPathname`, `releaseCacheEntry`, `apiFetch`, `trim`, `createApiHeaders`, `normalizeBasePath`, `getStorage`, `readStoredTenantId`, `fetchWithResolvedAuth` |
| `readPathname` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `fetchAuthenticatedAssetObjectUrl`, `isAbsoluteHttpUrl`, `releaseCacheEntry`, `apiFetch`, `trim`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `isSameOriginUrl`, `shouldUseApiFetch`, `triggerDownload` |
| `releaseCacheEntry` | `lib/services/authenticated-asset.ts` | `isAuthenticatedAssetUrl`, `fetchAuthenticatedAssetObjectUrl` |
| `getApiTenantId` | `lib/services/backend.ts` | `createApiHeaders`, `apiFetch`, `trim`, `getStorage`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `setApiTenantId` | `lib/services/backend.ts` | `createApiHeaders`, `apiFetch`, `trim`, `getStorage`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `createApiHeaders` | `lib/services/backend.ts` | `apiFetch`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `apiFetch` | `lib/services/backend.ts` | `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `toApiUrl` | `lib/services/backend.ts` | `withApiBaseUrl` |
| `trim` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `normalizeBasePath`, `getStorage`, `readStoredTenantId` |
| `normalizeBasePath` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `trim`, `getStorage`, `readStoredTenantId`, `fetchWithResolvedAuth` |
| `apiBasePath` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `apiFetch`, `trim`, `normalizeBasePath`, `getStorage`, `readStoredTenantId`, `withApiBaseUrl`, `fetchWithResolvedAuth` |
| `apiBaseOrigin` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `apiFetch`, `trim`, `getStorage`, `readStoredTenantId`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `getStorage` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `apiFetch`, `trim`, `readStoredTenantId`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage`, `isRecord`, `toNumberOrNull` |
| `readStoredTenantId` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `apiFetch`, `trim`, `getStorage`, `withApiBaseUrl`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `withApiBaseUrl` | `lib/services/backend.ts` | `isAbsoluteHttpUrl`, `createApiHeaders`, `apiFetch`, `trim`, `getStorage`, `fetchWithResolvedAuth`, `readErrorResponseMessage` |
| `fetchWithResolvedAuth` | `lib/services/backend.ts` | `createApiHeaders`, `apiFetch`, `withApiBaseUrl`, `readErrorResponseMessage` |
| `resolveDownloadFileName` | `lib/services/clipboard.ts` | `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `triggerDownload`, `downloadBlob`, `fetchImageBlob` |
| `copyTextToClipboard` | `lib/services/clipboard.ts` | `resolveDownloadFileName`, `triggerDownload`, `downloadBlob`, `fetchImageBlob` |
| `copyImageToClipboard` | `lib/services/clipboard.ts` | `resolveDownloadFileName`, `triggerDownload`, `downloadBlob`, `fetchImageBlob` |
| `downloadImage` | `lib/services/clipboard.ts` | `resolveDownloadFileName`, `triggerDownload`, `downloadBlob`, `fetchImageBlob` |
| `extensionForMimeType` | `lib/services/clipboard.ts` | `isAuthenticatedAssetUrl`, `readPathname`, `trim`, `isSameOriginUrl`, `shouldUseApiFetch`, `triggerDownload` |
| `sanitizeFileName` | `lib/services/clipboard.ts` | `isAuthenticatedAssetUrl`, `readPathname`, `apiFetch`, `trim`, `extensionForMimeType`, `filenameFromPathname`, `isSameOriginUrl`, `shouldUseApiFetch`, `triggerDownload` |
| `filenameFromPathname` | `lib/services/clipboard.ts` | `isAuthenticatedAssetUrl`, `readPathname`, `apiFetch`, `trim`, `extensionForMimeType`, `sanitizeFileName`, `isSameOriginUrl`, `shouldUseApiFetch`, `triggerDownload` |
| `isSameOriginUrl` | `lib/services/clipboard.ts` | `isAuthenticatedAssetUrl`, `apiFetch`, `trim`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `shouldUseApiFetch`, `triggerDownload`, `fetchImageBlob` |
| `shouldUseApiFetch` | `lib/services/clipboard.ts` | `isAuthenticatedAssetUrl`, `apiFetch`, `resolveDownloadFileName`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `isSameOriginUrl`, `triggerDownload`, `downloadBlob`, `fetchImageBlob` |
| `triggerDownload` | `lib/services/clipboard.ts` | `apiFetch`, `resolveDownloadFileName`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `shouldUseApiFetch`, `downloadBlob`, `fetchImageBlob` |
| `downloadBlob` | `lib/services/clipboard.ts` | `apiFetch`, `resolveDownloadFileName`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `shouldUseApiFetch`, `triggerDownload`, `fetchImageBlob` |
| `fetchImageBlob` | `lib/services/clipboard.ts` | `apiFetch`, `resolveDownloadFileName`, `extensionForMimeType`, `sanitizeFileName`, `filenameFromPathname`, `shouldUseApiFetch`, `triggerDownload`, `downloadBlob` |
| `searchFilePicker` | `lib/services/file-picker-api.ts` | `isBackendFilePickerResult` |
| `isBackendFilePickerResult` | `lib/services/file-picker-api.ts` | `isObject` |
| `createCodeBlockRenderer` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `escapeAttribute`, `resolveLanguage`, `prettyLanguageLabel`, `trimTrailingNewlines`, `wrapLines` |
| `escapeHtml` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeAttribute`, `resolveLanguage`, `prettyLanguageLabel`, `trimTrailingNewlines`, `wrapLines` |
| `escapeAttribute` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `resolveLanguage`, `prettyLanguageLabel`, `trimTrailingNewlines`, `wrapLines` |
| `resolveLanguage` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `escapeAttribute`, `prettyLanguageLabel`, `trimTrailingNewlines`, `wrapLines` |
| `prettyLanguageLabel` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `escapeAttribute`, `resolveLanguage`, `trimTrailingNewlines`, `wrapLines` |
| `trimTrailingNewlines` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `escapeAttribute`, `resolveLanguage`, `prettyLanguageLabel`, `wrapLines` |
| `wrapLines` | `lib/services/markdown/code-block-renderer.ts` | `trim`, `escapeHtml`, `escapeAttribute`, `resolveLanguage`, `prettyLanguageLabel`, `trimTrailingNewlines` |
| `createMarkdownPipeline` | `lib/services/markdown/markdown-pipeline.ts` | `renderFileReference`, `renderAgentReference` |
| `renderFileReference` | `lib/services/markdown/markdown-pipeline.ts` | `escapeHtml` |
| `renderAgentReference` | `lib/services/markdown/markdown-pipeline.ts` | `escapeHtml`, `renderFileReference` |
| `createRenderCache` | `lib/services/markdown/render-cache.ts` |  |
| `renderMarkdown` | `lib/services/markdown/render-markdown.ts` | `injectCaret`, `normalizeOptions`, `cacheKeyFor`, `sanitizeHtml` |
| `injectCaret` | `lib/services/markdown/render-markdown.ts` | `createCodeBlockRenderer`, `createMarkdownPipeline`, `createRenderCache`, `normalizeOptions`, `cacheKeyFor`, `sanitizeHtml` |
| `normalizeOptions` | `lib/services/markdown/render-markdown.ts` | `injectCaret`, `cacheKeyFor`, `sanitizeHtml` |
| `cacheKeyFor` | `lib/services/markdown/render-markdown.ts` | `injectCaret`, `normalizeOptions`, `sanitizeHtml` |
| `sanitizeHtml` | `lib/services/markdown/sanitize-html.ts` |  |
| `snapshot` | `lib/services/markdown.test.ts` | `trim`, `renderMarkdown` |
| `fetchAppResourceHtml` | `lib/services/mcp-app-resources.ts` | `buildOriginSearchParams` |
| `callMcpAppTool` | `lib/services/mcp-app-resources.ts` | `buildOriginSearchParams` |
| `readMcpAppResource` | `lib/services/mcp-app-resources.ts` | `buildOriginSearchParams` |
| `listMcpAppResources` | `lib/services/mcp-app-resources.ts` | `buildOriginSearchParams` |
| `listMcpAppResourceTemplates` | `lib/services/mcp-app-resources.ts` | `buildOriginSearchParams` |
| `buildOriginSearchParams` | `lib/services/mcp-app-resources.ts` |  |
| `extractErrorMessage` | `lib/services/response-errors.ts` | `trim`, `asErrorPayload`, `isBlank` |
| `humanizeErrorMessage` | `lib/services/response-errors.ts` | `trim`, `extractErrorMessage`, `isBlank` |
| `readErrorResponseMessage` | `lib/services/response-errors.ts` | `extractErrorMessage`, `humanizeErrorMessage` |
| `asErrorPayload` | `lib/services/response-errors.ts` | `trim`, `isBlank` |
| `isBlank` | `lib/services/response-errors.ts` | `trim`, `extractErrorMessage`, `humanizeErrorMessage` |
| `createChunkedResponse` | `lib/services/sse.test.ts` | `consumeSse`, `createReconnectingSseConsumer` |
| `isAbortError` | `lib/services/sse.ts` | `createAbortError`, `parseFrame` |
| `consumeSse` | `lib/services/sse.ts` | `normalizeLineEndings`, `trim`, `readErrorResponseMessage`, `createAbortError`, `flushFrame` |
| `createReconnectingSseConsumer` | `lib/services/sse.ts` | `isAbortError`, `consumeSse`, `createAbortError`, `waitForDelay`, `shouldRetryReconnect`, `forwardAbortSignal` |
| `createAbortError` | `lib/services/sse.ts` | `parseFrame` |
| `waitForDelay` | `lib/services/sse.ts` | `readErrorResponseMessage`, `createAbortError`, `parseFrame` |
| `parseFrame` | `lib/services/sse.ts` | `normalizeLineEndings`, `readErrorResponseMessage`, `createAbortError` |
| `flushFrame` | `lib/services/sse.ts` | `normalizeLineEndings`, `trim`, `readErrorResponseMessage`, `createAbortError`, `parseFrame` |
| `shouldRetryReconnect` | `lib/services/sse.ts` | `consumeSse`, `createAbortError`, `forwardAbortSignal` |
| `forwardAbortSignal` | `lib/services/sse.ts` | `consumeSse`, `createAbortError` |
| `normalizeShortcutKey` | `lib/shortcuts/normalize.ts` | `trim`, `isModifierAlias`, `normalizeBaseKey`, `formatShortcut`, `deriveBaseKeyFromEvent` |
| `normalizeKeyboardEvent` | `lib/shortcuts/normalize.ts` | `formatShortcut`, `deriveBaseKeyFromEvent` |
| `isModifierAlias` | `lib/shortcuts/normalize.ts` | `trim`, `normalizeBaseKey`, `formatShortcut`, `deriveBaseKeyFromEvent` |
| `normalizeBaseKey` | `lib/shortcuts/normalize.ts` | `trim`, `isModifierAlias`, `formatShortcut`, `deriveBaseKeyFromEvent` |
| `formatShortcut` | `lib/shortcuts/normalize.ts` | `trim`, `isModifierAlias`, `normalizeBaseKey`, `deriveBaseKeyFromEvent` |
| `deriveBaseKeyFromEvent` | `lib/shortcuts/normalize.ts` | `isModifierAlias`, `normalizeBaseKey`, `formatShortcut` |
| `createKeyboardEvent` | `lib/shortcuts/shortcut-manager.test.ts` | `createShortcutManager`, `createShortcutLayerStack` |
| `createShortcutManager` | `lib/shortcuts/shortcut-manager.ts` | `normalizeShortcutKey`, `normalizeKeyboardEvent` |
| `isEditableElement` | `lib/shortcuts/shortcut-manager.ts` | `normalizeShortcutKey`, `normalizeKeyboardEvent` |
| `createAttachmentDraftStore` | `lib/stores/attachment-drafts.svelte.ts` | `trim`, `normalizeMime`, `inferKind` |
| `normalizeMime` | `lib/stores/attachment-drafts.svelte.ts` | `trim`, `inferKind`, `cloneAttachment` |
| `inferKind` | `lib/stores/attachment-drafts.svelte.ts` | `trim`, `normalizeMime`, `cloneAttachment` |
| `cloneAttachment` | `lib/stores/attachment-drafts.svelte.ts` | `trim`, `normalizeMime`, `inferKind` |
| `toMessageAttachment` | `lib/stores/attachment-drafts.svelte.ts` | `trim`, `normalizeMime`, `inferKind`, `cloneAttachment` |
| `createBackgroundActivityStore` | `lib/stores/background-activity.svelte.ts` | `getThreadsActivity`, `trim`, `loadDismissed`, `saveDismissed`, `clearDismissed` |
| `loadDismissed` | `lib/stores/background-activity.svelte.ts` | `getThreadsActivity`, `trim`, `saveDismissed`, `clearDismissed` |
| `saveDismissed` | `lib/stores/background-activity.svelte.ts` | `getThreadsActivity`, `trim`, `loadDismissed`, `clearDismissed` |
| `clearDismissed` | `lib/stores/background-activity.svelte.ts` | `getThreadsActivity`, `trim`, `loadDismissed`, `saveDismissed` |
| `createChatStore` | `lib/stores/chat-store.svelte.ts` | `getStorage`, `humanizeErrorMessage` |
| `cloneAttachments` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneBlocks`, `messageTextFromParts`, `readPersistedMessageFinishReason`, `isMessageFinishReason` |
| `cloneBlocks` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneAttachments`, `messageTextFromParts`, `readPersistedMessageFinishReason`, `isMessageFinishReason` |
| `cloneUiMessage` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneAttachments`, `cloneBlocks`, `messageTextFromParts`, `readPersistedMessageFinishReason`, `isMessageFinishReason` |
| `messageTextFromParts` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneAttachments`, `readPersistedMessageFinishReason`, `isMessageFinishReason` |
| `readPersistedMessageFinishReason` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneAttachments`, `messageTextFromParts`, `isMessageFinishReason` |
| `toUiMessage` | `lib/stores/chat-store.svelte.ts` | `stripLargeTextPasteHiddenMetadata`, `materializePersistedAssistantBlocks`, `trim`, `cloneAttachments`, `messageTextFromParts`, `readPersistedMessageFinishReason` |
| `isTerminalRunStatus` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `trim`, `toNumberOrNull` |
| `isMessageAttachment` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `trim`, `toNumberOrNull` |
| `parsePersistedAttachments` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `trim`, `toNumberOrNull` |
| `estimateTextTokens` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `trim`, `toNumberOrNull` |
| `toNumberOrNull` | `lib/stores/chat-store.svelte.ts` | `isRecord` |
| `parseUsage` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `toNumberOrNull` |
| `isMessageFinishReason` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `estimateTextTokens` |
| `isPendingWait` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `estimateTextTokens` |
| `parsePendingWaits` | `lib/stores/chat-store.svelte.ts` | `estimateTextTokens` |
| `toContextBudget` | `lib/stores/chat-store.svelte.ts` | `isConfirmationPendingWait`, `estimateTextTokens` |
| `withStreamingBudgetStart` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `isConfirmationPendingWait`, `cloneBlocks`, `estimateTextTokens`, `isMessageFinishReason` |
| `withEstimatedOutputDelta` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `isConfirmationPendingWait`, `cloneBlocks`, `estimateTextTokens`, `isMessageFinishReason` |
| `withReconciledUsage` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `isConfirmationPendingWait`, `cloneBlocks`, `parsePersistedAttachments`, `estimateTextTokens`, `isMessageFinishReason`, `parsePersistedLiveAssistantMessage` |
| `isReplyablePendingWait` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `isConfirmationPendingWait`, `cloneBlocks`, `parsePersistedAttachments`, `isMessageFinishReason`, `parsePersistedLiveAssistantMessage` |
| `parsePersistedLiveAssistantMessage` | `lib/stores/chat-store.svelte.ts` | `isRecord`, `cloneBlocks`, `parsePersistedAttachments`, `isMessageFinishReason` |
| `readPersistedState` | `lib/stores/chat-store.svelte.ts` | `parsePersistedAttachments`, `parsePersistedLiveAssistantMessage`, `getSelectedModelAliases` |
| `deriveAvailableModels` | `lib/stores/chat-store.svelte.ts` | `getSelectedModelAliases` |
| `pickPreferredModel` | `lib/stores/chat-store.svelte.ts` | `getSelectedModelAliases` |
| `getSelectedModelAliases` | `lib/stores/chat-store.svelte.ts` |  |
| `deriveAvailableReasoningModes` | `lib/stores/chat-store.svelte.ts` | `getSelectedModelAliases` |
| `pickPreferredReasoningMode` | `lib/stores/chat-store.svelte.ts` | `getStorage` |
| `createStorage` | `lib/stores/chat-store.test.ts` | `thread`, `session`, `userMessage`, `assistantMessage` |
| `thread` | `lib/stores/chat-store.test.ts` | `session`, `userMessage`, `assistantMessage` |
| `threadWith` | `lib/stores/chat-store.test.ts` | `thread`, `session`, `userMessage`, `assistantMessage` |
| `session` | `lib/stores/chat-store.test.ts` | `userMessage`, `assistantMessage` |
| `sessionWith` | `lib/stores/chat-store.test.ts` | `session`, `userMessage`, `assistantMessage` |
| `userMessage` | `lib/stores/chat-store.test.ts` | `assistantMessage` |
| `userMessageWith` | `lib/stores/chat-store.test.ts` | `userMessage`, `assistantMessage` |
| `assistantMessage` | `lib/stores/chat-store.test.ts` | `pendingConfirmationWait` |
| `assistantMessageWithMetadata` | `lib/stores/chat-store.test.ts` | `assistantMessage`, `pendingConfirmationWait` |
| `persistedToolTranscript` | `lib/stores/chat-store.test.ts` | `pendingConfirmationWait` |
| `persistedReasoningWaitingTranscript` | `lib/stores/chat-store.test.ts` | `pendingConfirmationWait` |
| `pendingConfirmationWait` | `lib/stores/chat-store.test.ts` |  |
| `buildRun` | `lib/stores/chat-store.test.ts` | `pendingConfirmationWait` |
| `runEvent` | `lib/stores/chat-store.test.ts` | `createChatStore`, `createStorage` |
| `completedInteraction` | `lib/stores/chat-store.test.ts` | `createChatStore`, `createStorage` |
| `clamp` | `lib/stores/chat-width.svelte.ts` | `load` |
| `load` | `lib/stores/chat-width.svelte.ts` | `clamp` |
| `createComposerAttachmentStore` | `lib/stores/composer-attachments.svelte.ts` | `createAttachmentDraftStore` |
| `createMessageNavigator` | `lib/stores/message-navigator.svelte.ts` | `trim`, `copyTextToClipboard` |
| `createTypewriterPlaybackStore` | `lib/stores/typewriter-playback.svelte.ts` | `trim` |
| `createShortcutLayerStack` | `lib/ui/layer-stack.ts` |  |
| `perfStats` | `lib/utils/perf.ts` | `resetPerfStats` |
| `resetPerfStats` | `lib/utils/perf.ts` | `perfStats` |
| `getBucket` | `lib/utils/perf.ts` | `perfStats`, `resetPerfStats` |
| `estimateCharWidth` | `test-preload.ts` | `estimateTextWidth`, `parseFontSize` |
| `estimateTextWidth` | `test-preload.ts` | `estimateCharWidth`, `parseFontSize` |
| `parseFontSize` | `test-preload.ts` | `estimateTextWidth` |