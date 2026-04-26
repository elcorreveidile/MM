import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages sirve el repo en /MM/
  basePath: isProd ? '/MM' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
