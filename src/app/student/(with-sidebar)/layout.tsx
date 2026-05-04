"use client";

import { StudentSidebar } from "@/components/student/StudentSidebar";
import { StudentTopbar } from "@/components/student/StudentTopbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function StudentSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <StudentSidebar />
      <SidebarInset>
        <StudentTopbar />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
