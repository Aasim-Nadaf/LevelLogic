"use client";

import { useAuthStore } from "@/lib/store";
import { format } from "date-fns";
import { Bell, Search, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function StudentTopbar() {
  const user = useAuthStore((state) => state.user);
  const today = format(new Date(), "MMMM do, yyyy");

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-hairline bg-canvas px-4">
      <div className="flex items-center gap-2 flex-1">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold text-text-main tracking-tight">
            Welcome back, {user?.name?.split(" ")[0] || "Student"}
          </h1>
          <p className="text-[11px] text-text-subtle tracking-wide uppercase hidden sm:block">
            {today}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 h-8 bg-surface-soft border border-hairline rounded-lg text-text-subtle group cursor-pointer hover:border-text-subtle transition-all">
          <Search className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">Search tests...</span>
        </div>

        <button className="relative w-8 h-8 rounded-lg bg-surface-soft flex items-center justify-center border border-hairline hover:bg-surface-mid transition-all">
          <Bell className="w-4 h-4 text-text-main" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary border border-surface-soft rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 pl-4 border-l border-hairline">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-xs font-semibold text-text-main">
              {user?.name || "Student User"}
            </span>
            <span className="text-[10px] text-text-subtle uppercase tracking-wider">
              Lvl 12 Student
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
