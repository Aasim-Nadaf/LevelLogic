"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { mockTests, mockQuestions } from "@/lib/mock-data";
import { useTestStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TestSessionPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.testId as string;
  const test = mockTests.find((t) => t.id === testId) || mockTests[0];
  const questions = mockQuestions; // In a real app, fetch questions for this testId
  
  const { 
    startTest, 
    answers, 
    selectAnswer, 
    currentQuestionIndex, 
    setQuestionIndex, 
    timeRemainingSeconds, 
    decrementTime,
    endTest 
  } = useTestStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    startTest(test.id, test.durationMinutes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test.id, test.durationMinutes]);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(timer);
  }, [decrementTime, mounted]);

  if (!mounted) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const isWarning = timeRemainingSeconds !== null && timeRemainingSeconds < 120; // less than 2 mins

  const handleNext = () => {
    if (!isLastQuestion) setQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrev = () => {
    if (!isFirstQuestion) setQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmitTest = () => {
    // In a real app, send answers to server
    endTest();
    router.push(`/student/results/res_001`); // mock redirect to result
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden font-sans">
      {/* Header Bar */}
      <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-border flex-shrink-0">
        <div className="text-[16px] font-bold text-ocean-text">
          {test.title}
        </div>
        <div className="text-[12px] text-ocean-muted absolute left-1/2 -translate-x-1/2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className={cn(
          "px-3 py-1.5 rounded-[8px] font-mono text-[14px] border",
          isWarning 
            ? "bg-danger-bg text-danger-text border-danger-border animate-pulse" 
            : "bg-background text-ocean-deep border-border"
        )}>
          {formatTime(timeRemainingSeconds)}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-border">
        <div 
          className="h-full bg-ocean transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto flex items-start justify-center p-6 sm:p-12 relative">
        {/* Question Palette Sidebar (Desktop) */}
        <div className="hidden lg:flex flex-col absolute left-6 top-12 w-48 bg-white border border-border rounded-[14px] p-4 shadow-[var(--shadow-card-sm)]">
          <h3 className="text-sm font-semibold text-ocean-deep mb-3">Question Palette</h3>
          <div className="grid grid-cols-4 gap-2">
            {questions.map((_, idx) => {
              const isAttempted = answers[questions[idx].id] !== undefined;
              const isCurrent = idx === currentQuestionIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setQuestionIndex(idx)}
                  className={cn(
                    "h-8 w-8 rounded text-xs font-medium flex items-center justify-center transition-colors",
                    isCurrent ? "bg-ocean-deep text-white border-none" :
                    isAttempted ? "bg-ocean text-white border-none" :
                    "bg-border text-ocean-mid-text hover:bg-ocean-mist"
                  )}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        <div className="w-full max-w-[720px] bg-white border border-border rounded-[16px] shadow-[var(--shadow-card-lg)] p-6 sm:p-9">
          <h2 className="text-[20px] font-semibold text-ocean-text mb-7 leading-snug">
            {currentQuestionIndex + 1}. {currentQuestion.text}
          </h2>

          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentQuestion.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(currentQuestion.id, idx)}
                  className={cn(
                    "flex items-center justify-between px-5 h-[56px] rounded-[10px] border transition-all duration-150 text-left",
                    isSelected 
                      ? "bg-ocean border-[#246D8C] text-white" 
                      : "bg-white border-border text-ocean-mid-text hover:bg-ocean-mist hover:border-ocean-mid hover:text-ocean-text"
                  )}
                >
                  <span className="text-sm font-medium">{option}</span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-white" />}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="flex items-center justify-between h-16 px-6 bg-white border-t border-border flex-shrink-0">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={isFirstQuestion}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </Button>

        <div className="flex gap-3">
          {!isLastQuestion ? (
            <Button onClick={handleNext} className="gap-2">
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button variant="accent" onClick={handleSubmitTest}>
              Submit Test
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
