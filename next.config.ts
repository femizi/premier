import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.app.goo.gl',
      },
      {
        protocol: 'https',
        hostname: 'g0e6rrwqbju8beeg.public.blob.vercel-storage.com', // Add this line
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
