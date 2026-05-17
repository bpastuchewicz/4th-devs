import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, extname, join, normalize } from "node:path";
import { run } from "../agent";
import { LazySandbox } from "../sandbox/client";
import { rebuildGrove } from "../tools/rebuild-grove";
import { VAULT_DIR } from "../sandbox/client";

type Mode = "author" | "theme";

interface CandidateBook {
  title: string;
  author: string;
  year?: number;
  workKey?: string;
  sourceDescription?: string;
  subjects?: string[];
  onShelf?: boolean;
  source?: "shelf" | "openlibrary";
}

interface ShelfBook {
  title: string;
  author: string;
  description?: string;
  body?: string;
  review?: string;
  date?: string;
  updatedAt?: string;
  slug: string;
}

interface FrontmatterData {
  title?: string;
  author?: string;
  description?: string;
  date?: string;
  publish?: string;
  updated_at?: string;
}

const ROOT = join(import.meta.dir, "../..");
const DIST_DIR = join(ROOT, "dist");
const SHELF_DIR = join(VAULT_DIR, "shelf");
const chatSandbox = new LazySandbox();

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
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

function toAsciiSpaces(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function yamlQuoted(value: string): string {
  return JSON.stringify(value.replace(/\r?\n/g, " ").trim());
}

function firstSentence(text: string): string {
  const cleaned = toAsciiSpaces(text);
  const match = cleaned.match(/^(.{40,220}?[.!?])\s/);
  return match ? match[1] : cleaned.slice(0, 220);
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

function authorSurname(author: string): string {
  const parts = author.trim().split(/\s+/);
  return parts[parts.length - 1] ?? author.trim();
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
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

function makeFilename(title: string, author: string): string {
  const slug = `${slugify(title)}-${slugify(authorSurname(author))}`;
  return `${slug}.md`;
}

async function fetchJson(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "04_01_garden-web/1.0",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }

  return response.json();
}

async function findAuthorKey(author: string): Promise<string | undefined> {
  const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(author)}`;
  const data = await fetchJson(url);
  const docs: any[] = Array.isArray(data.docs) ? data.docs : [];
  if (docs.length === 0) return undefined;

  const normalizedNeedle = normalizeText(author);
  const exact = docs.find((d) => normalizeText(String(d?.name ?? "")) === normalizedNeedle);
  if (exact?.key) return String(exact.key);

  const prefix = docs.find((d) => normalizeText(String(d?.name ?? "")).includes(normalizedNeedle));
  if (prefix?.key) return String(prefix.key);

  return typeof docs[0]?.key === "string" ? docs[0].key : undefined;
}

async function searchAuthors(query: string, limit = 12): Promise<Array<{ key?: string; name: string }>> {
  const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(query)}&limit=${limit}`;
  const data = await fetchJson(url);
  const docs: any[] = Array.isArray(data.docs) ? data.docs : [];

  return docs
    .map((d) => ({
      key: typeof d?.key === "string" ? d.key : undefined,
      name: typeof d?.name === "string" ? d.name.trim() : "",
    }))
    .filter((item) => item.name.length > 0);
}

async function enrichWorkDetails(book: CandidateBook): Promise<CandidateBook> {
  if (!book.workKey) return book;

  try {
    const workPath = book.workKey.startsWith("/works/") ? book.workKey : `/works/${book.workKey}`;
    const data = await fetchJson(`https://openlibrary.org${workPath}.json`);
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

async function getAuthorBooks(author: string, maxItems = 20): Promise<CandidateBook[]> {
  const key = await findAuthorKey(author);
  if (!key) return [];

  const authorPath = key.startsWith("/authors/") ? key : `/authors/${key}`;
  const url = `https://openlibrary.org${authorPath}/works.json?limit=100`;
  const data = await fetchJson(url);
  const entries: any[] = Array.isArray(data.entries) ? data.entries : [];

  const seen = new Set<string>();
  const books: CandidateBook[] = [];

  for (const entry of entries) {
    const title = typeof entry?.title === "string" ? entry.title.trim() : "";
    if (!title || !isLikelyBookTitle(title)) continue;

    const keyNorm = normalizeText(title);
    if (!keyNorm || seen.has(keyNorm)) continue;
    seen.add(keyNorm);

    const yearRaw = entry?.first_publish_date;
    const yearMatch = typeof yearRaw === "string" ? yearRaw.match(/(\d{4})/) : null;
    const year = yearMatch ? Number(yearMatch[1]) : undefined;

    books.push({
      title,
      author,
      year,
      workKey: typeof entry?.key === "string" ? entry.key : undefined,
      sourceDescription: parseOpenLibraryDescription(entry?.description),
      subjects: parseStringArray(entry?.subject),
    });
  }

  const enriched: CandidateBook[] = [];
  for (const item of books.slice(0, maxItems)) {
    enriched.push(await enrichWorkDetails(item));
  }
  return enriched;
}

async function getThemeBooks(theme: string, maxItems = 20): Promise<CandidateBook[]> {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(theme)}&limit=60`;
  const data = await fetchJson(url);
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
      subjects: parseStringArray(doc?.subject),
    });
  }

  const enriched: CandidateBook[] = [];
  for (const item of books.slice(0, maxItems)) {
    enriched.push(await enrichWorkDetails(item));
  }
  return enriched;
}

async function existingShelfKeys(): Promise<Set<string>> {
  await mkdir(SHELF_DIR, { recursive: true });
  const entries = await readdir(SHELF_DIR, { withFileTypes: true });
  const keys = new Set<string>();

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "index.md") continue;

    const filePath = join(SHELF_DIR, entry.name);
    const raw = await readFile(filePath, "utf-8");
    const title = raw.match(/^title:\s*(.+)$/m)?.[1]?.trim();
    const author = raw.match(/^author:\s*(.+)$/m)?.[1]?.trim();

    if (title && author) {
      keys.add(`${normalizeText(title)}|${normalizeText(author)}`);
    }

    keys.add(entry.name.replace(/\.md$/, ""));
  }

  return keys;
}

async function loadShelfBooks(): Promise<ShelfBook[]> {
  await mkdir(SHELF_DIR, { recursive: true });
  const entries = await readdir(SHELF_DIR, { withFileTypes: true });
  const books: ShelfBook[] = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "index.md") continue;

    const filePath = join(SHELF_DIR, entry.name);
    const raw = await readFile(filePath, "utf-8");
    const title = raw.match(/^title:\s*(.+)$/m)?.[1]?.trim();
    const author = raw.match(/^author:\s*(.+)$/m)?.[1]?.trim();
    const description = raw.match(/^description:\s*(.+)$/m)?.[1]?.trim();
    const date = raw.match(/^date:\s*(.+)$/m)?.[1]?.trim();
    const updatedAt = raw.match(/^updated_at:\s*(.+)$/m)?.[1]?.trim();
    const bodyPart = raw.replace(/^---[\s\S]*?---\s*/m, "").trim();
    const review = bodyPart.match(/##\s+Recenzja\s*\n([\s\S]*)$/m)?.[1]?.trim();
    const body = review
      ? bodyPart.replace(/##\s+Recenzja\s*\n([\s\S]*)$/m, "").trim()
      : bodyPart;

    if (!title || !author) continue;
    books.push({
      title,
      author,
      description,
      body,
      review,
      date,
      updatedAt,
      slug: entry.name.replace(/\.md$/, ""),
    });
  }

  return books;
}

async function removeAuthorFromShelf(authorName: string): Promise<{ deleted: string[] }> {
  await mkdir(SHELF_DIR, { recursive: true });
  const entries = await readdir(SHELF_DIR, { withFileTypes: true });
  const normalizedTarget = normalizeText(authorName);
  const deleted: string[] = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "index.md") continue;

    const filePath = join(SHELF_DIR, entry.name);
    const raw = await readFile(filePath, "utf-8");
    const author = raw.match(/^author:\s*(.+)$/m)?.[1]?.trim();
    if (!author) continue;

    if (normalizeText(author) !== normalizedTarget) continue;

    await rm(filePath, { force: true });
    deleted.push(entry.name);
  }

  return { deleted };
}

function parseFrontmatter(raw: string): { data: FrontmatterData; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { data: {}, body: raw.trim() };
  }

  const data: FrontmatterData = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key === "title") data.title = value;
    if (key === "author") data.author = value;
    if (key === "description") data.description = value;
    if (key === "date") data.date = value;
    if (key === "publish") data.publish = value;
    if (key === "updated_at") data.updated_at = value;
  }

  const body = raw.slice(match[0].length).trim();
  return { data, body };
}

function extractSection(text: string, heading: string): string {
  const re = new RegExp(
    `(?:^|\\n)##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+[^\\n]+\\s*\\n|$)`,
    "i",
  );
  const match = text.match(re);
  return match?.[1]?.trim() ?? "";
}

function removeSection(text: string, heading: string): string {
  const re = new RegExp(
    `(?:^|\\n)##\\s+${heading}\\s*\\n[\\s\\S]*?(?=\\n##\\s+[^\\n]+\\s*\\n|$)`,
    "gi",
  );
  return text.replace(re, "\n").trim();
}

function parseJsonObjectFromText(text: string): Record<string, unknown> | null {
  const trimmed = text.trim();
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    try {
      return JSON.parse(trimmed) as Record<string, unknown>;
    } catch {
      return null;
    }
  }

  const match = trimmed.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]) as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function generateShelfContentViaChat(slug: string): Promise<{
  description: string;
  body: string;
  review: string;
  rawReply: string;
}> {
  const books = await loadShelfBooks();
  const book = books.find((item) => item.slug === slug);
  if (!book) {
    throw new Error("Book not found");
  }

  const prompt = [
    "Wygeneruj lepszy, konkretny opis książki do wpisu shelf.",
    "Skup się na możliwej treści powieści, stylu, motywach, nawiązaniach i kontekście autora.",
    "Jeśli brakuje danych, napisz to ostrożnie i bez zmyślania faktów.",
    "Zwróć WYŁĄCZNIE JSON bez markdownu i komentarza.",
    'Format JSON: {"description":"...","body":"...","review":"..."}',
    `title: ${book.title}`,
    `author: ${book.author}`,
    `current_description: ${book.description ?? ""}`,
    `current_body: ${book.body ?? ""}`,
    `current_review: ${book.review ?? ""}`,
  ].join("\n");

  await chatSandbox.syncLocalVaultNow();
  const result = await run(prompt, { sandbox: chatSandbox });
  const parsed = parseJsonObjectFromText(result.text);
  if (!parsed) {
    throw new Error("Chat did not return valid JSON payload");
  }

  const description = typeof parsed.description === "string" ? parsed.description.trim() : "";
  const body = typeof parsed.body === "string" ? parsed.body.trim() : "";
  const review = typeof parsed.review === "string" ? parsed.review.trim() : "";

  if (!description || !body) {
    throw new Error("Generated content is incomplete");
  }

  return {
    description,
    body,
    review,
    rawReply: result.text,
  };
}

async function updateShelfBookBySlug(
  slug: string,
  updates: { description?: string; body?: string; review?: string; source?: string; note?: string },
): Promise<{ path: string }> {
  const safeSlug = slug.replace(/[^a-z0-9\-_]/gi, "");
  if (!safeSlug) {
    throw new Error("Invalid slug");
  }

  const filePath = join(SHELF_DIR, `${safeSlug}.md`);
  const raw = await readFile(filePath, "utf-8");
  const { data, body } = parseFrontmatter(raw);

  const currentReview = extractSection(body, "Recenzja");
  const currentHistory = extractSection(body, "Historia zmian");
  const withoutReview = removeSection(body, "Recenzja");
  const currentBody = removeSection(withoutReview, "Historia zmian");

  const nextDescription = (updates.description ?? data.description ?? "").trim();
  const nextBody = (updates.body ?? currentBody).trim();
  const nextReview = (updates.review ?? currentReview).trim();

  const title = data.title?.trim() ?? safeSlug;
  const author = data.author?.trim() ?? "Autor nieznany";
  const date = data.date?.trim() ?? today();
  const publish = data.publish?.trim() ?? "true";
  const updatedAt = new Date().toISOString();

  const changed: string[] = [];
  if (nextDescription !== (data.description ?? "").trim()) changed.push("description");
  if (nextBody !== currentBody) changed.push("body");
  if (nextReview !== currentReview) changed.push("review");
  const source = (updates.source ?? "manual").trim() || "manual";
  const note = (updates.note ?? "").trim();
  const summary = changed.length > 0 ? changed.join(", ") : "metadata";
  const notePart = note ? ` (${note})` : "";
  const historyEntry = `- ${updatedAt} [${source}] updated: ${summary}${notePart}`;
  const historyLines = [historyEntry, ...currentHistory.split("\n").filter((line) => line.trim().startsWith("- "))]
    .slice(0, 25)
    .join("\n");

  let bodyBlock = `${nextBody}\n`;
  if (nextReview) {
    bodyBlock += `\n## Recenzja\n\n${nextReview}\n`;
  }
  bodyBlock += `\n## Historia zmian\n\n${historyLines}\n`;

  const rewritten =
    `---\n` +
    `title: ${yamlQuoted(title)}\n` +
    `author: ${yamlQuoted(author)}\n` +
    `description: ${yamlQuoted(nextDescription)}\n` +
    `date: ${date}\n` +
    `updated_at: ${updatedAt}\n` +
    `publish: ${publish}\n` +
    `---\n\n` +
    bodyBlock;

  await writeFile(filePath, rewritten, "utf-8");
  return { path: `vault/shelf/${safeSlug}.md` };
}

async function findShelfBooksByAuthor(author: string, maxItems = 30): Promise<CandidateBook[]> {
  const needle = normalizeText(author);
  const books = await loadShelfBooks();

  return books
    .filter((book) => normalizeText(book.author).includes(needle))
    .slice(0, maxItems)
    .map((book) => ({
      title: book.title,
      author: book.author,
      sourceDescription: book.description,
      onShelf: true,
      source: "shelf",
    }));
}

async function availableShelfAuthors(limit = 24): Promise<Array<{ name: string; count: number }>> {
  const books = await loadShelfBooks();
  const counts = new Map<string, number>();

  for (const book of books) {
    counts.set(book.author, (counts.get(book.author) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([nameA], [nameB]) => nameA.localeCompare(nameB, "pl"))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

function buildContent(book: CandidateBook, mode: Mode, theme?: string): { description: string; body: string; review: string } {
  const baseDescription = book.sourceDescription ? firstSentence(book.sourceDescription) : `Powieść ${book.author}.`;
  const subjects = (book.subjects ?? []).slice(0, 5);
  const subjectsText = subjects.length > 0 ? ` Motywy: ${subjects.map((s) => s.toLowerCase()).join(", ")}.` : "";
  const yearText = book.year ? ` Pierwsze wydanie: ok. ${book.year}.` : "";

  const body =
    mode === "theme"
      ? `${book.title} wpisuje się w temat "${theme ?? "temat"}". ${baseDescription}${yearText}${subjectsText}`
      : `${book.title} to książka ${book.author}. ${baseDescription}${yearText}${subjectsText}`;

  const review =
    mode === "theme"
      ? `${book.title} może być mocnym punktem listy tematycznej, bo łączy warstwę fabularną z kontekstem problemowym.${subjectsText}`
      : `${book.title} rozszerza obraz twórczości ${book.author} i daje dobry kontekst do porównań z innymi tytułami autora.${subjectsText}`;

  return {
    description: baseDescription,
    body,
    review,
  };
}

async function writeBookToShelf(book: CandidateBook, mode: Mode, theme?: string): Promise<string> {
  const filename = makeFilename(book.title, book.author);
  const filePath = join(SHELF_DIR, filename);
  const { description, body, review } = buildContent(book, mode, theme);

  const content =
    `---\n` +
    `title: ${yamlQuoted(book.title)}\n` +
    `author: ${yamlQuoted(book.author)}\n` +
    `description: ${yamlQuoted(description)}\n` +
    `date: ${today()}\n` +
    `publish: true\n` +
    `---\n\n` +
    `${body}\n\n` +
    `## Recenzja\n\n${review}\n`;

  await mkdir(SHELF_DIR, { recursive: true });
  await writeFile(filePath, content, "utf-8");
  return `vault/shelf/${filename}`;
}

function allowedStatic(pathname: string): string {
  const decoded = decodeURIComponent(pathname);
  const clean = normalize(decoded).replace(/^\/+/, "");
  if (clean.startsWith("..")) return "index.html";

  if (!clean || clean === ".") return "index.html";
  if (clean.endsWith(".html") || extname(clean)) return clean;
  return `${clean}.html`;
}

function contentType(fileName: string): string {
  const ext = extname(fileName).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".js") return "application/javascript; charset=utf-8";
  if (ext === ".json") return "application/json; charset=utf-8";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".png") return "image/png";
  return "application/octet-stream";
}

await rebuildGrove();

const server = Bun.serve({
  port: Number(process.env.PORT ?? 4173),
  idleTimeout: 180,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const message = typeof body.message === "string" ? body.message.trim() : "";
        if (!message) {
          return json({ error: "message is required" }, 400);
        }

        await chatSandbox.syncLocalVaultNow();
        const result = await run(message, { sandbox: chatSandbox });
        await chatSandbox.syncVaultBackNow();

        return json({
          reply: result.text,
          turns: result.turns,
          totalTokens: result.totalTokens,
        });
      } catch (error) {
        await chatSandbox.syncVaultBackNow();
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/chat/stream" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const message = typeof body.message === "string" ? body.message.trim() : "";
        if (!message) {
          return json({ error: "message is required" }, 400);
        }

        const stream = new ReadableStream({
          start(controller) {
            const send = (event: string, data: Record<string, unknown>) => {
              controller.enqueue(`${JSON.stringify({ event, ...data })}\n`);
            };
            const heartbeat = setInterval(() => {
              send("keepalive", { ts: Date.now() });
            }, 3000);

            void (async () => {
              try {
                send("status", { text: "Synchronizacja lokalnych plików..." });
                send("progress", { value: 10 });
                await chatSandbox.syncLocalVaultNow();

                send("status", { text: "Uruchamiam agenta..." });
                send("progress", { value: 35 });
                await sleep(120);

                const result = await run(message, { sandbox: chatSandbox });

                send("status", { text: "Zapisuję zmiany i przebudowuję widok..." });
                send("progress", { value: 80 });
                await chatSandbox.syncVaultBackNow();

                send("done", {
                  reply: result.text,
                  turns: result.turns,
                  totalTokens: result.totalTokens,
                  refresh: true,
                });
                send("progress", { value: 100 });
              } catch (error) {
                await chatSandbox.syncVaultBackNow();
                send("error", { text: error instanceof Error ? error.message : String(error) });
              } finally {
                clearInterval(heartbeat);
                controller.close();
              }
            })();
          },
        });

        return new Response(stream, {
          headers: {
            "content-type": "application/x-ndjson; charset=utf-8",
            "cache-control": "no-store",
          },
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/authors/search") {
      const q = (url.searchParams.get("q") ?? "").trim();

      try {
        if (!q) {
          const items = await availableShelfAuthors(30);
          return json({ items });
        }

        const local = await availableShelfAuthors(120);
        const localMap = new Map(local.map((item) => [normalizeText(item.name), item]));
        const localMatches = local.filter((item) => normalizeText(item.name).includes(normalizeText(q)));
        const remote = await searchAuthors(q, 14);

        const merged = [
          ...localMatches.map((item) => ({ ...item, source: "shelf" as const })),
          ...remote
            .filter((item) => !localMap.has(normalizeText(item.name)))
            .map((item) => ({ ...item, source: "openlibrary" as const })),
        ].slice(0, 24);

        const items = merged.map((item) => ({
          ...item,
          count: "count" in item && typeof item.count === "number" ? item.count : 0,
        }));
        return json({ items });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/authors/remove" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const author = typeof body.author === "string" ? body.author.trim() : "";
        if (!author) {
          return json({ error: "author is required" }, 400);
        }

        const result = await removeAuthorFromShelf(author);
        const build = await rebuildGrove();
        return json({
          author,
          deleted: result.deleted,
          deletedCount: result.deleted.length,
          build: build.output,
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/shelf/list") {
      const author = (url.searchParams.get("author") ?? "").trim();
      const max = Math.min(80, Math.max(1, Number(url.searchParams.get("max_items") ?? "40")));
      try {
        const books = await loadShelfBooks();
        const filtered = books
          .filter((book) => !author || normalizeText(book.author).includes(normalizeText(author)));

        const items = author
          ? filtered
            .sort((a, b) => a.author.localeCompare(b.author, "pl") || a.title.localeCompare(b.title, "pl"))
            .slice(0, max)
          : filtered
            .sort((a, b) => {
              const timeA = Date.parse(a.updatedAt || a.date || "") || 0;
              const timeB = Date.parse(b.updatedAt || b.date || "") || 0;
              if (timeA !== timeB) return timeB - timeA;
              return a.title.localeCompare(b.title, "pl");
            })
            .slice(0, max);
        return json({ items });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/shelf/update" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const slug = typeof body.slug === "string" ? body.slug.trim() : "";
        if (!slug) {
          return json({ error: "slug is required" }, 400);
        }

        const description = typeof body.description === "string" ? body.description : undefined;
        const contentBody = typeof body.body === "string" ? body.body : undefined;
        const review = typeof body.review === "string" ? body.review : undefined;
        const source = typeof body.source === "string" ? body.source : undefined;
        const note = typeof body.note === "string" ? body.note : undefined;

        const updated = await updateShelfBookBySlug(slug, {
          description,
          body: contentBody,
          review,
          source,
          note,
        });
        const build = await rebuildGrove();

        return json({
          message: `Zaktualizowano ${updated.path}`,
          path: updated.path,
          build: build.output,
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/shelf/generate" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const slug = typeof body.slug === "string" ? body.slug.trim() : "";
        if (!slug) {
          return json({ error: "slug is required" }, 400);
        }

        const generated = await generateShelfContentViaChat(slug);
        return json({
          generated,
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/books/search") {
      const mode = url.searchParams.get("mode") === "theme" ? "theme" : "author";
      const max = Math.min(30, Math.max(1, Number(url.searchParams.get("max_items") ?? "12")));

      try {
        if (mode === "author") {
          const author = (url.searchParams.get("author") ?? "").trim();
          if (!author) return json({ error: "Missing author" }, 400);

          const shelfItems = await findShelfBooksByAuthor(author, max);
          const remoteItems = await getAuthorBooks(author, max);
          const seen = new Set<string>();
          const items = [...shelfItems, ...remoteItems]
            .filter((item) => {
              const key = `${normalizeText(item.title)}|${normalizeText(item.author)}`;
              if (seen.has(key)) return false;
              seen.add(key);
              return true;
            })
            .slice(0, max);
          return json({ items });
        }

        const theme = (url.searchParams.get("theme") ?? "").trim();
        if (!theme) return json({ error: "Missing theme" }, 400);

        const items = await getThemeBooks(theme, max);
        return json({ items });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/books/add" && request.method === "POST") {
      try {
        const body = (await request.json()) as Record<string, unknown>;
        const title = typeof body.title === "string" ? body.title.trim() : "";
        const author = typeof body.author === "string" ? body.author.trim() : "";

        if (!title || !author) {
          return json({ error: "title and author are required" }, 400);
        }

        const candidate: CandidateBook = {
          title,
          author,
          sourceDescription: typeof body.description === "string" ? body.description.trim() : undefined,
          subjects: [],
        };

        const path = await writeBookToShelf(candidate, "author");
        const build = await rebuildGrove();

        return json({
          message: `Dodano ${path}. ${build.ok ? "Frontend przebudowany." : `Build warning: ${build.output}`}`,
          path,
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    if (url.pathname === "/api/books/add-batch" && request.method === "POST") {
      try {
        const payload = (await request.json()) as {
          items?: CandidateBook[];
          mode?: Mode;
          theme?: string;
        };

        const mode: Mode = payload.mode === "theme" ? "theme" : "author";
        const theme = typeof payload.theme === "string" ? payload.theme : undefined;
        const items = Array.isArray(payload.items) ? payload.items : [];

        if (items.length === 0) {
          return json({ error: "items array is required" }, 400);
        }

        const existing = await existingShelfKeys();
        const created: string[] = [];

        for (const item of items) {
          const title = typeof item.title === "string" ? item.title.trim() : "";
          const author = typeof item.author === "string" ? item.author.trim() : "";
          if (!title || !author) continue;

          const key = `${normalizeText(title)}|${normalizeText(author)}`;
          const slug = makeFilename(title, author).replace(/\.md$/, "");
          if (existing.has(key) || existing.has(slug)) continue;

          const enriched = await enrichWorkDetails({
            title,
            author,
            year: item.year,
            workKey: item.workKey,
            sourceDescription: item.sourceDescription,
            subjects: item.subjects,
          });

          const path = await writeBookToShelf(enriched, mode, theme);
          existing.add(key);
          existing.add(slug);
          created.push(path);
        }

        const build = await rebuildGrove();

        return json({
          message:
            created.length === 0
              ? "Brak nowych pozycji do dodania."
              : `Dodano ${created.length} pozycji i przebudowano frontend.`,
          created,
          build: build.output,
        });
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, 500);
      }
    }

    const relativePath = allowedStatic(url.pathname);
    const fullPath = join(DIST_DIR, relativePath);
    const file = Bun.file(fullPath);
    if (await file.exists()) {
      return new Response(file, {
        headers: {
          "content-type": contentType(basename(fullPath)),
        },
      });
    }

    const fallback = Bun.file(join(DIST_DIR, "index.html"));
    if (await fallback.exists()) {
      return new Response(fallback, {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`web: http://localhost:${server.port}`);
