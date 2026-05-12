"use client";

import { useMemo } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/new_banner/Artboard 1 copy 3.png",
      "/images/new_banner/Artboard 1 copy 5.jpg",
      "/images/new_banner/Artboard 1 copy 6.jpg",
      "/images/new_banner/Artboard 1 copy.jpg",
      "/images/new_banner/Artboard 2 copy.jpg",
      "/images/new_banner/Artboard 2.jpg",
      "/images/new_banner/World Record.jpg",

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
