import { defineRecipe } from "@pandacss/dev";

export const cardRecipe = defineRecipe({
	className: "card",
	base: {
		display: "flex",
		position: "relative",
		borderRadius: "lg",
		backgroundColor: "white",
		boxShadow:
			"0px 0px 0px 1px rgba(9,9,11,0.08), 0px 2px 2px 0px rgba(9,9,11,0.05)",
		paddingX: "6",
		paddingY: "4",
	},
});
