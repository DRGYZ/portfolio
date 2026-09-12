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

export function CaseStudyFrame({
  children,
  className = '',
  direction = 'up',
}: CaseStudyFrameProps) {
  const prefersReduced = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <div>
        {children}
      </div>
      <motion.span
        aria-hidden="true"
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.56, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70"
      />
    </motion.div>
  );
}
