import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
const BASE = "https://hindustangoldcompany.com";

export const metadata: Metadata = {
  title: "Release Pledged Gold Near Me | Hindustan Gold Company",
  description: "Release your pledged gold from banks and NBFCs easily. Hindustan Gold Company helps you release pledged gold and get instant cash.",
  alternates: { canonical: "https://hindustangoldcompany.com/services/release-pledged-gold" },
};

export default function ReleasePledgedGoldPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A843] text-sm font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Release Pledged Gold</h1>
          <p className="text-gray-300 mt-3 text-lg">We help you release your gold from banks and NBFCs — quickly and hassle-free.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Release Pledged Gold Near Me</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                If you have gold pledged at a bank, NBFC, or moneylender and want to release it — Hindustan Gold Company can help. We provide funds to release your pledged gold, and then buy it from you at the best market rate.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Simply walk in to our nearest branch with your pledge slip and a valid ID. Our team will guide you through the entire process, making it completely hassle-free.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Walk in with your pledge slip", desc: "Bring your pledge slip from the bank/NBFC and a valid government ID." },
                  { step: "2", title: "We release your gold", desc: "Our team arranges the funds to release your pledged gold from the institution." },
                  { step: "3", title: "Gold valuation & instant cash", desc: "We evaluate your gold and pay you the best market price in instant cash." },
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
                <Link href="/contact" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/branches" className="border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                  Find Branch Near Me
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image src={`${BASE}/static/img/door_step_gold.jpg`} alt="Release Pledged Gold" fill className="object-cover" />
              </div>
            <div className="bg-gradient-to-br from-[#D4A843]/10 to-[#C8102E]/5 rounded-2xl p-8 border border-[#D4A843]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Why Choose Us for Pledged Gold Release?</h3>
              <ul className="space-y-3">
                {[
                  "Fast, same-day process",
                  "We handle all paperwork",
                  "Best gold rate guaranteed",
                  "Release from any bank or NBFC",
                  "No hidden charges",
                  "Expert guidance at every step",
                  "Secure and trusted process",
                  "Instant cash payment",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
                <p className="text-sm text-gray-700 font-medium">Documents Required:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Valid Government ID (Aadhaar / PAN / Passport)</li>
                  <li>• Original Pledge Slip from Bank/NBFC</li>
                  <li>• Any other documents as required</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
