import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { Tool } from "../types";
import { VAULT_DIR } from "../sandbox/client";
import { rebuildGrove } from "./rebuild-grove";
import { enrichBookContent } from "./enrich-book";

interface ShelfItemInput {
  title?: unknown;
  author?: unknown;
  description?: unknown;
  body?: unknown;
  review?: unknown;
  filename?: unknown;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yamlQuoted(value: string): string {
  const cleaned = value.replace(/^"+|"+$/g, "").replace(/\r?\n/g, " ").trim();
  return JSON.stringify(cleaned);
}

export const addToShelfTool: Tool = {
  definition: {
    type: "function",
    name: "add_to_shelf",
    description:
      "Create a new markdown note in vault/shelf/. " +
      "Use this tool whenever the user asks to add a book, tool, or link to the shelf. " +
      "It can also create multiple shelf files in one call via items[]. " +
      "Always call this tool directly — do NOT list the shelf first.",
    strict: false,
    parameters: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Full title of the book, tool, or resource.",
        },
        author: {
          type: "string",
          description: "Author or creator name (optional).",
        },
        description: {
          type: "string",
          description: "One-sentence description for the frontmatter.",
        },
        body: {
          type: "string",
          description:
            "Body text of the note (2-4 sentences). May include web-search enriched content.",
        },
        review: {
          type: "string",
          description:
            "Optional longer review (several paragraphs). Written under a '## Recenzja' heading in the note body.",
        },
        filename: {
          type: "string",
          description:
            "Optional explicit filename without extension (e.g. 'solaris-lem'). " +
            "If omitted, derived from title and author.",
        },
        items: {
          type: "array",
          description:
            "Optional batch mode for adding all books by an author or a themed collection.",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              author: { type: "string" },
              description: { type: "string" },
              body: { type: "string" },
              review: { type: "string" },
              filename: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      additionalProperties: false,
    },
  },

  handler: async (args) => {
    try {
      const batchItems = Array.isArray(args.items) ? (args.items as ShelfItemInput[]) : [];
      const defaultAuthor = typeof args.author === "string" ? args.author.trim() : "";
      const normalizedItems: ShelfItemInput[] = batchItems.length > 0 ? batchItems : [args];

      const created: string[] = [];
      for (const item of normalizedItems) {
        const title = typeof item.title === "string" ? item.title.trim() : "";
        const author = typeof item.author === "string" ? item.author.trim() : defaultAuthor;
        const description =
          typeof item.description === "string" ? item.description.trim() : "";
        const body = typeof item.body === "string" ? item.body.trim() : "";
        const review = typeof item.review === "string" ? item.review.trim() : "";
        const filenameArg =
          typeof item.filename === "string" ? item.filename.trim() : "";

        if (!title) {
          return { ok: false, output: "Error: each shelf item needs title." };
        }

        // Enrich content with AI – enhances or generates description/body/review
        let finalDescription = description;
        let finalBody = body;
        let finalReview = review;
        try {
          const enriched = await enrichBookContent({
            title,
            author,
            currentDescription: description || undefined,
            currentBody: body || undefined,
            currentReview: review || undefined,
          });
          finalDescription = enriched.description;
          finalBody = enriched.body;
          finalReview = enriched.review;
        } catch {
          // fall back to agent-provided content
          if (!finalDescription || !finalBody) {
            return { ok: false, output: "Error: each shelf item needs title, description and body." };
          }
        }

        const slug = filenameArg
          ? filenameArg.replace(/\.md$/, "")
          : author
          ? `${slugify(title)}-${slugify(author.split(" ").pop() ?? author)}`
          : slugify(title);

        const filename = `${slug}.md`;
        const filePath = join(VAULT_DIR, "shelf", filename);
        const authorLine = author ? `author: ${yamlQuoted(author)}\n` : "";

        const content =
          `---\ntitle: ${yamlQuoted(title)}\n${authorLine}description: ${yamlQuoted(finalDescription)}\ndate: ${today()}\npublish: true\n---\n\n${finalBody}\n` +
          (finalReview ? `\n## Recenzja\n\n${finalReview}\n` : "");

        await mkdir(dirname(filePath), { recursive: true });
        await writeFile(filePath, content, "utf-8");
        created.push(`vault/shelf/${filename}`);
      }

      const build = await rebuildGrove();
      const buildLine = build.ok
        ? `Build: ${build.output.split("\n").pop() ?? "ok"}`
        : `Build warning: ${build.output}`;

      return {
        ok: true,
        output:
          created.length === 1
            ? `Created ${created[0]}. ${buildLine}`
            : `Created ${created.length} files: ${created.join(", ")}. ${buildLine}`,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { ok: false, output: `Error: ${message}` };
    }
  },
};
