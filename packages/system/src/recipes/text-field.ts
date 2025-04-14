import { defineRecipe } from "@pandacss/dev";

export const textFieldRecipe = defineRecipe({
	className: "textfield",
	base: {
		borderRadius: "sm",
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		border: "interactive.neutral.default",
		background: "bg.well.interactive.neutral.default",
		// background: "black",
		boxShadow: "well.interactive.neutral.default",
		padding: "2px 4px 2px 12px",
		minHeight: "32px",
		outline: "none",
		fontSize: "sm",
		lineHeight: "1.25rem",
		width: "100%",

		_hover: {
			border: "interactive.neutral.hover",
			boxShadow: "well.interactive.neutral.hover",
		},

		_active: {
			border: "interactive.neutral.pressed !important",
			boxShadow: "well.interactive.neutral.pressed !important",
			background: "bg.well.interactive.neutral.pressed",
		},

		_focusVisible: {
			border: "interactive.neutral.pressed !important",
			background: "bg.well.interactive.neutral.pressed",
			boxShadow: "well.interactive.neutral.pressed !important",
		},
	},
});
