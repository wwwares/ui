import { defineConfig } from "@pandacss/dev";

// import { warePreset } from "./src";

import { type Tokens, definePreset } from "@pandacss/dev";
import {
	// amber,
	// amberDark,
	// blue,
	// blueDark,
	// green,
	// greenDark,
	// purple,
	// purpleDark,
	red,
	// redDark,
	// slate,
	// slateDark,
} from "@radix-ui/colors";

// @ts-ignore
function makePandaColor<T extends Record<string, string>>(
	scale: T,
	scaleDark: T,
) {
	const color: Tokens["colors"] = {};
	// biome-ignore lint/complexity/noForEach: <explanation>
	Object.keys(red).forEach((key) => {
		color[key] = {
			value: {
				base: { value: scale[key as keyof T] },
				_dark: { value: scaleDark[key as keyof T] },
			},
		};
	});
	return color;
}

const warePreset = definePreset({
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: {},
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
	// Useful for theme customization
	theme: {
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
		extend: {
			tokens: {
				// colors: {
				// neutral: {
				// },
				// ...makePandaColor(red, redDark),
				// red: {
				// 	value: { _dark: "redDark", base: "red" },
				// },
				// magic: {
				// 	value: { _dark: purpleDark, base: purple },
				// },
				// green: {
				// 	value: { _dark: greenDark, base: green },
				// },
				// blue: {
				// 	value: { _dark: blueDark, base: blue },
				// },
				// yellow: {
				// 	value: { _dark: amberDark, base: amber },
				// },
				// },
			},
			semanticTokens: {
				colors: {
					primary: {
						value: {},
					},
				},
			},
		},
	},
});

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	jsxFramework: "preact",

	presets: [warePreset],

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "./dist",
});
