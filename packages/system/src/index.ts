import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button";

export const warePreset = definePreset({
	// Whether to use css reset
	// preflight: true,

	// jsxFramework: "react",

	// presets: [warePreset],

	// Where to look for your css declarations
	// include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	// exclude: [],
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: { recipes: "*" },
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				buttonRecipe,
			},
			semanticTokens: {
				colors: {
					danger: {
						value: {
							_dark: "{colors.red.50}",
							base: "{colors.red.50}",
						},
					},
				},
			},
		},
	},

	// The output directory for your css system
	// outdir: "./dist",
});
