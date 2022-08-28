const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			peach: '#E7816B',
			'peach-light': '#FFAD9B',
			black: ' #1D1C1E',
			'dark-grey': '#333136',
			'light-grey': 'F1F3F5',
			white: '#FFFFFF',
		},
		extend: {
			fontFamily: {
				sans: ['Jost', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				base: ['15px', { fontWeight: 400, lineHeight: '25px' }],
				h1: ['3rem', { fontWeight: 500, lineHeight: '3rem' }],
				h2: ['2.5rem', { fontWeight: 500, lineHeight: '3rem', letterSpacing: '2px' }],
				h3: ['1.25rem', { fontWeight: 500, lineHeight: '1.625rem', letterSpacing: '5px' }],
			},
			lineHeight: {
				5.5: '1.375rem',
			},
		},
	},
	plugins: [],
}
