import { createMcpClient, callMcpTool } from "../mcp/client.js";

let _client = null;

const getMcpClient = async () => {
  if (!_client) {
    _client = await createMcpClient("symfony-stdio");
  }
  return _client;
};

export const embed = async (texts) => {
  const input = Array.isArray(texts) ? texts : [texts];

  const client = await getMcpClient();

  const results = await Promise.all(
    input.map((text) => callMcpTool(client, "generate_embedding", { text }))
  );

  return results.map((r) => (Array.isArray(r) ? r : r.embedding ?? r));
};
