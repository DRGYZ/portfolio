'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

type TabKey = 'awareness' | 'memory';

interface TabConfig {
  id: TabKey;
  label: string;
  imageSrc: string;
  alt: string;
  captionLeft: string;
  captionRight: string;
}

const TABS: Record<TabKey, TabConfig> = {
  awareness: {
    id: 'awareness',
    label: 'Awareness & Privacy',
    imageSrc: '/case-studies/miko/persona_studio_awareness.png',
    alt: 'Persona Studio Awareness and Privacy Controls panel in the working Windows prototype',
    captionLeft: 'Persona Studio • Sensor Toggles & Privacy Boundaries',
    captionRight: 'Working Prototype UI',
  },
  memory: {
    id: 'memory',
    label: 'Memory & Context',
    imageSrc: '/case-studies/miko/persona_studio_memory_facts.png',
    alt: 'Persona Studio Memory and Learned Facts inspection view showing local facts',
    captionLeft: 'Persona Studio • Inspectable Memory & Learned Preferences',
    captionRight: 'Local File Storage',
  },
};

export function MikoPersonaStudioShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('awareness');
  const prefersReduced = useReducedMotion();

  const current = TABS[activeTab];

  return (
    <div className="border border-white/[0.08] bg-surface font-mono">
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-white/[0.08] p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              Real Prototype Interface
            </span>
          </div>
          <p className="font-sans text-[17px] font-bold text-primary sm:text-lg">
            Persona Studio &bull; Local runtime controls
          </p>
          <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted max-w-2xl sm:text-sm">
            Persona Studio exposes what MIKO can sense and remember, so those controls aren’t hidden behind the companion itself.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          role="tablist"
          aria-label="Persona Studio Views"
          className="flex items-center gap-2 shrink-0"
        >
          {(Object.keys(TABS) as TabKey[]).map((key) => {
            const tab = TABS[key];
            const isSelected = activeTab === key;

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors duration-150 ${
                  isSelected
                    ? 'border border-[#f09acb] bg-[#f09acb]/10 text-primary shadow-[0_0_12px_rgba(240,154,203,0.15)]'
                    : 'border border-white/10 bg-surface/50 text-primary-subtle hover:border-white/20 hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Focused Showcase Viewport */}
      <div className="p-4 sm:p-8 bg-[#08090c]/90">
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="mx-auto max-w-[880px] border border-white/[0.12] bg-[#ffffff] overflow-hidden shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={getAssetPath(current.imageSrc)}
              alt={current.alt}
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-full h-auto block select-none"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Showcase Footer Caption */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/[0.08] bg-[#0c0d10] px-6 py-3 text-[13px] sm:text-sm text-primary-subtle">
        <span>{current.captionLeft}</span>
        <span className="text-[#f09acb] font-medium">{current.captionRight}</span>
      </div>
    </div>
  );
}
