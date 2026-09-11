'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

export type ContextKey =
  | 'coding'
  | 'coding_music'
  | 'secondary_monitor'
  | 'browsing'
  | 'youtube'
  | 'music'
  | 'idle';

export type IntensityKey = 'chill' | 'balanced' | 'expressive';
export type InterruptionKey = 'normal' | 'quiet' | 'focus';

interface ContextScenario {
  id: ContextKey;
  label: string;
  category: string;
  badge: string;
  mood: string;
  moodFolder: string;
  bubbleText: string;
  variantOptions: string[];
  foregroundProcess: string;
  windowTitle: string;
  audioState: string;
  idleTimer: string;
  bridgeEvent: string;
  screenTone: string;
  interpretation: string;
  winningRule: string;
  confidence: string;
  baseCooldownMinutes: number;
}

const scenarios: Record<ContextKey, ContextScenario> = {
  coding: {
    id: 'coding',
    label: 'Coding in IDE',
    category: 'Engineering',
    badge: 'IDE FOCUS',
    mood: 'coding',
    moodFolder: 'coding',
    bubbleText: 'checking the logic',
    variantOptions: ['checking the logic', 'review mode', 'focus focus'],
    foregroundProcess: 'Code.exe (VS Code)',
    windowTitle: 'router.ts — portfolio-v2 [Workspace]',
    audioState: 'Silent / Inactive',
    idleTimer: 'Active keyboard/mouse',
    bridgeEvent: 'None (Editor focused)',
    screenTone: 'Dark tone, low brightness',
    interpretation: 'Active code editor foregrounded. Low ambient audio. Heuristic assigns coding/review state.',
    winningRule: 'activityRules.codingProcesses ["Code", "devenv", "WindowsTerminal"]',
    confidence: 'High (Rule Priority 7)',
    baseCooldownMinutes: 20,
  },
  coding_music: {
    id: 'coding_music',
    label: 'Coding + Music',
    category: 'Multi-Signal',
    badge: 'ARBITRATION',
    mood: 'coding',
    moodFolder: 'coding',
    bubbleText: 'review mode',
    variantOptions: ['review mode', 'checking the logic', 'focus focus'],
    foregroundProcess: 'Code.exe (VS Code)',
    windowTitle: 'router.ts — portfolio-v2',
    audioState: 'Audible background music session (Spotify)',
    idleTimer: 'Active keyboard/mouse',
    bridgeEvent: 'None (Editor focused)',
    screenTone: 'Dark tone, low brightness',
    interpretation: 'Active code editor combined with background audio stream. Arbitration selects coding stance (Priority 7) over listening (Priority 6) while keeping audio ambient.',
    winningRule: 'Arbitration: coding (Priority 7) > music (Priority 6)',
    confidence: 'High (Priority Arbitration)',
    baseCooldownMinutes: 20,
  },
  secondary_monitor: {
    id: 'secondary_monitor',
    label: 'Secondary Monitor',
    category: 'Relocation',
    badge: 'DESKTOP RELOCATION',
    mood: 'annoyed',
    moodFolder: 'annoyed',
    bubbleText: 'wrong monitor',
    variantOptions: ['wrong monitor', 'bring me back', 'hmph'],
    foregroundProcess: 'Desktop Shell (Secondary Display)',
    windowTitle: 'Display 2 (Auxiliary Screen)',
    audioState: 'Silent / Inactive',
    idleTimer: 'Active desktop session',
    bridgeEvent: 'None (Display relocation event)',
    screenTone: 'Secondary display boundaries',
    interpretation: 'MIKO shell moved to secondary display bounds. Relocation rule triggers highest-priority annoyance state requesting primary monitor return.',
    winningRule: 'desktopBehavior.secondaryMonitorEnabled (Priority 8)',
    confidence: 'High (Rule Priority 8)',
    baseCooldownMinutes: 12,
  },
  browsing: {
    id: 'browsing',
    label: 'Technical Docs',
    category: 'Research',
    badge: 'BROWSER BRIDGE',
    mood: 'curious',
    moodFolder: 'curious',
    bubbleText: 'what are we reading?',
    variantOptions: ['what are we reading?', 'curious mode', 'new tab adventure'],
    foregroundProcess: 'chrome.exe',
    windowTitle: 'Web Audio API Documentation — MDN',
    audioState: 'Silent / Inactive',
    idleTimer: 'Reading / scroll activity',
    bridgeEvent: 'Host: developer.mozilla.org • active',
    screenTone: 'Dark background, high contrast text',
    interpretation: 'Web browser active with technical documentation host detected via local browser-bridge.',
    winningRule: 'browserBridge.hostMatch ["developer.mozilla.org"] (Priority 4)',
    confidence: 'Normal (Rule Priority 4)',
    baseCooldownMinutes: 15,
  },
  youtube: {
    id: 'youtube',
    label: 'Watching Video',
    category: 'Media Stream',
    badge: 'MEDIA SESSION',
    mood: 'watching',
    moodFolder: 'watching',
    bubbleText: 'movie mode',
    variantOptions: ['movie mode', 'I am watching too', 'wait, this part'],
    foregroundProcess: 'msedge.exe',
    windowTitle: 'Designing Ambient Computing Interfaces — YouTube',
    audioState: 'Active media audio session',
    idleTimer: 'Passive media consumption',
    bridgeEvent: 'Host: youtube.com • audible • mediaLikely',
    screenTone: 'Dimmed background, video rectangle',
    interpretation: 'Windows Media Session reports video playback with active audio output and mediaLikely flag.',
    winningRule: 'mediaSession.status "Playing" && browserBridge.mediaLikely (Priority 6)',
    confidence: 'High (Rule Priority 6)',
    baseCooldownMinutes: 20,
  },
  music: {
    id: 'music',
    label: 'Listening to Music',
    category: 'Audio Session',
    badge: 'AUDIO HOOK',
    mood: 'listening',
    moodFolder: 'listening',
    bubbleText: 'hum hum hum',
    variantOptions: ['hum hum hum', 'this beat is nice', 'tiny concert mode'],
    foregroundProcess: 'Spotify.exe',
    windowTitle: 'Lo-Fi Chill Beats — Instrumental',
    audioState: 'Audible background audio session',
    idleTimer: 'Intermittent desktop activity',
    bridgeEvent: 'None (System media transport)',
    screenTone: 'Dark media player tone',
    interpretation: 'Continuous audio session from background music service with audible output.',
    winningRule: 'activityRules.musicProcesses ["Spotify"] (Priority 6)',
    confidence: 'High (Rule Priority 6)',
    baseCooldownMinutes: 20,
  },
  idle: {
    id: 'idle',
    label: 'Idle / Away',
    category: 'System Sleep',
    badge: 'INPUT STANDBY',
    mood: 'sleepy',
    moodFolder: 'sleepy',
    bubbleText: 'still here',
    variantOptions: ['still here', 'waiting...', 'tiny standby mode'],
    foregroundProcess: 'explorer.exe (Desktop)',
    windowTitle: 'None (System Idle)',
    audioState: 'Silent / Inactive',
    idleTimer: 'User input idle > 90s',
    bridgeEvent: 'Stale / Inactive',
    screenTone: 'Unchanged desktop',
    interpretation: 'Win32 operator inactivity timer exceeds idleThresholdSeconds (90s). Companion transitions to sleep posture.',
    winningRule: 'idleTracker.secondsWithoutInput > idleThresholdSeconds (90s)',
    confidence: 'High (Rule Priority 5)',
    baseCooldownMinutes: 25,
  },
};

const intensityConfig: Record<IntensityKey, { factor: number; label: string }> = {
  chill: { factor: 1.5, label: '1.5×' },
  balanced: { factor: 1.0, label: '1.0×' },
  expressive: { factor: 0.75, label: '0.75×' },
};

export function MikoContextLab() {
  const prefersReduced = useReducedMotion();
  const [activeContext, setActiveContext] = useState<ContextKey>('coding');
  const [intensity, setIntensity] = useState<IntensityKey>('balanced');
  const [interruption, setInterruption] = useState<InterruptionKey>('normal');
  const [frameIndex, setFrameIndex] = useState<number>(0);

  const scenario = scenarios[activeContext];
  const effectiveCooldownMinutes = Math.round(
    scenario.baseCooldownMinutes * intensityConfig[intensity].factor
  );

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
        statusLabel: 'SUPPRESSED',
        statusColor: 'text-[#ffadd8]',
        explanation: 'Focus mode active: visual bubbles strictly suppressed. Passive sprite only.',
      };
    }
    if (interruption === 'quiet') {
      return {
        permitted: false,
        statusLabel: 'RESTRAINED',
        statusColor: 'text-amber-400',
        explanation: 'Quiet timer active (30m): spontaneous dialogue bubbles are suppressed without queuing to protect concentration.',
      };
    }
    if (activeContext === 'secondary_monitor') {
      return {
        permitted: true,
        statusLabel: 'PRIORITY RELOCATION (8)',
        statusColor: 'text-[#f09acb]',
        explanation: 'Secondary monitor relocation triggers priority annoyance reaction asking to return to primary display.',
      };
    }
    if (activeContext === 'idle') {
      return {
        permitted: false,
        statusLabel: 'STANDBY',
        statusColor: 'text-primary-subtle',
        explanation: 'Operator absent: companion enters standby sleep without popping unnecessary thoughts.',
      };
    }
    return {
      permitted: true,
      statusLabel: 'PERMITTED (AMBIENT)',
      statusColor: 'text-[#f09acb]',
      explanation: 'Bubble permitted under current intensity rules. Non-blocking peripheral display.',
    };
  };

  const verdict = getInterruptionVerdict();

  // Frame image URL
  const paddedIndex = String(frameIndex).padStart(2, '0');
  const frameSrc = getAssetPath(`/case-studies/miko/frames/${scenario.moodFolder}/${paddedIndex}.png`);

  return (
    <div className="relative border border-white/[0.08] bg-surface font-mono">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] bg-background/60 p-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-[#f09acb]" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Context Lab / Browser-Side Behaviour Simulation
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-primary-subtle">
          <span>Source-Informed Simulation</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-[#f09acb]">Illustrative Runtime Policy Mirror</span>
        </div>
      </div>

      {/* Control Strip */}
      <div className="grid border-b border-white/[0.08] lg:grid-cols-12">
        {/* Context Selector Buttons */}
        <div className="p-4 sm:p-6 lg:col-span-8 lg:border-r lg:border-white/[0.08]">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-subtle">
            Select Simulated Context:
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
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
                  className={`min-h-[44px] flex items-center gap-2 border px-3.5 py-2 text-left text-xs sm:text-[13px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] ${
                    isSelected
                      ? 'border-[#f09acb] bg-[#f09acb]/10 text-primary font-medium'
                      : 'border-white/[0.08] bg-background/40 text-primary-muted hover:border-white/20 hover:text-primary'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`h-1.5 w-1.5 flex-shrink-0 ${
                      isSelected ? 'bg-[#f09acb]' : 'bg-white/30'
                    }`}
                  />
                  <span className="font-sans">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Policies: Intensity & Interruption */}
        <div className="grid gap-4 p-4 sm:p-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          {/* Behavior Intensity */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-primary-subtle">
                Behavior Intensity
              </span>
              <span className="text-[11px] uppercase text-[#f09acb] font-semibold">
                {intensity} ({intensityConfig[intensity].label})
              </span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {(['chill', 'balanced', 'expressive'] as IntensityKey[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={intensity === mode}
                  onClick={() => setIntensity(mode)}
                  className={`min-h-[44px] flex items-center justify-center border py-2 text-center text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                    intensity === mode
                      ? 'border-[#f09acb] bg-[#f09acb]/20 font-bold text-primary'
                      : 'border-white/[0.08] bg-background/30 text-primary-muted hover:border-white/20'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Interruption Policy */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-primary-subtle">
                Interruption Policy
              </span>
              <span className="text-[11px] uppercase text-[#ffadd8] font-semibold">{interruption}</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {(['normal', 'quiet', 'focus'] as InterruptionKey[]).map((policy) => (
                <button
                  key={policy}
                  type="button"
                  aria-pressed={interruption === policy}
                  onClick={() => setInterruption(policy)}
                  className={`min-h-[44px] flex items-center justify-center border py-2 text-center text-[10px] uppercase tracking-wider transition-colors ${
                    interruption === policy
                      ? 'border-[#ffadd8] bg-[#ffadd8]/20 font-bold text-primary'
                      : 'border-white/[0.08] bg-background/30 text-primary-muted hover:border-white/20'
                  }`}
                >
                  {policy}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Simulation Viewport & Telemetry Grid */}
      <div className="grid lg:grid-cols-12">
        {/* Center Miko Virtual Stage */}
        <div className="relative flex flex-col items-center justify-center border-b border-white/[0.08] bg-[#0c0d10] p-8 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-12">
          {/* Subtle Stage Grid */}
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
          <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/[0.08] bg-background/80 px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#f09acb]">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <span>State: {scenario.badge}</span>
          </div>

          {/* Companion Thought / Reaction Bubble */}
          <div
            role="status"
            aria-live="polite"
            className="relative z-10 mb-4 h-16 flex items-end justify-center"
          >
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
                  {/* Speech Pointer Tick */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-b border-r border-[#f09acb]/60 bg-background"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="silenced"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="text-[10px] uppercase tracking-widest text-primary-subtle"
                >
                  [Dialogue bubble restrained by {interruption} policy]
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MIKO Sprite Box */}
          <div className="relative z-10 flex h-48 w-48 items-center justify-center">
            {/* Ambient Ground Glow */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 h-6 w-32 bg-[#f09acb]/10 blur-md"
            />
            {/* The Authentic MIKO Pixel Art Frame */}
            <img
              src={frameSrc}
              alt={`MIKO companion in ${scenario.mood} mood`}
              width={192}
              height={208}
              className="h-44 w-auto object-contain select-none [image-rendering:pixelated]"
            />
          </div>

          {/* Stage Platform Ground Line */}
          <div className="relative z-10 mt-2 flex w-full max-w-xs items-center justify-between border-t border-white/20 pt-2 text-[9px] uppercase tracking-widest text-primary-subtle">
            <span>Sprite: {scenario.mood} (6f)</span>
            <span>Frame: 0{frameIndex + 1} / 06</span>
          </div>
        </div>

        {/* Right Telemetry & Reasoning Inspector */}
        <div className="space-y-5 p-6 lg:col-span-6 lg:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#f09acb]">
              Representative Event Trace
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase text-primary-subtle">
              Simulated Match: <strong className="text-primary">{scenario.confidence}</strong>
            </span>
          </div>

          {/* Sensor Inputs Readout */}
          <div className="space-y-2 text-xs sm:text-[13px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/[0.04]">
              <span className="text-[11px] uppercase text-primary-subtle">Foreground App</span>
              <span className="font-semibold text-primary">{scenario.foregroundProcess}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/[0.04]">
              <span className="text-[11px] uppercase text-primary-subtle">Window Title</span>
              <span className="text-primary-muted truncate max-w-xs">{scenario.windowTitle}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/[0.04]">
              <span className="text-[11px] uppercase text-primary-subtle">Audio Session</span>
              <span className="text-primary-muted">{scenario.audioState}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/[0.04]">
              <span className="text-[11px] uppercase text-primary-subtle">Win32 Input Idle</span>
              <span className="text-primary-muted">{scenario.idleTimer}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/[0.04]">
              <span className="text-[11px] uppercase text-primary-subtle">Browser Bridge</span>
              <span className="text-primary-muted truncate max-w-xs">{scenario.bridgeEvent}</span>
            </div>
          </div>

          {/* Interpretation / Reasoning */}
          <div className="border border-white/[0.08] bg-background/50 p-4">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#f09acb]">
              Local Evaluation Summary:
            </span>
            <p className="mt-1 font-sans text-xs sm:text-[13px] leading-relaxed text-primary-muted">
              {scenario.interpretation}
            </p>
            <div className="mt-3 flex flex-col gap-1 border-t border-white/[0.06] pt-2 text-[11px] text-primary-subtle">
              <div>
                <span className="text-primary-subtle">Decision Rationale: </span>
                <code className="text-accent text-[11px]">{scenario.winningRule}</code>
              </div>
            </div>
          </div>

          {/* Interruption Gate Verdict */}
          <div
            role="status"
            aria-live="polite"
            className="border border-white/[0.08] bg-background/50 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-primary-subtle">
                Interruption Gate Verdict
              </span>
              <span className={`text-[11px] font-bold uppercase tracking-wider ${verdict.statusColor}`}>
                {verdict.statusLabel}
              </span>
            </div>
            <p className="mt-2 font-sans text-xs sm:text-[13px] text-primary-muted">
              {verdict.explanation}
            </p>
            <div className="mt-3 flex flex-col gap-1 border-t border-white/[0.06] pt-2 text-[11px] text-primary-subtle">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span>Gate: <strong className="text-primary">{scenario.baseCooldownMinutes}m baseline</strong> &rarr; <strong className="text-accent">{effectiveCooldownMinutes}m ({intensity} {intensityConfig[intensity].label})</strong></span>
                <span>Repeat avoidance: 120–180m</span>
              </div>
              <p className="mt-1 text-[10px] text-primary-subtle italic">
                Source-informed simulation. Relative policy behavior mirrors MIKO&apos;s current runtime architecture; displayed contexts and values are illustrative rather than live telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Note */}
      <div className="border-t border-white/[0.08] bg-background/40 px-6 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-primary-subtle">
        <span>Architectural Pipeline: </span>
        <span className="text-primary">Context Signals &rarr; Local Arbitration &rarr; Mood Selection &rarr; Attention Policy &rarr; Peripheral Reaction</span>
      </div>
    </div>
  );
}
