"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  "/images/video1.mp4",
  "/images/video2.mp4",
  "/images/video3.mp4",
  "/images/video4.mp4",
  "/images/video5.mp4",
];

export default function VideoCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getIndex = (index: any) => {
    if (index === active) return "center";
    if (index === (active - 1 + videos.length) % videos.length) return "left";
    if (index === (active + 1) % videos.length) return "right";
    return "hidden";
  };

  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="relative w-full max-w-5xl flex items-center justify-center">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 bg-gray-200 p-3 rounded-full"
        >
          ◀
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 z-20 bg-gray-200 p-3 rounded-full"
        >
          ▶
        </button>

        <div className="flex items-center justify-center gap-6">

          {videos.map((src, index) => {
            const position = getIndex(index);

            if (position === "hidden") return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  scale: position === "center" ? 1 : 0.85,
                  opacity: position === "center" ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className={`transition-all duration-500 ${
                  position === "center"
                    ? "w-[320px] h-[520px]"
                    : "w-[240px] h-[420px]"
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for side items */}
                  {position !== "center" && (
                    <div className="absolute inset-0 bg-black/30" />
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}