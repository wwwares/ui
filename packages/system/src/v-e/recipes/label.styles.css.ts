import { style } from "@vanilla-extract/css";
import { vars } from "../utils";

export const labelTextStyles = style({
	color: vars.semantic.text.label,
	fontSize: "13px",
	fontWeight: "500",
	lineHeight: 1,
});
