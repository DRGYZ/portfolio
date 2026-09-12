import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '05',
    title: 'Nyxboard',
    slug: 'nyxboard',
    year: '2026',
    category: 'Commerce Dashboard',
    description: 'An expressive, accessible multi-store commerce operations dashboard built with React and TypeScript.',
    previewImage: '/projects/nyxboard.svg?v=2',
    previewType: 'image',
    accent: '#b9c3ff',
    motionStyle: 'layers',
    caseStudyUrl: '/work/nyxboard',
    liveDemoUrl: 'https://drgyz.github.io/nyxboard-commerce-dashboard/',
    gitHubUrl: 'https://github.com/DRGYZ/nyxboard-commerce-dashboard',
  },
  {
    id: '06',
    title: 'MIKO',
    slug: 'miko',
    year: '2026',
    category: 'Desktop Companion',
    description: 'An experimental local-first desktop companion that responds to context, not just prompts.',
    previewImage: '/projects/miko.svg?v=1',
    previewType: 'image',
    accent: '#f09acb',
    motionStyle: 'layers',
    caseStudyUrl: '/work/miko',
  },
];
