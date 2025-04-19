import { themeSlotRecipe } from "..";

export const tagsSlotRecipe = themeSlotRecipe({
	className: "tag-group",
	slots: ["container", "tag-wrapper", "tag"],
	base: {
		container: {
			display: "flex",
			flexDirection: "column",
			gap: 1,
		},
		"tag-wrapper": {
			display: "flex",
			gap: 3,
		},
		tag: {
			display: "flex",
			justifyContent: "center",
			fontSize: "sm",
			paddingX: "2",
			paddingY: "1",
			lineHeight: 1,
			cursor: "pointer",
			borderRadius: "md",
			border: "interactive.neutral.default",
			boxShadow: "ridge.interactive.neutral.default",
			background: "bg.ridge.interactive.neutral.default",
			transition: "all 80ms cubic-bezier(0.075, 0.82, 0.165, 1)",
			fontWeight: "normal",

			_focusVisible: {
				outline: "{colors.black} dotted thin",
			},

			_hover: {
				base: {
					boxShadow: "ridge.interactive.neutral.hover",
					// border: "interactive.neutral.hover",
					background: "bg.ridge.interactive.neutral.hover",
				},
			},

			_selected: {
				boxShadow: "ridge.interactive.neutral.pressed !important",
				// border: "interactive.neutral.default",
				border: "interactive.neutral.pressed",

				_hover: {
					base: {
						border: "interactive.primary.hover",
						boxShadow: "ridge.interactive.primary.hover",
						background: "bg.ridge.interactive.neutral.hover",
					},
				},
			},
		},
	},
});
