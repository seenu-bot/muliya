"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Slide {
  id: number;
  heroImage: string;
  productImage: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    heroImage: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800",
    productImage: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    badge: "A Trusted Brand",
    title: "Muliya Hues",
    subtitle: "natural gemstones,\nvibrant colours",
    cta: "EXPLORE NOW",
    href: "/products",
  },
  {
    id: 2,
    heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800",
    productImage: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    badge: "Since 1944",
    title: "Diamond Collection",
    subtitle: "brilliant cuts,\ntimeless elegance",
    cta: "DISCOVER",
    href: "/products",
  },
  {
    id: 3,
    heroImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800",
    productImage: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    badge: "Heritage",
    title: "Gold Earrings",
    subtitle: "crafted with love,\nworn with pride",
    cta: "SHOP NOW",
    href: "/products",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlideIndex = (offset: number) => {
    return (current + offset + slides.length) % slides.length;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const currentSlide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <div className="relative h-[70vh] sm:h-[75vh] lg:h-[85vh]">
        {/* Main Slide - Full Width */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={currentSlide.heroImage}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
              </div>

              {/* Badge - Top Left */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Content - Right Side */}
              <div className="absolute inset-0 flex items-center justify-end pr-8 sm:pr-16 lg:pr-24">
                <div className="text-right">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-4"
                  >
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                      <span className="text-white">Muliya</span>
                    </h2>
                    <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white/90 italic mt-1 drop-shadow-md">
                      {currentSlide.title.split(" ")[1] || "Collection"}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed whitespace-pre-line mb-6 drop-shadow"
                  >
                    {currentSlide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-6 hidden sm:block"
                  >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 ml-auto">
                      <ImageWithFallback
                        src={currentSlide.productImage}
                        alt="product"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Link
                      href={currentSlide.href}
                      className="inline-block bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      {currentSlide.cta}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots - Tanishq Style */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}