"use client";

import { useMemo } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/banner/Artboard%201%20copy%203.png",
      "/images/banner/Artboard%201%20copy%204.png",
      "/images/banner/Artboard%201%20copy%205.png",
      "/images/banner/Artboard%201%20copy%206.png",
    ],
    [],
  );

  return <ImageBannerSwiper images={images} alt="Muliya banner" />;
}
