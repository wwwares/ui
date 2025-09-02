import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

const containerStyles = style({
	background: themeContract.semantic.bg.surface.l1,
	boxShadow: themeContract.semantic.shadows.overlay,
	borderRadius: themeContract.radii.md,
	width: "fit-content",
});

const headerStyles = style({
	display: "flex",
	alignItems: "center",
	background: themeContract.semantic.bg.surface.l2,
	borderRadius: `${themeContract.radii.md} ${themeContract.radii.md} 0 0`,
	padding: themeContract.spacing[1],
	fontWeight: "bold",
	fontSize: "16px",
});

const weekdayStyles = style({
	background: themeContract.semantic.bg.surface.l3,
	borderTop: themeContract.semantic.borders.surface[0],
	borderBottom: themeContract.semantic.borders.surface[0],
});

const cellStyles = style({
	padding: `${themeContract.spacing[2]} 0`,
	margin: themeContract.spacing[1],
	fontSize: "14px",
	borderRadius: themeContract.radii.sm,
	cursor: "default",
	width: "2rem",
	height: "2rem",
	lineHeight: 1,

	selectors: {
		"&[data-outside-month]": {
			color: themeContract.colors.stone[400],
		},
		[`${selectors.hover}:not([data-outside-month])`]: {
			background: themeContract.semantic.bg.ridge.interactive.neutral.default,
		},
		[selectors.focusVisible]: {
			background: themeContract.semantic.bg.ridge.interactive.neutral.default,
			outline: "dotted thin",
		},
		[selectors.selected]: {
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			color: themeContract.semantic.text.inverted,
		},
		[selectors.pressed]: {
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			color: themeContract.semantic.text.inverted,
		},
	},
});

export const calendarStyles = {
	containerStyles,
	headerStyles,
	weekdayStyles,
	cellStyles,
};
