import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { is, selectors } from "../selectors";
import { edge } from "./_edge";

export const segmentedControlContainer = style({
	display: "flex",
	// gap: themeContract.spacing["1"],
	background: themeContract.semantic.bg.fill.tray,
	// padding: themeContract.spacing["1"],
	borderRadius: themeContract.radii.sm,
	width: "100%",
	height: "28px",
});

export const segmentedControlItem = style({
	flex: 1,
	borderRadius: themeContract.radii.sm,
	// reserve the border box so the filter-family edge
	// doesn't shift layout between states. Mirrors the Tag's edge treatment.
	border: "1px solid transparent",
	cursor: "pointer",
	justifyContent: "center",
	display: "flex",
	alignItems: "center",

	selectors: {
		[selectors.focusVisible]: {
			outline: `${themeContract.colors.black} dotted thin`,
		},

		[selectors.selected]: {
			...edge("filter", "primary", "default", { borderStyle: "solid" }),
			color: themeContract.colors.stone["100"],
		},
	},
});

export const segmentedControlStyles = {
	container: segmentedControlContainer,
	item: segmentedControlItem,
};
