import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MM",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
