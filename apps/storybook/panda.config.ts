import { defineConfig } from "@pandacss/dev";

import { warePreset } from "@wwwares/ui-system/preset";

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	// staticCss: { recipes: "*" },
	presets: [warePreset],
	// presets: ["@wwwares/ui-system/preset"],
	jsxFramework: "react",
	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"../../packages/system/src/**/*.{js,jsx,ts,tsx}",
		"../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
	],
	// include: [
	// "./src/**/*.{js,jsx,ts,tsx}",
	// Tell panda to look for styles/code contained in the component package
	// this allows you to use atomic or arbitrary css in the ui-react package
	// without having to ship static css
	// "./node_modules/@wwwares/ui-react/src/**/*.tsx",
	// "./node_modules/@wwwares/ui-system/src/**/*.ts",
	// "../../packages/system/src/**/*.ts",
	// alternatively, you can ship the buildinfo
	// "./node_modules/@wwwares/ui-system/dist/panda.buildinfo.json",
	// ],

	dependencies: [
		// "./node_modules/@wwwares/ui-system/src/**/*.ts",
		"../../packages/system/src/**/*.{js,jsx,ts,tsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {},

	importMap: "@wwwares/ui-system",
	// The output directory for your css system
	outdir: "styled-system",
});
