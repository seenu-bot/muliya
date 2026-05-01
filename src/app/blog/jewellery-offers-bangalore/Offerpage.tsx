"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Tag, Clock, Phone, ArrowRight, Sparkles, Gift } from "lucide-react";

interface Offer {
  id: string;
  title: string;
  description: string;
  badge: string;
  validUntil: string;
  image: string;
  cta: string;
  highlight: string;
}

const offers: Offer[] = [
  {
    id: "1",
    title: "Wedding Jewellery Special",
    description: "Get exclusive discounts on bridal sets, necklaces, bangles, and more. Make your special day even more memorable with Muliya's finest craftsmanship.",
    badge: "Up to 25% Off",
    validUntil: "Valid till December 31, 2024",
    image: "/images/muliya-founders-day-featured-b2.jpg",
    cta: "Explore Bridal Collection",
    highlight: "Free customization on orders above ₹2 Lakhs"
  },
  {
    id: "2",
    title: "Gold Coin Festival Offer",
    description: "Purchase gold coins and bars at minimal making charges. Ideal for gifting, investment, and auspicious occasions.",
    badge: "Zero Making Charges",
    validUntil: "Limited period offer",
    image: "/images/akshaya-tritiya-blog-b3.jpg",
    cta: "Buy Gold Coins",
    highlight: "Available in 1g, 2g, 4g, 8g & 10g"
  },
  {
    id: "3",
    title: "Diamond Jewellery Sale",
    description: "Stunning diamond earrings, pendants, and rings at unbeatable prices. Certified diamonds with BIS hallmarked gold settings.",
    badge: "Flat 15% Off",
    validUntil: "Valid till stocks last",
    image: "/images/Traditional-jewellery-blog-b4.jpg",
    cta: "Shop Diamonds",
    highlight: "IGI certified diamonds"
  },
  {
    id: "4",
    title: "Exchange & Upgrade Offer",
    description: "Exchange your old gold jewellery and upgrade to new designs with the best exchange rates in Bangalore. No deductions, full value guaranteed.",
    badge: "Best Exchange Rates",
    validUntil: "Ongoing offer",
    image: "/images/Seeds-of-Hope-2022-Kannada-b11.jpg",
    cta: "Know More",
    highlight: "100% value on old gold"
  }
];

const categories = [
  { label: "Wedding Jewellery", icon: "💍" },
  { label: "Gold Coins", icon: "🪙" },
  { label: "Diamond Jewellery", icon: "💎" },
  { label: "Bangles & Bracelets", icon: "⭕" },
  { label: "Necklaces", icon: "📿" },
  { label: "Earrings", icon: "✨" },
];

export default function JewelleryOffersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Jewellery Offers Bangalore</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/Artboard 1 copy 2.png" alt="Jewellery Offers Bangalore" fill loading="lazy" className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#E92247] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Exclusive Offers — Limited Period
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Jewellery Offers in Bangalore
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Discover unbeatable deals on gold, diamond, and traditional jewellery. 
              Special wedding jewellery offers in Bangalore — crafted with love since 1944.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-2 bg-[#E92247] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-all shadow-lg">
                <Phone className="w-4 h-4" />
                Call for Offers
              </a>
              <Link href="#offers" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg">
                View All Offers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Quick Links */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-[#E92247] hover:text-[#E92247] transition-all bg-white"
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div id="offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Current Jewellery Offers in Bangalore
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From wedding jewellery offers to gold coin deals, find the best jewellery offers 
            in Bangalore at Muliya Gold & Diamonds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md">
                    {offer.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Validity */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{offer.validUntil}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-3 group-hover:text-[#E92247] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{offer.description}</p>

                {/* Highlight */}
                <div className="flex items-center gap-2 bg-[#E92247]/8 text-[#E92247] px-4 py-2 rounded-lg mb-6">
                  <Gift className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{offer.highlight}</span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#E92247] font-medium hover:gap-3 transition-all"
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Muliya Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Why Choose Muliya for Jewellery Offers in Bangalore?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "80+ Years of Trust", desc: "Serving Bangalore and Karnataka since 1944 with integrity and excellence." },
              { icon: "💯", title: "BIS Hallmarked Gold", desc: "Every piece of gold jewellery is certified and hallmarked for purity." },
              { icon: "🔄", title: "Best Exchange Rates", desc: "Get the highest value for your old gold jewellery in Bangalore." },
              { icon: "🎁", title: "EMI & Savings Schemes", desc: "Flexible payment options and monthly gold savings plans available." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#E92247] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Tag className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Don't Miss Out on Exclusive Jewellery Offers
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Visit your nearest Muliya showroom in Bangalore or call us to know about the 
            latest jewellery offers, wedding jewellery offers, and seasonal discounts.
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
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
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