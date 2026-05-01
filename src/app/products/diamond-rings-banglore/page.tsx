import type { Metadata } from "next";
import DiamondPage from "./DiamondPage";

export const metadata: Metadata = {
  title: "Diamond Rings Bangalore | Diamond Rings for Women | Muliya",
  description:
    "Explore premium diamond rings in Bangalore at Muliya. Discover elegant diamond rings  for women with traditional and modern designs.",
  keywords: [
    "diamond rings for women",
  ],
  alternates: {
    canonical: "https://muliya.in/diamond-rings-bangalore/",
  },
};

export default function Page() {
  return <DiamondPage />;
}