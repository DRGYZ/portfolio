'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { MonogramYK } from './MonogramYK';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headlineLineVariants: Variants = {
  hidden: { y: '112%', rotate: 1.2 },
  visible: (index: number) => ({
    y: '0%',
    rotate: 0,
    transition: {
      duration: 0.82,
      delay: index * 0.075,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(containerRef, prefersReduced);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 0.2, 0.62, 1], [0, -4, -52, -126]);
  const textScale = useTransform(scrollYProgress, [0, 0.24, 1], [1, 1, 0.94]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.24, 0.64, 0.9], [1, 1, 0.46, 0]);
  const lineOneX = useTransform(scrollYProgress, [0, 0.18, 0.68, 1], [0, 0, -76, -142]);
  const lineTwoX = useTransform(scrollYProgress, [0, 0.18, 0.68, 1], [0, 0, 58, 112]);
  const lineThreeX = useTransform(scrollYProgress, [0, 0.18, 0.68, 1], [0, 0, -34, -82]);
  const lineOneY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -36]);
  const lineTwoY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 8]);
  const lineThreeY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 42]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[118svh] overflow-clip lg:min-h-[138svh]"
    >
      <div className="sticky top-0 mx-auto flex min-h-svh w-full max-w-[1600px] items-center overflow-hidden px-6 pb-14 pt-28 lg:px-16 lg:pb-16 lg:pt-32">
        <MonogramYK
          pointerX={pointer.normalizedX}
          pointerY={pointer.normalizedY}
          scrollProgress={scrollYProgress}
        />

        <motion.div
          variants={containerVariants}
          initial={prefersReduced ? 'visible' : 'hidden'}
          animate="visible"
          style={{
            y: prefersReduced ? 0 : textY,
            scale: prefersReduced ? 1 : textScale,
            opacity: prefersReduced ? 1 : textOpacity,
          }}
          className="relative z-10 w-full origin-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-7 flex max-w-xl flex-col gap-1 sm:mb-9"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Yazan Khaled
            </p>
            <p className="text-sm leading-relaxed text-primary-muted sm:text-base">
              Front-end Developer &amp; Creative Technologist
              <span className="hidden sm:inline"> — </span>
              <span className="block sm:inline">Paris, France</span>
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-[1420px] text-balance font-display text-[clamp(2.25rem,7.15vw,6.9rem)] font-bold leading-[0.92] tracking-[-0.055em] text-primary"
          >
            <span className="block overflow-clip pb-[0.08em]">
              <motion.span custom={0} variants={headlineLineVariants} className="block origin-left">
                <motion.span
                  style={{ x: prefersReduced ? 0 : lineOneX, y: prefersReduced ? 0 : lineOneY }}
                  className="block lg:whitespace-nowrap"
                >
                  I build polished{' '}
                  <span className="px-[0.04em] font-editorial font-normal italic tracking-[-0.035em] text-accent">
                    interfaces
                  </span>{' '}
                </motion.span>
              </motion.span>
            </span>{' '}
            <span className="block overflow-clip pb-[0.08em]">
              <motion.span custom={1} variants={headlineLineVariants} className="block origin-left">
                <motion.span
                  style={{ x: prefersReduced ? 0 : lineTwoX, y: prefersReduced ? 0 : lineTwoY }}
                  className="block lg:ml-[7vw] lg:whitespace-nowrap"
                >
                  and interactive products{' '}
                </motion.span>
              </motion.span>
            </span>
            <span className="block overflow-clip pb-[0.16em]">
              <motion.span custom={2} variants={headlineLineVariants} className="block origin-left">
                <motion.span
                  style={{ x: prefersReduced ? 0 : lineThreeX, y: prefersReduced ? 0 : lineThreeY }}
                  className="block lg:ml-[2vw] lg:whitespace-nowrap lg:text-[0.86em]"
                >
                  that make{' '}
                  <span className="px-[0.04em] font-editorial font-normal italic tracking-[-0.035em] text-accent">
                    complex systems feel simple.
                  </span>
                </motion.span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-start gap-7 sm:mt-12 sm:flex-row sm:items-center sm:gap-9"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent focus-visible:bg-accent"
            >
              <span>View Work</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted sm:gap-7">
              <a
                href="https://github.com/DRGYZ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary focus-visible:text-primary"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary focus-visible:text-primary"
              >
                LinkedIn ↗
              </a>
              <a
                href={getAssetPath('/cv.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary focus-visible:text-primary"
              >
                CV ↗
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: prefersReduced ? 1 : cueOpacity }}
          className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-subtle sm:flex lg:right-16"
        >
          <span className="h-px w-10 bg-current" />
          Scroll to browse
        </motion.div>
      </div>
    </section>
  );
}
