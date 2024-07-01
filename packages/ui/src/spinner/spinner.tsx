import { defineKeyframes } from "@pandacss/dev";
import { styled } from "@ui-ware/system/jsx";

// todo: move to theme config
defineKeyframes({
	spin: {
		to: {
			transform: "rotate(360deg)",
		},
	},
});

const Spinner = styled("div", {
	base: {
		width: "28px",
		height: "28px",
		display: "inline-block",
		borderRadius: "50%",
		border: "2px solid {colors.slate.200}",
		borderTopColor: "{colors.slate.900}",
		animation: "spin .875s cubic-bezier(.57,.59,.59,.46) infinite",
	},
	variants: {
		inverted: {
			true: {
				border: "2px solid {colors.slate.900}",
				borderTopColor: "slate.200",
			},
		},
	},
});

export { Spinner };
