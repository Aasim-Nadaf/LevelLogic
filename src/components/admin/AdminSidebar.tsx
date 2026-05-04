"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, FileQuestion, Users, LogOut } from "lucide-react";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Create Test", href: "/admin/create-test", icon: PlusCircle },
  { name: "Add Questions", href: "/admin/add-questions", icon: FileQuestion },
  { name: "All Results", href: "/admin/results", icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <aside className="w-[256px] bg-sidebar border-r border-sidebar-border flex flex-col h-full flex-shrink-0">
      <div className="p-5">
        <div className="text-[18px] font-bold text-ocean-deep">
          Aptitude<span className="text-ocean-text">Admin</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 h-[44px] px-3 rounded-[10px] transition-colors text-sm",
                isActive
                  ? "bg-ocean-deep text-white font-semibold border-l-[3px] border-ocean-abyss"
                  : "text-ocean-mid-text hover:bg-sidebar-accent hover:text-ocean-text border-l-[3px] border-transparent"
              )}
            >
              <Icon className={cn("w-[18px] h-[18px]", isActive ? "text-white" : "text-ocean-muted")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 h-[44px] w-full px-3 rounded-[10px] transition-colors text-sm text-ocean-mid-text hover:bg-danger-bg hover:text-danger-text"
        >
          <LogOut className="w-[18px] h-[18px] text-ocean-muted group-hover:text-danger-text" />
          Logout
        </button>
      </div>
    </aside>
  );
}
