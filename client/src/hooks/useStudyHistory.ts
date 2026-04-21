import { useState, useEffect, useCallback } from "react";

export interface StudyRecord {
  questionId: string;
  category: "grammar" | "vocabulary" | "reading";
  isCorrect: boolean;
  timestamp: number;
}

export interface WeakArea {
  category: "grammar" | "vocabulary" | "reading";
  incorrectCount: number;
  totalAttempts: number;
  accuracy: number;
}

const STORAGE_KEY = "smc_esl_study_history";

export const useStudyHistory = () => {
  const [history, setHistory] = useState<StudyRecord[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse study history:", error);
        setHistory([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }
  }, [history, isLoaded]);

  const addRecord = (record: Omit<StudyRecord, "timestamp">) => {
    setHistory((prev) => [
      ...prev,
      {
        ...record,
        timestamp: Date.now(),
      },
    ]);
  };

  const getWeakAreas = (): WeakArea[] => {
    const categoryStats: Record<
      string,
      { incorrect: number; total: number }
    > = {
      grammar: { incorrect: 0, total: 0 },
      vocabulary: { incorrect: 0, total: 0 },
      reading: { incorrect: 0, total: 0 },
    };

    history.forEach((record) => {
      categoryStats[record.category].total += 1;
      if (!record.isCorrect) {
        categoryStats[record.category].incorrect += 1;
      }
    });

    return Object.entries(categoryStats)
      .map(([category, stats]) => ({
        category: category as "grammar" | "vocabulary" | "reading",
        incorrectCount: stats.incorrect,
        totalAttempts: stats.total,
        accuracy:
          stats.total > 0 ? ((stats.total - stats.incorrect) / stats.total) * 100 : 0,
      }))
      .filter((area) => area.totalAttempts > 0)
      .sort((a, b) => a.accuracy - b.accuracy); // Weakest areas first
  };

  const getIncorrectQuestions = (): string[] => {
    // 問題ごとに最新の試行を取得し、最後の試行が不正解だったものだけを返す
    // これにより同じ問題の重複排除と、復習後に正解した問題の除外が行われる
    const lastAttemptByQuestion = new Map<string, StudyRecord>();
    history.forEach((record) => {
      const existing = lastAttemptByQuestion.get(record.questionId);
      if (!existing || record.timestamp > existing.timestamp) {
        lastAttemptByQuestion.set(record.questionId, record);
      }
    });
    return Array.from(lastAttemptByQuestion.values())
      .filter((record) => !record.isCorrect)
      .map((record) => record.questionId);
  };

  const getIncorrectQuestionsByCategory = (
    category: "grammar" | "vocabulary" | "reading"
  ): string[] => {
    return history
      .filter((record) => record.category === category && !record.isCorrect)
      .map((record) => record.questionId);
  };

  // クイズ完了後にホーム画面に戻ったとき、最新の localStorage データを再読み込みする
  const reloadFromStorage = useCallback(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    } else {
      setHistory([]);
    }
  }, []); // setHistory は安定しているので deps は空

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  /** 不正解の記録のみ除去（正解の履歴は残す）。復習用「間違えた問題」リストをクリアする。 */
  const clearIncorrectHistory = useCallback(() => {
    setHistory((prev) => prev.filter((r) => r.isCorrect));
  }, []);

  // Remove a question from incorrect list (when user gets it right in review mode)
  const markQuestionAsCorrectInReview = (questionId: string) => {
    setHistory((prev) =>
      prev.map((record) =>
        record.questionId === questionId && !record.isCorrect
          ? { ...record, isCorrect: true }
          : record
      )
    );
  };

  const getStatistics = () => {
    const total = history.length;
    const correct = history.filter((r) => r.isCorrect).length;
    const accuracy = total > 0 ? (correct / total) * 100 : 0;

    return {
      totalQuestions: total,
      correctAnswers: correct,
      incorrectAnswers: total - correct,
      accuracy: Math.round(accuracy * 10) / 10, // Round to 1 decimal
    };
  };

  return {
    history,
    isLoaded,
    addRecord,
    reloadFromStorage,
    getWeakAreas,
    getIncorrectQuestions,
    getIncorrectQuestionsByCategory,
    clearHistory,
    clearIncorrectHistory,
    getStatistics,
    markQuestionAsCorrectInReview,
  };
};
