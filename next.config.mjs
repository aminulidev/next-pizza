/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.inappstory.ru',
      },
    ],
  },
};

export default nextConfig;
