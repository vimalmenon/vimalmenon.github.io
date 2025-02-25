import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
};

export default nextConfig;
