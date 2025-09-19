"use client";
import { motion } from "framer-motion";

export default function ShowcaseGlow() {
  // Animated SVG glow that sits behind a card/image
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-end justify-center">
      {/* Subtle top vignette so glow doesn't bleed too high */}
      <div className="absolute inset-0 radial-mask" />

      <motion.svg
        initial={{ opacity: 0.6, filter: "blur(24px)" as any }}
        animate={{
          opacity: [0.6, 0.85, 0.6],
          translateY: [0, -6, 0],
          scaleX: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        width="560"
        height="220"
        viewBox="0 0 560 220"
        className="mb-[-20px]" // tuck slightly under the card
      >
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#7C3AED" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#111827" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Elliptical glow */}
        <ellipse cx="280" cy="150" rx="240" ry="70" fill="url(#glowGradient)" />
      </motion.svg>
    </div>
  );
}
