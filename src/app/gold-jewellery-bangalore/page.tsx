import type { Metadata } from "next";
import GoldJewelleryClient from "./GoldJewelleryClient";

export const metadata: Metadata = {
  title: "Gold Jewellery in Bangalore | Best Gold Shop in Bangalore | Muliya",
  description:
    "Explore premium gold jewellery in Bangalore at Muliya. Visit the best gold shop in Bangalore or shop gold jewellery online with trusted quality and elegant designs.",
  keywords: [
    "gold jewellery Bangalore",
    "gold shop in Bangalore",
    "gold jewellery online Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/gold-jewellery-bangalore/",
  },
};

export default function Page() {
  return <GoldJewelleryClient />;
}