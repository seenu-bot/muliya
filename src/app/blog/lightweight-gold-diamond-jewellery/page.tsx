import type { Metadata } from "next";
import Lightweigth from "./Lightweigth";

export const metadata: Metadata = {
  title: "Lightweight Gold & Diamond Jewellery | Muliya",
  description:
    "Explore lightweight gold jewellery and lightweight diamond jewellery picks from Muliya—comfortable, elegant designs for everyday and occasion wear.",
  keywords: [
    "lightweight gold jewellery",
    "lightweight diamond jewellery",
  ],
  alternates: {
    canonical: "https://muliya.in/blog/lightweight-gold-diamond-jewellery/",
  },
};

export default function Page() {
  return <Lightweigth />;
}