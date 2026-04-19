import { Card } from "@/components/ui/card";
import { WeakArea } from "@/hooks/useStudyHistory";
import { TrendingDown } from "lucide-react";

interface WeakAreasDisplayProps {
  weakAreas: WeakArea[];
}

export default function WeakAreasDisplay({ weakAreas }: WeakAreasDisplayProps) {
  if (weakAreas.length === 0) {
    return (
      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <div className="text-center">
          <div className="text-3xl mb-2">🎉</div>
          <h3 className="font-semibold text-green-900 mb-1">
            弱点はありません！
          </h3>
          <p className="text-sm text-green-700">
            練習を始めて、弱点分野を特定しましょう。
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
      <div className="flex items-start gap-3 mb-4">
        <TrendingDown className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-orange-900">弱点分野</h3>
          <p className="text-sm text-orange-700">
            これらの分野に的を絞って改善しましょう
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {weakAreas.map((area) => (
          <div
            key={area.category}
            className="bg-white rounded-lg p-4 border border-orange-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-slate-900">
                {area.category === "grammar"
                  ? "文法"
                  : area.category === "vocabulary"
                    ? "語彙"
                    : "読解"}
              </span>
              <span className="text-sm font-semibold text-orange-600">
                {Math.round(area.accuracy)}% 正解率
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  area.accuracy >= 80
                    ? "bg-green-500"
                    : area.accuracy >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${area.accuracy}%` }}
              />
            </div>

            <div className="mt-2 text-xs text-slate-600">
              {area.totalAttempts}回中{area.incorrectCount}回不正解
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-orange-100 rounded-lg text-sm text-orange-900">
        <strong>💡 ヒント:</strong> 復習モードを使って、間違えた問題に的を絞って弱点を強化しましょう。
      </div>
    </Card>
  );
}
