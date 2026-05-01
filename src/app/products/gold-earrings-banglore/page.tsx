import type { Metadata } from "next";
import EarringPage from "./EarringPage";

export const metadata: Metadata = {
  title: "Gold Earrings Bangalore | Gold Earrings for Women | Muliya",
  description:
    "Explore premium gold earrings in Bangalore at Muliya. Discover elegant gold earrings for women with traditional and modern designs.",
  keywords: [
    "gold earrings in Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-earrings-bangalore/",
  },
};

export default function Page() {
  return <EarringPage />;
}