import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Tool, ToolContext } from "../types";
import { VAULT_DIR } from "../sandbox/client";
import { rebuildGrove } from "./rebuild-grove";

type Mode = "author" | "theme";

interface CandidateBook {
  title: string;
  author: string;
  year?: number;
  workKey?: string;
  sourceDescription?: string;
  subjects?: string[];
}

function capitalizeFirst(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function toAsciiSpaces(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function firstSentence(text: string): string {
  const cleaned = toAsciiSpaces(text);
  const match = cleaned.match(/^(.{40,220}?[.!?])\s/);
  return match ? match[1] : cleaned.slice(0, 220);
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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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
  const blocked = [
    "audiobook",
    "audiobooki",
    "pakiet",
    "box",
    "collector",
    "mp3",
    "cd",
    "ebook",
    "e book",
    "polish edition",
    "special edition",
  ];

  return !blocked.some((token) => normalized.includes(token));
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function authorSurname(author: string): string {
  const parts = author.trim().split(/\s+/);
  return parts[parts.length - 1] ?? author.trim();
}

function makeFilename(title: string, author: string): string {
  const slug = `${slugify(title)}-${slugify(authorSurname(author))}`;
  return `${slug}.md`;
}

function yamlQuoted(value: string): string {
  return JSON.stringify(value.replace(/\r?\n/g, " ").trim());
}

function parseFrontmatter(raw: string): { title?: string; author?: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const lines = match[1].split("\n");
  const result: { title?: string; author?: string } = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key === "title") result.title = value;
    if (key === "author") result.author = value;
  }
  return result;
}

function buildDescription(book: CandidateBook, mode: Mode, theme: string | undefined): string {
  if (book.sourceDescription) {
    return firstSentence(book.sourceDescription);
  }

  if (mode === "theme") {
    return `Książka związana z tematem: ${theme ?? "wybrany temat"}.`;
  }

  if (book.year) {
    return `Powieść ${book.author} (wyd. ${book.year}).`;
  }
  return `Powieść ${book.author}.`;
}

function buildBody(book: CandidateBook, mode: Mode, theme: string | undefined): string {
  const yearText = book.year ? ` Pierwsze wydanie ukazało się około ${book.year} roku.` : "";
  const subjects = (book.subjects ?? []).slice(0, 4);
  const subjectsText =
    subjects.length > 0
      ? ` Wśród motywów pojawiają się: ${subjects.map((s) => s.toLowerCase()).join(", ")}.`
      : "";

  if (book.sourceDescription) {
    const sentence = firstSentence(book.sourceDescription);
    if (mode === "theme") {
      return `${book.title} autorstwa ${book.author} została dobrana do tematu "${theme ?? "temat"}". ${sentence}${yearText}${subjectsText}`;
    }

    return `${book.title} to powieść ${book.author}. ${sentence}${yearText}${subjectsText}`;
  }

  if (mode === "theme") {
    return `${book.title} autorstwa ${book.author} została dobrana do półki w ramach wyszukiwania tematycznego (${theme ?? "temat"}).${yearText}${subjectsText}`;
  }

  return `${book.title} to jedna z książek ${book.author}, którą warto mieć w shelf przy przeglądzie twórczości autora.${yearText}${subjectsText}`;
}

function buildReview(book: CandidateBook, mode: Mode, theme: string | undefined): string {
  const subjects = (book.subjects ?? []).slice(0, 5);
  const perspective =
    subjects.length > 0
      ? ` Na pierwszy plan wysuwają się tu wątki: ${subjects.map((s) => s.toLowerCase()).join(", ")}.`
      : "";

  if (mode === "theme") {
    return `${book.title} dobrze wpisuje się w temat "${theme ?? "wybrany temat"}", ponieważ łączy wyraźny rys literacki z motywami istotnymi dla tego obszaru.${perspective} Warto zestawić ją z innymi tytułami z listy, żeby zobaczyć różnice perspektywy i języka.`;
  }

  return `${book.title} to wartościowe uzupełnienie bibliografii ${book.author}.${perspective} Dobrze pokazuje etap twórczości autora i może być punktem wyjścia do dalszej, własnej interpretacji.`;
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

function shQuote(value: string): string {
  return `'${value.replace(/'/g, `"'"'`)}'`;
}

async function fetchJsonInSandbox(url: string, context: ToolContext): Promise<any> {
  const sandbox = await context.sandbox.get();
  const command = `curl -fsSL --connect-timeout 8 --max-time 20 ${shQuote(url)}`;
  const result = await sandbox.process.executeCommand(command);

  if (result.exitCode !== 0) {
    throw new Error(result.result || `curl exited with code ${result.exitCode}`);
  }

  try {
    return JSON.parse(result.result);
  } catch {
    throw new Error("Invalid JSON response from remote API");
  }
}

async function findAuthorKey(author: string, context: ToolContext): Promise<string | undefined> {
  const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(author)}`;
  const data = await fetchJsonInSandbox(url, context);
  const docs: any[] = Array.isArray(data.docs) ? data.docs : [];
  if (docs.length === 0) return undefined;

  const normalizedNeedle = normalizeText(author);
  const exact = docs.find((d) => normalizeText(String(d?.name ?? "")) === normalizedNeedle);
  if (exact?.key) return String(exact.key);

  const prefix = docs.find((d) => normalizeText(String(d?.name ?? "")).includes(normalizedNeedle));
  if (prefix?.key) return String(prefix.key);

  return typeof docs[0]?.key === "string" ? docs[0].key : undefined;
}

async function getAuthorBooks(author: string, context: ToolContext): Promise<CandidateBook[]> {
  const key = await findAuthorKey(author, context);
  if (!key) return [];

  const authorPath = key.startsWith("/authors/") ? key : `/authors/${key}`;
  const url = `https://openlibrary.org${authorPath}/works.json?limit=100`;
  const data = await fetchJsonInSandbox(url, context);
  const entries: any[] = Array.isArray(data.entries) ? data.entries : [];

  const seen = new Set<string>();
  const books: CandidateBook[] = [];

  for (const entry of entries) {
    const title = typeof entry?.title === "string" ? entry.title.trim() : "";
    if (!title) continue;
    if (!isLikelyBookTitle(title)) continue;

    const keyNorm = normalizeText(title);
    if (!keyNorm || seen.has(keyNorm)) continue;
    seen.add(keyNorm);

    const yearRaw = entry?.first_publish_date;
    const yearMatch = typeof yearRaw === "string" ? yearRaw.match(/(\d{4})/) : null;
    const year = yearMatch ? Number(yearMatch[1]) : undefined;

    const workKey = typeof entry?.key === "string" ? entry.key : undefined;
    const sourceDescription = parseOpenLibraryDescription(entry?.description);
    const subjects = parseStringArray(entry?.subject);

    books.push({ title, author, year, workKey, sourceDescription, subjects });
  }

  return books;
}

async function getThemeBooks(theme: string, context: ToolContext): Promise<CandidateBook[]> {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(theme)}&limit=50`;
  const data = await fetchJsonInSandbox(url, context);
  const docs: any[] = Array.isArray(data.docs) ? data.docs : [];

  const seen = new Set<string>();
  const books: CandidateBook[] = [];

  for (const doc of docs) {
    const title = typeof doc?.title === "string" ? doc.title.trim() : "";
    const author = Array.isArray(doc?.author_name) && typeof doc.author_name[0] === "string"
      ? doc.author_name[0].trim()
      : "Autor nieznany";

    if (!title) continue;
    if (!isLikelyBookTitle(title)) continue;
    const keyNorm = `${normalizeText(title)}|${normalizeText(author)}`;
    if (!keyNorm || seen.has(keyNorm)) continue;
    seen.add(keyNorm);

    const year = typeof doc?.first_publish_year === "number"
      ? doc.first_publish_year
      : undefined;
    const workKey = Array.isArray(doc?.key) ? undefined : typeof doc?.key === "string" ? doc.key : undefined;
    const subjects = parseStringArray(doc?.subject);

    books.push({ title, author, year, workKey, subjects });
  }

  return books;
}

async function existingShelfKeys(shelfDir: string): Promise<Set<string>> {
  const entries = await readdir(shelfDir, { withFileTypes: true });
  const keys = new Set<string>();

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "index.md") continue;

    const filePath = join(shelfDir, entry.name);
    const raw = await readFile(filePath, "utf-8");
    const fm = parseFrontmatter(raw);
    const title = fm.title?.trim();
    const author = fm.author?.trim();

    if (title && author) {
      keys.add(`${normalizeText(title)}|${normalizeText(author)}`);
    }

    const slug = entry.name.replace(/\.md$/, "");
    keys.add(slug);
  }

  return keys;
}

export const addMissingBooksTool: Tool = {
  definition: {
    type: "function",
    name: "add_missing_books",
    description:
      "Automatically search and add missing books to vault/shelf. " +
      "Use mode='author' to add missing books of a given author, or mode='theme' to add thematic books with review.",
    strict: false,
    parameters: {
      type: "object",
      properties: {
        mode: {
          type: "string",
          enum: ["author", "theme"],
          description: "Search mode: 'author' or 'theme'.",
        },
        author: {
          type: "string",
          description: "Author full name. Required for mode='author'.",
        },
        theme: {
          type: "string",
          description: "Theme query. Required for mode='theme'.",
        },
        max_items: {
          type: "number",
          description: "Maximum number of new books to add. Default 8, max 30.",
        },
        with_review: {
          type: "boolean",
          description: "Whether to include long review section. Default true.",
        },
      },
      additionalProperties: false,
    },
  },

  handler: async (args, context) => {
    try {
      const mode: Mode = args.mode === "theme" ? "theme" : "author";
      const author = typeof args.author === "string" ? args.author.trim() : "";
      const theme = typeof args.theme === "string" ? args.theme.trim() : "";
      const maxRaw = typeof args.max_items === "number" ? args.max_items : 8;
      const maxItems = Math.min(30, Math.max(1, Math.floor(maxRaw)));
      const withReview = typeof args.with_review === "boolean" ? args.with_review : true;

      if (mode === "author" && !author) {
        return { ok: false, output: "Error: 'author' is required for mode='author'." };
      }
      if (mode === "theme" && !theme) {
        return { ok: false, output: "Error: 'theme' is required for mode='theme'." };
      }

      const shelfDir = join(VAULT_DIR, "shelf");
      await mkdir(shelfDir, { recursive: true });

      const existing = await existingShelfKeys(shelfDir);

      let candidates: CandidateBook[] = [];
      try {
        candidates = mode === "author"
          ? await getAuthorBooks(author, context)
          : await getThemeBooks(theme, context);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          ok: true,
          output:
            `Sandbox network/API error while searching books: ${message}. ` +
            "Stop retrying this tool until internet in sandbox is available.",
        };
      }

      const missing = candidates.filter((book) => {
        const filename = makeFilename(book.title, book.author).replace(/\.md$/, "");
        const key = `${normalizeText(book.title)}|${normalizeText(book.author)}`;
        return !existing.has(filename) && !existing.has(key);
      });

      const selected = missing.slice(0, maxItems);
      const created: string[] = [];

      for (const selectedBook of selected) {
        const book = await enrichWorkDetails(selectedBook, context);
        const filename = makeFilename(book.title, book.author);
        const filePath = join(shelfDir, filename);
        const description = capitalizeFirst(buildDescription(book, mode, theme || undefined));
        const body = capitalizeFirst(buildBody(book, mode, theme || undefined));
        const review = withReview ? capitalizeFirst(buildReview(book, mode, theme || undefined)) : "";

        const content =
          `---\n` +
          `title: ${yamlQuoted(book.title)}\n` +
          `author: ${yamlQuoted(book.author)}\n` +
          `description: ${yamlQuoted(description)}\n` +
          `date: ${today()}\n` +
          `publish: true\n` +
          `---\n\n` +
          `${body}\n` +
          (review ? `\n## Recenzja\n\n${review}\n` : "");

        await writeFile(filePath, content, "utf-8");
        created.push(`vault/shelf/${filename}`);
      }

      if (created.length === 0) {
        return { ok: true, output: "No missing books found for the given query." };
      }

      const build = await rebuildGrove();
      const buildLine = build.ok
        ? `Build: ${build.output.split("\n").pop() ?? "ok"}`
        : `Build warning: ${build.output}`;

      return {
        ok: true,
        output: `Created ${created.length} files: ${created.join(", ")}. ${buildLine}`,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { ok: false, output: `Error: ${message}` };
    }
  },
};
