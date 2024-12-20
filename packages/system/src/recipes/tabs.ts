import { themeSlotRecipe } from "..";

export const tabsSlotRecipe = themeSlotRecipe({
	className: "tabs",
	slots: ["tabs-container", "tab"],
	base: {
		"tabs-container": {
			display: "flex",
			flexDirection: "row",
			gap: "3",
			borderRadius: 0,
			width: "100%",
			borderBottom: "interactive.neutral.default",
		},
		tab: {
			cursor: "pointer",
			paddingX: "3",
			paddingY: "0.5",
			fontWeight: "normal",
			position: "relative",
			transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
			color: "text.default",

			_before: {
				borderRadius: "{radii.md} {radii.md} 0 0",
				position: "absolute",
				display: "block",
				width: "80%",
				// offset width by half,
				left: "10%",
				content: "''",
				height: "2px",
				zIndex: 5,
				bottom: "-1px",
			},

			outline: "none",
			_selected: {
				_before: {
					backgroundColor: "{colors.blue.600}",
				},
			},
			_hover: {
				_selected: {
					_before: {
						backgroundColor: "{colors.blue.600}",
					},
				},
				_before: {
					backgroundColor: "{colors.zinc.500}",
				},
			},
		},
	},
});
