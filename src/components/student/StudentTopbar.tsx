"use client";

import { useAuthStore } from "@/lib/store";
import { format } from "date-fns";

export function StudentTopbar() {
  const user = useAuthStore((state) => state.user);
  const today = format(new Date(), "EEEE, MMMM do, yyyy");

  return (
    <header className="h-16 px-6 bg-white border-b border-border flex items-center justify-between">
      <div className="text-[20px] font-bold text-ocean-text">
        Welcome back, {user?.name?.split(" ")[0] || "Student"}!
      </div>
      <div className="text-sm text-ocean-muted hidden sm:block">
        {today}
      </div>
    </header>
  );
}
