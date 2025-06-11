const repoName = 'vx-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
