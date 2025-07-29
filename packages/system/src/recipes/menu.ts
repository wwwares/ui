import { themeSlotRecipe } from "..";

export const menuSlotRecipe = themeSlotRecipe({
	className: "menu",
	slots: ["menu-container", "menu-item"],
	base: {
		"menu-container": {
			background: "bg.surface.1",
			borderRadius: "md",
			width: "200px",
			padding: "{spacing.1.5} {spacing.1}",
			maxWidth: "450px",
			border: "1px solid {colors.stone.300}",
			boxShadow: "0rem 0.25rem 0.375rem -0.125rem rgba(26,26,26,.2)",
			display: "flex",
			gap: "1px",
			flexDirection: "column",
			outline: "none",
		},
		"menu-item": {
			display: "flex",
			gap: "20px",
			padding: "{spacing.1} {spacing.2}",
			cursor: "pointer",
			borderRadius: "sm",
			outline: "none",
			_hover: {
				backgroundColor: "bg.surface.2",
			},
			_focus: {
				backgroundColor: "bg.surface.2",
			},
		},
	},
});
