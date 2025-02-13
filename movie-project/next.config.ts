import type { NextConfig } from "next";
const dotenv = require("dotenv");
dotenv.config();
dotenv.config({ path: `./.env`, override: true });

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
