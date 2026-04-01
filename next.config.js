/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
