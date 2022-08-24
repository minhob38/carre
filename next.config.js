/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        /* axios api 주소 */
        source: '/:path*',
        /* axios 실제 서버 요청 주소 */
        destination:
          'http://ec2-3-37-55-86.ap-northeast-2.compute.amazonaws.com:8080/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
