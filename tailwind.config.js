/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'text': 'var(--text)',
			'background': 'var(--background)',
			'container': 'var(--container)',
			'container-secondary': 'var(--container-secondary)',
			'primary': 'var(--primary)',
			'secondary': 'var(--secondary)',
			'accent': 'var(--accent)',
		},
		extend: {},
	},

	plugins: [],

};