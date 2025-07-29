import { themeSlotRecipe } from "..";

export const segmentedControlSlotRecipe = themeSlotRecipe({
	className: "segmented-control",
	slots: ["sc-container", "sc-item"],
	base: {
		"sc-container": {
			display: "flex",
			gap: "1",
			background: "{colors.stone.200/50}",
			// boxShadow: "well.interactive.neutral.default",
			// border: "interactive.neutral.default",
			padding: "0.5",
			borderRadius: "sm",
			width: "100%",
			height: "32px",
		},
		"sc-item": {
			flex: 1,
			paddingX: "2",
			borderRadius: "sm",
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
					border: "interactive.neutral.default",
					background: "bg.ridge.interactive.neutral.hover",
				},
				_pressed: {
					// boxShadow: "ridge.interactive.neutral.pressed",
					// border: "interactive.neutral.pressed",
					// background: "bg.ridge.interactive.neutral.pressed",
				},
			},

			_selected: {
				background: "bg.ridge.interactive.primary.default",
				boxShadow: "ridge.interactive.primary.default",
				border: "interactive.primary.default",
				color: "stone.100",

				_hover: {
					base: {
						background: "bg.ridge.interactive.primary.default",
						boxShadow: "ridge.interactive.primary.default",
						border: "interactive.primary.default",
						color: "stone.100",
						// 		border: "interactive.primary.hover",
						// 		boxShadow: "ridge.interactive.primary.hover",
						// 		background: "bg.ridge.interactive.primary.hover",
					},
					_pressed: {
						background: "bg.ridge.interactive.primary.default",
						boxShadow: "ridge.interactive.primary.default",
						border: "interactive.primary.default",
						color: "stone.100",
						// 		boxShadow: "ridge.interactive.primary.pressed",
						// 		background: "bg.ridge.interactive.primary.pressed",
					},
				},
			},
		},
	},
});
