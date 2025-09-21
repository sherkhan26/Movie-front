/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
