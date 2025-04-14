import {
	definePreset,
	type RecipeConfig,
	type SlotRecipeConfig,
} from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button";
import { cardRecipe } from "./recipes/card";

import type {
	RecipeConfig as CodegenRecipeConfig,
	SlotRecipeConfig as CodegenSlotRecipeConfig,
	SlotRecipeVariantRecord,
	RecipeVariantRecord,
} from "../dist/types";
import { modalSlotRecipe } from "./recipes/modal";
import { tabsSlotRecipe } from "./recipes/tabs";
import { segmentedControlSlotRecipe } from "./recipes/segmented-control";
import { tagsSlotRecipe } from "./recipes/tag";
import { switchSlotRecipe } from "./recipes/switch";
import { textFieldRecipe } from "./recipes/text-field";

export function themeRecipe<T extends RecipeVariantRecord>(
	config: CodegenRecipeConfig<T>,
): RecipeConfig {
	return config as RecipeConfig;
}

export function themeSlotRecipe<
	S extends string,
	T extends SlotRecipeVariantRecord<S>,
>(config: CodegenSlotRecipeConfig<S, T>): SlotRecipeConfig {
	return config as SlotRecipeConfig;
}
export const warePreset = definePreset({
	name: "ui-ware-preset",
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	staticCss: { recipes: "*" },
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

	theme: {
		// extend: {
		recipes: {
			buttonRecipe,
			cardRecipe,
			textFieldRecipe,
		},
		slotRecipes: {
			modalSlotRecipe,
			tabsSlotRecipe,
			segmentedControlSlotRecipe,
			tagsSlotRecipe,
			switchSlotRecipe,
		},
		semanticTokens: {
			colors: {
				text: {
					label: {
						value: {
							base: "{colors.zinc.900}",
							_dark: "{colors.zinc.50}",
						},
					},
					default: {
						value: {
							base: "black",
							_dark: "white",
						},
					},
				},
				bg: {
					// for buttons since they're special
					raised: {
						interactive: {
							primary: {
								default: {
									value: {
										base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.500}, {colors.blue.600}, {colors.blue.500})",
									},
								},
								hover: {
									value: {
										base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.500}, {colors.blue.600}, {colors.blue.500})",
									},
								},
								pressed: {
									value: {
										base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.500}, {colors.blue.600}, {colors.blue.500})",
									},
								},
							},
							neutral: {
								default: {
									value: {
										base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
									},
								},
								hover: {
									value: {
										base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
									},
								},
								pressed: {
									value: {
										base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
									},
								},
							},
							danger: {
								default: {
									value: {
										base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
									},
								},
								hover: {
									value: {
										base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
									},
								},
								pressed: {
									value: {
										base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
									},
								},
							},
						},
					},
					well: {
						interactive: {
							neutral: {
								default: {
									value: {
										base: "{colors.zinc.50}",
										_dark: "{colors.zinc.500}",
									},
								},
								hover: {
									value: {
										base: "white",
										_dark: "{colors.zinc.600}",
									},
								},
								pressed: {
									value: {
										base: "white",
										_dark: "{colors.zinc.600}",
									},
								},
							},
						},
					},
					ridge: {
						// surface: {
						// 	value: {
						// 		base: "white",
						// 		_dark: "{colors.zinc.700}",
						// 	},
						// },
						interactive: {
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
								// situations where you need light-on-dark but still light-on-light. radio dot for example
								reversed: {
									value: {
										base: "{colors.zinc.100}",
										_dark: "{colors.zinc.100}",
									},
								},
								default: {
									value: {
										base: "{colors.zinc.100}",
										_dark: "{colors.zinc.500}",
									},
								},
								hover: {
									value: {
										base: "{colors.zinc.100}",
										_dark: "{colors.zinc.500}",
									},
								},
								pressed: {
									value: {
										base: "{colors.zinc.100}",
										_dark: "{colors.zinc.500}",
									},
								},
							},
						},
					},
					overlay: {
						value: {
							base: "{colors.zinc.100/50}",
							_dark: "{colors.zinc.800/50}",
						},
					},
					surface: {
						"0": {
							value: {
								base: "{colors.zinc.100}",
								_dark: "{colors.zinc.700}",
							},
						},
						"1": {
							value: {
								base: "{colors.zinc.50}",
								_dark: "{colors.zinc.600}",
							},
						},
						"2": {
							value: {
								base: "{colors.zinc.200}",
								_dark: "{colors.zinc.800}",
							},
						},
						"3": {
							value: {
								base: "{colors.zinc.300}",
								_dark: "{colors.zinc.900}",
							},
						},
					},
				},
			},
			borders: {
				surface: {
					"0": {
						value: {
							base: "1px solid {colors.zinc.300}",
						},
					},
				},
				raised: {
					interactive: {
						neutral: {
							default: {
								value: {
									base: "1px solid {colors.zinc.300}",
									_dark: "1px solid {colors.zinc.500}",
								},
							},
							hover: {
								value: {
									base: "1px solid {colors.zinc.300}",
									_dark: "1px solid {colors.zinc.500}",
								},
							},
							pressed: {
								value: {
									base: "1px solid {colors.zinc.400}",
									_dark: "1px solid {colors.zinc.500}",
								},
							},
						},
						primary: {
							default: {
								value: {
									base: "1px solid {colors.blue.700}",
								},
							},
							hover: {
								value: {
									// base: "1px solid rgba(255, 255, 255, 0.17)",
									base: "1px solid {colors.blue.700}",
								},
							},
							pressed: {
								value: {
									// base: "1px solid rgba(255, 255, 255, 0.07)",
									base: "1px solid {colors.blue.700}",
								},
							},
						},
						danger: {
							default: {
								value: {
									base: "1px solid {colors.red.700}",
								},
							},
							hover: {
								value: {
									// base: "1px solid rgba(255, 255, 255, 0.17)",
									base: "1px solid {colors.red.700}",
								},
							},
							pressed: {
								value: {
									// base: "1px solid rgba(255, 255, 255, 0.07)",
									base: "1px solid {colors.red.700}",
								},
							},
						},
					},
				},
				interactive: {
					// Interactive components which are in a selected state- checkbox, radio
					primary: {
						default: {
							value: {
								base: "1px solid {colors.blue.600}",
								_dark: "1px solid {colors.blue.400}",
							},
						},
						hover: {
							value: {
								base: "1px solid {colors.blue.700}",
								_dark: "1px solid {colors.blue.400}",
							},
						},
						pressed: {
							value: {
								base: "1px solid {colors.blue.700}",
								_dark: "1px solid {colors.blue.400}",
							},
						},
					},
					// interactive components that don't have a selected state- text field
					neutral: {
						default: {
							value: {
								base: "1px solid {colors.zinc.400}",
								_dark: "1px solid {colors.zinc.400}",
							},
						},
						hover: {
							value: {
								base: "1px solid {colors.blue.600}",
								_dark: "1px solid {colors.blue.500}",
							},
						},
						pressed: {
							value: {
								base: "1px solid {colors.blue.600}",
								_dark: "1px solid {colors.blue.500}",
							},
						},
					},
				},
			},
			shadows: {
				raised: {
					interactive: {
						neutral: {
							default: {
								value: {
									base: "1px 0px 0px {colors.zinc.100} inset, -1px 0px 0px {colors.zinc.100} inset, 0px 1px 0px {colors.zinc.100} inset, 0px -1px 0px {colors.zinc.200} inset",
								},
							},
							hover: {
								value: {
									base: "1px 0px 0px {colors.zinc.100} inset, -1px 0px 0px {colors.zinc.100} inset, 0px 1px 0px {colors.zinc.100} inset, 0px -1px 0px {colors.zinc.100} inset",
								},
							},
							pressed: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.8) inset, -1px 0px 0px rgba(255, 255, 255, 0.8) inset, 0px 1px 0px rgba(255, 255, 255, 0.45) inset, 0px 1px 5px rgba(0, 0, 0, 0.15) inset",
								},
							},
						},
						primary: {
							default: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px {colors.blue.400} inset",
								},
							},
							hover: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px {colors.blue.400} inset",
								},
							},
							pressed: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
								},
							},
						},
						danger: {
							default: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px {colors.red.400} inset",
								},
							},
							hover: {
								value: {
									// base: "0px 0px 0px 1px {colors.red.600}, 0px 1px 2px 0px {colors.red.700}",
									base: "1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px {colors.red.400} inset",
								},
							},
							pressed: {
								value: {
									base: "1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
								},
							},
						},
					},
				},
				overlay: {
					value: {
						base: "0px 0px 0px 1px {colors.zinc.300}, 0px 2px 1px 0px {colors.zinc.200}, 2px 0px 1px 0px {colors.zinc.200}, -2px 0px 1px 0px {colors.zinc.200}, 0px -2px 1px 0px {colors.zinc.200}",
						_dark:
							"0px 0px 0px 1px {colors.zinc.500}, 0px 2px 1px 0px {colors.zinc.500}, 2px 0px 1px 0px {colors.zinc.500}, -2px 0px 1px 0px {colors.zinc.500}, 0px -2px 1px 0px {colors.zinc.500}",
					},
				},
				// Components with a distinct 'bubbly' appearance
				ridge: {
					interactive: {
						primary: {
							default: {
								value: {
									base: "{colors.blue.100} 0px 0px 1px 0px inset",
									_dark: "{colors.blue.900} 0px 0px 1px 0px inset",
								},
							},
							hover: {
								value: {
									base: "{colors.blue.100} 0px 0px 1px 0px inset",
									_dark: "{colors.blue.900} 0px 0px 1px 0px inset",
								},
							},
							pressed: {
								value: {
									base: "{colors.blue.500} 0px 0px 1px 0px inset",
									_dark: "{colors.blue.950} 0px 0px 1px 0px inset",
								},
							},
						},
						neutral: {
							default: {
								value: {
									base: "0px -1px 1px rgba(0, 0, 0, 0.2) inset, 0px 1px 0px rgba(255, 255, 255, 0.5) inset",
									_dark:
										"0px -1px 1px {colors.zinc.700} inset, 0px 1px 0px {colors.zinc.500} inset",
								},
							},
							hover: {
								value: {
									base: "0px -1px 1px rgba(0, 0, 0, 0.1) inset, 0px 1px 1px rgba(255,255,255,0.5) inset",
									_dark:
										"0px -1px 1px {colors.zinc.500} inset, 0px 1px 1px {colors.zinc.500} inset",
								},
							},
							pressed: {
								value: {
									base: "0px -1px 1px rgba(0, 0, 0, 0.05) inset, 0px 1px 3px rgba(0,0,0,0.2) inset",
									_dark:
										"0px -1px 1px {colors.zinc.600} inset, 0px 1px 3px {colors.zinc.700} inset",
								},
							},
						},
					},
					surface: {
						default: {
							value: {
								base: "0px 0px 0px 1px {colors.zinc.300}, 0px 2px 1px 0px {colors.zinc.400}",
								_dark:
									"0px 0px 0px 1px {colors.zinc.500}, 0px 2px 1px 0px {colors.zinc.400}",
							},
						},
					},
				},
				// Components with a distinct inset appearance
				well: {
					interactive: {
						neutral: {
							default: {
								value: {
									base: "{colors.zinc.300} 0px 1px 2px inset",
									_dark: "{colors.zinc.700} 0px 1px 3px inset",
								},
							},
							hover: {
								value: {
									base: "{colors.zinc.100} 0px 1px 5px inset",
									_dark: "{colors.zinc.600} 0px 1px 5px inset",
								},
							},
							pressed: {
								value: {
									base: "{colors.zinc.300} 0px 1px 2px inset",
									_dark: "{colors.zinc.700} 0px 1px 3px inset",
								},
							},
						},
					},
				},
			},
		},
		// },
	},
});
