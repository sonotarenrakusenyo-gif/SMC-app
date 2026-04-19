/**
 * Shared Gemini helper for SMC vocab example generation (dev Vite middleware + prod Express).
 */

export type VocabAiResponse = {
  exampleEn: string;
  exampleJa: string;
  linkingTips: string;
};

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

function buildPrompt(word: string, meaning: string, originalExample: string): string {
  return `You are helping ESL students at SMC (Santa Monica College), Japan.

必須指示（日本語の意図）: SMC（サンタモニカカレッジ）の学生が、キャンパスやアメリカでの日常生活でそのまま使える実戦的な例文を1つ作成してください。

Target word or phrase: "${word}"
Japanese gloss (meaning): "${meaning}"
Original example from our app (reference only; write a NEW sentence): "${originalExample}"

Task: Write ONE new practical English sentence that an SMC student would naturally say on campus or in everyday life in the United States, and that uses the target word/phrase naturally.

Also provide:
1) Natural Japanese translation of that sentence.
2) Short tips in Japanese for pronunciation linking between words in that sentence (リンキングのコツ).

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"exampleEn":"...","exampleJa":"...","linkingTips":"..."}`;
}

function parseModelJson(text: string): VocabAiResponse {
  const trimmed = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  const parsed = JSON.parse(trimmed) as unknown;
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    typeof (parsed as VocabAiResponse).exampleEn !== "string" ||
    typeof (parsed as VocabAiResponse).exampleJa !== "string" ||
    typeof (parsed as VocabAiResponse).linkingTips !== "string"
  ) {
    throw new Error("Invalid JSON shape from model");
  }
  return parsed as VocabAiResponse;
}

export async function generateVocabExampleAi(input: {
  word: string;
  meaning: string;
  originalExample: string;
}): Promise<VocabAiResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey?.trim()) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it to your environment to enable AI example generation."
    );
  }

  const prompt = buildPrompt(input.word, input.meaning, input.originalExample);

  const res = await fetch(`${GEMINI_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Gemini API error ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text =
    data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text.trim()) {
    throw new Error("Empty response from Gemini");
  }
  return parseModelJson(text);
}
