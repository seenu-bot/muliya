import type { Metadata } from "next";
import SilverPage from "./SilverPage";

export const metadata: Metadata = {
  title: "Silver Jewellery Bangalore | Silver Jewellery for Women | Muliya",
  description:
    "Explore premium silver jewellery in Bangalore at Muliya. Discover elegant silver jewellery for women with traditional and modern designs.",
  keywords: [
    "silver jewellery in Bangalore",
    "silver coins Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/silver-jewellery-bangalore/",
  },
};

export default function Page() {
  return <SilverPage />;
}