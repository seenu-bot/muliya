import type { Metadata } from "next";
import Offerpage from "./Offerpage";

export const metadata: Metadata = {
  title: " Muliya",
  description:
    "Explore Offer in Bangalore at Muliya. Discover elegant MG Road rings  for women with traditional and modern designs.",
  keywords: [
    "jewellery offers Bangalore",
    "wedding jewellery offers Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/jewellery-offers-bangalore/",
  },
};

export default function Page() {
  return <Offerpage />;
}