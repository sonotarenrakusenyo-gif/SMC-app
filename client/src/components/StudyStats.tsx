import { Card } from "@/components/ui/card";
import { BarChart3, CheckCircle, XCircle, Target } from "lucide-react";

interface StudyStatsProps {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
}

export default function StudyStats({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  accuracy,
}: StudyStatsProps) {
  if (totalQuestions === 0) {
    return null;
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-blue-900">学習統計</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Total Questions */}
        <div className="bg-white rounded-lg p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-medium text-slate-600">完了数</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{totalQuestions}</p>
        </div>

        {/* Accuracy */}
        <div className="bg-white rounded-lg p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-medium text-slate-600">正解率</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{accuracy.toFixed(1)}%</p>
        </div>

        {/* Correct */}
        <div className="bg-white rounded-lg p-4 border border-green-100">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-xs font-medium text-slate-600">正解</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{correctAnswers}</p>
        </div>

        {/* Incorrect */}
        <div className="bg-white rounded-lg p-4 border border-red-100">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="h-4 w-4 text-red-600" />
            <span className="text-xs font-medium text-slate-600">
              不正解
            </span>
          </div>
          <p className="text-2xl font-bold text-red-600">{incorrectAnswers}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300"
          style={{ width: `${accuracy}%` }}
        />
      </div>

      <div className="mt-3 text-xs text-slate-600 text-center">
        {accuracy >= 70
          ? "🎯 素晴らしい進捗です！中級レベルに向けて順調に進んでいます。"
          : accuracy >= 50
            ? "📈 正解率を上げるために練習を続けてください。"
            : "💪 もっと練習が必要です。弱点分野を復習してもう一度挑戦してください。"}
      </div>
    </Card>
  );
}
