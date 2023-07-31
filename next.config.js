/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      '@prisma/client',
      'bcrypt',
      'eslint',
      'postcss',
      'prisma',
      'tailwindcss',
      'ts-node',
      'typescript',
    ],
  },
}

module.exports = nextConfig
