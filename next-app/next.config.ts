import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow LAN-IP access in dev (HMR + hydration). Add hosts as needed.
  allowedDevOrigins: ['192.168.1.22', '192.168.1.14', '192.168.1.103'],
};

export default nextConfig;
