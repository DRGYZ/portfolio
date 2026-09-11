import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';
import { MikoContextLab } from './MikoContextLab';
import { MikoMoodShowcase } from './MikoMoodShowcase';
import { MikoSensorMatrix } from './MikoSensorMatrix';
import { MikoMemoryInspector } from './MikoMemoryInspector';

const supportingCaptures = [
  {
    src: '/case-studies/miko/persona_studio_awareness.png',
    alt: 'Persona Studio awareness and privacy controls',
    label: 'Awareness & privacy',
    note: 'Granular local sensor boundaries',
  },
  {
    src: '/case-studies/miko/persona_studio_memory_facts.png',
    alt: 'Persona Studio memory and learned facts view',
    label: 'Memory & learned facts',
    note: 'Inspectable, operator-editable memory',
  },
];

export function MikoCaseStudy() {
  return (
    <article className="relative min-h-screen overflow-hidden bg-background text-primary selection:bg-[#f09acb] selection:text-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]" />

      {/* 01 — ARRIVAL */}
      <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1400px] items-center px-6 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          <div className="relative z-10 lg:col-span-8">
            <p className="mb-7 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f09acb] sm:text-[11px]">
              Experimental desktop companion · Windows · 2026
            </p>

            <div className="relative">
              <h1 className="font-display text-[clamp(5rem,16vw,13.5rem)] font-bold uppercase leading-[0.68] tracking-[-0.075em] text-primary">
                MIKO
              </h1>
              <img
                src={getAssetPath('/case-studies/miko/frames/curious/00.png')}
                alt="MIKO, a small pink desktop companion"
                width={192}
                height={208}
                className="absolute -right-2 -top-8 h-20 w-auto object-contain [image-rendering:pixelated] sm:-right-3 sm:-top-12 sm:h-28 lg:-right-8 lg:top-1/2 lg:h-36 lg:-translate-y-1/2"
              />
            </div>

            <p className="mt-9 max-w-2xl font-editorial text-[clamp(1.8rem,4vw,3.5rem)] italic leading-[0.98] tracking-[-0.025em] text-[#f09acb]">
              A desktop companion that responds to context, not just prompts.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-primary-muted sm:text-base">
              MIKO explores a quieter kind of computing: a local-first character that notices the rhythm of a Windows workspace and responds through posture, motion, and short reactions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              <a
                href="#context-lab"
                className="border border-[#f09acb] bg-[#f09acb] px-5 py-3 font-semibold text-background transition-colors hover:bg-[#ffadd8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffadd8] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Try the context lab ↓
              </a>
              <a
                href="#runtime-proof"
                className="border border-white/20 px-5 py-3 text-primary transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                See the prototype
              </a>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/[0.09] pt-5 font-mono text-[10px] uppercase tracking-[0.14em]">
              <div>
                <dt className="text-primary-subtle">Shell</dt>
                <dd className="mt-1 normal-case tracking-normal text-primary">PowerShell / WPF</dd>
              </div>
              <div>
                <dt className="text-primary-subtle">Engine</dt>
                <dd className="mt-1 normal-case tracking-normal text-primary">Python sidecar</dd>
              </div>
              <div>
                <dt className="text-primary-subtle">Mode</dt>
                <dd className="mt-1 normal-case tracking-normal text-primary">Peripheral / ambient</dd>
              </div>
              <div>
                <dt className="text-primary-subtle">State</dt>
                <dd className="mt-1 normal-case tracking-normal text-[#f09acb]">Working prototype</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 02 — PREMISE + PROOF */}
      <section id="runtime-proof" className="relative mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-16" label="01 / presence" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f09acb]">Core premise</p>
            <h2 className="mt-4 max-w-lg font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em]">
              Designed for the periphery.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-3xl font-editorial text-2xl italic leading-[1.08] text-primary-muted sm:text-3xl">
              Most assistants wait for a command. MIKO stays quietly present, then expresses only what the moment earns.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/[0.14] pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">01 · Continuous</span>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  Lightweight local signals give the companion situational awareness without turning every moment into a conversation.
                </p>
              </div>
              <div className="border-t border-white/[0.14] pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">02 · Restrained</span>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  Posture, timing, and short reactions create presence without competing with the work happening underneath.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:items-start">
          <figure className="lg:col-span-9">
            <div className="overflow-hidden border-y border-white/[0.1] bg-[#090a0c] p-3 sm:p-5">
              <img
                src={getAssetPath('/case-studies/miko/persona_studio_presence.png')}
                alt="Persona Studio showing MIKO presence and behavior controls"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 flex flex-col justify-between gap-2 border-b border-white/[0.07] pb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-subtle sm:flex-row">
              <span className="text-primary">Persona Studio · Presence & behavior</span>
              <span>Working Windows prototype</span>
            </figcaption>
          </figure>

          <figure className="relative lg:col-span-3 lg:mt-24">
            <div className="flex min-h-72 items-center justify-center overflow-hidden border-y border-white/[0.1] bg-[#090a0c] p-5">
              <img
                src={getAssetPath('/case-studies/miko/miko_menu_expanded.png')}
                alt="MIKO desktop shell tray menu"
                width={520}
                height={780}
                loading="lazy"
                decoding="async"
                className="max-h-[34rem] w-auto object-contain"
              />
            </div>
            <figcaption className="mt-4 border-b border-white/[0.07] pb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-subtle">
              <span className="text-primary">Desktop shell</span> · tray & quick controls
            </figcaption>
          </figure>
        </div>

        <details className="group mt-8 border-y border-white/[0.08] py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb] [&::-webkit-details-marker]:hidden">
            <span>Explore supporting prototype captures</span>
            <span className="text-[#f09acb] transition-transform group-open:rotate-45">＋</span>
          </summary>
          <div className="grid gap-7 pt-7 sm:grid-cols-2">
            {supportingCaptures.map((capture) => (
              <figure key={capture.src}>
                <div className="border-y border-white/[0.08] bg-[#090a0c] p-3">
                  <img
                    src={getAssetPath(capture.src)}
                    alt={capture.alt}
                    width={1200}
                    height={760}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-subtle">
                  <span className="text-primary">{capture.label}</span> · {capture.note}
                </figcaption>
              </figure>
            ))}
          </div>
        </details>
      </section>

      {/* 03 — PERSONALITY */}
      <section className="relative mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f09acb]">02 / personality</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em]">
              A companion has moods.
            </h2>
          </div>
          <p className="max-w-xl font-sans text-base leading-relaxed text-primary-muted lg:col-span-5 lg:col-start-8">
            MIKO&apos;s personality lives in hand-authored pixel animation. Each posture is a readable response to desktop context—not a generic avatar skin.
          </p>
        </div>

        <div className="mt-14">
          <MikoMoodShowcase />
        </div>
      </section>

      {/* 04 — INTERACTION */}
      <section id="context-lab" className="relative mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SeamDivider className="mb-16" label="03 / decision" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f09acb]">Interactive context lab</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em]">
              Context becomes character.
            </h2>
          </div>
          <p className="max-w-xl font-sans text-base leading-relaxed text-primary-muted lg:col-span-4 lg:col-start-9">
            Change the simulated situation and inspect how signal priority, attention policy, and cooldowns shape the reaction. The values are illustrative; the behavioral relationships mirror the current runtime.
          </p>
        </div>

        <div className="mt-14">
          <MikoContextLab />
        </div>

        <div className="mt-10 grid gap-px bg-white/[0.08] lg:grid-cols-2">
          <details className="group bg-background p-5 sm:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb] [&::-webkit-details-marker]:hidden">
              <span>Inspect local sensor architecture</span>
              <span className="text-[#f09acb] transition-transform group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-primary-muted">
              Foreground activity, audio state, media metadata, and idle time are evaluated locally through explicit privacy boundaries.
            </p>
            <div className="mt-7">
              <MikoSensorMatrix />
            </div>
          </details>

          <details className="group bg-background p-5 sm:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb] [&::-webkit-details-marker]:hidden">
              <span>Inspect local memory model</span>
              <span className="text-[#f09acb] transition-transform group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-primary-muted">
              Preferences and recurring habits remain visible, local, and editable rather than disappearing into an opaque profile.
            </p>
            <div className="mt-7">
              <MikoMemoryInspector />
            </div>
          </details>
        </div>
      </section>

      {/* 05 — BOUNDARIES + CLOSE */}
      <section className="relative mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f09acb]">04 / local-first</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em]">
              Designed for your machine.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="border-t border-white/[0.14] pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f09acb]">Local core</span>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  The WPF shell and Python sidecar communicate over local loopback. There is no built-in remote telemetry.
                </p>
              </div>
              <div className="border-t border-white/[0.14] pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f09acb]">Clear limits</span>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  Titles, processes, media state, and idle time are read in memory. Keystrokes, clipboard, and file contents are excluded.
                </p>
              </div>
              <div className="border-t border-white/[0.14] pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f09acb]">User choice</span>
                <p className="mt-3 font-sans text-sm leading-relaxed text-primary-muted">
                  Optional model features are off by default and follow the endpoint configured by the user, such as local Ollama.
                </p>
              </div>
            </div>

            <details className="group mt-10 border-y border-white/[0.08] py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb] [&::-webkit-details-marker]:hidden">
                <span>Prototype boundaries & future explorations</span>
                <span className="text-[#f09acb] transition-transform group-open:rotate-45">＋</span>
              </summary>
              <div className="grid gap-8 pt-7 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f09acb]">Current boundaries</h3>
                  <ul className="mt-4 space-y-2 font-sans text-sm leading-relaxed text-primary-muted">
                    <li>Windows-specific Win32 and WPF runtime</li>
                    <li>Heuristic-first classification and local loopback IPC</li>
                    <li>Lightweight foreground polling rather than persistent capture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f09acb]">Exploring next</h3>
                  <ul className="mt-4 space-y-2 font-sans text-sm leading-relaxed text-primary-muted">
                    <li>Standalone packaging and simpler setup</li>
                    <li>Multi-monitor and high-DPI validation</li>
                    <li>Sidecar refactoring and local voice tuning</li>
                  </ul>
                </div>
              </div>
              <p className="mt-7 border-l border-[#f09acb]/60 pl-4 font-sans text-xs leading-relaxed text-primary-subtle">
                MIKO is an active experimental project. This case study documents the working prototype as it exists today; architecture, interaction rules, and packaging may continue to evolve.
              </p>
            </details>
          </div>
        </div>

        <div className="relative mt-28 overflow-hidden border-y border-white/[0.1] py-10 sm:py-14">
          <div aria-hidden="true" className="absolute -right-5 bottom-0 font-display text-[clamp(7rem,21vw,19rem)] font-bold leading-[0.63] tracking-[-0.08em] text-white/[0.025]">
            MIKO
          </div>
          <div className="relative z-10 flex flex-col justify-between gap-9 sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <img
                src={getAssetPath('/case-studies/miko/frames/sleepy/00.png')}
                alt=""
                aria-hidden="true"
                width={96}
                height={104}
                className="h-16 w-auto object-contain [image-rendering:pixelated] sm:h-20"
              />
              <div>
                <p className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">Context-aware. Locally yours.</p>
                <p className="mt-2 max-w-lg font-sans text-sm text-primary-muted">An ongoing exploration into calm, peripheral desktop computing.</p>
              </div>
            </div>

            <nav aria-label="Case study navigation" className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.15em]">
              <Link href="/#work" className="border border-white/20 px-5 py-3 text-primary transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                ← Selected work
              </Link>
              <Link href="/work/nyxboard" className="border border-[#f09acb]/40 bg-[#f09acb]/[0.08] px-5 py-3 text-[#ffadd8] transition-colors hover:bg-[#f09acb]/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f09acb]">
                Nyxboard →
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
