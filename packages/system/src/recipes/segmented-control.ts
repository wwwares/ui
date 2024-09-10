import { themeSlotRecipe } from "..";

export const segmentedControlSlotRecipe = themeSlotRecipe({
	className: "segmented-control",
	slots: ["sc-container", "sc-item"],
	base: {
		"sc-container": {
			display: "flex",
			gap: "1",
			background: "bg.well.interactive.neutral.default",
			boxShadow: "well.interactive.neutral.default",
			border: "interactive.neutral.default",
			padding: "0.5",
			borderRadius: "sm",
			width: "100%",
		},
		"sc-item": {
			flex: 1,
			paddingX: "2",
			borderRadius: "xs",
			border: "1px solid transparent",
			cursor: "pointer",
			justifyContent: "center",
			display: "flex",
			// background: "bg.ridge.interactive.neutral.default",
			_focusVisible: {
				outline: "{colors.black} dotted thin",
			},

			_hover: {
				base: {
					boxShadow: "ridge.interactive.neutral.hover",
					border: "interactive.neutral.hover",
					background: "bg.ridge.interactive.neutral.hover",
				},
				_pressed: {
					boxShadow: "ridge.interactive.neutral.pressed",
					border: "interactive.neutral.pressed",
					background: "bg.ridge.interactive.neutral.pressed",
				},
			},

			_selected: {
				background: "bg.ridge.interactive.primary.default",
				boxShadow: "ridge.interactive.primary.default",
				border: "interactive.primary.default",
				color: "zinc.100",

				_hover: {
					base: {
						border: "interactive.primary.hover",
						boxShadow: "ridge.interactive.primary.hover",
						background: "bg.ridge.interactive.primary.hover",
					},
					_pressed: {
						boxShadow: "ridge.interactive.primary.pressed",
						background: "bg.ridge.interactive.primary.pressed",
					},
				},
			},
		},
	},
});
