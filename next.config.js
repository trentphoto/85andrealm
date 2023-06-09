/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'placehold.co', 'xsgames.co'],
  },
}

module.exports = nextConfig
