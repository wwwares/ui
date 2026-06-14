import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

export const tag = recipe({
	base: {
		height: "28px",
		display: "flex",
		alignItems: "center",
		fontSize: "14px",
		gap: themeContract.spacing[1],
		paddingLeft: themeContract.spacing[2],
		paddingRight: themeContract.spacing[2],
		paddingTop: themeContract.spacing[1],
		paddingBottom: themeContract.spacing[1],
		borderRadius: themeContract.radii.md,
		fontWeight: "400",
		lineHeight: 1,
		cursor: "pointer",
		// border: themeContract.semantic.borders.interactive.neutral.default,
		// boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.default,
		background: themeContract.semantic.bg.ridge.interactive.neutral.default,
		transition: "all 80ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		// borderStyle: "dashed",
		boxShadow: `0px 0px 0px 1px #0000002b, ${themeContract.semantic.shadows.ridge.interactive.neutral.default}, 0px 3px 3px -2px #00000029`,
		border: "none",

		selectors: {
			[selectors.hover]: {
				boxShadow: `0px 0px 0px 1px #0000002b, ${themeContract.semantic.shadows.ridge.interactive.neutral.hover}, 0px 3px 3px -2px #00000029`,
				background: themeContract.semantic.bg.ridge.interactive.neutral.hover,
				// border: themeContract.semantic.borders.interactive.neutral.hover,
				// borderStyle: "dashed",
			},
		},
	},
	variants: {
		focused: {
			true: {
				// outline: `dotted thin`,
				border: themeContract.semantic.borders.interactive.neutral.hover,
			},
		},
		selected: {
			true: {
				background: themeContract.semantic.bg.ridge.interactive.primary.default,
				boxShadow: `0px 0px 0px 1px ${themeContract.colors.blue[500]}, ${themeContract.semantic.shadows.ridge.interactive.primary.default}`,
				// border: themeContract.semantic.borders.interactive.primary.default,
				color: themeContract.colors.stone[100],

				selectors: {
					[selectors.hover]: {
						boxShadow: `0px 0px 0px 1px ${themeContract.colors.blue[700]}, ${themeContract.semantic.shadows.ridge.interactive.primary.hover}`,
						background:
							themeContract.semantic.bg.ridge.interactive.primary.default,
						// boxShadow:
						// 	themeContract.semantic.shadows.ridge.interactive.primary.default,
						// border: themeContract.semantic.borders.interactive.primary.default,
						color: themeContract.colors.stone[100],
						// 		border: "interactive.primary.hover",
						// 		boxShadow: "ridge.interactive.primary.hover",
						// 		background: "bg.ridge.interactive.primary.hover",
					},

					// [selectors.active]: {
					// 	background:
					// 		themeContract.semantic.bg.ridge.interactive.primary.default,
					// 	boxShadow:
					// 		themeContract.semantic.shadows.ridge.interactive.primary.default,
					// 	border: themeContract.semantic.borders.interactive.primary.default,
					// 	color: themeContract.colors.stone[100],
					// 	// 		boxShadow: "ridge.interactive.primary.pressed",
					// 	// 		background: "bg.ridge.interactive.primary.pressed",
					// },
				},
			},
		},
	},
	defaultVariants: {
		selected: false,
	},
});

export const container = style({
	display: "flex",
	flexDirection: "column",
	gap: themeContract.spacing[1],
});

export const tagWrapper = style({
	display: "flex",
	gap: themeContract.spacing[3],
});

export const tagSlots = {
	container,
	tagWrapper,
	tag,
};
