import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Geliştirmede görsel değişince tarayıcı eski kopyayı göstermesin
  images: { minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 14400 },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
