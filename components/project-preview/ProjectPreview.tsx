'use client';

import { motion, AnimatePresence, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { getProjectUrl, Project } from '@/types/project';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

interface ProjectPreviewProps {
  project: Project;
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  compact?: boolean;
}

export function ProjectPreview({
  project,
  pointerX,
  pointerY,
  compact = false,
}: ProjectPreviewProps) {
  const prefersReduced = useReducedMotion();
  const idleX = useMotionValue(0);
  const idleY = useMotionValue(0);
  const sourceX = pointerX ?? idleX;
  const sourceY = pointerY ?? idleY;
  const imageX = useSpring(useTransform(sourceX, [-1, 1], [-13, 13]), {
    stiffness: 70,
    damping: 24,
  });
  const imageY = useSpring(useTransform(sourceY, [-1, 1], [-10, 10]), {
    stiffness: 70,
    damping: 24,
  });
  const objectRotate = useSpring(useTransform(sourceX, [-1, 1], [-0.7, 0.7]), {
    stiffness: 70,
    damping: 24,
  });
  const projectUrl = getProjectUrl(project);

  const getVariants = (style: Project['motionStyle']) => {
    if (prefersReduced) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }

    switch (style) {
      case 'clip':
        return {
          initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0.7 },
          animate: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
          exit: { clipPath: 'inset(0 0 0 100%)', opacity: 0.3 },
        };
      case 'slide':
        return {
          initial: { x: 46, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -30, opacity: 0 },
        };
      case 'scale':
        return {
          initial: { scale: 0.94, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 1.03, opacity: 0 },
        };
      case 'layers':
        return {
          initial: { x: -28, y: 20, opacity: 0 },
          animate: { x: 0, y: 0, opacity: 1 },
          exit: { x: 24, y: -14, opacity: 0 },
        };
      case 'parallax':
        return {
          initial: { y: 34, scale: 1.03, opacity: 0 },
          animate: { y: 0, scale: 1, opacity: 1 },
          exit: { y: -24, scale: 0.98, opacity: 0 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const variants = getVariants(project.motionStyle);

  return (
    <div
      className={`relative w-full ${compact ? 'aspect-[1.18/1]' : 'aspect-[1.32/1]'}`}
      style={{ perspective: 1200 }}
    >
      <div
        className="absolute inset-0 overflow-hidden bg-surface-low"
        style={{ clipPath: 'polygon(7% 0, 100% 0, 94% 100%, 0 94%)' }}
      >
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={project.id}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: prefersReduced ? 0.01 : 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              style={{
                x: prefersReduced ? 0 : imageX,
                y: prefersReduced ? 0 : imageY,
                rotate: prefersReduced ? 0 : objectRotate,
                scale: prefersReduced ? 1 : 1.045,
              }}
              className="absolute inset-[-3%]"
            >
              <Image
                src={getAssetPath(project.previewImage)}
                alt={`${project.title} placeholder artwork`}
                fill
                priority={!compact && project.id === '01'}
                unoptimized
                sizes={compact ? 'calc(100vw - 3rem)' : '(min-width: 1024px) 59vw, 100vw'}
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/25" />

            <div className="absolute bottom-[7%] left-[8%] right-[7%] flex items-end justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/75 sm:text-[10px]">
              <span>{project.id} / {project.title}</span>
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-accent px-4 py-2.5 font-semibold text-background transition-colors hover:bg-primary focus-visible:bg-primary"
                >
                  View project ↗
                </a>
              ) : (
                <span className="text-primary/55">Project preview</span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <span
        aria-hidden="true"
        className="absolute -bottom-2 right-[2%] h-16 w-16 border-b border-r border-accent/30 sm:h-24 sm:w-24"
      />
    </div>
  );
}
