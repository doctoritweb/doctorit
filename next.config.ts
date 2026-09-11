import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   devIndicators: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

//   // Turn off production source maps to drastically reduce RAM usage during build
//   productionBrowserSourceMaps: false,

//   // Disable the dev indicator overlay entirely (appIsrStatus/buildActivity are deprecated)
//   devIndicators: false,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   // Webpack memory optimizations to prevent WebAssembly memory limit errors
//   webpack: (config, { isServer }) => {
//     // Disable heavy source maps in webpack build
//     config.devtool = false;

//     // Minimize cache allocations in memory during production builds
//     if (!isServer) {
//       config.performance = {
//         hints: false,
//       };
//     }

//     return config;
//   },
// };

// export default nextConfig;