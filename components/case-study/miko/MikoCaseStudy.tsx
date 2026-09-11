'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';
import { MikoContextLab } from './MikoContextLab';
import { MikoMoodShowcase } from './MikoMoodShowcase';
import { MikoSensorMatrix } from './MikoSensorMatrix';
import { MikoMemoryInspector } from './MikoMemoryInspector';

export function MikoCaseStudy() {
  const prefersReduced = useReducedMotion();

  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-[#f09acb] selection:text-background">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ACT 1: HERO */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-28 sm:pt-36 lg:px-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title & Overview */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
                Experimental &bull; Windows &bull; Local-First &bull; 2026
              </span>
              <span className="border border-[#f09acb]/30 bg-[#f09acb]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#ffadd8]">
                Prototype Runtime
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,8vw,7.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-primary">
              MIKO
            </h1>

            <p className="font-editorial text-2xl italic tracking-[-0.02em] text-[#f09acb] sm:text-3xl lg:text-4xl">
              A desktop companion that responds to context, not just prompts.
            </p>

            <p className="max-w-2xl font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
              MIKO is an experimental local-first desktop companion for Windows. Unlike prompt-first assistants, MIKO explores ambient interaction through local context, living quietly in your peripheral field of view, observing active engineering tasks, audio playback, and media sessions through low-overhead local OS hooks to express calm, context-aware reactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="#context-lab"
                className="group flex items-center gap-2 border border-[#f09acb] bg-[#f09acb] px-6 py-3.5 font-bold uppercase tracking-wider text-background transition-all hover:bg-[#ffadd8] hover:border-[#ffadd8]"
              >
                <span>Try Context Lab</span>
                <span className="transition-transform group-hover:translate-y-0.5">&darr;</span>
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 border border-white/20 bg-surface px-6 py-3.5 uppercase tracking-wider text-primary transition-colors hover:border-white/40 hover:text-white"
              >
                <span>Architecture</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Metadata Chips */}
            <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 font-mono text-xs sm:grid-cols-4">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Year</dt>
                <dd className="mt-1 font-semibold text-primary">2026</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Runtime</dt>
                <dd className="mt-1 font-semibold text-primary">Windows (PowerShell &bull; WPF)</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Core Engine</dt>
                <dd className="mt-1 font-semibold text-primary">Python Sidecar</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Palette</dt>
                <dd className="mt-1 font-semibold text-[#f09acb]">Miko Pink</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative border border-white/[0.08] bg-surface p-6 lg:col-span-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span>Persona Studio &bull; Representative Telemetry</span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#ffadd8]">
                127.0.0.1:50558
              </span>
            </div>

            <div className="relative my-6 flex flex-col items-center justify-center bg-[#0c0d10] p-8 border border-white/[0.06]">
              {/* Subtle Ambient Pulse */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#f09acb]/[0.03] opacity-60"
              />
              <img
                src={getAssetPath('/case-studies/miko/frames/coding/02.png')}
                alt="MIKO in focused review posture"
                width={192}
                height={208}
                className="relative z-10 h-36 w-auto object-contain [image-rendering:pixelated]"
              />
              <div className="relative z-10 mt-3 border border-[#f09acb]/40 bg-background/90 px-3 py-1 text-center font-mono text-xs font-semibold text-primary">
                &ldquo;checking the logic&rdquo;
              </div>
            </div>

            <div className="space-y-2 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-primary-muted">
              <div className="flex justify-between">
                <span className="text-primary-subtle">Primary Hook:</span>
                <span className="font-semibold text-primary">Foreground Window Process</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-subtle">Audio State:</span>
                <span className="text-accent">Active Output (Simulated)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-subtle">Interruption Mode:</span>
                <span className="text-[#f09acb]">Balanced Peripheral</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 2: DESIGNING FOR THE PERIPHERY */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              01 / Core Premise
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Designing for the Periphery
            </h2>
            <p className="font-editorial text-xl italic leading-snug text-primary-muted sm:text-2xl">
              &ldquo;Where prompt-first software requires explicit input, MIKO is designed for the periphery — staying quietly in your workspace until there is genuinely something to express.&rdquo;
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-white/[0.08] bg-surface p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    Continuous vs. Episodic
                  </h3>
                </div>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  While conversational assistants typically operate in episodic question-and-answer turns, MIKO maintains gentle continuous situational awareness through lightweight OS hooks, remaining present without requiring prompts.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#ffadd8]" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    Presence over Prompting
                  </h3>
                </div>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  Rather than interrupting your workflow with modal alerts or desktop toasts, MIKO speaks through subtle posture shifts: nodding to music, focusing during code reviews, or nodding off when you step away.
                </p>
              </div>
            </div>

            {/* Pullquote Banner */}
            <div className="border border-[#f09acb]/30 bg-[#f09acb]/[0.05] p-6 sm:p-8">
              <p className="font-display text-lg font-semibold uppercase tracking-tight text-primary sm:text-xl">
                A companion should fit into your workflow, not fight for your attention.
              </p>
              <span className="mt-2 block font-mono text-[10px] uppercase tracking-widest text-[#f09acb]">
                Design Directive &bull; Ambient Windows Companion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 3: MOOD SYSTEM */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            02 / Mood System
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            A Companion Has Moods
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO&apos;s personality is expressed through bespoke animated pixel spritesheets rather than generic avatar templates. Each mood corresponds to real desktop activities detected through local OS sensors:
          </p>
        </div>

        <MikoMoodShowcase />
      </section>

      {/* ACT 4: LOCAL CONTEXT SENSORS */}
      <section id="architecture" className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            03 / Local Sensors
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Local Context, Real Reactions
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO evaluates local operating system signals against an in-memory rule-scoring matrix to infer context. Built around a local-first core with no built-in remote telemetry; optional model integrations follow the user-configured endpoint:
          </p>
        </div>

        <MikoSensorMatrix />
      </section>

      {/* ACT 5: INTERACTIVE CONTEXT LAB */}
      <section id="context-lab" className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            04 / Interactive Context Lab
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Try Different Contexts
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            This browser-side simulation demonstrates MIKO&apos;s behavioral pipeline derived from the real runtime architecture. Select a simulated context and adjust intensity or attention policies to inspect how the companion evaluates signals:
          </p>
        </div>

        <MikoContextLab />
      </section>

      {/* ACT 6: PERSONA + MEMORY */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            05 / Persona &amp; Memory
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            More Than a Response
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO maintains an inspectable local memory file. Preferences, habit patterns, and notes accumulate locally over time with no built-in remote telemetry:
          </p>
        </div>

        <MikoMemoryInspector />
      </section>

      {/* ACT 7: DIAGNOSTICS & EXPLAINABILITY */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              06 / Diagnostics &amp; Explainability
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Inspectable Decisions
            </h2>
            <p className="font-sans text-base leading-relaxed text-primary-muted">
              A companion shouldn&apos;t be an opaque black box. Operators can inspect representative event traces, winning heuristic rules, and cooldown counters directly through Persona Studio.
            </p>
            <div className="border border-white/[0.08] bg-surface p-4 font-mono text-xs text-primary-subtle space-y-2">
              <div>&bull; Repeat avoidance prevents repeating identical lines within 120 minutes.</div>
              <div>&bull; Cooldown gate prevents reaction spam during rapid window switches.</div>
              <div>&bull; Strict boundary rules keep bubbles short and relevant.</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/[0.08] bg-surface p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[10px] uppercase tracking-wider text-primary-subtle">
                <span>Representative Event Trace</span>
                <span className="text-[#f09acb]">Simulated Log</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="border-b border-white/[0.04] pb-3">
                  <div className="flex justify-between text-[10px] text-primary-subtle">
                    <span>Sample Event &bull; Process Sensor</span>
                    <span className="text-[#f09acb]">Triggered</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Code.exe &rarr; coding mood</div>
                  <div className="text-[10px] text-primary-muted mt-0.5">Matched rule: activityRules.coding &bull; Cooldown gate: active (1200s)</div>
                </div>

                <div className="border-b border-white/[0.04] pb-3">
                  <div className="flex justify-between text-[10px] text-primary-subtle">
                    <span>Sample Event &bull; Audio Sensor</span>
                    <span className="text-amber-400">Restrained</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Spotify.exe &rarr; audible track detected</div>
                  <div className="text-[10px] text-primary-muted mt-0.5">Bubble suppressed by active coding priority &bull; Passive listening stance set</div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-primary-subtle">
                    <span>Sample Event &bull; Win32 Input Idle</span>
                    <span className="text-[#ffadd8]">Standby</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Inactivity &gt; 90s &rarr; sleepy mood</div>
                  <div className="text-[10px] text-primary-muted mt-0.5">Operator away &bull; Ambient standby posture without audio notifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 8: PRIVACY / LOCAL-FIRST DESIGN */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            07 / Architecture &amp; Privacy
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Designed for Your Machine
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            No built-in remote telemetry. Optional model integrations follow the user-configured endpoint:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 font-mono">
          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              01 / Local-First Core
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              127.0.0.1 Loopback
            </h3>
            <p className="font-sans text-xs leading-relaxed text-primary-muted">
              The local PowerShell WPF client and Python sidecar communicate over local loopback sockets. There is no built-in remote telemetry; optional model integrations follow the user-configured endpoint.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
              02 / Transient In-Memory Hooks
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              Strict Privacy Boundaries
            </h3>
            <p className="font-sans text-xs leading-relaxed text-primary-muted">
              Window titles and media metadata are read transiently in memory to infer context. Keystrokes, clipboard contents, and files are never read or stored.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ffadd8]">
              03 / User-Configured Endpoints
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              Optional AI Integrations
            </h3>
            <p className="font-sans text-xs leading-relaxed text-primary-muted">
              MIKO does not rely on an external LLM. If the user opts into model dialogue or vision, requests route exclusively to their own configured endpoint (such as local Ollama).
            </p>
          </div>
        </div>
      </section>

      {/* ACT 9: PROTOTYPE DOCUMENTATION */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            08 / Prototype Documentation
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Real Runtime Interfaces
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            Captured interfaces recorded from the working MIKO prototype in action on Windows 11:
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Awareness Controls Screenshot */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-white/[0.08] bg-surface p-2">
              <img
                src={getAssetPath('/case-studies/miko/persona_studio_awareness.png')}
                alt="Persona Studio Awareness & Privacy dashboard"
                className="w-full object-contain"
              />
            </div>
            <div className="font-mono text-[10px] text-primary-subtle flex justify-between">
              <span>Persona Studio // Awareness &amp; Privacy Controls</span>
              <span className="text-[#f09acb]">Sensor Toggles</span>
            </div>
          </div>

          {/* Memory Inspector Screenshot */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-white/[0.08] bg-surface p-2">
              <img
                src={getAssetPath('/case-studies/miko/persona_studio_memory_facts.png')}
                alt="Persona Studio Memory & Context inspection view"
                className="w-full object-contain"
              />
            </div>
            <div className="font-mono text-[10px] text-primary-subtle flex justify-between">
              <span>Persona Studio // Memory &amp; Learned Facts</span>
              <span className="text-[#f09acb]">Memory Weights</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 10: EXPERIMENTAL STATUS / ROADMAP */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              09 / Experimental Status
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Experimental by Design
            </h2>
            <p className="font-sans text-base leading-relaxed text-primary-muted">
              MIKO is an ongoing personal research project exploring how computing interfaces can provide calm companionship without requiring constant prompt interaction or disruptive notifications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 font-mono text-xs">
            <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#f09acb]">Current Status</span>
              <ul className="space-y-2 text-primary-muted">
                <li>&bull; Transparent WPF desktop shell with animated pixel sprite loop</li>
                <li>&bull; Python sidecar over 127.0.0.1 loopback for persona arbitration</li>
                <li>&bull; Windows Audio Session &amp; Media Transport integration</li>
                <li>&bull; Persona Studio interface for memory and privacy configuration</li>
              </ul>
            </div>

            <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-accent">Future Explorations</span>
              <ul className="space-y-2 text-primary-muted">
                <li>&bull; Packaging &amp; standalone installer distribution</li>
                <li>&bull; Easier onboarding &amp; browser bridge setup</li>
                <li>&bull; Refactoring large source modules for maintainability</li>
                <li>&bull; Voice improvements &amp; speech tuning</li>
                <li>&bull; Richer ambient behaviour &amp; multi-factor heuristics</li>
                <li>&bull; Broader real-world multi-monitor testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 11: CLOSING / FOOTER BANNER */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28">
        <SeamDivider className="mb-12" />

        <div className="border border-white/[0.08] bg-surface p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#f09acb]/40 bg-[#f09acb]/10">
                <span className="font-display text-xl font-bold text-[#f09acb]">M</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary sm:text-2xl">
                  Context-aware. Locally yours.
                </h3>
                <p className="font-sans text-xs text-primary-muted">
                  An ongoing exploration into calm, peripheral desktop computing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <Link
                href="/#work"
                className="border border-white/20 bg-background px-5 py-3 uppercase tracking-wider text-primary transition-colors hover:border-white/40"
              >
                &larr; Selected Work
              </Link>
              <Link
                href="/work/nyxboard"
                className="border border-[#f09acb]/40 bg-[#f09acb]/10 px-5 py-3 uppercase tracking-wider text-[#ffadd8] transition-colors hover:bg-[#f09acb]/20"
              >
                Nyxboard &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
