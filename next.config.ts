import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true // Disable Next.js image optimization if using Netlify's CDN
  },
  /* config options here */
  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: [
      'd01d112a46be.ngrok-free.app', // Your ngrok domain
      '.ngrok-free.app' // Allow all ngrok domains (recommended)
    ]
  }
};

export default nextConfig;
