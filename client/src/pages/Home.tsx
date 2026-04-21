import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QUIZ_CATEGORIES, getQuestionCount } from "@/data/quizzes";
import { useStudyHistory } from "@/hooks/useStudyHistory";
import WeakAreasDisplay from "@/components/WeakAreasDisplay";
import StudyStats from "@/components/StudyStats";
import QuizPage from "./QuizPage";
import ReviewPage from "./ReviewPage";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);
  const [selectedLevel, setSelectedLevel] = useState<
    "beginner" | "intermediate" | "advanced"
  >("intermediate");
  const [reviewMode, setReviewMode] = useState<string | null>(null);
  const [, setLocation] = useLocation();
  const { getWeakAreas, getStatistics, getIncorrectQuestions, reloadFromStorage } = useStudyHistory();

  // クイズや復習から戻ったとき、QuizPage が localStorage に書き込んだ最新データを再読み込み
  useEffect(() => {
    if (selectedCategory === null && reviewMode === null) {
      reloadFromStorage();
    }
  }, [selectedCategory, reviewMode, reloadFromStorage]);

  const weakAreas = getWeakAreas();
  const stats = getStatistics();
  const incorrectQuestions = getIncorrectQuestions();

  if (reviewMode) {
    return (
      <ReviewPage
        categoryId={reviewMode}
        onBack={() => setReviewMode(null)}
      />
    );
  }

  if (selectedCategory) {
    return (
      <QuizPage
        categoryId={selectedCategory}
        level={selectedLevel}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 truncate">
                SMC ESL学習アプリ
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 truncate">
                ESL 903/904 中級レベル対応
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-violet-300 text-violet-900 hover:bg-violet-50 text-xs sm:text-sm whitespace-nowrap"
                onClick={() => setLocation("/vocab-list")}
              >
                単語帳
              </Button>
              <div className="text-3xl sm:text-4xl">📚</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-12">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12">
          <div className="rounded-lg bg-white p-4 sm:p-8 shadow-md">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">
              ESL中級レベル学習へようこそ
            </h2>
            <p className="mb-4 text-slate-700">
              このアプリはサンタモニカ・カレッジ（SMC）のESL中級クラス（903/904）への入学を目指す日本人学生向けに設計されています。以下のカテゴリーから選択して、学習を始めましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                文法
              </span>
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                語彙
              </span>
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                読解
              </span>
            </div>
          </div>
        </section>

        {/* Study Progress Section */}
        {stats.totalQuestions > 0 && (
          <section className="mb-8 sm:mb-12">
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900">
              あなたの学習進捗
            </h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <StudyStats
                totalQuestions={stats.totalQuestions}
                correctAnswers={stats.correctAnswers}
                incorrectAnswers={stats.incorrectAnswers}
                accuracy={stats.accuracy}
              />
              <div>
                <WeakAreasDisplay weakAreas={weakAreas} />
                {stats.totalQuestions > 0 && (
                  <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm text-orange-900 mb-3">
                      {incorrectQuestions.length > 0 ? (
                        <>
                          <strong>改善の準備はできていますか？</strong>{" "}
                          間違えた問題だけを復習して、弱点を克服しましょう。
                        </>
                      ) : (
                        <>
                          <strong>いまは記録上の未正解がありません。</strong>{" "}
                          復習画面ではメッセージの確認や、履歴のリセット後の状態をそのまま開けます。
                        </>
                      )}
                    </p>
                    <Button
                      onClick={() => setLocation("/mistakes-review")}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      🎯 間違えた問題を復習（{incorrectQuestions.length}問）
                    </Button>
                    {weakAreas.length > 0 && (
                      <>
                        <p className="text-xs text-orange-700 mt-3 mb-2">または、カテゴリー別に復習：</p>
                        <div className="grid grid-cols-1 gap-2">
                          {weakAreas.map((area) => (
                            <Button
                              key={area.category}
                              variant="outline"
                              size="sm"
                              onClick={() => setReviewMode(area.category)}
                              className="text-left justify-start"
                            >
                              📖 復習: {area.category === 'grammar' ? '文法' : area.category === 'vocabulary' ? '語彙' : '読解'}
                            </Button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Level Selection */}
        <section className="mb-6 sm:mb-8">
          <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">
            難易度を選択
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {(
              [
                {
                  value: "beginner",
                  label: "初級",
                  sub: "ESL 901/902",
                  color: "border-green-400 bg-green-50 text-green-800",
                  activeColor: "bg-green-500 text-white border-green-500",
                  icon: "🌱",
                },
                {
                  value: "intermediate",
                  label: "中級",
                  sub: "ESL 903/904",
                  color: "border-blue-400 bg-blue-50 text-blue-800",
                  activeColor: "bg-blue-500 text-white border-blue-500",
                  icon: "📘",
                },
                {
                  value: "advanced",
                  label: "上級",
                  sub: "ESL 19A/19B",
                  color: "border-purple-400 bg-purple-50 text-purple-800",
                  activeColor: "bg-purple-500 text-white border-purple-500",
                  icon: "🎓",
                },
              ] as const
            ).map((lvl) => (
              <button
                key={lvl.value}
                onClick={() => setSelectedLevel(lvl.value)}
                className={`rounded-xl border-2 p-3 sm:p-4 text-center transition-all duration-200 focus:outline-none ${
                  selectedLevel === lvl.value
                    ? lvl.activeColor + " shadow-md scale-105"
                    : lvl.color + " hover:scale-102 hover:shadow-sm"
                }`}
              >
                <div className="text-2xl sm:text-3xl mb-1">{lvl.icon}</div>
                <div className="font-bold text-sm sm:text-base">{lvl.label}</div>
                <div className="text-xs opacity-80">{lvl.sub}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Category Selection */}
        <section>
          <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-slate-900">
            カテゴリーを選択
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {QUIZ_CATEGORIES.map((category) => {
              const count = getQuestionCount(
                category.id as "grammar" | "vocabulary" | "reading",
                selectedLevel
              );
              return (
                <Card
                  key={category.id}
                  className={`group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    count > 0 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => count > 0 && setSelectedCategory(category.id)}
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${category.color} p-6 text-white flex items-end justify-between`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">
                        {count > 0 ? `${count} 問` : "準備中"}
                      </p>
                    </div>
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-slate-700">{category.description}</p>
                    <Button
                      className="w-full"
                      disabled={count === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (count > 0) setSelectedCategory(category.id);
                      }}
                    >
                      {count > 0 ? "クイズを開始" : "準備中"}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-8 sm:mt-12">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                📝 使い方
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ カテゴリーを選択して開始</li>
                <li>✓ 4択形式の問題に答える</li>
                <li>✓ 正解・不正解を即座にフィードバック</li>
                <li>✓ 詳しい日本語解説で理解を深める</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                🎯 学習目標
              </h3>
              <p className="text-slate-700">
                SMCの中級ESLクラスに必要な文法、語彙、読解力を習得します。各問題には詳細な日本語解説が付いており、文法用語も日本語で理解できるよう工夫されています。
              </p>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 sm:py-6 text-center text-slate-600">
        <p className="text-xs sm:text-sm">
          © 2026 SMC ESL学習アプリ | サンタモニカ・カレッジ留学生向け
        </p>
      </footer>
    </div>
  );
}
