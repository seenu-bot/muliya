"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Star, Phone, ArrowRight, Coins, ShoppingBag } from "lucide-react";

const goldCoinOptions = [
  { weight: "1g", approxPrice: "₹6,500", popular: false },
  { weight: "2g", approxPrice: "₹13,000", popular: false },
  { weight: "4g", approxPrice: "₹26,000", popular: true },
  { weight: "8g", approxPrice: "₹52,000", popular: false },
  { weight: "10g", approxPrice: "₹65,000", popular: false },
  { weight: "20g", approxPrice: "₹1,30,000", popular: false },
];

const traditions = [
  {
    title: "Elegant Gold Collections",
    content:
      "Explore timeless necklaces, bangles, earrings, bridal jewellery, and contemporary festive designs.",
  },
  {
    title: "Festive Savings & Rewards",
    content:
      "Special seasonal privileges thoughtfully curated to make every purchase even more memorable.",
  },
  {
    title: "Gold Coin Benefits",
    content:
      "Celebrate prosperity with exclusive gold coin offers Bangalore customers can enjoy during the festive season.",
  },
  {
    title: "Perfect For Gifting & Celebrations",
    content:
      "Meaningful jewellery creations designed for family occasions, weddings, and festive gifting traditions.",
  },
];

const faqs = [
  {
    q: "What are the Akshaya Tritiya gold offers at Muliya Bangalore?",
    a: "Muliya offers zero to minimal making charges on gold coins and special discounts on select jewellery collections during Akshaya Tritiya. Contact your nearest showroom for current offers.",
  },
  {
    q: "Is the gold BIS hallmarked?",
    a: "Yes, all gold jewellery and coins at Muliya Gold & Diamonds are BIS hallmarked, ensuring 22KT or 24KT purity as labelled.",
  },
  {
    q: "Can I buy gold coins online from Muliya?",
    a: "Yes, you can place inquiries online. Visit our website or call us to know more about gold coin availability and Akshaya Tritiya gold offers in Bangalore.",
  },
  {
    q: "What is the minimum weight for gold coins available?",
    a: "Gold coins are available starting from 1 gram. We offer a wide range up to 50 grams and beyond for bulk buyers.",
  },
];

export default function AkshayaTritiyaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Akshaya Tritiya Gold Offers Bangalore</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/akshaya-tritiya-blog-b3.jpg" alt="Akshaya Tritiya Gold Offers Bangalore" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-amber-900" />
              Most Auspicious Day to Buy Gold
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Celebrate Akshaya Tritiya With Timeless Gold Elegance
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Mark the season of prosperity with handcrafted jewellery collections, festive privileges, and meaningful gold purchases designed for every cherished celebration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 bg-[#E92247] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Get Offer Details
              </a>
              <Link
                href="#gold-coins"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Explore Festive Collections
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Banner Strip */}
      <div className="bg-amber-50 border-y border-amber-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              { label: "Making Charges", value: "Zero / Minimal" },
              { label: "Gold Purity", value: "BIS Hallmarked" },
              { label: "Available Weights", value: "1g – 50g+" },
              { label: "Branches", value: "Multiple in Karnataka" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-2xl font-bold text-amber-700">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            A Celebration Of Prosperity, Tradition & Timeless Beauty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
           Akshaya Tritiya is one of the most auspicious occasions to invest in gold and celebrate new beginnings. At Muliya Jewellers, discover exquisite festive collections paired with exclusive Akshaya Tritiya gold offers Bangalore jewellery lovers look forward to every year.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 mt-6">
            Exclusive Privileges For Your Festive Purchase
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traditions.map((item, i) => (
            <div key={i} className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Coin Pricing */}
      <div id="gold-coins" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Gold Coin Offers in Bangalore
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Available in multiple weights — ideal for investment, gifting on Akshaya Tritiya, 
              weddings, and festivals. Prices are indicative; contact us for current rates.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {goldCoinOptions.map((coin) => (
              <div
                key={coin.weight}
                className={`relative p-4 rounded-2xl text-center border-2 transition-all ${
                  coin.popular
                    ? "border-[#E92247] bg-[#E92247]/5 shadow-md"
                    : "border-gray-200 bg-white hover:border-amber-300"
                }`}
              >
                {coin.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E92247] text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="text-2xl mb-1">🪙</div>
                <div className="text-xl font-bold text-gray-900">{coin.weight}</div>
                <div className="text-sm text-gray-500">≈ {coin.approxPrice}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            * Prices are approximate and subject to daily gold rates. Call us or visit the showroom for today's price.
          </p>
        </div>
      </div>

      {/* Blog CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
              Learn More: Why Gold on Akshaya Tritiya?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Read our detailed blog post on the cultural and spiritual significance of 
              purchasing gold on Akshaya Tritiya and why it has been a cherished tradition 
              for generations.
            </p>
            <Link
              href="/blog/why-purchasing-gold-on-akshaya-tritiya-is-considered-as-a-good-fortune"
              className="inline-flex items-center gap-2 text-[#E92247] font-medium hover:gap-3 transition-all"
            >
              Read the Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative w-full md:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/images/akshaya-tritiya-blog-b3.jpg"
              alt="Akshaya Tritiya blog"
              fill
              className="object-cover"
            />
          </div>
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

      {/* Final CTA */}
      <div className="bg-[#E92247] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Make This Akshaya Tritiya Golden
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Visit Muliya Gold & Diamonds for the best Akshaya Tritiya gold offers and gold coin 
            offers in Bangalore. Creating happiness since 1944.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white text-[#E92247] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
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