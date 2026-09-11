import type { Metadata } from 'next';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { MikoCaseStudy } from '@/components/case-study/miko/MikoCaseStudy';

export const metadata: Metadata = {
  title: 'MIKO — Case Study — Yazan Khaled',
  description:
    'An experimental local-first desktop companion that responds to context, not just prompts. Windows WPF shell, local Python sidecar, and peripheral interaction design.',
};

export default function MikoCaseStudyPage() {
  return (
    <>
      <a
        href="#case-study-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <CaseStudyHeader
        projectNumber="06"
        projectTitle="MIKO"
      />
      <main id="case-study-content">
        <MikoCaseStudy />
      </main>
    </>
  );
}
