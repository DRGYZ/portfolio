'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ExperienceSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-20"
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: prefersReduced ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative grid gap-8 border-b border-white/[0.08] py-10 sm:grid-cols-[1fr_auto] sm:items-end lg:py-14"
      >
        <motion.span
          aria-hidden="true"
          initial={prefersReduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-white/[0.14]"
        />
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03 / Experience</p>
          <h2 id="experience-title" className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl">
            Selected roles
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
