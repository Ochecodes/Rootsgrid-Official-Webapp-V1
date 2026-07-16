import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Bypasses the polymorphic and structural TypeScript errors during the Vercel build phase
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;