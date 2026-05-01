import type { Metadata } from "next";
import MgRoadPage from "./MgRoad";

export const metadata: Metadata = {
  title: "MG Road Bangalore | Muliya",
  description:
    "Explore premium MG Road rings in Bangalore at Muliya. Discover elegant MG Road rings  for women with traditional and modern designs.",
  keywords: [
    "jewellery showroom mg road bangalore",
    "diamond jewellery MG Road Bangalore",
    "gold jewellery showroom mg road bangalore",
  ],
  alternates: {
    canonical: "https://muliya.in/diamond-rings-bangalore/",
  },
};

export default function Page() {
  return <MgRoadPage />;
}