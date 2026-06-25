import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";
import { edge, ringOnly } from "./_edge";

export const checkIconRecipe = recipe({
	base: {
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
				"box-shadow 150ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
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
	},

	variants: {
		pressed: {
			true: {},
			false: {},
		},
		checked: {
			true: {
				"::before": edge("ridge", "primary", "default"),

				[`${selectors.groupHover}::before`]: edge("ridge", "primary", "hover"),

				"::after": {
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
				"::before": {
					outline: "dotted thin",
				},
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
				[`${selectors.groupHover}::before`]: edge("ridge", "neutral", "hover"),
			},
		},
		{
			variants: {
				checked: false,
				pressed: true,
			},
			style: {
				"::before": edge("ridge", "neutral", "pressed"),
			},
		},
		{
			variants: {
				checked: true,
				pressed: false,
			},
			style: {
				selectors: {
					"&:hover::before": edge("ridge", "primary", "hover"),
				},
			},
		},
		{
			variants: {
				checked: true,
				pressed: true,
			},
			style: {
				[`${selectors.groupHover}::before`]: ringOnly(
					"ridge",
					"primary",
					"pressed",
				),
			},
		},
	],
});
