// import { defineRecipe } from "@pandacss/dev";
import { type RecipeVariantProps, cva } from "@ui-ware/system/css";

// export const ButtonRecipe = defineRecipe({
// 	className: "button",
// 	base: {
// 		display: "inline-flex",
// 		alignItems: "center",
// 		position: "relative",
// 		height: "32px",
// 		borderRadius: "6px",
// 		paddingX: "3",
// 		paddingY: "1.5",
// 		cursor: "pointer",
// 	},
// 	variants: {
// 		variant: {
// 			default: {
// 				boxShadow:
// 					"0px 0px 0px 1px rgba(18, 55, 105, 0.03), 0px 2px 1px 0px rgba(42, 59, 81, 0.07)",
// 				border: "1px solid rgba(45, 45, 45, 0.17)",
// 				background:
// 					"linear-gradient(0deg, token(colors.zinc.900), #FFFFFF),\
// 					linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
// 			},
// 			primary: {
// 				color: "white",

// 				background:
// 					"linear-gradient(0deg, #7E43FF, #7E43FF),\
// 					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",

// 				border: "1px solid rgba(255, 255, 255, 0.17)",

// 				boxShadow:
// 					"0px 0px 0px 1px rgba(72, 1, 228, 0.76), 0px 1px 2px 0px rgba(37, 17, 79, 0.4)",
// 			},
// 		},
// 	},
// 	defaultVariants: {
// 		variant: "default",
// 	},
// });
export const ButtonRecipe = cva({
	// className: "button",
	base: {
		display: "inline-flex",
		alignItems: "center",
		position: "relative",
		height: "32px",
		borderRadius: "6px",
		paddingX: "3",
		paddingY: "1.5",
		lineHeight: "1",
		cursor: "pointer",
		transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
		textDecoration: "none",
		textAlign: "center",

		_focus: {
			outlineOffset: "-1px",
			outline: "none",
			// outline: "dotted thin",
		},

		_pressed: {
			"& > *": {
				transform: "translate3d(0, 0.0325rem, 0)",
			},
		},
	},

	variants: {
		intent: {
			danger: {},
		},
		variant: {
			default: {
				background:
					"linear-gradient(0deg, {colors.zinc.100}, {colors.zinc.50}),\
						linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
				border: "1px solid rgba(0,0,0, 0.05)",
				boxShadow:
					"0px 0px 0px 1px {colors.zinc.300}, 0px 1px 2px 0px {colors.zinc.500}",

				_hover: {
					base: {
						background:
							"linear-gradient(0deg, {colors.zinc.50}, {colors.zinc.50}),\
						linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
					},
					_pressed: {
						background:
							"linear-gradient(0deg, {colors.zinc.200}, {colors.zinc.100}),\
						linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
						border: "1px solid rgba(0,0,0, 0.05)",
						boxShadow:
							"0px 0px 0px 1px {colors.zinc.400}, 0px 1px 2px 0px {colors.zinc.300} inset",
					},
				},

				_pressed: {
					background:
						"linear-gradient(0deg, {colors.zinc.200}, {colors.zinc.100}),\
					linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
					border: "1px solid rgba(0,0,0, 0.05)",
					boxShadow:
						"0px 0px 0px 1px {colors.zinc.400}, 0px 1px 2px 0px {colors.zinc.300} inset",
				},
			},
			primary: {
				color: "white",

				_focus: {
					outlineColor: "blue.600",
				},

				background:
					"linear-gradient(0deg, {colors.blue.600}, {colors.blue.500}),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",

				border: "1px solid rgba(255, 255, 255, 0.17)",

				boxShadow:
					"0px 0px 0px 1px {colors.blue.600}, 0px 1px 2px 0px {colors.blue.700}",

				_hover: {
					base: {
						background:
							"linear-gradient(0deg, {colors.blue.500}, {colors.blue.500}),\
						linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
					},
					_pressed: {
						background:
							"linear-gradient(0deg, {colors.blue.700}, {colors.blue.600}),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
						boxShadow:
							"0px 0px 0px 1px {colors.blue.600}, 0px 1px 2px 0px {colors.blue.700} inset",

						border: "1px solid rgba(255, 255, 255, 0.07)",
					},
				},

				_pressed: {
					background:
						"linear-gradient(0deg, {colors.blue.700}, {colors.blue.600}),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
					boxShadow:
						"0px 0px 0px 1px {colors.blue.600}, 0px 1px 2px 0px {colors.blue.700} inset",

					border: "1px solid rgba(255, 255, 255, 0.07)",
				},
			},
		},
	},
	compoundVariants: [
		{
			intent: "danger",
			variant: "default",
			css: {},
		},
	],
	defaultVariants: {
		variant: "default",
	},
});

export type ButtonRecipeProps = RecipeVariantProps<typeof ButtonRecipe>;
