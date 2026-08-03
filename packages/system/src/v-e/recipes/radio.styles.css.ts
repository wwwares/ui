import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { group, is, selectors } from "../selectors";
import { edge, ringOnly } from "./_edge";

// Every visual state reads the RAC <Radio> root (the `.group`) through its
// data attributes — no recipe variants or render-prop re-renders needed.
export const radioCircleStyles = style({
	// transition only the edge visuals
	transition:
		"box-shadow 150ms cubic-bezier(0.075, 0.82, 0.165, 1), border-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
	top: 0,
	left: 0,
	display: "block",
	borderRadius: "50%",
	height: "20px",
	width: "20px",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	position: "relative",
	...edge("ridge", "neutral", "default"),

	"::before": {
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		position: "absolute",
		content: "''",
		borderRadius: "50%",
		display: "flex",
		height: "100%",
		width: "100%",
		scale: 0.4,
		background: themeContract.semantic.bg.ridge.interactive.neutral.reversed,
		opacity: 0,
	},

	selectors: {
		// source order = precedence (equal-specificity ties): selected beats the
		// neutral states, and the two-state combos below beat plain selected.
		[selectors.groupHover]: edge("ridge", "neutral", "hover"),
		[selectors.groupPressed]: edge("ridge", "neutral", "pressed"),

		[selectors.groupSelected]: edge("ridge", "primary", "default"),
		[`${selectors.groupSelected}::before`]: { opacity: 1 },
		[group(is.selected, is.hover)]: edge("ridge", "primary", "hover"),
		[group(is.selected, is.pressed)]: ringOnly("ridge", "primary", "pressed"),

		[selectors.groupFocusVisible]: {
			outline: "dotted thin",
		},

		[selectors.groupDisabled]: {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});
