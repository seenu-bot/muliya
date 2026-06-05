import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "Value for Gold | Free Gold Valuation | Hindustan Gold Company",
  description: "Get a free, accurate gold valuation at Hindustan Gold Company. We use the latest technology to give you the true value of your gold.",
  alternates: { canonical: "https://hindustangoldcompany.com/services/value-for-gold" },
};

export default function ValueForGoldPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A843] text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Value for Gold</h1>
          <p className="text-gray-300 mt-3 text-lg">Know the exact worth of your gold — free of charge.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Accurate Gold Valuation at No Cost</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                At Hindustan Gold Company, we believe you deserve to know the true value of your gold before making any decision. That&apos;s why we offer a completely free gold valuation service using state-of-the-art XRF purity testing technology.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Our certified evaluators will check your gold&apos;s purity (carat), weigh it accurately, and give you a transparent valuation based on the current market gold rate. No surprises, no deductions.
              </p>

              <div className="mt-8 p-5 bg-[#C8102E]/5 rounded-xl border border-[#C8102E]/10">
                <h3 className="font-bold text-gray-900 mb-3">Gold Valuation Formula</h3>
                <div className="font-mono text-sm text-gray-700 space-y-1">
                  <p>Gold Value = Weight (grams) × Purity (%) × Current Gold Rate</p>
                  <p className="text-xs text-gray-500 mt-2">We use XRF machines for 100% accurate purity determination</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/check-gold-price" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2">
                  Check Gold Price Online <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/branches" className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                  Visit a Branch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image src={`${BASE}/static/img/trusted_gold.jpg`} alt="Gold Valuation - Hindustan Gold Company" fill className="object-cover" />
              </div>
            <div className="bg-gradient-to-br from-[#D4A843]/10 to-[#C8102E]/5 rounded-2xl p-8 border border-[#D4A843]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Our Valuation Promise</h3>
              <ul className="space-y-3">
                {[
                  "100% free gold purity check",
                  "Latest XRF technology — no acid tests",
                  "Accurate weight measurement",
                  "No obligation to sell",
                  "Transparent process — you watch it all",
                  "Expert certified evaluators",
                  "Current market rate applied",
                  "Receipt for every valuation",
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
