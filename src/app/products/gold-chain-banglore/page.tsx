import type { Metadata } from "next";
import ChainPage from "./ChainPage";

export const metadata: Metadata = {
  title: "Gold Chains Bangalore | Gold Chains for Women | Muliya",
  description:
    "Explore premium gold chains in Bangalore at Muliya. Discover elegant gold chains for women with traditional and modern designs.",
  keywords: [
    "gold chain in Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-chain-bangalore/",
  },
};

export default function Page() {
  return <ChainPage />;
}