import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type StackCard = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  bullets: string[];
  badgeTitle: string;
  badgeText: string;
  leftImage: { src: string; alt: string };
  centerImage: { src: string; alt: string };
};

const cards: StackCard[] = [
  {
    id: "carat",
    kicker: "The Four C’s That Make",
    title: "Carat",
    subtitle: "Reflects A Diamond's Weight",
    bullets: ["Light Performance", "Visual presence", "Perfect proportion"],
    badgeTitle: "PRESENCE OVER SIZE",
    badgeText: "Even the smallest stone holds the deepest light.",
    leftImage: {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
      alt: "Jewellery detail",
    },
    centerImage: {
      src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
      alt: "Diamonds on a surface",
    },
  },
  {
    id: "cut",
    kicker: "The Four C’s That Make",
    title: "Cut",
    subtitle: "Shapes A Diamond's Sparkle",
    bullets: ["No light leakage", "Perfect symmetry", "Exceptional scintillation"],
    badgeTitle: "BRILLIANCE BY DESIGN",
    badgeText: "Every angle shaped to let light fall in love.",
    leftImage: {
      src: "https://images.unsplash.com/photo-1629923302219-6b54f200d6a2?auto=format&fit=crop&w=900&q=80",
      alt: "Diamond cuts",
    },
    centerImage: {
      src: "https://images.unsplash.com/photo-1601121141461-9d664836c932?auto=format&fit=crop&w=900&q=80",
      alt: "Brilliant diamonds",
    },
  },
  {
    id: "colour",
    kicker: "The Four C’s That Make",
    title: "Colour",
    subtitle: "Reveals A Diamond's Natural Glow",
    bullets: ["No brown tinge", "No green tinge", "Only pure, true natural color"],
    badgeTitle: "NOTHING BUT NATURAL",
    badgeText: "A colour so honest, it doesn’t need to be described.",
    leftImage: {
      src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
      alt: "Hand wearing ring",
    },
    centerImage: {
      src: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?auto=format&fit=crop&w=900&q=80",
      alt: "Diamond close-up",
    },
  },
  {
    id: "clarity",
    kicker: "The Four C’s That Make",
    title: "Clarity",
    subtitle: "Defines A Diamond's Inner Purity",
    bullets: ["No milky cloudiness", "No reflecting inclusions", "No red nats"],
    badgeTitle: "NOTHING TO HIDE",
    badgeText: "Clarity that stays clear in every chapter of your life.",
    leftImage: {
      src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      alt: "Jewellery on petals",
    },
    centerImage: {
      src: "https://images.unsplash.com/photo-1612630741022-b29ec6e4dbed?auto=format&fit=crop&w=900&q=80",
      alt: "Diamond on tweezers",
    },
  },
];

export default function CardStackSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm tracking-wide text-gray-500">
              Diamond education
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">
              The Four C’s That Make Every Diamond Rare
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl">
            Scroll to explore how carat, cut, colour, and clarity shape beauty you
            can see and feel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="relative">
          {cards.map((c, idx) => (
            <div key={c.id} className="relative h-[110vh]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.35 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
                style={{
                  zIndex: 10 + idx,
                  transform: `translateY(${idx * 12}px)`,
                }}
              >
                <div className="rounded-[28px] border border-amber-100 bg-white shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left visuals */}
                    <div className="relative min-h-[360px] lg:min-h-[520px] bg-gradient-to-br from-[#E92247]/10 via-white to-amber-50">
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(233,34,71,0.10),transparent_55%)]" />

                      <div className="absolute left-0 top-0 bottom-0 w-[38%] hidden md:block">
                        <ImageWithFallback
                          src={c.leftImage.src}
                          alt={c.leftImage.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[72%] md:w-[54%] lg:w-[52%]">
                        <div className="rounded-2xl overflow-hidden border border-amber-100 bg-white shadow-sm">
                          <div className="aspect-[4/3]">
                            <ImageWithFallback
                              src={c.centerImage.src}
                              alt={c.centerImage.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="p-8 sm:p-10 lg:p-12">
                      <p className="text-sm text-gray-500">{c.kicker}</p>
                      <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3 leading-tight">
                        <span className="text-gray-900">{c.title}</span>{" "}
                        <span className="text-gray-700 font-light">
                          {c.subtitle}
                        </span>
                      </h3>
                      <p className="text-gray-600 mt-4 max-w-xl">
                        At Muliya, we value balance and proportion — not size
                        alone. Our diamonds are guided by enduring ideals.
                      </p>

                      <ul className="mt-6 space-y-3 text-gray-700">
                        {c.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-1.5 inline-block w-4 h-4 rounded-full border border-amber-200 bg-amber-50" />
                            <span className="text-base">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-white border border-amber-100 flex items-center justify-center text-[#E92247] font-semibold">
                          {c.title[0]}
                        </div>
                        <div>
                          <p className="text-xs tracking-wide text-gray-500 font-semibold">
                            {c.badgeTitle}
                          </p>
                          <p className="text-gray-700 mt-1">{c.badgeText}</p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#E92247] transition-colors"
                        >
                          Explore collection
                          <span aria-hidden className="text-lg">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

