import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";
import { edge } from "./_edge";

export const segmentedControlContainer = style({
	display: "flex",
	gap: themeContract.spacing["1"],
	background: themeContract.semantic.bg.surface.l2,
	padding: themeContract.spacing["1"],
	borderRadius: themeContract.radii.sm,
	width: "100%",
	height: "32px",
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

		[selectors.hover]: edge("filter", "neutral", "hover"),

		"&:is(:hover, [data-hovered]):is([aria-pressed=true], [data-pressed])":
			edge("filter", "neutral", "pressed"),

		// selected matches the Tag: SOLID border via the borderStyle override.
		"&:is([aria-selected=true], [data-selected])": {
			...edge("filter", "primary", "default", { borderStyle: "solid" }),
			color: themeContract.colors.stone["100"],
		},

		"&:is([aria-selected=true], [data-selected]):is(:hover, [data-hovered])": {
			...edge("filter", "primary", "default", { borderStyle: "solid" }),
			color: themeContract.colors.stone["100"],
		},

		"&:is([aria-selected=true], [data-selected]):is([aria-pressed=true], [data-pressed]):is(:hover, [data-hovered])":
			{
				...edge("filter", "primary", "default", { borderStyle: "solid" }),
				color: themeContract.colors.stone["100"],
			},
	},
});

export const segmentedControlStyles = {
	container: segmentedControlContainer,
	item: segmentedControlItem,
};
