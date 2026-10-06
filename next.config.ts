import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  async redirects() {
    return [
      { source: "/chunks", destination: "/longreads?article=chunks", permanent: false },
      { source: "/fluency-guide", destination: "/longreads?article=fluency-guide", permanent: false },
      { source: "/methodology", destination: "/longreads?article=methodology", permanent: false },
      { source: "/longreads/native-brain", destination: "/longreads?article=native-brain", permanent: false },
      { source: "/longreads/memory-consolidation", destination: "/longreads?article=memory-consolidation", permanent: false },
      { source: "/longreads/chunk-architecture", destination: "/longreads?article=chunk-architecture", permanent: false },
      { source: "/longreads/support-sales-fluency", destination: "/longreads?article=support-sales-fluency", permanent: false },
    ];
  },
};

export default nextConfig;
