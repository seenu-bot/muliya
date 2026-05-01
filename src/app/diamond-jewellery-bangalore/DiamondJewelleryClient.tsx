"use client";

import { Star, Check, Award, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function DiamondJewelleryClient() {
  return (
    <main className="container mx-auto px-4 py-10">

      <section className="py-16 bg-white">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 max-w-2xl">
          Diamond Jewellery in Bangalore –{" "}
          <span className="italic">Best Diamond Shop for Elegant Designs</span>
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-lg mb-12 max-w-2xl">
          Looking for premium diamond jewellery in Bangalore? Muliya is known as
          the best diamond shop in Bangalore, offering certified diamonds,
          stunning craftsmanship, and elegant collections. Visit our diamond
          jewellery showroom in Bangalore or shop online with confidence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-3">
              Explore Diamond Jewellery Collections
            </h2>

            <p className="text-gray-600 mb-6">
              Discover rings, necklaces, earrings, bracelets, and bridal diamond
              sets designed to shine for every occasion. Each piece reflects
              brilliance, clarity, and precision craftsmanship.
            </p>

            <h2 className="text-2xl font-serif mb-3">
              Why Choose Our Diamond Jewellery Showroom in Bangalore?
            </h2>

            <div className="space-y-3 mb-6">
              {[
                "Certified and conflict-free diamonds",
                "Exclusive modern & traditional designs",
                "Transparent pricing and trusted brand",
                "Premium showroom experience in Bangalore",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <Check className="w-4 h-4 text-[#E92247]" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/products">
                Explore Diamond Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            {/* Internal Links */}
            <p className="text-sm text-gray-600 mt-6">
              Also explore our{" "}
              <Link href="/gold-jewellery-bangalore" className="text-[#E92247] underline">
                gold jewellery in Bangalore
              </Link>{" "}
              and{" "}
              <Link href="/bridal-jewellery" className="text-[#E92247] underline">
                bridal jewellery collections
              </Link>.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageWithFallback
              src="/images/luxury-jewellery-display.jpg"
              alt="Gold jewellery Bangalore showroom premium designs"
              className="rounded-xl"
            />
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold mb-2">
            Visit the Best Diamond Shop in Bangalore
          </p>
          <p className="text-gray-600">
            Experience brilliance, elegance, and trust with our exclusive diamond
            jewellery collection in Bangalore.
          </p>
        </div>

      </section>
    </main>
  );
}