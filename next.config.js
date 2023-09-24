/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // development
    appDir: false, // production
  },
  // output: 'export', // if wanna generate static pages then option:1: package.json's build script is only "build"
  // "build": "next build && next export", // if wanna generate static pages then option:2: package.json's build script
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**ibb.co/*',
      },
      {
        protocol: 'https',
        hostname: '**res.cloudinary.com/*',
      },
    ],
  },
};

module.exports = nextConfig;
