import * as React from "react"
import { cn } from "@/lib/utils"

export interface ScorePillProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  total?: number;
  percentage?: number;
}

export function ScorePill({ score, total, percentage, className, ...props }: ScorePillProps) {
  const calcPercentage = percentage ?? (total ? (score / total) * 100 : score);
  
  let colorClass = "";
  if (calcPercentage >= 80) {
    colorClass = "bg-success-bg/30 text-success-text border-success-text/10";
  } else if (calcPercentage >= 60) {
    colorClass = "bg-warning-bg/30 text-warning-text border-warning-text/10";
  } else {
    colorClass = "bg-danger-bg/30 text-danger-text border-danger-text/10";
  }

  const displayScore = total ? `${score}/${total}` : `${calcPercentage.toFixed(0)}%`;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase whitespace-nowrap transition-all shadow-sm",
        colorClass,
        className
      )}
      {...props}
    >
      {displayScore}
    </div>
  )
}

