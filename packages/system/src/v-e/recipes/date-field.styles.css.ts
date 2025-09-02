import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

const dateSegmentStyles = style({
	padding: `0 ${themeContract.spacing[1]}`,
	borderRadius: themeContract.radii.xs,
	lineHeight: "1.25rem",
	display: "inline-block",
	selectors: {
		"&[data-placeholder]": {
			color: themeContract.colors.stone[400],
		},
		[selectors.focus]: {
			background: themeContract.semantic.bg.ridge.interactive.primary.default,
			color: themeContract.semantic.text.inverted,
		},
	},
});

export const dateFieldStyles = {
	dateSegmentStyles,
};
