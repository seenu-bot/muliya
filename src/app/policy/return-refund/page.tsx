"use client";

import { motion } from "framer-motion";

export default function ReturnRefundPage() {
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
              Jewels SAP Terms & Conditions
            </h1>
            <p className="text-base text-gray-600">
              Jewels Saving Accumulation Plan (JSAP)
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
              {/* Plan Types */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-serif text-gray-900 mb-4">Available Plans</h2>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  3 Types of Jewels Saving is available:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>1 Year fixed Instalment plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Bullion SIP plan with Flexible Instalment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Daily Plan</span>
                  </li>
                </ul>
              </div>

              {/* 1 Year JSAP */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1 Year JSAP</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Minimum instalment of Rs.1000/- per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Enrolment can be in multiples of Rs.1000/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer Will Get Bonus of 50% of Instalment after completion of the tenure</span>
                  </li>
                </ul>
              </div>

              {/* Bullion SIP */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bullion SIP Plan</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Starts from Minimum instalment of Rs 2500/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>12 Months plan with Flexible Amount (Greater than First instalment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer can pay any number of instalments within 12 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Given a Bonus of 2% in The Form of Gold added to Accumulated Gold (Interest will be calculated in Recurring form from each instalment date)</span>
                  </li>
                </ul>
              </div>

              {/* Payment Methods */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment & App</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer Can Make payment & View the Passbook in Muliya Customer App which is available in Google play store/Apple Store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Payment can be made through Cash/card/cheque/NEFT/online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer has to pay all the Instalments without fail</span>
                  </li>
                </ul>
              </div>

              {/* Purchase Rules */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Purchase Rules</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Only jewellery can be purchased, & No Gold/Silver Bullion OR Coins cannot be redemption in 1 Year & Daily Plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer has to Purchase within 364 days of payment of First Instalment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Photo ID & Address-proof is required for all enrolments</span>
                  </li>
                </ul>
              </div>

              {/* Bonus & Default Rules */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bonus & Default Rules</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>In case of default on monthly instalments, Customer will not be eligible for Bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>After 240 days of payment of First Instalment, Company will not accept multiple instalments in single payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>To avail Bonus, do not close JSAP before completion of Tenure</span>
                  </li>
                </ul>
              </div>

              {/* Gold Rate & Credit */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gold Rate & Credit</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Gold rate prevailing on the day of Instalment will be applicable and corresponding gold weight will be accumulated in Customer Account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Online paid amount will generate Sales receipt & Gold will be accumulated in Customer A/C immediately, in case any delay in credit/update, MULIYA will manually credit on reconcile & not later than 3 days</span>
                  </li>
                </ul>
              </div>

              {/* Redemption */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Redemption</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>The Redemption of JSAP can be happen in any Branches of MULIYA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customer must nominate his representative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>In case of inability of Customer to be present at the time of redemption, the authorised representative will be allowed to redeem the scheme with proper identity proof. Management, if not satisfied with the identity of the person and the documentary proof, reserves the right to decline the redemption of the scheme</span>
                  </li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Monthly instalments will have to be paid latest within 5 days of the due date of monthly instalments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Payment by Cheques will be credited on realization</span>
                  </li>
                </ul>
              </div>

              {/* Company Rights */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Rights</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Company reserves the rights of Closure OR Modification of scheme at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Amount will not be refundable. Customers have to collect Gold/Silver ornaments. (If Bullion SIP Customer can Purchase Gold Bullion/Coin/Jewellery)</span>
                  </li>
                </ul>
              </div>

              {/* Taxes & Charges */}
              <div className="border-l-4 border-[#E92247] pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Taxes & Charges</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Prevailing taxes & Statutory rules are applicable as per Government notifications from time to time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Applicable taxes are deducted from each instalment and for balance amount gold/silver weight will be accumulated to Customers' account based on prevailing gold/silver rate of instalment paid date. Manufacturing and other charges with applicable taxes to be beard by the customers at the time of billing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Customers can collect the Gold/Silver Ornaments equivalent to the accumulated gold/silver from their account or more after necessary billing. No need to pay taxes which already applied while paying the instalments. For additional Purchase applicable amount to be paid along with any prevailing applicable taxes</span>
                  </li>
                </ul>
              </div>

              {/* Jurisdiction */}
              <div className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-2xl p-8 border border-[#E92247]/10">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Disputes, if any, Will be subject to PUTTUR Jurisdiction.
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
