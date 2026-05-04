"use client";

import { useAuthStore } from "@/lib/store";
import { format } from "date-fns";

export function AdminTopbar() {
  const user = useAuthStore((state) => state.user);
  const today = format(new Date(), "EEEE, MMMM do, yyyy");

  return (
    <header className="h-16 px-6 bg-white border-b border-border flex items-center justify-between flex-shrink-0">
      <div className="text-[20px] font-bold text-ocean-deep">
        Admin Portal - {user?.name || "Administrator"}
      </div>
      <div className="text-sm text-ocean-muted hidden sm:block">
        {today}
      </div>
    </header>
  );
}
