import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";
import { edge } from "./_edge";

export const textFieldRecipe = recipe({
	base: {
		borderRadius: themeContract.radii.sm,
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		...edge("well", "neutral", "default"),
		// padding: `${themeContract.spacing[1]} ${themeContract.spacing[1]} ${themeContract.spacing[1]} ${themeContract.spacing[1]}`,
		padding: "2px 4px 2px 12px",
		height: "28px",
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
			[selectors.hover]: edge("well", "neutral", "hover"),
			[selectors.active]: edge("well", "neutral", "pressed"),
			[selectors.focusWithin]: edge("well", "neutral", "pressed"),
		},
	},
});

export type TextFieldRecipeVariants = Parameters<typeof textFieldRecipe>[0];
