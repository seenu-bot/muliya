import type { Metadata, Viewport } from "next";
import "./globals.css";

import { AppShell } from "@/app/components/AppShell";
import { Toaster } from "@/app/components/ui/sonner";
import { ParallaxWrapper } from "@/app/components/ParallaxWrapper";
import { HideAddToCart } from "@/app/components/HideAddToCart";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";

export const metadata: Metadata = {
  title: "Muliya",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
              <HideAddToCart />
              <AppShell>{children}</AppShell>
              <Toaster position="top-right" />
            </ParallaxWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
