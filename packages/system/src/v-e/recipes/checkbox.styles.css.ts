import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

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
			transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
			position: "absolute",
			content: "''",
			borderRadius: themeContract.radii.sm,
			display: "flex",
			height: "20px",
			width: "20px",
			border: themeContract.semantic.borders.interactive.neutral.default,
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.neutral.default,
			background: themeContract.semantic.bg.ridge.interactive.neutral.default,
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
				"::before": {
					border: themeContract.semantic.borders.interactive.primary.default,
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.primary.default,
					background:
						themeContract.semantic.bg.ridge.interactive.primary.default,
				},

				[`${selectors.groupHover}::before`]: {
					border: themeContract.semantic.borders.interactive.primary.hover,
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.primary.hover,
					background: themeContract.semantic.bg.ridge.interactive.primary.hover,
				},

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
				[`${selectors.groupHover}::before`]: {
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
				"::before": {
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.neutral.pressed,
					border: themeContract.semantic.borders.interactive.neutral.pressed,
					background:
						themeContract.semantic.bg.ridge.interactive.neutral.pressed,
				},
			},
		},
		{
			variants: {
				checked: true,
				pressed: false,
			},
			style: {
				selectors: {
					"&:hover::before": {
						border: themeContract.semantic.borders.interactive.primary.hover,
						boxShadow:
							themeContract.semantic.shadows.ridge.interactive.primary.hover,
						background:
							themeContract.semantic.bg.ridge.interactive.primary.hover,
					},
				},
			},
		},
		{
			variants: {
				checked: true,
				pressed: true,
			},
			style: {
				[`${selectors.groupHover}::before`]: {
					boxShadow:
						themeContract.semantic.shadows.ridge.interactive.primary.pressed,
				},
			},
		},
	],
});
