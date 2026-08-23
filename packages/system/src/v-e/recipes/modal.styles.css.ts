import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";

export const overlayStyles = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100vw",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 100,
	background: themeContract.semantic.bg.overlay,
});

export const bodyRecipe = recipe({
	base: {
		background: themeContract.semantic.bg.surface.l0,
		boxShadow: themeContract.semantic.shadows.surface.floating.lg,
		borderRadius: themeContract.radii.lg,
		color: themeContract.semantic.text.default,
		border: `1px solid ${themeContract.semantic.borders.surface.ring}`,
		display: "flex",
		flexDirection: "column",
		maxHeight: "90vh",
	},
	variants: {
		size: {
			default: { width: "40vw" },
			wide: { width: "60vw" },
			full: { width: "80vw" },
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export const headerStyles = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	background: themeContract.semantic.bg.surface.l2,
	borderTopLeftRadius: themeContract.radii.lg,
	borderTopRightRadius: themeContract.radii.lg,
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingTop: themeContract.spacing[2],
	paddingBottom: themeContract.spacing[2],
	// height: "48px",
	fontWeight: 700,
	color: themeContract.semantic.text.label,
	alignItems: "center",
});

export const contentStyles = style({
	display: "flex",
	flexDirection: "column",
	gap: themeContract.spacing[8],
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingBottom: themeContract.spacing[7], // 3.5 * 2? approximated from original
	paddingTop: themeContract.spacing[8],
	borderTopRightRadius: themeContract.radii.md,
	borderTopLeftRadius: themeContract.radii.md,
	borderTop: `1px solid ${themeContract.semantic.borders.surface.divider}`,
	borderBottom: `1px solid ${themeContract.semantic.borders.surface.divider}`,
	borderBottomRightRadius: themeContract.radii.md,
	borderBottomLeftRadius: themeContract.radii.md,
	background: themeContract.semantic.bg.surface.l0,
	// Give top and bottom of content some depth that blends in to the header and footer folds
	position: "relative",
	zIndex: 1,
	boxShadow: themeContract.semantic.shadows.surface.fold,
});

export const contentBackgroundBlend = style({
	background: themeContract.semantic.bg.surface.l2,
});

export const footerStyles = style({
	// minHeight: "58px",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingTop: themeContract.spacing[2],
	paddingBottom: themeContract.spacing[2],
	background: themeContract.semantic.bg.surface.l2,
	borderBottomLeftRadius: themeContract.radii.lg,
	borderBottomRightRadius: themeContract.radii.lg,
});

export const markerStyles = style({
	marginLeft: `calc(-1 * ${themeContract.spacing[3]})`,
	marginRight: `calc(-1 * ${themeContract.spacing[3]})`,
	paddingLeft: themeContract.spacing[3],
	paddingTop: themeContract.spacing[2],
	paddingBottom: themeContract.spacing[2],
	fontSize: "14px", // sm
	background: themeContract.semantic.bg.surface.l1,
	color: themeContract.colors.stone[800],
	borderBottom: `1px solid ${themeContract.semantic.borders.surface.divider}`,
	// Swap color of top border and box shadow to match the bottom border style => dark line -> light line
	borderTop: `1px solid ${themeContract.semantic.borders.surface.highlight}`,
	boxShadow: `0 1px 0 0 ${themeContract.semantic.borders.surface.highlight}, 0 -1px 0 0 ${themeContract.semantic.borders.surface.divider}`,
});

export const modalStyles = {
	overlayStyles,
	bodyRecipe,
	headerStyles,
	contentStyles,
	footerStyles,
	markerStyles,
	contentBackgroundBlend,
};
export type ModalBodyVariants = RecipeVariants<typeof bodyRecipe>;
