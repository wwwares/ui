import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";
import { edge, ringOnly } from "./_edge";

const selectBackdrop = style({
	position: "absolute",
	zIndex: 10,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: themeContract.radii.sm,
	transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
	...edge("ridge", "neutral", "default"),

	selectors: {
		[selectors.peerHover]: edge("ridge", "neutral", "hover"),
		[selectors.peerFocus]: ringOnly("ridge", "neutral", "pressed"),
	},
});

const selectContent = style({
	position: "relative",
	border: "none",
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: "28px",
	padding: "2px 4px 2px 6px",
	zIndex: 20,
});

const selectOption = style({
	flex: "1 1",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	fontSize: "14px", // sm equivalent
	display: "flex",
	height: "100%",
	alignItems: "center",
});

const selectEl = style({
	appearance: "none",
	border: "none",
	zIndex: 30,
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	margin: 0,
	opacity: 0,
});

export const selectIcon = style({
	height: "20px",
	width: "20px",
	fill: themeContract.colors.stone[600],
});

export const selectStyles = {
	selectBackdrop,
	selectContent,
	selectEl,
	selectIcon,
	selectOption,
};
