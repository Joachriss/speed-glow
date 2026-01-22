import type { NextConfig } from "next";
// export const dynamic = "force-static";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
