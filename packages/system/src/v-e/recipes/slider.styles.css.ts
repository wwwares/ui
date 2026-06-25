import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";
import { edge } from "./_edge";

export const sliderContainer = style({
	width: "100%",
	display: "flex",
	height: themeContract.spacing[7],
	position: "relative",
	cursor: "col-resize",
});

export const sliderTrack = style({
	height: themeContract.spacing[7],
	top: "50%",
	background: themeContract.semantic.bg.surface.l2,
	position: "absolute",
	transform: "translateY(-50%)",
	width: "100%",
	borderRadius: themeContract.radii.sm,
});

export const sliderTrackFill = style({
	position: "absolute",
	top: "50%",
	height: themeContract.spacing[7],
	...edge("ridge", "neutral", "default"),
	transform: "translateY(-50%)",
	borderRadius: themeContract.radii.sm,
	display: "flex",
	justifyContent: "flex-end",

	selectors: {
		[selectors.hover]: edge("ridge", "neutral", "hover"),
		[selectors.focusWithin]: edge("ridge", "neutral", "hover"),
	},
});

export const sliderThumb = style({
	height: themeContract.spacing[7],
	top: "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: themeContract.spacing[6],
	marginLeft: "-8px",
	position: "absolute",
});

export const sliderThumbBar = style({
	height: "55%",
	background: themeContract.colors.stone[600],
	width: "3px",
	borderRadius: themeContract.radii.lg,

	selectors: {
		[selectors.hover]: {
			background: themeContract.colors.stone[800],
		},
	},
});

export const sliderStyles = {
	container: sliderContainer,
	track: sliderTrack,
	trackFill: sliderTrackFill,
	thumb: sliderThumb,
	thumbBar: sliderThumbBar,
};
