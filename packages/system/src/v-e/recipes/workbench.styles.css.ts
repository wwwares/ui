import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { offscreen } from "./drawer.styles.css";

// A 28px Button inside the header's vertical padding, plus the panel's 1px top border
const barHeight = "45px";

const barStyles = style({
	position: "fixed",
	bottom: 0,
	left: 0,
	zIndex: 99,
});

const headerStyles = style({
	height: `calc(${barHeight} - 1px)`,
	flexShrink: 0,
});

const groupStyles = style({
	display: "flex",
	alignItems: "center",
	gap: themeContract.spacing[2],
});

// Slots sit above the toggle's stretched hit area so their own presses reach them
const slotStyles = style([groupStyles, { position: "relative", zIndex: 1 }]);

const stretchedToggleStyles = style({
	"::after": {
		content: '""',
		position: "absolute",
		inset: 0,
	},
});

// The panel starts with its header exactly over the resting bar
const panelStyles = style({
	vars: { [offscreen]: `translateY(calc(100% - ${barHeight}))` },
	height: "60vh",
});

export const workbenchStyles = {
	barHeight,
	barStyles,
	headerStyles,
	groupStyles,
	slotStyles,
	stretchedToggleStyles,
	panelStyles,
};
