import { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getQuizzesByCategory, QUIZ_CATEGORIES } from "@/data/quizzes";
import type { QuizQuestion } from "@/data/quizzes";
import { useQuizState } from "@/hooks/useQuizState";
import { useStudyHistory } from "@/hooks/useStudyHistory";
import ScorePage from "./ScorePage";
import { ChevronLeft } from "lucide-react";
import { LogicalConnectorText } from "@/components/LogicalConnectorText";

interface QuizPageProps {
  categoryId: string;
  level?: "beginner" | "intermediate" | "advanced";
  onBack: () => void;
}

export default function QuizPage({ categoryId, level, onBack }: QuizPageProps) {
  const [showScore, setShowScore] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [confirmedAnswer, setConfirmedAnswer] = useState<string | null>(null);
  // 確定時点の問題と正誤を保存 — answerQuestion() が index を進めた後でも正しく表示するため
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState<QuizQuestion | null>(null);
  const [lastAnswerIsCorrect, setLastAnswerIsCorrect] = useState<boolean>(false);
  // 前の問題を閲覧中かどうか（読み取り専用レビューモード）
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  // 「今まさに答えた直後」のフラグ — useEffect による誤った state 復元を防ぐ
  const justAnsweredRef = useRef(false);
  /** 同一クイズセッション内で、各問題の「5回音読」達成を記録 */
  const [speakingPracticeCompleteByQuestionId, setSpeakingPracticeCompleteByQuestionId] = useState<
    Record<string, boolean>
  >({});

  const rawQuestions = getQuizzesByCategory(
    categoryId as "grammar" | "vocabulary" | "reading",
    level
  );

  // マウント時に1回だけ各問題の選択肢をシャッフル — 正解番号の偏り（A集中など）を解消
  const questions = useMemo(() => {
    return rawQuestions.map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 空deps: コンポーネントマウント時に1度だけ実行

  useEffect(() => {
    setSpeakingPracticeCompleteByQuestionId({});
  }, [categoryId, level]);

  const quizState = useQuizState(questions);
  const category = QUIZ_CATEGORIES.find((c) => c.id === categoryId);
  const { addRecord } = useStudyHistory();

  // 解説・選択肢表示に使う問題: 確定後は保存済みの問題を使い、次問題へ進んでも表示がズレない
  const displayQuestion = (confirmedAnswer && lastAnsweredQuestion)
    ? lastAnsweredQuestion
    : quizState.currentQuestion;

  const isSpeakingPracticeDoneForDisplay =
    speakingPracticeCompleteByQuestionId[displayQuestion.id] ?? false;

  const handleMarkSpeakingPracticeDone = () => {
    setSpeakingPracticeCompleteByQuestionId((prev) => ({
      ...prev,
      [displayQuestion.id]: true,
    }));
  };

  // Handle option selection (not confirmation yet)
  const handleSelectOption = (optionId: string) => {
    if (!confirmedAnswer) {
      setSelectedOptionId(optionId);
    }
  };

  // Handle answer confirmation
  const handleConfirmAnswer = () => {
    if (selectedOptionId && !confirmedAnswer) {
      const currentQuestion = quizState.currentQuestion;
      if (!currentQuestion) return;

      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === selectedOptionId
      );
      const isCorrect = selectedOption?.isCorrect ?? false;

      // 「今まさに答えた」フラグをセット — useEffect が誤って state を復元しないよう
      justAnsweredRef.current = true;

      // 確定時点の問題・正誤を保存してから state を更新（answerQuestion が index を進める前に）
      setLastAnsweredQuestion(currentQuestion);
      setLastAnswerIsCorrect(isCorrect);
      setConfirmedAnswer(selectedOptionId);
      setIsReviewMode(false);

      // LocalStorage に記録（currentQuestion が進む前なので ID が正しい）
      addRecord({
        questionId: currentQuestion.id,
        category: categoryId as "grammar" | "vocabulary" | "reading",
        isCorrect,
      });

      // 記録完了後に次の問題へ進める
      quizState.answerQuestion(selectedOptionId);
    }
  };

  const handleNext = () => {
    if (isReviewMode) {
      // レビューモード: 次の問題へナビゲート（goToNextQuestion で index を進める）
      const isLastQuestion =
        quizState.currentQuestionIndex === quizState.totalQuestions - 1;
      setSelectedOptionId(null);
      setConfirmedAnswer(null);
      setLastAnsweredQuestion(null);
      setLastAnswerIsCorrect(false);
      setIsReviewMode(false);
      if (isLastQuestion) {
        setShowScore(true);
      } else {
        quizState.goToNextQuestion();
      }
    } else if (quizState.isQuizComplete) {
      setShowScore(true);
    } else {
      // 通常モード: 次の問題へ（index は answerQuestion 呼び出し時に既に進んでいる）
      setSelectedOptionId(null);
      setConfirmedAnswer(null);
      setLastAnsweredQuestion(null);
      setLastAnswerIsCorrect(false);
    }
  };

  // 前の問題へ戻るハンドラ
  const handleGoToPreviousQuestion = () => {
    setSelectedOptionId(null);
    setConfirmedAnswer(null);
    setLastAnsweredQuestion(null);
    setLastAnswerIsCorrect(false);
    setIsReviewMode(false);
    quizState.goToPreviousQuestion();
  };

  // currentQuestionIndex が変わったとき（前後移動）、
  // その問題が既に解答済みであれば確定済み状態を復元してレビューモードに入る
  useEffect(() => {
    // 「今まさに答えた」直後の index 変化には反応しない
    if (justAnsweredRef.current) {
      justAnsweredRef.current = false;
      return;
    }

    const currentQ = questions[quizState.currentQuestionIndex];
    if (!currentQ) return;

    // この問題の解答済み記録を探す
    const prevAnswer = quizState.answers.find(
      (a) => a.questionId === currentQ.id
    );

    if (prevAnswer) {
      // 解答済み → 確定状態を復元してレビューモードへ
      setSelectedOptionId(prevAnswer.selectedOptionId);
      setLastAnsweredQuestion(currentQ);
      setLastAnswerIsCorrect(prevAnswer.isCorrect);
      setConfirmedAnswer(prevAnswer.selectedOptionId);
      setIsReviewMode(true);
    }
    // 未解答の場合は state が既にクリアされているので何もしない
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState.currentQuestionIndex]); // index 変化のみを監視（意図的に他の依存を除外）

  useEffect(() => {
    // レビューモード中は自動スコア表示しない（前の問題を閲覧している途中のため）
    if (quizState.isQuizComplete && confirmedAnswer && !isReviewMode) {
      const timer = setTimeout(() => {
        setShowScore(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [quizState.isQuizComplete, confirmedAnswer, isReviewMode]);

  if (showScore) {
    return (
      <ScorePage
        score={quizState.score}
        totalQuestions={quizState.totalQuestions}
        categoryName={category?.name || "Quiz"}
        categoryId={categoryId}
        onRetry={() => {
          quizState.resetQuiz();
          setShowScore(false);
        }}
        onHome={onBack}
      />
    );
  }

  if (!quizState.currentQuestion && !lastAnsweredQuestion) {
    return <div>Loading...</div>;
  }

  const progressPercentage =
    ((quizState.currentQuestionIndex + 1) / quizState.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">戻る</span>
            </Button>
            <div className="text-center flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                {category?.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                問題 {quizState.currentQuestionIndex + 1} / {quizState.totalQuestions}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                {quizState.score}/{quizState.totalQuestions}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-slate-200 bg-white px-4 py-3">
        <div className="container mx-auto">
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-2xl mx-auto">
          {/* Question Card */}
          <Card className="mb-6 sm:mb-8 p-4 sm:p-8">
            <div className="mb-6">
              <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {displayQuestion?.category.toUpperCase()}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {displayQuestion?.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-2 sm:space-y-3">
              {displayQuestion?.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const isCorrectOption = option.isCorrect;
                const showCorrect = confirmedAnswer && isCorrectOption;
                const showIncorrect = confirmedAnswer && isSelected && !isCorrectOption;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={confirmedAnswer !== null}
                    className={`w-full rounded-lg border-2 p-3 sm:p-4 text-left transition-all duration-200 text-sm sm:text-base ${
                      showCorrect
                        ? "border-green-500 bg-green-50"
                        : showIncorrect
                          ? "border-red-500 bg-red-50"
                          : isSelected
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-slate-300"
                    } ${confirmedAnswer !== null ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          showCorrect
                            ? "border-green-500 bg-green-500"
                            : showIncorrect
                              ? "border-red-500 bg-red-500"
                              : isSelected
                                ? "border-blue-500 bg-blue-500"
                                : "border-slate-300"
                        }`}
                      >
                        {showCorrect && (
                          <span className="text-white text-sm">✓</span>
                        )}
                        {showIncorrect && (
                          <span className="text-white text-sm">✗</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            showCorrect
                              ? "text-green-900"
                              : showIncorrect
                                ? "text-red-900"
                                : isSelected
                                  ? "text-blue-900"
                                  : "text-slate-900"
                          }`}
                        >
                          {option.text}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Confirmation Button Section */}
          {selectedOptionId && !confirmedAnswer && (
            <Card className="mb-6 sm:mb-8 p-4 sm:p-6 border-blue-200 bg-blue-50">
              <p className="mb-4 text-sm sm:text-base text-slate-700">
                選択肢を選びました。以下のボタンをクリックして解答を確定してください。
              </p>
              <Button
                onClick={handleConfirmAnswer}
                className="w-full text-base font-semibold"
              >
                決定して次へ
              </Button>
            </Card>
          )}

          {/* Explanation Section (shown after confirmation) */}
          {confirmedAnswer && displayQuestion && (
            <div className="space-y-4 mb-8">
              {/* Main Result Card */}
              <Card
                className={`p-6 ${
                  lastAnswerIsCorrect
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">
                    {lastAnswerIsCorrect ? "✓" : "✗"}
                  </span>
                  <h3
                    className={`font-bold text-lg ${
                      lastAnswerIsCorrect
                        ? "text-green-900"
                        : "text-red-900"
                    }`}
                  >
                    {lastAnswerIsCorrect ? "正解です！" : "不正解です"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      詳しい解説
                    </h4>
                    <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {displayQuestion.explanation}
                    </p>
                  </div>
                  {displayQuestion.hint && (
                    <div className="rounded bg-slate-100 p-3 text-sm text-slate-700">
                      <strong>💡 ヒント:</strong>{" "}
                      {displayQuestion.hint}
                    </div>
                  )}
                </div>
              </Card>

              {/* ① 文全体の和訳 */}
              {displayQuestion.questionTranslation && (
                <Card className="p-6 border-indigo-200 bg-indigo-50">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    ① 文全体の和訳
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">
                        問題文：
                      </p>
                      <p className="text-sm text-slate-700 whitespace-pre-wrap">
                        {displayQuestion.questionTranslation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">
                        選択肢の和訳：
                      </p>
                      <ul className="space-y-2">
                        {displayQuestion.options.map((option, idx) => (
                          <li key={idx} className="text-sm text-slate-700">
                            <span className="font-medium">
                              {String.fromCharCode(65 + idx)}.
                            </span>{" "}
                            {option.text}
                            {option.translation && (
                              <>
                                <br />
                                <span className="text-xs text-slate-600 ml-4">
                                  → {option.translation}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )}

              {/* ② 重要単語リスト */}
              {displayQuestion.vocabularyItems &&
                displayQuestion.vocabularyItems.length > 0 && (
                  <Card className="p-6 border-blue-200 bg-blue-50">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      ② 重要単語リスト（意味と読み）
                    </h4>
                    <div className="space-y-3">
                      {displayQuestion.vocabularyItems.map(
                        (item, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-blue-400 pl-3"
                          >
                            <p className="font-semibold text-slate-900">
                              {item.word}
                            </p>
                            <p className="text-sm text-slate-700">
                              {item.meaning}
                            </p>
                            {item.katakanaReading && (
                              <p className="text-xs text-blue-600 italic">
                                読み：{item.katakanaReading}
                              </p>
                            )}
                            {item.example && (
                              <p className="text-xs text-slate-600 italic mt-1">
                                例：{item.example}
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </Card>
                )}

              {/* ③ カタカナ読み（リンキング対応） */}
              {displayQuestion.questionKatakana && (
                <Card className="p-6 border-amber-200 bg-amber-50">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    ③ 英文のカタカナ読み（リンキング対応）
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {displayQuestion.questionKatakana}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 italic">
                    ※ネイティブスピーカーが話すような「つながり（リンキング）」を意識したカタカナ表記です。
                  </p>
                </Card>
              )}

              {/* ④ 文法ポイント */}
              {displayQuestion.grammarPoints &&
                displayQuestion.grammarPoints.length > 0 && (
                  <Card className="p-6 border-purple-200 bg-purple-50">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      ④ 文法の詳細解説
                    </h4>
                    <div className="space-y-4">
                      {displayQuestion.grammarPoints.map(
                        (point, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-purple-400 pl-3"
                          >
                            <p className="font-semibold text-slate-900">
                              {categoryId === "reading" ? (
                                <LogicalConnectorText text={point.rule} />
                              ) : (
                                point.rule
                              )}
                            </p>
                            <p className="text-sm text-slate-700 mt-1">
                              {categoryId === "reading" ? (
                                <LogicalConnectorText
                                  text={point.explanation}
                                  className="text-sm text-slate-700"
                                />
                              ) : (
                                point.explanation
                              )}
                            </p>
                            {point.example && (
                              <p className="text-xs text-slate-600 italic mt-2">
                                例：
                                {categoryId === "reading" ? (
                                  <LogicalConnectorText
                                    text={point.example}
                                    className="text-xs text-slate-600 italic"
                                  />
                                ) : (
                                  point.example
                                )}
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </Card>
                )}

              {/* ⑤ 音読・スピーキング練習（視覚的に強調） */}
              {displayQuestion.speakingPractice && (
                <Card
                  className={`relative overflow-hidden border-2 p-6 shadow-lg ring-2 transition-colors ${
                    isSpeakingPracticeDoneForDisplay
                      ? "border-emerald-400 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 ring-emerald-200/80"
                      : "border-teal-400 bg-gradient-to-br from-teal-50 via-sky-50 to-amber-50 ring-teal-200/80"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-200/40 blur-2xl"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-teal-700 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                        重点
                      </span>
                      <h4 className="font-semibold text-slate-900 text-base sm:text-lg">
                        ⑤ 音読・スピーキング練習
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-teal-200/80 bg-white/90 p-4 shadow-sm">
                        <p className="text-sm font-semibold text-teal-900 mb-2">
                          🎤 音読練習
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {displayQuestion.speakingPractice.readingInstructions}
                        </p>
                      </div>
                      {displayQuestion.speakingPractice.phraseReplacements &&
                        displayQuestion.speakingPractice.phraseReplacements.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-2">
                              📝 フレーズ入れ替え練習
                            </p>
                            <div className="space-y-3">
                              {displayQuestion.speakingPractice.phraseReplacements.map(
                                (replacement, idx) => (
                                  <div
                                    key={idx}
                                    className="rounded-lg border border-teal-200/70 bg-white/90 p-3 shadow-sm"
                                  >
                                    <p className="text-xs font-semibold text-slate-700 mb-1">
                                      元の文：{replacement.original}
                                    </p>
                                    <p className="text-xs text-slate-600 mb-2">
                                      {replacement.instruction}
                                    </p>
                                    <ul className="text-xs text-slate-700 space-y-1">
                                      {replacement.examples.map(
                                        (example, exIdx) => (
                                          <li key={exIdx} className="ml-3">
                                            • {example}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      <div className="rounded-lg border border-teal-200/80 bg-white/90 p-4 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900 mb-2">
                          💬 日常会話のコツ
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {displayQuestion.speakingPractice.dailyConversationTips}
                        </p>
                      </div>
                      <div className="flex flex-col items-stretch gap-3 border-t border-teal-200/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-h-[1.5rem]">
                          {isSpeakingPracticeDoneForDisplay && (
                            <p
                              className="text-center text-lg font-bold text-emerald-700 sm:text-left animate-in fade-in zoom-in-95 duration-300"
                              role="status"
                            >
                              Good Job! よくできました！
                            </p>
                          )}
                        </div>
                        <Button
                          type="button"
                          onClick={handleMarkSpeakingPracticeDone}
                          disabled={isSpeakingPracticeDoneForDisplay}
                          className={
                            isSpeakingPracticeDoneForDisplay
                              ? "shrink-0 border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-600"
                              : "shrink-0 bg-teal-600 text-white hover:bg-teal-700"
                          }
                        >
                          {isSpeakingPracticeDoneForDisplay
                            ? "✓ 5回音読を完了しました"
                            : "5回音読しました！"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-shrink-0 text-xs sm:text-base"
            >
              終了
            </Button>
            {/* 「← 前の問題」: 1問目以外で表示 */}
            {quizState.currentQuestionIndex > 0 && (
              <Button
                variant="outline"
                onClick={handleGoToPreviousQuestion}
                className="flex-1 text-xs sm:text-base"
              >
                ← 前の問題
              </Button>
            )}
            {confirmedAnswer && (
              <Button
                onClick={handleNext}
                className="flex-1 text-xs sm:text-base"
              >
                {(isReviewMode
                  ? quizState.currentQuestionIndex ===
                    quizState.totalQuestions - 1
                  : quizState.isQuizComplete)
                  ? "結果を表示"
                  : "次の問題へ"}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
