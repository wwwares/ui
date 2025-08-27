import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { withOpacity } from "../utils";

export const alertRecipe = recipe({
	base: {
		borderRadius: themeContract.radii.md,
		display: "flex",
		gap: themeContract.spacing[3],
		flexDirection: "column",
		lineHeight: 1,
		height: "fit-content",
	},
	variants: {
		variant: {
			success: {
				background: themeContract.semantic.bg.feedback.success.default,
				border: themeContract.semantic.borders.feedback.success.default,
				color: themeContract.semantic.text.feedback.success.default,
				// borderTopColor: themeContract.semantic.borders.feedback.success.default,
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
				border: themeContract.semantic.borders.feedback.error.default,
				color: themeContract.semantic.text.feedback.error.default,
				// borderTopColor: themeContract.semantic.borders.feedback.error.default,
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
				border: themeContract.semantic.borders.feedback.warning.default,
				color: themeContract.semantic.text.feedback.warning.default,
				// borderTopColor: themeContract.semantic.borders.feedback.warning.default,
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
				border: themeContract.semantic.borders.feedback.info.default,
				color: themeContract.semantic.text.feedback.info.default,
				// borderTopColor: themeContract.semantic.borders.feedback.info.default,
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

export const alertButtonRecipe = recipe({
	base: {
		border: "1px solid",
		borderRadius: themeContract.radii.sm,
		padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
		fontSize: "14px",
		fontWeight: 500,
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		":hover": {
			background: themeContract.colors.white,
		},
	},
	variants: {
		variant: {
			success: {
				background: withOpacity(themeContract.colors.white, 80),
				borderColor: themeContract.colors.green[300],
				color: themeContract.colors.green[800],
				":hover": {
					background: themeContract.colors.white,
					borderColor: themeContract.colors.green[400],
				},
				"@media": {
					"(prefers-color-scheme: dark)": {
						background: withOpacity(themeContract.colors.green[800], 30),
						borderColor: withOpacity(themeContract.colors.green[600], 50),
						color: themeContract.colors.green[100],
						backdropFilter: "blur(4px)",
						boxShadow: `0 10px 15px -3px ${withOpacity(themeContract.colors.green[900], 20)}`,
						":hover": {
							background: withOpacity(themeContract.colors.green[700], 40),
						},
					},
				},
			},
			error: {
				background: withOpacity(themeContract.colors.white, 80),
				borderColor: themeContract.colors.red[300],
				color: themeContract.colors.red[800],
				":hover": {
					background: themeContract.colors.white,
					borderColor: themeContract.colors.red[400],
				},
				"@media": {
					"(prefers-color-scheme: dark)": {
						background: withOpacity(themeContract.colors.red[800], 30),
						borderColor: withOpacity(themeContract.colors.red[600], 50),
						color: themeContract.colors.red[100],
						backdropFilter: "blur(4px)",
						boxShadow: `0 10px 15px -3px ${withOpacity(themeContract.colors.red[900], 20)}`,
						":hover": {
							background: withOpacity(themeContract.colors.red[700], 40),
						},
					},
				},
			},
			warning: {
				background: withOpacity(themeContract.colors.white, 80),
				borderColor: themeContract.colors.amber[300],
				color: themeContract.colors.amber[800],
				":hover": {
					background: themeContract.colors.white,
					borderColor: themeContract.colors.amber[400],
				},
				"@media": {
					"(prefers-color-scheme: dark)": {
						background: withOpacity(themeContract.colors.amber[800], 30),
						borderColor: withOpacity(themeContract.colors.amber[600], 50),
						color: themeContract.colors.amber[100],
						backdropFilter: "blur(4px)",
						boxShadow: `0 10px 15px -3px ${withOpacity(themeContract.colors.amber[900], 20)}`,
						":hover": {
							background: withOpacity(themeContract.colors.amber[700], 40),
						},
					},
				},
			},
			info: {
				background: withOpacity(themeContract.colors.white, 80),
				borderColor: themeContract.colors.blue[300],
				color: themeContract.colors.blue[800],
				":hover": {
					background: themeContract.colors.white,
					borderColor: themeContract.colors.blue[400],
				},
				"@media": {
					"(prefers-color-scheme: dark)": {
						background: withOpacity(themeContract.colors.blue[800], 30),
						borderColor: withOpacity(themeContract.colors.blue[600], 50),
						color: themeContract.colors.blue[100],
						backdropFilter: "blur(4px)",
						boxShadow: `0 10px 15px -3px ${withOpacity(themeContract.colors.blue[900], 20)}`,
						":hover": {
							background: withOpacity(themeContract.colors.blue[700], 40),
						},
					},
				},
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
		padding: `${themeContract.spacing[4]} ${themeContract.spacing[3]}`,
	},
	variants: {
		variant: {
			success: {
				// background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4))`,
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: themeContract.semantic.borders.feedback.success.default,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.green[100]}`,
			},
			error: {
				// background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4))`,
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: themeContract.semantic.borders.feedback.error.default,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.red[100]}`,
			},
			warning: {
				// background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4))`,
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: themeContract.semantic.borders.feedback.warning.default,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.amber[100]}`,
			},
			info: {
				background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
				borderBottom: themeContract.semantic.borders.feedback.info.default,
				boxShadow: `0px 1px 2px 0px ${themeContract.colors.blue[100]}`,
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

export const alertDescriptionRecipe = recipe({
	base: {
		paddingLeft: themeContract.spacing[3],
		paddingBottom: themeContract.spacing[3],
		paddingRight: themeContract.spacing[3],
		fontSize: "14px",
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
	alertButtonRecipe,
	alertHeaderRecipe,
	alertDescriptionRecipe,
};

export type AlertVariants = RecipeVariants<typeof alertRecipe>;
