/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Add SVG handling rule using @svgr/webpack
        config.module.rules.push({
          test: /\.svg$/,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });
        return config;
      },
      eslint:{
        ignoreDuringBuilds:true,
      },
};

export default nextConfig;
