/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["cdn.nomin.mn"],
    },
    staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
