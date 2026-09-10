export type PreviewType = 'image' | 'video' | 'interactive';

export type MotionStyle = 'fade' | 'slide-up' | 'clip-path' | 'scale';

export interface Project {
  id: string; // e.g. "01"
  title: string; // e.g. "Project A"
  slug: string;
  year: string; // e.g. "2025"
  category: string; // e.g. "Interactive Interface"
  shortDescription: string;
  role: string;
  technologies: string[];
  previewImage: string;
  previewType: PreviewType;
  caseStudyUrl?: string;
  gitHubUrl?: string;
  liveDemoUrl?: string;
  accent?: string;
  motionStyle: MotionStyle;
}
