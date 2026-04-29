"use client";

import { useMemo } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/Section%20Banner.png",
      "/images/Section%20Banner_2.png",
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
