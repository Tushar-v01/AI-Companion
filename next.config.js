/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config) => {
    // Redirect any incorrect `zod/lib` imports to the correct `zod` path
    config.resolve.alias['zod/lib'] = require.resolve('zod');
    return config;
  },
};

module.exports = nextConfig;
