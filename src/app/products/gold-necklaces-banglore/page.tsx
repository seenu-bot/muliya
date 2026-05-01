import type { Metadata } from "next";
import NecklacesPage from "./Necklaces";

export const metadata: Metadata = {
  title: "Gold Necklaces Bangalore | Gold Necklaces for Women | Muliya",
  description:
    "Explore premium gold necklaces in Bangalore at Muliya. Discover elegant gold necklaces for women with traditional and modern designs.",
  keywords: [
    "gold necklace in Bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/gold-necklaces-bangalore/",
  },
};

export default function Page() {
  return <NecklacesPage />;
}