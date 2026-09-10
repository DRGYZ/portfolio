'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { normalizedX, normalizedY } = usePointerPosition(containerRef);

  // Subtle pointer response
  const tiltX = prefersReduced ? 0 : normalizedY * -5;
  const tiltY = prefersReduced ? 0 : normalizedX * 5;
  const pillOffsetX = prefersReduced ? 0 : normalizedX * 16;
  const pillOffsetY = prefersReduced ? 0 : normalizedY * 16;

  // Clean motion variants based on project motionStyle
  const getVariants = (style: Project['motionStyle']) => {
    if (prefersReduced) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      };
    }

    switch (style) {
      case 'clip-path':
        return {
          initial: { clipPath: 'inset(100% 0 0 0)', opacity: 0.8 },
          animate: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
          exit: { clipPath: 'inset(0 0 100% 0)', opacity: 0.6 },
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
        };
      case 'slide-up':
        return {
          initial: { y: 30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -30, opacity: 0 },
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        };
      case 'scale':
        return {
          initial: { scale: 0.92, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 1.05, opacity: 0 },
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        };
      case 'fade':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.35, ease: 'easeInOut' as const },
        };
    }
  };

  const variants = getVariants(project.motionStyle);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center p-2 lg:p-4"
      style={{
        perspective: 1200,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={project.id}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={variants.transition}
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-full shadow-2xl shadow-black/80 border border-white/10 overflow-hidden bg-[#121316] group"
        >
          {/* Visual Media Object */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.previewImage}
              alt={`${project.title} Preview`}
              fill
              priority
              unoptimized
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Vignette & Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50" />
          </div>

          {/* Floating "View Project" Pill */}
          <motion.div
            style={{
              x: pillOffsetX,
              y: pillOffsetY,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          >
            <a
              href={project.liveDemoUrl || project.caseStudyUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 bg-accent text-background px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-xl border border-white/20"
            >
              <span>View Project</span>
              <span className="text-sm font-normal">↗</span>
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
