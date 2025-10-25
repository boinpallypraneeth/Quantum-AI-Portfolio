// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  trailingSlash: true,

  // 👇 Critical for GitHub Pages or custom path
  basePath: '/Quantum-AI-Portfolio',
  assetPrefix: '/Quantum-AI-Portfolio/',

  // 🚀 Skip type checking during build on Vercel
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
