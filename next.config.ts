import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // No remote images are used. SVGs are served straight from /public (next/image skips the optimizer
    // for .svg when dangerouslyAllowSVG is off), so they no longer round-trip through /_next/image.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Everything in /public is static, so cache optimized variants for 31 days instead of 60 seconds
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
