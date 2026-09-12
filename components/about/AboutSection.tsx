'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 84%', 'start 34%'],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], [-28, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.28, 1], [0, 0.42, 1]);
  const copyY = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.22, 1], [0, 0.34, 1]);
  const copyClip = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(0 0 32% 0)', 'inset(0 0 0% 0)']
  );
  const listRuleScale = useTransform(scrollYProgress, [0.35, 1], [0, 1]);
  const seamRotate = useTransform(scrollYProgress, [0, 1], [-3.4, 0]);
  const seamX = useTransform(scrollYProgress, [0, 1], [-22, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="relative mx-auto grid w-full max-w-[1600px] gap-10 px-6 py-24 lg:grid-cols-12 lg:px-16 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-6 right-6 top-8 flex items-center gap-[7%] lg:left-16 lg:right-16 lg:top-10">
        <motion.span
          style={{
            x: prefersReduced ? 0 : seamX,
            rotate: prefersReduced ? 0 : seamRotate,
            scaleX: prefersReduced ? 1 : listRuleScale,
          }}
          className="h-px w-[34%] origin-left bg-accent/30"
        />
        <motion.span
          style={{ scaleX: prefersReduced ? 1 : listRuleScale }}
          className="h-px flex-1 origin-left bg-white/[0.1]"
        />
      </div>

      <motion.div
        style={{
          x: prefersReduced ? 0 : titleX,
          opacity: prefersReduced ? 1 : titleOpacity,
        }}
        className="lg:col-span-3"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 / About</p>
        <h2 id="about-title" className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl">
          A little context
        </h2>
      </motion.div>

      <motion.div
        style={{
          y: prefersReduced ? 0 : copyY,
          opacity: prefersReduced ? 1 : copyOpacity,
          clipPath: prefersReduced ? 'none' : copyClip,
        }}
        className="max-w-4xl lg:col-span-8 lg:col-start-5"
      >
        <p className="font-display text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-primary sm:text-4xl lg:text-5xl">
          I&apos;m Yazan, a front-end developer and creative technologist based in Paris.
          I care about the point where clear systems, careful typography, and useful
          interaction meet.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-muted sm:text-lg">
          Most of my professional work has been front-end development for internal
          tools, dashboards, and data-heavy interfaces. Personal projects are where
          I push things further, playing with interaction, motion, and ideas that
          don&apos;t always fit inside normal product work.
        </p>
      </motion.div>

      <div className="relative col-span-full mt-8 lg:mt-14">
        <motion.span
          aria-hidden="true"
          style={{ scaleX: prefersReduced ? 1 : listRuleScale }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-white/[0.14]"
        />
        <motion.ul
          aria-label="Design priorities"
          className="grid border-b border-white/[0.08] sm:grid-cols-3"
        >
          {[
            ['01', 'Clear systems'],
            ['02', 'Careful typography'],
            ['03', 'Useful interaction'],
          ].map(([number, label], index) => (
            <motion.li
              key={number}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.46,
                delay: prefersReduced ? 0 : index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex items-baseline gap-5 py-6 sm:px-6 lg:py-8 ${
                index > 0 ? 'border-t border-white/[0.08] sm:border-l sm:border-t-0' : ''
              }`}
            >
              <span className="font-mono text-[9px] tracking-[0.16em] text-accent">{number}</span>
              <span className="font-editorial text-2xl italic tracking-[-0.025em] text-primary sm:text-xl lg:text-3xl">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
