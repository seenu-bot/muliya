"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { getImageUrl } from "@/lib/api";

interface CategoryItem {
  label: string;
  href: string;
  image: string;
}

/** Maps a category name to its SEO-friendly product URL.
 *  Falls back to `/products/<slug>` for names not in the map. */
function categoryHref(name: string): string {
  const slugMap: Record<string, string> = {
    rings:       "/products/gold-rings-bangalore",
    earrings:    "/products/gold-earrings-bangalore",
    pendants:    "/products/gold-pendants-bangalore",
    mangalsutra: "/products/gold-mangalsutra-bangalore",
    chains:      "/products/gold-chain-bangalore",
    chain:       "/products/gold-chain-bangalore",
    bracelets:   "/products/gold-bracelets-bangalore",
    bangles:     "/products/gold-bangles-bangalore",
    necklaces:   "/products/gold-necklaces-bangalore",
    necklace:    "/products/gold-necklaces-bangalore",
    diamonds:    "/diamond-jewellery-bangalore",
    diamond:     "/diamond-jewellery-bangalore",
  };
  const key = name.toLowerCase().trim();
  return slugMap[key] ?? `/products/${encodeURIComponent(key)}`;
}

/** Static fallback — shown immediately (no layout shift while API loads). */
const STATIC_CATEGORIES: CategoryItem[] = [
  { label: "RINGS",       href: "/products/gold-rings-bangalore",      image: "/images/blue_category/Slider1_muliya.webp" },
  { label: "EARRINGS",    href: "/products/gold-earrings-bangalore",   image: "/images/blue_category/Slider6_muliya.webp" },
  { label: "PENDANTS",    href: "/products/gold-pendants-bangalore",   image: "/images/blue_category/Slider4_muliya.webp" },
  { label: "MANGALSUTRA", href: "/products/gold-mangalsutra-bangalore",image: "/images/blue_category/Slider5_muliya.webp" },
  { label: "CHAINS",      href: "/products/gold-chain-bangalore",      image: "/images/blue_category/Slider3_muliya.webp" },
  { label: "BRACELETS",   href: "/products/gold-bracelets-bangalore",  image: "/images/blue_category/Slider7_muliya.webp" },
  { label: "BANGLES",     href: "/products/gold-bangles-bangalore",    image: "/images/blue_category/Slider2_muliya.webp" },
  { label: "NECKLACES",   href: "/products/gold-necklaces-bangalore",  image: "/images/blue_category/Slider8_muliya.webp" },
];

interface ApiCategory {
  _id: string;
  name: string;
  categoryName?: string;
  imageUrl?: string;
  isActive?: boolean;
}

export function DynamicCategorySection() {
  const [categories, setCategories] = useState<CategoryItem[]>(STATIC_CATEGORIES);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    fetch(`${apiUrl}/category/categories`)
      .then((r) => r.json())
      .then((res) => {
        const cats: ApiCategory[] = res?.categories ?? res?.data ?? [];
        const active = cats.filter((c) => c.isActive !== false);
        if (active.length > 0) {
          setCategories(
            active.map((c) => {
              const name = c.name || c.categoryName || "";
              return {
                label: name.toUpperCase(),
                href: categoryHref(name),
                image: getImageUrl(c.imageUrl),
              };
            })
          );
        }
        // else keep static fallback
      })
      .catch(() => {
        // keep static categories on network error
      });
  }, []);

  return (
    <div className="mt-10 grid grid-cols-2 gap-5 md:mt-14 md:gap-6 lg:grid-cols-4">
      {categories.map((cat, idx) => (
        <motion.div
          key={`${cat.href}-${idx}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.04 }}
          className="group"
        >
          <Link href={cat.href} className="block">
            {/* Image tile */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-md">
              <ImageWithFallback
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </div>

            {/* Label */}
            <p className="mt-4 text-center font-serif text-xs uppercase tracking-[0.14em] text-neutral-900 sm:text-sm md:text-[0.95rem] group-hover:text-[#E92247] transition-colors duration-200">
              {cat.label}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
