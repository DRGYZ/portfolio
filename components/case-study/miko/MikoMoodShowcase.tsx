'use client';

import { useState } from 'react';
import { getAssetPath } from '@/lib/assetPath';

interface MoodRowData {
  id: string;
  name: string;
  category: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
  frameCount: number;
}

const moodRows: MoodRowData[] = [
  {
    id: 'coding',
    name: 'Coding / Review',
    category: 'Focus',
    triggerCondition: 'A code editor or terminal becomes the active workspace.',
    dialoguePreview: '"checking the logic" · "review mode" · "focus focus"',
    assetFile: '/case-studies/miko/miko-coding-row.png',
    frameCount: 6,
  },
  {
    id: 'listening',
    name: 'Listening / Audio',
    category: 'Acoustic Rhythm',
    triggerCondition: 'A background music session remains audible.',
    dialoguePreview: '"hum hum hum" · "this beat is nice" · "tiny concert mode"',
    assetFile: '/case-studies/miko/miko-listening-row.png',
    frameCount: 6,
  },
  {
    id: 'watching',
    name: 'Watching / Media',
    category: 'Video Spectator',
    triggerCondition: 'Video streaming page active (YouTube, Twitch) or local video player in foreground.',
    dialoguePreview: '"movie mode" · "I am watching too" · "wait, this part"',
    assetFile: '/case-studies/miko/miko-watching-row.png',
    frameCount: 6,
  },
  {
    id: 'curious',
    name: 'Curious / Browsing',
    category: 'Exploration',
    triggerCondition: 'Research, documentation, or exploratory browsing becomes active.',
    dialoguePreview: '"what are we reading?" · "curious mode" · "new tab adventure"',
    assetFile: '/case-studies/miko/miko-curious-row.png',
    frameCount: 6,
  },
  {
    id: 'sleepy',
    name: 'Sleepy / Idle',
    category: 'Standby',
    triggerCondition: 'User inactivity passes the configured Win32 idle threshold.',
    dialoguePreview: '"still here" · "waiting..." · "tiny standby mode"',
    assetFile: '/case-studies/miko/miko-sleepy-row.png',
    frameCount: 6,
  },
  {
    id: 'celebrating',
    name: 'Celebrating / Happy',
    category: 'Reward',
    triggerCondition: 'An explicit positive or achievement state is triggered.',
    dialoguePreview: '"proud mode!" · "clean build" · "yay!"',
    assetFile: '/case-studies/miko/miko-celebrating-row.png',
    frameCount: 6,
  },
  {
    id: 'annoyed',
    name: 'Annoyed / Relocation',
    category: 'Disruption Stance',
    triggerCondition: 'MIKO is relocated away from the primary display or enters an explicit annoyed state.',
    dialoguePreview: '"wrong monitor" · "bring me back" · "hmph"',
    assetFile: '/case-studies/miko/miko-annoyed-row.png',
    frameCount: 6,
  },
];

export function MikoMoodShowcase() {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('coding');

  return (
    <div className="space-y-4 font-mono">
      {/* List of 7 Authentic Mood Rows */}
      {moodRows.map((mood) => {
        const isSelected = selectedMoodId === mood.id;

        return (
          <div
            key={mood.id}
            onClick={() => setSelectedMoodId(mood.id)}
            className={`border transition-colors cursor-pointer p-4 sm:p-5 ${
              isSelected
                ? 'border-[#f09acb] bg-surface'
                : 'border-white/[0.08] bg-surface/50 hover:border-white/20'
            }`}
          >
            <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Mood Info */}
              <div className="space-y-1.5 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 flex-shrink-0 ${
                      isSelected ? 'bg-[#f09acb]' : 'bg-white/40'
                    }`}
                  />
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
        );
      })}

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
            Desktop Movement States · 10&times;10 Grid
          </span>
        </div>
        <p className="mt-3 font-sans text-xs leading-relaxed text-primary-muted max-w-2xl">
          Beyond activity mood rows, MIKO maintains full physical locomotion animations for Windows desktop behavior: wandering across taskbars, waving on double-click, crouching on idle, jumping, and secondary monitor relocation tantrums.
        </p>

        <div className="mt-6 overflow-x-auto border border-white/[0.06] bg-[#0c0d10] p-4">
          <img
            src={getAssetPath('/case-studies/miko/miko-spritesheet.png')}
            alt="MIKO primary sprite atlas showing locomotion animations"
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
