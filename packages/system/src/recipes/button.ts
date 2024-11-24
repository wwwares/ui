import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
	className: "button",
	base: {
		display: "inline-flex",
		alignItems: "center",
		position: "relative",
		height: "32px",
		borderRadius: "6px",
		paddingX: "3",
		paddingY: "1.5",
		cursor: "pointer",
		transition:
			"border, background-position 0.25s cubic-bezier(0.075, 0.82, 0.165, 1)",
		textDecoration: "none",
		textAlign: "center",
		justifyContent: "center",

		textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
		lineHeight: "1rem",
		backgroundSize: "200% 200% !important",
		backgroundPosition: "0% 40% !important",
		fontSize: "0.8125rem",
		fontWeight: "bold",
		outline: "none",

		_disabled: {
			cursor: "not-allowed",
			opacity: 0.5,
		},

		_hover: {
			base: {
				backgroundPosition: "0% 0% !important",
			},
			_pressed: {
				backgroundPosition: "0% -50% !important",
				"& > *": {
					transform: "translateY(1px) !important",
				},
			},
		},

		_focusVisible: {
			outlineOffset: "1px",
			outline: "{colors.black} dotted thin",
		},

		_pressed: {},
	},

	variants: {
		intent: {
			neutral: {
				color: "black",
				textShadow: "1px 1px 1px rgba(255, 255, 255, 0.85)",

				background: "bg.raised.interactive.neutral.default",
				border: "raised.interactive.neutral.default",
				boxShadow: "raised.interactive.neutral.default",

				_hover: {
					base: {
						background: "bg.raised.interactive.neutral.hover",
						border: "raised.interactive.neutral.hover",
						boxShadow: "raised.interactive.neutral.hover",
					},
					_pressed: {
						background: "bg.raised.interactive.neutral.pressed",
						border: "raised.interactive.neutral.pressed",
						boxShadow: "raised.interactive.neutral.pressed",
					},
				},

				_pressed: {
					background: "bg.raised.interactive.neutral.pressed",
					border: "raised.interactive.neutral.pressed",
					boxShadow: "raised.interactive.neutral.pressed",
				},
			},
			primary: {
				color: "white",

				_focusVisible: {
					outlineColor: "blue.600",
				},

				background: "bg.raised.interactive.primary.default",
				border: "raised.interactive.primary.default",
				boxShadow: "raised.interactive.primary.default",

				_hover: {
					base: {
						background: "bg.raised.interactive.primary.hover",
						border: "raised.interactive.primary.hover",
						boxShadow: "raised.interactive.primary.hover",
					},
					_pressed: {
						background: "bg.raised.interactive.primary.pressed",
						border: "raised.interactive.primary.pressed",
						boxShadow: "raised.interactive.primary.pressed",
					},
				},

				_pressed: {
					background: "bg.raised.interactive.primary.pressed",
					border: "raised.interactive.primary.pressed",
					boxShadow: "raised.interactive.primary.pressed",
				},
			},
			danger: {
				color: "white",

				_focusVisible: {
					outlineColor: "red.600",
				},

				background: "bg.raised.interactive.danger.default",
				border: "raised.interactive.danger.default",
				boxShadow: "raised.interactive.danger.default",

				_hover: {
					base: {
						background: "bg.raised.interactive.danger.hover",
						border: "raised.interactive.danger.hover",
						boxShadow: "raised.interactive.danger.hover",
					},
					_pressed: {
						background: "bg.raised.interactive.danger.pressed",
						border: "raised.interactive.danger.pressed",
						boxShadow: "raised.interactive.danger.pressed",
					},
				},

				_pressed: {
					background: "bg.raised.interactive.danger.pressed",
					border: "raised.interactive.danger.pressed",
					boxShadow: "raised.interactive.danger.pressed",
				},
			},
		},
		variant: {
			icon: {
				padding: "1.5",
				color: "text.default",
				textShadow: "none",
				background: "transparent",
				boxShadow: "none",
				border: "1px solid transparent",
				_hover: {
					base: {
						boxShadow: "none",
						border: "1px solid transparent",
						background: "bg.surface.2",
					},
					_pressed: {
						background: "bg.surface.3",
						border: "1px solid transparent",
						boxShadow: "none",
					},
				},
			},
		},
	},
	// compoundVariants: [
	// 	{
	// 		intent: "danger",
	// 		// variant: "primary",
	// 		css: {},
	// 	},
	// ],
	defaultVariants: {
		// variant: "default",
		intent: "neutral",
	},
});
