import { defineRecipe } from "@pandacss/dev";

export const cardRecipe = defineRecipe({
	className: "card",
	base: {
		display: "flex",
		position: "relative",
		borderRadius: "lg",
		color: "text.default",
		backgroundColor: "bg.ridge.surface",
		boxShadow: "ridge.surface.default",
		paddingX: "6",
		paddingY: "4",
	},
});
