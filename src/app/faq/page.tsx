import type { Metadata } from "next";
import Link from "next/link";
import { getActiveFAQs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ | Hindustan Gold Company | Frequently Asked Questions",
  description: "Answers to common questions about selling gold, gold prices, our branches, and how Hindustan Gold Company works.",
  alternates: { canonical: "https://hindustangoldcompany.com/faq" },
};

export const revalidate = 60;

const staticFaqs = [
  { _id: "f1",  question: "Which are the best gold buyers in Bangalore?",                    answer: "Hindustan Gold Company is one of the best among the gold buying companies in Bangalore. They provide hassle-free gold selling process and ensure customers get the exact current gold rates value with instant cash.",             category: "General" },
  { _id: "f2",  question: "How does Hindustan Gold Company determine the value of my gold?", answer: "We use state-of-the-art XRF testing equipment and follow the current market rates. The evaluation is conducted in front of you with a detailed pricing breakdown — fully transparent.",                                        category: "Selling Gold" },
  { _id: "f3",  question: "How quickly will I receive cash for my gold?",                    answer: "Hindustan Gold Company provides instant cash payments once the gold has been evaluated and agreed upon. NEFT bank transfer is also available same day.",                                                                          category: "Selling Gold" },
  { _id: "f4",  question: "Can I sell damaged or broken gold jewellery?",                    answer: "Absolutely. We accept gold in any condition — damaged, broken, old ornaments, scrap gold. We evaluate based on purity and weight regardless of physical state.",                                                               category: "Selling Gold" },
  { _id: "f5",  question: "Do I need an appointment to sell my gold?",                       answer: "Appointments are not required but recommended. Walk-ins are always welcome at any of our 89+ branches.",                                                                                                                        category: "Process" },
  { _id: "f6",  question: "What documents do I need to bring when selling gold?",            answer: "A valid government-issued ID: Aadhaar card, passport, or driver's license. Purchase receipts are helpful but not mandatory.",                                                                                                   category: "Process" },
  { _id: "f7",  question: "Is it safe to sell my gold to Hindustan Gold Company?",           answer: "Absolutely. We are ISO 9001-2015 certified, licensed, and trusted by over 4,84,039 customers. All transactions happen at our security-rated premises.",                                                                          category: "Safety" },
  { _id: "f8",  question: "Does Hindustan Gold Company offer home pick-up services?",        answer: "Yes! Our doorstep gold buying service brings our professionals to your home. They evaluate gold on-site and provide instant cash — completely convenient.",                                                                     category: "Special Services" },
  { _id: "f9",  question: "Can I release pledged gold through Hindustan Gold Company?",      answer: "Yes! We help you release gold pledged at banks and NBFCs. Bring your pledge slip and valid ID. Our team handles the process and pays you the best market price.",                                                              category: "Special Services" },
  { _id: "f10", question: "Can I get a price estimate for my gold online?",                  answer: "Yes. Use our Check Gold Price calculator to get an approximate estimate based on today's rates. Enter your state, gold weight, and purity.",                                                                                    category: "General" },
  { _id: "f11", question: "What types of gold do you buy?",                                  answer: "We buy all types: gold jewellery, coins, biscuits/bars, broken gold, scrap gold, old ornaments — any form of gold in any condition.",                                                                                          category: "Selling Gold" },
  { _id: "f12", question: "Is there a minimum gold weight you accept?",                      answer: "No minimum weight requirement. We accept gold of any weight — from small pieces to large quantities.",                                                                                                                          category: "Selling Gold" },
];

export default async function FAQPage() {
  const dbFaqs = await getActiveFAQs();
  const faqs: any[] = dbFaqs.length > 0 ? dbFaqs : staticFaqs;

  // Group by category
  const grouped = faqs.reduce((acc: Record<string, any[]>, faq) => {
    const cat = faq.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3d0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-gray-300 mt-3 text-lg">Everything you need to know about selling gold with us.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#C8102E]/20 flex items-center gap-2">
                <span className="w-2 h-5 bg-[#C8102E] rounded-full inline-block" />
                {category}
              </h2>
              <div className="space-y-3">
                {items.map((faq: any) => (
                  <details key={faq._id?.toString() ?? faq.question} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden group">
                    <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:text-[#C8102E] transition-colors list-none flex items-center justify-between gap-4 text-sm">
                      <span>{faq.question}</span>
                      <span className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200 text-xs">&#9660;</span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-br from-[#C8102E]/5 to-[#D4A843]/5 border border-[#C8102E]/15 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
            <p className="text-gray-600 mt-2 text-sm">Our team is ready to help. Call or WhatsApp us now.</p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              <a href="tel:08088550033" className="bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Call: 8088550033
              </a>
              <a href="https://wa.me/919741637635" target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                WhatsApp
              </a>
              <Link href="/contact" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
