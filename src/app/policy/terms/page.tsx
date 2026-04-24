"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
            <div className="inline-block px-4 py-2 bg-[#E92247]/10 rounded-full mb-6">
              <span className="text-[#E92247] font-medium text-sm">Legal Information</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-base text-gray-600">
              Please read these terms carefully before using our website
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
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  <strong>The Shyama Jewels LLP</strong>, an ISO 9001:2008 certified company, including subsidiaries and affiliates ("<strong>https://muliya.in/</strong>" or "<strong>Shyama Jewels LLP</strong>" or "<strong>MULIYA</strong>" or "<strong>our</strong>") provides the information contained on the website or any of the pages comprising the website (https://muliya.in/) to "<strong>visitors</strong>" or "<strong>Customers</strong>" (cumulatively referred to as "<strong>you</strong>" or "<strong>your</strong>" hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Welcome to <strong>Shyama Jewels LLP. (MULIYA)</strong>. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Shyama Jewels LLP's relationship with you in relation to this website.
                </p>
              </div>

              {/* Definitions */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Definitions
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The term '<strong>Shyama Jewels LLP</strong>' or '<strong>us</strong>' or '<strong>we</strong>' refers to the owner of the website whose registered office is <strong>Shyama Jewels LLP, #476/G&H Indian Arcade, Court road, Puttur, D.K Karnataka 574201</strong>. The term '<strong>you</strong>' refers to the user or viewer of our website. The use of this website is subject to the following terms of use:
                </p>
              </div>

              {/* Content Disclaimer */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Content Disclaimer
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Any information/designs on materials/products on this website may be differed, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</span>
                  </li>
                </ul>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Copyright & Trademarks
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>This website contains Products/Designs which is owned by or copyrighted to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>All trademarks reproduced in this website which are the property of, or licensed to, the legal owner of the website.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</span>
                  </li>
                </ul>
              </div>

              {/* Links Policy */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Links Policy
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>From time to time this website may also include links to other sub domains. These links are provided for your convenience to provide further information/services. If any malicious link was linked to our website by any hacking type of activity, it does not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>You shall not create a link to this website from another website or document without Shyama Jewels LLP's prior written consent. This may lead to legal actions.</span>
                  </li>
                </ul>
              </div>

              {/* Jurisdiction */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Jurisdiction
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>All disputes subject to Puttur jurisdiction only.</span>
                  </li>
                </ul>
              </div>

              {/* Payment & Refund */}
              <div className="bg-[#E92247]/5 rounded-2xl p-8 border border-[#E92247]/10">
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Payment & Cancellation Policy
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>If you are willing to join the "<strong>Muliya JSAP plan</strong>", kindly read terms & conditions of the same.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>Kindly confirm the payable amount before proceeding for payment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span><strong>Cancellation & refund Policy:</strong> Once payment has been made no cancellation request will be entertained or any cancellation clause of merchant.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span>We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</span>
                  </li>
                </ul>
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
