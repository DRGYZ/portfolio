'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { getAssetPath } from '@/lib/assetPath';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ContactSection() {
  const email = 'contact@yazankhaled.com';
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(ctaRef, prefersReduced);
  const magneticX = useSpring(useTransform(pointer.normalizedX, [-1, 1], [-6, 6]), {
    stiffness: 150,
    damping: 22,
  });
  const magneticY = useSpring(useTransform(pointer.normalizedY, [-1, 1], [-3, 3]), {
    stiffness: 150,
    damping: 22,
  });
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'start 42%'],
  });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22, 1], [0, 0.38, 1]);
  const firstLineY = useTransform(scrollYProgress, [0, 0.78], [56, 0]);
  const secondLineY = useTransform(scrollYProgress, [0.12, 1], [72, 0]);
  const ctaRevealY = useTransform(scrollYProgress, [0.26, 1], [34, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.26, 0.62, 1], [0, 0.52, 1]);

  return (
    <footer
      id="contact"
      ref={footerRef}
      aria-labelledby="contact-title"
      className="relative mx-auto w-full max-w-[1600px] px-6 pb-12 pt-28 lg:px-16 lg:pt-44"
    >
      <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 / Contact</p>

      <motion.h2
        id="contact-title"
        style={{ opacity: prefersReduced ? 1 : titleOpacity }}
        className="max-w-[1300px] font-display text-[clamp(2.8rem,8vw,8.7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-primary"
      >
        <span className="block overflow-clip pb-[0.08em]">
          <motion.span style={{ y: prefersReduced ? 0 : firstLineY }} className="block">
            Have something
          </motion.span>
        </span>{' '}
        <span className="block overflow-clip pb-[0.1em]">
          <motion.span style={{ y: prefersReduced ? 0 : secondLineY }} className="block">
            interesting in mind?
          </motion.span>
        </span>
      </motion.h2>

      <motion.div
        style={{
          y: prefersReduced ? 0 : ctaRevealY,
          opacity: prefersReduced ? 1 : ctaOpacity,
        }}
      >
        <motion.a
          ref={ctaRef}
          href={`mailto:${email}`}
          style={{ x: prefersReduced ? 0 : magneticX, y: prefersReduced ? 0 : magneticY }}
          className="group relative mt-8 inline-flex items-baseline gap-3 font-editorial text-[clamp(2.5rem,6vw,6.5rem)] italic leading-none tracking-[-0.045em] text-accent transition-colors hover:text-primary sm:mt-12"
        >
          <span className="inline-flex gap-[0.18em]">
            <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">Let&apos;s</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">talk</span>
          </span>
          <span aria-hidden="true" className="font-sans text-[0.55em] not-italic transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-6">↗</span>
          <span aria-hidden="true" className="absolute -bottom-3 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        </motion.a>
      </motion.div>

      <div className="mt-28 flex flex-col gap-7 border-t border-white/[0.08] pt-7 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-muted sm:flex-row sm:items-center sm:justify-between lg:mt-40">
        <div className="flex flex-wrap gap-7">
          <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">LinkedIn ↗</a>
          <a href={getAssetPath('/cv.pdf')} target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">CV ↗</a>
        </div>
        <div className="flex gap-4 text-primary-subtle">
          <span>Yazan Khaled — Paris, France</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
