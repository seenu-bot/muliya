"use client";

import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  { title: "Trusted Brand", desc: "Leverage the reputation of India's #1 gold buying company." },
  { title: "Ease to Earn", desc: "Gold buying is a high-margin, high-demand business with quick ROI." },
  { title: "Complete Infrastructure Guidance", desc: "We provide full setup support, training, and operational guidance." },
  { title: "Marketing Support", desc: "Benefit from our national marketing campaigns and brand awareness." },
  { title: "Technology Support", desc: "Get access to our proven systems and processes." },
  { title: "Low Investment", desc: "Start a profitable business with a relatively low initial investment." },
];

export default function FranchisePage() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      investment: (form.elements.namedItem("investment") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      type: "franchise",
    };
    try {
      const res = await fetch("/api/leads/franchise", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch { setStatus("error"); }
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Franchise Opportunities</h1>
          <p className="text-gray-300 mt-3 text-lg">Partner with India&apos;s most trusted gold buying company.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Need a Franchise of Hindustan Gold Company?</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Join India&apos;s fastest-growing gold buying network. Hindustan Gold Company offers franchise opportunities for entrepreneurs who want to be part of a trusted, profitable, and growing business.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                With our proven business model, complete training, and ongoing support, you can establish a successful gold buying business in your city.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Franchise Benefits</h3>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{b.title}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enquire About Franchise</h2>
              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <p className="text-green-700 font-semibold text-lg">✓ Enquiry Submitted!</p>
                  <p className="text-green-600 mt-2 text-sm">Thank you for your interest. Our franchise team will contact you within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input name="phone" required type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]" placeholder="10-digit phone" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input name="email" required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City / Location *</label>
                    <input name="city" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]" placeholder="City where you want to open franchise" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Investment Capacity</label>
                    <select name="investment" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]">
                      <option value="">Select range</option>
                      <option value="5-10L">₹5 Lakh – ₹10 Lakh</option>
                      <option value="10-25L">₹10 Lakh – ₹25 Lakh</option>
                      <option value="25-50L">₹25 Lakh – ₹50 Lakh</option>
                      <option value="50L+">₹50 Lakh+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] resize-none" placeholder="Any questions or additional information..." />
                  </div>
                  {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
                  <button type="submit" disabled={status === "sending"} className="w-full bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {status === "sending" ? "Submitting..." : (<>Submit Enquiry <ArrowRight className="w-4 h-4" /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
