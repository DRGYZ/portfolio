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
    samplingRate: 'Polled every 2.0s',
    privacyGuarantee: 'Only active window title and process name read in RAM. Keystrokes and clipboard never accessed.',
    extractedSignals: [
      'Active process basename (e.g. Code.exe, chrome.exe)',
      'Cleaned window title (filtered against blacklist)',
      'Win32 GetLastInputInfo operator idle ticks',
    ],
    role: 'Determines primary operator task: coding IDE, terminal, gaming client, or idle desktop.',
  },
  {
    id: 'audio',
    name: 'Audio Session & Media API',
    api: 'CoreAudio IAudioSessionControl2 + SystemMediaTransportControls',
    samplingRate: 'Peak level sampled every 1.5s',
    privacyGuarantee: 'Reads peak amplitude numeric scalar [0.0 - 1.0] and media track metadata. Audio content is never captured or recorded.',
    extractedSignals: [
      'Per-process audio peak levels',
      'SystemMediaTransportControls artist and track title',
      'Media playback state: Playing, Paused, Stopped',
    ],
    role: 'Distinguishes background music from video streaming and active gameplay audio.',
  },
  {
    id: 'bridge',
    name: 'Browser Bridge & UI Automation',
    api: 'Unpacked Manifest V3 Extension over 127.0.0.1 TCP Loopback',
    samplingRate: 'Event-driven on tab switch',
    privacyGuarantee: 'Evaluates domain category (docs, video, articles) via in-memory whitelist. Page DOM and cookies are strictly excluded.',
    extractedSignals: [
      'Tab classification tag (docs, media, general)',
      'Audible background tab flag',
      'UI Automation foreground control tree snapshot',
    ],
    role: 'Enriches browser context: recognizes when operator is browsing API documentation vs watching video.',
  },
  {
    id: 'heuristics',
    name: 'Arbitration & Cooldown Engine',
    api: 'Python Sidecar Loopback (127.0.0.1:50558) / WPF Heuristic Core',
    samplingRate: 'Evaluated on state change',
    privacyGuarantee: 'Runs completely offline. Optional user-configured model endpoints are disabled by default.',
    extractedSignals: [
      'Weighted heuristic score matrix',
      'Per-mode cooldown gates (15–30 min timer)',
      'Anti-repeat dialogue queue (avoids identical lines within 120 min)',
    ],
    role: 'Resolves conflicting signals, suppresses spam, and decides companion mood and reaction bubble.',
  },
];

export function MikoSensorMatrix() {
  const [activeTab, setActiveTab] = useState<string>('process');
  const selected = pipelines.find((p) => p.id === activeTab) ?? pipelines[0];

  return (
    <div className="border border-white/[0.08] bg-surface font-mono">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] bg-background/50 p-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#f09acb]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Local OS Sensor Pipelines
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-primary-subtle">
          100% In-Memory Evaluation &bull; Zero Remote Telemetry
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 border-b border-white/[0.08] sm:grid-cols-4">
        {pipelines.map((pipe) => {
          const isSelected = activeTab === pipe.id;
          return (
            <button
              key={pipe.id}
              type="button"
              onClick={() => setActiveTab(pipe.id)}
              className={`p-3 sm:p-4 text-left border-r last:border-r-0 border-white/[0.08] transition-colors ${
                isSelected
                  ? 'bg-[#f09acb]/10 border-b-2 border-b-[#f09acb] text-primary'
                  : 'bg-background/20 text-primary-muted hover:bg-background/40 hover:text-primary'
              }`}
            >
              <span className="block text-[9px] uppercase tracking-widest text-primary-subtle">
                {pipe.id.toUpperCase()}
              </span>
              <span className="mt-1 block font-sans text-xs font-semibold text-primary truncate">
                {pipe.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pipeline Detail */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column: API & Sampling */}
          <div className="space-y-4 lg:col-span-6">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#f09acb]">
                Underlying OS API / Mechanism
              </span>
              <p className="mt-1 text-sm font-semibold text-primary">
                <code>{selected.api}</code>
              </p>
            </div>

            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-primary-subtle">
                Sampling Rate &amp; Hook Type
              </span>
              <p className="mt-1 text-xs text-primary-muted">
                {selected.samplingRate}
              </p>
            </div>

            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-primary-subtle">
                Operational Purpose
              </span>
              <p className="mt-1 font-sans text-xs leading-relaxed text-primary-muted">
                {selected.role}
              </p>
            </div>
          </div>

          {/* Right Column: Signals & Privacy */}
          <div className="space-y-4 lg:col-span-6">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-accent">
                Extracted In-Memory Signals
              </span>
              <ul className="mt-2 space-y-1.5 text-xs text-primary-muted">
                {selected.extractedSignals.map((signal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#f09acb] select-none">&bull;</span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/[0.08] bg-background/50 p-4">
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#f09acb]">
                Privacy &amp; Security Boundary
              </span>
              <p className="mt-1 font-sans text-xs text-primary-subtle leading-relaxed">
                {selected.privacyGuarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
