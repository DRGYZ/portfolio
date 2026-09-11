'use client';

import { useState } from 'react';

interface MemoryItem {
  id: string;
  fact: string;
  source: string;
  confidence: string;
  confirmation: string;
  category: string;
  badge: string;
  badgeColor: string;
}

const sanitisedFacts: MemoryItem[] = [
  {
    id: '1',
    fact: 'Prefers dark themes, concise comments, and local models.',
    source: 'persona-studio',
    confidence: '0.84 (preference)',
    confirmation: 'Confirmed 3x',
    category: 'User Preference',
    badge: 'Taught by User',
    badgeColor: 'text-[#f09acb] border-[#f09acb]/40 bg-[#f09acb]/10',
  },
  {
    id: '2',
    fact: 'Works primarily in VS Code and PowerShell on Windows.',
    source: 'desktop-menu',
    confidence: '0.90 (explicit)',
    confirmation: 'Confirmed 2x',
    category: 'Environment',
    badge: 'Taught by User',
    badgeColor: 'text-[#f09acb] border-[#f09acb]/40 bg-[#f09acb]/10',
  },
  {
    id: '3',
    fact: 'Listens to lo-fi hip hop and instrumental tracks while coding.',
    source: 'audio-routine',
    confidence: '0.66 (inferred)',
    confirmation: 'Confirmed 5x',
    category: 'Acoustic Habit',
    badge: 'Inferred / Detected',
    badgeColor: 'text-accent border-accent/40 bg-accent/10',
  },
  {
    id: '4',
    fact: 'Frequent late-night engineering sessions detected.',
    source: 'circadian-heuristic',
    confidence: '0.58 (session)',
    confirmation: 'Confirmed 1x',
    category: 'Work Routine',
    badge: 'Stored Pattern',
    badgeColor: 'text-primary-subtle border-white/20 bg-white/5',
  },
];

const personaJsonSnippet = `{
  "name": "Miko",
  "style": {
    "tone": "cute, observant, slightly dramatic, local-first",
    "boundaries": [
      "Keep reactions short enough for a desktop pet bubble.",
      "React to what the user is doing without interrupting too often.",
      "Prefer playful body language and brief comments over long speeches."
    ]
  },
  "activityReactions": {
    "coding": {
      "reactionId": "coding_focus",
      "mood": "coding",
      "priority": 7,
      "cooldownMinutes": 20,
      "maxPerDay": 4,
      "avoidRepeatWithinMinutes": 120,
      "variants": ["review mode", "checking the logic", "focus focus"]
    },
    "music": {
      "reactionId": "music_vibe",
      "mood": "listening",
      "priority": 6,
      "cooldownMinutes": 20,
      "avoidRepeatWithinMinutes": 120,
      "variants": ["hum hum hum", "this beat is nice", "tiny concert mode"]
    }
  }
}`;

const confidenceLadder = [
  { level: 'explicit', weight: '0.90', desc: 'Directly taught by operator via menu/prompt' },
  { level: 'preference', weight: '0.84', desc: 'Confirmed preference or saved setting' },
  { level: 'project', weight: '0.78', desc: 'Active workspace or repository context' },
  { level: 'inferred', weight: '0.66', desc: 'Observed activity pattern or acoustic habit' },
  { level: 'default', weight: '0.62', desc: 'Fallback heuristic confidence' },
  { level: 'session', weight: '0.58', desc: 'Ephemeral runtime session context' },
  { level: 'temporary', weight: '0.45', desc: 'Transient scratch observation' },
];

export function MikoMemoryInspector() {
  const [viewMode, setViewMode] = useState<'facts' | 'persona'>('facts');

  const handleKeyDown = (e: React.KeyboardEvent, currentMode: 'facts' | 'persona') => {
    let nextMode = currentMode;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextMode = currentMode === 'facts' ? 'persona' : 'facts';
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextMode = 'facts';
    } else if (e.key === 'End') {
      e.preventDefault();
      nextMode = 'persona';
    } else {
      return;
    }
    setViewMode(nextMode);
    const btn = document.getElementById(`tab-${nextMode}`);
    btn?.focus();
  };

  return (
    <div className="border border-white/[0.08] bg-surface font-mono">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] bg-background/50 p-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#f09acb]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Inspectable Local Memory &amp; Persona Model
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Memory Inspector Views"
          className="flex items-center gap-2"
        >
          <button
            id="tab-facts"
            type="button"
            role="tab"
            aria-selected={viewMode === 'facts'}
            aria-controls="panel-facts"
            tabIndex={viewMode === 'facts' ? 0 : -1}
            onClick={() => setViewMode('facts')}
            onKeyDown={(e) => handleKeyDown(e, 'facts')}
            className={`min-h-[44px] px-3 py-2 text-[10px] uppercase tracking-wider border transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] ${
              viewMode === 'facts'
                ? 'border-[#f09acb] bg-[#f09acb]/10 text-primary font-bold'
                : 'border-white/[0.08] text-primary-muted hover:border-white/20'
            }`}
          >
            Learned Facts (UI)
          </button>
          <button
            id="tab-persona"
            type="button"
            role="tab"
            aria-selected={viewMode === 'persona'}
            aria-controls="panel-persona"
            tabIndex={viewMode === 'persona' ? 0 : -1}
            onClick={() => setViewMode('persona')}
            onKeyDown={(e) => handleKeyDown(e, 'persona')}
            className={`min-h-[44px] px-3 py-2 text-[10px] uppercase tracking-wider border transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb] ${
              viewMode === 'persona'
                ? 'border-[#f09acb] bg-[#f09acb]/10 text-primary font-bold'
                : 'border-white/[0.08] text-primary-muted hover:border-white/20'
            }`}
          >
            persona.json (Source)
          </button>
        </div>
      </div>

      {viewMode === 'facts' ? (
        <div
          id="panel-facts"
          role="tabpanel"
          aria-labelledby="tab-facts"
          className="p-6 sm:p-8 space-y-6"
        >
          <p className="text-xs font-sans text-primary-muted leading-relaxed max-w-2xl">
            MIKO accumulates gentle facts and habits over time. Operator preferences can be explicitly taught through the desktop menu or inferred by local recurring routine heuristics. All entries remain strictly local and operator-editable.
          </p>

          <div className="space-y-3">
            {sanitisedFacts.map((item) => (
              <div
                key={item.id}
                className="border border-white/[0.06] bg-background/40 p-4 transition-colors hover:border-white/15"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[10px] uppercase text-primary-subtle">
                      &bull; {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[9px] text-primary-subtle">
                    <span>Source: <code>{item.source}</code></span>
                    <span>Weight: <strong className="text-accent">{item.confidence}</strong></span>
                    <span>{item.confirmation}</span>
                  </div>
                </div>
                <p className="mt-2.5 font-sans text-sm font-medium text-primary">
                  &ldquo;{item.fact}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Confidence Ladder Strip */}
          <div className="border border-white/[0.08] bg-background/30 p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#f09acb] font-bold">
                Memory Confidence Ladder
              </span>
              <span className="text-[9px] text-primary-subtle font-mono">
                Source: <code>sidecar/miko_sidecar_lib/constants.py</code>
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-1 text-[10px]">
              {confidenceLadder.map((tier) => (
                <div key={tier.level} className="border border-white/[0.06] bg-surface p-2.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#f09acb] uppercase font-bold">{tier.level}</span>
                    <span className="text-accent font-semibold">{tier.weight}</span>
                  </div>
                  <p className="text-[9px] font-sans text-primary-subtle leading-tight">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[9px] uppercase tracking-wider text-primary-subtle border-t border-white/[0.06]">
            <span>Storage: <code>miko-memory.json</code> (Local JSON Schema)</span>
            <span className="text-[#f09acb]">Sanitised Representative Data &bull; Configured Weights</span>
          </div>
        </div>
      ) : (
        <div
          id="panel-persona"
          role="tabpanel"
          aria-labelledby="tab-persona"
          className="p-6 sm:p-8 space-y-4"
        >
          <p className="text-xs font-sans text-primary-muted leading-relaxed">
            The Python sidecar references <code>persona.json</code> to enforce priority levels, maximum reactions per day, and repeat suppression intervals:
          </p>
          <div className="border border-white/[0.08] bg-[#0c0d10] p-4 text-xs overflow-x-auto text-[#e3e2e2]">
            <pre className="font-mono text-[11px] leading-relaxed">
              <code>{personaJsonSnippet}</code>
            </pre>
          </div>
          <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-primary-subtle">
            <span>Schema: Persona Boundaries &amp; Cooldown Gates</span>
            <span className="text-[#f09acb]">Human-Editable Configuration</span>
          </div>
        </div>
      )}
    </div>
  );
}
