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

      transpilePackages: [],
      typescript: {
        
        ignoreBuildErrors: false,
      }
};

export default nextConfig;
