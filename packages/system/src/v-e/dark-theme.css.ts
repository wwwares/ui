// import { createTheme } from "@vanilla-extract/css";
// import { themeContract } from "./contract.css";
// import { tailwindColors } from "./colors";
// import { spacing } from "./spacing";
// import { radii } from "./radii";

export const darkTheme = "";
// export const darkTheme = createTheme(themeContract, {
// 	radii,
// 	colors: tailwindColors,
// 	spacing,
// 	semantic: {
// 		text: {
// 			label: tailwindColors.stone[50],
// 			default: tailwindColors.white,
// 		},
// 		bg: {
// 			raised: {
// 				interactive: {
// 					primary: {
// 						default: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
// 						hover: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
// 						pressed: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
// 					},
// 					neutral: {
// 						default: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
// 						hover: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
// 						pressed: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
// 					},
// 					danger: {
// 						default: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
// 						hover: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
// 						pressed: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
// 					},
// 				},
// 			},
// 			well: {
// 				interactive: {
// 					neutral: {
// 						default: tailwindColors.stone[500],
// 						hover: tailwindColors.stone[600],
// 						pressed: tailwindColors.stone[600],
// 					},
// 				},
// 			},
// 			ridge: {
// 				interactive: {
// 					primary: {
// 						default: `linear-gradient(180deg, ${tailwindColors.blue[400]}, ${tailwindColors.blue[500]})`,
// 						hover: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]})`,
// 						pressed: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]})`,
// 					},
// 					neutral: {
// 						reversed: tailwindColors.stone[100],
// 						default: tailwindColors.stone[500],
// 						hover: tailwindColors.stone[500],
// 						pressed: tailwindColors.stone[500],
// 					},
// 				},
// 			},
// 			overlay: "rgba(41, 37, 36, 0.5)", // stone.800 with 50% opacity
// 			surface: {
// 				l0: tailwindColors.stone[700],
// 				l1: tailwindColors.stone[600],
// 				l2: tailwindColors.stone[800],
// 				l3: tailwindColors.stone[900],
// 			},
// 		},
// 		borders: {
// 			surface: {
// 				0: `1px solid ${tailwindColors.stone[300]}`,
// 			},
// 			raised: {
// 				interactive: {
// 					neutral: {
// 						default: `1px solid ${tailwindColors.stone[500]}`,
// 						hover: `1px solid ${tailwindColors.stone[500]}`,
// 						pressed: `1px solid ${tailwindColors.stone[500]}`,
// 					},
// 					primary: {
// 						default: `1px solid ${tailwindColors.blue[700]}`,
// 						hover: `1px solid ${tailwindColors.blue[700]}`,
// 						pressed: `1px solid ${tailwindColors.blue[700]}`,
// 					},
// 					danger: {
// 						default: `1px solid ${tailwindColors.red[700]}`,
// 						hover: `1px solid ${tailwindColors.red[700]}`,
// 						pressed: `1px solid ${tailwindColors.red[700]}`,
// 					},
// 				},
// 			},
// 			interactive: {
// 				primary: {
// 					default: `1px solid ${tailwindColors.blue[400]}`,
// 					hover: `1px solid ${tailwindColors.blue[400]}`,
// 					pressed: `1px solid ${tailwindColors.blue[400]}`,
// 				},
// 				neutral: {
// 					default: `1px solid ${tailwindColors.stone[400]}`,
// 					hover: `1px solid ${tailwindColors.blue[500]}`,
// 					pressed: `1px solid ${tailwindColors.blue[500]}`,
// 				},
// 			},
// 		},
// 		shadows: {
// 			raised: {
// 				interactive: {
// 					neutral: {
// 						default: `1px 0px 0px ${tailwindColors.stone[100]} inset, -1px 0px 0px ${tailwindColors.stone[100]} inset, 0px 1px 0px ${tailwindColors.stone[100]} inset, 0px -1px 0px ${tailwindColors.stone[200]} inset`,
// 						hover: `1px 0px 0px ${tailwindColors.stone[100]} inset, -1px 0px 0px ${tailwindColors.stone[100]} inset, 0px 1px 0px ${tailwindColors.stone[100]} inset, 0px -1px 0px ${tailwindColors.stone[100]} inset`,
// 						pressed:
// 							"1px 0px 0px rgba(255, 255, 255, 0.8) inset, -1px 0px 0px rgba(255, 255, 255, 0.8) inset, 0px 1px 0px rgba(255, 255, 255, 0.45) inset, 0px 1px 5px rgba(0, 0, 0, 0.15) inset",
// 					},
// 					primary: {
// 						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset`,
// 						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset`,
// 						pressed:
// 							"1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
// 					},
// 					danger: {
// 						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset`,
// 						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset`,
// 						pressed:
// 							"1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
// 					},
// 				},
// 			},
// 			overlay: `0px 0px 0px 1px ${tailwindColors.stone[500]}, 0px 2px 1px 0px ${tailwindColors.stone[500]}, 2px 0px 1px 0px ${tailwindColors.stone[500]}, -2px 0px 1px 0px ${tailwindColors.stone[500]}, 0px -2px 1px 0px ${tailwindColors.stone[500]}`,
// 			ridge: {
// 				interactive: {
// 					primary: {
// 						default: `${tailwindColors.blue[900]} 0px 0px 1px 0px inset`,
// 						hover: `${tailwindColors.blue[900]} 0px 0px 1px 0px inset`,
// 						pressed: `${tailwindColors.blue[950]} 0px 0px 1px 0px inset`,
// 					},
// 					neutral: {
// 						default: `0px -1px 1px ${tailwindColors.stone[700]} inset, 0px 1px 0px ${tailwindColors.stone[500]} inset`,
// 						hover: `0px -1px 1px ${tailwindColors.stone[500]} inset, 0px 1px 1px ${tailwindColors.stone[500]} inset`,
// 						pressed: `0px -1px 1px ${tailwindColors.stone[600]} inset, 0px 1px 3px ${tailwindColors.stone[700]} inset`,
// 					},
// 				},
// 				surface: {
// 					default: `0px 0px 0px 1px ${tailwindColors.stone[500]}, 0px 1px 1px 0px ${tailwindColors.stone[400]}`,
// 				},
// 			},
// 			well: {
// 				interactive: {
// 					neutral: {
// 						default: `${tailwindColors.stone[700]} 0px 1px 3px inset`,
// 						hover: `${tailwindColors.stone[600]} 0px 1px 5px inset`,
// 						pressed: `${tailwindColors.stone[700]} 0px 1px 3px inset`,
// 					},
// 				},
// 			},
// 		},
// 	},
// });
