import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../contract.css";

const chipRecipe = recipe({
	base: {
		borderRadius: themeContract.radii.full,
		fontSize: "14px",
		lineHeight: "1",
		height: "28px",
		display: "flex",
		alignItems: "center",
		padding: "0px 12px",
		background: `linear-gradient(to right, #EDE8FB, #EDE8FB), linear-gradient(
    0deg, #5A4B68 0%, #C2B5ED 31%, #A095BD 60%, #EFE7FC 93%)`,
		backgroundClip: "border-box, padding-box",
		backgroundOrigin: "padding-box, border-box",
		border: "1px solid transparent",
		outline: "3px solid #EDE8FB",
		outlineOffset: "-3px",
		boxShadow: "0px -3px 8px 0px inset white, 0px 2px 1px 0px inset #454547",
	},
});

export { chipRecipe };
