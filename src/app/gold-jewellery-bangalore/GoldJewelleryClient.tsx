"use client";

import type { Metadata } from "next";
import { Star, Check, Award, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const metadata: Metadata = {
  title: "Gold Jewellery in Bangalore | Best Gold Shop in Bangalore | Muliya",
  description:
    "Explore premium gold jewellery in Bangalore at Muliya. Visit the best gold shop in Bangalore or shop gold jewellery online with trusted quality and elegant designs.",
  keywords: [
    "gold jewellery Bangalore",
    "gold shop in Bangalore",
    "gold jewellery online Bangalore"
  ],
  alternates: {
    canonical: "https://muliya.in/gold-jewellery-bangalore/",
  },
};

export default function GoldJewelleryPage() {
  return (
    <main className="container mx-auto px-4 py-10">

      <section className="py-16 bg-white relative overflow-hidden">

        {/* H1 FIX (IMPORTANT) */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4 max-w-2xl">
          Gold Jewellery in Bangalore –{" "}
          <span className="italic">Trusted Gold Shop for Elegant Designs</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-12">
          Looking for the best gold jewellery in Bangalore? Muliya is a trusted
          gold shop in Bangalore offering a wide range of traditional and modern designs.
          Whether you want to visit our showroom or buy gold jewellery online in Bangalore,
          we ensure purity, quality, and timeless craftsmanship.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-3">
              Explore Premium Gold Collections
            </h2>

            <h2 className="text-2xl font-serif mt-6 mb-3">
              Why Choose Our Gold Shop in Bangalore?
            </h2>

            <div className="space-y-3 mb-8">
              {[
                "Certified and high-purity gold jewellery",
                "Exclusive traditional and contemporary designs",
                "Transparent pricing and trusted service",
                "Convenient online shopping with doorstep delivery",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-[#E92247]" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/products">
                Explore Collections <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
      </section>

    </main>
  );
}