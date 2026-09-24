import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";

// Tabs container style
export const tabsContainer = style({
	display: "flex",
	flexDirection: "row",
	gap: themeContract.spacing[3],
	borderRadius: 0,
	width: "100%",
	borderBottom: `1px solid ${themeContract.semantic.borders.surface.divider}`,
	paddingBottom: "4px",
});

// Tab style with pseudo-elements and interactive states
export const tab = style({
	cursor: "pointer",
	paddingLeft: themeContract.spacing[3],
	paddingRight: themeContract.spacing[3],
	paddingTop: themeContract.spacing[1],
	paddingBottom: themeContract.spacing[1],
	fontWeight: 600,
	position: "relative",
	borderRadius: themeContract.radii.md,
	transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
	color: themeContract.semantic.text.default,
	outline: "none",

	"::before": {
		borderRadius: `${themeContract.radii.md} ${themeContract.radii.md} 0 0`,
		position: "absolute",
		display: "block",
		width: "80%",
		left: "10%",
		content: "''",
		height: "2px",
		zIndex: 5,
		bottom: "-5px",
		backgroundColor: "transparent",
	},

	selectors: {
		[selectors.hover]: {
			backgroundColor: themeContract.semantic.bg.fill.hover,
		},
		[selectors.selected]: {
			background: themeContract.colors.blue[50],
		},
		[`${selectors.selected}::before`]: {
			backgroundColor: themeContract.colors.blue[600],
		},
	},
});
