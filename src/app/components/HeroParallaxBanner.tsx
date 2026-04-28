"use client";

import { useMemo } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/Artboard 1 copy 3 (2).jpg.jpeg",
      "/images/Artboard 1 copy 2.png",
      "/images/Artboard 1 copy 4.png",
      "/images/Artboard 1 copy 5.png",
    ],
    [],
  );

  return (
    <ImageBannerSwiper
      images={images}
      alt="Muliya banner"
      className="h-[calc(110vh-160px)] md:h-[calc(110vh-180px)]"
    />
  );
}
