/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"], // Add the hostname here
  },
};

module.exports = nextConfig;
