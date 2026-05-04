"use client";

import { useParams } from "next/navigation";
import { mockResults } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, Target, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function ScoreRing({ percentage }: { percentage: number }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="stroke-border"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="stroke-ocean transition-all duration-1000 ease-out"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[36px] font-bold text-ocean-text">
          {percentage.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}

export default function ResultPage() {
  const params = useParams();
  const resultId = params.resultId as string;
  const result = mockResults.find((r) => r.id === resultId) || mockResults[0];

  const isPass = result.status === 'Pass';

  return (
    <div className="max-w-[800px] mx-auto pb-12">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4 pl-0 hover:bg-transparent hover:text-ocean-deep">
          <Link href="/student/dashboard">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-ocean-deep mb-2">{result.testTitle} - Result</h1>
        <p className="text-sm text-ocean-muted">
          Completed on {new Date(result.date).toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Main Score Card */}
        <Card className="md:col-span-2 p-8 flex flex-col sm:flex-row items-center justify-center gap-10">
          <ScoreRing percentage={result.percentage} />
          
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold mb-4",
              isPass ? "bg-success-bg text-success-text" : "bg-danger-bg text-danger-text"
            )}>
              {isPass ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {result.status}
            </div>
            <h2 className="text-[28px] font-bold text-ocean-text mb-1">
              {result.score} / {result.total}
            </h2>
            <p className="text-sm text-ocean-muted">Total Questions Correct</p>
          </div>
        </Card>

        {/* Stats Column */}
        <div className="flex flex-col gap-6">
          <Card className="p-5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-ocean-mist flex items-center justify-center">
                <Target className="w-4 h-4 text-ocean" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Accuracy</span>
            </div>
            <div className="text-[24px] font-bold text-ocean-text">
              {result.percentage.toFixed(0)}%
            </div>
          </Card>
          <Card className="p-5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-ocean-sky flex items-center justify-center">
                <Clock className="w-4 h-4 text-ocean-deep" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Time Taken</span>
            </div>
            <div className="text-[24px] font-bold text-ocean-text">
              24m 15s
            </div>
          </Card>
        </div>
      </div>

      {/* Category Performance */}
      <h2 className="text-lg font-bold text-ocean-deep mb-4 mt-8">Performance by Section</h2>
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-ocean-text">Logical Reasoning</span>
              <span className="text-ocean-text">8/10</span>
            </div>
            <div className="h-2 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-ocean rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-ocean-text">Quantitative Aptitude</span>
              <span className="text-ocean-text">12/15</span>
            </div>
            <div className="h-2 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-ocean rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-ocean-text">Verbal English</span>
              <span className="text-ocean-text">4/5</span>
            </div>
            <div className="h-2 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-ocean rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
