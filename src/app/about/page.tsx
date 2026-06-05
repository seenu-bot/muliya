import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "About Us | Hindustan Gold Company",
  description: "Learn about Hindustan Gold Company - India's most trusted gold buyer with 20+ years of experience, 89+ branches across 3 states. ISO 9001-2015 certified.",
  alternates: { canonical: "https://hindustangoldcompany.com/about" },
};

const faqs = [
  {
    q: "Which are the best gold buyers in Bangalore?",
    a: "Hindustan Gold Company is one of the best among the gold buying companies in Bangalore. They provide hassle-free gold selling process and ensure customers get the exact current gold rates value with instant cash.",
  },
  {
    q: "How does Hindustan Gold Company determine the value of my gold?",
    a: "We use state-of-the-art testing equipment and follow the current market rates to accurately assess the value of your gold. Our expert evaluators ensure a fair and transparent valuation process.",
  },
  {
    q: "Do I need an appointment to sell my gold at Hindustan Gold Company?",
    a: "While appointments are not mandatory, we recommend scheduling one to ensure a smooth and efficient experience. Walk-ins are also welcome.",
  },
  {
    q: "How quickly will I receive cash for my gold?",
    a: "Hindustan Gold Company provides instant cash payments once the gold has been evaluated and agreed upon. The entire process is designed to be quick.",
  },
  {
    q: "Is it safe to sell my gold to Hindustan Gold Company?",
    a: "Absolutely. We are a trusted and reputable gold buying company. We prioritize customer security and confidentiality, ensuring a safe and secure transaction environment.",
  },
  {
    q: "What documents do I need to bring when selling gold?",
    a: "You need a valid government-issued ID (Aadhaar card, passport, or driver's license) and any purchase receipts or certificates, if available.",
  },
  {
    q: "Does Hindustan Gold Company offer home pick-up services?",
    a: "Yes, we offer home pick-up services for your convenience. Our professionals will come to your location, evaluate your gold on-site, and provide instant cash payments.",
  },
  {
    q: "Can I get a price estimate for my gold online?",
    a: "Yes, we provide an online price estimate service. Visit our website, input the details of your gold items, and receive an approximate valuation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Us</h1>
          <p className="text-gray-300 mt-3 text-lg">India&apos;s Most Trusted Gold Buying Company</p>
        </div>
      </section>

      {/* About content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-base">
              Hindustan Gold Company is a respected gold buying business entity buying small to large quantities of gold paying the best prices throughout India and Abroad. With so many people seeking quick cash, the gold market is rife with opportunists and dodgy deals. You deserve transparency and honesty as selling gold can be an emotional commitment, so it&apos;s only fair that people get the best treatment possible.
            </p>
            <p className="text-gray-700 leading-relaxed text-base mt-4">
              We are a licensed gold buying business and not pawnbrokers or jewellers. We have extensive experience in the field of gold buying. Be assured when you sell gold to us you are safe and secure dealing directly with the business owners in store at our security rated premises.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={`${BASE}/static/img/gold-mining.jpg`}
                alt="Gold mining - Hindustan Gold Company"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Gold Mining</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Gold ore is the principal raw material for the steel industry. India is the fourth largest producer of iron ore with a huge reserve of iron ore exceeding 20 billion tons. Tanzania is the third largest Gold ore supplier to Global Market.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                CMM&apos;s professional approach, guided by a dynamic management, its attention to quality and detail has helped the company gain a set of repeat customers purchasing Gold ore directly from Tanzania. We take pride to make you evaluate your gold and help you get the right price for your valuables.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We have 900 acres of Gold ORE, situated in dense forest with Heavy Deposit of Gold grade 40+.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d25] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#D4A843]/10 to-[#C8102E]/5 rounded-2xl p-6 border border-[#D4A843]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Franchise of Hindustan Gold Company?</h3>
              <p className="text-gray-600 text-sm mb-4">Join India&apos;s fastest growing gold buying network.</p>
              <ul className="space-y-2">
                {["A brand that is trusted", "Ease to Earn", "Complete Infrastructure Guidance"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/franchise" className="mt-4 inline-flex items-center gap-2 text-[#C8102E] font-semibold text-sm hover:underline">
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:text-[#C8102E] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-400 ml-2 flex-shrink-0">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
