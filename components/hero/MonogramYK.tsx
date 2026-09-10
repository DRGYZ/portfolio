'use client';

import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MonogramYKProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}

export function MonogramYK({
  pointerX,
  pointerY,
  scrollProgress,
}: MonogramYKProps) {
  const prefersReduced = useReducedMotion();
  const springConfig = { stiffness: 62, damping: 24, mass: 0.75 };

  const pointerOffsetX = useTransform(pointerX, [-1, 1], [-38, 38]);
  const pointerOffsetY = useTransform(pointerY, [-1, 1], [-28, 28]);
  const pointerRotateX = useTransform(pointerY, [-1, 1], [2.4, -2.4]);
  const pointerRotateY = useTransform(pointerX, [-1, 1], [-2.8, 2.8]);

  const smoothX = useSpring(pointerOffsetX, springConfig);
  const smoothY = useSpring(pointerOffsetY, springConfig);
  const smoothRotateX = useSpring(pointerRotateX, springConfig);
  const smoothRotateY = useSpring(pointerRotateY, springConfig);

  const scrollX = useTransform(scrollProgress, [0, 0.24, 0.7, 1], [0, 8, 116, 210]);
  const scrollY = useTransform(scrollProgress, [0, 0.24, 0.7, 1], [0, 12, 148, 270]);
  const scrollScale = useTransform(scrollProgress, [0, 0.24, 0.72, 1], [1, 1.03, 1.27, 1.52]);
  const scrollRotate = useTransform(scrollProgress, [0, 0.24, 1], [-1.5, -1, 4.5]);
  const scrollOpacity = useTransform(scrollProgress, [0, 0.28, 0.74, 1], [0.82, 0.76, 0.38, 0.12]);
  const bandX = useTransform(scrollProgress, [0, 1], [0, 34]);

  return (
    <motion.div
      aria-hidden="true"
      initial={prefersReduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        x: prefersReduced ? 0 : smoothX,
        y: prefersReduced ? 0 : smoothY,
        rotateX: prefersReduced ? 0 : smoothRotateX,
        rotateY: prefersReduced ? 0 : smoothRotateY,
        transformPerspective: 1200,
      }}
      className="pointer-events-none absolute inset-[-5%_-42%_-5%_-34%] z-0 flex select-none items-center justify-center sm:inset-[-8%_-26%_-8%_-22%] lg:inset-[-14%_-16%_-14%_-12%]"
    >
      <motion.svg
        initial={prefersReduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.05, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: prefersReduced ? 0 : scrollX,
          y: prefersReduced ? 0 : scrollY,
          scale: prefersReduced ? 1 : scrollScale,
          rotate: prefersReduced ? 0 : scrollRotate,
          opacity: prefersReduced ? 0.66 : scrollOpacity,
        }}
        className="h-auto w-full min-w-[760px] text-accent sm:min-w-[1050px]"
        viewBox="0 0 1400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="yk-y" d="M160 80h220l140 280L660 80h220L630 520v200H410V520Z" />
          <path id="yk-k-stem" d="M740 80h190v640H740Z" />
          <path id="yk-k-arm" d="M900 430 1140 80h210l-310 400Z" />
          <path id="yk-k-leg" d="m980 400 300 320h-200L870 490Z" />
          <clipPath id="yk-slice">
            <rect x="90" y="278" width="1280" height="206" />
          </clipPath>
        </defs>

        <g transform="translate(-34 26)" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="2.2">
          <use href="#yk-y" />
          <use href="#yk-k-stem" />
          <use href="#yk-k-arm" />
          <use href="#yk-k-leg" />
        </g>

        <g fill="currentColor" fillOpacity="0.078" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1.7">
          <use href="#yk-y" />
          <use href="#yk-k-stem" />
          <use href="#yk-k-arm" />
          <use href="#yk-k-leg" />
        </g>

        <motion.g
          clipPath="url(#yk-slice)"
          style={{ x: prefersReduced ? 0 : bandX }}
          transform="translate(26 -12)"
          fill="currentColor"
          fillOpacity="0.105"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        >
          <use href="#yk-y" />
          <use href="#yk-k-stem" />
          <use href="#yk-k-arm" />
          <use href="#yk-k-leg" />
        </motion.g>

        <path d="M116 278h1168M116 484h1168" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      </motion.svg>

      <motion.span
        style={{ opacity: prefersReduced ? 0.5 : scrollOpacity }}
        className="absolute right-[23%] top-[22%] hidden origin-center rotate-180 font-mono text-[9px] uppercase tracking-[0.38em] text-accent/70 [writing-mode:vertical-rl] sm:block lg:right-[18%]"
      >
        Yazan Khaled / YK
      </motion.span>
    </motion.div>
  );
}
