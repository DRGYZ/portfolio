export type PreviewType = 'image' | 'video' | 'interactive';

export type MotionStyle = 'default' | 'clip' | 'slide' | 'scale' | 'layers' | 'parallax';

export interface Project {
  id: string;
  title: string;
  slug: string;
  year?: string;
  category?: string;
  previewImage: string;
  previewType: PreviewType;
  caseStudyUrl?: string;
  gitHubUrl?: string;
  liveDemoUrl?: string;
  accent?: string;
  motionStyle: MotionStyle;
}

export function getProjectUrl(project: Project): string | undefined {
  return project.caseStudyUrl ?? project.liveDemoUrl ?? project.gitHubUrl;
}
