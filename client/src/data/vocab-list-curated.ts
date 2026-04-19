import { getAllQuizzes, type QuizQuestion, type VocabularyItem } from "./quizzes";

/** 単語帳に載せる語数（厳選50語） */
export const CURATED_VOCAB_LIST_SIZE = 50;

/**
 * 厳選50語：getAllQuizzes() から vocabularyItems を収集し、
 * SMC・アメリカの学生生活に関連しやすい語をスコアリングして選定（quizzes.ts は変更しない）。
 */
export type VocabListCuratedEntry = VocabularyItem & {
  listId: string;
  sourceQuestionId: string;
  sourceCategory: QuizQuestion["category"];
  sourceDifficulty: QuizQuestion["difficulty"];
};

const KEYWORDS =
  /campus|college|student|class|homework|assignment|professor|teacher|teach|library|textbook|schedule|semester|tuition|dorm|apartment|roommate|parking|bus|transit|coffee|cafeteria|grocery|restaurant|bank|visa|conversation|phone|email|international|ESL|SMC|Santa Monica|English|study|deadline|essay|lecture|quiz|exam|online|Zoom|club|work|part-?time|shift|neighbor|rent|lease|driver|DMV|supermarket|cafe|meal|friend|counselor|register|financial aid|transcript|bursar/i;

function normalizeWord(w: string): string {
  return w.toLowerCase().replace(/\s+/g, " ").trim();
}

function scoreQuestionItem(q: QuizQuestion, v: VocabularyItem): number {
  let s = 0;
  if (q.category === "vocabulary") s += 4;
  else if (q.category === "reading") s += 3;
  else s += 2;
  const hay = `${v.example ?? ""} ${v.meaning ?? ""} ${q.question}`.slice(0, 600);
  if (KEYWORDS.test(hay)) s += 6;
  const w = (v.word ?? "").length;
  if (w >= 10) s += 1;
  if (q.difficulty === "intermediate") s += 0.5;
  return s;
}

function buildCuratedList(): VocabListCuratedEntry[] {
  const all = getAllQuizzes();
  const best = new Map<
    string,
    { s: number; entry: VocabListCuratedEntry }
  >();

  for (const q of all) {
    const items = q.vocabularyItems;
    if (!items?.length) continue;
    items.forEach((v, idx) => {
      if (!v.word?.trim() || !v.example?.trim()) return;
      if (/[()]/.test(v.word)) return;
      const key = normalizeWord(v.word);
      if (key.length < 2) return;
      const s = scoreQuestionItem(q, v);
      const entry: VocabListCuratedEntry = {
        ...v,
        listId: `vl-${q.id}-${idx}`,
        sourceQuestionId: q.id,
        sourceCategory: q.category,
        sourceDifficulty: q.difficulty,
      };
      const prev = best.get(key);
      if (!prev || s > prev.s) best.set(key, { s, entry });
    });
  }

  const buckets: Record<QuizQuestion["category"], VocabListCuratedEntry[]> = {
    grammar: [],
    vocabulary: [],
    reading: [],
  };

  for (const row of Array.from(best.values())) {
    const e = row.entry;
    buckets[e.sourceCategory].push(e);
  }

  const sortKey = (a: VocabListCuratedEntry) => best.get(normalizeWord(a.word!))!.s;

  buckets.grammar.sort((a, b) => sortKey(b) - sortKey(a) || (a.word ?? "").localeCompare(b.word ?? ""));
  buckets.vocabulary.sort((a, b) => sortKey(b) - sortKey(a) || (a.word ?? "").localeCompare(b.word ?? ""));
  buckets.reading.sort((a, b) => sortKey(b) - sortKey(a) || (a.word ?? "").localeCompare(b.word ?? ""));

  const target = CURATED_VOCAB_LIST_SIZE;
  const out: VocabListCuratedEntry[] = [];
  const order: QuizQuestion["category"][] = ["vocabulary", "reading", "grammar"];
  let round = 0;
  while (out.length < target) {
    let progressed = false;
    for (const cat of order) {
      if (out.length >= target) break;
      const b = buckets[cat];
      if (round < b.length) {
        out.push(b[round]);
        progressed = true;
      }
    }
    if (!progressed) break;
    round++;
  }

  if (out.length < target) {
    const rest = Array.from(best.values())
      .map((x) => x.entry)
      .sort((a, b) => sortKey(b) - sortKey(a));
    const seen = new Set(out.map((e) => normalizeWord(e.word!)));
    for (const e of rest) {
      if (out.length >= target) break;
      const k = normalizeWord(e.word!);
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(e);
    }
  }

  return out.slice(0, target);
}

/** 単語帳一覧（50語） */
export const CURATED_VOCAB_LIST: VocabListCuratedEntry[] = buildCuratedList();
