import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { selectors } from "../sprinkles.css";
import { themeContract } from "../contract.css";
import { style } from "@vanilla-extract/css";

export const buttonContent = style({
	selectors: {
		".wwware-button:is([aria-pressed=true], [data-pressed]) &": {
			transform: "translateY(1px)",
		},
	},
});

// Button recipe migrated from the former Panda recipe in button.ts
export const button = recipe({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		height: "32px",
		borderRadius: themeContract.radii.md, // 6
		paddingLeft: themeContract.spacing[3],
		paddingRight: themeContract.spacing[3],
		paddingTop: themeContract.spacing[1],
		paddingBottom: themeContract.spacing[1],
		cursor: "pointer",
		transition:
			"border, background-position 0.25s cubic-bezier(0.075, 0.82, 0.165, 1)",
		textDecoration: "none",
		textAlign: "center",
		fontSize: "14px", // maps to sm
		fontWeight: 700,
		outline: "none",
		lineHeight: "1rem",
		backgroundSize: "200% 200% !important",
		backgroundPosition: "0% 40% !important",
		textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
		selectors: {
			[selectors.hover]: { backgroundPosition: "0% 0% !important" },
			[selectors.pressed]: {
				backgroundPosition: "0% -50% !important",
			},
			[selectors.focusVisible]: {
				outlineOffset: "1px",
				outline: `dotted thin ${themeContract.colors.black}`,
			},
			"&:is(:disabled, [data-disabled])": {
				cursor: "not-allowed",
				opacity: 0.5,
			},
		},
	},
	variants: {
		intent: {
			neutral: {
				color: themeContract.colors.black,
				textShadow: "1px 1px 1px rgba(255, 255, 255, 0.85)",
				background:
					themeContract.semantic.bg.raised.interactive.neutral.default,
				border:
					themeContract.semantic.borders.raised.interactive.neutral.default,
				boxShadow:
					themeContract.semantic.shadows.raised.interactive.neutral.default,
				selectors: {
					[selectors.hover]: {
						background:
							themeContract.semantic.bg.raised.interactive.neutral.hover,
						border:
							themeContract.semantic.borders.raised.interactive.neutral.hover,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.neutral.hover,
					},
					[selectors.pressed]: {
						background:
							themeContract.semantic.bg.raised.interactive.neutral.pressed,
						border:
							themeContract.semantic.borders.raised.interactive.neutral.pressed,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.neutral.pressed,
					},
				},
			},
			primary: {
				color: themeContract.colors.white,
				background:
					themeContract.semantic.bg.raised.interactive.primary.default,
				border:
					themeContract.semantic.borders.raised.interactive.primary.default,
				boxShadow:
					themeContract.semantic.shadows.raised.interactive.primary.default,
				selectors: {
					[selectors.focusVisible]: {
						outlineColor: themeContract.colors.blue[600],
					},
					[selectors.hover]: {
						background:
							themeContract.semantic.bg.raised.interactive.primary.hover,
						border:
							themeContract.semantic.borders.raised.interactive.primary.hover,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.primary.hover,
					},
					[selectors.pressed]: {
						background:
							themeContract.semantic.bg.raised.interactive.primary.pressed,
						border:
							themeContract.semantic.borders.raised.interactive.primary.pressed,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.primary.pressed,
					},
				},
			},
			danger: {
				color: themeContract.colors.white,
				background: themeContract.semantic.bg.raised.interactive.danger.default,
				border:
					themeContract.semantic.borders.raised.interactive.danger.default,
				boxShadow:
					themeContract.semantic.shadows.raised.interactive.danger.default,
				selectors: {
					[selectors.focusVisible]: {
						outlineColor: themeContract.colors.red[600],
					},
					[selectors.hover]: {
						background:
							themeContract.semantic.bg.raised.interactive.danger.hover,
						border:
							themeContract.semantic.borders.raised.interactive.danger.hover,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.danger.hover,
					},
					[selectors.pressed]: {
						background:
							themeContract.semantic.bg.raised.interactive.danger.pressed,
						border:
							themeContract.semantic.borders.raised.interactive.danger.pressed,
						boxShadow:
							themeContract.semantic.shadows.raised.interactive.danger.pressed,
					},
				},
			},
		},
		variant: {
			icon: {
				padding: themeContract.spacing[1],
				color: themeContract.semantic.text.default,
				textShadow: "none",
				background: "transparent",
				boxShadow: "none",
				border: "1px solid transparent",
				selectors: {
					[selectors.hover]: {
						boxShadow: "none",
						border: "1px solid transparent",
						background: themeContract.semantic.bg.surface.l2,
					},
					[selectors.pressed]: {
						background: themeContract.semantic.bg.surface.l3,
						border: "1px solid transparent",
						boxShadow: "none",
					},
				},
			},
		},
	},
	defaultVariants: { intent: "neutral" },
});

export type ButtonVariants = RecipeVariants<typeof button>;
