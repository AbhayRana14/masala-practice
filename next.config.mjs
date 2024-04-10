/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.APP_DOMAIN],
    },
  },
};

export default nextConfig;
