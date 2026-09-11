'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SeamDividerProps {
  label?: string;
  className?: string;
  accentWidth?: string;
}

export function SeamDivider({
  label,
  className = '',
  accentWidth = 'w-16 sm:w-24',
}: SeamDividerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative flex items-center gap-4 sm:gap-6 overflow-hidden ${className}`}
    >
      {/* Accent initial seam */}
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className={`h-px ${accentWidth} bg-accent/60`}
      />

      {/* Optional micro label */}
      {label && (
        <motion.span
          initial={prefersReduced ? false : { opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80 whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}

      {/* Main extending horizontal seam line */}
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: label ? 0.15 : 0.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="h-px flex-1 bg-white/[0.08]"
      />

      {/* Subtle terminal architectural tick */}
      <motion.span
        initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="h-1.5 w-1.5 rotate-45 border-r border-t border-accent/40"
      />
    </div>
  );
}
