const repoName = 'vx-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    eslint: {
        // Disable ESLint during builds
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Disable TypeScript type checking during builds if needed
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
