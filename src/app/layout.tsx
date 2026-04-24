import type { Metadata } from "next";
import "./globals.css";

import { AppShell } from "@/app/components/AppShell";
import { Toaster } from "@/app/components/ui/sonner";
import { ParallaxWrapper } from "@/app/components/ParallaxWrapper";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";

export const metadata: Metadata = {
  title: "Muliya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <ParallaxWrapper>
              <AppShell>{children}</AppShell>
              <Toaster position="top-right" />
            </ParallaxWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
