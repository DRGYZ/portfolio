'use client';

import { RefObject, useEffect } from 'react';
import { MotionValue, useMotionValue } from 'framer-motion';

interface PointerPosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
  normalizedX: MotionValue<number>;
  normalizedY: MotionValue<number>;
  isInside: MotionValue<boolean>;
}

const clamp = (value: number) => Math.max(-1, Math.min(1, value));

export function usePointerPosition(
  targetRef: RefObject<HTMLElement | null>,
  disabled = false
): PointerPosition {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const normalizedX = useMotionValue(0);
  const normalizedY = useMotionValue(0);
  const isInside = useMotionValue(false);

  useEffect(() => {
    const element = targetRef.current;

    if (!element || disabled || !window.matchMedia('(any-pointer: fine)').matches) {
      return;
    }

    let animationFrameId = 0;
    let latestEvent: PointerEvent | null = null;

    const updatePosition = () => {
      if (!latestEvent) return;

      const rect = element.getBoundingClientRect();
      const rawX = latestEvent.clientX - rect.left;
      const rawY = latestEvent.clientY - rect.top;

      x.set(rawX);
      y.set(rawY);
      normalizedX.set(clamp((rawX / Math.max(rect.width, 1)) * 2 - 1));
      normalizedY.set(clamp((rawY / Math.max(rect.height, 1)) * 2 - 1));
      isInside.set(true);
    };

    const handlePointerMove = (event: PointerEvent) => {
      latestEvent = event;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handlePointerLeave = () => {
      cancelAnimationFrame(animationFrameId);
      normalizedX.set(0);
      normalizedY.set(0);
      isInside.set(false);
    };

    element.addEventListener('pointermove', handlePointerMove, { passive: true });
    element.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [disabled, isInside, normalizedX, normalizedY, targetRef, x, y]);

  return { x, y, normalizedX, normalizedY, isInside };
}
