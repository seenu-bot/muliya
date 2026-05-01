import { Home } from "@/app/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Jewellery Shop in Bangalore | Gold Jewellery Bangalore | Muliya",
  description:
    "Discover premium gold jewellery in Bangalore at Muliya. Visit the best jewellery shop in Bangalore for exquisite collections, trusted quality, and elegant designs.",
  keywords: [
    "gold jewellery Bangalore",
    "jewellery shop in Bangalore",
    "best jewellery shop in Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/",
  },
};

export default function Page() {
  return <Home />;
}