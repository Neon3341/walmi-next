/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    experimental: {
        appDir: true,
        turbo: {
         
        }
      },
      transpilePackages: [],
      typescript: {
        
        ignoreBuildErrors: false,
      }
};

export default nextConfig;
