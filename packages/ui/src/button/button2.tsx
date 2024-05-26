import { styled } from "@ui-ware/system/jsx";

const PandaButton = styled("button", {
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
		_active: {
			"& > *": {
				transform: "translate3d(0, 0.0325rem, 0)",
			},
		},
	},
	variants: {
		intent: {
			danger: {},
		},
		variant: {
			default: {
				boxShadow:
					"0px 0px 0px 1px rgba(18, 55, 105, 0.03), 0px 2px 1px 0px rgba(42, 59, 81, 0.07)",
				border: "1px solid rgba(45, 45, 45, 0.17)",
				background:
					"linear-gradient(0deg, token(colors.gray.50), token(colors.white)),\
					linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",

				_active: {
					background:
						"linear-gradient(0deg, token(colors.gray.100), token(colors.gray.50)),\
					linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%)",
					boxShadow:
						"0px 0px 0px 1px rgba(18, 55, 105, 0.03), 0px 2px 1px 0px rgba(42, 59, 81, 0.07) inset",
				},
			},
			primary: {
				color: "white",

				background:
					"linear-gradient(0deg, token(colors.violet.600), token(colors.violet.500)),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",

				border: "1px solid rgba(255, 255, 255, 0.17)",

				boxShadow:
					"0px 0px 0px 1px rgba(72, 1, 228, 0.76), 0px 1px 2px 0px rgba(37, 17, 79, 0.4)",

				_active: {
					background:
						"linear-gradient(0deg, token(colors.violet.700), token(colors.violet.600)),\
					linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
					boxShadow:
						"0px 0px 0px 1px rgba(72, 1, 228, 0.76), 0px 1px 2px 0px rgba(37, 17, 79, 0.4) inset",

					border: "1px solid rgba(255, 255, 255, 0.07)",
					// border: "1px solid rgba(255, 255, 255, 0.27)",
				},
			},
		},
	},
	compoundVariants: [
		{
			intent: "danger",
			variant: "default",
			css: {},
		},
	],
	defaultVariants: {
		variant: "default",
	},
});

export { PandaButton };
