import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

export const segmentedControlContainer = style({
	display: "flex",
	gap: themeContract.spacing["1"],
	background: `${themeContract.colors.stone["200"]}`, // 50%
	padding: themeContract.spacing["1"],
	borderRadius: themeContract.radii.sm,
	width: "100%",
	height: "32px",
});

export const segmentedControlItem = style({
	flex: 1,
	borderRadius: themeContract.radii.sm,
	border: "1px solid transparent",
	cursor: "pointer",
	justifyContent: "center",
	display: "flex",
	alignItems: "center",

	selectors: {
		[selectors.focusVisible]: {
			outline: `${themeContract.colors.black} dotted thin`,
		},

		[selectors.hover]: {
			boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.hover,
			border: themeContract.semantic.borders.interactive.neutral.default,
			background: themeContract.semantic.bg.ridge.interactive.neutral.hover,
		},

		"&:is(:hover, [data-hovered]):is([aria-pressed=true], [data-pressed])": {
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.neutral.pressed,
			border: themeContract.semantic.borders.interactive.neutral.pressed,
			background: themeContract.semantic.bg.ridge.interactive.neutral.pressed,
		},

		"&:is([aria-selected=true], [data-selected])": {
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.primary.default,
			border: themeContract.semantic.borders.interactive.primary.default,
			color: themeContract.colors.stone["100"],
		},

		"&:is([aria-selected=true], [data-selected]):is(:hover, [data-hovered])": {
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			boxShadow:
				themeContract.semantic.shadows.ridge.interactive.primary.default,
			border: themeContract.semantic.borders.interactive.primary.default,
			color: themeContract.colors.stone["100"],
		},

		"&:is([aria-selected=true], [data-selected]):is([aria-pressed=true], [data-pressed]):is(:hover, [data-hovered])":
			{
				background: themeContract.semantic.bg.ridge.interactive.primary.default,
				boxShadow:
					themeContract.semantic.shadows.ridge.interactive.primary.default,
				border: themeContract.semantic.borders.interactive.primary.default,
				color: themeContract.colors.stone["100"],
			},
	},
});

export const segmentedControlStyles = {
	container: segmentedControlContainer,
	item: segmentedControlItem,
};
