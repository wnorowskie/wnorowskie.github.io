/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set base path - remove if deploying to root domain
  // basePath: '/eric-portfolio',
  
  // Set asset prefix for GitHub Pages
  // assetPrefix: '/eric-portfolio/',
  
  // Handle trailing slashes for GitHub Pages
  trailingSlash: true,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
