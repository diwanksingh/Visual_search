/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    return config;
  },
  turbopack: {}, // disables turbopack safely
};

export default nextConfig;
