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
    triggerCondition: 'Moved to secondary monitor, chaotic task switching, or rapid conflicting app pivots.',
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
    triggerCondition: 'Inactivity threshold exceeded (Win32 input idle > 90s) or late-night circadian hours.',
    dialoguePreview: '"still here" · "tiny standby mode"',
    assetFile: '/case-studies/miko/miko-sleepy-row.png',
  },
  {
    id: 'celebrating',
    name: 'Celebrating / Proud',
    triggerCondition: 'Personality or explicit mood state used for positive/achievement moments.',
    dialoguePreview: '"proud mode!" · "clean build"',
    assetFile: '/case-studies/miko/miko-celebrating-row.png',
  },
];

export function MikoMoodShowcase() {
  return (
    <div className="space-y-6 font-mono">
      {/* Editorial Note */}
      <div className="border border-white/[0.08] bg-background/50 px-4 py-3 text-[10px] uppercase tracking-wider text-primary-subtle">
        <span>Design Architecture: </span>
        <span className="text-[#f09acb]">
          Visual moods are driven by sensed context, user interaction, or internal state.
        </span>
      </div>

      {/* 4 Featured Context Moods */}
      <div className="space-y-4">
        {featuredMoods.map((mood) => (
          <div
            key={mood.id}
            className="border border-white/[0.08] bg-surface p-4 sm:p-5"
          >
            <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Mood Info */}
              <div className="space-y-1.5 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#f09acb] flex-shrink-0" />
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">
                    {mood.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#f09acb]/80">
                    &bull; {mood.category}
                  </span>
                </div>
                <p className="text-xs text-primary-muted font-sans leading-relaxed">
                  {mood.triggerCondition}
                </p>
                <div className="pt-1 text-[10px] text-primary-subtle">
                  <span className="text-primary-subtle">Variants: </span>
                  <span className="italic text-[#ffadd8]">{mood.dialoguePreview}</span>
                </div>
              </div>

              {/* Right Column: Authentic 6-Frame Sprite Strip */}
              <div className="overflow-x-auto pb-2 lg:col-span-7 lg:pb-0">
                <div className="inline-block min-w-[340px] border border-white/[0.06] bg-[#0c0d10] p-2">
                  <img
                    src={getAssetPath(mood.assetFile)}
                    alt={`${mood.name} 6-frame sprite strip`}
                    width={1152}
                    height={208}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-auto object-contain select-none [image-rendering:pixelated]"
                  />
                  <div className="mt-1 flex items-center justify-between border-t border-white/[0.06] pt-1 text-[8px] uppercase tracking-widest text-primary-subtle">
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
      <div className="border border-white/[0.08] bg-surface p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent" />
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
              Secondary &amp; Lifecycle Mood Reference
            </h3>
          </div>
          <span className="text-[9px] uppercase tracking-wider text-primary-subtle">
            Compact Reference Strip
          </span>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {secondaryMoods.map((mood) => (
            <div
              key={mood.id}
              className="border border-white/[0.06] bg-background/40 p-3 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-primary">{mood.name}</span>
                <span className="text-[9px] text-[#ffadd8] italic">{mood.dialoguePreview}</span>
              </div>
              <p className="font-sans text-[11px] text-primary-muted leading-relaxed">
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
                  className="h-12 w-auto object-contain select-none [image-rendering:pixelated]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movement Atlas Card */}
      <div className="border border-white/[0.08] bg-surface p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">
              Secondary Atlas &amp; Locomotion Map
            </h3>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-primary-subtle">
            Desktop Movement States &bull; 10&times;10 Grid
          </span>
        </div>
        <p className="mt-3 font-sans text-xs leading-relaxed text-primary-muted max-w-2xl">
          Beyond activity mood rows, MIKO maintains physical locomotion animations for desktop movement: wandering across taskbars, waving on double-click, crouching on idle, jumping, and secondary monitor relocation tantrums.
        </p>

        <div className="mt-6 overflow-x-auto border border-white/[0.06] bg-[#0c0d10] p-4">
          <img
            src={getAssetPath('/case-studies/miko/miko-spritesheet.png')}
            alt="MIKO primary sprite atlas showing locomotion animations"
            width={1920}
            height={1920}
            loading="lazy"
            decoding="async"
            className="max-h-72 w-auto object-contain select-none opacity-90 [image-rendering:pixelated]"
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[9px] uppercase tracking-wider text-primary-subtle">
          <span>Atlas Format: 1920&times;1920 Full Sprite Matrix</span>
          <span className="text-[#f09acb]">WPF Animation Loop</span>
        </div>
      </div>
    </div>
  );
}
