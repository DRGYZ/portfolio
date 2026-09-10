'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';

interface PointerPosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  isInside: boolean;
}

export function usePointerPosition(targetRef?: RefObject<HTMLElement | null>): PointerPosition {
  const [position, setPosition] = useState<PointerPosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isInside: false,
  });

  const handlePointerMove = useCallback(
    (e: PointerEvent | MouseEvent) => {
      if (targetRef && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        const isInside =
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom;

        const rawX = clientX - rect.left;
        const rawY = clientY - rect.top;

        // Normalized from -1 to 1 relative to target center
        const normX = ((rawX / rect.width) * 2 - 1);
        const normY = ((rawY / rect.height) * 2 - 1);

        setPosition({
          x: rawX,
          y: rawY,
          normalizedX: Math.max(-1, Math.min(1, normX)),
          normalizedY: Math.max(-1, Math.min(1, normY)),
          isInside,
        });
      } else {
        const winWidth = window.innerWidth || 1;
        const winHeight = window.innerHeight || 1;

        const normX = (e.clientX / winWidth) * 2 - 1;
        const normY = (e.clientY / winHeight) * 2 - 1;

        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: Math.max(-1, Math.min(1, normX)),
          normalizedY: Math.max(-1, Math.min(1, normY)),
          isInside: true,
        });
      }
    },
    [targetRef]
  );

  useEffect(() => {
    const element = targetRef?.current || window;
    let animationFrameId: number;

    const onMove = (e: Event) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        handlePointerMove(e as MouseEvent);
      });
    };

    element.addEventListener('pointermove', onMove as EventListener, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      element.removeEventListener('pointermove', onMove as EventListener);
    };
  }, [handlePointerMove, targetRef]);

  return position;
}
