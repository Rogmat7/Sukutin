import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Prefer static export for better compatibility
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false, // Disable strict mode to avoid hydration errors
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
