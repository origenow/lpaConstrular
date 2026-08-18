import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro, com fallback WebP para navegadores sem suporte.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
