/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || Boolean(process.env.GITHUB_ACTIONS);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? '/portfolio' : '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
