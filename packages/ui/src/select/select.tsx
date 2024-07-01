import { styled } from "@ui-ware/system/jsx";

export const Select = styled("select", {
	base: {
		padding: "4px 8px",
		appearance: "none",
		transition: "all 60ms ease-in",
		borderRadius: "4px",
		display: "flex",
		border: "1px solid {colors.slate.200}",
		background: "linear-gradient(180deg, white, {colors.slate.50})",
		boxShadow: "{colors.slate.100} 0px 0px 1px 0px inset",

		_active: {
			boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset !important",
			background: "{colors.slate.100} !important",
			borderColor: "{colors.blue.600}",
		},

		_focus: {
			boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset !important",
			background: "{colors.slate.100} !important",
			borderColor: "{colors.blue.600}",
		},

		_hover: {
			"&:not(:focus)": {
				boxShadow: "{colors.slate.200} 1.25px 1.25px 1px -1px inset",
				background: "{colors.slate.50}",
				borderColor: "{colors.slate.300}",
			},
		},

		_before: {
			transition: "all 60ms ease-in",
			position: "absolute",
			content: "''",
			borderRadius: "4px",
			display: "flex",
			height: "18px",
			width: "18px",
			border: "1px solid {colors.slate.200}",
			background: "linear-gradient(180deg, white, {colors.slate.50})",
			boxShadow: "{colors.slate.100} 0px 0px 1px 0px inset",
		},

		_disabled: {
			opacity: "0.5",
			cursor: "auto",
		},
	},

	variants: {
		invalid: {
			true: {
				borderColor: "{colors.red.500}",
			},
		},
	},
});
