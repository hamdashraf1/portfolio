/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  // ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Experimental features
  experimental: {
    forceSwcTransforms: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  generateEtags: false,

  output: 'export',
  trailingSlash: true,
}

export default nextConfig
