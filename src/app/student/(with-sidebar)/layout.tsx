"use client";

import { StudentSidebar } from "@/components/student/StudentSidebar";
import { StudentTopbar } from "@/components/student/StudentTopbar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudentSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <StudentSidebar />
      </div>

      {/* Mobile Sidebar overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-ocean-abyss/20 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar drawer */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <StudentSidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile header with menu button */}
        <div className="md:hidden flex items-center h-16 px-4 bg-white border-b border-border">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-ocean-text" />
          </Button>
          <div className="ml-4 text-lg font-bold text-ocean-text">AptitudePro</div>
        </div>

        <div className="hidden md:block">
          <StudentTopbar />
        </div>
        
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
