"use client";

import { useState } from "react";
import { mockResults } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScorePill } from "@/components/ui/score-pill";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminResultsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock filtering
  const filteredResults = mockResults.filter(
    (res) =>
      res.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.testTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-ocean-deep">All Results</h1>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean-muted" />
            <Input
              placeholder="Search student or test..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-[42px] bg-surface-bg-light border-border focus-visible:border-ocean"
            />
          </div>
          <Button
            variant="outline"
            className="border-ocean-deep text-ocean-deep hover:bg-ocean-mist h-[42px] gap-2"
          >
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-md)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-ocean-mist text-[11px] uppercase tracking-widest text-ocean-muted border-b border-border">
                <th className="px-6 py-4 font-semibold">#</th>
                <th className="px-6 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Test Name</th>
                <th className="px-6 py-4 font-semibold text-center">Score</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-ocean-mid-text">
              {paginatedResults.length > 0 ? (
                paginatedResults.map((result, idx) => {
                  const isPass = result.status === "Pass";
                  return (
                    <tr
                      key={result.id}
                      className="border-b border-border last:border-0 hover:bg-ocean-mist transition-colors"
                    >
                      <td className="px-6 py-4">
                        {(currentPage - 1) * itemsPerPage + idx + 1}
                      </td>
                      <td className="px-6 py-4 font-medium text-ocean-text">
                        {result.studentName}
                      </td>
                      <td className="px-6 py-4">{result.studentEmail}</td>
                      <td className="px-6 py-4 font-medium text-ocean-deep">
                        {result.testTitle}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <ScorePill
                          score={result.score}
                          total={result.total}
                          percentage={result.percentage}
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={cn(
                            "inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider",
                            isPass
                              ? "bg-success-bg text-success-text"
                              : "bg-danger-bg text-danger-text",
                          )}
                        >
                          {result.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {new Date(result.date).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-ocean-muted"
                  >
                    No results found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-white">
            <span className="text-sm text-ocean-muted">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredResults.length)} of{" "}
              {filteredResults.length} entries
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                    currentPage === i + 1
                      ? "bg-ocean text-white"
                      : "text-ocean-mid-text hover:bg-ocean-mist",
                  )}
                >
                  {i + 1}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
