"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowRight, PlayCircle, Trophy, Target } from "lucide-react";
import Link from "next/link";
import { ScorePill } from "@/components/ui/score-pill";
import { mockResults } from "@/lib/mock-data";

export default function StudentDashboardPage() {
  const recentTests = mockResults.slice(0, 5);

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-5">
          <div className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold mb-2">Total Tests Taken</div>
          <div className="flex items-baseline gap-3">
            <span className="text-[28px] font-bold text-ocean-text">12</span>
            <span className="flex items-center text-xs font-medium text-success-text">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +2 this week
            </span>
          </div>
        </Card>
        <Card className="p-5">
          <div className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold mb-2">Average Score</div>
          <div className="flex items-baseline gap-3">
            <span className="text-[28px] font-bold text-ocean-text">78%</span>
            <span className="flex items-center text-xs font-medium text-success-text">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +5% this month
            </span>
          </div>
        </Card>
        <Card className="p-5">
          <div className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold mb-2">Current Rank</div>
          <div className="flex items-baseline gap-3">
            <span className="text-[28px] font-bold text-ocean-text">42</span>
            <span className="flex items-center text-xs font-medium text-ocean-muted">
              out of 500
            </span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tests Table */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-ocean-deep mb-4">Recent Tests</h2>
          <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-sm)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-ocean-mist text-[11px] uppercase tracking-widest text-ocean-muted border-b border-border">
                    <th className="px-6 py-4 font-semibold">Test Name</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Score</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-ocean-mid-text">
                  {recentTests.map((result) => (
                    <tr key={result.id} className="border-b border-border last:border-0 hover:bg-ocean-mist transition-colors">
                      <td className="px-6 py-4 font-medium text-ocean-text">{result.testTitle}</td>
                      <td className="px-6 py-4">{new Date(result.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <ScorePill score={result.score} total={result.total} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/student/results/${result.id}`} className="text-ocean hover:text-ocean-deep font-semibold transition-colors">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ocean-deep mb-4">Quick Access</h2>
          
          <Link href="/student/practice">
            <Card className="p-5 flex items-center justify-between hover:bg-ocean-mist group mb-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-mist flex items-center justify-center group-hover:bg-white transition-colors">
                  <PlayCircle className="w-5 h-5 text-ocean" />
                </div>
                <span className="font-semibold text-ocean-text">Start Practice</span>
              </div>
              <ArrowRight className="w-5 h-5 text-ocean-muted group-hover:text-ocean transition-colors" />
            </Card>
          </Link>

          <Card className="p-5 flex items-center justify-between hover:bg-ocean-mist group mb-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ocean-sky flex items-center justify-center group-hover:bg-white transition-colors">
                <Target className="w-5 h-5 text-ocean-deep" />
              </div>
              <span className="font-semibold text-ocean-text">View Syllabus</span>
            </div>
            <ArrowRight className="w-5 h-5 text-ocean-muted group-hover:text-ocean-deep transition-colors" />
          </Card>

          <Card className="p-5 flex items-center justify-between hover:bg-ocean-mist group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-warning-bg flex items-center justify-center group-hover:bg-white transition-colors">
                <Trophy className="w-5 h-5 text-warning-text" />
              </div>
              <span className="font-semibold text-ocean-text">Leaderboard</span>
            </div>
            <ArrowRight className="w-5 h-5 text-ocean-muted group-hover:text-warning-text transition-colors" />
          </Card>
        </div>
      </div>
    </div>
  );
}
