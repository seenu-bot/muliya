"use client";

import { motion } from "framer-motion";

export default function PIPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 bg-sky-100/20 rounded-full blur-3xl bottom-20 right-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              PIP Terms & Conditions
            </h1>
            <p className="text-base text-gray-600">
              Pre-Payment Plan for Jewellery Purchase
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed text-sm">
                  This scheme is an advance payment plan for jewellery purchase only and shall not be treated as an investment, savings, or deposit scheme.
                </p>
              </div>

              {/* Scheme Tenure */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scheme Tenure</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>6 Months Plan — 180 Days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>12 Months Plan — 364 Days</span>
                  </li>
                </ul>
              </div>

              {/* VA Benefit */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">VA Benefit</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>6 Months Plan — Eligible for VA reduction up to 25% (subject to scheme terms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>12 Months Plan — Eligible for VA reduction up to 50% (subject to scheme terms)</span>
                  </li>
                </ul>
              </div>

              {/* Eligibility */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Scheme benefits are applicable only on jewellery products with VA 12% and above. Coins, bars, bullion, and low VA products are not eligible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Scheme benefits will not be applicable if jewellery purchase is made before completion of 150 days for 6 Months Plan and 330 days for 12 Months Plan</span>
                  </li>
                </ul>
              </div>

              {/* Gold Conversion */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gold Conversion & Billing</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>The amount paid at enrollment will be converted into equivalent gold weight based on the gold rate prevailing on the enrollment date. The calculated weight will be treated as customer entitlement under the scheme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Jewellery billing will be calculated based on the prevailing gold rate and VA charges applicable on the redemption/billing date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Scheme benefits shall be applicable only on the weight/value enrolled under the scheme. Any additional purchase beyond the enrolled weight/value will attract VA charges as per prevailing rates</span>
                  </li>
                </ul>
              </div>

              {/* Validity */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Validity</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Scheme benefits are valid only if redemption is completed within the scheme validity period, failing which scheme benefits shall lapse.
                </p>
              </div>

              {/* Payment Rules */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Rules</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Payments above ₹1,99,999 shall be accepted only through approved banking modes as per applicable Income Tax and statutory regulations</span>
                  </li>
                </ul>
              </div>

              {/* Old Gold */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Old Gold Exchange</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Old gold accepted under the scheme will be valued as per company standard valuation process and shall become company property upon adjustment. Old gold once adjusted cannot be returned</span>
                  </li>
                </ul>
              </div>

              {/* Terms & Conditions */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Terms & Conditions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Scheme benefits cannot be combined with any other promotional offer unless officially approved by the company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>KYC documentation is mandatory for enrollment and redemption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>No gifts, interest, bonus, or assured returns are applicable under this scheme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Jewellery purchase is subject to product availability. Order jewellery delivery timelines will depend on the manufacturing schedule and company billing policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Gold prices and VA charges are subject to market fluctuations, and customers acknowledge the associated market risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Company reserves the right to modify, suspend, or withdraw the scheme at its discretion without prior notice</span>
                  </li>
                </ul>
              </div>

              {/* Taxes */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Taxes</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  All taxes shall be applicable as per Government rules prevailing at the time of billing.
                </p>
              </div>

              {/* Jurisdiction */}
              <div className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-2xl p-8 border border-[#E92247]/10">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Any disputes arising out of this scheme shall be subject to Puttur jurisdiction only.
                </p>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-xs pt-8 border-t border-gray-200">
                <p>Last Updated: April 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
