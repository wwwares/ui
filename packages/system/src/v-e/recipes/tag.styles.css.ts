import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { edge } from "./_edge";

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
		borderRadius: themeContract.radii.lg,
		color: themeContract.colors.black[400],
		fontWeight: "400",
		lineHeight: 1,
		cursor: "pointer",
		...edge("filter", "neutral", "default"),
		transition: "all 80ms cubic-bezier(0.075, 0.82, 0.165, 1)",
	},
	variants: {
		focused: {
			true: {
				border: `1px dashed ${themeContract.semantic.borders.ridge.interactive.neutral.hover}`,
			},
		},
		selected: {
			true: {
				...edge("filter", "primary", "default", { borderStyle: "solid" }),
				color: themeContract.colors.stone[100],
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
