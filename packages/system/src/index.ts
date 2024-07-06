import { type Tokens, definePreset } from "@pandacss/dev";
import {
	// amber,
	// amberDark,
	blue,
	blueDark,
	// green,
	// greenDark,
	// purple,
	// purpleDark,
	red,
	redDark,
	// zinc,
	// zincDark,
	// zinc, mauve
	// zincDark, mauve
} from "@radix-ui/colors";

function makePandaColor<T extends Record<string, string>>(
	scale: T,
	scaleDark: T,
) {
	const color: Tokens["colors"] = {};
	// biome-ignore lint/complexity/noForEach: <explanation>
	Object.keys(red).forEach((key) => {
		color[key] = {
			value: {
				base: { value: scale[key] },
				_dark: { value: scaleDark[key] },
			},
		};
	});
	return color;
}

console.log(makePandaColor(red, redDark));

export const warePreset = definePreset({
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	// staticCss: {},
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
	// Useful for theme customization
	theme: {
		// tokens: {
		// 	colors: {
		// 		// ...makePandaColor(zinc, zincDark),
		// 		// ...makePandaColor(blue, blueDark),
		// 		// ...makePandaColor(red, redDark),
		// 	},
		// },
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
