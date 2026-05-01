import type { Metadata } from "next";
import EngagementRingsClient from "./EngagementRingsClient";

export const metadata: Metadata = {
  title: "Engagement Rings in Bangalore | Diamond Ring Bangalore | Muliya",
  description:
    "Explore engagement rings in Bangalore at Muliya. Visit the best engagement ring shop in Bangalore for certified diamond rings, elegant designs, and timeless collections.",
  keywords: [
    "engagement rings Bangalore",
    "engagement ring shop Bangalore",
    "diamond ring Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/engagement-rings-bangalore/",
  },
};

export default function Page() {
  return <EngagementRingsClient />;
}