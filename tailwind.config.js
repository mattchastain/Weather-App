import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		heroui({
			themes: {
				day: {
					extend: 'light', // <- inherit default values from light theme
					colors: {
						background: '#5989c1',
						foreground: '#e4f3ff',
						primary: {
							50: '#e4f3ff',
							100: '#c4d8ef',
							200: '#a1bede',
							300: '#7ca3cf',
							400: '#5989c1',
							500: '#3f70a7',
							600: '#305783',
							700: '#203e5e',
							800: '#0f253b',
							900: '#010c1a',
							DEFAULT: '#5989c1',
							foreground: '#e4f3ff',
						},
						focus: '#F182F6',
					},
					layout: {
						disabledOpacity: '0.3',
						radius: {
							small: '4px',
							medium: '6px',
							large: '8px',
						},
						borderWidth: {
							small: '1px',
							medium: '2px',
							large: '3px',
						},
					},
				},
				night: {
					extend: 'dark', // <- inherit default values from dark theme
					colors: {
						background: '#0c0817',
						foreground: '#f2efff',
						primary: {
							50: '#f2efff',
							100: '#d6d0e5',
							200: '#b8b3ce',
							300: '#9c94b8',
							400: '#8076a3',
							500: '#665c89',
							600: '#50486c',
							700: '#39334e',
							800: '#221e31',
							900: '#0c0817',
							DEFAULT: '#665c89',
							foreground: '#f2efff',
						},
						focus: '#F182F6',
					},
					layout: {
						disabledOpacity: '0.3',
						radius: {
							small: '4px',
							medium: '6px',
							large: '8px',
						},
						borderWidth: {
							small: '1px',
							medium: '2px',
							large: '3px',
						},
					},
				},
			},
		}),
		function ({ addVariant }) {
			addVariant('night', '.night &'); // Add the custom 'night' variant to be used like 'night:bg-primary-800'
		},
	],
};
