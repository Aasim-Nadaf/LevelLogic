"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockTests } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminAddQuestionsPage() {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState<number>(0);
  const [difficulty, setDifficulty] = useState("Medium");
  const [testId, setTestId] = useState("");

  const updateOption = (idx: number, value: string) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding question", { questionText, options, correctOption, difficulty, testId });
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectOption(0);
    // show toast in a real app
  };

  return (
    <div className="max-w-[1400px] mx-auto h-full flex flex-col lg:flex-row gap-8">
      {/* Left Form (55%) */}
      <div className="flex-1 lg:max-w-[55%]">
        <h1 className="text-2xl font-bold text-ocean-deep mb-6">Add Questions</h1>
        <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-md)] p-6 sm:p-8">
          <form onSubmit={handleAddQuestion} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="test">Select Test</Label>
              <select
                id="test"
                value={testId}
                onChange={(e) => setTestId(e.target.value)}
                required
                className="w-full h-[42px] rounded-[10px] border border-border bg-muted px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ocean focus-visible:ring-[3px] focus-visible:ring-ocean/20"
              >
                <option value="">Choose a test to add questions to...</option>
                {mockTests.map((t) => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="question">Question Text</Label>
              <textarea
                id="question"
                rows={4}
                required
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Type the question here..."
                className="w-full rounded-[10px] border border-border bg-muted p-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ocean focus-visible:ring-[3px] focus-visible:ring-ocean/20 resize-none"
              />
            </div>

            <div className="space-y-4">
              <Label>Options</Label>
              {options.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="correctOption"
                    checked={correctOption === idx}
                    onChange={() => setCorrectOption(idx)}
                    className="w-4 h-4 text-ocean focus:ring-ocean border-border"
                  />
                  <Input
                    placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                    value={opt}
                    onChange={(e) => updateOption(idx, e.target.value)}
                    required
                    className="flex-1"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label>Difficulty</Label>
              <div className="flex p-1 bg-sidebar border border-border rounded-[10px] w-full max-w-[300px]">
                {['Easy', 'Medium', 'Hard'].map((diff) => (
                  <button
                    type="button"
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={cn(
                      "flex-1 py-1.5 text-sm font-medium rounded-[8px] transition-all duration-200",
                      difficulty === diff 
                        ? "bg-white text-ocean border border-ocean shadow-sm" 
                        : "text-ocean-mid-text hover:text-ocean-text"
                    )}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="accent" type="submit" size="lg" className="w-full">
              Add Question
            </Button>
          </form>
        </div>
      </div>

      {/* Right Preview (45%) */}
      <div className="flex-1 lg:max-w-[45%] lg:sticky lg:top-8 self-start">
        <h2 className="text-lg font-bold text-ocean-deep mb-4">Live Preview</h2>
        
        {/* Render exactly as test UI */}
        <div className="w-full bg-white border border-border rounded-[16px] shadow-[var(--shadow-card-lg)] p-6 sm:p-9 relative">
          <div className="absolute -top-3 right-4 bg-ocean-sky text-ocean-deep text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded">
            {difficulty}
          </div>
          <h2 className="text-[20px] font-semibold text-ocean-text mb-7 leading-snug min-h-[60px] whitespace-pre-wrap">
            1. {questionText || "Question preview will appear here..."}
          </h2>

          <div className="flex flex-col gap-3">
            {options.map((option, idx) => {
              const isSelected = correctOption === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center justify-between px-5 h-[56px] rounded-[10px] border transition-all duration-150",
                    isSelected 
                      ? "bg-ocean border-[#246D8C] text-white" 
                      : "bg-white border-border text-ocean-mid-text"
                  )}
                >
                  <span className="text-sm font-medium">{option || `Option ${String.fromCharCode(65 + idx)}`}</span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-white" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
