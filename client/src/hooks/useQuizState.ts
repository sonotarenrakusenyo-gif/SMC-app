import { useState, useCallback } from "react";
import { QuizQuestion } from "@/data/quizzes";

export interface QuizAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  isQuizComplete: boolean;
  score: number;
}

export const useQuizState = (questions: QuizQuestion[]) => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    isQuizComplete: false,
    score: 0,
  });

  const currentQuestion = questions[state.currentQuestionIndex];

  const answerQuestion = useCallback(
    (selectedOptionId: string) => {
      if (!currentQuestion) return;

      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === selectedOptionId
      );
      const isCorrect = selectedOption?.isCorrect || false;

      const newAnswer: QuizAnswer = {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect,
      };

      setState((prev) => {
        const newAnswers = [...prev.answers, newAnswer];
        const newScore = newAnswers.filter((a) => a.isCorrect).length;
        const isComplete = prev.currentQuestionIndex === questions.length - 1;
        return {
          currentQuestionIndex: isComplete
            ? prev.currentQuestionIndex
            : prev.currentQuestionIndex + 1,
          answers: newAnswers,
          isQuizComplete: isComplete,
          score: newScore,
        };
      });
    },
    [currentQuestion, questions.length]
  );

  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      answers: [],
      isQuizComplete: false,
      score: 0,
    });
  }, []);

  // 前の問題へ移動（index を -1、最小 0）
  const goToPreviousQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  }, []);

  // 次の問題へ移動（確認済み問題を閲覧する際のナビゲーション用）
  const goToNextQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.min(
        questions.length - 1,
        prev.currentQuestionIndex + 1
      ),
    }));
  }, [questions.length]);

  const getScorePercentage = useCallback(() => {
    return Math.round((state.score / questions.length) * 100);
  }, [state.score, questions.length]);

  const getCurrentAnswer = useCallback(() => {
    return state.answers.find(
      (a) => a.questionId === currentQuestion?.id
    );
  }, [state.answers, currentQuestion]);

  return {
    ...state,
    currentQuestion,
    answerQuestion,
    resetQuiz,
    goToPreviousQuestion,
    goToNextQuestion,
    getScorePercentage,
    getCurrentAnswer,
    totalQuestions: questions.length,
  };
};
