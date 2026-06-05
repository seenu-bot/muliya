import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Gold Buyers Near Me | Best Gold Buyer | Hindustan Gold Company",
  description: "Looking for gold buyers near you? Hindustan Gold Company is India's most trusted gold buyer. Get the best price for your gold with instant cash payment.",
  alternates: { canonical: "https://hindustangoldcompany.com/gold-buyers" },
};

export default function GoldBuyersPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Gold Buyers Near Me</h1>
          <p className="text-gray-300 mt-3 text-lg">Hindustan Gold Company — India&apos;s most trusted gold buyers since 2004.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Why Hindustan Gold Company is the Best Gold Buyer?</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Hindustan Gold Company has been India&apos;s most trusted gold buyer for over 20 years. We have helped over 4,84,000 customers across India get the best price for their gold. With 89+ branches across 3 states, finding a Hindustan Gold Company branch near you is easy.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Best Gold Rate",
                  desc: "We pay the current online gold market rate — higher than any local jeweller or pawnbroker.",
                  icon: "💰",
                },
                {
                  title: "Free Purity Check",
                  desc: "We use XRF technology to accurately determine your gold's purity. 100% free and transparent.",
                  icon: "🔬",
                },
                {
                  title: "Instant Cash Payment",
                  desc: "Walk in with your gold, walk out with cash. No delays, no cheques, no waiting.",
                  icon: "⚡",
                },
                {
                  title: "Safe & Secure",
                  desc: "All transactions happen in our professionally managed, security-rated premises.",
                  icon: "🔒",
                },
              ].map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Gold Do We Buy?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Gold Jewellery", "Gold Coins", "Gold Bars", "Broken Gold", "Old Gold", "Scrap Gold", "Gold Chains", "Gold Rings", "Gold Bangles"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-[#C8102E] to-[#8B0000] rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold">Ready to Sell Your Gold?</h3>
              <p className="text-white/80 mt-2">Get the best price today. Find a branch near you.</p>
              <div className="mt-6 flex gap-4 justify-center flex-wrap">
                <Link href="/branches" className="bg-white text-[#C8102E] hover:bg-gray-100 font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2">
                  Find Branch Near Me <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/check-gold-price" className="bg-[#D4A843] hover:bg-[#b88d35] text-[#1a1a1a] font-bold px-6 py-3 rounded-lg text-sm transition-colors">
                  Calculate Gold Price
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
