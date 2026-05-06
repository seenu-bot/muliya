"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const relatedPosts = [
  {
    title: "Enhance Your Beauty with Traditional Jewellery",
    date: "April 22, 2024",
    slug: "enhance-your-beauty-with-traditional-jewellery",
    image: "/images/Traditional-jewellery-blog-b4.jpg",
  },
  {
    title: "Why purchasing gold on Akshaya Tritiya is considered as a good fortune?",
    date: "May 10, 2024",
    slug: "why-purchasing-gold-on-akshaya-tritiya-is-considered-as-a-good-fortune",
    image: "/images/akshaya-tritiya-blog-b3.jpg",
  },
  {
    title: "Muliya Jewels Founder's Day – Social Responsibility on the path of Excellence",
    date: "August 15, 2024",
    slug: "muliya-jewels-founders-day-social-responsibility-on-the-path-of-excellence",
    image: "/images/muliya-founders-day-featured-b2.jpg",
  },
];

export default function LightweightJewelleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#E92247] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-xs">Lightweight Gold & Diamond Jewellery</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/Traditional-jewellery-blog-b4.jpg"
          alt="Lightweight Gold and Diamond Jewellery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">November 10, 2024</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Lightweight Jewellery Crafted For Everyday Elegance
            </h1>
            <p className="text-white/90 text-lg">Minimal in weight, refined in design, and timeless in appeal - discover jewellery collections created for effortless modern styling.</p>
            <div className="mt-6">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 bg-[#E92247] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-all shadow-lg"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
              Jewellery Designed For Comfort & Sophistication
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Modern jewellery is all about effortless beauty that complements every moment of your day. Our lightweight gold jewellery collections are thoughtfully crafted to deliver elegance, versatility, and comfort while maintaining the rich craftsmanship and luxury that define timeless jewellery.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Muliya Gold & Diamonds, we have curated a stunning range of lightweight 
              jewellery designs that offer the richness of gold and the brilliance of 
              diamonds in pieces that are comfortable, wearable, and elegant throughout 
              the day.
            </p>

            {/* Section 1 */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">What is Lightweight Gold Jewellery?</h2>
              <p className="text-gray-700 leading-relaxed">
                Lightweight gold jewellery refers to pieces crafted using advanced techniques 
                that reduce the overall gold weight without compromising on design, durability, 
                or appearance. Techniques such as hollow casting, tubing, and open latticework 
                allow jewellers to create visually bold pieces that remain light and comfortable 
                to wear for extended periods.
              </p>
            </div>

            {/* Why it's trending */}
            <h2 className="text-2xl font-serif text-gray-900">Refined Designs For Every Occasion</h2>
            <p className="text-gray-700 leading-relaxed">
              The demand for lightweight gold jewellery has grown significantly, driven by 
              the modern woman's lifestyle. Here's why it's become a staple in contemporary 
              jewellery wardrobes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "💼",
                  title: "Everyday Gold Essentials",
                  desc: "Graceful jewellery pieces designed to elevate your daily wardrobe with subtle luxury."
                },
                {
                  icon: "🌟",
                  title: "Contemporary Diamond Elegance",
                  desc: "Finely crafted lightweight diamond jewellery collections that bring brilliance to both everyday wear and special occasions."
                },
                {
                  icon: "💰",
                  title: "Modern Minimal Styling",
                  desc: "Elegant designs curated for office wear, casual outings, celebrations, and gifting moments."
                },
                {
                  icon: "🔄",
                  title: "Comfort Meets Luxury",
                  desc: "Beautifully balanced craftsmanship created for effortless wear throughout the day."
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Diamond section */}
            <h2 className="text-2xl font-serif text-gray-900">Lightweight Diamond Jewellery: Brilliance for Every Day</h2>
            <p className="text-gray-700 leading-relaxed">
              Just as with gold, lightweight diamond jewellery is crafted to deliver maximum 
              sparkle with minimal weight. Using smaller accent diamonds, open prong settings, 
              and fine gold bands, our designers create pieces that are ideal for everyday wear 
              without sacrificing the luxurious appeal of diamonds.
            </p>

            {/* Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              {[
                {
                  category: "Lightweight Gold Jewellery",
                  items: ["Hollow gold bangles", "Chain-link necklaces", "Hoop earrings", "Layered rings", "Delicate anklets"],
                  bg: "from-amber-50 to-yellow-50",
                },
                {
                  category: "Lightweight Diamond Jewellery",
                  items: ["Diamond stud earrings", "Solitaire pendants", "Pavé rings", "Tennis bracelets (slim)", "Diamond nose pins"],
                  bg: "from-blue-50 to-indigo-50",
                },
                {
                  category: "Everyday Fusion Pieces",
                  items: ["Gold & diamond necklaces", "Mixed metal bangles", "Diamond-tipped earrings", "Stackable rings", "Charm bracelets"],
                  bg: "from-rose-50 to-pink-50",
                },
              ].map((col) => (
                <div key={col.category} className={`bg-gradient-to-b ${col.bg} p-5 rounded-xl`}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">{col.category}</h4>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E92247] rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Muliya's approach */}
            <h2 className="text-2xl font-serif text-gray-900">Muliya's Approach to Lightweight Jewellery</h2>
            <p className="text-gray-700 leading-relaxed">
              At Muliya Gold & Diamonds, we believe that beautiful jewellery should be 
              accessible and wearable for everyone. Our skilled craftsmen use state-of-the-art 
              techniques to create lightweight collections that are:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {[
                  "BIS hallmarked for guaranteed gold purity",
                  "Designed for maximum visual impact with minimal weight",
                  "Suitable for daily wear, office, travel, and casual outings",
                  "Available in 22KT and 18KT gold options",
                  "Paired with certified diamonds for our diamond collections",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 bg-[#E92247] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Styling tips */}
            <h2 className="text-2xl font-serif text-gray-900">Styling Tips for Lightweight Jewellery</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <span><strong>Layer delicate necklaces</strong> — Combine two or three thin gold chains of different lengths for a chic, editorial look.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <span><strong>Stack rings</strong> — Wear multiple slim rings on one hand for a contemporary, fashion-forward style.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <span><strong>Mix gold and diamonds</strong> — Pair a lightweight diamond pendant with a plain gold chain for understated luxury.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#E92247] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <span><strong>Wear to work</strong> — Small diamond studs or a single gold bangle are perfect for a polished professional look.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#E92247]/5 p-6 rounded-xl border-l-4 border-[#E92247]">
              <p className="text-gray-800 italic text-lg">
                "Lightweight jewellery proves that elegance isn't about heaviness — 
                it's about craftsmanship, design, and how a piece makes you feel."
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Whether you're looking for lightweight gold jewellery for daily wear or 
              lightweight diamond jewellery that transitions from desk to dinner, Muliya 
              Gold & Diamonds has a piece crafted just for you. Visit any of our showrooms 
              across Karnataka to explore our latest collections.
            </p>

            {/* Offers CTA within blog */}
            <div className="bg-gradient-to-r from-[#E92247]/10 to-amber-100/50 p-6 rounded-xl text-center">
              <p className="text-gray-800 font-medium mb-4">
                Explore our lightweight jewellery collection at Muliya — and check out our 
                current jewellery offers in Bangalore!
              </p>
              <Link
                href="/jewellery-offers-bangalore"
                className="inline-flex items-center gap-2 bg-[#E92247] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d11f3f] transition-all"
              >
                View Current Offers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#E92247] font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 text-center">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-serif text-gray-900 group-hover:text-[#E92247] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}