import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during the build process
    ignoreDuringBuilds: true,
  },
  // Also disable type checking during builds for faster deployments
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
