'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScanPhase {
  id: string;
  number: string;
  title: string;
  detail: string;
}

const phases: ScanPhase[] = [
  {
    id: 'kpis',
    number: '01',
    title: 'Summary KPIs',
    detail: 'The first row answers the immediate questions: how much revenue is active, how many orders need attention, and how much of the queue is already fulfilled.',
  },
  {
    id: 'trajectory',
    number: '02',
    title: '14-Day Trend',
    detail: 'The 14-day view shows how revenue and order activity change over time.',
  },
  {
    id: 'status',
    number: '03',
    title: 'Status Breakdown',
    detail: 'The status split shows where orders sit in the current queue.',
  },
  {
    id: 'channels',
    number: '04',
    title: 'Store Comparison',
    detail: 'The comparison keeps the three stores visible side by side.',
  },
];

interface ScanOrderTrackProps {
  onSelectPhase?: (phaseId: string) => void;
}

export function ScanOrderTrack({ onSelectPhase }: ScanOrderTrackProps) {
  const prefersReduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string>('kpis');

  const handleSelect = (id: string) => {
    setActiveId(id);
    onSelectPhase?.(id);
  };

  return (
    <div className="w-full max-w-xl font-mono text-[10px]">
      <div className="flex items-center justify-between text-primary-subtle uppercase tracking-[0.16em] mb-2">
        <span>Information Priority</span>
        <span className="text-accent/90">Overview Sequence</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 border border-white/[0.08] bg-surface">
        {phases.map((phase, idx) => {
          const isActive = activeId === phase.id;

          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => handleSelect(phase.id)}
              onMouseEnter={() => handleSelect(phase.id)}
              className={`group text-left p-2.5 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                isActive
                  ? 'bg-accent/[0.12] border border-accent/40 text-primary'
                  : 'bg-transparent border border-transparent text-primary-muted hover:text-primary hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${isActive ? 'text-accent' : 'text-primary-subtle'}`}>
                  {phase.number}
                </span>
                {idx < phases.length - 1 && (
                  <span className="text-primary-subtle/40 hidden sm:inline" aria-hidden="true">&rarr;</span>
                )}
              </div>
              <span className="block mt-1 uppercase tracking-wider font-semibold text-[10px] truncate">
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Micro-Annotation */}
      <motion.div
        key={activeId}
        initial={prefersReduced ? false : { opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2 text-[11px] font-sans text-primary-subtle flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 bg-accent" />
        <span>{phases.find((p) => p.id === activeId)?.detail}</span>
      </motion.div>
    </div>
  );
}
