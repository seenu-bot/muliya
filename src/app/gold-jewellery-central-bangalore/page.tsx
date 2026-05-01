import type { Metadata } from "next";
import Centerpage from "./Centerpage";

export const metadata: Metadata = {
  title: "Gold Jewellery Bangalore | Gold Jewellery for Women | Muliya",
  description:
    "Explore premium gold jewellery in Bangalore at Muliya. Discover elegant gold jewellery for women with traditional and modern designs.",
  keywords: [
    "Gold Jewellery in Central Bangalore",
    "Gold Shop in Central Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-jewellery-bangalore/",
  },
};

export default function Page() {
  return <Centerpage />;
}