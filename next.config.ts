import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production build
  },
  typescript: {
    ignoreBuildErrors: true, // Skip type checking during the build
  },
  // other Next.js configuration options...
};

export default nextConfig;
