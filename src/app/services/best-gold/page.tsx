import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "Best Gold Buyers in Bangalore | Hindustan Gold Company",
  description: "Hindustan Gold Company — India's best gold buyers. Get the maximum value for your gold with instant cash payment and transparent valuation.",
  alternates: { canonical: "https://hindustangoldcompany.com/services/best-gold" },
};

export default function BestGoldPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A843] text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Best Gold Buyers</h1>
          <p className="text-gray-300 mt-3 text-lg">India&apos;s most trusted gold buyers since 2004.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">India&apos;s #1 Gold Buying Company</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Hindustan Gold Company has been buying gold for over 20 years, serving millions of satisfied customers across India. We are the pioneers of the concept of buying jewellery against instant cash in a secure, professional environment.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Our commitment is simple — give you the best price for your gold, with complete transparency. We use state-of-the-art XRF testing machines to check gold purity, ensuring you get the exact value your gold deserves.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "89+", label: "Branches" },
                  { value: "3", label: "States" },
                  { value: "50+", label: "Cities" },
                  { value: "4,84,039+", label: "Customers Served" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-bold text-[#C8102E]">{s.value}</p>
                    <p className="text-gray-600 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/check-gold-price" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2">
                  Calculate Gold Price <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/branches" className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                  Find Branch Near Me
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image src={`${BASE}/static/img/best-gold.jpg`} alt="Best Gold Buyers - Hindustan Gold Company" fill className="object-cover" />
              </div>
            <div className="bg-gradient-to-br from-[#D4A843]/10 to-[#C8102E]/5 rounded-2xl p-8 border border-[#D4A843]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-5">What Makes Us the Best Gold Buyers?</h3>
              <ul className="space-y-3">
                {[
                  "Trusted brand with 20+ years of experience",
                  "Highest gold rates — matched to online prices",
                  "Advanced XRF purity testing technology",
                  "Completely transparent valuation process",
                  "Instant cash — no cheques, no waiting",
                  "ISO 9001:2015 certified company",
                  "No paperwork hassle",
                  "Certified and trained evaluators",
                  "Safe and secure premises",
                  "Serving 484,000+ satisfied customers",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
