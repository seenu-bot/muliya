import type { Metadata } from "next";
import BridalJewelleryClient from "./BridalJewelleryClient";

export const metadata: Metadata = {
  title: "Bridal Jewellery in Bangalore | Wedding Jewellery | Muliya",
  description:
    "Explore bridal jewellery in Bangalore at Muliya. Discover wedding jewellery in Bangalore including bridal gold jewellery and diamond jewellery crafted for your special day.",
  keywords: [
    "bridal jewellery in Bangalore",
    "wedding jewellery in Bangalore",
    "bridal gold jewellery Bangalore",
    "bridal diamond jewellery Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/bridal-wedding-jewellery-bangalore/",
  },
};

export default function Page() {
  return <BridalJewelleryClient />;
}