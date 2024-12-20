import { defineConfig } from "@pandacss/dev";

import { warePreset } from "@wwwares/ui-system/preset";

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: { recipes: "*" },
	presets: [warePreset],
	jsxFramework: "react",
	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		// "./node_modules/@wwwares/ui-system/dist/panda.buildinfo.json",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {},

	importMap: "@wwwares/ui-system",
	// The output directory for your css system
	outdir: "styled-system",
});
