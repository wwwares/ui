import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { group, is, selectors } from "../selectors";
import { edge, ringOnly } from "./_edge";

// Every visual state reads the RAC <Checkbox> root (the `.group`) through its
// data attributes — no recipe variants or render-prop re-renders needed.
export const checkIconStyles = style({
	position: "relative",
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: "black",
	height: "20px",
	width: "24px",

	"::before": {
		// transition only the edge visuals — NOT `all`, which would animate the
		// dotted focus outline in/out.
		transition:
			"box-shadow 150ms cubic-bezier(0.075, 0.82, 0.165, 1), border-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		position: "absolute",
		content: "''",
		borderRadius: themeContract.radii.sm,
		display: "flex",
		height: "20px",
		width: "20px",
		...edge("ridge", "neutral", "default"),
	},

	"::after": {
		position: "absolute",
		top: "4px",
		content: "''",
		display: "flex",
		transform: "rotate(-45deg) scale(.7)",
		height: "8px",
		width: "16px",
		borderBottom: "white solid 4px",
		borderLeft: "white solid 4px",
		opacity: 0,
		cursor: "inherit",
	},

	selectors: {
		// source order = precedence (equal-specificity ties): selected beats the
		// neutral states, and the two-state combos below beat plain selected.
		[`${selectors.groupHover}::before`]: edge("ridge", "neutral", "hover"),
		[`${selectors.groupPressed}::before`]: edge("ridge", "neutral", "pressed"),

		[`${selectors.groupSelected}::before`]: edge("ridge", "primary", "default"),
		[`${selectors.groupSelected}::after`]: { opacity: 1 },
		[`${group(is.selected, is.hover)}::before`]: edge("ridge", "primary", "hover"),
		[`${group(is.selected, is.pressed)}::before`]: ringOnly("ridge", "primary", "pressed"),

		[`${selectors.groupFocusVisible}::before`]: {
			outline: "dotted thin",
		},

		[selectors.groupDisabled]: {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});
