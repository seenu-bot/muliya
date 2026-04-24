"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname === "/gallery";

  React.useEffect(() => {
    if (!hideFooter) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [hideFooter]);

  return (
    <div className={hideFooter ? "h-screen flex flex-col" : "min-h-screen flex flex-col"}>
      <Header />
      <main className={`flex-1 ${hideFooter ? "overflow-hidden" : ""}`}>{children}</main>
      {hideFooter ? null : <Footer />}
    </div>
  );
}
