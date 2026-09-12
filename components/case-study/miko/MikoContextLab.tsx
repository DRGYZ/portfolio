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
  foregroundProcess: string;
  windowTitle: string;
  audioState: string;
  idleTimer: string;
  bridgeEvent: string;
}

interface PolicyOutcome {
  bubblePermitted: boolean;
  bubbleText: string;
  statusLabel: string;
  statusColor: string;
  cooldown: string;
  repeatSuppression: string;
  arbitrationRationale: string;
  policyExplanation: string;
}

const scenarios: Record<ContextKey, ContextScenario> = {
  coding_music: {
    id: 'coding_music',
    label: 'Coding + Music',
    category: 'Signal Arbitration',
    badge: 'ARBITRATION',
    mood: 'coding',
    moodFolder: 'coding',
    foregroundProcess: 'Code.exe (VS Code)',
    windowTitle: 'router.ts — portfolio [Workspace]',
    audioState: 'Audible background music (Spotify)',
    idleTimer: 'Active keyboard / mouse input',
    bridgeEvent: 'None (Editor focused)',
  },
  youtube: {
    id: 'youtube',
    label: 'Watching Video',
    category: 'Media Session',
    badge: 'MEDIA STREAM',
    mood: 'watching',
    moodFolder: 'watching',
    foregroundProcess: 'msedge.exe',
    windowTitle: 'Designing Calm Desktop Interfaces — YouTube',
    audioState: 'Active media audio session',
    idleTimer: 'Passive media consumption',
    bridgeEvent: 'Host: youtube.com • audible • mediaLikely',
  },
  idle: {
    id: 'idle',
    label: 'Idle / Away',
    category: 'System Standby',
    badge: 'INPUT STANDBY',
    mood: 'sleepy',
    moodFolder: 'sleepy',
    foregroundProcess: 'explorer.exe (Desktop)',
    windowTitle: 'None (System Idle)',
    audioState: 'Silent / Inactive',
    idleTimer: 'Inactivity > 90s (GetLastInputInfo)',
    bridgeEvent: 'Stale / Inactive',
  },
  secondary_monitor: {
    id: 'secondary_monitor',
    label: 'Secondary Monitor',
    category: 'Relocation',
    badge: 'AUXILIARY DISPLAY',
    mood: 'annoyed',
    moodFolder: 'annoyed',
    foregroundProcess: 'Desktop Shell (Display 2)',
    windowTitle: 'Display 2 (Auxiliary Screen)',
    audioState: 'Silent / Inactive',
    idleTimer: 'Active desktop session',
    bridgeEvent: 'None (Display relocation event)',
  },
};

// Complete 12-combination outcome matrix (4 Contexts × 3 Interruption Modes)
const outcomeMatrix: Record<ContextKey, Record<InterruptionKey, PolicyOutcome>> = {
  coding_music: {
    normal: {
      bubblePermitted: true,
      bubbleText: 'review mode',
      statusLabel: 'PERMITTED (NORMAL)',
      statusColor: 'text-[#f09acb]',
      cooldown: '15m interval',
      repeatSuppression: '120m window',
      arbitrationRationale: 'Active code editor (Priority 7) takes precedence over background music (Priority 6). Standard reaction permitted.',
      policyExplanation: 'Normal policy: companion is permitted to acknowledge task focus with brief, peripheral thought bubbles.',
    },
    quiet: {
      bubblePermitted: true,
      bubbleText: '...quiet focus',
      statusLabel: 'DAMPENED (QUIET MODE)',
      statusColor: 'text-amber-400',
      cooldown: '30m interval',
      repeatSuppression: '180m window',
      arbitrationRationale: 'Coding priority upheld. Quiet policy dampens reaction frequency and replaces banter with subtle focus state.',
      policyExplanation: 'Quiet policy: speech cadence is reduced and repeat suppression is extended to protect deep work.',
    },
    focus: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'SUPPRESSED (FOCUS LOCK)',
      statusColor: 'text-[#ffadd8]',
      cooldown: '60m interval',
      repeatSuppression: '240m window',
      arbitrationRationale: 'Coding context detected while Focus policy is active. All non-essential desktop reactions are completely blocked.',
      policyExplanation: 'Focus policy: zero visual speech bubbles allowed during code editing. Character remains in silent review posture.',
    },
  },
  youtube: {
    normal: {
      bubblePermitted: true,
      bubbleText: 'movie mode',
      statusLabel: 'PERMITTED (NORMAL)',
      statusColor: 'text-[#f09acb]',
      cooldown: '20m interval',
      repeatSuppression: '120m window',
      arbitrationRationale: 'Windows Media Session and browser bridge confirm active video. Normal policy allows a single introductory reaction.',
      policyExplanation: 'Normal policy: single introductory reaction permitted upon media playback start, then silenced for session duration.',
    },
    quiet: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'MUTED (QUIET SPECTATOR)',
      statusColor: 'text-amber-400',
      cooldown: '45m interval',
      repeatSuppression: '180m window',
      arbitrationRationale: 'Video playback detected. Under Quiet policy, introductory speech is bypassed in favor of immediate silent spectator stance.',
      policyExplanation: 'Quiet policy: MIKO adopts passive viewing posture immediately without popping a speech bubble over the video.',
    },
    focus: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'SUPPRESSED (FOCUS POLICY)',
      statusColor: 'text-[#ffadd8]',
      cooldown: '60m interval',
      repeatSuppression: '240m window',
      arbitrationRationale: 'Focus policy active. Browser video activity is classified as ambient reference; all commentary is strictly silenced.',
      policyExplanation: 'Focus policy: absolute silence enforced. Companion maintains stationary passive posture with all bubbles locked.',
    },
  },
  idle: {
    normal: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'STANDBY SLEEP (NORMAL)',
      statusColor: 'text-primary-subtle',
      cooldown: '25m interval',
      repeatSuppression: '120m window',
      arbitrationRationale: 'Inactivity timer crosses 90-second threshold. MIKO transitions into standby sleep without popping bubbles.',
      policyExplanation: 'Normal policy: companion enters resting sleep state. No notification or speech attempted while operator is away.',
    },
    quiet: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'DEEP STANDBY (QUIET)',
      statusColor: 'text-amber-400',
      cooldown: '45m interval',
      repeatSuppression: '180m window',
      arbitrationRationale: 'Quiet policy accelerates sleep transition (60s idle threshold). Wake sensitivity dampened to prevent accidental wake-up.',
      policyExplanation: 'Quiet policy: companion shifts into deep slumber faster and suppresses any ambient wake animations.',
    },
    focus: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'SUSPENDED (FOCUS LOCK)',
      statusColor: 'text-[#ffadd8]',
      cooldown: '60m interval',
      repeatSuppression: '240m window',
      arbitrationRationale: 'Focus lock combined with idle state halts all autonomous routines and suspends periodic thought checks.',
      policyExplanation: 'Focus policy: complete process hibernation. Even when the user steps away, the workspace remains fully undisturbed.',
    },
  },
  secondary_monitor: {
    normal: {
      bubblePermitted: true,
      bubbleText: 'wrong monitor',
      statusLabel: 'RELOCATION REACTION (NORMAL)',
      statusColor: 'text-[#f09acb]',
      cooldown: '12m interval',
      repeatSuppression: '120m window',
      arbitrationRationale: 'Window dragged to auxiliary display (Priority 8). High-priority physical move triggers playful annoyance tantrum.',
      policyExplanation: 'Normal policy: physical relocation is treated as direct interaction; expressive annoyance reaction is permitted.',
    },
    quiet: {
      bubblePermitted: true,
      bubbleText: '...over here?',
      statusLabel: 'MUTED REACTION (QUIET)',
      statusColor: 'text-amber-400',
      cooldown: '30m interval',
      repeatSuppression: '180m window',
      arbitrationRationale: 'Secondary monitor move detected. Quiet policy softens the tantrum into a subtle placement check.',
      policyExplanation: 'Quiet policy: softens reaction dialogue and extends cooldown so repeated drags do not generate repetitive quips.',
    },
    focus: {
      bubblePermitted: false,
      bubbleText: '',
      statusLabel: 'SILENT RELOCATION (FOCUS)',
      statusColor: 'text-[#ffadd8]',
      cooldown: '60m interval',
      repeatSuppression: '240m window',
      arbitrationRationale: 'Screen relocation detected during Focus session. Tantrum reaction is completely suppressed to avoid interrupting task.',
      policyExplanation: 'Focus policy: companion accepts window relocation silently. Visual annoyance animation is damped to preserve focus.',
    },
  },
};

export function MikoContextLab() {
  const prefersReduced = useReducedMotion();
  const [activeContext, setActiveContext] = useState<ContextKey>('coding_music');
  const [interruption, setInterruption] = useState<InterruptionKey>('normal');
  const [frameIndex, setFrameIndex] = useState<number>(0);

  const scenario = scenarios[activeContext];
  const outcome = outcomeMatrix[activeContext][interruption];

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

  const paddedIndex = String(frameIndex).padStart(2, '0');
  const frameSrc = getAssetPath(`/case-studies/miko/frames/${scenario.moodFolder}/${paddedIndex}.png`);

  return (
    <div className="border border-white/[0.08] bg-surface font-mono overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] bg-background/60 p-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-[#f09acb]" aria-hidden="true" />
          <span className="text-[13px] font-bold uppercase tracking-wider text-primary sm:tracking-[0.2em]">
            Context Lab &bull; Behaviour Simulation
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[13px] text-primary-subtle">
          <span>Pipeline:</span>
          <span className="text-[#f09acb]">Signals &rarr; Arbitration &rarr; Posture</span>
        </div>
      </div>

      {/* Control Strip */}
      <div className="grid border-b border-white/[0.08] lg:grid-cols-12">
        {/* Context Selector Buttons */}
        <div className="p-4 sm:p-6 lg:col-span-8 lg:border-r lg:border-white/[0.08]">
          <span className="block text-[13px] uppercase tracking-[0.18em] text-primary-subtle">
            Select Context:
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
                  className={`flex items-center gap-2 border px-3.5 py-2.5 text-left text-[13px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] sm:text-sm ${
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
            <span className="text-[13px] uppercase tracking-[0.18em] text-primary-subtle">
              Interruption Mode
            </span>
            <span className="text-[13px] font-bold uppercase text-[#ffadd8]">{interruption}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {(['normal', 'quiet', 'focus'] as InterruptionKey[]).map((policy) => (
              <button
                key={policy}
                type="button"
                onClick={() => setInterruption(policy)}
                className={`border py-2 text-center text-[13px] uppercase tracking-wider transition-colors ${
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
          <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/[0.08] bg-background/80 px-2.5 py-1 text-[11px] uppercase tracking-widest text-[#f09acb]">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <span>State: {scenario.badge}</span>
          </div>

          {/* Companion Thought / Reaction Bubble */}
          <div className="relative z-10 mb-4 h-16 flex items-end justify-center">
            <AnimatePresence mode="wait">
              {outcome.bubblePermitted ? (
                <motion.div
                  key={scenario.id + outcome.bubbleText + interruption}
                  initial={prefersReduced ? false : { opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative border border-[#f09acb]/60 bg-background px-4 py-2 text-center text-[13.5px] font-semibold text-primary shadow-lg sm:text-sm"
                >
                  <span>&ldquo;{outcome.bubbleText}&rdquo;</span>
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-[#f09acb]/60 bg-background"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={`suppressed-${interruption}-${scenario.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  className="text-[13px] uppercase tracking-wider text-primary-subtle"
                >
                  [Bubble restrained &bull; {interruption} mode]
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
          <div className="relative z-10 mt-2 flex w-full max-w-xs items-center justify-between border-t border-white/20 pt-2 font-mono text-[11px] uppercase tracking-widest text-primary-subtle">
            <span>Sprite: {scenario.mood}</span>
            <span>Frame: 0{frameIndex + 1} / 06</span>
          </div>
        </div>

        {/* Right Runtime Reasoning Inspector */}
        <div className="space-y-5 p-6 lg:col-span-6 lg:p-8 min-w-0">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              Context State &amp; Signals
            </span>
            <span className="text-[11px] uppercase text-primary-subtle">
              {scenario.category}
            </span>
          </div>

          {/* Evaluated Sensor Signals */}
          <div className="space-y-2.5 text-[13.5px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-[13px] text-primary-subtle">Foreground App:</span>
              <span className="font-semibold text-primary">{scenario.foregroundProcess}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-[13px] text-primary-subtle">Window Title:</span>
              <span className="text-primary-muted truncate max-w-full sm:max-w-sm">{scenario.windowTitle}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-[13px] text-primary-subtle">Audio State:</span>
              <span className="text-primary-muted">{scenario.audioState}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-[13px] text-primary-subtle">Inactivity Timer:</span>
              <span className="text-primary-muted">{scenario.idleTimer}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/[0.04]">
              <span className="text-[13px] text-primary-subtle">Browser Bridge:</span>
              <span className="text-primary-muted truncate max-w-full sm:max-w-sm">{scenario.bridgeEvent}</span>
            </div>
          </div>

          {/* Local Evaluation & Priority Rationale */}
          <div className="border border-white/[0.08] bg-background/50 p-4">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
              Local Arbitration Rationale
            </span>
            <p className="mt-1.5 font-sans text-[14px] leading-relaxed text-primary-muted sm:text-[14.5px]">
              {outcome.arbitrationRationale}
            </p>
          </div>

          {/* Interruption Gate Outcome */}
          <div className="border border-white/[0.08] bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary-subtle">
                Interruption Policy
              </span>
              <span className={`text-[13px] font-bold uppercase tracking-wider ${outcome.statusColor}`}>
                {outcome.statusLabel}
              </span>
            </div>
            <p className="mt-2 font-sans text-[14px] leading-relaxed text-primary-muted sm:text-[14.5px]">
              {outcome.policyExplanation}
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2 text-[11px] text-primary-subtle sm:text-xs">
              <span>Cooldown: {outcome.cooldown}</span>
              <span>Suppression: {outcome.repeatSuppression}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inspectable by Design Sub-block */}
      <div className="border-t border-white/[0.08] bg-background/30 p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-2 lg:col-span-6 min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#f09acb]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
                Inspectable by Design
              </span>
            </div>
            <p className="font-sans text-[14px] leading-relaxed text-primary-muted sm:text-[15px]">
              Persona Studio exposes active signals, priority decisions, cooldowns, and recent reactions so behaviour can be debugged instead of treated as a black box.
            </p>
          </div>

          {/* Compact 3-Row Event Trace */}
          <div className="border border-white/[0.08] bg-surface/80 p-4 font-mono text-xs lg:col-span-6 min-w-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] uppercase tracking-wider text-primary-subtle">
              <span>Representative Event Trace</span>
              <span className="text-[#f09acb]">Persona Studio</span>
            </div>
            <div className="mt-2.5 divide-y divide-white/[0.04] text-[12.5px] sm:text-[13px]">
              <div className="flex items-center justify-between gap-2 py-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="shrink-0 font-semibold text-primary">Code.exe</span>
                  <span className="shrink-0 text-primary-subtle">&rarr;</span>
                  <span className="truncate text-primary-muted">coding context selected</span>
                </div>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#f09acb]">Active</span>
              </div>
              <div className="flex items-center justify-between gap-2 py-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="shrink-0 font-semibold text-primary">Spotify.exe</span>
                  <span className="shrink-0 text-primary-subtle">&rarr;</span>
                  <span className="truncate text-primary-muted">restrained by coding priority</span>
                </div>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-amber-400">Restrained</span>
              </div>
              <div className="flex items-center justify-between gap-2 py-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="shrink-0 font-semibold text-primary">Idle &gt; 90s</span>
                  <span className="shrink-0 text-primary-subtle">&rarr;</span>
                  <span className="truncate text-primary-muted">standby posture</span>
                </div>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#ffadd8]">Standby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
