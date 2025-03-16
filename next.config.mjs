/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Set the limit to 5 MB or any other value you need
    },
  },
};

export default nextConfig;
