import { getAssetPath } from '@/lib/assetPath';

interface FeaturedMood {
  id: string;
  name: string;
  category: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
}

interface SecondaryMood {
  id: string;
  name: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
}

const featuredMoods: FeaturedMood[] = [
  {
    id: 'coding',
    name: 'Coding / Review',
    category: 'Engineering Context',
    triggerCondition: 'Active code editor foregrounded (VS Code, Visual Studio, Windows Terminal) with low ambient audio.',
    dialoguePreview: '"checking the logic" · "review mode" · "focus focus"',
    assetFile: '/case-studies/miko/miko-coding-row.png',
  },
  {
    id: 'listening',
    name: 'Listening / Audio',
    category: 'Acoustic Rhythm',
    triggerCondition: 'Continuous background audio session detected (Spotify, music services) with active media playback.',
    dialoguePreview: '"hum hum hum" · "this beat is nice" · "tiny concert mode"',
    assetFile: '/case-studies/miko/miko-listening-row.png',
  },
  {
    id: 'watching',
    name: 'Watching / Media',
    category: 'Video Spectator',
    triggerCondition: 'Video streaming page active (YouTube, Twitch) or local video player in foreground.',
    dialoguePreview: '"movie mode" · "I am watching too" · "wait, this part"',
    assetFile: '/case-studies/miko/miko-watching-row.png',
  },
  {
    id: 'annoyed',
    name: 'Annoyed / Relocation',
    category: 'Disruption Stance',
    triggerCondition: 'Triggered by desktop relocation states such as moving MIKO to a secondary monitor, or by explicit/internal annoyed state.',
    dialoguePreview: '"wrong monitor" · "bring me back" · "hmph"',
    assetFile: '/case-studies/miko/miko-annoyed-row.png',
  },
];

const secondaryMoods: SecondaryMood[] = [
  {
    id: 'curious',
    name: 'Curious / Browsing',
    triggerCondition: 'Technical documentation, research papers, or exploratory browsing tabs.',
    dialoguePreview: '"what are we reading?" · "new tab adventure"',
    assetFile: '/case-studies/miko/miko-curious-row.png',
  },
  {
    id: 'sleepy',
    name: 'Sleepy / Standby',
    triggerCondition: 'User inactivity exceeds the configured Win32 idle threshold (idleThresholdSeconds: 90s).',
    dialoguePreview: '"still here" · "tiny standby mode"',
    assetFile: '/case-studies/miko/miko-sleepy-row.png',
  },
  {
    id: 'celebrating',
    name: 'Celebrating / Proud',
    triggerCondition: 'Personality or explicit mood state used for positive/achievement moments.',
    dialoguePreview: '"proud mode!" · "yay!" · "level up"',
    assetFile: '/case-studies/miko/miko-celebrating-row.png',
  },
];

export function MikoMoodShowcase() {
  return (
    <div className="space-y-6 font-mono">
      {/* Editorial Note */}
      <div className="border border-white/[0.08] bg-background/50 px-4 py-3 text-[11px] uppercase tracking-wider text-primary-subtle">
        <span>Design Architecture: </span>
        <span className="text-[#f09acb]">
          MIKO&apos;s visual moods can be driven by sensed desktop context, explicit user state, or internal companion state.
        </span>
      </div>

      {/* 4 Featured Context Moods */}
      <div className="space-y-4">
        {featuredMoods.map((mood) => (
          <div
            key={mood.id}
            className="border border-white/[0.08] bg-surface p-3.5 sm:p-5"
          >
            <div className="grid gap-3.5 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Mood Info */}
              <div className="space-y-1.5 lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#f09acb] flex-shrink-0" />
                  <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                    {mood.name}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f09acb]/80">
                    &bull; {mood.category}
                  </span>
                </div>
                <p className="text-xs text-primary-muted font-sans leading-relaxed">
                  {mood.triggerCondition}
                </p>
                <div className="pt-0.5 text-[11px] text-primary-subtle">
                  <span className="text-primary-subtle">Variants: </span>
                  <span className="italic text-[#ffadd8]">{mood.dialoguePreview}</span>
                </div>
              </div>

              {/* Right Column: Authentic 6-Frame Sprite Strip */}
              <div className="overflow-x-auto pb-1 lg:col-span-7 lg:pb-0">
                <div className="inline-block min-w-[320px] sm:min-w-[340px] border border-white/[0.06] bg-[#0c0d10] p-2">
                  <img
                    src={getAssetPath(mood.assetFile)}
                    alt={`${mood.name} 6-frame sprite strip`}
                    width={1152}
                    height={208}
                    loading="lazy"
                    decoding="async"
                    className="h-16 sm:h-20 w-auto object-contain select-none [image-rendering:pixelated]"
                  />
                  <div className="mt-1 flex items-center justify-between border-t border-white/[0.06] pt-1 text-[10px] uppercase tracking-wider text-primary-subtle">
                    <span>6-Frame Mood Sequence (192&times;208/cell)</span>
                    <span className="text-[#f09acb]">Authentic Pixel Asset</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Secondary Reference States */}
      <div className="border border-white/[0.08] bg-surface p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent" />
            <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              Secondary &amp; Lifecycle Mood Reference
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary-subtle">
            Compact Reference Strip
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {secondaryMoods.map((mood) => (
            <div
              key={mood.id}
              className="border border-white/[0.06] bg-background/40 p-3 space-y-1.5"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-sans text-xs font-semibold text-primary">{mood.name}</span>
                <span className="text-[11px] text-[#ffadd8] italic">{mood.dialoguePreview}</span>
              </div>
              <p className="font-sans text-[11px] sm:text-xs text-primary-muted leading-relaxed">
                {mood.triggerCondition}
              </p>
              <div className="border border-white/[0.04] bg-[#0c0d10] p-1.5 overflow-x-auto">
                <img
                  src={getAssetPath(mood.assetFile)}
                  alt={`${mood.name} reference strip`}
                  width={1152}
                  height={208}
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain select-none [image-rendering:pixelated]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movement Atlas Card */}
      <div className="border border-white/[0.08] bg-surface p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              Secondary Atlas &amp; Locomotion Map
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary-subtle">
            Desktop Movement States &bull; 10&times;10 Grid
          </span>
        </div>
        <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-primary-muted max-w-2xl">
          Beyond activity mood rows, MIKO maintains physical locomotion animations for desktop movement: wandering across taskbars, waving on double-click, crouching on idle, jumping, and secondary monitor relocation tantrums.
        </p>

        {/* Compact Teaser / Metadata Bar */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/[0.06] bg-[#0c0d10] px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-primary">Locomotion Preview:</span>
            <span className="text-primary-muted">100 frames &bull; wandering, jumping, idle crouch, tantrums</span>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f09acb]">
            1920&times;1920 Sprite Matrix
          </span>
        </div>

        {/* Progressive Disclosure (Desktop & Mobile) */}
        <details className="mt-3 group border border-white/[0.08] bg-background/50 p-3 sm:p-4">
          <summary className="cursor-pointer text-xs uppercase tracking-wider text-[#f09acb] font-semibold flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb]">
            <span className="flex items-center gap-2">
              <span>View Full 10&times;10 Locomotion Atlas</span>
              <span className="text-[10px] sm:text-[11px] text-primary-subtle font-normal lowercase tracking-normal">(expand high-resolution matrix)</span>
            </span>
            <span className="text-primary-subtle text-xs transition-transform duration-200 group-open:rotate-180">&darr;</span>
          </summary>
          <div className="mt-3 overflow-x-auto border border-white/[0.06] bg-[#0c0d10] p-3 sm:p-4">
            <img
              src={getAssetPath('/case-studies/miko/miko-spritesheet.png')}
              alt="MIKO primary sprite atlas showing locomotion animations"
              width={1920}
              height={1920}
              loading="lazy"
              decoding="async"
              className="max-h-72 sm:max-h-96 w-auto mx-auto object-contain select-none opacity-90 [image-rendering:pixelated]"
            />
          </div>
        </details>

        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-primary-subtle">
          <span>Atlas Format: 1920&times;1920 Full Sprite Matrix</span>
          <span className="text-[#f09acb]">WPF Animation Loop</span>
        </div>
      </div>
    </div>
  );
}
