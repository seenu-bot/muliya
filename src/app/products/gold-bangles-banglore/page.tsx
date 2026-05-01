import type { Metadata } from "next";
import BanglesPage from "./BanglesPage";

export const metadata: Metadata = {
  title: "Gold Bangles Bangalore | Gold Bangles for Women | Muliya",
  description:
    "Explore premium gold bangles in Bangalore at Muliya. Discover elegant gold bangles for women with traditional and modern designs.",
  keywords: [
    "gold bangles Bangalore",
    "gold bangles for women"
  ],
  alternates: {
    canonical: "https://muliya.in/gold-bangles-bangalore/",
  },
};

export default function Page() {
  return <BanglesPage />;
}