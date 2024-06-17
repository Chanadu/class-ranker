/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'p-0',
	],
	theme: {
		colors: {
			'text': 'var(--text)',
			'background': 'var(--background)',
			'container': 'var(--container)',
			'primary': 'var(--primary)',
			'accent': 'var(--accent)',
			'correct': 'var(--correct)',
		},
		extend: {
			screens: {
				'xs': '375px',
			}
		},
	},

	plugins: [],

};