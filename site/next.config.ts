import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_PAGES === "true" ? "/profile" : "";

const nextConfig: NextConfig = {
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
  trailingSlash: true,
};

export default nextConfig;
