"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowRight, PlayCircle, Trophy, Target, Zap, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ScorePill } from "@/components/ui/score-pill";
import { mockResults } from "@/lib/mock-data";

export default function StudentDashboardPage() {
  const recentTests = mockResults.slice(0, 5);

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-20 selection:bg-surface-mid">
      {/* Header with quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-canvas border border-hairline rounded-[24px] p-8 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-surface-soft rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-text-main" />
            </div>
            <span className="flex items-center px-2.5 py-1 rounded-full bg-success-bg text-[10px] font-bold text-success-text uppercase tracking-wider">
              +12% vs last week
            </span>
          </div>
          <p className="text-xs font-bold text-text-subtle uppercase tracking-widest mb-1">Total Tests Taken</p>
          <h3 className="text-4xl font-bold text-text-main">12</h3>
        </div>

        <div className="bg-canvas border border-hairline rounded-[24px] p-8 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-surface-soft rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-text-main" />
            </div>
            <span className="flex items-center px-2.5 py-1 rounded-full bg-success-bg text-[10px] font-bold text-success-text uppercase tracking-wider">
              High Accuracy
            </span>
          </div>
          <p className="text-xs font-bold text-text-subtle uppercase tracking-widest mb-1">Average Score</p>
          <h3 className="text-4xl font-bold text-text-main">78<span className="text-2xl text-text-subtle">%</span></h3>
        </div>

        <div className="bg-canvas border border-hairline rounded-[24px] p-8 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-surface-soft rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6 text-text-main" />
            </div>
            <span className="flex items-center px-2.5 py-1 rounded-full bg-surface-soft text-[10px] font-bold text-text-muted uppercase tracking-wider">
              Top 10%
            </span>
          </div>
          <p className="text-xs font-bold text-text-subtle uppercase tracking-widest mb-1">Current Rank</p>
          <h3 className="text-4xl font-bold text-text-main">42<span className="text-2xl text-text-subtle">/500</span></h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-main tracking-tight">Recent Activity</h2>
            <Link href="/student/results" className="text-sm font-bold text-text-muted hover:text-text-main transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-canvas border border-hairline rounded-[32px] shadow-card-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-soft/50 text-[11px] uppercase tracking-[0.15em] text-text-subtle border-b border-hairline">
                    <th className="px-8 py-5 font-bold">Test Name</th>
                    <th className="px-8 py-5 font-bold text-center">Date</th>
                    <th className="px-8 py-5 font-bold text-center">Performance</th>
                    <th className="px-8 py-5 font-bold text-right">Reports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline/50">
                  {recentTests.map((result) => (
                    <tr key={result.id} className="group hover:bg-surface-soft/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-text-main group-hover:translate-x-1 transition-transform inline-block">{result.testTitle}</span>
                          <span className="text-xs font-medium text-text-subtle uppercase tracking-wider">Aptitude Logic</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center text-sm font-semibold text-text-muted italic">
                        {new Date(result.date).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex justify-center">
                          <ScorePill score={result.score} total={result.total} />
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <Link href={`/student/results/${result.id}`} className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-canvas border border-hairline hover:border-text-main hover:bg-surface-soft transition-all shadow-sm">
                          <ArrowRight className="w-4 h-4 text-text-main" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions & Insights */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-main tracking-tight mb-6">Quick Access</h2>
            <div className="space-y-4">
              <Link href="/student/practice" className="block group">
                <div className="p-6 bg-primary text-primary-foreground rounded-[24px] shadow-premium flex items-center justify-between hover:scale-[1.02] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Resume Practice</p>
                      <p className="text-xs text-white/60 font-medium">Topic: Logical Reasoning</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>

              <div className="p-6 bg-canvas border border-hairline rounded-[24px] shadow-card-sm flex items-center justify-between hover:border-text-subtle cursor-pointer transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-soft rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-text-main" />
                  </div>
                  <p className="font-bold text-text-main">Syllabus Overview</p>
                </div>
                <ArrowRight className="w-5 h-5 text-text-subtle group-hover:text-text-main transition-all" />
              </div>

              <div className="p-6 bg-canvas border border-hairline rounded-[24px] shadow-card-sm flex items-center justify-between hover:border-text-subtle cursor-pointer transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-soft rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-text-main" />
                  </div>
                  <p className="font-bold text-text-main">Test History</p>
                </div>
                <ArrowRight className="w-5 h-5 text-text-subtle group-hover:text-text-main transition-all" />
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-soft/50 rounded-[32px] border border-hairline">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-text-subtle mb-6 text-center">Daily Goal</h4>
            <div className="relative w-32 h-32 mx-auto mb-6">
              {/* Simple SVG ring for visualization */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-hairline" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="91.1" className="text-primary" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-text-main">75%</span>
              </div>
            </div>
            <p className="text-center text-xs font-bold text-text-muted leading-relaxed">You're only 2 tests away <br /> from your weekly milestone!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

