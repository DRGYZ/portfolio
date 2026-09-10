/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Use repository name for GitHub Pages path unless overridden or running locally
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? '/portfolio' : ''),
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
