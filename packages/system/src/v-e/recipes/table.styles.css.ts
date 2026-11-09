import { createVar, style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../selectors";

const cellBorder = `1px solid ${themeContract.semantic.borders.surface.ring}`;

const tableContainerStyles = style({
	background: themeContract.semantic.bg.fill.tray,
	borderRadius: themeContract.radii.md,
	padding: themeContract.spacing[1],
});

const tableCoreStyles = style({
	// revert css reset. "separate" is needed for border-radius inside the table to render
	borderCollapse: "separate",
	borderSpacing: 0,
	width: "100%",
});

const tableHeaderStyles = style({
	padding: themeContract.spacing[2],
	textAlign: "left",
	position: "relative",
	fontSize: "14px",
});

const tableBodyStyles = style({});

// Row controls background color that cells use to render the color
// this is due to the rounded "table body" style so cells bring their own border and bg
const rowBg = createVar();
const tableRowStyles = style({
	vars: {
		[rowBg]: themeContract.semantic.bg.surface.card,
	},
	selectors: {
		[selectors.hover]: {
			// hover is translucent, so it layers over the card to keep the tray from showing through
			vars: {
				[rowBg]: `linear-gradient(${themeContract.semantic.bg.fill.hover}, ${themeContract.semantic.bg.fill.hover}), ${themeContract.semantic.bg.surface.card}`,
			},
		},
		[selectors.selected]: {
			vars: { [rowBg]: themeContract.semantic.bg.feedback.info.default },
		},
	},
});

/**
 * `border-radius` has no effect on rows so it is done on the cells instead
 *  a perimeter border on the edge cells, rounded corners on the corners
 */
const tableCellStyles = style({
	background: rowBg,
	fontSize: "14px",
	// doubles as the top of the perimeter on the first row and as the row
	// separator on every row after it
	borderBlockStart: cellBorder,
	padding: themeContract.spacing[2],
	selectors: {
		"&:first-child": {
			borderInlineStart: cellBorder,
		},
		"&:last-child": {
			borderInlineEnd: cellBorder,
		},
		[`${tableRowStyles}:last-child &`]: {
			borderBlockEnd: cellBorder,
		},
		[`${tableRowStyles}:first-child &:first-child`]: {
			borderStartStartRadius: themeContract.radii.md,
		},
		[`${tableRowStyles}:first-child &:last-child`]: {
			borderStartEndRadius: themeContract.radii.md,
		},
		[`${tableRowStyles}:last-child &:first-child`]: {
			borderEndStartRadius: themeContract.radii.md,
		},
		[`${tableRowStyles}:last-child &:last-child`]: {
			borderEndEndRadius: themeContract.radii.md,
		},
	},
});

const tableCheckboxStyles = style({
	// borderRight: `1px solid ${themeContract.semantic.borders.surface.divider}`,
	// boxShadow: `1px 0 0 0 ${themeContract.semantic.borders.surface.highlight}`,
	height: `calc(100% - ${themeContract.spacing[3]})`,
	marginTop: themeContract.spacing[1],
	width: "1px",
	position: "absolute",
	right: 0,
	top: 0,
});

export const tableStyles = {
	tableHeaderStyles,
	tableContainerStyles,
	tableBodyStyles,
	tableStyles: tableCoreStyles,
	tableCheckboxStyles,
	tableRowStyles,
	tableCellStyles,
};
