import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';
import { MikoContextLab } from './MikoContextLab';
import { MikoMoodShowcase } from './MikoMoodShowcase';
import { MikoSensorMatrix } from './MikoSensorMatrix';
import { MikoMemoryInspector } from './MikoMemoryInspector';

export function MikoCaseStudy() {
  return (
    <article className="relative min-h-screen overflow-hidden bg-background text-primary selection:bg-[#f09acb] selection:text-background">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ACT 1: HERO */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title & Overview */}
          <div className="space-y-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
                Experimental &bull; Windows &bull; Local-First &bull; 2026
              </span>
              <span className="border border-[#f09acb]/30 bg-[#f09acb]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#ffadd8]">
                Prototype Runtime
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <h1 className="font-display text-[clamp(3.25rem,8vw,7.8rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em] text-primary">
                MIKO
              </h1>
              {/* Mobile early companion presence */}
              <div className="flex flex-col items-center gap-1 border border-white/[0.08] bg-[#0c0d10] p-2 lg:hidden shrink-0">
                <img
                  src={getAssetPath('/case-studies/miko/frames/curious/00.png')}
                  alt="MIKO idle companion sprite"
                  className="h-14 w-auto object-contain [image-rendering:pixelated]"
                  width={64}
                  height={69}
                />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#f09acb]">
                  idle
                </span>
              </div>
            </div>

            <p className="max-w-xl font-editorial text-2xl italic leading-[1.05] tracking-[-0.02em] text-[#f09acb] sm:text-3xl lg:text-[2.65rem]">
              A desktop companion that responds to context, not just prompts.
            </p>

            <p className="max-w-xl font-sans text-[15px] leading-relaxed text-primary-muted sm:text-lg">
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
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Year</dt>
                <dd className="mt-1 font-semibold text-primary">2026</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Runtime</dt>
                <dd className="mt-1 font-semibold text-primary">Windows &bull; PowerShell / WPF</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Core Engine</dt>
                <dd className="mt-1 font-semibold text-primary">Python Sidecar</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Interaction</dt>
                <dd className="mt-1 font-semibold text-[#f09acb]">Peripheral / Ambient</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative border border-white/[0.08] bg-surface/80 p-6 lg:col-span-5 lg:-mt-8 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-subtle">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span>Persona Studio &bull; Representative Telemetry</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffadd8]">
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
                <span className="text-accent">Qualitative Active/Silent Detection</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-subtle">Behavior / Attention:</span>
                <span className="text-[#f09acb]">Balanced &bull; Normal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 2: DESIGNING FOR THE PERIPHERY */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-14" label="01 / premise" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              01 / Core Premise
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
              Designing for the Periphery
            </h2>
            <p className="font-editorial text-xl italic leading-snug text-primary-muted sm:text-2xl">
              &ldquo;Where prompt-first software requires explicit input, MIKO is designed for the periphery — staying quietly in your workspace until there is genuinely something to express.&rdquo;
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/[0.12] pt-5">
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

              <div className="border-t border-white/[0.12] pt-5">
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
            <div className="border-l-2 border-[#f09acb] bg-[#f09acb]/[0.045] px-6 py-5 sm:px-8 sm:py-6">
              <p className="max-w-2xl font-display text-xl font-semibold uppercase tracking-tight text-primary sm:text-2xl">
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
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            02 / Mood System
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            A Companion Has Moods
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO&apos;s personality is expressed through bespoke animated pixel spritesheets rather than generic avatar templates. Each mood corresponds to real desktop activities detected through local OS sensors:
          </p>
        </div>

        <MikoMoodShowcase />
      </section>

      {/* ACT 4: LOCAL CONTEXT SENSORS */}
      <section id="architecture" className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-14" label="03 / system" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            03 / Local Sensors
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            Local Context, Real Reactions
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO evaluates local operating system signals against an in-memory rule-scoring matrix to infer context. Built around a local-first core with no built-in remote telemetry; optional model integrations follow the user-configured endpoint:
          </p>
        </div>

        <MikoSensorMatrix />
      </section>

      {/* ACT 5: INTERACTIVE CONTEXT LAB */}
      <section id="context-lab" className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
            04 / Interactive Context Lab
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            Try Different Contexts
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            This browser-side simulation demonstrates MIKO&apos;s behavioral pipeline derived from the real runtime architecture. Select a simulated context and adjust intensity or attention policies to inspect how the companion evaluates signals:
          </p>
        </div>

        <MikoContextLab />
      </section>

      {/* ACT 6: PERSONA + MEMORY */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
            05 / Persona &amp; Memory
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            More Than a Response
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO maintains an inspectable local memory file. Preferences, habit patterns, and notes accumulate locally over time with no built-in remote telemetry:
          </p>
        </div>

        <MikoMemoryInspector />
      </section>

      {/* ACT 7: DIAGNOSTICS & EXPLAINABILITY */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-14" label="06 / proof" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
              06 / Diagnostics &amp; Explainability
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
              Inspectable Decisions
            </h2>
            <p className="font-sans text-base leading-relaxed text-primary-muted">
              A companion shouldn&apos;t be an opaque black box. Operators can inspect context signals, runtime state, reaction history, and representative decision traces through Persona Studio.
            </p>
            <div className="border-l border-white/[0.16] pl-4 font-mono text-xs sm:text-[13px] text-primary-subtle space-y-2">
              <div>&bull; Reaction-specific repeat suppression typically ranges from 120–180 minutes.</div>
              <div>&bull; Cooldown gate prevents reaction spam during rapid window switches.</div>
              <div>&bull; Strict boundary rules keep bubbles short and relevant.</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-y border-white/[0.08] py-6 font-mono text-xs sm:text-[13px]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[11px] uppercase tracking-wider text-primary-subtle">
                <span>Representative Event Trace</span>
                <span className="text-[#f09acb]">Simulated Log</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="border-b border-white/[0.04] pb-3">
                  <div className="flex justify-between text-[11px] text-primary-subtle">
                    <span>Sample Event &bull; Process Sensor</span>
                    <span className="text-[#f09acb]">Triggered</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Code.exe &rarr; coding mood</div>
                  <div className="text-[11px] text-primary-muted mt-0.5">Matched rule: activityRules.coding &bull; Cooldown gate: active (1200s)</div>
                </div>

                <div className="border-b border-white/[0.04] pb-3">
                  <div className="flex justify-between text-[11px] text-primary-subtle">
                    <span>Sample Event &bull; Audio Sensor</span>
                    <span className="text-amber-400">Restrained</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Spotify.exe &rarr; audible track detected</div>
                  <div className="text-[11px] text-primary-muted mt-0.5">Bubble suppressed by active coding priority &bull; Passive listening stance set</div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-primary-subtle">
                    <span>Sample Event &bull; Win32 Input Idle</span>
                    <span className="text-[#ffadd8]">Standby</span>
                  </div>
                  <div className="mt-1 font-semibold text-primary">Inactivity &gt; 90s &rarr; sleepy mood</div>
                  <div className="text-[11px] text-primary-muted mt-0.5">Operator away &bull; Ambient standby posture without audio notifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 8: PRIVACY / LOCAL-FIRST DESIGN */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="relative">
          <SeamDivider className="mb-14" label="07 / local-first" />
          {/* Subtle living system moment: peek sprite sitting quietly at seam */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-8 hidden sm:block select-none"
          >
            <img
              src={getAssetPath('/case-studies/miko/frames/curious/02.png')}
              alt=""
              className="h-9 w-auto object-contain [image-rendering:pixelated] opacity-75"
              width={36}
              height={39}
            />
          </div>
        </div>

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
            07 / Architecture &amp; Privacy
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            Designed for Your Machine
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            No built-in remote telemetry. Optional model integrations follow the user-configured endpoint:
          </p>
        </div>

        <div className="grid gap-0 border-y border-white/[0.08] sm:grid-cols-3 font-mono">
          <div className="space-y-3 px-0 py-6 sm:border-r sm:border-white/[0.08] sm:px-6 sm:py-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#f09acb]">
              01 / Local-First Core
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              127.0.0.1 Loopback
            </h3>
            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-primary-muted">
              The local PowerShell WPF client and Python sidecar communicate over local loopback sockets. There is no built-in remote telemetry; optional model integrations follow the user-configured endpoint.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/[0.08] px-0 py-6 sm:border-t-0 sm:border-r sm:border-white/[0.08] sm:px-6 sm:py-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
              02 / Transient In-Memory Hooks
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              Strict Privacy Boundaries
            </h3>
            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-primary-muted">
              Window titles and media metadata are read transiently in memory to infer context. Keystrokes, clipboard contents, and files are never read or stored.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/[0.08] px-0 py-6 sm:border-t-0 sm:px-6 sm:py-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#ffadd8]">
              03 / User-Configured Endpoints
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              Optional AI Integrations
            </h3>
            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-primary-muted">
              MIKO does not rely on an external LLM. If the user opts into model dialogue or vision, requests route exclusively to their own configured endpoint (such as local Ollama).
            </p>
          </div>
        </div>
      </section>

      {/* ACT 9: PROTOTYPE DOCUMENTATION */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
            08 / Prototype Documentation
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
            Real Runtime Interfaces
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            Captured interfaces recorded from the working MIKO prototype in action on Windows 11:
          </p>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Portrait Tray & Quick Controls */}
          <div className="space-y-3 lg:col-span-4">
            <div className="border-y border-white/[0.08] bg-[#0c0d10] p-4 flex items-center justify-center">
              <img
                src={getAssetPath('/case-studies/miko/miko_menu_expanded.png')}
                alt="MIKO desktop shell context menu"
                loading="lazy"
                decoding="async"
                className="max-h-[680px] w-auto object-contain"
              />
            </div>
            <div className="font-mono text-xs text-primary-subtle flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-primary font-medium">Desktop Shell // Tray &amp; Quick Controls</span>
              <span className="text-[#f09acb] uppercase tracking-wider text-[11px]">Win32 Shell Tray</span>
            </div>
            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              Compact native desktop tray offering immediate companion status, mode toggles, manual overrides, and diagnostics access.
            </p>
          </div>

          {/* Right Column: Persona Studio Suite (1 flagship + 2 companion captures) */}
          <div className="space-y-6 lg:col-span-8">
            {/* Flagship: Persona Studio Presence */}
            <div className="space-y-3">
              <div className="border-y border-white/[0.08] bg-[#0c0d10] p-3 flex items-center justify-center">
                <img
                  src={getAssetPath('/case-studies/miko/persona_studio_presence.png')}
                  alt="Persona Studio Presence & Behavior dashboard"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="font-mono text-xs text-primary-subtle flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-primary font-medium">Persona Studio // Presence &amp; Mood State</span>
                <span className="text-[#f09acb] uppercase tracking-wider text-[11px]">Flagship Interface</span>
              </div>
              <p className="font-sans text-xs text-primary-muted leading-relaxed">
                Primary control center showing live companion state, baseline behavior intensity, reaction limits, and focus policies.
              </p>
            </div>

            {/* Sub-grid: Awareness + Memory Side-by-Side */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Card 3: Awareness Controls */}
              <div className="space-y-3">
                <div className="border-y border-white/[0.08] bg-[#0c0d10] p-3 flex items-center justify-center">
                  <img
                    src={getAssetPath('/case-studies/miko/persona_studio_awareness.png')}
                    alt="Persona Studio Awareness & Privacy dashboard"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="font-mono text-xs text-primary-subtle flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-primary font-medium">Awareness &amp; Privacy</span>
                  <span className="text-[#f09acb] uppercase tracking-wider text-[11px]">Sensor Toggles</span>
                </div>
                <p className="font-sans text-xs text-primary-muted leading-relaxed">
                  Granular OS sensor toggles for active window, audio, and browser signals with in-memory boundaries.
                </p>
              </div>

              {/* Card 4: Memory Facts */}
              <div className="space-y-3">
                <div className="border-y border-white/[0.08] bg-[#0c0d10] p-3 flex items-center justify-center">
                  <img
                    src={getAssetPath('/case-studies/miko/persona_studio_memory_facts.png')}
                    alt="Persona Studio Memory & Context inspection view"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="font-mono text-xs text-primary-subtle flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-primary font-medium">Memory &amp; Learned Facts</span>
                  <span className="text-[#f09acb] uppercase tracking-wider text-[11px]">Local Memory</span>
                </div>
                <p className="font-sans text-xs text-primary-muted leading-relaxed">
                  Inspectable local memory ledger tracking taught preferences, habits, and confirmed workspace facts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 10: PROTOTYPE BOUNDARIES */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-14" label="09 / boundaries" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
              09 / Prototype Boundaries
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-5xl">
              Prototype Boundaries
            </h2>
            <p className="font-sans text-base leading-relaxed text-primary-muted">
              Operating at the operating system boundary introduces genuine architectural trade-offs. MIKO is authored as a transparent desktop prototype, prioritizing inspectability and local privacy over persistent deep background services.
            </p>
            <p className="border-l-2 border-[#f09acb]/60 pl-3 font-sans text-xs leading-relaxed text-primary-subtle">
              MIKO is an active experimental project. The current case study documents the working prototype as it exists today; architecture, interaction rules, and packaging may continue to evolve during development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 font-mono text-xs sm:text-[13px]">
            <div className="border-t border-white/[0.12] pt-5 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#f09acb]">Architectural Boundaries</span>
              <ul className="space-y-2 text-primary-muted">
                <li>&bull; Windows-specific Win32 and WPF desktop runtime (`powershell.exe` launcher)</li>
                <li>&bull; Local loopback arbitration (IPC between UI shell and Python sidecar on 127.0.0.1)</li>
                <li>&bull; Heuristic-first classification rather than continuous token streaming or heavy neural vision</li>
                <li>&bull; Lightweight 2.0s foreground activity polling with no built-in remote telemetry</li>
              </ul>
            </div>

            <div className="border-t border-white/[0.12] pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-accent">Future Explorations</span>
                <span className="text-[10px] uppercase tracking-wider text-primary-subtle">Exploratory</span>
              </div>
              <p className="text-xs leading-relaxed text-primary-subtle">
                These are directions currently being explored, not committed product promises:
              </p>
              <ul className="space-y-2 text-primary-muted">
                <li>&bull; Standalone single-binary packaging and distribution exploration</li>
                <li>&bull; Multi-monitor boundary and high-DPI scaling validation</li>
                <li>&bull; Streamlined browser-bridge setup and manifest installation</li>
                <li>&bull; Sidecar module refactoring for long-term maintainability</li>
                <li>&bull; Local voice synthesis and localized audio response tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 11: CLOSING / FOOTER BANNER */}
      <section className="relative mx-auto w-full max-w-[1320px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SeamDivider className="mb-14" />

        <div className="border border-white/[0.08] bg-surface p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#f09acb]/40 bg-[#f09acb]/10 p-1">
                <img
                  src={getAssetPath('/case-studies/miko/frames/sleepy/00.png')}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-auto object-contain [image-rendering:pixelated]"
                  width={48}
                  height={52}
                />
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
