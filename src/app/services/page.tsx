import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "Our Services | Hindustan Gold Company | Gold Buyers",
  description: "Hindustan Gold Company offers gold buying, pledged gold release, gold valuation, and doorstep gold buying services across India.",
  alternates: { canonical: "https://hindustangoldcompany.com/services" },
};

const services = [
  {
    slug: "best-gold",
    title: "Gold Buyers",
    subtitle: "Best Gold Buyers in India",
    desc: "Hindustan Gold Company is India's most trusted gold buyer. We buy all types of gold — jewellery, coins, bars — at the best online market rates. Instant cash, no hidden charges.",
    img: `${BASE}/static/img/best-gold.jpg`,
    icon: `${BASE}/static/img/sell-gold.png`,
    features: ["Best online gold rate", "Instant cash payment", "Free gold purity check", "No hidden charges"],
  },
  {
    slug: "sell-gold",
    title: "Sell Gold",
    subtitle: "Sell Gold at Best Price",
    desc: "Get the maximum value for your gold. Walk in to any of our 89+ branches with your gold and walk out with cash. Simple, fast, and completely transparent.",
    img: `${BASE}/static/img/sell_gold.jpg`,
    icon: `${BASE}/static/img/sell-gold.png`,
    features: ["Walk-in process", "On-the-spot valuation", "Current market rate", "Instant payment"],
  },
  {
    slug: "release-pledged-gold",
    title: "Release Pledged Gold",
    subtitle: "Release Pledged Gold Near Me",
    desc: "Struggling with pledged gold? Hindustan Gold Company helps you release your gold from banks and NBFCs quickly, so you can get instant cash for it.",
    img: `${BASE}/static/img/door_step_gold.jpg`,
    icon: `${BASE}/static/img/releasepledgedgold.png`,
    features: ["Release from banks/NBFCs", "Same-day process", "Best rate guaranteed", "Expert guidance"],
  },
  {
    slug: "value-for-gold",
    title: "Value for Gold",
    subtitle: "Free Gold Valuation",
    desc: "Get an accurate, transparent valuation of your gold using the latest technology. Know exactly what your gold is worth before you decide to sell.",
    img: `${BASE}/static/img/trusted_gold.jpg`,
    icon: `${BASE}/static/img/door-to-door.png`,
    features: ["Free purity check", "Latest technology", "100% transparent", "Expert evaluators"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Services</h1>
          <p className="text-gray-300 mt-3 text-lg">Everything you need to get the best value for your gold.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.slug} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow bg-white">
                <div className="relative h-52">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-xl">{s.title}</p>
                  </div>
                </div>
                <div className="p-6">
                <p className="text-[#C8102E] text-xs font-semibold uppercase tracking-wide mb-1">{s.subtitle}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
