"use client";

import { Card } from "@/components/ui/card";
import { Users, FileText, Activity, CheckCircle } from "lucide-react";
import { ScorePill } from "@/components/ui/score-pill";
import { mockResults } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  const recentActivity = mockResults.slice(0, 8);

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-ocean-mist flex items-center justify-center">
              <Users className="w-4 h-4 text-ocean" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Total Students</span>
          </div>
          <div className="text-[28px] font-bold text-ocean-text">1,248</div>
        </Card>
        <Card className="p-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-ocean-sky flex items-center justify-center">
              <FileText className="w-4 h-4 text-ocean-deep" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Tests Created</span>
          </div>
          <div className="text-[28px] font-bold text-ocean-text">45</div>
        </Card>
        <Card className="p-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-success-bg flex items-center justify-center">
              <Activity className="w-4 h-4 text-success-text" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Avg Score</span>
          </div>
          <div className="text-[28px] font-bold text-ocean-text">72%</div>
        </Card>
        <Card className="p-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-warning-bg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-warning-text" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-ocean-muted font-semibold">Active Tests</span>
          </div>
          <div className="text-[28px] font-bold text-ocean-text">12</div>
        </Card>
      </div>

      {/* Activity Table */}
      <div>
        <h2 className="text-lg font-bold text-ocean-deep mb-4">Recent Activity</h2>
        <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-sm)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-ocean-mist text-[11px] uppercase tracking-widest text-ocean-muted border-b border-border">
                  <th className="px-6 py-4 font-semibold cursor-pointer hover:text-ocean transition-colors">Student</th>
                  <th className="px-6 py-4 font-semibold cursor-pointer hover:text-ocean transition-colors">Test Name</th>
                  <th className="px-6 py-4 font-semibold cursor-pointer hover:text-ocean transition-colors">Score</th>
                  <th className="px-6 py-4 font-semibold cursor-pointer hover:text-ocean transition-colors">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-ocean-mid-text">
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-b border-border last:border-0 hover:bg-ocean-mist transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-ocean-text">{activity.studentName}</div>
                      <div className="text-xs text-ocean-muted">{activity.studentEmail}</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ocean-deep">{activity.testTitle}</td>
                    <td className="px-6 py-4">
                      <ScorePill score={activity.score} total={activity.total} percentage={activity.percentage} />
                    </td>
                    <td className="px-6 py-4">{new Date(activity.date).toLocaleDateString()}</td>
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
