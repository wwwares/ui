import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";
import { tailwindColors } from "./colors";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { withLighten, withOpacity } from "./utils";

export const lightTheme = createTheme(themeContract, {
	radii,
	colors: tailwindColors,
	spacing,
	semantic: {
		text: {
			label: tailwindColors.stone[900],
			default: tailwindColors.black,
			inverted: tailwindColors.stone[50],
			feedback: {
				success: {
					default: tailwindColors.green[800],
				},
				error: {
					default: tailwindColors.red[800],
				},
				warning: {
					default: tailwindColors.amber[800],
				},
				info: {
					default: tailwindColors.blue[800],
				},
			},
		},
		bg: {
			feedback: {
				success: {
					default: `linear-gradient(to bottom right, ${tailwindColors.green[50]}, ${tailwindColors.green[50]}, ${tailwindColors.green[100]})`,
				},
				error: {
					default: `linear-gradient(to bottom right, ${tailwindColors.red[50]}, ${tailwindColors.red[50]}, ${tailwindColors.red[100]})`,
				},
				warning: {
					default: `linear-gradient(to bottom right, ${tailwindColors.amber[50]}, ${tailwindColors.amber[50]}, ${tailwindColors.amber[100]})`,
				},
				info: {
					default: `linear-gradient(to bottom right, ${tailwindColors.blue[50]}, ${tailwindColors.blue[50]}, ${tailwindColors.blue[100]})`,
				},
			},
			raised: {
				interactive: {
					primary: {
						default: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
						hover: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
						pressed: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]}, ${tailwindColors.blue[500]})`,
					},
					neutral: {
						default: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
						hover: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
						pressed: `linear-gradient(180deg, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]}, ${tailwindColors.stone[100]})`,
					},
					danger: {
						default: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
						hover: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
						pressed: `linear-gradient(180deg, ${tailwindColors.red[500]}, ${tailwindColors.red[500]}, ${tailwindColors.red[600]}, ${tailwindColors.red[500]})`,
					},
				},
			},
			well: {
				interactive: {
					neutral: {
						default: tailwindColors.stone[50],
						hover: tailwindColors.white,
						pressed: tailwindColors.white,
					},
				},
			},
			ridge: {
				interactive: {
					primary: {
						default: `linear-gradient(180deg, ${tailwindColors.blue[400]}, ${tailwindColors.blue[500]})`,
						hover: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]})`,
						pressed: `linear-gradient(180deg, ${tailwindColors.blue[500]}, ${tailwindColors.blue[600]})`,
					},
					neutral: {
						reversed: tailwindColors.stone[100],
						default: tailwindColors.stone[100],
						hover: tailwindColors.stone[100],
						pressed: tailwindColors.stone[100],
					},
				},
			},
			overlay: withOpacity(tailwindColors.stone[300], 50), // "rgba(214, 211, 209, 0.5)" stone.300 with 50% opacity
			surface: {
				l0: tailwindColors.stone[100],
				// l1: withOpacity(tailwindColors.stone[50], 40),
				l1: withLighten(tailwindColors.stone[50], 40),
				// l2: withOpacity(tailwindColors.stone[50], 50),
				l2: tailwindColors.stone[100],
				l3: withLighten(tailwindColors.stone[200], 50),
				// l4: tailwindColors.stone[300],
			},
		},
		borders: {
			surface: {
				0: `1px solid ${tailwindColors.stone[300]}`,
			},
			feedback: {
				success: {
					default: `1px solid ${tailwindColors.green[200]}`,
				},
				error: {
					default: `1px solid ${tailwindColors.red[200]}`,
				},
				warning: {
					default: `1px solid ${tailwindColors.amber[200]}`,
				},
				info: {
					default: `1px solid ${tailwindColors.blue[200]}`,
				},
			},
			raised: {
				interactive: {
					neutral: {
						default: `1px solid ${tailwindColors.stone[300]}`,
						hover: `1px solid ${tailwindColors.stone[300]}`,
						pressed: `1px solid ${tailwindColors.stone[400]}`,
					},
					primary: {
						default: `1px solid ${tailwindColors.blue[700]}`,
						hover: `1px solid ${tailwindColors.blue[700]}`,
						pressed: `1px solid ${tailwindColors.blue[700]}`,
					},
					danger: {
						default: `1px solid ${tailwindColors.red[700]}`,
						hover: `1px solid ${tailwindColors.red[700]}`,
						pressed: `1px solid ${tailwindColors.red[700]}`,
					},
				},
			},
			interactive: {
				primary: {
					default: `1px solid ${tailwindColors.blue[600]}`,
					hover: `1px solid ${tailwindColors.blue[700]}`,
					pressed: `1px solid ${tailwindColors.blue[700]}`,
				},
				neutral: {
					default: `1px solid ${tailwindColors.stone[400]}`,
					hover: `1px solid ${tailwindColors.blue[600]}`,
					pressed: `1px solid ${tailwindColors.blue[600]}`,
				},
			},
		},
		shadows: {
			raised: {
				interactive: {
					neutral: {
						default: `1px 0px 0px ${tailwindColors.stone[100]} inset, -1px 0px 0px ${tailwindColors.stone[100]} inset, 0px 1px 0px ${tailwindColors.stone[100]} inset, 0px -1px 0px ${tailwindColors.stone[200]} inset`,
						hover: `1px 0px 0px ${tailwindColors.stone[100]} inset, -1px 0px 0px ${tailwindColors.stone[100]} inset, 0px 1px 0px ${tailwindColors.stone[100]} inset, 0px -1px 0px ${tailwindColors.stone[100]} inset`,
						pressed:
							"1px 0px 0px rgba(255, 255, 255, 0.8) inset, -1px 0px 0px rgba(255, 255, 255, 0.8) inset, 0px 1px 0px rgba(255, 255, 255, 0.45) inset, 0px 1px 5px rgba(0, 0, 0, 0.15) inset",
					},
					primary: {
						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset`,
						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset`,
						pressed:
							"1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
					},
					danger: {
						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset`,
						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset`,
						pressed:
							"1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset",
					},
				},
			},
			overlay: `0px 0px 0px 1px ${tailwindColors.stone[300]}, 0px 2px 1px 0px ${tailwindColors.stone[200]}, 2px 0px 1px 0px ${tailwindColors.stone[200]}, -2px 0px 1px 0px ${tailwindColors.stone[200]}, 0px -2px 1px 0px ${tailwindColors.stone[200]}`,
			ridge: {
				interactive: {
					primary: {
						default: `${tailwindColors.blue[100]} 0px 0px 1px 0px inset`,
						hover: `${tailwindColors.blue[100]} 0px 0px 1px 0px inset`,
						pressed: `${tailwindColors.blue[500]} 0px 0px 1px 0px inset`,
					},
					neutral: {
						default:
							"0px -1px 1px rgba(0, 0, 0, 0.2) inset, 0px 1px 0px rgba(255, 255, 255, 0.5) inset",
						hover:
							"0px -1px 1px rgba(0, 0, 0, 0.1) inset, 0px 1px 1px rgba(255,255,255,0.5) inset",
						pressed:
							"0px -1px 1px rgba(0, 0, 0, 0.05) inset, 0px 1px 3px rgba(0,0,0,0.2) inset",
					},
				},
				surface: {
					default: `0px 0px 0px 1px ${tailwindColors.stone[300]}, 0px 1px 1px 0px ${tailwindColors.stone[400]}`,
				},
			},
			well: {
				interactive: {
					neutral: {
						default: `${tailwindColors.stone[300]} 0px 1px 2px inset`,
						hover: `${tailwindColors.stone[100]} 0px 1px 5px inset`,
						pressed: `${tailwindColors.stone[300]} 0px 1px 2px inset`,
					},
				},
			},
		},
	},
});
