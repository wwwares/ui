import { defineRecipe } from "@pandacss/dev";

export const ButtonRecipe = defineRecipe({
	className: "button",
	base: {
		display: "inline-flex",
		alignItems: "center",
		position: "relative",
		height: "32px",
		borderRadius: "6px",
		paddingX: "3",
		paddingY: "1.5",
		cursor: "pointer",
	},
	variants: {
		variant: {
			default: {
				boxShadow:
					"0px 0px 0px 1px rgba(18, 55, 105, 0.03), 0px 2px 1px 0px rgba(42, 59, 81, 0.07)",
				border: "1px solid rgba(45, 45, 45, 0.17)",
				background:
					"linear-gradient(0deg, token(colors.gray.900), #FFFFFF),\
					linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
			},
			primary: {
				color: "white",

				background:
					"linear-gradient(0deg, #7E43FF, #7E43FF),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",

				border: "1px solid rgba(255, 255, 255, 0.17)",

				boxShadow:
					"0px 0px 0px 1px rgba(72, 1, 228, 0.76), 0px 1px 2px 0px rgba(37, 17, 79, 0.4)",
			},
		},
	},
	defaultVariants: {
		variant: "default",
	},
});
