import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				"3xl": "3px 3px 0px 0px rgba(0, 0, 0, 1)",
				"3xl-red": "3px 3px 0px 0px #ef4444",
			},
			dropShadow: {
				"3xl": "3px 3px 0px black",
				"3xl-red": "3px 3px 0px #ef4444",
			},
			minHeight: {
				half: "50vh",
			},
		},
	},
	plugins: [],
};
export default config;
