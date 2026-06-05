"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { HGCHeader } from "@/app/components/HGCHeader";
import { HGCFooter } from "@/app/components/HGCFooter";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HGCHeader />
      <main className="flex-1">{children}</main>
      <HGCFooter />
    </div>
  );
}
