import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react";
import { useStudyHistory } from "@/hooks/useStudyHistory";
import { getAllQuizzes } from "@/data/quizzes";
import type { QuizQuestion } from "@/data/quizzes";

export default function MistakesReviewPage() {
  const [, setLocation] = useLocation();
  const {
    isLoaded: historyLoaded,
    addRecord,
    getIncorrectQuestions,
    markQuestionAsCorrectInReview,
    clearIncorrectHistory,
  } = useStudyHistory();

  const [mistakeQuestions, setMistakeQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  // マウント時に1回だけ実行 — historyLoaded が true になったタイミングで問題を確定させる
  // history の変更（addRecord 等）では再実行しない（復習中に問題リストがリセットされるのを防ぐ）
  useEffect(() => {
    if (!historyLoaded) return;

    // historyLoaded が true になった時点で history は既にロード済み
    const incorrectIds = getIncorrectQuestions();

    if (incorrectIds.length === 0) {
      setIsLoaded(true);
      return;
    }

    const allQuizzes = getAllQuizzes();
    // Set を使って O(1) 検索
    const incorrectIdSet = new Set(incorrectIds);
    const mistakes = allQuizzes.filter((q) => incorrectIdSet.has(q.id));

    // 問題順序と各問題の選択肢順序の両方をシャッフル
    const shuffled = [...mistakes]
      .sort(() => Math.random() - 0.5)
      .map((q) => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5),
      }));
    setMistakeQuestions(shuffled);
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyLoaded]); // 意図的に getIncorrectQuestions を deps から除外

  // 問題が変わるたびに選択状態を確実にリセット
  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [currentQuestionIndex]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">読み込み中...</p>
      </div>
    );
  }

  if (mistakeQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            ホームに戻る
          </Button>

          <Card className="p-8 text-center bg-white">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              完璧です！
            </h2>
            <p className="text-slate-600 mb-6">
              間違えた問題がありません。すべての問題を正解できています！
            </p>
            <Button onClick={() => setLocation("/")} className="w-full">
              ホームに戻る
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = mistakeQuestions[currentQuestionIndex];
  const correctOption = currentQuestion.options.find((o) => o.isCorrect);
  const isCorrect = selectedAnswer === correctOption?.id;
  const progress = ((currentQuestionIndex + 1) / mistakeQuestions.length) * 100;

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);

    // Record the attempt
    addRecord({
      questionId: currentQuestion.id,
      category: currentQuestion.category,
      isCorrect: isCorrect,
    });

    // If correct in review mode, mark it as correct
    if (isCorrect) {
      markQuestionAsCorrectInReview(currentQuestion.id);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < mistakeQuestions.length - 1) {
      // まず選択状態を明示的にリセットしてから次の問題へ
      setSelectedAnswer(null);
      setShowFeedback(false);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setLocation("/");
    }
  };

  const handleConfirmResetIncorrect = () => {
    clearIncorrectHistory();
    setMistakeQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setResetConfirmOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <Dialog open={resetConfirmOpen} onOpenChange={setResetConfirmOpen}>
          <DialogContent showCloseButton={false} className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>学習履歴のリセット</DialogTitle>
              <DialogDescription>本当に学習履歴をリセットしますか？</DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => setResetConfirmOpen(false)}>
                キャンセル
              </Button>
              <Button type="button" variant="destructive" onClick={handleConfirmResetIncorrect}>
                はい、リセットします
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">ホームに戻る</span>
          </Button>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="text-sm font-medium text-slate-600">
              {currentQuestionIndex + 1} / {mistakeQuestions.length}
            </div>
            <Button type="button" variant="outline" size="sm" onClick={() => setResetConfirmOpen(true)}>
              学習履歴をリセット
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-6 sm:p-8 mb-6 bg-white">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {currentQuestion.question}
            </h2>
            <p className="text-sm text-slate-500">
              復習モード - 以前間違えた問題です
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => !showFeedback && setSelectedAnswer(option.id)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                } ${showFeedback ? "cursor-not-allowed opacity-75" : "cursor-pointer"} ${
                  showFeedback && option.isCorrect
                    ? "border-green-500 bg-green-50"
                    : ""
                } ${
                  showFeedback &&
                  selectedAnswer === option.id &&
                  !option.isCorrect
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedAnswer === option.id
                        ? "border-blue-500 bg-blue-500"
                        : "border-slate-300"
                    } ${
                      showFeedback && option.isCorrect
                        ? "border-green-500 bg-green-500"
                        : ""
                    } ${
                      showFeedback &&
                      selectedAnswer === option.id &&
                      !option.isCorrect
                        ? "border-red-500 bg-red-500"
                        : ""
                    }`}
                  >
                    {selectedAnswer === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{option.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Submit Button */}
          {!showFeedback && (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              決定して次へ
            </Button>
          )}

          {/* Feedback Section */}
          {showFeedback && (
            <div className="space-y-6 mt-6 pt-6 border-t border-slate-200">
              {/* Result */}
              <div
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  isCorrect
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p
                    className={`font-semibold ${
                      isCorrect ? "text-green-900" : "text-red-900"
                    }`}
                  >
                    {isCorrect ? "正解です！" : "不正解です"}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-red-700 mt-1">
                      正解は「{correctOption?.text}」です
                    </p>
                  )}
                </div>
              </div>

              {/* Explanation */}
              <div className="space-y-4">
                {/* Full Explanation */}
                {currentQuestion.explanation && (
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      📝 解説
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Vocabulary */}
                {currentQuestion.vocabularyItems &&
                  currentQuestion.vocabularyItems.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        📚 重要単語リスト
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700">
                        {currentQuestion.vocabularyItems.map((vocab, i) => (
                          <li key={i}>
                            <span className="font-medium">{vocab.word}</span>
                            ：{vocab.meaning}（{vocab.katakanaReading || "N/A"}）
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Phonetic Reading */}
                {currentQuestion.questionKatakana && (
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      🔊 カタカナ読み（リンキング対応）
                    </h4>
                    <p className="text-slate-700 text-sm italic leading-relaxed whitespace-pre-wrap">
                      {currentQuestion.questionKatakana}
                    </p>
                  </div>
                )}

                {/* Grammar */}
                {currentQuestion.grammarPoints &&
                  currentQuestion.grammarPoints.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        ✏️ 文法の詳細解説
                      </h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        {currentQuestion.grammarPoints.map((point, i) => (
                          <div key={i}>
                            <p className="font-medium text-slate-900">
                              {point.rule}
                            </p>
                            <p>{point.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Speaking Practice */}
                {currentQuestion.speakingPractice && (
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      🎤 スピーキング練習
                    </h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>{currentQuestion.speakingPractice.readingInstructions}</p>
                      <p>
                        {currentQuestion.speakingPractice.dailyConversationTips}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Next Button */}
              <Button onClick={handleNext} className="w-full">
                {currentQuestionIndex < mistakeQuestions.length - 1
                  ? "次の問題へ"
                  : "復習を終了"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
