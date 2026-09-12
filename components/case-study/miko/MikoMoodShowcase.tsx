import { getAssetPath } from '@/lib/assetPath';

interface MoodState {
  id: string;
  name: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
}

const representativeMoods: MoodState[] = [
  {
    id: 'coding',
    name: 'Coding / Focus',
    triggerCondition: 'When a code editor or terminal is in front, MIKO shifts into a more focused state.',
    dialoguePreview: '“checking the logic” · “review mode”',
    assetFile: '/case-studies/miko/miko-coding-row.png',
  },
  {
    id: 'watching',
    name: 'Watching / Media',
    triggerCondition: 'Video in the foreground puts her into a quieter spectator state.',
    dialoguePreview: '“movie mode” · “I’m watching too”',
    assetFile: '/case-studies/miko/miko-watching-row.png',
  },
  {
    id: 'curious',
    name: 'Curious / Browsing',
    triggerCondition: 'Research, documentation, or general browsing makes her more curious and reactive.',
    dialoguePreview: '“what are we reading?” · “new tab adventure”',
    assetFile: '/case-studies/miko/miko-curious-row.png',
  },
  {
    id: 'annoyed',
    name: 'Annoyed / Relocation',
    triggerCondition: 'Move her to another monitor or keep throwing windows around and she gets visibly annoyed.',
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
                  <h3 className="font-display text-[17px] font-bold uppercase tracking-tight text-primary sm:text-lg">
                    {mood.name}
                  </h3>
                </div>
                <p className="font-sans text-[15px] sm:text-base leading-relaxed text-primary-muted">
                  {mood.triggerCondition}
                </p>
                <div className="pt-1 font-mono text-[13px] sm:text-sm text-primary-subtle">
                  <span className="text-primary-subtle">Sample reaction: </span>
                  <span className="italic text-[#ffadd8]">{mood.dialoguePreview}</span>
                </div>
              </div>

              {/* 6-Frame Pixel Sprite Sequence */}
              <div className="overflow-x-auto pb-1 lg:col-span-7 lg:pb-0">
                <div className="inline-block min-w-[320px] w-full border border-white/[0.06] bg-[#0c0d10] p-3 sm:p-4">
                  <img
                    src={getAssetPath(mood.assetFile)}
                    alt={`${mood.name} custom 6-frame pixel animation sequence`}
                    loading="lazy"
                    width={1152}
                    height={208}
                    className="h-[92px] w-auto max-w-full object-contain select-none [image-rendering:pixelated]"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Atmospheric Note on Additional States */}
      <div className="border-t border-white/[0.08] pt-4 font-mono text-[13px] text-primary-subtle">
        <p className="text-primary-muted">
          These are only four examples. MIKO also has listening, idle, celebration, and standby states.
        </p>
      </div>
    </div>
  );
}
