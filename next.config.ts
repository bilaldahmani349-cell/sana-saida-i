import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sana-saida-i",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
