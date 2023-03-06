/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: { domains: ['icon.horse.com', 'icon.horse.org', 'icon.horse'] },
  reactStrictMode: false,
}

module.exports = nextConfig
