import { defineConfig } from "@pandacss/dev";

import { warePreset } from "@ui-ware/preset/preset";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	presets: [warePreset],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
