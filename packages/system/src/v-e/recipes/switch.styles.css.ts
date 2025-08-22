import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

export const switchRoot = style({
	flexShrink: 0,
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	width: "48px",
	height: "24px",
	padding: "0 0.25rem",
	position: "relative",
	borderRadius: themeContract.radii.xl,
	cursor: "pointer",
	transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
	background: themeContract.semantic.bg.well.interactive.neutral.default,
	boxShadow: themeContract.semantic.shadows.well.interactive.neutral.default,
	border: themeContract.semantic.borders.interactive.neutral.default,
	justifyContent: "flex-end",

	selectors: {
		[`${selectors.groupHover}`]: {
			border: themeContract.semantic.borders.interactive.neutral.hover,
			background: themeContract.semantic.bg.ridge.interactive.neutral.hover,
		},
		[`[data-selected]${selectors.groupHover}`]: {
			border: themeContract.semantic.borders.interactive.primary.hover,
			boxShadow: themeContract.semantic.shadows.ridge.interactive.primary.hover,
			background: themeContract.semantic.bg.ridge.interactive.primary.hover,
		},

		[selectors.groupPressed]: {
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.neutral.pressed,
			border: themeContract.semantic.borders.interactive.neutral.pressed,
			background: themeContract.semantic.bg.ridge.interactive.neutral.pressed,
		},

		[selectors.groupSelected]: {
			justifyContent: "flex-start",
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.primary.default,
			border: themeContract.semantic.borders.interactive.primary.default,
			color: themeContract.colors.stone["100"],
		},

		[`[data-selected][data-pressed]${selectors.groupHover}`]: {
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.primary.pressed,
			background: themeContract.semantic.bg.ridge.interactive.primary.pressed,
		},
	},
});

export const switchThumb = style({
	display: "grid",
	position: "absolute",
	height: "18px",
	width: "18px",
	borderRadius: themeContract.radii.xl,
	transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
	background: themeContract.semantic.bg.ridge.interactive.neutral.hover,
	border: themeContract.semantic.borders.interactive.neutral.default,
	boxShadow: `${themeContract.semantic.shadows.ridge.interactive.neutral.default}, 0 4px 6px -1px rgb(0 0 0 / 0.1)`,
	left: "0.25rem",
	transform: "translateX(0px)",

	selectors: {
		"[data-pressed] &": {
			transform: "none",
			width: "21px",
		},
		"[data-selected] &": {
			left: "calc(100% - 0.25rem - 21px)",
			transform: "translateX(3px)",
			border: themeContract.semantic.borders.interactive.neutral.pressed,
		},
		"[data-selected][data-pressed] &": {
			transform: "translateX(calc(100% - 21px))",
		},
	},
});

export const switchIcon = style({
	display: "flex",
	selectors: {
		[selectors.groupSelected]: {
			color: themeContract.colors.white,
		},
	},
});

export const switchSlots = {
	switchIcon,
	switchThumb,
	switchRoot,
};
