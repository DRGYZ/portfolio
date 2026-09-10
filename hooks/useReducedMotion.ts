'use client';

import { useSyncExternalStore } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const listeners = new Set<() => void>();
let mediaQuery: MediaQueryList | undefined;

function getMediaQuery(): MediaQueryList | undefined {
  if (typeof window === 'undefined') return undefined;

  mediaQuery ??= window.matchMedia(reducedMotionQuery);
  return mediaQuery;
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  const query = getMediaQuery();
  listeners.add(listener);

  if (listeners.size === 1) {
    query?.addEventListener('change', notifyListeners);
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      query?.removeEventListener('change', notifyListeners);
    }
  };
}

function getSnapshot() {
  return getMediaQuery()?.matches ?? false;
}

function getServerSnapshot() {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
