/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  // Amplify requires this to be set to true for SSG
  trailingSlash: true,
}

module.exports = nextConfig 