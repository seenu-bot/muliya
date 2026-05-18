"use client";

import { useEffect, useMemo, useState } from "react";
import { ImageBannerSwiper } from "@/app/components/ImageBannerSwiper";

export function HeroParallaxBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const images = useMemo(
    () => {
      const desktopImages = [
        "/images/new_banner/Artboard 1 copy 3.png",
        "/images/new_banner/Artboard 1 copy 5.jpg",
        "/images/new_banner/Artboard 1 copy 6.jpg",
        "/images/new_banner/Artboard 1 copy.jpg",
        "/images/new_banner/Artboard 2 copy.jpg",
        "/images/new_banner/Artboard 2.jpg",
        "/images/new_banner/World Record.jpg",
      ];

      const mobileImages = [
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 2.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 3.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 4.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 5.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 6.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 7.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 8.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy 9.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1 copy.webp",
        "/images/1080x1600_muliya_mobile_banner/Artboard 1.webp",
      ];

      return isMobile ? mobileImages : desktopImages;
    },
    [isMobile],
  );

  return (
    <ImageBannerSwiper
      images={images}
      alt="Muliya banner"
      className="h-[calc(110vh-160px)] md:h-[calc(110vh-180px)]"
    />
  );
}
