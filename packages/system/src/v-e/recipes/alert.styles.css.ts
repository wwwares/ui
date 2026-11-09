import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { style } from "@vanilla-extract/css";

const { semantic } = themeContract;

export const alertRecipe = recipe({
	base: {
		borderRadius: themeContract.radii.md,
		display: "flex",
		flexDirection: "column",
		lineHeight: 1,
		height: "fit-content",
	},
	variants: {
		variant: {
			success: {
				background: semantic.bg.feedback.success.default,
				border: `1px solid ${semantic.borders.feedback.success.default}`,
				borderTopColor: semantic.borders.feedback.success.highlight,
				color: semantic.text.feedback.success.default,
			},
			error: {
				background: semantic.bg.feedback.error.default,
				border: `1px solid ${semantic.borders.feedback.error.default}`,
				borderTopColor: semantic.borders.feedback.error.highlight,
				color: semantic.text.feedback.error.default,
			},
			warning: {
				background: semantic.bg.feedback.warning.default,
				border: `1px solid ${semantic.borders.feedback.warning.default}`,
				borderTopColor: semantic.borders.feedback.warning.highlight,
				color: semantic.text.feedback.warning.default,
			},
			info: {
				background: semantic.bg.feedback.info.default,
				border: `1px solid ${semantic.borders.feedback.info.default}`,
				borderTopColor: semantic.borders.feedback.info.highlight,
				color: semantic.text.feedback.info.default,
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

export const alertHeaderRecipe = recipe({
	base: {
		borderRadius: `${themeContract.radii.md} ${themeContract.radii.md} ${themeContract.radii.lg} ${themeContract.radii.lg}`,
		padding: `${themeContract.spacing[3]} ${themeContract.spacing[2]}`,
		background: semantic.bg.feedback.header,
	},
	variants: {
		variant: {
			success: {
				borderBottom: `1px solid ${semantic.borders.feedback.success.default}`,
				boxShadow: semantic.shadows.feedback.success.header,
			},
			error: {
				borderBottom: `1px solid ${semantic.borders.feedback.error.default}`,
				boxShadow: semantic.shadows.feedback.error.header,
			},
			warning: {
				borderBottom: `1px solid ${semantic.borders.feedback.warning.default}`,
				boxShadow: semantic.shadows.feedback.warning.header,
			},
			info: {
				borderBottom: `1px solid ${semantic.borders.feedback.info.default}`,
				boxShadow: semantic.shadows.feedback.info.header,
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

const alertStripe = style({
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	position: "absolute",
	background: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${semantic.bg.feedback.stripe} 10px, ${semantic.bg.feedback.stripe} 20px)`,
	borderRadius: themeContract.radii.md,
	maskImage: "linear-gradient(to right, transparent 50%, #000 100%)",
	zIndex: 1,
});

export const alertDescriptionRecipe = recipe({
	base: {
		paddingLeft: themeContract.spacing[2],
		paddingBottom: themeContract.spacing[2],
		paddingRight: themeContract.spacing[2],
		paddingTop: themeContract.spacing[3],
		fontSize: "14px",
		position: "relative",
	},
	variants: {
		variant: {
			success: {
				color: semantic.text.feedback.success.muted,
			},
			error: {
				color: semantic.text.feedback.error.muted,
			},
			warning: {
				color: semantic.text.feedback.warning.muted,
			},
			info: {
				color: semantic.text.feedback.info.muted,
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

export const alertStyles = {
	alertRecipe,
	alertHeaderRecipe,
	alertDescriptionRecipe,
	alertStripe,
};

export type AlertVariants = RecipeVariants<typeof alertRecipe>;
