import { createVar, keyframes } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";
import { overlayStyles } from "./modal.styles.css";

export const offscreen = createVar();
const slide = keyframes({ from: { transform: offscreen } });
// Animates the color alone because opacity on the overlay would also fade the panel inside it
const dim = keyframes({ from: { backgroundColor: "transparent" } });

const animateWith = (name: string) => ({
	[selectors.entering]: { animation: `${name} 200ms ease-out` },
	[selectors.exiting]: { animation: `${name} 150ms ease-in reverse` },
});

const border = `1px solid ${themeContract.semantic.borders.surface.ring}`;
const sideWidth = "min(28rem, 100vw)";

const overlayRecipe = recipe({
	base: [overlayStyles, { selectors: animateWith(dim) }],
	variants: {
		placement: {
			left: { justifyContent: "flex-start" },
			right: { justifyContent: "flex-end" },
			bottom: { alignItems: "flex-end" },
		},
	},
	defaultVariants: {
		placement: "right",
	},
});

const bodyRecipe = recipe({
	base: {
		background: themeContract.semantic.bg.fill.chrome,
		boxShadow: themeContract.semantic.shadows.surface.floating.lg,
		color: themeContract.semantic.text.default,
		display: "flex",
		flexDirection: "column",
		selectors: animateWith(slide),
	},
	variants: {
		placement: {
			left: {
				vars: { [offscreen]: "translateX(-100%)" },
				width: sideWidth,
				height: "100%",
				// borderRight: border,
			},
			right: {
				vars: { [offscreen]: "translateX(100%)" },
				width: sideWidth,
				height: "100%",
				// borderLeft: border,
			},
			bottom: {
				vars: { [offscreen]: "translateY(100%)" },
				width: "100%",
				maxHeight: "90vh",
				// borderTop: border,
				borderTopLeftRadius: themeContract.radii.lg,
				borderTopRightRadius: themeContract.radii.lg,
			},
		},
	},
	defaultVariants: {
		placement: "right",
	},
});

export const drawerStyles = { overlayRecipe, bodyRecipe };
export type DrawerVariants = RecipeVariants<typeof bodyRecipe>;
