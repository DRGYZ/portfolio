'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ContactSection() {
  const email = 'contact@yazankhaled.com';
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(ctaRef, prefersReduced);
  const footerPointer = usePointerPosition(footerRef, prefersReduced);
  const magneticX = useSpring(useTransform(pointer.normalizedX, [-1, 1], [-10, 10]), {
    stiffness: 150,
    damping: 22,
  });
  const magneticY = useSpring(useTransform(pointer.normalizedY, [-1, 1], [-5, 5]), {
    stiffness: 150,
    damping: 22,
  });
  const magneticRotate = useSpring(useTransform(pointer.normalizedX, [-1, 1], [-1.1, 1.1]), {
    stiffness: 150,
    damping: 24,
  });
  const threadX = useSpring(useTransform(footerPointer.normalizedX, [-1, 1], [-18, 18]), {
    stiffness: 68,
    damping: 25,
  });
  const threadY = useSpring(useTransform(footerPointer.normalizedY, [-1, 1], [-8, 8]), {
    stiffness: 68,
    damping: 25,
  });
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'start 42%'],
  });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22, 1], [0, 0.38, 1]);
  const firstLineY = useTransform(scrollYProgress, [0, 0.78], [56, 0]);
  const firstLineX = useTransform(scrollYProgress, [0, 0.78], [-24, 0]);
  const secondLineY = useTransform(scrollYProgress, [0.12, 1], [72, 0]);
  const secondLineX = useTransform(scrollYProgress, [0.12, 1], [30, 0]);
  const ctaRevealY = useTransform(scrollYProgress, [0.26, 1], [34, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.26, 0.62, 1], [0, 0.52, 1]);
  const threadScale = useTransform(scrollYProgress, [0.08, 0.82], [0, 1]);

  return (
    <footer
      id="contact"
      ref={footerRef}
      aria-labelledby="contact-title"
      className="relative isolate mx-auto w-full max-w-[1600px] overflow-clip px-6 pb-12 pt-28 lg:px-16 lg:pt-44"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: prefersReduced ? 0 : threadX, y: prefersReduced ? 0 : threadY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-[14vw] top-[53%] w-[132vw] -rotate-[14deg]">
          <span className="relative block h-px w-full">
            <motion.span
              style={{ scaleX: prefersReduced ? 1 : threadScale }}
              className="absolute left-0 top-0 h-px w-[42%] origin-left bg-accent/20"
            />
            <motion.span
              style={{ scaleX: prefersReduced ? 1 : threadScale }}
              className="absolute right-0 top-0 h-px w-[49%] origin-left bg-accent/20"
            />
          </span>
          {!prefersReduced ? (
            <motion.span
              animate={{ x: ['50vw', '132vw'] }}
              transition={{ duration: 8.5, delay: 1.1, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 top-0 h-px w-24 bg-accent/70"
            />
          ) : null}
        </div>
      </motion.div>

      <p className="relative z-10 mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">04 / Contact</p>

      <motion.h2
        id="contact-title"
        style={{ opacity: prefersReduced ? 1 : titleOpacity }}
        className="relative z-10 max-w-[1300px] font-display text-[clamp(2.8rem,8vw,8.7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-primary"
      >
        <span className="block overflow-clip pb-[0.08em]">
          <motion.span
            style={{ x: prefersReduced ? 0 : firstLineX, y: prefersReduced ? 0 : firstLineY }}
            className="block"
          >
            Have something
          </motion.span>
        </span>{' '}
        <span className="block overflow-clip pb-[0.1em]">
          <motion.span
            style={{ x: prefersReduced ? 0 : secondLineX, y: prefersReduced ? 0 : secondLineY }}
            className="block"
          >
            interesting in mind?
          </motion.span>
        </span>
      </motion.h2>

      <motion.div
        style={{
          y: prefersReduced ? 0 : ctaRevealY,
          opacity: prefersReduced ? 1 : ctaOpacity,
        }}
        className="relative z-10"
      >
        <motion.a
          ref={ctaRef}
          href={`mailto:${email}`}
          style={{
            x: prefersReduced ? 0 : magneticX,
            y: prefersReduced ? 0 : magneticY,
            rotate: prefersReduced ? 0 : magneticRotate,
          }}
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

      <div className="relative z-10 mt-28 flex flex-col gap-7 border-t border-white/[0.08] pt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted sm:flex-row sm:items-center sm:justify-between lg:mt-40">
        <div className="flex flex-wrap gap-7">
          <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/yazankhaled99/" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">LinkedIn ↗</a>
        </div>
        <div className="flex gap-4 text-primary-muted">
          <span>Yazan Khaled — Paris, France</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
