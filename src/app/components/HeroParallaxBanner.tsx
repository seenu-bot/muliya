"use client";

import { useMemo } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/Artboard%201%20copy%202.png",
      "/images/Artboard%201%20copy%203%20%282%29.jpg.jpeg",
      "/images/Artboard%201%20copy%204.png",
      "/images/Artboard%201%20copy%205.png",
      "/images/Artboard%201%20copy%206.png",
      "/images/Artboard%201%20copy.png",
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
