// import { themeSlotRecipe } from "..";

// export const modalSlotRecipe = themeSlotRecipe({
// 	className: "modal",
// 	slots: [
// 		"modal-overlay",
// 		"modal-body",
// 		"modal-header",
// 		"modal-content",
// 		"modal-footer",
// 		"modal-marker",
// 	],
// 	base: {
// 		"modal-overlay": {
// 			position: "fixed",
// 			top: 0,
// 			left: 0,
// 			width: "100vw",
// 			height: "100vh",
// 			background: "bg.overlay",
// 			display: "flex",
// 			alignItems: "center",
// 			justifyContent: "center",
// 			zIndex: 100,
// 		},
// 		"modal-body": {
// 			background: "bg.surface.1",
// 			// boxShadow: "overlay",
// 			boxShadow: "0px 7px 14px -8px var(--colors-stone-400)",
// 			borderRadius: "lg",
// 			color: "text.default",
// 			border: "1px solid {colors.stone.300}",
// 		},
// 		"modal-header": {
// 			display: "flex",
// 			background: "{colors.stone.200/50}",
// 			flexDirection: "row",
// 			justifyContent: "space-between",
// 			borderTopLeftRadius: "lg",
// 			borderTopRightRadius: "lg",
// 			borderBottom: "surface.0",
// 			paddingX: "3",
// 			paddingY: "2",
// 			height: "52px",
// 			fontWeight: "bold",
// 			color: "text.label",
// 			alignItems: "center",
// 		},
// 		"modal-content": {
// 			paddingX: "3",
// 			paddingBottom: "3.5",
// 			paddingTop: "8",
// 			display: "flex",
// 			flexDirection: "column",
// 			gap: "8",
// 		},
// 		"modal-footer": {
// 			minHeight: "76px",
// 			display: "flex",
// 			flexDirection: "row",
// 			justifyContent: "space-between",
// 			alignItems: "center",
// 			// background: "bg.surface.1",
// 			boxShadow: "0px 7px 7px -7px var(--colors-stone-300) inset",
// 			paddingX: "3",
// 			paddingY: "3.5",
// 			borderTop: "surface.0",
// 			borderBottomLeftRadius: "lg",
// 			borderBottomRightRadius: "lg",
// 		},
// 		"modal-marker": {
// 			marginLeft: "-3",
// 			backgroundColor: "{colors.stone.200/50}",
// 			marginRight: "-3",
// 			paddingLeft: "3",
// 			paddingY: "5",
// 			fontSize: "sm",
// 			color: "stone.800",
// 			// marginY: "8",
// 		},
// 	},
// 	variants: {
// 		size: {
// 			default: {
// 				"modal-body": {
// 					width: "40vw",
// 				},
// 			},
// 			wide: {
// 				"modal-body": {
// 					width: "60vw",
// 				},
// 			},
// 			full: {
// 				"modal-body": {
// 					width: "80vw",
// 				},
// 			},
// 		},
// 	},
// 	defaultVariants: {
// 		size: "default",
// 	},
// });
