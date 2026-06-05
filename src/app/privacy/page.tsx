import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hindustan Gold Company",
  description: "Privacy policy for Hindustan Gold Company. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://hindustangoldcompany.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-3">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly to us, such as your name, phone number, email address, and government-issued ID details when you use our services or contact us. We also collect information about your gold items for transaction purposes.",
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information we collect to process gold buying transactions, comply with legal requirements, communicate with you about your transaction, improve our services, and send you relevant updates about our services (with your consent).",
            },
            {
              title: "3. Information Sharing",
              content: "We do not sell, trade, or share your personal information with third parties except as required by law (such as regulatory compliance), to process your transaction (such as bank transfers), or with your explicit consent.",
            },
            {
              title: "4. Data Security",
              content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All transaction data is stored securely.",
            },
            {
              title: "5. Retention",
              content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Transaction records are maintained as required by applicable regulations.",
            },
            {
              title: "6. Your Rights",
              content: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@hindustangoldcompany.com or call 8088550033.",
            },
            {
              title: "7. Contact Us",
              content: "For any privacy-related questions, please contact our Data Protection Officer at info@hindustangoldcompany.com or write to us at No. 24, 3rd Floor, RK Terminus Ganga Nagara, Bellary Main Road, Bengaluru – 560032.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
