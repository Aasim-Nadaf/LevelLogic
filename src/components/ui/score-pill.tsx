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
  if (calcPercentage >= 75) {
    colorClass = "bg-[#E6F4EE] text-[#1B5E42] border-[#9DD4BA]";
  } else if (calcPercentage >= 50) {
    colorClass = "bg-[#E8F4F8] text-[#1B4F72] border-[#5BA4BE]";
  } else {
    colorClass = "bg-[#FEF0F0] text-[#7A1B1B] border-[#F0B8B8]";
  }

  const displayScore = total ? `${score}/${total}` : `${calcPercentage.toFixed(0)}%`;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        colorClass,
        className
      )}
      {...props}
    >
      {displayScore}
    </div>
  )
}
