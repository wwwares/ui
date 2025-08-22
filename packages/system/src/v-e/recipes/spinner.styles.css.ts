import { keyframes } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";

// Spin keyframes animation
const spin = keyframes({
	to: {
		transform: "rotate(360deg)",
	},
});

// Spinner recipe with merged base styles
export const spinnerRecipe = recipe({
	base: {
		width: "28px",
		height: "28px",
		display: "inline-block",
		borderRadius: "50%",
		border: `2px solid ${themeContract.colors.stone[200]}`,
		borderTopColor: themeContract.colors.stone[900],
		animation: `${spin} 0.875s cubic-bezier(0.57, 0.59, 0.59, 0.46) infinite`,
	},
	variants: {
		inverted: {
			true: {
				border: `2px solid ${themeContract.colors.stone[900]}`,
				borderTopColor: themeContract.colors.stone[200],
			},
		},
	},
});

export type SpinnerVariants = RecipeVariants<typeof spinnerRecipe>;
