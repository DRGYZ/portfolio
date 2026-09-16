'use client';

import Link from 'next/link';
import { motion, AnimatePresence, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { getProjectUrl, Project } from '@/types/project';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

interface ProjectPreviewProps {
  project: Project;
  displayNumber?: string;
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  compact?: boolean;
  direction?: number;
}

const defaultFrameClip = 'polygon(6% 0, 100% 0, 100% 88%, 94% 100%, 0 100%, 0 12%)';
const defaultCompactFrameClip = 'polygon(6% 0, 100% 0, 100% 90%, 94% 100%, 0 100%, 0 10%)';
const defaultSliceClip = 'polygon(0 58%, 100% 37%, 100% 53%, 0 75%)';
const defaultSeamPath = 'M0 73 L35 60 M49 56 L100 36';
const defaultBackingOffset = { x: -11, y: 9 };

const frameClips: Record<string, string> = {
  '05': 'polygon(6% 0, 100% 0, 100% 88%, 94% 100%, 0 100%, 0 12%)',
  '06': 'polygon(6% 0, 100% 0, 100% 88%, 94% 100%, 0 100%, 0 12%)',
  '07': 'polygon(0 0, 94% 0, 100% 10%, 100% 100%, 7% 100%, 0 87%)',
};

const compactFrameClips: Record<string, string> = {
  '05': 'polygon(6% 0, 100% 0, 100% 90%, 94% 100%, 0 100%, 0 10%)',
  '06': 'polygon(6% 0, 100% 0, 100% 90%, 94% 100%, 0 100%, 0 10%)',
  '07': 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 7% 100%, 0 92%)',
};

const sliceClips: Record<string, string> = {
  '05': 'polygon(0 58%, 100% 37%, 100% 53%, 0 75%)',
  '06': 'polygon(0 42%, 100% 28%, 100% 45%, 0 60%)',
  '07': 'polygon(0 62%, 100% 32%, 100% 48%, 0 78%)',
};

const seamPaths: Record<string, string> = {
  '05': 'M0 73 L35 60 M49 56 L100 36',
  '06': 'M0 58 L38 48 M52 44 L100 28',
  '07': 'M0 76 L34 62 M48 57 L100 40',
};

const compactObjectPositions: Record<string, string> = {
  '05': '32% center',
  '06': '36% center',
  '07': '38% center',
};

const backingOffsets: Record<string, { x: number; y: number }> = {
  '05': { x: -11, y: 9 },
  '06': { x: 10, y: -8 },
  '07': { x: -9, y: 11 },
};

export function ProjectPreview({
  project,
  displayNumber,
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
  const imageTravelX = 14;
  const imageTravelY = 10;
  const imageX = useSpring(useTransform(sourceX, [-1, 1], [-imageTravelX, imageTravelX]), {
    stiffness: 70,
    damping: 24,
  });
  const imageY = useSpring(useTransform(sourceY, [-1, 1], [-imageTravelY, imageTravelY]), {
    stiffness: 70,
    damping: 24,
  });
  const sliceX = useSpring(
    useTransform(sourceX, [-1, 1], [-7, 7]),
    { stiffness: 82, damping: 26 }
  );
  const sliceY = useSpring(
    useTransform(sourceY, [-1, 1], [-3, 3]),
    { stiffness: 82, damping: 26 }
  );
  const projectUrl = getProjectUrl(project);
  const frameClip = (compact ? compactFrameClips : frameClips)[project.id] ?? (compact ? defaultCompactFrameClip : defaultFrameClip);
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
      case '05':
        return {
          initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            x: 20 * direction,
            opacity: 0,
          },
          animate: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            x: 0,
            opacity: 1,
          },
          exit: {
            opacity: 0,
            x: -16 * direction,
          },
        };
      case '06':
        return {
          initial: { x: 32 * direction, rotate: 0.4 * direction, opacity: 0 },
          animate: { x: 0, rotate: 0, opacity: 1 },
          exit: { x: -24 * direction, rotate: -0.2 * direction, opacity: 0 },
        };
      case '07':
        return {
          initial: {
            clipPath: direction > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
            y: 16 * direction,
            opacity: 0,
          },
          animate: { clipPath: 'inset(0 0 0 0)', y: 0, opacity: 1 },
          exit: {
            opacity: 0,
            y: -12 * direction,
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
  const backing = backingOffsets[project.id] ?? defaultBackingOffset;

  return (
    <div className={`relative w-full ${compact ? 'aspect-[1.18/1]' : 'aspect-[1.48/1]'}`}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-[4%] border transition-colors duration-500"
        animate={
          prefersReduced
            ? { x: 0, y: 0 }
            : { x: backing.x, y: backing.y }
        }
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ clipPath: frameClip, borderColor: `${project.accent}35` }}
      />

      <motion.div
        className="absolute inset-[1%] overflow-hidden bg-surface-low"
        style={{ clipPath: frameClip }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={project.id}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: prefersReduced ? 0.01 : 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              style={{
                x: prefersReduced ? 0 : imageX,
                y: prefersReduced ? 0 : imageY,
                scale: prefersReduced ? 1 : 1.025,
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
                clipPath: sliceClips[project.id] ?? defaultSliceClip,
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
                d={seamPaths[project.id] ?? defaultSeamPath}
                initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.74 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.44, delay: prefersReduced ? 0 : 0.05, ease: [0.16, 1, 0.3, 1] }}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.28"
                vectorEffect="non-scaling-stroke"
                style={{ color: project.accent }}
                className="transition-colors duration-500"
              />
            </motion.svg>

            {/* Top identifier badge */}
            <div className="absolute left-[5%] top-[5%] z-[10] flex items-center">
              <span className="inline-flex items-center gap-1.5 border border-white/10 bg-[#111218]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-[2px] sm:text-[11px]">
                {displayNumber ?? project.displayNumber ?? project.id} / {project.title}
              </span>
            </div>

            {/* Bottom action bar */}
            <div className="absolute bottom-[5%] left-[5%] right-[5%] z-[10] flex flex-wrap items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.16em] sm:gap-2.5 sm:text-[11px]">
              {projectUrl ? (
                <>
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      className="pointer-events-auto bg-accent px-3.5 py-1.5 font-semibold text-background transition-colors hover:bg-primary focus-visible:bg-primary sm:px-4 sm:py-2"
                    >
                      Case study →
                    </Link>
                  )}
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`pointer-events-auto px-3 py-1.5 font-semibold transition-colors sm:px-3.5 sm:py-2 ${
                        project.caseStudyUrl
                          ? 'border border-white/20 bg-[#121318]/90 text-primary hover:border-accent hover:text-accent focus-visible:border-accent'
                          : 'bg-accent text-background hover:bg-primary focus-visible:bg-primary'
                      }`}
                    >
                      Live demo ↗
                    </a>
                  ) : (
                    !project.caseStudyUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto bg-accent px-3.5 py-1.5 font-semibold text-background transition-colors hover:bg-primary focus-visible:bg-primary sm:px-4 sm:py-2"
                      >
                        View project ↗
                      </a>
                    )
                  )}
                  {project.gitHubUrl && (
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto border border-white/20 bg-[#121318]/90 px-3 py-1.5 text-primary transition-colors hover:border-accent hover:text-accent focus-visible:border-accent sm:py-2"
                    >
                      GitHub ↗
                    </a>
                  )}
                </>
              ) : (
                <span className="inline-flex items-center border border-white/10 bg-[#111218]/90 px-2.5 py-1 text-primary/55">
                  Project preview
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
