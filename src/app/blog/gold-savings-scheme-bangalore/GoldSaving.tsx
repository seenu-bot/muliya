"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, ArrowRight, CheckCircle, TrendingUp, Shield, Calendar } from "lucide-react";

const schemeSteps = [
  {
    step: "01",
    title: "Choose Your Monthly Amount",
    desc: "Select a convenient monthly instalment amount starting from as low as ₹500 per month.",
    icon: "💰",
  },
  {
    step: "02",
    title: "Pay for 11 Months",
    desc: "Make monthly deposits at any Muliya showroom or through our easy payment options.",
    icon: "📅",
  },
  {
    step: "03",
    title: "Muliya Adds the 12th Month",
    desc: "On completion, Muliya Gold & Diamonds contributes the 12th instalment as a bonus.",
    icon: "🎁",
  },
  {
    step: "04",
    title: "Redeem for Jewellery",
    desc: "Use the accumulated amount to purchase gold jewellery of your choice from any Muliya showroom.",
    icon: "💍",
  },
];

const benefits = [
  "No interest or hidden charges",
  "Muliya pays the 12th instalment",
  "Flexible monthly contribution amounts",
  "Redeemable at any Muliya showroom",
  "BIS hallmarked gold jewellery",
  "Wide range of designs to choose from",
  "Suitable for wedding planning",
  "Easy enrolment process",
];

const faqs = [
  {
    q: "What is the minimum monthly amount for the gold savings scheme?",
    a: "You can start the jewellery monthly scheme in Bangalore with as low as ₹500 per month. There is no upper limit, making it suitable for all budgets.",
  },
  {
    q: "Can I join the scheme mid-year?",
    a: "Yes, you can enrol in the gold savings scheme at any time during the year. Your 11-month cycle begins from the month you enrol.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Please contact your nearest Muliya showroom for assistance. Our team will help you understand your options and ensure a smooth experience.",
  },
  {
    q: "Can I redeem the amount for gold coins instead of jewellery?",
    a: "The scheme is primarily designed for jewellery purchase. Please speak with your nearest showroom for specific redemption options.",
  },
  {
    q: "Is there a separate scheme for wedding jewellery?",
    a: "Yes, we offer special guidance for customers planning wedding jewellery purchases through our savings scheme. Visit any Muliya showroom to know more.",
  },
];

export default function GoldSavingsSchemePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Gold Savings Scheme Bangalore</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white">
        <img
          src="/images/goldscheme.jpeg"
          alt="Gold Savings Scheme Bangalore"
          className="w-full object-cover"
          style={{ height: "50vh" }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#E92247] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <TrendingUp className="w-4 h-4" />
          Save Monthly, Wear Forever
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
          Gold Savings Scheme in Bangalore
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Join Muliya's jewellery monthly scheme in Bangalore and let your savings grow 
          into beautiful gold jewellery. Pay for 11 months — we pay the 12th!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 bg-[#E92247] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-all shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Enrol Now
          </a>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
          >
            How It Works
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-[#E92247] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { label: "Years of Trust", value: "80+" },
              { label: "12th Instalment", value: "FREE" },
              { label: "Min. Monthly Amount", value: "₹500" },
              { label: "Showrooms", value: "15+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            How the Jewellery Monthly Scheme Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our gold savings scheme in Bangalore is simple, transparent, and designed to 
            help you own beautiful jewellery without financial strain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schemeSteps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector */}
              {i < schemeSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: "calc(100% - 2.5rem)", left: "calc(50% + 1.25rem)" }} />
              )}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all z-10">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-[#E92247] mb-2 tracking-wider">{step.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Benefits of Muliya's Gold Savings Scheme
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Whether you're saving for a wedding, a festival, or simply as a financial 
                investment, our jewellery monthly scheme in Bangalore is the smartest way 
                to plan your gold purchase.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#E92247] flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/muliya-founders-day-featured-b2.jpg"
                alt="Gold savings scheme jewellery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#E92247]" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Trusted & Secure</div>
                      <div className="text-xs text-gray-600">80+ years of customer trust in Karnataka</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Calculation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            See How Much You Save
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Here's an example of how the jewellery monthly scheme works for you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#E92247]/5 to-amber-50 rounded-3xl p-8 border border-[#E92247]/20">
          <div className="space-y-4">
            {[
              { label: "Monthly Instalment", value: "₹2,000", highlight: false },
              { label: "Your Contribution (11 months)", value: "₹22,000", highlight: false },
              { label: "Muliya's Contribution (1 month)", value: "₹2,000", highlight: false },
              { label: "Total Jewellery Value", value: "₹24,000", highlight: true },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex justify-between items-center py-3 border-b border-gray-200 last:border-0 ${
                  row.highlight ? "font-bold text-[#E92247]" : "text-gray-700"
                }`}
              >
                <span className={row.highlight ? "text-[#E92247]" : ""}>{row.label}</span>
                <span className={`text-lg ${row.highlight ? "text-2xl" : ""}`}>{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Example is for illustration purposes. Visit your nearest showroom for complete scheme details.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#E92247] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Start Your Gold Savings Journey Today
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who have used Muliya's gold savings scheme 
            in Bangalore to fulfil their jewellery dreams. Enrol at any showroom today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white text-[#E92247] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Enrol Now
            </a>
            <Link
              href="/store-locator"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Find a Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}