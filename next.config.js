/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.carre.co.kr', '*'],
  },
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
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
