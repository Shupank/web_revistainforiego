/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					blue: '#0284c7',
					dark: '#0f172a',
					green: '#16a34a',
					accent: '#f59e0b',
					light: '#f8fafc'
				}
			}
		},
	},
	plugins: [],
}
