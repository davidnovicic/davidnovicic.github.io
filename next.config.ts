import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  engines: {
    node: ">=15",
  },
};

export default nextConfig;
