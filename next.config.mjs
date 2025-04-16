/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',

            },
        ],
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/products/add',
                destination: '/dashboard/products/add',
                permanent: true,
            },
            // Wildcard path matching
            {
                source: '/blog/:slug',
                destination: '/news/:slug',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
