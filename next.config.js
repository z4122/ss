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
            {
                protocol: 'https',
                hostname: 'a1.prod.2nd.io',
                port: '',
                pathname: '**',
            }
        ],
    },
}

module.exports = nextConfig
