import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MIN_NODE_VERSION = 24;
const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_ENV_FILE = path.join(ROOT_DIR, ".env");

// Virtual URL intercepted by the Copilot fetch patch – never actually called over the network
const COPILOT_RESPONSES_SHIM_URL = "https://api.githubcopilot.com/__responses_shim__";
const COPILOT_TOKEN_EXCHANGE_URL = "https://api.github.com/copilot_internal/v2/token";
const COPILOT_BASE_URL = "https://api.githubcopilot.com";

const RESPONSES_ENDPOINTS = {
  openai: "https://api.openai.com/v1/responses",
  openrouter: "https://openrouter.ai/api/v1/responses",
  copilot: COPILOT_RESPONSES_SHIM_URL
};
const EMBEDDINGS_ENDPOINTS = {
  openai: "https://api.openai.com/v1/embeddings",
  openrouter: "https://openrouter.ai/api/v1/embeddings",
  copilot: `${COPILOT_BASE_URL}/embeddings`
};
const CHAT_API_BASE_URLS = {
  openai: "https://api.openai.com/v1",
  openrouter: "https://openrouter.ai/api/v1",
  copilot: COPILOT_BASE_URL
};
const OPENROUTER_ONLINE_SUFFIX = ":online";
const VALID_OPENAI_SEARCH_CONTEXT_SIZES = new Set(["low", "medium", "high"]);
const VALID_OPENROUTER_WEB_ENGINES = new Set(["native", "exa"]);
const VALID_PROVIDERS = new Set(["openai", "openrouter", "copilot"]);

const [major] = process.versions.node.split(".").map(Number);
if (major < MIN_NODE_VERSION) {
  console.error(`\x1b[31mError: Node.js ${MIN_NODE_VERSION}+ is required\x1b[0m`);
  console.error(`       Current version: ${process.versions.node}`);
  console.error("       Please upgrade: https://nodejs.org/");
  process.exit(1);
}

const stripMatchingQuotes = (value) => {
  if (
    value.length >= 2
    && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
  ) {
    return value.slice(1, -1);
  }

  return value;
};

const loadEnvFile = (file) => {
  if (!existsSync(file)) {
    return;
  }

  try {
    if (typeof process.loadEnvFile === "function") {
      process.loadEnvFile(file);
      return;
    }

    const raw = readFileSync(file, "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const normalized = trimmed.startsWith("export ")
        ? trimmed.slice("export ".length)
        : trimmed;
      const separatorIndex = normalized.indexOf("=");

      if (separatorIndex <= 0) {
        continue;
      }

      const key = normalized.slice(0, separatorIndex).trim();
      if (!key || process.env[key] !== undefined) {
        continue;
      }

      const value = normalized.slice(separatorIndex + 1).trim();
      process.env[key] = stripMatchingQuotes(value);
    }
  } catch (error) {
    console.error("\x1b[31mError: Failed to load .env file\x1b[0m");
    console.error(`       File: ${file}`);
    console.error(`       Reason: ${error.message}`);
    process.exit(1);
  }
};

loadEnvFile(ROOT_ENV_FILE);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() ?? "";
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY?.trim() ?? "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN?.trim() ?? "";
const COPILOT_MODEL_ENV = process.env.COPILOT_MODEL?.trim() || "gpt-4.1";
const requestedProvider = process.env.AI_PROVIDER?.trim().toLowerCase() ?? "";
const hasOpenAIKey = Boolean(OPENAI_API_KEY);
const hasOpenRouterKey = Boolean(OPENROUTER_API_KEY);
const hasCopilotKey = Boolean(GITHUB_TOKEN);

if (requestedProvider && !VALID_PROVIDERS.has(requestedProvider)) {
  console.error("\x1b[31mError: AI_PROVIDER must be one of: openai, openrouter, copilot\x1b[0m");
  process.exit(1);
}

const resolveProvider = () => {
  if (requestedProvider) {
    if (requestedProvider === "openai" && !hasOpenAIKey) {
      console.error("\x1b[31mError: AI_PROVIDER=openai requires OPENAI_API_KEY\x1b[0m");
      process.exit(1);
    }

    if (requestedProvider === "openrouter" && !hasOpenRouterKey) {
      console.error("\x1b[31mError: AI_PROVIDER=openrouter requires OPENROUTER_API_KEY\x1b[0m");
      process.exit(1);
    }

    if (requestedProvider === "copilot" && !hasCopilotKey) {
      console.error("\x1b[31mError: AI_PROVIDER=copilot requires GITHUB_TOKEN\x1b[0m");
      process.exit(1);
    }

    return requestedProvider;
  }

  // Auto-detection: prefer Copilot when GITHUB_TOKEN is set and no explicit provider key
  if (hasCopilotKey && !hasOpenAIKey && !hasOpenRouterKey) return "copilot";
  if (hasOpenAIKey) return "openai";
  if (hasOpenRouterKey) return "openrouter";
  if (hasCopilotKey) return "copilot";
  return "openai";
};

export const AI_PROVIDER = resolveProvider();
export const AI_API_KEY = AI_PROVIDER === "openai"
  ? OPENAI_API_KEY
  : AI_PROVIDER === "openrouter"
    ? OPENROUTER_API_KEY
    : GITHUB_TOKEN; // copilot – the actual session token exchange happens in the fetch patch
export const RESPONSES_API_ENDPOINT = RESPONSES_ENDPOINTS[AI_PROVIDER];
export const EMBEDDINGS_API_ENDPOINT = EMBEDDINGS_ENDPOINTS[AI_PROVIDER];
export const CHAT_API_BASE_URL = CHAT_API_BASE_URLS[AI_PROVIDER];
export const OPENROUTER_EXTRA_HEADERS = {
  ...(process.env.OPENROUTER_HTTP_REFERER
    ? { "HTTP-Referer": process.env.OPENROUTER_HTTP_REFERER }
    : {}),
  ...(process.env.OPENROUTER_APP_NAME
    ? { "X-Title": process.env.OPENROUTER_APP_NAME }
    : {})
};
export const EXTRA_API_HEADERS = AI_PROVIDER === "openrouter"
  ? OPENROUTER_EXTRA_HEADERS
  : {};

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const ensureTrimmedString = (value, fieldName) => {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${fieldName} must be a non-empty string`);
  }

  return value.trim();
};

const normalizeOpenRouterOnlineModel = (model) =>
  model.endsWith(OPENROUTER_ONLINE_SUFFIX)
    ? model
    : `${model}${OPENROUTER_ONLINE_SUFFIX}`;

const stripOpenRouterOnlineSuffix = (model) =>
  model.endsWith(OPENROUTER_ONLINE_SUFFIX)
    ? model.slice(0, -OPENROUTER_ONLINE_SUFFIX.length)
    : model;

export const resolveModelForProvider = (model) => {
  if (typeof model !== "string" || !model.trim()) {
    throw new Error("Model must be a non-empty string");
  }

  // For Copilot, always use the configured Copilot model (ignoring OpenAI model names)
  if (AI_PROVIDER === "copilot") {
    return COPILOT_MODEL_ENV;
  }

  if (AI_PROVIDER !== "openrouter" || model.includes("/")) {
    return model;
  }

  return `openai/${model}`;
};

const normalizeWebSearchConfig = (webSearch) => {
  if (!webSearch) {
    return null;
  }

  if (webSearch === true) {
    return {};
  }

  if (!isPlainObject(webSearch)) {
    throw new Error("webSearch must be either boolean or an object");
  }

  if (webSearch.enabled === false) {
    return null;
  }

  const config = {};

  if (webSearch.searchContextSize !== undefined) {
    const searchContextSize = ensureTrimmedString(
      webSearch.searchContextSize,
      "webSearch.searchContextSize"
    );

    if (!VALID_OPENAI_SEARCH_CONTEXT_SIZES.has(searchContextSize)) {
      throw new Error('webSearch.searchContextSize must be one of: "low", "medium", "high"');
    }

    config.searchContextSize = searchContextSize;
  }

  if (webSearch.engine !== undefined) {
    const engine = ensureTrimmedString(webSearch.engine, "webSearch.engine");

    if (!VALID_OPENROUTER_WEB_ENGINES.has(engine)) {
      throw new Error('webSearch.engine must be one of: "native", "exa"');
    }

    config.engine = engine;
  }

  if (webSearch.maxResults !== undefined) {
    if (!Number.isInteger(webSearch.maxResults) || webSearch.maxResults <= 0) {
      throw new Error("webSearch.maxResults must be a positive integer");
    }

    config.maxResults = webSearch.maxResults;
  }

  if (webSearch.searchPrompt !== undefined) {
    config.searchPrompt = ensureTrimmedString(
      webSearch.searchPrompt,
      "webSearch.searchPrompt"
    );
  }

  return config;
};

const addUniqueTool = (tools, tool) => {
  if (!Array.isArray(tools) || tools.length === 0) {
    return [tool];
  }

  return tools.some((candidate) => candidate?.type === tool.type)
    ? tools
    : [...tools, tool];
};

const mergeOpenRouterPlugins = (plugins, plugin) => {
  if (!Array.isArray(plugins) || plugins.length === 0) {
    return [plugin];
  }

  const existingIndex = plugins.findIndex((candidate) => candidate?.id === plugin.id);

  if (existingIndex === -1) {
    return [...plugins, plugin];
  }

  const mergedPlugin = { ...plugins[existingIndex], ...plugin };
  return plugins.map((candidate, index) => (
    index === existingIndex ? mergedPlugin : candidate
  ));
};

export const buildResponsesRequest = ({ model, tools, plugins, webSearch = false, ...rest }) => {
  const request = {
    model: resolveModelForProvider(model),
    ...rest
  };

  if (tools) {
    request.tools = tools;
  }

  if (plugins) {
    request.plugins = plugins;
  }

  // Copilot does not support the OpenAI Responses API web-search extensions
  if (AI_PROVIDER === "copilot") {
    return request;
  }

  const webSearchConfig = normalizeWebSearchConfig(webSearch);

  if (!webSearchConfig) {
    return request;
  }

  if (AI_PROVIDER === "openrouter") {
    const hasPluginOverrides = (
      webSearchConfig.engine !== undefined
      || webSearchConfig.maxResults !== undefined
      || webSearchConfig.searchPrompt !== undefined
    );

    if (!hasPluginOverrides) {
      request.model = normalizeOpenRouterOnlineModel(request.model);
      return request;
    }

    request.model = stripOpenRouterOnlineSuffix(request.model);
    request.plugins = mergeOpenRouterPlugins(request.plugins, {
      id: "web",
      ...(webSearchConfig.engine ? { engine: webSearchConfig.engine } : {}),
      ...(webSearchConfig.maxResults ? { max_results: webSearchConfig.maxResults } : {}),
      ...(webSearchConfig.searchPrompt ? { search_prompt: webSearchConfig.searchPrompt } : {})
    });

    return request;
  }

  request.tools = addUniqueTool(request.tools, { type: "web_search_preview" });

  if (webSearchConfig.searchContextSize) {
    request.web_search_options = {
      search_context_size: webSearchConfig.searchContextSize
    };
  }

  return request;
};

// Backward-compatible alias used in existing examples.
export { OPENAI_API_KEY, OPENROUTER_API_KEY };

// ---------------------------------------------------------------------------
// GitHub Copilot Adapter
//
// Patches globalThis.fetch to intercept calls to COPILOT_RESPONSES_SHIM_URL
// and transparently translate them:
//   Responses API format  →  Chat Completions (api.githubcopilot.com)
//   Chat Completions response  →  Responses API format
//
// Two-step auth:  GITHUB_TOKEN → session token (cached, refreshed before expiry)
// ---------------------------------------------------------------------------

if (AI_PROVIDER === "copilot") {
  let _copilotSessionToken = "";
  let _copilotSessionExpires = 0;
  const _REFRESH_MARGIN_MS = 60_000;

  const _getSessionToken = async () => {
    if (_copilotSessionToken && Date.now() < _copilotSessionExpires - _REFRESH_MARGIN_MS) {
      return _copilotSessionToken;
    }

    const res = await _originalFetch(COPILOT_TOKEN_EXCHANGE_URL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "GithubCopilot/1.155.0",
        Accept: "application/json"
      }
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Copilot token exchange failed (${res.status}). `
        + "Check GITHUB_TOKEN and ensure your account has an active Copilot subscription.\n"
        + body
      );
    }

    const data = await res.json();
    if (!data.token) {
      throw new Error("Copilot token exchange: no token in response. Subscription required.");
    }

    _copilotSessionToken = data.token;
    _copilotSessionExpires = data.expires_at
      ? data.expires_at * 1000
      : Date.now() + 1_500_000; // fallback: +25 min

    return _copilotSessionToken;
  };

  /** Translate Responses API `input` to Chat Completions `messages`. */
  const _inputToMessages = (input) => {
    if (typeof input === "string") {
      return [{ role: "user", content: input }];
    }

    if (!Array.isArray(input)) {
      return [{ role: "user", content: String(input) }];
    }

    const messages = [];
    let i = 0;
    while (i < input.length) {
      const item = input[i];

      // Responses API function_call items → Chat Completions assistant message with tool_calls.
      // Group consecutive function_call items into a single assistant message (one turn).
      if (item.type === "function_call") {
        const toolCalls = [];
        while (i < input.length && input[i].type === "function_call") {
          const fc = input[i];
          toolCalls.push({
            id: fc.call_id ?? fc.id ?? "",
            type: "function",
            function: { name: fc.name ?? "", arguments: fc.arguments ?? "{}" }
          });
          i++;
        }
        messages.push({ role: "assistant", content: null, tool_calls: toolCalls });
        continue;
      }

      // Responses API function_call_output → Chat Completions tool result
      if (item.type === "function_call_output") {
        messages.push({
          role: "tool",
          tool_call_id: item.call_id ?? item.id ?? "",
          content: typeof item.output === "string" ? item.output : JSON.stringify(item.output)
        });
        i++;
        continue;
      }

      // Standard Responses API message → Chat Completions message
      if (item.role) {
        let content = item.content;
        if (Array.isArray(content)) {
          content = content
            .filter((p) => p.type === "input_text" || p.type === "text" || p.type === "output_text")
            .map((p) => p.text ?? "")
            .join("\n");
        }
        messages.push({ role: item.role, content: content ?? "" });
      }
      i++;
    }

    return messages;
  };

  /** Translate Responses API `text.format` (JSON schema) to Chat Completions `response_format`. */
  const _textFormatToResponseFormat = (textFormat) => {
    if (!textFormat) return undefined;

    // Already a plain { type: "json_object" } style
    if (textFormat.type === "json_object") {
      return { type: "json_object" };
    }

    // Responses API JSON schema format: { type: "json_schema", schema: {...}, name: "..." }
    if (textFormat.type === "json_schema" || textFormat.schema) {
      return {
        type: "json_schema",
        json_schema: {
          name: textFormat.name ?? "response",
          strict: textFormat.strict ?? true,
          schema: textFormat.schema ?? textFormat
        }
      };
    }

    return undefined;
  };

  /** Translate Responses API `tools` array to Chat Completions tools. */
  const _translateTools = (tools) => {
    if (!Array.isArray(tools)) return undefined;

    return tools
      .filter((t) => t.type === "function")
      .map((t) => ({
        type: "function",
        function: {
          name: t.name,
          description: t.description ?? "",
          parameters: t.parameters ?? {}
        }
      }));
  };

  /** Translate Chat Completions response to Responses API format. */
  const _ccToResponses = (data) => {
    const choice = data.choices?.[0];
    const message = choice?.message ?? {};
    const outputItems = [];

    // Tool calls
    if (Array.isArray(message.tool_calls)) {
      for (const tc of message.tool_calls) {
        outputItems.push({
          type: "function_call",
          id: tc.id,
          call_id: tc.id,
          name: tc.function?.name ?? "",
          arguments: tc.function?.arguments ?? "{}"
        });
      }
    }

    // Text content
    const text = message.content ?? "";
    if (text) {
      outputItems.push({
        type: "message",
        id: `msg_${Math.random().toString(36).slice(2, 11)}`,
        role: "assistant",
        content: [{ type: "output_text", text }]
      });
    }

    return {
      id: data.id ?? `resp_${Math.random().toString(36).slice(2, 11)}`,
      object: "response",
      model: data.model ?? COPILOT_MODEL_ENV,
      output: outputItems,
      output_text: text,
      usage: {
        input_tokens: data.usage?.prompt_tokens ?? 0,
        output_tokens: data.usage?.completion_tokens ?? 0,
        total_tokens: data.usage?.total_tokens ?? 0
      }
    };
  };

  // Save the original fetch before patching
  const _originalFetch = globalThis.fetch;

  // Matches any Responses API path under the Copilot base URL (/responses or /v1/responses),
  // with optional query string. These must go through the full shim translation, not just
  // auth-token swap, because Copilot does not support the Responses API natively.
  const _COPILOT_RESPONSES_PATH_RE = /\/(v1\/)?responses(\?|$)/;

  globalThis.fetch = async (url, options = {}) => {
    if (typeof url === "string" && url.startsWith(COPILOT_BASE_URL) && url !== COPILOT_RESPONSES_SHIM_URL) {
      // Responses API call from the SDK → reroute through the shim translation
      if (_COPILOT_RESPONSES_PATH_RE.test(url)) {
        url = COPILOT_RESPONSES_SHIM_URL;
        // falls through to shim handling below
      } else {
        // Any other Copilot endpoint: just swap GITHUB_TOKEN → session token
        const sessionToken = await _getSessionToken();
        const newHeaders = Object.assign({}, options.headers ?? {}, {
          "Authorization": `Bearer ${sessionToken}`,
          "User-Agent": "GithubCopilot/1.155.0",
          "Editor-Version": "vscode/1.90.0",
          "Editor-Plugin-Version": "copilot-chat/0.17.0",
          "Openai-Intent": "conversation-panel",
          "X-Github-Api-Version": "2023-07-07"
        });
        return _originalFetch(url, { ...options, headers: newHeaders });
      }
    }

    // Only intercept calls to our virtual Copilot shim URL
    if (url !== COPILOT_RESPONSES_SHIM_URL) {
      return _originalFetch(url, options);
    }

    const sessionToken = await _getSessionToken();

    // Parse and translate request body
    const reqBody = JSON.parse(options.body ?? "{}");
    const messages = _inputToMessages(reqBody.input);
    const responseFormat = _textFormatToResponseFormat(reqBody.text?.format);
    const tools = _translateTools(reqBody.tools);

    const ccBody = { model: reqBody.model ?? COPILOT_MODEL_ENV, messages };
    if (responseFormat) ccBody.response_format = responseFormat;
    if (tools?.length) {
      ccBody.tools = tools;
      ccBody.tool_choice = "auto";
    }
    // `reasoning` (o1/o3 specific) is not supported by Copilot – silently dropped

    const ccResponse = await _originalFetch(`${COPILOT_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
        "User-Agent": "GithubCopilot/1.155.0",
        "Editor-Version": "vscode/1.90.0",
        "Editor-Plugin-Version": "copilot-chat/0.17.0",
        "Openai-Intent": "conversation-panel",
        "X-Github-Api-Version": "2023-07-07"
      },
      signal: options.signal,
      body: JSON.stringify(ccBody)
    });

    if (!ccResponse.ok) {
      // Return error response in a format compatible with the lessons' error handling
      return ccResponse;
    }

    const ccData = await ccResponse.json();
    const translated = _ccToResponses(ccData);

    return new Response(JSON.stringify(translated), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  console.log(
    `\x1b[36m[Copilot] Provider: GitHub Copilot | Model: ${COPILOT_MODEL_ENV}\x1b[0m`
  );
}
