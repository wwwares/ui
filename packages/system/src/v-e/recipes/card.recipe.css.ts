import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../utils";

export const cardRecipe = recipe({
	base: {
		display: "flex",
		position: "relative",
		borderRadius: vars.radii.lg,
		padding: `${vars.spacing[4]} ${vars.spacing[6]}`,
		color: vars.semantic.text.default,
		backgroundColor: vars.semantic.bg.surface.l1,
		boxShadow: vars.semantic.shadows.ridge.surface.default,
	},
	variants: {},
	defaultVariants: {},
});

export type CardRecipeVariants = Parameters<typeof cardRecipe>[0];
