/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [

      
      {
        source: "/api/:path*",
        destination: `/`, // http://localhost:9090/ => api/
      },
    ];
  },
  env: {
    REQUEST_TIMEOUT: 10000,
  },
};
