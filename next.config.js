/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placeholder.svg'],
    },
  }
  
module.exports = {
  output: 'export',
  basePath: '/_PersonalPortfolio',
  // Add trailingSlash if necessary
  trailingSlash: true,
}