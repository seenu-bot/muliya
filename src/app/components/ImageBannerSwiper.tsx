"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/** A single slide definition. `image` is required; `link`, `title`, `subtitle` are optional. */
export interface BannerSlide {
  image: string;
  link?: string;
  title?: string;
  subtitle?: string;
  alt?: string;
}

interface ImageBannerSwiperProps {
  /** Legacy: plain image URL array. Use `slides` for full-featured slides. */
  images?: string[];
  /** Extended slides with optional link / title / subtitle. Takes precedence over `images`. */
  slides?: BannerSlide[];
  alt?: string;
  className?: string;
  /** Auto-play interval in ms (default 4000). Pass 0 to disable. */
  delay?: number;
}

export function ImageBannerSwiper({
  images = [],
  slides,
  alt = "Banner",
  className = "",
  delay = 4000,
}: ImageBannerSwiperProps) {
  // Normalise to BannerSlide[]
  const resolvedSlides: BannerSlide[] =
    slides && slides.length > 0
      ? slides
      : images.map((src) => ({ image: src, alt }));

  if (resolvedSlides.length === 0) return null;

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

        .imageBannerSwiperPrev { left: 12px; }
        .imageBannerSwiperNext { right: 12px; }

        @media (min-width: 640px) {
          .imageBannerSwiperPrev { left: 24px; }
          .imageBannerSwiperNext { right: 24px; }
        }
      `}</style>

      <button
        type="button"
        aria-label="Previous banner"
        className="imageBannerSwiperNav imageBannerSwiperPrev"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next banner"
        className="imageBannerSwiperNav imageBannerSwiperNext"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={delay > 0 ? { delay, disableOnInteraction: false } : false}
        loop={resolvedSlides.length > 1}
        navigation={{ prevEl: ".imageBannerSwiperPrev", nextEl: ".imageBannerSwiperNext" }}
        pagination={{ clickable: true }}
        className="imageBannerSwiper w-full h-full"
      >
        {resolvedSlides.map((slide, idx) => {
          const imgEl = (
            <>
              <img
                src={slide.image}
                alt={slide.alt ?? alt}
                className="w-full h-full object-cover object-left object-top md:object-[50%_25%]"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding="async"
              />
              {/* Optional title/subtitle overlay */}
              {(slide.title || slide.subtitle) && (
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 bg-gradient-to-t from-black/50 via-black/15 to-transparent z-10">
                  {slide.title && (
                    <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-5xl font-medium leading-tight drop-shadow-md max-w-2xl">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="mt-2 text-white/85 text-sm sm:text-base md:text-lg drop-shadow max-w-xl">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              )}
            </>
          );

          return (
            <SwiperSlide key={`${slide.image}-${idx}`} className="relative">
              {slide.link ? (
                <a
                  href={slide.link}
                  className="block w-full h-full"
                  aria-label={slide.title ?? slide.alt ?? `Banner ${idx + 1}`}
                  rel="noopener"
                >
                  {imgEl}
                </a>
              ) : (
                imgEl
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
