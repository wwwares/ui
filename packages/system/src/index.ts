import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button";
import { cardRecipe } from "./recipes/card";

export const warePreset = definePreset({
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: { recipes: "*" },
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

	theme: {
		extend: {
			recipes: {
				buttonRecipe,
				cardRecipe,
			},
			semanticTokens: {
				colors: {
					bg: {
						primary: {
							default: {
								value: {
									base: "linear-gradient(180deg, {colors.blue.400}, {colors.blue.500})",
								},
							},
							hover: {
								value: {
									base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.600})",
								},
							},
							pressed: {
								value: {
									base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.600})",
								},
							},
						},
						neutral: {
							default: {
								value: {
									base: "linear-gradient(180deg, white, {colors.zinc.50})",
								},
							},
							hover: {
								value: {
									base: "linear-gradient(180deg, {colors.zinc.50}, {colors.zinc.50})",
								},
							},
							pressed: {
								value: {
									base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100})",
								},
							},
						},
					},
				},
				borders: {
					primary: {
						default: {
							value: { base: "1px solid {colors.blue.600}" },
						},
						hover: {
							value: { base: "1px solid {colors.blue.700}" },
						},
						pressed: {
							value: { base: "1px solid {colors.blue.700}" },
						},
					},
					neutral: {
						default: {
							value: { base: "1px solid {colors.zinc.400}" },
						},
						hover: {
							value: { base: "1px solid {colors.zinc.500}" },
						},
						// this may/should be the same as primary.pressed
						pressed: {
							value: { base: "1px solid {colors.zinc.500}" },
						},
					},
				},
				shadows: {
					// Components with a distinct 'bubbly' appearance
					ridge: {
						interactive: {
							primary: {
								default: {
									value: { base: "{colors.blue.400} 0px 0px 1px 0px inset" },
								},
								hover: {
									value: { base: "{colors.blue.400} 0px 0px 1px 0px inset" },
								},
								pressed: {
									value: { base: "{colors.blue.500} 0px 0px 1px 0px inset" },
								},
							},
							neutral: {
								default: {
									value: {
										base: "{colors.zinc.100} 0px 0px 1px 0px inset",
										_dark: "{colors.zinc.100} 0px 0px 1px 0px inset",
									},
								},
								hover: {
									value: {
										base: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
									},
								},
								pressed: {
									value: {
										base: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset",
									},
								},
							},
						},
						surface: {
							default: {
								value: {
									base: "0px 0px 0px 1px {colors.zinc.200}, 0px 2px 1px 0px {colors.zinc.300}",
									_dark:
										"0px 0px 0px 1px {colors.zinc.200}, 0px 2px 1px 0px {colors.zinc.300}",
								},
							},
						},
					},
					// Components with a distinct inset appearance
					well: {
						interactive: {
							neutral: {
								default: {
									value: { base: "{colors.zinc.300} 0px 1px 3px inset" },
								},
								hover: {
									value: { base: "{colors.zinc.300} 0px 1px 5px inset" },
								},
								pressed: {
									value: { base: "{colors.zinc.300} 0px 1px 3px inset" },
								},
							},
						},
					},
				},
			},
		},
	},

	// The output directory for your css system
	// outdir: "./dist",
});
