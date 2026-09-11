'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CaseStudyFrameProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up';
}

const offsets = {
  left: { x: -20, y: 0 },
  right: { x: 20, y: 0 },
  up: { x: 0, y: 20 },
};

/** A restrained clip-and-seam reveal for editorial interface figures. */
export function CaseStudyFrame({
  children,
  className = '',
  direction = 'up',
}: CaseStudyFrameProps) {
  const prefersReduced = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      initial={prefersReduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 1.025, ...offset }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.span
        aria-hidden="true"
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.56, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70"
      />
    </motion.div>
  );
}
