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

  const scrollY = useTransform(scrollProgress, [0, 1], [0, -150]);
  const scrollScale = useTransform(scrollProgress, [0, 0.72, 1], [1, 1.1, 1.24]);
  const scrollRotate = useTransform(scrollProgress, [0, 1], [-1.5, 3.5]);
  const scrollOpacity = useTransform(scrollProgress, [0, 0.72, 1], [0.82, 0.55, 0.08]);

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
        style={{
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
        <path
          d="M 160 80 L 380 80 L 520 360 L 660 80 L 880 80 L 630 520 L 630 720 L 410 720 L 410 520 Z"
          fill="currentColor"
          fillOpacity="0.085"
        />
        <path
          d="M 160 80 L 380 80 L 520 360 L 660 80 L 880 80 L 630 520 L 630 720 L 410 720 L 410 520 Z"
          stroke="currentColor"
          strokeOpacity="0.34"
          strokeWidth="1.7"
        />

        <g transform="translate(620, 0)">
          <path d="M 120 80 L 310 80 L 310 720 L 120 720 Z" fill="currentColor" fillOpacity="0.075" />
          <path d="M 120 80 L 310 80 L 310 720 L 120 720 Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.7" />
          <path d="M 280 430 L 520 80 L 730 80 L 420 480 Z" fill="currentColor" fillOpacity="0.075" />
          <path d="M 280 430 L 520 80 L 730 80 L 420 480 Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.7" />
          <path d="M 360 400 L 660 720 L 460 720 L 250 490 Z" fill="currentColor" fillOpacity="0.075" />
          <path d="M 360 400 L 660 720 L 460 720 L 250 490 Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.7" />
        </g>
      </motion.svg>
    </motion.div>
  );
}
