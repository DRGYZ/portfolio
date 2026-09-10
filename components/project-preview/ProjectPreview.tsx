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
  direction?: number;
}

const sharedFrameClip = 'polygon(0 0, 100% 0, 100% 88%, 94% 100%, 0 100%)';

const backingOffsets: Record<Project['id'], { x: number; y: number }> = {
  '01': { x: -10, y: 12 },
  '02': { x: 12, y: -8 },
  '03': { x: -8, y: -10 },
  '04': { x: 10, y: 10 },
};

export function ProjectPreview({
  project,
  pointerX,
  pointerY,
  compact = false,
  direction = 1,
}: ProjectPreviewProps) {
  const prefersReduced = useReducedMotion();
  const idleX = useMotionValue(0);
  const idleY = useMotionValue(0);
  const sourceX = pointerX ?? idleX;
  const sourceY = pointerY ?? idleY;
  const imageTravelX = project.id === '03' ? 18 : 13;
  const imageTravelY = project.id === '03' ? 15 : 10;
  const imageX = useSpring(useTransform(sourceX, [-1, 1], [-imageTravelX, imageTravelX]), {
    stiffness: 70,
    damping: 24,
  });
  const imageY = useSpring(useTransform(sourceY, [-1, 1], [-imageTravelY, imageTravelY]), {
    stiffness: 70,
    damping: 24,
  });
  const projectUrl = getProjectUrl(project);

  const getVariants = (projectId: Project['id']) => {
    if (prefersReduced) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }

    switch (projectId) {
      case '01':
        return {
          initial: {
            clipPath: direction > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
            y: 16 * direction,
            opacity: 0.7,
          },
          animate: { clipPath: 'inset(0 0 0 0)', y: 0, opacity: 1 },
          exit: {
            clipPath: direction > 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
            y: -10 * direction,
            opacity: 0.3,
          },
        };
      case '02':
        return {
          initial: { x: 76 * direction, rotate: 0.8 * direction, opacity: 0 },
          animate: { x: 0, rotate: 0, opacity: 1 },
          exit: { x: -48 * direction, rotate: -0.45 * direction, opacity: 0 },
        };
      case '03':
        return {
          initial: { y: 18, scale: 0.9, opacity: 0.25 },
          animate: { y: 0, scale: 1, opacity: 1 },
          exit: { y: -10, scale: 1.055, opacity: 0 },
        };
      case '04':
        return {
          initial: {
            clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 50%, 0 50%)',
            scale: 1.025,
            opacity: 0.55,
          },
          animate: {
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)',
            scale: 1,
            opacity: 1,
          },
          exit: {
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 100%, 0 100%)',
            scale: 0.985,
            opacity: 0.2,
          },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const variants = getVariants(project.id);
  const backing = backingOffsets[project.id];

  return (
    <div className={`relative w-full ${compact ? 'aspect-[1.18/1]' : 'aspect-[1.48/1]'}`}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-[4%] border border-accent/25"
        animate={
          prefersReduced
            ? { x: 0, y: 0 }
            : { x: backing.x, y: backing.y }
        }
        transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
        style={{ clipPath: sharedFrameClip }}
      />

      <motion.div
        className="absolute inset-[1%] overflow-hidden bg-surface-low"
        style={{ clipPath: sharedFrameClip }}
      >
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={project.id}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: prefersReduced ? 0.01 : 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {project.id === '02' ? (
              <motion.span
                aria-hidden="true"
                initial={prefersReduced ? false : { x: `${72 * direction}%`, opacity: 0.5 }}
                animate={{ x: '0%', opacity: 0 }}
                exit={{ x: `${-55 * direction}%`, opacity: 0 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-10 bg-accent/25"
              />
            ) : null}

            <motion.div
              style={{
                x: prefersReduced ? 0 : imageX,
                y: prefersReduced ? 0 : imageY,
                scale: prefersReduced ? 1 : project.id === '03' ? 1.055 : 1.025,
              }}
              className="absolute inset-[-3%]"
            >
              <Image
                src={getAssetPath(project.previewImage)}
                alt={`${project.title} placeholder artwork`}
                fill
                priority={project.id === '01'}
                unoptimized
                sizes={compact ? 'calc(100vw - 3rem)' : '(min-width: 1024px) 55vw, 100vw'}
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-background/[0.06]" />

            {project.id === '04' ? (
              <motion.span
                aria-hidden="true"
                initial={prefersReduced ? false : { scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.42 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 top-1/2 h-px origin-center bg-accent"
              />
            ) : null}

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
      </motion.div>
    </div>
  );
}
