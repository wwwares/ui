import { definePreset } from "@pandacss/dev";
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
	redDark,
	// slate,
	// slateDark,
} from "@radix-ui/colors";

const reds: Record<string, { base: string; _dark: string }> = {};

// (() => {
console.log("HEY");
// })();
// biome-ignore lint/complexity/noForEach: <explanation>
Object.keys(red).forEach((key: string) => {
	console.log(red[key as keyof typeof red]);
	reds[key] = {
		base: red[key],
		_dark: redDark[key],
	};
});

export const warePreset = definePreset({
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: {},

	// Useful for theme customization
	theme: {
		semanticTokens: {
			colors: {
				danger: {
					value: {
						_dark: "{colors.red1}",
						base: "{colors.red2}",
					},
				},
			},
		},
		extend: {
			tokens: {
				colors: {
					neutral: {
						value: {},
					},
					...reds,
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
				},
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
