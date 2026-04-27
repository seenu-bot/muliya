"use client";

import Link from "next/link";
import { ChevronRight, PiggyBank, TrendingUp, Check, Download, Phone, MessageCircle, Calculator } from "lucide-react";
import { ImageBannerSwiper } from "../../components/ImageBannerSwiper";

export default function GoldSchemePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Gold Scheme</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <ImageBannerSwiper
          images={[
            "/images/Artboard 1 copy 2.png",
            "/images/Artboard 1 copy 3.png",
            "/images/Artboard 1 copy 4.png",
            "/images/Artboard 1 copy 5.png",
          ]}
          alt="Gold Scheme Banner"
          className="h-[50vh] md:h-[60vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/35" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Gold Buying Plans
              </h1>
              <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto font-light">
                Make your gold dreams a reality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Whether you&apos;re planning for a wedding, a festive occasion, or just investing for the future — 
          Muliya&apos;s Gold Buying Plans help you accumulate gold in a smart, transparent, and rewarding way.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500">
          <div className="flex items-center gap-2">
            <PiggyBank className="w-5 h-5 text-[#E92247]" />
            <span>Jewel SAP - Save monthly and enjoy bonus benefits</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#E92247]" />
            <span>PIP - One-time investment with attractive gold returns</span>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 md:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[#E92247] font-medium">Plan 1:</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-serif text-gray-900">Muliya jewel SAP (JSAP)</h2>
                <p className="mt-3 text-sm text-gray-600">Your Monthly Jewellery Savings Plan</p>

                <div className="mt-8 space-y-6 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">Overview:</p>
                    <p className="mt-2 text-gray-700">
                      An easy installment plan that allows you to save monthly and receive bonus benefits at the end of the term.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Best For</p>
                    <p className="mt-2 text-gray-700">Wedding shoppers, gifting, long-term jewellery planning</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://jsap.muliya.in/CustomerPortal/Account/Register.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#E92247] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-colors"
                  >
                    Join JSAP Today
                  </a>
                </div>

                <p className="mt-4 text-xs text-gray-600">
                  <Link href="/policy/jewels-sap-terms" className="text-gray-700 hover:underline">
                    * Terms & Conditions
                  </Link>
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="/images/SAPMuliya.png"
                  alt="Muliya Jewels SAP"
                  className="w-full max-w-md h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />

                <div className="mt-8 w-full max-w-md">
                  <p className="text-sm font-semibold text-gray-900">Plan Highlights:</p>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    {[
                      "Save ₹1,000 or more per month",
                      "Plan Duration: 12 months (364 days)",
                      "Get 50% of one installment as a bonus",
                      "Redeem for gold jewellery at any Muliya showroom",
                      "Transparent gold rate applies on the day of purchase",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rotate-45 bg-[#E92247] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[#E92247] font-medium">Plan 2:</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-serif text-gray-900">Partner in progress (PIP)</h2>
                <p className="mt-3 text-sm text-gray-600">A Loyalty-Based One-Time Investment Plan</p>

                <div className="mt-8 space-y-6 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">Overview:</p>
                    <p className="mt-2 text-gray-700">
                      Perfect for customers making high-value purchases. Invest once, and earn guaranteed returns in gold.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Best For</p>
                    <p className="mt-2 text-gray-700">Bulk buyers, high-value investors, loyal customers</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://jsap.muliya.in/CustomerPortal/Account/Register.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#E92247] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-colors"
                  >
                    Start Your PIP Journey
                  </a>
                  <a
                    href="tel:+919844575916"
                    className="inline-flex items-center justify-center bg-[#E92247] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-colors"
                  >
                    Talk to an Advisor
                  </a>
                </div>

                <p className="mt-4 text-xs text-gray-600">
                  <Link href="/policy/pip-terms" className="text-gray-700 hover:underline">
                    * Terms & Conditions
                  </Link>
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="/images/PIPMuliya.png"
                  alt="Muliya Jewels PIP"
                  className="w-full max-w-md h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />

                <div className="mt-8 w-full max-w-md">
                  <p className="text-sm font-semibold text-gray-900">Plan Highlights:</p>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    {[
                      "Minimum deposit: ₹1,00,000",
                      "Tenure: 12 months",
                      "For 6 months plan 25% off on VA and for 12 months plan 50% off on VA",
                      "Redemption adjusted in gold or discount",
                      "Exclusive plan for loyal Muliya customers",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rotate-45 bg-[#E92247] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Plans Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12">
          Compare the Plans
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-gray-900 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 text-[#E92247] font-semibold bg-[#E92247]/5">
                    Jewel SAP (JSAP)
                  </th>
                  <th className="text-center px-6 py-4 text-gray-900 font-semibold bg-gray-100">
                    PIP (Partner in Progress)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Type of Plan", jsap: "Monthly Installments", pip: "One-Time Investment" },
                  { feature: "Minimum Contribution", jsap: "₹1,000/month", pip: "₹1,00,000" },
                  { feature: "Duration", jsap: "12 months", pip: "12 months" },
                  { feature: "Maturity Benefit", jsap: "50% bonus on one installment", pip: "25-50% off on VA" },
                  { feature: "Redemption", jsap: "Jewellery purchase", pip: "Gold or purchase discount" },
                  { feature: "Ideal For", jsap: "Planned buyers & families", pip: "Bulk buyers & investors" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-600 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700 bg-[#E92247]/5">{row.jsap}</td>
                    <td className="px-6 py-4 text-center text-gray-700 bg-gray-100">{row.pip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Start Your Gold Journey Today
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of families who trust Muliya for their gold investments. 
            Choose a plan that suits your needs and start building your  future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://jsap.muliya.in/CustomerPortal/Account/Register.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#E92247] text-white px-8 py-4 rounded-xl hover:bg-[#d11f3f] transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <Calculator className="w-5 h-5" />
              Enquire Now
            </a>
            <a
              href="https://wa.me/919844575916"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {[
            {
              q: "How do I join the Jewel SAP plan?",
              a: "You can join by visiting any Muliya showroom or registering online through our JSAP portal. Start with as little as ₹1,000 per month."
            },
            {
              q: "Can I change my monthly installment amount in JSAP?",
              a: "Yes, you can increase your installment amount after completing the first 3 months. The minimum increase is ₹500."
            },
            {
              q: "What happens if I miss a monthly payment?",
              a: "Your plan remains active for up to 30 days after a missed payment. You can make up the missed payment within this grace period."
            },
            {
              q: "How is the bonus calculated in JSAP?",
              a: "At maturity, you receive 50% of one month's installment as a bonus. For example, if you save ₹5,000/month, your bonus is ₹2,500."
            },
            {
              q: "Can I redeem my PIP investment before 12 months?",
              a: "Yes, PIP offers flexibility with 6-month and 12-month tenures. Early redemption is available with adjusted benefits."
            },
            {
              q: "What is VA (Value Addition) discount?",
              a: "VA refers to making charges on jewellery. PIP members get 25-50% discount on these charges when redeeming their investment."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
