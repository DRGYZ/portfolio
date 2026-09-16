'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HandoffSeamProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function HandoffSeam({ sectionRef }: HandoffSeamProps) {
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 20%'],
  });

  // Restrained mechanical convergence transforms
  const upperY = useTransform(scrollYProgress, [0.15, 0.55], [-20, 0]);
  const lowerY = useTransform(scrollYProgress, [0.15, 0.55], [20, 0]);
  const ruleOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0.25, 1]);

  // Brief lavender calibration tick/pulse when rules lock at 0.55
  const pulseOpacity = useTransform(
    scrollYProgress,
    [0.46, 0.56, 0.74],
    [0, 0.9, 0.15]
  );
  const pulseScale = useTransform(
    scrollYProgress,
    [0.46, 0.56, 0.74],
    [0.6, 1, 0.8]
  );

  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className="relative mb-12 border-t border-white/[0.08] lg:mb-16"
      />
    );
  }

  return (
    <div aria-hidden="true" className="relative mb-12 pt-4 lg:mb-16">
      {/* Upper converging caliper hairline */}
      <motion.div
        style={{ y: upperY, opacity: ruleOpacity }}
        className="absolute inset-x-0 top-0 h-px bg-white/[0.09]"
      />

      {/* Lower converging caliper hairline */}
      <motion.div
        style={{ y: lowerY, opacity: ruleOpacity }}
        className="absolute inset-x-0 top-0 h-px bg-accent/25"
      />

      {/* Seam Horizon with brief lavender calibration lock tick */}
      <div className="relative flex h-3 items-center justify-center">
        <motion.div
          style={{ opacity: pulseOpacity, scaleX: pulseScale }}
          className="h-[2px] w-5 origin-center bg-accent shadow-[0_0_6px_rgba(185,195,255,0.4)]"
        />
      </div>
    </div>
  );
}
