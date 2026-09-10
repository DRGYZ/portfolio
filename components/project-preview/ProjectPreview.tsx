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

const frameStyles: Record<
  Project['motionStyle'],
  { clipPath: string; rotate: number; backX: number; backY: number; backRotate: number }
> = {
  default: {
    clipPath: 'polygon(7% 0, 100% 0, 94% 100%, 0 94%)',
    rotate: 0,
    backX: -12,
    backY: 12,
    backRotate: -1,
  },
  clip: {
    clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 92%)',
    rotate: -0.65,
    backX: -18,
    backY: 15,
    backRotate: -1.6,
  },
  slide: {
    clipPath: 'polygon(0 6%, 94% 0, 100% 91%, 8% 100%)',
    rotate: 0.55,
    backX: 18,
    backY: -13,
    backRotate: 1.45,
  },
  scale: {
    clipPath: 'polygon(5% 0, 100% 4%, 96% 100%, 0 94%)',
    rotate: 0,
    backX: 0,
    backY: 14,
    backRotate: -0.7,
  },
  layers: {
    clipPath: 'polygon(5% 0, 100% 8%, 94% 100%, 0 92%)',
    rotate: -0.4,
    backX: -15,
    backY: -14,
    backRotate: -1.2,
  },
  parallax: {
    clipPath: 'polygon(9% 0, 100% 4%, 96% 94%, 0 100%)',
    rotate: 0.7,
    backX: 17,
    backY: 16,
    backRotate: 1.6,
  },
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
  const objectRotate = useSpring(useTransform(sourceX, [-1, 1], [-0.7, 0.7]), {
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
  const frame = frameStyles[project.motionStyle];

  return (
    <div
      className={`relative w-full ${compact ? 'aspect-[1.18/1]' : 'aspect-[1.32/1]'}`}
      style={{ perspective: 1200 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-[5%] bg-accent/[0.11]"
        animate={
          prefersReduced
            ? { x: 0, y: 0, rotate: 0 }
            : { x: frame.backX, y: frame.backY, rotate: frame.backRotate }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ clipPath: frame.clipPath }}
      />

      {project.id === '02' ? (
        <motion.span
          aria-hidden="true"
          className="absolute inset-[8%] border border-accent/25"
          initial={false}
          animate={prefersReduced ? { x: 0, y: 0 } : { x: 24, y: 23 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ clipPath: frame.clipPath }}
        />
      ) : null}

      <motion.div
        className="absolute inset-[2%] overflow-hidden bg-surface-low"
        animate={{ rotate: prefersReduced || compact ? 0 : frame.rotate }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ clipPath: frame.clipPath }}
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
                rotate: prefersReduced ? 0 : objectRotate,
                scale: prefersReduced ? 1 : project.id === '03' ? 1.07 : 1.045,
              }}
              className="absolute inset-[-3%]"
            >
              <Image
                src={getAssetPath(project.previewImage)}
                alt={`${project.title} placeholder artwork`}
                fill
                priority={project.id === '01'}
                unoptimized
                sizes={compact ? 'calc(100vw - 3rem)' : '(min-width: 1024px) 59vw, 100vw'}
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/25" />

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

      <span
        aria-hidden="true"
        className="absolute -bottom-2 right-[2%] h-16 w-16 border-b border-r border-accent/30 sm:h-24 sm:w-24"
      />
    </div>
  );
}
