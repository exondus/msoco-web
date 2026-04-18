import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error — reactCompiler is valid in Next.js 16 but not yet in type definitions
    reactCompiler: true,
  },
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
  },
};

export default nextConfig;
