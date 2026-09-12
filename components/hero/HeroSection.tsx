'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { MonogramYK } from './MonogramYK';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headlineLineVariants: Variants = {
  hidden: { y: '106%', rotate: 0.8, scale: 0.985, opacity: 0.2 },
  visible: (index: number) => ({
    y: '0%',
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.68,
      delay: index * 0.055,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const accentWordVariants: Variants = {
  hidden: { y: '92%', opacity: 0, scale: 0.97 },
  visible: (index: number) => ({
    y: '0%',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.58,
      delay: 0.16 + index * 0.045,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(containerRef, prefersReduced);

  const { scrollY, scrollYProgress } = useScroll({
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
  const interfacesX = useTransform(scrollYProgress, [0, 0.22, 0.7, 1], [0, 0, 25, 68]);
  const interfacesY = useTransform(scrollYProgress, [0, 0.22, 1], [0, 0, -18]);
  const complexX = useTransform(scrollYProgress, [0, 0.22, 0.7, 1], [0, 0, -12, -34]);
  const complexScale = useTransform(scrollYProgress, [0, 0.24, 0.72, 1], [1, 1, 1.025, 1.055]);
  const simpleX = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [0, 0, 18, 52]);
  const simpleY = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 20]);
  const actionsOpacity = useTransform(scrollY, [0, 180, 320], [1, 0.18, 0]);
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
                    <motion.span
                      custom={0}
                      variants={accentWordVariants}
                      style={{
                        x: prefersReduced ? 0 : interfacesX,
                        y: prefersReduced ? 0 : interfacesY,
                      }}
                      className="inline-block origin-left"
                    >
                      interfaces
                    </motion.span>
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
                  className="block lg:ml-[2vw] lg:whitespace-nowrap lg:text-[0.76em] 2xl:text-[0.8em]"
                >
                  that make{' '}
                  <span className="px-[0.04em] font-editorial font-normal italic tracking-[-0.035em] text-accent lg:hidden">
                    complex systems feel simple.
                  </span>
                  <span className="hidden px-[0.04em] font-editorial font-normal italic tracking-[-0.035em] text-accent lg:inline">
                    <motion.span
                      custom={1}
                      variants={accentWordVariants}
                      style={{
                        x: prefersReduced ? 0 : complexX,
                        scale: prefersReduced ? 1 : complexScale,
                      }}
                      className="inline-block origin-left"
                    >
                      complex systems
                    </motion.span>{' '}
                    <motion.span
                      custom={2}
                      variants={accentWordVariants}
                      style={{
                        x: prefersReduced ? 0 : simpleX,
                        y: prefersReduced ? 0 : simpleY,
                      }}
                      className="inline-block"
                    >
                      feel simple.
                    </motion.span>
                  </span>
                </motion.span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            inherit={false}
            style={{ opacity: prefersReduced ? 1 : actionsOpacity }}
          >
            <motion.div
              initial={prefersReduced ? 'visible' : 'hidden'}
              animate="visible"
              variants={itemVariants}
              className="mt-10 flex flex-col items-start gap-7 sm:mt-12 sm:flex-row sm:items-center sm:gap-9"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent focus-visible:bg-accent"
              >
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">View Work</span>
                <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted sm:gap-7">
                <a
                  href="https://github.com/DRGYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary focus-visible:text-primary"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/yazankhaled99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary focus-visible:text-primary"
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: prefersReduced ? 1 : cueOpacity }}
          className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-subtle sm:flex lg:right-16"
        >
          <motion.span
            animate={prefersReduced ? undefined : { scaleX: [0.45, 1, 0.45], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-px w-10 origin-right bg-current"
          />
          Scroll to browse
        </motion.div>
      </div>
    </section>
  );
}
