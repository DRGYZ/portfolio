'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

export type ContextKey = 'coding_music' | 'youtube' | 'idle' | 'secondary_monitor';
export type InterruptionKey = 'normal' | 'quiet' | 'focus';

interface ContextScenario {
  id: ContextKey;
  label: string;
  category: string;
  badge: string;
  mood: string;
  moodFolder: string;
  bubbleText: string;
  foregroundProcess: string;
  windowTitle: string;
  audioState: string;
  idleTimer: string;
  bridgeEvent: string;
  interpretation: string;
  winningRule: string;
  baseCooldown: string;
}

const scenarios: Record<ContextKey, ContextScenario> = {
  coding_music: {
    id: 'coding_music',
    label: 'Coding + Music',
    category: 'Signal Arbitration',
    badge: 'ARBITRATION',
    mood: 'coding',
    moodFolder: 'coding',
    bubbleText: 'review mode',
    foregroundProcess: 'Code.exe (VS Code)',
    windowTitle: 'router.ts — portfolio [Workspace]',
    audioState: 'Audible background music (Spotify)',
    idleTimer: 'Active keyboard / mouse input',
    bridgeEvent: 'None (Editor focused)',
    interpretation:
      'Active code editor paired with background audio. Priority arbitration selects the higher-priority coding posture while treating music as ambient backdrop.',
    winningRule: 'Arbitration: coding (Priority 7) > music (Priority 6)',
    baseCooldown: '20m baseline',
  },
  youtube: {
    id: 'youtube',
    label: 'Watching Video',
    category: 'Media Session',
    badge: 'MEDIA STREAM',
    mood: 'watching',
    moodFolder: 'watching',
    bubbleText: 'movie mode',
    foregroundProcess: 'msedge.exe',
    windowTitle: 'Designing Calm Desktop Interfaces — YouTube',
    audioState: 'Active media audio session',
    idleTimer: 'Passive media consumption',
    bridgeEvent: 'Host: youtube.com • audible • mediaLikely',
    interpretation:
      'Windows Media Session and browser bridge detect active video playback with audio. MIKO adopts a quiet spectator stance.',
    winningRule: 'mediaSession.status "Playing" && browserBridge.mediaLikely',
    baseCooldown: '20m baseline',
  },
  idle: {
    id: 'idle',
    label: 'Idle / Away',
    category: 'System Standby',
    badge: 'INPUT STANDBY',
    mood: 'sleepy',
    moodFolder: 'sleepy',
    bubbleText: 'still here',
    foregroundProcess: 'explorer.exe (Desktop)',
    windowTitle: 'None (System Idle)',
    audioState: 'Silent / Inactive',
    idleTimer: 'Inactivity > 90s (GetLastInputInfo)',
    bridgeEvent: 'Stale / Inactive',
    interpretation:
      'Operator inactivity crosses the 90-second threshold. MIKO enters standby sleep without popping unnecessary bubbles.',
    winningRule: 'idleTracker.secondsWithoutInput > 90s',
    baseCooldown: '25m baseline',
  },
  secondary_monitor: {
    id: 'secondary_monitor',
    label: 'Secondary Monitor',
    category: 'Relocation',
    badge: 'AUXILIARY DISPLAY',
    mood: 'annoyed',
    moodFolder: 'annoyed',
    bubbleText: 'wrong monitor',
    foregroundProcess: 'Desktop Shell (Display 2)',
    windowTitle: 'Display 2 (Auxiliary Screen)',
    audioState: 'Silent / Inactive',
    idleTimer: 'Active desktop session',
    bridgeEvent: 'None (Display relocation event)',
    interpretation:
      'MIKO is dragged to an auxiliary display. The relocation rule selects a playful annoyance tantrum before settling.',
    winningRule: 'desktopBehavior.secondaryMonitorEnabled (Priority 8)',
    baseCooldown: '12m baseline',
  },
};

export function MikoContextLab() {
  const prefersReduced = useReducedMotion();
  const [activeContext, setActiveContext] = useState<ContextKey>('coding_music');
  const [interruption, setInterruption] = useState<InterruptionKey>('normal');
  const [frameIndex, setFrameIndex] = useState<number>(0);

  const scenario = scenarios[activeContext];

  // Frame animation loop (cycles through the 6 mood frames: 00 to 05)
  useEffect(() => {
    if (prefersReduced) {
      setFrameIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % 6);
    }, 180);

    return () => clearInterval(timer);
  }, [prefersReduced, activeContext]);

  // Compute interruption policy outcome
  const getInterruptionVerdict = () => {
    if (interruption === 'focus') {
      return {
        permitted: false,
        statusLabel: 'SUPPRESSED (FOCUS MODE)',
        statusColor: 'text-[#ffadd8]',
        explanation: 'Focus mode active: speech bubbles strictly suppressed. Character stays present in passive posture.',
      };
    }
    if (interruption === 'quiet') {
      return {
        permitted: false,
        statusLabel: 'RESTRAINED (QUIET TIMER)',
        statusColor: 'text-amber-400',
        explanation: 'Quiet mode active: spontaneous thoughts held back to preserve concentration.',
      };
    }
    if (activeContext === 'idle') {
      return {
        permitted: false,
        statusLabel: 'STANDBY SLEEP',
        statusColor: 'text-primary-subtle',
        explanation: 'Operator absent: companion enters standby sleep without surfacing thoughts.',
      };
    }
    if (activeContext === 'secondary_monitor') {
      return {
        permitted: true,
        statusLabel: 'RELOCATION REACTION',
        statusColor: 'text-[#f09acb]',
        explanation: 'Secondary-monitor relocation triggers the priority annoyance reaction.',
      };
    }
    return {
      permitted: true,
      statusLabel: 'PERMITTED (CALM)',
      statusColor: 'text-[#f09acb]',
      explanation: 'Bubble permitted under current priority rules. Non-blocking peripheral display.',
    };
  };

  const verdict = getInterruptionVerdict();
  const paddedIndex = String(frameIndex).padStart(2, '0');
  const frameSrc = getAssetPath(`/case-studies/miko/frames/${scenario.moodFolder}/${paddedIndex}.png`);

  return (
    <div className="border border-white/[0.08] bg-surface font-mono">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] bg-background/60 p-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-[#f09acb]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Context Lab · Behaviour Simulation
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-primary-subtle">
          <span>Pipeline:</span>
          <span className="text-[#f09acb]">Signals &rarr; Arbitration &rarr; Posture</span>
        </div>
      </div>

      {/* Control Strip */}
      <div className="grid border-b border-white/[0.08] lg:grid-cols-12">
        {/* Context Selector Buttons */}
        <div className="p-4 sm:p-6 lg:col-span-8 lg:border-r lg:border-white/[0.08]">
          <span className="block text-xs uppercase tracking-[0.18em] text-primary-subtle">
            Select Workspace Context:
          </span>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {(Object.keys(scenarios) as ContextKey[]).map((key) => {
              const item = scenarios[key];
              const isSelected = activeContext === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveContext(key);
                    setFrameIndex(0);
                  }}
                  className={`flex items-center gap-2 border px-3.5 py-2.5 text-left text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] ${
                    isSelected
                      ? 'border-[#f09acb] bg-[#f09acb]/10 text-primary'
                      : 'border-white/[0.08] bg-background/40 text-primary-muted hover:border-white/20 hover:text-primary'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`h-1.5 w-1.5 flex-shrink-0 ${
                      isSelected ? 'bg-[#f09acb]' : 'bg-white/30'
                    }`}
                  />
                  <span className="font-sans font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interruption Mode Selector */}
        <div className="p-4 sm:p-6 lg:col-span-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-primary-subtle">
              Interruption Mode
            </span>
            <span className="text-xs font-bold uppercase text-[#ffadd8]">{interruption}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {(['normal', 'quiet', 'focus'] as InterruptionKey[]).map((policy) => (
              <button
                key={policy}
                type="button"
                onClick={() => setInterruption(policy)}
                className={`border py-2 text-center text-xs uppercase tracking-wider transition-colors ${
                  interruption === policy
                    ? 'border-[#ffadd8] bg-[#ffadd8]/20 font-bold text-primary'
                    : 'border-white/[0.08] bg-background/30 text-primary-muted hover:border-white/20'
                }`}
                aria-pressed={interruption === policy}
              >
                {policy}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Simulation Stage & Decision Inspector */}
      <div className="grid lg:grid-cols-12">
        {/* Center Virtual Stage */}
        <div className="relative flex flex-col items-center justify-center border-b border-white/[0.08] bg-[#0c0d10] p-8 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-12">
          {/* Ambient Ground Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(240, 154, 203, 0.25) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          {/* Context Badge */}
          <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/[0.08] bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#f09acb]">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <span>State: {scenario.badge}</span>
          </div>

          {/* Companion Thought / Reaction Bubble */}
          <div className="relative z-10 mb-4 h-16 flex items-end justify-center">
            <AnimatePresence mode="wait">
              {verdict.permitted ? (
                <motion.div
                  key={scenario.id + scenario.bubbleText}
                  initial={prefersReduced ? false : { opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative border border-[#f09acb]/60 bg-background px-4 py-2 text-center text-xs font-semibold text-primary shadow-lg"
                >
                  <span>&ldquo;{scenario.bubbleText}&rdquo;</span>
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-[#f09acb]/60 bg-background"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="silenced"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  className="text-xs uppercase tracking-wider text-primary-subtle"
                >
                  [Bubble restrained · {interruption} mode]
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MIKO Sprite Box */}
          <div className="relative z-10 flex h-48 w-48 items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute bottom-2 h-6 w-32 bg-[#f09acb]/10 blur-md"
            />
            <img
              src={frameSrc}
              alt={`MIKO companion in ${scenario.mood} posture`}
              width={192}
              height={208}
              className="h-44 w-auto object-contain select-none [image-rendering:pixelated]"
            />
          </div>

          {/* Stage Platform Ground Line */}
          <div className="relative z-10 mt-2 flex w-full max-w-xs items-center justify-between border-t border-white/20 pt-2 font-mono text-[10px] uppercase tracking-widest text-primary-subtle">
            <span>Sprite: {scenario.mood}</span>
            <span>Frame: 0{frameIndex + 1} / 06</span>
          </div>
        </div>

        {/* Right Runtime Reasoning Inspector */}
        <div className="space-y-5 p-6 lg:col-span-6 lg:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              Context State &amp; Signals
            </span>
            <span className="text-[10px] uppercase text-primary-subtle">
              {scenario.category}
            </span>
          </div>

          {/* Evaluated Sensor Signals */}
          <div className="space-y-2 text-xs">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-primary-subtle">Foreground App:</span>
              <span className="font-semibold text-primary">{scenario.foregroundProcess}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-primary-subtle">Window Title:</span>
              <span className="text-primary-muted truncate max-w-xs">{scenario.windowTitle}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-primary-subtle">Audio State:</span>
              <span className="text-primary-muted">{scenario.audioState}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-primary-subtle">Inactivity Timer:</span>
              <span className="text-primary-muted">{scenario.idleTimer}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-primary-subtle">Browser Bridge:</span>
              <span className="text-primary-muted truncate max-w-xs">{scenario.bridgeEvent}</span>
            </div>
          </div>

          {/* Local Evaluation & Priority Rationale */}
          <div className="border border-white/[0.08] bg-background/50 p-4">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              Local Arbitration
            </span>
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-primary-muted">
              {scenario.interpretation}
            </p>
            <div className="mt-3 border-t border-white/[0.06] pt-2 text-xs">
              <span className="text-primary-subtle">Matched rule: </span>
              <code className="text-accent">{scenario.winningRule}</code>
            </div>
          </div>

          {/* Interruption Gate Outcome */}
          <div className="border border-white/[0.08] bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-subtle">
                Interruption Policy
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${verdict.statusColor}`}>
                {verdict.statusLabel}
              </span>
            </div>
            <p className="mt-2 font-sans text-xs text-primary-muted">
              {verdict.explanation}
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2 text-[10px] text-primary-subtle">
              <span>Cooldown: {scenario.baseCooldown}</span>
              <span>Repeat suppression: 120–180m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Pipeline Summary */}
      <div className="border-t border-white/[0.08] bg-background/40 px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
        <span>Architectural Pipeline: </span>
        <span className="text-primary">Desktop signals &rarr; Local interpretation &rarr; Priority + cooldown &rarr; Mood &rarr; Reaction</span>
      </div>
    </div>
  );
}
