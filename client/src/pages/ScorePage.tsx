import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, Home } from "lucide-react";

interface ScorePageProps {
  score: number;
  totalQuestions: number;
  categoryName: string;
  categoryId?: string;
  onRetry: () => void;
  onHome: () => void;
}

export default function ScorePage({
  score,
  totalQuestions,
  categoryName,
  categoryId,
  onRetry,
  onHome,
}: ScorePageProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 70;

  const getPerformanceMessage = () => {
    if (percentage === 100) {
      return "満点！ 🎉 中級レベルの準備は完璧です！";
    } else if (percentage >= 80) {
      return "素晴らしい！ 🌟 この分野をしっかり理解できています。";
    } else if (percentage >= 70) {
      return "よくできました！ 👍 正しい方向に進んでいます。";
    } else if (percentage >= 50) {
      return "練習を続けましょう！ 💪 解説を読み返してもう一度挑戦を。";
    } else {
      return "あきらめないで！ 🚀 復習して再挑戦すれば必ず伸びます。";
    }
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "from-green-400 to-green-600";
    if (percentage >= 70) return "from-blue-400 to-blue-600";
    if (percentage >= 50) return "from-yellow-400 to-yellow-600";
    return "from-orange-400 to-orange-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-3 sm:p-4">
      {/* Score Card */}
      <div className="w-full max-w-md">
        <Card className="overflow-hidden shadow-lg">
          {/* Header with gradient */}
          <div
            className={`bg-gradient-to-br ${getPerformanceColor()} p-6 sm:p-8 text-white text-center`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">クイズ完了！</h1>
            <p className="text-base sm:text-lg opacity-90">{categoryName} カテゴリー</p>
          </div>

          {/* Score Display */}
          <div className="p-6 sm:p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 mb-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl font-bold text-slate-900">
                    {percentage}%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">
                    {score}問正解 / {totalQuestions}問
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="mb-6">
              <p className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {getPerformanceMessage()}
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded"></div>
            </div>

            {/* Detailed Breakdown */}
            <Card className="mb-6 bg-slate-50 p-4 border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600">正解数</p>
                  <p className="text-2xl font-bold text-green-600">{score}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">不正解数</p>
                  <p className="text-2xl font-bold text-red-600">
                    {totalQuestions - score}
                  </p>
                </div>
              </div>
            </Card>

            {/* Recommendation */}
            <div className="mb-8 rounded-lg bg-blue-50 border border-blue-200 p-4 text-left">
              <p className="text-sm text-blue-900">
                <strong>💡 ヒント：</strong>{" "}
                {isPassed
                  ? "よく頑張りました！他のカテゴリーも練習して、全分野のスキルをさらに磨きましょう。"
                  : "このクイズの解説をもう一度読み返し、再挑戦してみましょう。繰り返すことで力がつきます！"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <Button
                onClick={onRetry}
                className="w-full flex items-center justify-center gap-2 text-xs sm:text-base"
                size="lg"
              >
                <RotateCcw className="h-4 w-4" />
                <span className="hidden sm:inline">もう一度やり直す</span>
                <span className="sm:hidden">やり直す</span>
              </Button>
              <Button
                onClick={onHome}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-xs sm:text-base"
                size="lg"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">ホームに戻る</span>
                <span className="sm:hidden">ホーム</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-slate-600">
          <p>すべてのカテゴリーを習得して、学力を高めましょう！</p>
          <p className="mt-1">中級レベルの目安: 70%以上</p>
        </div>
      </div>
    </div>
  );
}
