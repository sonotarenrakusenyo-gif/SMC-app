import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getQuizzesByCategory, QUIZ_CATEGORIES } from "@/data/quizzes";
import { useReviewMode } from "@/hooks/useReviewMode";
import { useStudyHistory } from "@/hooks/useStudyHistory";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface ReviewPageProps {
  categoryId: string;
  onBack: () => void;
}

export default function ReviewPage({ categoryId, onBack }: ReviewPageProps) {
  const [showCompletion, setShowCompletion] = useState(false);
  const questions = getQuizzesByCategory(
    categoryId as "grammar" | "vocabulary" | "reading"
  );
  const { getIncorrectQuestionsByCategory } = useStudyHistory();
  const incorrectIds = getIncorrectQuestionsByCategory(
    categoryId as "grammar" | "vocabulary" | "reading"
  );
  const reviewMode = useReviewMode(questions, incorrectIds);
  const category = QUIZ_CATEGORIES.find((c) => c.id === categoryId);

  useEffect(() => {
    if (reviewMode.isComplete && reviewMode.totalQuestions > 0) {
      const timer = setTimeout(() => {
        setShowCompletion(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [reviewMode.isComplete, reviewMode.totalQuestions]);

  if (reviewMode.totalQuestions === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            No Mistakes Yet!
          </h2>
          <p className="text-slate-700 mb-6">
            You haven't made any mistakes in {category?.name || "this"} category.
            Great job! Keep practicing to maintain your accuracy.
          </p>
          <Button onClick={onBack} className="w-full">
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Review Complete!
          </h2>
          <p className="text-slate-700 mb-6">
            You've reviewed all {reviewMode.totalQuestions} questions you got
            wrong. Now try the full quiz again to test your improvement!
          </p>
          <div className="space-y-3">
            <Button onClick={() => window.location.reload()} className="w-full">
              <RotateCcw className="h-4 w-4 mr-2" />
              Take Full Quiz Again
            </Button>
            <Button onClick={onBack} variant="outline" className="w-full">
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!reviewMode.currentQuestion) {
    return <div>Loading...</div>;
  }

  const progressPercentage =
    (reviewMode.progress / reviewMode.totalQuestions) * 100;

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
              <span className="hidden sm:inline">Back</span>
            </Button>
            <div className="text-center flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                Review Mode
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                {reviewMode.progress}/{reviewMode.totalQuestions}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                {Math.round(progressPercentage)}%
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
              <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                REVIEW MODE
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {reviewMode.currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {reviewMode.currentQuestion.options.map((option) => {
                const isCorrectOption = option.isCorrect;

                return (
                  <div
                    key={option.id}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all duration-200 ${
                      isCorrectOption
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          isCorrectOption
                            ? "border-green-500 bg-green-500"
                            : "border-slate-300"
                        }`}
                      >
                        {isCorrectOption && (
                          <span className="text-white text-sm">✓</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            isCorrectOption
                              ? "text-green-900"
                              : "text-slate-900"
                          }`}
                        >
                          {option.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Explanation Section */}
          <Card className="mb-8 p-6 border-blue-200 bg-blue-50">
            <h3 className="font-bold text-blue-900 mb-3">Explanation</h3>
            <p className="text-slate-700 mb-3">
              {reviewMode.currentQuestion.explanation}
            </p>
            {reviewMode.currentQuestion.hint && (
              <div className="rounded bg-slate-100 p-3 text-sm text-slate-700">
                <strong>Hint:</strong> {reviewMode.currentQuestion.hint}
              </div>
            )}
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <Button
              variant="outline"
              onClick={reviewMode.previousQuestion}
              disabled={reviewMode.currentIndex === 0}
              className="flex-1 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
            <Button
              onClick={reviewMode.nextQuestion}
              disabled={reviewMode.isComplete}
              className="flex-1 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Question Navigator */}
          <div className="mt-6 sm:mt-8">
            <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">
              Jump to Question
            </p>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-1 sm:gap-2">
              {Array.from({ length: reviewMode.totalQuestions }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => reviewMode.jumpToQuestion(index)}
                    className={`h-8 sm:h-10 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                      reviewMode.currentIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-slate-200 text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
