"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockCategories } from "@/lib/mock-data";
import { Calculator, Puzzle, Code2, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  calculator: <Calculator className="w-6 h-6 text-ocean" />,
  puzzle: <Puzzle className="w-6 h-6 text-ocean-deep" />,
  "code-2": <Code2 className="w-6 h-6 text-ocean-mid-text" />,
  "book-open": <BookOpen className="w-6 h-6 text-ocean-mid" />,
};

const bgMap: Record<string, string> = {
  calculator: "bg-ocean-mist",
  puzzle: "bg-ocean-sky",
  "code-2": "bg-[#D6EEF6]",
  "book-open": "bg-[#EAF5FA]",
};

export default function StudentPracticePage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-ocean-deep mb-2">Practice Categories</h1>
        <p className="text-sm text-ocean-muted">
          Select a category to start practicing and improve your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCategories.map((category) => (
          <Card 
            key={category.id} 
            className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)] flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                bgMap[category.icon] || "bg-ocean-mist"
              )}>
                {iconMap[category.icon]}
              </div>
              <div className="text-[12px] text-ocean-muted bg-muted px-2.5 py-1 rounded-full font-medium">
                {category.count} Tests
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-ocean-text mb-1">{category.name}</h3>
              <p className="text-[12px] text-ocean-muted mb-6">
                Master core concepts and problem-solving techniques for {category.name.toLowerCase()}.
              </p>
            </div>

            <Button variant="secondary" className="w-full" asChild>
              <Link href={`/student/practice/${category.id}`}>
                View Tests
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
