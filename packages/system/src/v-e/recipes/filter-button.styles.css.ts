import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";

const filterButton = style({
  height: "28px",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "14px",
  gap: themeContract.spacing[1],
  paddingLeft: themeContract.spacing[2],
  paddingRight: themeContract.spacing[2],
  paddingTop: themeContract.spacing[1],
  paddingBottom: themeContract.spacing[1],
  borderRadius: themeContract.radii.md,
  fontWeight: "400",
  lineHeight: 1,
  cursor: "pointer",
  border: themeContract.semantic.borders.interactive.neutral.default,
  boxShadow: themeContract.semantic.shadows.ridge.interactive.neutral.default,
  background: themeContract.semantic.bg.ridge.interactive.neutral.default,
  transition: "all 80ms cubic-bezier(0.075, 0.82, 0.165, 1)",
  borderStyle: "dashed",
});

const filterButtonIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const filterButtonStyles = {
  filterButton,
  filterButtonIcon,
};
