import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

export const radioCircleRecipe = recipe({
	base: {
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
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
		border: themeContract.semantic.borders.interactive.neutral.default,
		boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.default,
		background: themeContract.semantic.bg.ridge.interactive.neutral.default,

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
				border: themeContract.semantic.borders.interactive.primary.default,
				boxShadow:
					themeContract.semantic.shadows.ridge.interactive.primary.default,
				background: themeContract.semantic.bg.ridge.interactive.primary.default,

				[`${selectors.groupHover}`]: {
					border: themeContract.semantic.borders.interactive.primary.hover,
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.primary.hover,
					background: themeContract.semantic.bg.ridge.interactive.primary.hover,
				},

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
				[`${selectors.groupHover}`]: {
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.neutral.hover,
					border: themeContract.semantic.borders.interactive.neutral.hover,
					background: themeContract.semantic.bg.ridge.interactive.neutral.hover,
				},
			},
		},
		{
			variants: {
				checked: false,
				pressed: true,
			},
			style: {
				boxShadow:
					themeContract.semantic.shadows.ridge.interactive.neutral.pressed,
				border: themeContract.semantic.borders.interactive.primary.default,
				background: themeContract.semantic.bg.ridge.interactive.neutral.pressed,
			},
		},
		{
			variants: {
				checked: true,
				pressed: true,
			},
			style: {
				[`${selectors.groupHover}`]: {
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.primary.pressed,
				},
			},
		},
	],
});
