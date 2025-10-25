/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  trailingSlash: true,

  // 👇 Add these lines for GitHub Pages
  basePath: '/Quantum-AI-Portfolio',
  assetPrefix: '/Quantum-AI-Portfolio/',
};

export default nextConfig;
