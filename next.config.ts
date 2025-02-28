import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['example.com', 'another-site.net', 'cdn.my-images.com'], // List of allowed domains
    // Optional: For more advanced configuration, you can use remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.pixabay.com",
       },
      {
        protocol: 'https',
        hostname: "img.clerk.com",
       },
    ],
  },
  // api: {
  //   bodyParser: false,
  // },
};

export default nextConfig;
