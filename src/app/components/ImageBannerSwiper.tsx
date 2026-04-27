"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ImageBannerSwiper({
  images,
  alt = "Banner",
  className = "",
}: {
  images: string[];
  alt?: string;
  className?: string;
}) {
  return (
    <section className={`relative w-full overflow-hidden bg-white ${className}`.trim()}>
      <style jsx global>{`
        .imageBannerSwiper .swiper-button-prev,
        .imageBannerSwiper .swiper-button-next {
          display: none;
        }

        .imageBannerSwiper .swiper-pagination {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 12px;
          z-index: 10;
        }

        .imageBannerSwiperNav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.28);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 160ms ease, transform 160ms ease;
          user-select: none;
        }

        .imageBannerSwiperNav:hover {
          background: rgba(0, 0, 0, 0.42);
          transform: translateY(-50%) scale(1.04);
        }

        .imageBannerSwiperNav:active {
          transform: translateY(-50%) scale(0.98);
        }

        .imageBannerSwiperNav svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
        }

        .imageBannerSwiperPrev {
          left: 12px;
        }

        .imageBannerSwiperNext {
          right: 12px;
        }

        @media (min-width: 640px) {
          .imageBannerSwiperPrev {
            left: 24px;
          }

          .imageBannerSwiperNext {
            right: 24px;
          }
        }
      `}</style>

      <button type="button" aria-label="Previous banner" className="imageBannerSwiperNav imageBannerSwiperPrev">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button type="button" aria-label="Next banner" className="imageBannerSwiperNav imageBannerSwiperNext">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation={{ prevEl: ".imageBannerSwiperPrev", nextEl: ".imageBannerSwiperNext" }}
        pagination={{ clickable: true }}
        className="imageBannerSwiper w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-left object-top md:object-[50%_25%]"
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "auto"}
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
