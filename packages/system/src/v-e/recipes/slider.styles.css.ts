import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { is, selectors } from "../selectors";
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
	background: themeContract.semantic.bg.fill.tray,
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
		// state lives on the `.group` container (slider.tsx): the fill itself is an
		// empty sibling of the RAC track/thumb, so `&:focus-within` could never match
		// and self-hover only covered the filled portion of the control.
		[selectors.groupHover]: edge("ridge", "neutral", "hover"),
		[selectors.groupFocusWithin]: edge("ridge", "neutral", "hover"),
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
	color: themeContract.colors.stone[400],
	// hover state comes from the RAC thumb (16px hit area), not the 3px bar
	// [`${sliderThumb}${is.hover} &`]: {
	// 	background: themeContract.colors.stone[800],
	// },
});

export const sliderStyles = {
	container: sliderContainer,
	track: sliderTrack,
	trackFill: sliderTrackFill,
	thumb: sliderThumb,
};
