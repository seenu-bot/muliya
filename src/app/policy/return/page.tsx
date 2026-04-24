"use client";

import { motion } from "framer-motion";

export default function ReturnPage() {
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
              Return & Refund Policy
            </h1>
            <p className="text-base text-gray-600">
              JSAP payments on Muliya App/Muliya Customer Portal
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
                  JSAP payments on Muliya App/Muliya Customer Portal (<a href="https://jsap.muliya.in/" className="text-[#E92247] underline" target="_blank" rel="noopener noreferrer">https://jsap.muliya.in/</a>) allows for returns and refunds according to the following terms.
                </p>
              </div>

              {/* Policy Points */}
              <div className="space-y-6">
                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    This refund policy is applicable only if the "<strong>Return request</strong>" is raised within 3 days from the date of receipt of the payment.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    This facility is available for payments made on "<strong>https://jsap.muliya.in/ OR Muliya App</strong>" only.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    The Customer should request a return of payment by mailing into <a href="mailto:info@muliyajewels.com" className="text-[#E92247] underline">info@muliyajewels.com</a> OR by contacting the toll-free number <strong>1800-4252-916</strong> or the Base branch where JSAP is enrolled. It is also advised to provide the payment details reference.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    This refund policy is not applicable for In-store purchases.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    In-store purchases policy is mentioned in the TAX Invoice provided at the time of purchase and it shall not be mixed with JSAP online payments.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    The refund is subject to confirmation by our Accounts team. The amount will be refunded to customer by 10 working days after receiving the payment reference details and it should be matched with the JSAP A/C and as Confirmed by the Base branch.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    During online payment, if the transaction is successful but the payment has not been updated to your Muliya JSAP A/C, it will be credited to your JSAP A/C, by manually reconciling the payment which is not later than 3 days.
                  </p>
                </div>

                <div className="border-l-4 border-[#E92247] pl-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    In some cases, payment will be returned after deducting the bank transaction charges as applicable which was already born by the Company at the time of transaction settlement.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-2xl p-8 border border-[#E92247]/10">
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Need Help?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  If you have any questions regarding the return and refund policy, please contact us:
                </p>
                <div className="space-y-3">
                  <a href="mailto:info@muliyajewels.com" className="inline-block px-6 py-3 bg-[#E92247] text-white rounded-lg hover:bg-[#E92247]/90 transition-colors font-medium text-sm">
                    info@muliyajewels.com
                  </a>
                  <p className="text-gray-700 text-sm">
                    Toll-free: <strong>1800-4252-916</strong>
                  </p>
                </div>
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
