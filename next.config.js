/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1.awsstatic.com',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
