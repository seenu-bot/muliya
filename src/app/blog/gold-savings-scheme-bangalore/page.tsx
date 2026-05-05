import type { Metadata } from "next";
import GoldSaving from "./GoldSaving";

export const metadata: Metadata = {
  title: "Gold Savings Scheme Bangalore | Muliya",
  description:
    "Learn about Muliya's gold savings scheme jewellery plan and the jewellery monthly scheme Bangalore customers love. Simple, transparent, and rewarding.",
  keywords: [
    "gold savings scheme jewellery",
    "jewellery monthly scheme Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/blog/gold-savings-scheme-bangalore/",
  },
};

export default function Page() {
  return <GoldSaving />;
}