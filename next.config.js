/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActions:true
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
      webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
      },
}

module.exports = nextConfig