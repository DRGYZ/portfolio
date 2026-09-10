/**
 * Reusable helper for resolving public asset URLs across local development and GitHub Pages production.
 *
 * Local dev: base path is '' -> '/projects/project-a.svg'
 * GitHub Pages: base path is '/portfolio' -> '/portfolio/projects/project-a.svg'
 */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';

export const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, '')}`
  : '';

export function getAssetPath(path: string): string {
  if (!path) return '';

  // Return unchanged for external URLs or data URIs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  // Ensure path starts with a single slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // If basePath is already present (or empty), avoid double-prefixing
  if (
    basePath &&
    (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`))
  ) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
