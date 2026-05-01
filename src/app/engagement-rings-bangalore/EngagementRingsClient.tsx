"use client";

import { Check, ArrowRight, Heart, Sparkles, Gem } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function EngagementRingsClient() {
  return (
    <main className="container mx-auto px-4 py-10 space-y-20">

      {/* HERO */}
      <section>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Engagement Rings in Bangalore –{" "}
          <span className="italic">Find Your Perfect Diamond Ring</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Looking for the perfect engagement rings in Bangalore? Muliya is a trusted
          engagement ring shop in Bangalore offering exquisite diamond rings crafted
          with elegance and precision. Discover timeless designs to celebrate your love.
        </p>
      </section>

      {/* RING TYPES */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Explore Engagement Ring Designs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Solitaire Diamond Rings",
            "Halo Engagement Rings",
            "Vintage Style Rings",
            "Modern Minimal Rings",
            "Couple Rings",
            "Custom Engagement Rings",
          ].map((item) => (
            <div key={item} className="p-6 border rounded-xl hover:shadow-lg transition">
              <Gem className="mb-3 text-[#E92247]" />
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Elegant {item.toLowerCase()} designed for your special moment.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Why Choose Our Engagement Ring Shop in Bangalore?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Certified diamond engagement rings",
            "Wide range of classic & modern styles",
            "Custom ring design services available",
            "Transparent pricing and trusted brand",
            "Premium showroom experience",
            "Perfect rings for proposals & weddings",
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
          src="/images/engagement-ring-display.jpg"
          alt="Engagement rings Bangalore diamond ring collection"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-serif mb-4">
            Diamond Rings in Bangalore for Every Love Story
          </h2>
          <p className="text-gray-600 mb-4">
            Our diamond rings in Bangalore are designed to celebrate your special
            moments. From classic solitaires to modern designs, find a ring that
            perfectly represents your relationship.
          </p>

          <Button asChild>
            <Link href="/products">
              Explore Rings <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* BUY ONLINE */}
      <section>
        <h2 className="text-3xl font-serif mb-4">
          Buy Engagement Rings Online in Bangalore
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Shop engagement rings online with ease. Choose from a wide range of
          certified diamond rings and enjoy secure checkout with delivery across Bangalore.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-serif mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Where can I buy engagement rings in Bangalore?",
              a: "You can buy engagement rings in Bangalore from trusted jewellery stores like Muliya offering certified diamond rings.",
            },
            {
              q: "What is the best diamond ring for engagement?",
              a: "Solitaire diamond rings are the most popular choice for engagement due to their elegance and timeless appeal.",
            },
            {
              q: "Do you offer custom engagement rings?",
              a: "Yes, we provide custom engagement ring design services to match your preferences.",
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
        <Link href="/diamond-jewellery-bangalore" className="ml-2 text-[#E92247] underline">
          Diamond Jewellery
        </Link>
        <Link href="/gold-jewellery-bangalore" className="ml-4 text-[#E92247] underline">
          Gold Jewellery
        </Link>
      </section>

      {/* CTA */}
      <section className="p-8 bg-gray-100 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Find the Perfect Engagement Ring in Bangalore
        </h2>
        <p className="text-gray-600 mb-4">
          Celebrate your love with a beautifully crafted diamond ring.
        </p>
        <Button asChild>
          <Link href="/products">
            Shop Engagement Rings <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>

    </main>
  );
}