"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * CSS-3D gold coin component — no Three.js dependency required.
 * Rotates continuously on the Y axis with a floating bob.
 * On hover, rotation speed increases.
 */
export function GoldCoin3D() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 select-none cursor-pointer"
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden="true"
    >
      {/* Glow behind the coin */}
      <div
        className="absolute inset-0 rounded-full blur-3xl transition-all duration-500"
        style={{
          background: "radial-gradient(circle, rgba(212,168,67,0.45) 0%, transparent 70%)",
          transform: "scale(1.3)",
          opacity: hovered ? 1 : 0.6,
        }}
      />

      {/* 3D coin scene */}
      <div
        className="absolute inset-0"
        style={{ perspective: "600px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            animation: hovered
              ? "coinSpinFast 0.8s linear infinite"
              : "coinSpin 3s linear infinite",
          }}
        >
          {/* Front face */}
          <CoinFace side="front" />
          {/* Back face */}
          <CoinFace side="back" />
          {/* Edge — stack of thin slices for depth */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #8B6914 0%, #C9A227 40%, #FFD700 50%, #C9A227 60%, #8B6914 100%)",
                backfaceVisibility: "hidden",
                transform: `rotateY(${90 + i * 15}deg) translateZ(${
                  /* radius of coin */ 96
                }px) scaleX(0.12)`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes coinSpin {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes coinSpinFast {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </motion.div>
  );
}

function CoinFace({ side }: { side: "front" | "back" }) {
  const isBack = side === "back";
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        backfaceVisibility: "hidden",
        transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
        background:
          "radial-gradient(circle at 35% 35%, #FFE066 0%, #D4A843 35%, #C9A227 60%, #8B6914 100%)",
        boxShadow:
          "inset -8px -8px 20px rgba(0,0,0,0.4), inset 4px 4px 12px rgba(255,255,200,0.3), 0 8px 32px rgba(212,168,67,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {/* Embossed ring */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "50%",
          border: "3px solid rgba(255,220,80,0.5)",
          boxShadow: "0 0 0 2px rgba(139,105,20,0.4)",
        }}
      />
      {/* Center emblem */}
      <div
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          lineHeight: 1,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
          userSelect: "none",
        }}
      >
        {isBack ? "✦" : "🪙"}
      </div>
      <div
        style={{
          fontSize: "clamp(0.45rem, 1vw, 0.65rem)",
          fontWeight: 800,
          letterSpacing: "0.15em",
          color: "rgba(80,50,0,0.8)",
          textTransform: "uppercase",
        }}
      >
        {isBack ? "PURE GOLD" : "HGC"}
      </div>
    </div>
  );
}
