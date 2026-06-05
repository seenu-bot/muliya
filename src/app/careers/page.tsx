"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

const openings = [
  { title: "Branch Manager", location: "Bangalore, Karnataka", type: "Full-time", dept: "Operations" },
  { title: "Gold Evaluator / Appraiser", location: "Multiple Locations", type: "Full-time", dept: "Technical" },
  { title: "Sales Executive", location: "Multiple Locations", type: "Full-time", dept: "Sales" },
  { title: "Customer Relationship Officer", location: "Bangalore", type: "Full-time", dept: "Customer Service" },
  { title: "Area Sales Manager", location: "Karnataka / Tamil Nadu", type: "Full-time", dept: "Sales" },
  { title: "Marketing Executive", location: "Bangalore HQ", type: "Full-time", dept: "Marketing" },
];

export default function CareersPage() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      position: (form.elements.namedItem("position") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      type: "career",
    };
    try {
      const res = await fetch("/api/leads/career", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch { setStatus("error"); }
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Careers</h1>
          <p className="text-gray-300 mt-3 text-lg">Join India&apos;s most trusted gold buying company. Grow with us.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Openings</h2>
              <p className="text-gray-600 text-sm mb-6">We are always looking for talented individuals to join our growing team.</p>
              <div className="space-y-3">
                {openings.map((job) => (
                  <div key={job.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-[#C8102E]/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4 text-[#C8102E]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs text-gray-500">{job.location}</span>
                          <span className="text-xs text-gray-400">·</span>
                          <span className="text-xs bg-[#C8102E]/10 text-[#C8102E] px-2 py-0.5 rounded-full">{job.type}</span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{job.dept}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#D4A843]/10 rounded-xl border border-[#D4A843]/20">
                <p className="text-sm text-gray-700">
                  <strong>Don&apos;t see your role?</strong> We&apos;re always open to talented candidates. Send us your application and we&apos;ll reach out when a suitable position opens up.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <p className="text-green-700 font-semibold text-lg">✓ Application Submitted!</p>
                  <p className="text-green-600 mt-2 text-sm">Thank you for applying. Our HR team will contact you within 3-5 business days.</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For *</label>
                    <select name="position" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]">
                      <option value="">Select a position</option>
                      {openings.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                      <option value="Other">Other / Open Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter / Message</label>
                    <textarea name="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] resize-none" placeholder="Tell us about yourself and your experience..." />
                  </div>
                  {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
                  <button type="submit" disabled={status === "sending"} className="w-full bg-[#C8102E] hover:bg-[#a00d25] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {status === "sending" ? "Submitting..." : (<>Submit Application <ArrowRight className="w-4 h-4" /></>)}
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
