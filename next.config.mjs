/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**',
        search: '?project=677fbf71001ae9a92a0e&project=677fbf71001ae9a92a0e&mode=admin',
      }
    ]
  }
};

// export default nextConfig;

export default nextConfig;