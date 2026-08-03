import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { group, is, selectors } from "../selectors";
import { edge } from "./_edge";

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
	...edge("well", "neutral", "default"),
	justifyContent: "flex-end",

	selectors: {
		// source order = precedence (equal-specificity ties): selected beats the
		// neutral states, and the two-state combos below beat plain selected.
		[selectors.groupHover]: edge("ridge", "neutral", "hover"),
		[selectors.groupPressed]: edge("ridge", "neutral", "pressed"),

		[selectors.groupSelected]: {
			...edge("ridge", "primary", "default"),
			justifyContent: "flex-start",
			color: themeContract.colors.stone["100"],
		},
		[group(is.selected, is.hover)]: edge("ridge", "primary", "hover"),
		// no hover gate — keyboard presses get pressed feedback too
		[group(is.selected, is.pressed)]: edge("ridge", "primary", "pressed"),
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
	border: `1px solid ${themeContract.semantic.borders.ridge.interactive.neutral.default}`,
	boxShadow: `${themeContract.semantic.shadows.ridge.interactive.neutral.default}, ${themeContract.semantic.shadows.surface.floating.sm}`,
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
			border: `1px solid ${themeContract.semantic.borders.ridge.interactive.neutral.pressed}`,
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
