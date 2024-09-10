import { themeSlotRecipe } from "..";

export const tabsSlotRecipe = themeSlotRecipe({
	className: "tabs",
	slots: ["tabs-container", "tab"],
	base: {
		"tabs-container": {
			display: "flex",
			flexDirection: "row",
			gap: "3",
			borderRadius: "md",
			width: "100%",
		},
		tab: {
			cursor: "pointer",
			borderRadius: "md",
			paddingX: "3",
			paddingY: "0.5",
			fontWeight: "semibold",
			position: "relative",
			transition: "all 60ms ease-in",
			color: "text.default",

			_before: {
				position: "absolute",
				display: "block",
				width: "100%",
				content: "''",
				height: "2px",
				bottom: 0,
				left: 0,
			},

			_hover: {
				background: "bg.surface.2",
				_pressed: {
					background: "bg.surface.3",
				},
				_selected: {
					outline: "none",
				},
			},
			_selected: {
				outline: "none",
				borderRadius: "{radii.md} {radii.md} 0 0",
				_before: {
					backgroundColor: "{colors.blue.600}",
				},
			},
		},
	},
});
