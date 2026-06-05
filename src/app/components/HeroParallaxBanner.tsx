"use client";

import { useEffect, useState } from "react";
import { ImageBannerSwiper, type BannerSlide } from "@/app/components/ImageBannerSwiper";
import { getImageUrl } from "@/lib/api";

/** Static fallback banners shown instantly on first render (no layout shift). */
const STATIC_SLIDES: BannerSlide[] = [
  { image: "/images/new_banner/Artboard 1 copy 3.png" },
  { image: "/images/new_banner/Artboard 1 copy 5.jpg" },
  { image: "/images/new_banner/Artboard 1 copy 6.jpg" },
  { image: "/images/new_banner/Artboard 1 copy.jpg" },
  { image: "/images/new_banner/Artboard 2 copy.jpg" },
  { image: "/images/new_banner/Artboard 2.jpg" },
  { image: "/images/new_banner/World Record.jpg" },
];

interface ApiBanner {
  _id?: string;
  imageUrl?: string;
  mobileImageUrl?: string;
  linkUrl?: string;
  title?: string;
  subtitle?: string;
  altText?: string;
  isActive?: boolean;
  order?: number;
}

export function HeroParallaxBanner() {
  const [slides, setSlides] = useState<BannerSlide[]>(STATIC_SLIDES);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    fetch(`${apiUrl}/header/getbannerlist`)
      .then((r) => r.json())
      .then((res) => {
        const banners: ApiBanner[] = res?.banners ?? [];

        // Sort by order if present, then filter active ones
        const active = banners
          .filter((b) => b.isActive !== false && b.imageUrl)
          .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

        if (active.length > 0) {
          setSlides(
            active.map((b) => ({
              image: getImageUrl(b.imageUrl),
              link: b.linkUrl || undefined,
              title: b.title || undefined,
              subtitle: b.subtitle || undefined,
              alt: b.altText || "Muliya banner",
            }))
          );
        }
        // else keep static fallback
      })
      .catch(() => {
        // network error — keep static banners silently
      });
  }, []);

  return (
    <ImageBannerSwiper
      slides={slides}
      alt="Muliya banner"
      className="h-[calc(110vh-160px)] md:h-[calc(110vh-180px)]"
      delay={4500}
    />
  );
}
