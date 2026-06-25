import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";
import { edge, ringOnly } from "./_edge";

export const radioCircleRecipe = recipe({
	base: {
		// transition only the edge visuals
		transition:
			"box-shadow 150ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
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
	},

	variants: {
		pressed: {
			true: {},
			false: {},
		},
		checked: {
			true: {
				...edge("ridge", "primary", "default"),

				[`${selectors.groupHover}`]: edge("ridge", "primary", "hover"),

				"::before": {
					opacity: 1,
				},
			},
		},
		disabled: {
			true: {
				opacity: 0.5,
				cursor: "not-allowed",
			},
		},
		focused: {
			true: {
				outline: "dotted thin",
			},
		},
	},

	compoundVariants: [
		{
			variants: {
				checked: false,
				pressed: false,
			},
			style: {
				[`${selectors.groupHover}`]: edge("ridge", "neutral", "hover"),
			},
		},
		{
			variants: {
				checked: false,
				pressed: true,
			},
			style: edge("ridge", "neutral", "pressed"),
		},
		{
			variants: {
				checked: true,
				pressed: true,
			},
			style: {
				[`${selectors.groupHover}`]: ringOnly("ridge", "primary", "pressed"),
			},
		},
	],
});
