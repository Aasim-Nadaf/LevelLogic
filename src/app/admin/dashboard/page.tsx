"use client";

import { Card } from "@/components/ui/card";
import { Users, FileText, Activity, CheckCircle, Search, Filter, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { ScorePill } from "@/components/ui/score-pill";
import { mockResults } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  const recentActivity = mockResults.slice(0, 8);

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-20 selection:bg-surface-mid">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-canvas border border-hairline rounded-[24px] p-6 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface-soft flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5 text-text-main" />
            </div>
            <span className="flex items-center text-[10px] font-bold text-success-text gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +4%
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-subtle font-bold mb-1">Total Students</p>
          <div className="text-3xl font-bold text-text-main tracking-tight">1,248</div>
        </div>

        <div className="bg-canvas border border-hairline rounded-[24px] p-6 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface-soft flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5 text-text-main" />
            </div>
            <span className="flex items-center text-[10px] font-bold text-text-muted gap-0.5">
              Stable
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-subtle font-bold mb-1">Tests Created</p>
          <div className="text-3xl font-bold text-text-main tracking-tight">45</div>
        </div>

        <div className="bg-canvas border border-hairline rounded-[24px] p-6 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface-soft flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="w-5 h-5 text-text-main" />
            </div>
            <span className="flex items-center text-[10px] font-bold text-success-text gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +1.2%
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-subtle font-bold mb-1">Avg Score</p>
          <div className="text-3xl font-bold text-text-main tracking-tight">72<span className="text-xl text-text-subtle">%</span></div>
        </div>

        <div className="bg-canvas border border-hairline rounded-[24px] p-6 shadow-card-sm hover:shadow-card-md transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface-soft flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle className="w-5 h-5 text-text-main" />
            </div>
            <span className="flex items-center text-[10px] font-bold text-danger-text gap-0.5">
              <ArrowDownRight className="w-3 h-3" /> -2
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-subtle font-bold mb-1">Active Tests</p>
          <div className="text-3xl font-bold text-text-main tracking-tight">12</div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Recent Candidate Activity</h2>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 h-10 bg-canvas border border-hairline rounded-xl text-text-subtle focus-within:border-text-main transition-all">
              <Search className="w-4 h-4" />
              <input type="text" placeholder="Search candidates..." className="bg-transparent border-none outline-none text-sm font-medium w-full md:w-48 placeholder:text-text-subtle" />
            </div>
            <button className="flex items-center gap-2 px-4 h-10 bg-canvas border border-hairline rounded-xl text-sm font-bold text-text-muted hover:bg-surface-soft transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-canvas border border-hairline rounded-[32px] shadow-card-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-soft/50 text-[11px] uppercase tracking-[0.15em] text-text-subtle border-b border-hairline">
                  <th className="px-8 py-5 font-bold">Candidate</th>
                  <th className="px-8 py-5 font-bold">Assessment</th>
                  <th className="px-8 py-5 font-bold text-center">Score</th>
                  <th className="px-8 py-5 font-bold text-center">Date</th>
                  <th className="px-8 py-5 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline/50">
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="group hover:bg-surface-soft/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center font-bold text-text-main text-xs">
                          {activity.studentName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-text-main">{activity.studentName}</span>
                          <span className="text-[10px] font-bold text-text-subtle tracking-wider uppercase">{activity.studentEmail}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-text-main">{activity.testTitle}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex justify-center">
                        <ScorePill score={activity.score} total={activity.total} percentage={activity.percentage} />
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-sm font-semibold text-text-muted italic">
                      {new Date(activity.date).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 rounded-lg hover:bg-surface-soft text-text-subtle hover:text-text-main transition-all">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

