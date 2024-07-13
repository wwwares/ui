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
		lineHeight: "1",
		cursor: "pointer",
		transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
		textDecoration: "none",
		textAlign: "center",
		justifyContent: "center",

		_disabled: {
			cursor: "not-allowed",
			opacity: 0.5,
		},

		_focus: {
			outlineOffset: "-1px",
			outline: "none",
			// outline: "dotted thin",
		},

		_pressed: {
			"& > *": {
				transform: "translate3d(0, 0.0325rem, 0)",
			},
		},
	},

	variants: {
		intent: {
			danger: {
				color: "white",

				_focus: {
					outlineColor: "red.600",
				},

				background: "bg.raised.interactive.danger.default",
				border: "raised.interactive.primary.default",
				boxShadow: "raised.interactive.danger.default",

				_hover: {
					base: {
						background: "bg.raised.interactive.danger.hover",
						border: "raised.interactive.primary.hover",
						boxShadow: "raised.interactive.danger.hover",
					},
					_pressed: {
						background: "bg.raised.interactive.danger.pressed",
						border: "raised.interactive.primary.pressed",
						boxShadow: "raised.interactive.danger.pressed",
					},
				},

				_pressed: {
					background: "bg.raised.interactive.danger.pressed",
					border: "raised.interactive.primary.pressed",
					boxShadow: "raised.interactive.danger.pressed",
				},
			},
		},
		variant: {
			default: {
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

				_focus: {
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
		},
	},
	compoundVariants: [
		{
			intent: "danger",
			variant: "primary",
			css: {},
		},
	],
	defaultVariants: {
		variant: "default",
	},
});
