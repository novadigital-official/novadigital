import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novadigital.com.tr" }],
        destination: "https://novadigital.com.tr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
