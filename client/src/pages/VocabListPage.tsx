import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { CURATED_VOCAB_LIST, CURATED_VOCAB_LIST_SIZE, type VocabListCuratedEntry } from "@/data/vocab-list-curated";
import { CONNECTOR_VOCAB_LIST, CONNECTOR_VOCAB_LIST_SIZE } from "@/data/vocab-connectors";

type VocabTab = "curated" | "connectors";

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

function connectorBadgeClass(m: (typeof CONNECTOR_VOCAB_LIST)[number]["macroCategory"]): string {
  if (m === "逆接") return "bg-rose-100 text-rose-800";
  if (m === "因果関係") return "bg-sky-100 text-sky-800";
  if (m === "例示・追加") return "bg-amber-100 text-amber-900";
  return "bg-teal-100 text-teal-900";
}

export default function VocabListPage() {
  const [, setLocation] = useLocation();
  const [vocabTab, setVocabTab] = useState<VocabTab>("curated");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-4xl flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="shrink-0">
              <ChevronLeft className="h-4 w-4 mr-1" />
              ホーム
            </Button>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                {vocabTab === "curated"
                  ? `厳選${CURATED_VOCAB_LIST_SIZE}語 · 単語帳`
                  : `接続詞 · 単語帳（${CONNECTOR_VOCAB_LIST_SIZE}語）`}
              </h1>
              <p className="text-xs text-slate-500 truncate">
                {vocabTab === "curated"
                  ? "クイズ教材から選定"
                  : "読解の論理のつなぎ目を意識するための専用リスト"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              size="sm"
              variant={vocabTab === "curated" ? "default" : "outline"}
              className={vocabTab === "curated" ? "bg-slate-800" : ""}
              onClick={() => setVocabTab("curated")}
            >
              普通の単語帳（{CURATED_VOCAB_LIST_SIZE}語）
            </Button>
            <Button
              type="button"
              size="sm"
              variant={vocabTab === "connectors" ? "default" : "outline"}
              className={vocabTab === "connectors" ? "bg-indigo-700 hover:bg-indigo-800" : ""}
              onClick={() => setVocabTab("connectors")}
            >
              接続詞単語帳（{CONNECTOR_VOCAB_LIST_SIZE}語）
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl pb-16">
        {vocabTab === "curated" ? (
          <>
            <p className="text-sm text-slate-600 mb-6">
              各語はアプリの問題データに基づきます（全{CURATED_VOCAB_LIST_SIZE}語）。教材に付いた例文をそのまま表示します。
            </p>

            <ul className="space-y-4">
              {CURATED_VOCAB_LIST.map((entry) => (
                <li key={entry.listId}>
                  <Card className="p-4 sm:p-5 bg-white border-slate-200 shadow-sm">
                    <div className="min-w-0 space-y-2">
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
                  </Card>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="text-sm text-slate-600 mb-6">
              読解で論理のつなぎ目を押さえるための接続詞一覧（全{CONNECTOR_VOCAB_LIST_SIZE}語）。各語にカタカナ読み、「読解のヒント」、一言メモを付けています。
            </p>

            <ul className="space-y-4">
              {CONNECTOR_VOCAB_LIST.map((entry) => (
                <li key={entry.id}>
                  <Card className="p-4 sm:p-5 bg-white border-indigo-100 shadow-sm">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-semibold text-slate-900">{entry.word}</span>
                        <span
                          className={`text-xs rounded-full px-2 py-0.5 font-medium ${connectorBadgeClass(entry.macroCategory)}`}
                        >
                          {entry.macroCategory}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-800">読み（カタカナ）：</span>
                        {entry.katakanaReading}
                      </p>
                      <p className="text-sm text-slate-700 border-l-2 border-indigo-400 pl-3 leading-relaxed">
                        <span className="font-medium text-indigo-900">読解のヒント：</span>
                        {entry.readingHint}
                      </p>
                      <p className="text-sm text-slate-800 bg-indigo-50/80 rounded-lg px-3 py-2 leading-relaxed">
                        <span className="font-medium text-indigo-900">読解で役立つ一言メモ：</span>
                        {entry.memo}
                      </p>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
