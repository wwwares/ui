import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";

// Floating surface shared by menu-family components (menu, filter popover).
const popover = style({
	background: themeContract.semantic.bg.surface.l0,
	borderRadius: themeContract.radii.md,
	minWidth: "200px",
	maxWidth: "320px",
	padding: themeContract.spacing[1],
	border: `1px solid ${themeContract.semantic.borders.surface.ring}`,
	boxShadow: themeContract.semantic.shadows.surface.floating.md,
	display: "flex",
	flexDirection: "column",
	gap: themeContract.spacing[1],
	outline: "none",
});

const list = style({
	display: "flex",
	flexDirection: "column",
	// gap: "1px",
	outline: "none",
});

const item = style({
	display: "flex",
	alignItems: "center",
	gap: themeContract.spacing[2],
	padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
	cursor: "pointer",
	border: "1px solid transparent",
	borderRadius: themeContract.radii.sm,
	outline: "none",
	selectors: {
		[`${selectors.hover}, ${selectors.focus}`]: {
			border: `1px solid ${themeContract.semantic.borders.surface.hairline}`,
			boxShadow: `0px 1px 1px 0px ${themeContract.semantic.bg.surface.l3}`, // , 0px 1px 0px 0px inset ${themeContract.semantic.bg.surface.l3}
			background: `linear-gradient(180deg, ${themeContract.semantic.bg.surface.l1} 75%, ${themeContract.semantic.bg.surface.l3} 100%)`,
		},
	},
});

const divider = recipe({
	base: {
		opacity: 0.6,
		flexShrink: 0,
	},
	variants: {
		orientation: {
			vertical: {
				width: "1px",
				alignSelf: "stretch",
				borderLeft: `1px solid ${themeContract.semantic.borders.ridge.interactive.neutral.default}`,
			},
			horizontal: {
				height: "1px",
				alignSelf: "stretch",
				borderTop: `1px solid ${themeContract.semantic.borders.ridge.interactive.neutral.default}`,
				// Bleed through the popover's inline padding so the rule runs edge to edge.
				marginInline: `calc(${themeContract.spacing[1]} * -1)`,
			},
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

export const popoverStyles = {
	popover,
	list,
	item,
	divider,
};
