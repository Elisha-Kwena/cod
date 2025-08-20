import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true // Disable Next.js image optimization if using Netlify's CDN
  },

};

export default nextConfig;
