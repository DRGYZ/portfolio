import type { Metadata } from 'next';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { MikoCaseStudy } from '@/components/case-study/miko/MikoCaseStudy';

export const metadata: Metadata = {
  title: 'MIKO — Case Study',
  description:
    'An experimental local-first desktop companion that responds to context, not just prompts. Windows WPF shell, local Python sidecar, and peripheral interaction design.',
  alternates: {
    canonical: '/work/miko/',
  },
  openGraph: {
    title: 'MIKO — Case Study — Yazan Khaled',
    description:
      'An experimental local-first desktop companion that responds to context, not just prompts.',
    url: '/work/miko/',
    type: 'article',
    images: [
      {
        url: '/projects/miko.svg',
        width: 1200,
        height: 820,
        alt: 'MIKO Desktop Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIKO — Case Study — Yazan Khaled',
    description:
      'An experimental local-first desktop companion that responds to context, not just prompts.',
    images: ['/projects/miko.svg'],
  },
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
        projectNumber="02"
        projectTitle="MIKO"
      />
      <main id="case-study-content" tabIndex={-1} className="focus:outline-none">
        <MikoCaseStudy />
      </main>
    </>
  );
}
