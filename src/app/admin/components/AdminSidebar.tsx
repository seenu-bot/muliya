"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3, Users, MapPin, FileText,
  HelpCircle, TrendingUp, Briefcase, Settings, LogOut,
} from "lucide-react";

const menu = [
  { label: "Dashboard",  href: "/admin/dashboard",  icon: BarChart3 },
  { label: "Leads",      href: "/admin/leads",       icon: Users },
  { label: "Branches",   href: "/admin/branches",    icon: MapPin },
  { label: "Blog Posts", href: "/admin/blogs",       icon: FileText },
  { label: "FAQs",       href: "/admin/faqs",        icon: HelpCircle },
  { label: "Gold Price", href: "/admin/gold-price",  icon: TrendingUp },
  { label: "Services",   href: "/admin/services",    icon: Briefcase },
  { label: "Settings",   href: "/admin/settings",    icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("hgc_admin_token");
    router.push("/admin/login");
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#1a1a1a] text-white flex flex-col z-20">
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
            HGC
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">Hindustan Gold Co.</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-[#C8102E] text-white font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
