/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.carre.kr'],
    loader: 'akamai',
    path: '', // <- static file을 가져오는 경로
  },
};

module.exports = nextConfig;
