import { defineConfig } from "@pandacss/dev";
import { ButtonRecipe } from "./src/button/button.recipe";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	staticCss: { recipes: "*" },
	jsxFramework: "react",
	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@ui-ware/system/dist/panda.buildinfo.json",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				button: ButtonRecipe,
			},
			tokens: {
				colors: {},
			},
		},
	},

	importMap: "@ui-ware/system",
	// The output directory for your css system
	outdir: "styled-system",
});
