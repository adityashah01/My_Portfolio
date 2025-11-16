/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // keep this if you want static export
  images: {
    unoptimized: true, // disables the default image loader
  },
}

module.exports = nextConfig
