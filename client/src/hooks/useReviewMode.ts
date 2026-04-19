import { useState, useMemo } from "react";
import { QuizQuestion } from "@/data/quizzes";

export const useReviewMode = (
  allQuestions: QuizQuestion[],
  incorrectQuestionIds: string[]
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter questions to only include incorrect ones
  const reviewQuestions = useMemo(() => {
    return allQuestions.filter((q) => incorrectQuestionIds.includes(q.id));
  }, [allQuestions, incorrectQuestionIds]);

  const currentQuestion = reviewQuestions[currentIndex] || null;
  const isComplete = currentIndex >= reviewQuestions.length;
  const progress = reviewQuestions.length > 0 ? currentIndex + 1 : 0;

  const nextQuestion = () => {
    if (currentIndex < reviewQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
  };

  const jumpToQuestion = (index: number) => {
    if (index >= 0 && index < reviewQuestions.length) {
      setCurrentIndex(index);
    }
  };

  return {
    reviewQuestions,
    currentQuestion,
    currentIndex,
    isComplete,
    progress,
    totalQuestions: reviewQuestions.length,
    nextQuestion,
    previousQuestion,
    reset,
    jumpToQuestion,
  };
};
