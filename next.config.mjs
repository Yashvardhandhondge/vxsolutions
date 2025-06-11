const repoName = 'vx-software-solutions';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
