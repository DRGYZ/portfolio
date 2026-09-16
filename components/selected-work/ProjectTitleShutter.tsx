'use client';

import { motion } from 'framer-motion';

interface ProjectTitleShutterProps {
  title: string;
  isActive: boolean;
  accent?: string;
  prefersReduced?: boolean;
}

export function ProjectTitleShutter({
  title,
  isActive,
  accent = '#b9c3ff',
  prefersReduced = false,
}: ProjectTitleShutterProps) {
  if (prefersReduced) {
    return (
      <span
        data-title-shutter="true"
        className="relative inline-block font-display text-[clamp(2.15rem,5vw,5.4rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em]"
      >
        <span
          className={
            isActive
              ? 'font-editorial font-normal italic tracking-[-0.035em] text-accent'
              : 'text-primary'
          }
        >
          {title}
        </span>
      </span>
    );
  }

  // Production: Diagonal architectural mask with brief accent flash and synchronous optical wipe (<300ms)
  return (
    <span
      data-title-shutter="true"
      className="relative inline-grid grid-cols-1 grid-rows-1 items-baseline font-display text-[clamp(2.15rem,5vw,5.4rem)] uppercase leading-[0.88] tracking-[-0.055em]"
    >
      <span className="sr-only">{title}</span>

      {/* Layer 1: Base Space Grotesk - wipes out along diagonal */}
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{
          clipPath: isActive
            ? 'polygon(120% 0%, 120% 0%, 100% 100%, 100% 100%)'
            : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: isActive ? 0 : 1,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="col-start-1 row-start-1 font-bold text-primary"
      >
        {title}
      </motion.span>

      {/* Layer 2: Brief project accent transition flash (<300ms) */}
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{
          clipPath: isActive
            ? 'polygon(0% 0%, 125% 0%, 105% 100%, 0% 100%)'
            : 'polygon(0% 0%, 0% 0%, -20% 100%, 0% 100%)',
          opacity: isActive ? [0, 1, 0] : 0,
        }}
        transition={{
          clipPath: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.28, times: [0, 0.35, 1] },
        }}
        style={{ color: accent }}
        className="col-start-1 row-start-1 font-editorial font-normal italic tracking-[-0.035em]"
      >
        {title}
      </motion.span>

      {/* Layer 3: Final Newsreader title layer */}
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{
          clipPath: isActive
            ? 'polygon(0% 0%, 125% 0%, 105% 100%, 0% 100%)'
            : 'polygon(0% 0%, 0% 0%, -20% 100%, 0% 100%)',
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="col-start-1 row-start-1 font-editorial font-normal italic tracking-[-0.035em] text-accent"
      >
        {title}
      </motion.span>
    </span>
  );
}
