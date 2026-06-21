import type { NextConfig } from "next";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nextConfig: NextConfig & Record<string, any> = {
  // Set Turbopack root to the project directory (absolute path)
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
