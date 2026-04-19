import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Loader2, Sparkles } from "lucide-react";
import { CURATED_VOCAB_LIST_25, type VocabListCuratedEntry } from "@/data/vocab-list-curated";
import { toast } from "sonner";

type AiBlock = {
  exampleEn: string;
  exampleJa: string;
  linkingTips: string;
};

function categoryJa(c: VocabListCuratedEntry["sourceCategory"]): string {
  if (c === "grammar") return "文法";
  if (c === "vocabulary") return "語彙";
  return "読解";
}

function difficultyJa(d: VocabListCuratedEntry["sourceDifficulty"]): string {
  if (d === "beginner") return "初級";
  if (d === "intermediate") return "中級";
  return "上級";
}

export default function VocabListPage() {
  const [, setLocation] = useLocation();
  const [aiById, setAiById] = useState<Record<string, AiBlock>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const requestAi = async (entry: VocabListCuratedEntry) => {
    setLoadingId(entry.listId);
    try {
      const res = await fetch("/api/vocab-example-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          word: entry.word,
          meaning: entry.meaning,
          originalExample: entry.example ?? "",
        }),
      });
      const data = (await res.json()) as Partial<AiBlock> & { error?: string };
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      if (typeof data.exampleEn !== "string" || typeof data.exampleJa !== "string") {
        throw new Error("応答の形式が不正です");
      }
      const block: AiBlock = {
        exampleEn: data.exampleEn,
        exampleJa: data.exampleJa,
        linkingTips: typeof data.linkingTips === "string" ? data.linkingTips : "",
      };
      setAiById((prev) => ({ ...prev, [entry.listId]: block }));
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "AI例文の取得に失敗しました");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-4xl flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="shrink-0">
            <ChevronLeft className="h-4 w-4 mr-1" />
            ホーム
          </Button>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">厳選25語 · 単語帳</h1>
            <p className="text-xs text-slate-500 truncate">
              クイズ教材から選定 · AIでSMC向けの別例文を生成
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl pb-16">
        <p className="text-sm text-slate-600 mb-6">
          各語はアプリの問題データに基づきます。「別の例文をAIで作る」で、サンタモニカカレッジの学生がキャンパスや日常生活で使える英文・和訳・リンキングのコツを表示します（APIキー設定が必要です）。
        </p>

        <ul className="space-y-4">
          {CURATED_VOCAB_LIST_25.map((entry) => {
            const ai = aiById[entry.listId];
            const busy = loadingId === entry.listId;
            return (
              <li key={entry.listId}>
                <Card className="p-4 sm:p-5 bg-white border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-semibold text-slate-900">{entry.word}</span>
                        <span className="text-xs rounded-full bg-slate-100 text-slate-600 px-2 py-0.5">
                          {categoryJa(entry.sourceCategory)} · {difficultyJa(entry.sourceDifficulty)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700">
                        <span className="font-medium text-slate-800">意味：</span>
                        {entry.meaning}
                      </p>
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-800">発音：</span>
                        {entry.katakanaReading?.trim() || "—"}
                      </p>
                      <p className="text-sm text-slate-700 border-l-2 border-emerald-400 pl-3">
                        <span className="font-medium text-emerald-800">元の例文：</span>
                        {entry.example}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="shrink-0 border-violet-300 text-violet-800 hover:bg-violet-50"
                      disabled={busy}
                      onClick={() => requestAi(entry)}
                    >
                      {busy ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-1" />
                      ) : (
                        <Sparkles className="h-4 w-4 mr-1" />
                      )}
                      別の例文をAIで作る
                    </Button>
                  </div>

                  {ai && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm">
                      <p className="text-slate-900">
                        <span className="font-medium text-violet-800">AI例文：</span>
                        {ai.exampleEn}
                      </p>
                      <p className="text-slate-700">
                        <span className="font-medium text-violet-800">和訳：</span>
                        {ai.exampleJa}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <span className="font-medium text-violet-800">リンキングのコツ：</span>
                        {ai.linkingTips}
                      </p>
                    </div>
                  )}
                </Card>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
