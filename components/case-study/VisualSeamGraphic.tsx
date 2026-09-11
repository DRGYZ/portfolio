'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function VisualSeamGraphic() {
  const prefersReduced = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden border border-white/[0.08] bg-[#111218] p-8 transition-colors duration-300 hover:border-accent/30"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Visual Motif Connection // Seam Geometry
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
          18&deg; Transition Cut
        </span>
      </div>

      <p className="mt-4 font-editorial text-2xl italic tracking-tight text-primary sm:text-3xl max-w-xl">
        The diagonal seam cuts in Nyxboard share an intentional geometric dialogue with this portfolio&apos;s architectural angular language.
      </p>

      {/* Interactive Seam Canvas */}
      <div className="mt-8 relative flex h-24 w-full items-center">
        <svg
          className="h-full w-full text-accent overflow-visible"
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Background guide grid */}
          <line x1="0" y1="25" x2="500" y2="25" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.1" />
          <line x1="0" y1="8" x2="500" y2="8" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.1" />

          {/* Primary animated drawn path */}
          <motion.path
            d="M0 25 L210 25 L260 8 L500 8"
            stroke="currentColor"
            strokeWidth={isHovered ? '2.5' : '1.8'}
            fill="none"
            initial={prefersReduced ? false : { pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Secondary cyan telemetry echo */}
          <motion.path
            d="M0 27 L210 27 L260 10 L500 10"
            stroke="#35b9c8"
            strokeWidth="1"
            fill="none"
            initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Inflection node 1 */}
          <circle cx="210" cy="25" r="3.5" className="fill-background stroke-accent" strokeWidth="1.5" />

          {/* Inflection node 2 (accent cut) */}
          <circle cx="260" cy="8" r="3.5" className="fill-accent stroke-white" strokeWidth="1.5" />
        </svg>

        {/* Floating angle annotation */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="absolute left-[47%] top-2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 bg-[#111218] border border-accent/40 text-accent shadow-sm"
        >
          &ang; 18.4&deg; Seam Slope
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
        <span>Coordinate Inflection [210, 25] &rarr; [260, 8]</span>
        <span className="text-accent/80">Continuous Edge Vector</span>
      </div>
    </div>
  );
}
