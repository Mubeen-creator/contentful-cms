/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SPACE_ID: "qro7jddzebmo",
        CONTENTFUL_ACCESS_KEY: "nsOBMvQsrxAUw5il7ifI166lx_zg5tvomHTz8CgF3Qw"
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
