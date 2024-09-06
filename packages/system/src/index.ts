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
			slotRecipes: {
				modalSlotRecipe,
				tabsSlotRecipe,
				segmentedControlSlotRecipe,
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
											// 						base: "linear-gradient(0deg, {colors.blue.600}, {colors.blue.500}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
										},
									},
									hover: {
										value: {
											base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.500}, {colors.blue.600}, {colors.blue.500})",
											// 					base: "linear-gradient(0deg, {colors.blue.500}, {colors.blue.500}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
										},
									},
									pressed: {
										value: {
											base: "linear-gradient(180deg, {colors.blue.500}, {colors.blue.500}, {colors.blue.600}, {colors.blue.500})",
											// 						base: "linear-gradient(0deg, {colors.blue.700}, {colors.blue.600}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
										},
									},
								},
								neutral: {
									default: {
										value: {
											base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
											_dark:
												"linear-gradient(0deg, {colors.zinc.500}, {colors.zinc.400}),\
												linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
										},
									},
									hover: {
										value: {
											base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
											// base: "linear-gradient(0deg, {colors.zinc.50}, {colors.zinc.50}),\
											// linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
											_dark:
												"linear-gradient(0deg, {colors.zinc.400}, {colors.zinc.400}),\
												linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
										},
									},
									pressed: {
										value: {
											base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100}, {colors.zinc.100})",
											// base: "linear-gradient(0deg, {colors.zinc.200}, {colors.zinc.100}),\
											// linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
											_dark:
												"linear-gradient(0deg, {colors.zinc.600}, {colors.zinc.500}),\
												linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
										},
									},
								},
								danger: {
									default: {
										value: {
											base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
											// base: "linear-gradient(0deg, {colors.red.600}, {colors.red.500}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
										},
									},
									hover: {
										value: {
											base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
											// base: "linear-gradient(0deg, {colors.red.500}, {colors.red.500}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
										},
									},
									pressed: {
										value: {
											base: "linear-gradient(180deg,{colors.red.500},{colors.red.500},{colors.red.600},{colors.red.500})",
											// base: "linear-gradient(0deg, {colors.red.700}, {colors.red.600}),\
											// linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
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
							surface: {
								value: {
									base: "white",
									_dark: "{colors.zinc.700}",
								},
							},
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
									default: {
										value: {
											base: "{colors.zinc.100}",
											// base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100})",
											_dark:
												"linear-gradient(180deg, {colors.zinc.500}, {colors.zinc.500})",
										},
									},
									hover: {
										value: {
											// base: "linear-gradient(180deg, white, {colors.zinc.100})",
											base: "{colors.zinc.100}",
											_dark:
												"linear-gradient(180deg, {colors.zinc.400}, {colors.zinc.500})",
										},
									},
									pressed: {
										value: {
											// base: "linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.200})",
											base: "{colors.zinc.100}",
											_dark:
												"linear-gradient(180deg, {colors.zinc.500}, {colors.zinc.600})",
										},
									},
								},
							},
						},
						overlay: {
							value: {
								base: "{colors.zinc.100/50}",
								_dark: "{colors.zinc.800}",
							},
						},
						surface: {
							"0": {
								value: {
									base: "white",
								},
							},
							"1": {
								value: {
									base: "{colors.zinc.50}",
								},
							},
							"2": {
								value: {
									base: "{colors.zinc.100}",
									_dark: "{colors.zinc.800}",
								},
							},
							"3": {
								value: {
									base: "{colors.zinc.200}",
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
										_dark: "1px solid rgba(0,0,0,0.15)",
									},
								},
								hover: {
									value: {
										// base: "1px solid rgba(0,0,0, 0.05)",
										base: "1px solid {colors.zinc.200}",
										_dark: "1px solid rgba(0,0,0,0.15)",
									},
								},
								pressed: {
									value: {
										base: "1px solid {colors.zinc.400}",
										// base: "1px solid rgba(0,0,0, 0.05)",
										_dark: "1px solid rgba(0,0,0,0.15)",
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
								value: { base: "1px solid {colors.blue.600}" },
							},
							hover: {
								value: { base: "1px solid {colors.blue.700}" },
							},
							pressed: {
								value: { base: "1px solid {colors.blue.700}" },
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
									_dark: "1px solid {colors.zinc.300}",
								},
							},
							pressed: {
								value: { base: "1px solid {colors.blue.600}" },
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
										base: "1px 0px 0px rgba(0, 0, 0, 0.1) inset, -1px 0px 0px rgba(0, 0, 0, 0.1) inset, 0px 1px 0px {colors.zinc.300} inset, 0px -1px 0px {colors.zinc.200} inset",
										_dark:
											"0px 0px 0px 1px {colors.zinc.300}, 0px 1px 2px 0px {colors.zinc.500}",
									},
								},
								hover: {
									value: {
										// base: "0px 0px 0px 1px {colors.zinc.300}, 0px 1px 2px 0px {colors.zinc.500}",
										base: "1px 0px 0px {colors.zinc.300} inset, -1px 0px 0px {colors.zinc.300} inset, 0px 1px 0px {colors.zinc.300} inset, 0px -1px 0px {colors.zinc.200} inset",
										_dark:
											"0px 0px 0px 1px {colors.zinc.300}, 0px 1px 2px 0px {colors.zinc.500}",
									},
								},
								pressed: {
									value: {
										// base: "0px 0px 0px 1px {colors.zinc.400}, 0px 1px 2px 0px {colors.zinc.300} inset",
										base: "1px 0px 0px rgba(255, 255, 255, 0.8) inset, -1px 0px 0px rgba(255, 255, 255, 0.8) inset, 0px 1px 0px rgba(255, 255, 255, 0.45) inset, 0px 1px 5px rgba(0, 0, 0, 0.15) inset",
										_dark:
											"0px 0px 0px 1px {colors.zinc.400}, 0px 1px 2px 0px {colors.zinc.600} inset",
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
										// base: "0px 0px 0px 1px {colors.blue.600}, 0px 1px 2px 0px {colors.blue.700}",
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
										// base: "{colors.zinc.200} 0px 0px 1px 0px inset",
										base: "0px -1px 1px rgba(0, 0, 0, 0.2) inset, 0px 1px 0px rgba(255, 255, 255, 0.5) inset",
										_dark: "{colors.zinc.900} 0px 0px 1px 0px inset",
									},
								},
								hover: {
									value: {
										base: "0px -1px 1px rgba(0, 0, 0, 0.1) inset, 0px 1px 1px rgba(255,255,255,0.5) inset",
										_dark: "{colors.zinc.500} 1.25px 1.25px 1px -1px inset",
									},
								},
								pressed: {
									value: {
										base: "0px -1px 1px rgba(0, 0, 0, 0.05) inset, 0px 1px 3px rgba(0,0,0,0.2) inset",
										_dark: "{colors.zinc.700} 1.25px 1.25px 1px -1px inset",
									},
								},
							},
						},
						surface: {
							default: {
								value: {
									base: "0px 0px 0px 1px {colors.zinc.300}, 0px 2px 1px 0px {colors.zinc.400}",
									_dark:
										"0px 0px 0px 1px {colors.zinc.500}, 0px 2px 1px 0px {colors.zinc.600}",
								},
							},
							overlay: {
								value: {
									base: "0px 0px 0px 1px {colors.zinc.300}, 0px 2px 1px 0px {colors.zinc.200}, 2px 0px 1px 0px {colors.zinc.200}, -2px 0px 1px 0px {colors.zinc.200}, 0px -2px 1px 0px {colors.zinc.200}",
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
										_dark: "{colors.zinc.700} 0px 1px 5px inset",
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
		},
	},
});
