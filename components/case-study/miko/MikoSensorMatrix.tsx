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
    api: 'Win32 GetForegroundWindow / ProcessId',
    samplingRate: 'Polled every 2.0s',
    privacyGuarantee: 'Only the active window title and process name are checked in RAM. Keystrokes, clipboard, and file contents are never accessed.',
    extractedSignals: [
      'Active process basename (e.g. Code.exe, chrome.exe)',
      'Foreground window title metadata',
      'System idle duration (ticks since last user input)',
    ],
    role: 'Identifies the primary workspace: code editor, terminal, browser, or idle desktop.',
  },
  {
    id: 'audio',
    name: 'Audio Session & Media API',
    api: 'Windows Media Transport & CoreAudio',
    samplingRate: 'Evaluated every 2.0s',
    privacyGuarantee: 'Reads peak volume levels and media playback metadata. Microphones and audio streams are never recorded or listened to.',
    extractedSignals: [
      'Per-process audio session peak levels',
      'Media transport metadata (artist, track title, playback state)',
      'Distinction between background music and foreground video',
    ],
    role: 'Differentiates quiet focus, background music, and active video streaming.',
  },
  {
    id: 'bridge',
    name: 'Browser Bridge & Extension',
    api: 'Local Extension over Loopback (127.0.0.1)',
    samplingRate: 'Event-driven on tab switch & focus',
    privacyGuarantee: 'Shares only tab title, domain, and media status locally. Page DOM content, passwords, and cookies are strictly excluded.',
    extractedSignals: [
      'Active tab domain and page title',
      'Audible tab and media playing indicators',
      'Token-authenticated local loopback messaging',
    ],
    role: 'Enriches browser context: tells reading technical docs apart from watching video tutorials.',
  },
  {
    id: 'heuristics',
    name: 'Arbitration & Cooldown Engine',
    api: 'Python Sidecar Loopback (127.0.0.1:50558)',
    samplingRate: 'Evaluated on context transition',
    privacyGuarantee: 'Runs entirely on-device with zero cloud telemetry. Optional AI features connect only to local user-configured endpoints.',
    extractedSignals: [
      'Priority scoring across competing signals (e.g. coding > music)',
      'Per-reaction cooldown gates (12–25 min intervals)',
      'Configurable repeat-suppression window (120–180 min)',
    ],
    role: 'Scores incoming signals, resolves conflicts, and prevents reaction spam.',
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
          Local-First Core &bull; No Built-In Remote Telemetry
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
                Underlying OS Mechanism
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
