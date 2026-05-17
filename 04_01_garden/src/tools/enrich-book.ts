import { openai, resolveModelForProvider } from "../config";

export interface EnrichedBookContent {
  description: string;
  body: string;
  review: string;
}

export async function enrichBookContent(opts: {
  title: string;
  author: string;
  currentDescription?: string;
  currentBody?: string;
  currentReview?: string;
  subjects?: string[];
  year?: number;
}): Promise<EnrichedBookContent> {
  const subjectsLine =
    opts.subjects && opts.subjects.length > 0
      ? `subjects: ${opts.subjects.slice(0, 6).join(", ")}`
      : "";
  const yearLine = opts.year ? `year: ${opts.year}` : "";

  const systemPrompt = [
    "Jesteś redaktorem literackiego katalogu. Generujesz konkretny, merytoryczny opis pozycji shelf.",
    "Opisz treść/fabułę, styl, motywy przewodnie i kontekst twórczości autora.",
    "W recenzji wskaż nawiązania, cechy charakterystyczne i rekomendacje czytelnicze.",
    "Pisz po polsku. Nie zmyślaj faktów — jeśli czegoś nie wiesz, pisz ostrożnie.",
    "Zwróć WYŁĄCZNIE prawidłowy JSON bez markdown, bez żadnego tekstu poza JSON.",
    'Format: {"description":"jednozdaniowy opis (max 180 znaków)","body":"2-4 zdania o treści/stylu/motywach","review":"2-4 zdania recenzji z kontekstem i nawiązaniami"}',
  ].join("\n");

  const userContent = [
    `title: ${opts.title}`,
    `author: ${opts.author}`,
    yearLine,
    subjectsLine,
    opts.currentDescription ? `current_description: ${opts.currentDescription}` : "",
    opts.currentBody ? `current_body: ${opts.currentBody}` : "",
    opts.currentReview ? `current_review: ${opts.currentReview}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const model = resolveModelForProvider("gpt-4.1");

  const response = await openai.chat.completions.create({
    model,
    temperature: 0.6,
    max_tokens: 800,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent },
    ],
  });

  const raw = response.choices[0]?.message?.content?.trim() ?? "";

  const jsonMatch = raw.startsWith("{") ? raw : raw.match(/\{[\s\S]*\}/)?.[0] ?? "";
  let parsed: Record<string, unknown> = {};
  try {
    parsed = JSON.parse(jsonMatch) as Record<string, unknown>;
  } catch {
    throw new Error(`enrichBookContent: invalid JSON from model: ${raw.slice(0, 200)}`);
  }

  const description =
    typeof parsed.description === "string" && parsed.description.trim()
      ? parsed.description.trim()
      : opts.currentDescription ?? `Pozycja autora ${opts.author}.`;

  const body =
    typeof parsed.body === "string" && parsed.body.trim()
      ? parsed.body.trim()
      : opts.currentBody ?? `${opts.title} to książka ${opts.author}.`;

  const review =
    typeof parsed.review === "string" && parsed.review.trim()
      ? parsed.review.trim()
      : opts.currentReview ?? "";

  return { description, body, review };
}
