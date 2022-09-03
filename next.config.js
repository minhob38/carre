/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.carre.kr'],

    loader: 'akamai',
    path: '', // <- static file을 가져오는 경로
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },

  // path: ""면 현재를 page url + static file 경로로 load
  // trailingSlash: true,

  // async rewrites() {
  //   return [
  //     {
  //       /* axios api 주소 */
  //       source: '/:path*',
  //       /* axios 실제 서버 요청 주소 */
  //       destination:
  //         'http://ec2-3-37-55-86.ap-northeast-2.compute.amazonaws.com:8080/api/v1/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
