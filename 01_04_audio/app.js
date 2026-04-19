import { createMcpClient, listMcpTools } from "./src/mcp/client.js";
import { nativeTools, printBackendStatus } from "./src/native/tools.js";
import { createReadline, runRepl } from "./src/repl.js";
import { onShutdown } from "./src/helpers/shutdown.js";
import { logStats } from "./src/helpers/stats.js";
import log from "./src/helpers/logger.js";

const EXAMPLES = [
  "Transkrybuj plik z workspace/input/",
  "Wygeneruj audio po polsku: Witaj w naszym produkcie",
  "Transcribe workspace/input/recording.mp3 to English",
  "What topics are discussed in workspace/input/briefing.wav?",
];

const printExamples = () => {
  log.heading("EXAMPLES", "For demo purposes, try these queries:");
  EXAMPLES.forEach(e => log.example(e));
  log.hint("Type 'exit' to quit, 'clear' to reset conversation");
};

const main = async () => {
  log.box("Audio Processing Agent");

  log.heading("TOOLS");
  for (const t of nativeTools) {
    log.info(`${t.name.padEnd(18)} — ${t.description.split(".")[0]}`);
  }

  log.heading("BACKENDS");
  await printBackendStatus();

  log.start("Connecting to MCP server...");
  const mcpClient = await createMcpClient();
  const mcpTools = await listMcpTools(mcpClient);
  log.success(`MCP: ${mcpTools.map(t => t.name).join(", ")}`);

  printExamples();

  const rl = createReadline();
  const shutdown = onShutdown(() => { logStats(); rl.close(); mcpClient.close(); });

  await runRepl({ mcpClient, mcpTools, rl });
  await shutdown();
};

main().catch((err) => {
  log.error("Startup error", err.message);
  process.exit(1);
});
