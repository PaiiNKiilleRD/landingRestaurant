/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "15px",
		}, screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				golden: "#DCCA87",
				black: "#0c0c0c",
				gray: "#545454",
				crimson: "#F5efdb",
				grey: "#AAAAAA",
			},
			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				cormorant: ["Cormorant Upright", "sans-serif"]
			},
		},
	},
	plugins: [],
}
