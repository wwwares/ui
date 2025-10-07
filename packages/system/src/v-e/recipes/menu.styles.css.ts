import { style } from "@vanilla-extract/css";
import { themeContract } from "../contract.css";
import { selectors } from "../sprinkles.css";

const menuContainer = style({
  background: themeContract.semantic.bg.surface.l1,
  borderRadius: themeContract.radii.md,
  width: "200px",
  padding: `${themeContract.spacing[1]} ${themeContract.spacing[1]}`,
  maxWidth: "450px",
  border: themeContract.semantic.borders.surface[0],
  boxShadow: "0rem 0.25rem 0.375rem -0.125rem rgba(26,26,26,.2)",
  display: "flex",
  gap: "1px",
  flexDirection: "column",
  outline: "none",
});

const menuItem = style({
  display: "flex",
  gap: "20px",
  padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
  cursor: "pointer",
  borderRadius: themeContract.radii.sm,
  outline: "none",
  selectors: {
    [selectors.hover]: {
      backgroundColor: themeContract.semantic.bg.surface.l2,
    },
    [selectors.focus]: {
      backgroundColor: themeContract.semantic.bg.surface.l2,
    },
  },
});

export const menuStyles = {
  menuContainer,
  menuItem,
};
