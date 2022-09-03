/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.carre.co.kr', 'static.carre.kr', '*'],
    loader: 'akamai',
    path: '/',
  },
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
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId },
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/test/1': { page: '/test/1' },
  //     '/test/2': { page: '/test/2' },
  //     '/test/3': { page: '/test/3' },
  //     '/test/4': { page: '/test/4' },
  //     '/test/5': { page: '/test/5' },
  //     '/test/6': { page: '/test/6' },
  //     '/test/7': { page: '/test/7' },
  //     '/result': { page: '/result' },
  //     '/result/1': { page: '/result/1' },
  //     '/result/2': { page: '/result/2' },
  //   };
  // },
};

module.exports = nextConfig;
