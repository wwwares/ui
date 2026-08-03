import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { style } from "@vanilla-extract/css";

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
				background: themeContract.semantic.bg.feedback.success.default,
				border: `1px solid ${themeContract.semantic.borders.feedback.success.default}`,
				color: themeContract.semantic.text.feedback.success.default,
				// "@media": {
				// 	"(prefers-color-scheme: dark)": {
				// 		background: `linear-gradient(to bottom right, ${withOpacity(themeContract.colors.green[950], 80)}, ${withOpacity(themeContract.colors.green[900], 60)}, ${withOpacity(themeContract.colors.green[800], 40)})`,
				// 		borderColor: withOpacity(themeContract.colors.green[700], 50),
				// 		color: themeContract.colors.green[100],
				// 		borderTopColor: withOpacity(themeContract.colors.green[600], 30),
				// 	},
				// },
			},
			error: {
				background: themeContract.semantic.bg.feedback.error.default,
				border: `1px solid ${themeContract.semantic.borders.feedback.error.default}`,
				color: themeContract.semantic.text.feedback.error.default,
				// "@media": {
				// 	"(prefers-color-scheme: dark)": {
				// 		background: `linear-gradient(to bottom right, ${withOpacity(themeContract.colors.red[950], 80)}, ${withOpacity(themeContract.colors.red[900], 60)}, ${withOpacity(themeContract.colors.red[800], 40)})`,
				// 		borderColor: withOpacity(themeContract.colors.red[700], 50),
				// 		color: themeContract.colors.red[100],
				// 		borderTopColor: withOpacity(themeContract.colors.red[600], 30),
				// 	},
				// },
			},
			warning: {
				background: themeContract.semantic.bg.feedback.warning.default,
				border: `1px solid ${themeContract.semantic.borders.feedback.warning.default}`,
				color: themeContract.semantic.text.feedback.warning.default,
				// "@media": {
				// 	"(prefers-color-scheme: dark)": {
				// 		background: `linear-gradient(to bottom right, ${withOpacity(themeContract.colors.amber[950], 80)}, ${withOpacity(themeContract.colors.amber[900], 60)}, ${withOpacity(themeContract.colors.amber[800], 40)})`,
				// 		borderColor: withOpacity(themeContract.colors.amber[700], 50),
				// 		color: themeContract.colors.amber[100],
				// 		borderTopColor: withOpacity(themeContract.colors.amber[600], 30),
				// 	},
				// },
			},
			info: {
				background: themeContract.semantic.bg.feedback.info.default,
				border: `1px solid ${themeContract.semantic.borders.feedback.info.default}`,
				color: themeContract.semantic.text.feedback.info.default,
				// 	"@media": {
				// 		"(prefers-color-scheme: dark)": {
				// 			background: `linear-gradient(to bottom right, ${withOpacity(themeContract.colors.blue[950], 80)}, ${withOpacity(themeContract.colors.blue[900], 60)}, ${withOpacity(themeContract.colors.blue[800], 40)})`,
				// 			borderColor: withOpacity(themeContract.colors.blue[700], 50),
				// 			color: themeContract.colors.blue[100],
				// 			borderTopColor: withOpacity(themeContract.colors.blue[600], 30),
				// 		},
				// 	},
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
	},
	variants: {
		variant: {
			success: {
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: `1px solid ${themeContract.semantic.borders.feedback.success.default}`,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.green[100]}`,
			},
			error: {
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: `1px solid ${themeContract.semantic.borders.feedback.error.default}`,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.red[100]}`,
			},
			warning: {
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: `1px solid ${themeContract.semantic.borders.feedback.warning.default}`,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.amber[100]}`,
			},
			info: {
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: `1px solid ${themeContract.semantic.borders.feedback.info.default}`,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.blue[100]}`,
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
	background:
		"repeating-linear-gradient(45deg,transparent,transparent 10px,#ffffffbf 10px,#ffffffbf 20px)",
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
				color: themeContract.colors.green[900],
			},
			error: {
				color: themeContract.colors.red[900],
			},
			warning: {
				color: themeContract.colors.amber[900],
			},
			info: {
				color: themeContract.colors.blue[900],
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
