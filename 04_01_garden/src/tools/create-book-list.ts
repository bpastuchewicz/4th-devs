import type { Tool, ToolContext } from "../types";

interface CandidateBook {
  title: string;
  author: string;
  year?: number;
  workKey?: string;
  sourceDescription?: string;
  subjects?: string[];
}

function toAsciiSpaces(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isLikelyBookTitle(title: string): boolean {
  const normalized = normalizeText(title);
  const blocked = ["audiobook", "pakiet", "box", "mp3", "cd", "ebook", "e book"];
  return !blocked.some((token) => normalized.includes(token));
}

function normalizeListQuery(query: string): string {
  return query
    .replace(/\b(książki|książek|książka|książkę|utwory|dzieła|pozycje)\b/gi, " ")
    .replace(/\b(autora|pisarza|pisarki|o\s+autorze|o\s+autorce|w\s+temacie|na\s+temat)\b/gi, " ")
    .replace(/^[\s,:;-]+|[\s,:;-]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function looksLikeAuthorQuery(query: string): boolean {
  const normalized = normalizeText(query);
  return /\b(autora|pisarza|pisarki|książki|książek|utwory|dzieła)\b/i.test(query) ||
    /^[a-ząćęłńóśźż]+(?:\s+[a-ząćęłńóśźż]+){1,3}$/i.test(normalized);
}

function parseOpenLibraryDescription(value: unknown): string | undefined {
  if (typeof value === "string") {
    const trimmed = toAsciiSpaces(value);
    return trimmed || undefined;
  }

  if (value && typeof value === "object") {
    const nested = (value as { value?: unknown }).value;
    if (typeof nested === "string") {
      const trimmed = toAsciiSpaces(nested);
      return trimmed || undefined;
    }
  }

  return undefined;
}

function parseStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => toAsciiSpaces(item))
    .filter(Boolean);
}

function shQuote(value: string): string {
  return `'${value.replace(/'/g, `"'"'`)}'`;
}

async function fetchJsonInSandbox(url: string, context: ToolContext): Promise<any> {
  const sandbox = await context.sandbox.get();
  const result = await sandbox.process.executeCommand(
    `curl -fsSL --connect-timeout 8 --max-time 20 ${shQuote(url)}`,
  );

  if (result.exitCode !== 0) {
    throw new Error(result.result || `curl exited with code ${result.exitCode}`);
  }

  try {
    return JSON.parse(result.result);
  } catch {
    throw new Error("Invalid JSON response from remote API");
  }
}

async function enrichWorkDetails(book: CandidateBook, context: ToolContext): Promise<CandidateBook> {
  if (!book.workKey) return book;

  try {
    const workPath = book.workKey.startsWith("/works/") ? book.workKey : `/works/${book.workKey}`;
    const data = await fetchJsonInSandbox(`https://openlibrary.org${workPath}.json`, context);
    const description = parseOpenLibraryDescription(data?.description) ?? book.sourceDescription;
    const subjects = parseStringArray(data?.subjects);

    return {
      ...book,
      sourceDescription: description,
      subjects: subjects.length > 0 ? subjects : book.subjects,
    };
  } catch {
    return book;
  }
}

async function searchBooks(query: string, context: ToolContext, maxItems: number): Promise<CandidateBook[]> {
  const normalizedQuery = normalizeListQuery(query);

  if (looksLikeAuthorQuery(query) && normalizedQuery) {
    const authorsResponse = await fetchJsonInSandbox(
      `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(normalizedQuery)}&limit=5`,
      context,
    );
    const authorDocs: any[] = Array.isArray(authorsResponse.docs) ? authorsResponse.docs : [];
    const authorName = typeof authorDocs[0]?.name === "string" ? authorDocs[0].name.trim() : normalizedQuery;

    const key = typeof authorDocs[0]?.key === "string" ? authorDocs[0].key : undefined;
    if (key) {
      const authorPath = key.startsWith("/authors/") ? key : `/authors/${key}`;
      const worksResponse = await fetchJsonInSandbox(
        `https://openlibrary.org${authorPath}/works.json?limit=100`,
        context,
      );
      const entries: any[] = Array.isArray(worksResponse.entries) ? worksResponse.entries : [];

      const seen = new Set<string>();
      const books: CandidateBook[] = [];
      for (const entry of entries) {
        const title = typeof entry?.title === "string" ? entry.title.trim() : "";
        if (!title || !isLikelyBookTitle(title)) continue;

        const keyNorm = normalizeText(title);
        if (!keyNorm || seen.has(keyNorm)) continue;
        seen.add(keyNorm);

        books.push({
          title,
          author: authorName,
          year: typeof entry?.first_publish_date === "string" ? Number((entry.first_publish_date.match(/(\d{4})/) || [])[1]) || undefined : undefined,
          workKey: typeof entry?.key === "string" ? entry.key : undefined,
          sourceDescription: parseOpenLibraryDescription(entry?.description),
          subjects: parseStringArray(entry?.subject),
        });
      }

      const enrichedAuthor: CandidateBook[] = [];
      for (const item of books.slice(0, maxItems)) {
        enrichedAuthor.push(await enrichWorkDetails(item, context));
      }
      if (enrichedAuthor.length > 0) return enrichedAuthor;
    }
  }

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(normalizedQuery || query)}&limit=60`;
  const data = await fetchJsonInSandbox(url, context);
  const docs: any[] = Array.isArray(data.docs) ? data.docs : [];

  const seen = new Set<string>();
  const books: CandidateBook[] = [];

  for (const doc of docs) {
    const title = typeof doc?.title === "string" ? doc.title.trim() : "";
    const author = Array.isArray(doc?.author_name) && typeof doc.author_name[0] === "string"
      ? doc.author_name[0].trim()
      : "Autor nieznany";

    if (!title || !isLikelyBookTitle(title)) continue;
    const keyNorm = `${normalizeText(title)}|${normalizeText(author)}`;
    if (!keyNorm || seen.has(keyNorm)) continue;
    seen.add(keyNorm);

    books.push({
      title,
      author,
      year: typeof doc?.first_publish_year === "number" ? doc.first_publish_year : undefined,
      workKey: typeof doc?.key === "string" ? doc.key : undefined,
      sourceDescription: parseOpenLibraryDescription(doc?.description),
      subjects: parseStringArray(doc?.subject),
    });
  }

  const enriched: CandidateBook[] = [];
  for (const item of books.slice(0, maxItems)) {
    enriched.push(await enrichWorkDetails(item, context));
  }

  return enriched;
}

export const createBookListTool: Tool = {
  definition: {
    type: "function",
    name: "create_book_list",
    description:
      "Create a candidate list of books for a given query without writing files. " +
      "Use this when the user asks for a list of books to review before adding them to the shelf.",
    strict: false,
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query used to build the book list.",
        },
        max_items: {
          type: "number",
          description: "Maximum number of items to return. Default 12, max 30.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },

  handler: async (args, context) => {
    try {
      const query = typeof args.query === "string" ? args.query.trim() : "";
      const maxRaw = typeof args.max_items === "number" ? args.max_items : 12;
      const maxItems = Math.min(30, Math.max(1, Math.floor(maxRaw)));

      if (!query) {
        return { ok: false, output: "Error: 'query' is required." };
      }

      const items = await searchBooks(query, context, maxItems);
      return {
        ok: true,
        output: JSON.stringify({ query, count: items.length, items }, null, 2),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { ok: false, output: `Error: ${message}` };
    }
  },
};