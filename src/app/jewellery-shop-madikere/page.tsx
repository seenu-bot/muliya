import type { Metadata } from "next";
import Madikerepage from "./Madikerepage";

export const metadata: Metadata = {
  title: "Gold Jewellery Bangalore | Gold Jewellery for Women | Muliya",
  description:
    "Explore premium gold jewellery in Bangalore at Muliya. Discover elegant gold jewellery for women with traditional and modern designs.",
  keywords: [
   "Best Jewellery Showroom in Madikere",
"Engagement Rings in Madikere",
"Gold Necklace in Madikere"
  ],
  alternates: {
    canonical: "https://muliya.in/jewellery-shop-madikere/",
  },
};

export default function Page() {
  return <Madikerepage />;
}