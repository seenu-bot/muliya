import type { Metadata } from "next";
import Offerpage from "./Offerpage";

export const metadata: Metadata = {
  title: "Jewellery Offers Bangalore | Muliya",
  description:
    "Explore jewellery offers Bangalore at Muliya. Discover wedding jewellery offers Bangalore and the latest deals across gold and diamond collections.",
  keywords: [
    "jewellery offers Bangalore",
    "wedding jewellery offers Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/blog/jewellery-offers-bangalore/",
  },
};

export default function Page() {
  return <Offerpage />;
}