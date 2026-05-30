import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in a parent directory made Next infer the wrong workspace root.
  // Pin it to this project so dev/build resolve files predictably.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
