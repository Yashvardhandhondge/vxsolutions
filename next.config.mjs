const repoName = 'vx-software-solutions'; // Replace with your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
