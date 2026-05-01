import type { Metadata } from "next";
import GoldcoinsPage from "./Goldcoins";

export const metadata: Metadata = {
  title: "Gold Coins Bangalore | Gold Coins for Women | Muliya",
  description:
    "Explore premium gold coins in Bangalore at Muliya. Discover elegant gold coins for women with traditional and modern designs.",
  keywords: [
    "gold coins in Bangalore","gold coin 24k Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-coins-bangalore/",
  },
};

export default function Page() {
  return <GoldcoinsPage />;
}