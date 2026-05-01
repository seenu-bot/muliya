import type { Metadata } from "next";
import GoldSaving from "./GoldSaving";

export const metadata: Metadata = {
  title: " Muliya",
  description:
    "Explore Offer in Bangalore at Muliya.",
  keywords: [
    "gold savings scheme jewellery",
    "jewellery monthly scheme Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-savings-scheme-bangalore/",
  },
};

export default function Page() {
  return <GoldSaving />;
}