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

  const pointerOffsetX = useTransform(pointerX, [-1, 1], [-20, 20]);
  const pointerOffsetY = useTransform(pointerY, [-1, 1], [-15, 15]);

  const smoothX = useSpring(pointerOffsetX, springConfig);
  const smoothY = useSpring(pointerOffsetY, springConfig);
  const outlineX = useSpring(useTransform(pointerX, [-1, 1], [-10, 10]), springConfig);
  const outlineY = useSpring(useTransform(pointerY, [-1, 1], [-7, 7]), springConfig);
  const baseX = useSpring(useTransform(pointerX, [-1, 1], [-3, 3]), springConfig);
  const baseY = useSpring(useTransform(pointerY, [-1, 1], [-2, 2]), springConfig);
  const accentX = useSpring(useTransform(pointerX, [-1, 1], [7, -7]), springConfig);
  const accentY = useSpring(useTransform(pointerY, [-1, 1], [-5, 5]), springConfig);
  const secondaryX = useSpring(useTransform(pointerX, [-1, 1], [-12, 12]), springConfig);
  const secondaryY = useSpring(useTransform(pointerY, [-1, 1], [8, -8]), springConfig);

  const scrollX = useTransform(scrollProgress, [0, 0.24, 0.7, 1], [0, 8, 116, 210]);
  const scrollY = useTransform(scrollProgress, [0, 0.24, 0.7, 1], [0, 12, 148, 270]);
  const scrollScale = useTransform(scrollProgress, [0, 0.24, 0.72, 1], [1, 1.03, 1.27, 1.52]);
  const scrollRotate = useTransform(scrollProgress, [0, 0.24, 1], [-1.5, -1, 4.5]);
  const scrollOpacity = useTransform(scrollProgress, [0, 0.28, 0.74, 1], [0.72, 0.66, 0.32, 0.08]);
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
      }}
      className="pointer-events-none absolute inset-[-5%_-42%_-5%_-34%] z-0 flex select-none items-center justify-center sm:inset-[-8%_-26%_-8%_-22%] lg:inset-[-14%_-16%_-14%_-12%]"
    >
      <motion.svg
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
          <clipPath id="yk-slice-secondary">
            <rect x="90" y="508" width="1280" height="116" />
          </clipPath>
        </defs>

        <motion.g
          initial={prefersReduced ? false : { x: -30, y: 16, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.78, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.g
            style={{ x: prefersReduced ? 0 : outlineX, y: prefersReduced ? 0 : outlineY }}
            transform="translate(-34 26)"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.11"
            strokeWidth="1.8"
          >
            <use href="#yk-y" />
            <use href="#yk-k-stem" />
            <use href="#yk-k-arm" />
            <use href="#yk-k-leg" />
          </motion.g>
        </motion.g>

        <motion.g
          initial={prefersReduced ? false : { x: 24, y: -10, opacity: 0, scale: 0.985 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.74, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.g
            style={{ x: prefersReduced ? 0 : baseX, y: prefersReduced ? 0 : baseY }}
            fill="currentColor"
            fillOpacity="0.065"
            stroke="currentColor"
            strokeOpacity="0.24"
            strokeWidth="1.5"
          >
            <use href="#yk-y" />
            <use href="#yk-k-stem" />
            <use href="#yk-k-arm" />
            <use href="#yk-k-leg" />
          </motion.g>
        </motion.g>

        <motion.g
          clipPath="url(#yk-slice)"
          initial={prefersReduced ? false : { x: -42, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.72, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.g
            style={{ x: prefersReduced ? 0 : bandX }}
          >
            <motion.g
              style={{ x: prefersReduced ? 0 : accentX, y: prefersReduced ? 0 : accentY }}
              transform="translate(26 -12)"
              fill="currentColor"
              fillOpacity="0.11"
            >
              <use href="#yk-y" />
              <use href="#yk-k-stem" />
              <use href="#yk-k-arm" />
              <use href="#yk-k-leg" />
            </motion.g>
          </motion.g>
        </motion.g>

        <motion.g
          clipPath="url(#yk-slice-secondary)"
          initial={prefersReduced ? false : { x: 48, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.76, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.g
            style={{ x: prefersReduced ? 0 : secondaryX, y: prefersReduced ? 0 : secondaryY }}
            transform="translate(-22 14)"
            fill="currentColor"
            fillOpacity="0.035"
          >
            <use href="#yk-y" />
            <use href="#yk-k-stem" />
            <use href="#yk-k-arm" />
            <use href="#yk-k-leg" />
          </motion.g>
        </motion.g>

        <path d="M250 692 1184 108" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" />
      </motion.svg>

      <motion.span
        initial={prefersReduced ? false : { y: 18 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: prefersReduced ? 0.5 : scrollOpacity }}
        className="absolute right-[23%] top-[22%] hidden origin-center rotate-180 font-mono text-[9px] uppercase tracking-[0.38em] text-accent/70 [writing-mode:vertical-rl] sm:block lg:right-[18%]"
      >
        Yazan Khaled / YK
      </motion.span>
    </motion.div>
  );
}
