import { themeSlotRecipe } from "..";

export const switchSlotRecipe = themeSlotRecipe({
	className: "switch",
	slots: ["root", "thumb", "icon"],
	base: {
		root: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			width: "48px",
			height: "24px",
			padding: "0.5",
			position: "relative",
			borderRadius: "xl",
			cursor: "pointer",
			transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
			background: "bg.well.interactive.neutral.default",
			boxShadow: "well.interactive.neutral.default",
			border: "interactive.neutral.default",
			justifyContent: "flex-end",
			_hover: {
				base: {
					border: "interactive.neutral.hover",
				},
				_pressed: {
					boxShadow: "ridge.interactive.neutral.pressed",
					border: "interactive.neutral.pressed",
					background: "bg.ridge.interactive.neutral.pressed",
				},
			},
			// not sure why i need this here and not pressed. maybe because its in hover?
			"[data-selected] &": {
				justifyContent: "flex-start",

				background: "bg.ridge.interactive.primary.default",
				boxShadow: "ridge.interactive.primary.default",
				border: "interactive.primary.default",
				color: "stone.100",

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
		thumb: {
			display: "grid !important",
			position: "absolute",
			height: "18px",
			width: "18px",
			borderRadius: "xl",
			transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
			background: "bg.ridge.interactive.neutral.hover",
			border: "interactive.neutral.default",
			boxShadow: "{shadows.ridge.interactive.neutral.default}, {shadows.md}",
			left: "0.5",
			transform: "translateX(0px)",

			// can't use _shortcuts since the data attr is on the parent el

			"[data-pressed] &": {
				transform: "none",
				width: "21px",
			},

			"[data-selected] &": {
				// edge: 100% left minus padding minus pressed button width
				left: "calc(100% - {spacing.0.5} - 21px)",
				transform: "translateX(3px)",
				border: "interactive.neutral.pressed",
			},
			"[data-selected][data-pressed] &": {
				// edge: 100% left minus padding minus pressed button width
				transform: "calc(100% - {spacing.0.5} - 21px)",
			},
		},
		icon: {
			"[data-selected] &": {
				color: "white",
			},
		},
	},
});
