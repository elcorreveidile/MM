import type { NextConfig } from "next";

const isStaticExport = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  ...(isStaticExport && { output: "export" }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
