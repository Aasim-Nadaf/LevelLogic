"use client";

import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { ScorePill } from "@/components/ui/score-pill";
import { mockResults } from "@/lib/mock-data";

export default function StudentResultsPage() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-20 selection:bg-surface-strong">
      {/* Editorial Header */}
      <div className="mb-10">
        <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.72px] text-ink mb-2">My Results</h1>
        <p className="text-[16px] text-body max-w-[600px] leading-[1.5]">
          Review your past test performance, analyze your logical milestones, and track your progress toward mastery.
        </p>
      </div>
      
      {/* Full width Results Table */}
      <div className="bg-canvas border border-hairline rounded-[24px] shadow-none overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-canvas-soft border-b border-hairline">
                <th className="px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.88px] text-ink">Test Name</th>
                <th className="px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.88px] text-ink text-center">Date Taken</th>
                <th className="px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.88px] text-ink text-center">Score</th>
                <th className="px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.88px] text-ink text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline-soft">
              {mockResults.map((result) => (
                <tr key={result.id} className="group hover:bg-canvas-soft transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-card border border-hairline flex items-center justify-center shadow-none flex-shrink-0">
                        <FileText className="w-5 h-5 text-ink" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-ink group-hover:translate-x-1 transition-transform inline-block">
                          {result.testTitle}
                        </span>
                        <span className="text-[13px] font-mono text-body mt-1">
                          Ref: {result.id.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center text-[14px] font-mono text-body">
                    {new Date(result.date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center">
                      <ScorePill score={result.score} total={result.total} />
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link 
                      href={`/student/results/${result.id}`} 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-card border border-hairline hover:border-hairline-strong hover:bg-canvas-soft transition-all shadow-none"
                    >
                      <ArrowRight className="w-4 h-4 text-ink" />
                    </Link>
                  </td>
                </tr>
              ))}
              
              {mockResults.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-canvas-soft mb-4">
                      <FileText className="w-8 h-8 text-muted" />
                    </div>
                    <p className="text-[16px] text-ink font-medium">No results found</p>
                    <p className="text-[14px] text-body mt-1">You haven't taken any tests yet.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
