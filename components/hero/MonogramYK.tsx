'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MonogramYKProps {
  pointerX?: number; // normalized -1 to 1
  pointerY?: number; // normalized -1 to 1
}

export function MonogramYK({ pointerX = 0, pointerY = 0 }: MonogramYKProps) {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Scroll driven transforms
  const scrollYTransform = useTransform(scrollY, [0, 600], [0, -80]);
  const scrollScaleTransform = useTransform(scrollY, [0, 600], [1, 1.08]);
  const scrollOpacityTransform = useTransform(scrollY, [0, 450, 700], [0.85, 0.35, 0]);

  // Spring smoothed mouse parallax
  const springConfig = { stiffness: 50, damping: 24, mass: 0.8 };
  const smoothMouseX = useSpring(prefersReduced ? 0 : pointerX * 28, springConfig);
  const smoothMouseY = useSpring(prefersReduced ? 0 : pointerY * 22, springConfig);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        y: prefersReduced ? 0 : scrollYTransform,
        scale: prefersReduced ? 1 : scrollScaleTransform,
        opacity: scrollOpacityTransform,
        x: smoothMouseX,
      }}
      className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-visible"
    >
      <motion.svg
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-[140%] max-w-[1500px] h-auto text-accent/[0.07] hover:text-accent/[0.1] transition-colors"
        viewBox="0 0 1400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Typographic 'Y' Letterform — Bold Architectural Grotesque Silhouette */}
        <path
          d="M 160 80 L 380 80 L 520 360 L 660 80 L 880 80 L 630 520 L 630 720 L 410 720 L 410 520 Z"
          fill="currentColor"
          className="text-accent/[0.06]"
        />
        {/* Typographic 'Y' Contour Accent Rule */}
        <path
          d="M 160 80 L 380 80 L 520 360 L 660 80 L 880 80 L 630 520 L 630 720 L 410 720 L 410 520 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent/[0.14]"
        />

        {/* Typographic 'K' Letterform — Intersecting Bold Architectural Silhouette */}
        <g transform="translate(620, 0)">
          {/* Vertical Stem */}
          <path
            d="M 120 80 L 310 80 L 310 720 L 120 720 Z"
            fill="currentColor"
            className="text-accent/[0.05]"
          />
          <path
            d="M 120 80 L 310 80 L 310 720 L 120 720 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/[0.12]"
          />

          {/* Upper Diagonal Arm */}
          <path
            d="M 280 430 L 520 80 L 730 80 L 420 480 Z"
            fill="currentColor"
            className="text-accent/[0.05]"
          />
          <path
            d="M 280 430 L 520 80 L 730 80 L 420 480 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/[0.12]"
          />

          {/* Lower Diagonal Leg */}
          <path
            d="M 360 400 L 660 720 L 460 720 L 250 490 Z"
            fill="currentColor"
            className="text-accent/[0.05]"
          />
          <path
            d="M 360 400 L 660 720 L 460 720 L 250 490 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/[0.12]"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
