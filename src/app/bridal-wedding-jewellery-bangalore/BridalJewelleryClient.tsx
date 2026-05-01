"use client";

import { Check, ArrowRight, Crown, Gem, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function BridalJewelleryClient() {
  return (
    <main className="container mx-auto px-4 py-10 space-y-20">

      {/* HERO */}
      <section>
        <h1 className="text-4xl md:text-5xl font-serif mb-4 max-w-3xl">
          Bridal Jewellery in Bangalore –{" "}
          <span className="italic">Elegant Wedding Jewellery for Your Special Day</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Discover premium bridal jewellery in Bangalore at Muliya. From traditional
          bridal gold jewellery to modern bridal diamond jewellery in Bangalore,
          explore exquisite wedding jewellery collections designed to make your
          big day unforgettable.
        </p>
      </section>

      {/* COLLECTION TYPES */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Explore Wedding Jewellery Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Bridal Gold Jewellery Sets",
            "Diamond Bridal Jewellery",
            "Temple Jewellery",
            "Kundan & Polki Sets",
            "Bridal Necklaces & Haram",
            "Custom Wedding Jewellery",
          ].map((item) => (
            <div key={item} className="p-6 border rounded-xl hover:shadow-lg transition">
              <Crown className="mb-3 text-[#E92247]" />
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Premium {item.toLowerCase()} crafted for brides.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Why Choose Our Bridal Jewellery in Bangalore?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Exclusive bridal gold jewellery collections",
            "Certified bridal diamond jewellery Bangalore",
            "Traditional & modern wedding designs",
            "Custom bridal jewellery design services",
            "Trusted jewellery brand with decades of experience",
            "Perfect for weddings, receptions & ceremonies",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <Check className="text-[#E92247]" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <ImageWithFallback
          src="/images/bridal-jewellery-display.jpg"
          alt="Bridal jewellery Bangalore wedding gold diamond collection"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-serif mb-4">
            Wedding Jewellery in Bangalore for Every Bride
          </h2>
          <p className="text-gray-600 mb-4">
            Our wedding jewellery in Bangalore includes gold, diamond, and
            traditional sets crafted to match your bridal look. Whether you prefer
            classic elegance or modern designs, we have the perfect jewellery for you.
          </p>

          <Button asChild>
            <Link href="/products">
              Explore Bridal Collection <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* GOLD VS DIAMOND */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Bridal Gold Jewellery vs Diamond Jewellery
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Bridal Gold Jewellery Bangalore</h3>
            <p className="text-gray-600 text-sm">
              Traditional gold jewellery is timeless and perfect for weddings.
              It represents culture, heritage, and long-term value.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Bridal Diamond Jewellery Bangalore</h3>
            <p className="text-gray-600 text-sm">
              Diamond jewellery adds elegance and sparkle, ideal for modern brides
              looking for a luxurious and stylish look.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Where can I buy bridal jewellery in Bangalore?",
              a: "You can buy bridal jewellery in Bangalore from trusted stores like Muliya offering gold and diamond collections.",
            },
            {
              q: "What jewellery is required for a wedding bride?",
              a: "Bridal jewellery typically includes necklaces, earrings, bangles, rings, and traditional sets.",
            },
            {
              q: "Do you offer custom bridal jewellery?",
              a: "Yes, we provide custom wedding jewellery design services for brides.",
            },
          ].map((faq) => (
            <div key={faq.q} className="p-4 border rounded-lg">
              <p className="font-semibold">{faq.q}</p>
              <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="text-sm text-gray-600">
        Explore more:
        <Link href="/gold-jewellery-bangalore" className="ml-2 text-[#E92247] underline">
          Gold Jewellery
        </Link>
        <Link href="/diamond-jewellery-bangalore" className="ml-4 text-[#E92247] underline">
          Diamond Jewellery
        </Link>
      </section>

      {/* CTA */}
      <section className="p-8 bg-gray-100 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Discover the Perfect Bridal Jewellery in Bangalore
        </h2>
        <p className="text-gray-600 mb-4">
          Make your wedding unforgettable with elegant bridal jewellery collections.
        </p>
        <Button asChild>
          <Link href="/products">
            Shop Bridal Jewellery <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>

    </main>
  );
}