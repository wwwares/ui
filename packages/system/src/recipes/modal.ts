import { themeSlotRecipe } from "..";

export const modalSlotRecipe = themeSlotRecipe({
	className: "modal",
	slots: [
		"modal-overlay",
		"modal-body",
		"modal-header",
		"modal-content",
		"modal-footer",
	],
	base: {
		"modal-overlay": {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			background: "bg.overlay",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 100,
		},
		"modal-body": {
			background: "bg.surface.1",
			boxShadow: "overlay",
			borderRadius: "lg",
			color: "text.default",
		},
		"modal-header": {
			display: "flex",
			background: "bg.surface.2",
			flexDirection: "row",
			justifyContent: "space-between",
			borderTopLeftRadius: "lg",
			borderTopRightRadius: "lg",
			borderBottom: "surface.0",
			paddingX: "3",
			paddingY: "3.5",
			fontWeight: "bold",
			color: "text.label",
		},
		"modal-content": {
			paddingX: "3",
			paddingY: "3.5",
		},
		"modal-footer": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			background: "bg.surface.1",
			paddingX: "3",
			paddingY: "3.5",
			borderTop: "surface.0",
			borderBottomLeftRadius: "lg",
			borderBottomRightRadius: "lg",
		},
	},
	variants: {
		size: {
			default: {
				"modal-body": {
					width: "40vw",
				},
			},
			wide: {
				"modal-body": {
					width: "60vw",
				},
			},
			full: {
				"modal-body": {
					width: "80vw",
				},
			},
		},
	},
	defaultVariants: {
		size: "default",
	},
});
