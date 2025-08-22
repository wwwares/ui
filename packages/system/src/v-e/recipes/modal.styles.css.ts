import { style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
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
		background: themeContract.semantic.bg.surface.l1,
		// boxShadow: themeContract.semantic.shadows.overlay,
		boxShadow: `0px 7px 14px -8px ${themeContract.colors.stone[400]}`,
		borderRadius: themeContract.radii.lg,
		color: themeContract.semantic.text.default,
		border: `1px solid ${themeContract.colors.stone[300]}`,
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
	background: themeContract.colors.stone[200],
	borderTopLeftRadius: themeContract.radii.lg,
	borderTopRightRadius: themeContract.radii.lg,
	borderBottom: themeContract.semantic.borders.surface[0],
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingTop: themeContract.spacing[2],
	paddingBottom: themeContract.spacing[2],
	height: "48px",
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
});

export const footerStyles = style({
	minHeight: "58px",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	// boxShadow: themeContract.semantic.shadows.ridge.surface.default,
	boxShadow: `0px 7px 14px -8px ${themeContract.colors.stone[300]} inset`,
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingTop: themeContract.spacing[4],
	paddingBottom: themeContract.spacing[4],
	borderTop: themeContract.semantic.borders.surface[0],
	borderBottomLeftRadius: themeContract.radii.lg,
	borderBottomRightRadius: themeContract.radii.lg,
});

export const markerStyles = style({
	marginLeft: `calc(-1 * ${themeContract.spacing[3]})`,
	marginRight: `calc(-1 * ${themeContract.spacing[3]})`,
	paddingLeft: themeContract.spacing[3],
	paddingTop: themeContract.spacing[4],
	paddingBottom: themeContract.spacing[4],
	fontSize: "14px", // sm
	backgroundColor: themeContract.colors.stone[200],
	color: themeContract.colors.stone[800],
});

export const modalStyles = {
	overlayStyles,
	bodyRecipe,
	headerStyles,
	contentStyles,
	footerStyles,
	markerStyles,
};
export type ModalBodyVariants = RecipeVariants<typeof bodyRecipe>;
