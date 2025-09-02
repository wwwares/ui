import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

export const textFieldRecipe = recipe({
	base: {
		borderRadius: themeContract.radii.sm,
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		border: themeContract.semantic.borders.interactive.neutral.default,
		background: themeContract.semantic.bg.well.interactive.neutral.default,
		boxShadow: themeContract.semantic.shadows.well.interactive.neutral.default,
		// padding: `${themeContract.spacing[1]} ${themeContract.spacing[1]} ${themeContract.spacing[1]} ${themeContract.spacing[1]}`,
		padding: "2px 4px 2px 12px",
		height: "32px",
		outline: "none",
		fontSize: "14px", // sm
		lineHeight: "1.25rem",
		fontWeight: "normal",
		width: "100%",
		display: "flex",
		alignItems: "center",

		"::placeholder": {
			color: themeContract.colors.stone[400],
		},

		selectors: {
			[selectors.hover]: {
				border: themeContract.semantic.borders.interactive.neutral.hover,
				boxShadow:
					themeContract.semantic.shadows.well.interactive.neutral.hover,
			},

			[selectors.active]: {
				border: themeContract.semantic.borders.interactive.neutral.pressed,
				boxShadow:
					themeContract.semantic.shadows.well.interactive.neutral.pressed,
				background: themeContract.semantic.bg.well.interactive.neutral.pressed,
			},

			[selectors.focusWithin]: {
				border: themeContract.semantic.borders.interactive.neutral.pressed,
				background: themeContract.semantic.bg.well.interactive.neutral.pressed,
				boxShadow:
					themeContract.semantic.shadows.well.interactive.neutral.pressed,
			},
		},
	},
});

export type TextFieldRecipeVariants = Parameters<typeof textFieldRecipe>[0];
