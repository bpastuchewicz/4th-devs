import {
  AI_API_KEY,
  buildResponsesRequest,
  EXTRA_API_HEADERS,
  RESPONSES_API_ENDPOINT,
  resolveModelForProvider,
} from "../config.js";
import {
  buildNextConversation,
  getFinalText,
  getToolCalls,
  logAnswer,
  logQuestion,
} from "./helper.js";

const model = resolveModelForProvider("gpt-4.1-mini");

// `buildResponsesRequest()` maps this to OpenAI web search or OpenRouter online mode.
const webSearch = true;

/*
  Step 1: Define tools the model can call.
  Each tool is a JSON Schema describing the function name, purpose, and expected arguments.
  The model never runs these — it only decides *when* to call them and *with what arguments*.
*/
const tools = [
  {
    type: "function",
    name: "get_weather",
    description: "Get current weather for a given location",
    parameters: {
      type: "object",
      properties: {
        location: { type: "string", description: "City name" },
      },
      required: ["location"],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "send_email",
    description: "Send a short email message to a recipient",
    parameters: {
      type: "object",
      properties: {
        to: { type: "string", description: "Recipient email address" },
        subject: { type: "string", description: "Email subject" },
        body: { type: "string", description: "Plain-text email body" },
      },
      required: ["to", "subject", "body"],
      additionalProperties: false,
    },
    strict: true,
  },
];

/*
  Step 2: Implement the actual logic behind each tool.
  This is regular code — the model has no access to it.
  get_weather uses the Open-Meteo API (free, no key needed).
  send_email uses the Resend API (requires RESEND_API_KEY and RESEND_FROM in .env).
*/
const requireText = (value, fieldName) => {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`"${fieldName}" must be a non-empty string.`);
  }

  return value.trim();
};

const wmoToCondition = (code) => {
  if (code === 0) return "clear sky";
  if (code <= 3) return "partly cloudy";
  if (code <= 49) return "fog";
  if (code <= 59) return "drizzle";
  if (code <= 69) return "rain";
  if (code <= 79) return "snow";
  if (code <= 84) return "rain showers";
  if (code <= 86) return "snow showers";
  if (code <= 99) return "thunderstorm";
  return "unknown";
};

const handlers = {
  async get_weather({ location }) {
    const city = requireText(location, "location");

    // Geocode city name → coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
    );
    const geoData = await geoRes.json();

    if (!geoData.results?.length) {
      return { temp: null, conditions: "unknown", error: `City not found: ${city}` };
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Fetch current weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&wind_speed_unit=kmh`,
    );
    const weatherData = await weatherRes.json();
    const current = weatherData.current;

    return {
      location: `${name}, ${country}`,
      temp: current.temperature_2m,
      unit: "°C",
      conditions: wmoToCondition(current.weather_code),
      wind_speed_kmh: current.wind_speed_10m,
    };
  },

  async send_email({ to, subject, body }) {
    const recipient = requireText(to, "to");
    const emailSubject = requireText(subject, "subject");
    const emailBody = requireText(body, "body");

    // Save the email as a .eml file in the mails/ directory (no API key required).
    // .eml is standard RFC 2822 — open it with any email client (Thunderbird, etc.).
    const { writeFileSync, mkdirSync } = await import("node:fs");
    const { resolve } = await import("node:path");
    const { fileURLToPath } = await import("node:url");

    const dir = resolve(fileURLToPath(import.meta.url), "../mails");
    mkdirSync(dir, { recursive: true });

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${timestamp}_${recipient.replace(/[^a-z0-9]/gi, "_")}.eml`;
    const filepath = resolve(dir, filename);

    const date = new Date().toUTCString();
    const eml = [
      `Date: ${date}`,
      `From: noreply@localhost`,
      `To: ${recipient}`,
      `Subject: ${emailSubject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      emailBody,
    ].join("\r\n");

    writeFileSync(filepath, eml, "utf8");

    return { success: true, status: "saved", file: filepath, to: recipient, subject: emailSubject };
  },
};

/* Step 3: Send messages + tool definitions to the Responses API */
const requestResponse = async (input) => {
  const body = buildResponsesRequest({
    model,
    input,
    tools,
    webSearch,
  });

  const response = await fetch(RESPONSES_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AI_API_KEY}`,
      ...EXTRA_API_HEADERS,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message ?? `Request failed (${response.status})`);
  return data;
};

const MAX_TOOL_STEPS = 5;

/*
  Step 4: Run the tool-calling workflow.

  This is not a full autonomous agent.
  It is a small tool-using workflow:

  USER question → model response → optional tool call → tool result → model response

  If the model asks for tools, we execute them and continue.
  If the model answers normally, we return that final text.
*/
const chat = async (conversation) => {
  let currentConversation = conversation;
  let stepsRemaining = MAX_TOOL_STEPS;

  while (stepsRemaining > 0) {
    stepsRemaining -= 1;

    const response = await requestResponse(currentConversation);
    const toolCalls = getToolCalls(response);

    if (toolCalls.length === 0) {
      return getFinalText(response);
    }

    currentConversation = await buildNextConversation(currentConversation, toolCalls, handlers);
  }

  throw new Error(`Tool calling did not finish within ${MAX_TOOL_STEPS} steps.`);
};

const query = "Use web search to check the current weather in London. Then send a short email with the answer to bpastuchewicz@gmail.com.";
logQuestion(query);

const answer = await chat([{ role: "user", content: query }]);
logAnswer(answer);
