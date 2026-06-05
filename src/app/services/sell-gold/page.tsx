import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "Sell Gold in Bangalore | Best Price | Hindustan Gold Company",
  description: "Sell your gold at Hindustan Gold Company and get the best price. Instant cash payment, free purity check, transparent valuation. 89+ branches.",
  alternates: { canonical: "https://hindustangoldcompany.com/services/sell-gold" },
};

export default function SellGoldPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A843] text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Sell Gold</h1>
          <p className="text-gray-300 mt-3 text-lg">Get the best price for your gold — instantly.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Sell Gold at Best Price</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Hindustan Gold Company is the best place to sell your gold in Bangalore and across India. We offer the current online gold market rate — a price no local jeweller or pawnbroker can match.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Whether it&apos;s old jewellery, gold coins, or gold bars — we buy all types of gold. Our process is completely transparent, with no hidden charges and instant cash payment.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How to Sell Your Gold</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Walk-in to our branch", desc: "Visit any of our 89+ branches across India with your gold." },
                  { step: "2", title: "Free Purity Check", desc: "We check your gold purity using the latest technology — completely free and transparent." },
                  { step: "3", title: "Get Instant Cash", desc: "Receive instant cash at the current online gold rate. No delays." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{s.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                    </div>
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
                <Image src={`${BASE}/static/img/sell_gold.jpg`} alt="Sell Gold at Hindustan Gold Company" fill className="object-cover" />
              </div>
            <div className="bg-gradient-to-br from-[#D4A843]/10 to-[#C8102E]/5 rounded-2xl p-8 border border-[#D4A843]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Why Sell Gold With Us?</h3>
              <ul className="space-y-3">
                {[
                  "Best online gold rate — better than any jeweller",
                  "100% free gold purity check",
                  "Instant cash payment — no waiting",
                  "Transparent weight measurement",
                  "No hidden charges or deductions",
                  "Safe and secure transactions",
                  "Licensed gold buying company",
                  "20+ years of experience",
                  "89+ branches across 3 states",
                  "Doorstep service available",
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
