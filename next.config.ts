import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.msocorockers.co.za',
      },
    ],
    // Disable optimization for remote WordPress images to avoid timeout issues
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
