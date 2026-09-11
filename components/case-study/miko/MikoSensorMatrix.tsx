'use client';

import { useState } from 'react';

interface SensorPipeline {
  id: string;
  name: string;
  api: string;
  samplingRate: string;
  privacyGuarantee: string;
  extractedSignals: string[];
  role: string;
}

const pipelines: SensorPipeline[] = [
  {
    id: 'process',
    name: 'Window & Process Hooks',
    api: 'Win32 GetForegroundWindow / GetWindowThreadProcessId',
    samplingRate: 'Polled on 2.0s foreground loop',
    privacyGuarantee: 'Only active window title and process name are read in RAM to infer task context. Keystrokes, clipboard, and source-file contents are never captured.',
    extractedSignals: [
      'Active process basename (e.g. Code.exe, chrome.exe)',
      'Foreground window title metadata',
      'Win32 GetLastInputInfo operator idle ticks (90s default threshold)',
    ],
    role: 'Determines primary operator task: coding IDE, terminal, gaming client, or idle desktop.',
  },
  {
    id: 'audio',
    name: 'Audio Session & Media API',
    api: 'GlobalSystemMediaTransportControlsSessionManager + CoreAudio WASAPI',
    samplingRate: 'Evaluated on foreground activity loop (2.0s interval)',
    privacyGuarantee: 'Reads audio session peak volume scalar and media transport metadata. Raw audio is never recorded or streamed.',
    extractedSignals: [
      'Per-process audio session peak levels',
      'Windows Media Session artist, track title, and playback status',
      'Distinguishes background music from video and foreground audio',
    ],
    role: 'Distinguishes background music from video streaming and active foreground audio sessions.',
  },
  {
    id: 'bridge',
    name: 'Browser Bridge & UI Automation',
    api: 'Unpacked Manifest V3 Extension over 127.0.0.1 Loopback (Port 50557)',
    samplingRate: 'Event-driven on tab activation, relevant tab metadata changes and browser-window focus',
    privacyGuarantee: 'Posts title, host, audible, muted, active, and media-likelihood metadata locally using a generated loopback token. DOM content and cookies are strictly excluded.',
    extractedSignals: [
      'Active tab host and page title',
      'Audible tab and media playing indicators',
      'Foreground UI Automation element properties (Name, ClassName, FrameworkId, ControlType)',
    ],
    role: 'Enriches browser context: recognizes when operator is browsing API documentation vs watching video.',
  },
  {
    id: 'heuristics',
    name: 'Arbitration & Cooldown Engine',
    api: 'Python Sidecar Loopback (127.0.0.1:50558) / WPF Heuristic Core',
    samplingRate: 'Evaluated on state transition',
    privacyGuarantee: 'Local-first core with no built-in remote telemetry. Optional model features are disabled by default and follow user-configured endpoints.',
    extractedSignals: [
      'Heuristic arbitration across window, media, audio, and browser signals',
      'Per-reaction cooldown gates (commonly 12–25 min by behaviour)',
      'Configurable repeat-suppression window (commonly 120–180 min)',
    ],
    role: 'Resolves conflicting signals, suppresses spam, and decides companion mood and reaction bubble.',
  },
];

export function MikoSensorMatrix() {
  const [activeTab, setActiveTab] = useState<string>('process');
  const selected = pipelines.find((p) => p.id === activeTab) ?? pipelines[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % pipelines.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + pipelines.length) % pipelines.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = pipelines.length - 1;
    } else {
      return;
    }
    const nextId = pipelines[nextIndex].id;
    setActiveTab(nextId);
    const btn = document.getElementById(`sensor-tab-${nextId}`);
    btn?.focus();
  };

  return (
    <div className="border border-white/[0.08] bg-surface font-mono">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] bg-background/50 p-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#f09acb]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Local OS Sensor Pipelines
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary-subtle">
          Local-First Core &bull; No Built-In Remote Telemetry
        </span>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Local OS sensor pipelines"
        className="grid grid-cols-2 border-b border-white/[0.08] sm:grid-cols-4"
      >
        {pipelines.map((pipe, idx) => {
          const isSelected = activeTab === pipe.id;
          return (
            <button
              key={pipe.id}
              role="tab"
              id={`sensor-tab-${pipe.id}`}
              aria-selected={isSelected}
              aria-controls={`sensor-panel-${pipe.id}`}
              tabIndex={isSelected ? 0 : -1}
              type="button"
              onClick={() => setActiveTab(pipe.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`p-3 sm:p-4 text-left border-r last:border-r-0 border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] ${
                isSelected
                  ? 'bg-[#f09acb]/10 border-b-2 border-b-[#f09acb] text-primary'
                  : 'bg-background/20 text-primary-muted hover:bg-background/40 hover:text-primary'
              }`}
            >
              <span className="block text-[10px] uppercase tracking-widest text-primary-subtle">
                {pipe.id.toUpperCase()}
              </span>
              <span className="mt-1 block font-sans text-xs sm:text-sm font-semibold text-primary truncate">
                {pipe.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pipeline Detail */}
      <div
        role="tabpanel"
        id={`sensor-panel-${selected.id}`}
        aria-labelledby={`sensor-tab-${selected.id}`}
        className="p-6 sm:p-8 space-y-6"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column: API & Sampling */}
          <div className="space-y-4 lg:col-span-6">
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#f09acb]">
                Underlying OS API / Mechanism
              </span>
              <p className="mt-1 text-sm font-semibold text-primary">
                <code>{selected.api}</code>
              </p>
            </div>

            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-primary-subtle">
                Sampling Rate &amp; Hook Type
              </span>
              <p className="mt-1 text-xs sm:text-[13px] text-primary-muted">
                {selected.samplingRate}
              </p>
            </div>

            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-primary-subtle">
                Operational Purpose
              </span>
              <p className="mt-1 font-sans text-xs sm:text-[13px] leading-relaxed text-primary-muted">
                {selected.role}
              </p>
            </div>
          </div>

          {/* Right Column: Signals & Privacy */}
          <div className="space-y-4 lg:col-span-6">
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-accent">
                Extracted In-Memory Signals
              </span>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-[13px] text-primary-muted">
                {selected.extractedSignals.map((signal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#f09acb] select-none">&bull;</span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/[0.08] bg-background/50 p-4">
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#f09acb]">
                Privacy &amp; Security Boundary
              </span>
              <p className="mt-1 font-sans text-xs sm:text-[13px] text-primary-subtle leading-relaxed">
                {selected.privacyGuarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
