import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";
import { edge } from "./_edge";

const filterButton = recipe({
	base: {
		height: "28px",
		display: "inline-flex",
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
		...edge("filter", "neutral", "default"),
		transition: "all 80ms cubic-bezier(0.075, 0.82, 0.165, 1)",

		selectors: {
			[selectors.hover]: edge("filter", "neutral", "hover"),
		},
	},
	variants: {
		selected: {
			true: {
				boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.hover,
				border: `1px solid ${themeContract.semantic.borders.ridge.interactive.primary.default}`,
				selectors: {
					[selectors.hover]: {
						boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.hover,
					},
				},
			},
		},
	},
	defaultVariants: {
		selected: false,
	},
});

const filterButtonIcon = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const innerButtonReset = {
	display: "inline-flex",
	alignItems: "center",
	background: "none",
	border: "none",
	padding: 0,
	margin: 0,
	font: "inherit",
	color: "inherit",
	lineHeight: 1,
	cursor: "pointer",
} as const;

const filterButtonClear = style({
	...innerButtonReset,
	justifyContent: "center",
	selectors: {
		[selectors.focusVisible]: {
			outline: `${themeContract.colors.black} dotted thin`,
			outlineOffset: "1px",
		},
	},
});

const filterButtonLabel = style({
	...innerButtonReset,
	gap: themeContract.spacing[1],
	selectors: {
		[selectors.focusVisible]: {
			outline: `${themeContract.colors.black} dotted thin`,
			outlineOffset: "1px",
		},
	},
});

const filterButtonValue = style({
	opacity: 0.7,
});

const filterCheck = style({
	width: "16px",
	height: "16px",
	flexShrink: 0,
	borderRadius: themeContract.radii.sm,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: themeContract.colors.white,
	...edge("ridge", "neutral", "default"),
});

const filterCheckChecked = style({
	...edge("ridge", "primary", "default"),
});

const filterCheckIcon = style({
	display: "flex",
});

const filterFooter = style({
	display: "flex",
	justifyContent: "flex-end",
	gap: themeContract.spacing[1],
	paddingTop: themeContract.spacing[1],
	marginTop: themeContract.spacing[1],
	// borderTop: `1px solid ${themeContract.semantic.borders.surface.divider}`,
});

export const filterButtonStyles = {
	filterButton,
	filterButtonIcon,
	filterButtonClear,
	filterButtonLabel,
	filterButtonValue,
	filterCheck,
	filterCheckChecked,
	filterCheckIcon,
	filterFooter,
};
