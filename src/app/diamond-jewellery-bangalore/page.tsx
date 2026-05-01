import type { Metadata } from "next";
import DiamondJewelleryClient from "./DiamondJewelleryClient";

export const metadata: Metadata = {
  title: "Diamond Jewellery in Bangalore | Best Diamond Shop in Bangalore | Muliya",
  description:
    "Explore premium diamond jewellery in Bangalore at Muliya. Visit the best diamond shop in Bangalore with elegant designs, certified diamonds, and trusted craftsmanship.",
  keywords: [
    "diamond jewellery Bangalore",
    "best diamond shop in Bangalore",
    "diamond jewellery showroom in Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/diamond-jewellery-bangalore/",
  },
};

export default function Page() {
  return <DiamondJewelleryClient />;
}