import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
        unoptimized: true
    },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  }
};

export default nextConfig;
