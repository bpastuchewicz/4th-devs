/**
 * Native tools for the agent.
 * Provides a single hybrid search tool over the indexed document database.
 * Search results are automatically saved to the workspace via MCP files server.
 */

import { hybridSearch } from "../db/search.js";
import { callMcpTool } from "../mcp/client.js";
import log from "../helpers/logger.js";

const SEARCH_TOOL = {
  type: "function",
  name: "search",
  description:
    "Search the indexed knowledge base using hybrid search (full-text BM25 + semantic vector similarity). " +
    "Returns the most relevant document chunks with content, source file, and section heading. " +
    "Provide BOTH a keyword query for full-text search AND a natural language query for semantic search.",
  parameters: {
    type: "object",
    properties: {
      keywords: {
        type: "string",
        description:
          "Keywords for full-text search (BM25) — specific terms, names, and phrases that should appear in the text",
      },
      semantic: {
        type: "string",
        description:
          "Natural language query for semantic/vector search — a question or description of the concept you're looking for",
      },
      limit: {
        type: "number",
        description: "Maximum number of results to return (default 5, max 20)",
      },
    },
    required: ["keywords", "semantic"],
  },
  strict: false,
};

/**
 * Creates the tool interface consumed by the agent.
 *
 * @param {import("better-sqlite3").Database} db
 * @param {import("@modelcontextprotocol/sdk/client/index.js").Client} mcpClient
 * @returns {{ definitions: object[], handle: (name: string, args: object) => Promise<any> }}
 */
export const createTools = (db, mcpClient) => {
  const handlers = {
    search: async ({ keywords, semantic, limit = 5 }) => {
      const results = await hybridSearch(db, { keywords, semantic }, Math.min(limit, 20));

      const mapped = results.map((r) => ({
        source: r.source,
        section: r.section,
        content: r.content,
      }));

      // Auto-save results to workspace via MCP files
      if (mcpClient && mapped.length > 0) {
        try {
          const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
          const slug = keywords.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
          const filePath = `results/${timestamp}_${slug}.md`;

          const lines = [
            `# Search results: ${keywords}`,
            ``,
            `**Query:** ${keywords}  `,
            `**Semantic:** ${semantic}  `,
            `**Date:** ${new Date().toISOString()}`,
            ``,
            ...mapped.map((r, i) =>
              [
                `## ${i + 1}. ${r.section || r.source}`,
                ``,
                `**Source:** \`${r.source}\`  `,
                `**Section:** ${r.section}`,
                ``,
                r.content,
                ``,
                `---`,
                ``,
              ].join("\n")
            ),
          ];

          await callMcpTool(mcpClient, "fs_write", {
            path: filePath,
            operation: "create",
            content: lines.join("\n"),
          });

          log.success(`Results saved → ${filePath}`);
        } catch (err) {
          log.warn?.(`Could not save results: ${err.message}`) ?? log.info(`⚠ Could not save results: ${err.message}`);
        }
      }

      return mapped;
    },
  };

  return {
    definitions: [SEARCH_TOOL],

    handle: async (name, args) => {
      const handler = handlers[name];
      if (!handler) throw new Error(`Unknown tool: ${name}`);

      log.tool(name, args);

      try {
        const result = await handler(args);
        const output = JSON.stringify(result);
        log.toolResult(name, true, output);
        return output;
      } catch (error) {
        const output = JSON.stringify({ error: error.message });
        log.toolResult(name, false, error.message);
        return output;
      }
    },
  };
};
