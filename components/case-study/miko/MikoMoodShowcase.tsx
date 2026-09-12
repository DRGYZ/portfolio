import { getAssetPath } from '@/lib/assetPath';

interface MoodState {
  id: string;
  name: string;
  category: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
}

const representativeMoods: MoodState[] = [
  {
    id: 'coding',
    name: 'Coding / Focus',
    category: 'Engineering',
    triggerCondition: 'A code editor or terminal becomes the active foreground workspace.',
    dialoguePreview: '“checking the logic” · “review mode”',
    assetFile: '/case-studies/miko/miko-coding-row.png',
  },
  {
    id: 'watching',
    name: 'Watching / Media',
    category: 'Video Spectator',
    triggerCondition: 'Video streaming page active in browser or local media player in focus.',
    dialoguePreview: '“movie mode” · “I am watching too”',
    assetFile: '/case-studies/miko/miko-watching-row.png',
  },
  {
    id: 'curious',
    name: 'Curious / Browsing',
    category: 'Exploration',
    triggerCondition: 'Research, technical documentation, or exploratory browsing is active.',
    dialoguePreview: '“what are we reading?” · “new tab adventure”',
    assetFile: '/case-studies/miko/miko-curious-row.png',
  },
  {
    id: 'annoyed',
    name: 'Annoyed / Relocation',
    category: 'Disruption Stance',
    triggerCondition: 'MIKO is moved to an auxiliary screen or experiences rapid window thrashing.',
    dialoguePreview: '“wrong monitor” · “bring me back”',
    assetFile: '/case-studies/miko/miko-annoyed-row.png',
  },
];

export function MikoMoodShowcase() {
  return (
    <div className="space-y-6">
      {/* 4 Curated Representative Mood Cards */}
      <div className="grid gap-4 sm:gap-6">
        {representativeMoods.map((mood) => (
          <article
            key={mood.id}
            className="border border-white/[0.08] bg-surface p-5 sm:p-6 transition-colors hover:border-white/15"
          >
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              {/* Mood Description */}
              <div className="space-y-2 lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#f09acb]" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary sm:text-lg">
                    {mood.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#f09acb]">
                    [{mood.category}]
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-primary-muted">
                  {mood.triggerCondition}
                </p>
                <div className="pt-1 font-mono text-xs text-primary-subtle">
                  <span className="text-primary-subtle">Sample reaction: </span>
                  <span className="italic text-[#ffadd8]">{mood.dialoguePreview}</span>
                </div>
              </div>

              {/* 6-Frame Pixel Sprite Sequence */}
              <div className="overflow-x-auto pb-1 lg:col-span-7 lg:pb-0">
                <div className="inline-block min-w-[320px] w-full border border-white/[0.06] bg-[#0c0d10] p-3">
                  <img
                    src={getAssetPath(mood.assetFile)}
                    alt={`${mood.name} hand-authored 6-frame pixel animation sequence`}
                    loading="lazy"
                    width={1152}
                    height={208}
                    className="h-20 w-auto max-w-full object-contain select-none [image-rendering:pixelated]"
                  />
                  <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-1.5 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                    <span>6-Frame Authored Posture (192&times;208 / cell)</span>
                    <span className="text-[#f09acb]">Pixel Asset</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Atmospheric Note on Additional States */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/[0.08] pt-4 font-mono text-xs text-primary-subtle">
        <p className="text-primary-muted">
          Additional listening, idle, celebration, and standby states extend the system.
        </p>
        <span className="text-[10px] uppercase tracking-widest text-[#f09acb]">
          Authored Character States · WPF Transparent Canvas
        </span>
      </div>
    </div>
  );
}
