'use client';

import { motion, AnimatePresence, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

const frameClips: Record<string, string> = {
  '01': 'polygon(0 0, 92% 0, 100% 13%, 100% 100%, 8% 100%, 0 87%)',
  '02': 'polygon(7% 0, 100% 0, 100% 87%, 93% 100%, 0 100%, 0 13%)',
  '03': 'polygon(0 0, 100% 0, 100% 100%, 9% 100%, 0 84%)',
  '04': 'polygon(0 0, 94% 0, 100% 10%, 100% 100%, 0 100%, 0 14%)',
  '05': 'polygon(6% 0, 100% 0, 100% 88%, 94% 100%, 0 100%, 0 12%)',
};

const compactFrameClips: Record<string, string> = {
  '01': 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 7% 100%, 0 92%)',
  '02': 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 9%)',
  '03': 'polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 88%)',
  '04': 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%, 0 12%)',
  '05': 'polygon(6% 0, 100% 0, 100% 90%, 94% 100%, 0 100%, 0 10%)',
};

const sliceClips: Record<string, string> = {
  '01': 'polygon(0 60%, 100% 21%, 100% 38%, 0 77%)',
  '02': 'polygon(0 31%, 100% 31%, 100% 49%, 0 49%)',
  '03': 'polygon(0 69%, 100% 30%, 100% 45%, 0 84%)',
  '04': 'polygon(0 58%, 100% 20%, 100% 37%, 0 75%)',
  '05': 'polygon(0 42%, 100% 18%, 100% 35%, 0 59%)',
};

const seamPaths: Record<string, string> = {
  '01': 'M0 78 L38 66 M52 61 L100 46',
  '02': 'M0 39 H37 M51 39 H100',
  '03': 'M0 84 L34 73 M49 68 L100 52',
  '04': 'M0 86 L36 75 M51 70 L100 54',
  '05': 'M0 60 L42 44 M56 39 L100 24',
};

const compactObjectPositions: Record<string, string> = {
  '01': '18% center',
  '02': '55% center',
  '03': '37% center',
  '04': '58% center',
  '05': '32% center',
};

const backingOffsets: Record<Project['id'], { x: number; y: number }> = {
  '01': { x: -10, y: 12 },
  '02': { x: 12, y: -8 },
  '03': { x: -8, y: -10 },
  '04': { x: 10, y: 10 },
  '05': { x: -11, y: 9 },
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
  const sliceX = useSpring(
    useTransform(sourceX, [-1, 1], project.id === '02' ? [8, -8] : [-7, 7]),
    { stiffness: 82, damping: 26 }
  );
  const sliceY = useSpring(
    useTransform(sourceY, [-1, 1], project.id === '03' ? [5, -5] : [-3, 3]),
    { stiffness: 82, damping: 26 }
  );
  const projectUrl = getProjectUrl(project);
  const frameClip = (compact ? compactFrameClips : frameClips)[project.id] ?? frameClips['01'];
  const objectPosition = compact ? compactObjectPositions[project.id] ?? 'center' : 'center';

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
      case '05':
        return {
          initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            x: 24 * direction,
            opacity: 0.6,
          },
          animate: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            x: 0,
            opacity: 1,
          },
          exit: {
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            x: -16 * direction,
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
  const backing = backingOffsets[project.id] ?? backingOffsets['01'];

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
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ clipPath: frameClip }}
      />

      <motion.div
        className="absolute inset-[1%] overflow-hidden bg-surface-low"
        style={{ clipPath: frameClip }}
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
              <img
                src={getAssetPath(project.previewImage)}
                alt={`${project.title} editorial artwork`}
                width="1200"
                height="820"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ objectPosition }}
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              style={{
                x: prefersReduced ? 0 : sliceX,
                y: prefersReduced ? 0 : sliceY,
                clipPath: sliceClips[project.id] ?? sliceClips['01'],
              }}
              className="absolute inset-[-3%] z-[2]"
            >
              <img
                src={getAssetPath(project.previewImage)}
                alt=""
                width="1200"
                height="820"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ objectPosition }}
              />
              <div className="absolute inset-0 bg-accent/[0.06]" />
            </motion.div>

            <div className="absolute inset-0 z-[3] bg-background/[0.035]" />

            <motion.svg
              key={`poster-seam-${project.id}`}
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-[4] h-full w-full"
            >
              <motion.path
                d={seamPaths[project.id] ?? seamPaths['01']}
                initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.74 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.58, delay: prefersReduced ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.28"
                vectorEffect="non-scaling-stroke"
                className="text-accent"
              />
            </motion.svg>

            {project.id === '04' ? (
              <motion.span
                aria-hidden="true"
                initial={prefersReduced ? false : { scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.42 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 top-1/2 z-[5] h-px origin-center bg-accent"
              />
            ) : null}

            <div className="absolute bottom-[7%] left-[8%] right-[7%] z-[6] flex flex-wrap items-end justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/75 sm:text-[10px]">
              <span>{project.id} / {project.title}</span>
              {projectUrl ? (
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {project.gitHubUrl && (
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto border border-white/20 bg-[#121318]/90 px-3 py-2 text-primary transition-colors hover:border-accent hover:text-accent focus-visible:border-accent"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto bg-accent px-4 py-2 font-semibold text-background transition-colors hover:bg-primary focus-visible:bg-primary"
                    >
                      Live demo ↗
                    </a>
                  ) : (
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto bg-accent px-4 py-2 font-semibold text-background transition-colors hover:bg-primary focus-visible:bg-primary"
                    >
                      View project ↗
                    </a>
                  )}
                </div>
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
