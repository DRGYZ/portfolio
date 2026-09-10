'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { MonogramYK } from './MonogramYK';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { normalizedX, normalizedY } = usePointerPosition(containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll exit transitions
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.4, 0]);

  // Motion variants for initial load stagger
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto w-full overflow-hidden"
    >
      {/* Background Architectural Monogram */}
      <MonogramYK pointerX={normalizedX} pointerY={normalizedY} />

      {/* Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial={prefersReduced ? 'visible' : 'hidden'}
        animate="visible"
        style={{
          y: prefersReduced ? 0 : textY,
          opacity: textOpacity,
        }}
        className="relative z-10 my-auto py-8"
      >
        {/* Identity & Role */}
        <motion.div variants={itemVariants} className="mb-6 space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
            YAZAN KHALED
          </p>
          <p className="text-sm text-primary-muted">
            Front-end Developer &amp; Creative Technologist — Paris, France
          </p>
        </motion.div>

        {/* Expressive Headline (Grotesque + Italic Serif Contrast) */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-bold text-primary tracking-tight leading-[1.05] max-w-5xl"
        >
          I build polished{' '}
          <span className="font-editorial italic font-normal text-accent px-1">
            interfaces
          </span>{' '}
          and interactive products that make{' '}
          <span className="font-editorial italic font-normal text-accent px-1">
            complex systems
          </span>{' '}
          <span className="font-editorial italic font-normal text-accent px-1">
            feel simple.
          </span>
        </motion.h1>

        {/* Clean Actions & Socials Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3.5 font-mono text-xs uppercase tracking-widest font-medium transition-all hover:bg-accent hover:text-background"
          >
            <span>View Work</span>
            <span className="text-sm">↓</span>
          </a>

          <div className="flex items-center space-x-6 font-mono text-xs uppercase tracking-wider text-primary-muted">
            <a
              href="https://github.com/DRGYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={getAssetPath('/cv.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              CV ↗
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
