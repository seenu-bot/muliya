import { HGCHome } from "@/app/pages/HGCHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindustan Gold Company | India's #1 Gold Buyers | Best Gold Price",
  description:
    "Hindustan Gold Company - India's most trusted gold buyers with 89+ branches across 3 states. Get the best price for your gold with instant cash payment. ISO 9001–2015 certified.",
  keywords: [
    "gold buyers in bangalore",
    "sell gold in bangalore",
    "best gold buyers",
    "hindustan gold company",
    "cash for gold",
    "gold price today",
  ],
  alternates: {
    canonical: "https://hindustangoldcompany.com/",
  },
  openGraph: {
    title: "Hindustan Gold Company | India's #1 Gold Buyers",
    description: "India's most trusted gold buyers. 89+ branches. Best online gold price. Instant cash payment.",
    type: "website",
  },
};

export default function Page() {
  return <HGCHome />;
}
