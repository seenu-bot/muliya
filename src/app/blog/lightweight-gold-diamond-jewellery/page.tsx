import type { Metadata } from "next";
import Lightweigth from "./Lightweigth";

export const metadata: Metadata = {
  title: " Muliya",
  description:
    "Explore Offer in Bangalore at Muliya.",
  keywords: [
    "lightweight gold jewellery",
    "lightweight diamond jewellery",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-savings-scheme-bangalore/",
  },
};

export default function Page() {
  return <Lightweigth />;
}