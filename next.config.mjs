/** @type {import('next').NextConfig} */
const nextConfig = {
          images: {
                    remotePatterns: [
                              {
                                        protocol: 'https',
                                        hostname: 'strapi-minhthuong.s3.ap-southeast-2.amazonaws.com',
                                        port: '',
                              }


                    ],
          },
};

export default nextConfig;
