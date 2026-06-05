import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hindustan Gold Company",
  description: "Terms and conditions for using Hindustan Gold Company's gold buying services.",
  alternates: { canonical: "https://hindustangoldcompany.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="text-gray-300 mt-3">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">Welcome to Hindustan Gold Company. By using our services, you agree to these Terms and Conditions. Please read them carefully before proceeding.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Eligibility</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">You must be at least 21 years of age to sell gold to Hindustan Gold Company. Individuals aged 20 or younger require parental or guardian permission. A valid government-issued ID is mandatory for all transactions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Gold Buying Policy</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">Hindustan Gold Company is committed to fair trade jewelry and upholds strong values on humanitarian issues. We do not purchase:</p>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>• Stolen or looted gold</li>
            <li>• Counterfeit or fake gold</li>
            <li>• Gold without proper documentation</li>
          </ul>
          <p className="text-gray-600 mt-3">Selling looted or counterfeit gold is a criminal offense. All transactions are subject to verification.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Valuation Process</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">Gold valuation is done using state-of-the-art XRF testing technology. The valuation is based on current market rates at the time of transaction. Customers are welcome to witness the entire valuation process.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Payment</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">Payments are made in cash or via bank transfer, as per the customer's preference and regulatory requirements. All payments are made immediately upon completion of the valuation and agreement.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Privacy</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">Your personal information is collected only for transaction purposes and is kept confidential. We do not share your information with third parties without your consent, except as required by law.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Contact</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">For any questions regarding these Terms & Conditions, please contact us at <a href="mailto:info@hindustangoldcompany.com" className="text-[#C8102E] hover:underline">info@hindustangoldcompany.com</a> or call <a href="tel:08088550033" className="text-[#C8102E] hover:underline">8088550033</a>.</p>
        </div>
      </section>
    </div>
  );
}
