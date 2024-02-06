/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  distDir: process.env.BULID_DIR || '.next',
};

module.exports = nextConfig;
