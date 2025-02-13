import type { NextConfig } from "next";
const dotenv = require("dotenv");
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
    BEARER_AUTHORIZATION_TOKEN: process.env.BEARER_AUTHORIZATION_TOKEN,
    LOCAL_STORAGE: process.env.LOCAL_STORAGE,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
