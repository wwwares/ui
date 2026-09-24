import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";
import { tailwindColors } from "./colors";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { withLighten, withOpacity } from "./utils";

export const darkTheme = createTheme(themeContract, {
	radii,
	colors: tailwindColors,
	spacing,
	semantic: {
		text: {
			label: tailwindColors.neutral[100],
			default: tailwindColors.white,
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
						default: withLighten(tailwindColors.neutral[800], 4),
						hover: withLighten(tailwindColors.neutral[800], 10),
						pressed: withLighten(tailwindColors.neutral[800], 10),
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
						default: withLighten(tailwindColors.neutral[950], 3),
						hover: withLighten(tailwindColors.neutral[950], 5),
						pressed: tailwindColors.neutral[950],
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
						reversed: tailwindColors.neutral[100],
						default: `linear-gradient(180deg, ${withLighten(tailwindColors.neutral[800], 8)}, ${tailwindColors.neutral[800]})`,
						hover: `linear-gradient(180deg, ${withLighten(tailwindColors.neutral[800], 14)}, ${withLighten(tailwindColors.neutral[800], 6)})`,
						pressed: withLighten(tailwindColors.neutral[900], 4),
					},
				},
			},
			overlay: withOpacity(tailwindColors.neutral[900], 50),
			// Raised planes sit closer to the light, so they are lighter than the page.
			surface: {
				page: withLighten(tailwindColors.neutral[900], 1), // ~#191918
				nav: withLighten(tailwindColors.neutral[900], 2), // ~#1b1a1a
				card: withLighten(tailwindColors.neutral[900], 2), // ~#1b1a1a
				floating: withLighten(tailwindColors.neutral[800], 1), // ~#282828
				modal: withLighten(tailwindColors.neutral[800], 1), // ~#282828
			},
			// Structural fills sink below the page so chrome and trays read as recessed.
			fill: {
				chrome: withLighten(tailwindColors.neutral[950], 3),
				band: withLighten(tailwindColors.neutral[950], 6),
				tray: withLighten(tailwindColors.neutral[950], 3),
				hover: withOpacity(tailwindColors.white, 6),
				pressed: withOpacity(tailwindColors.black, 25),
			},
			item: {
				highlighted: `linear-gradient(180deg, ${withLighten(tailwindColors.neutral[800], 10)}, ${withLighten(tailwindColors.neutral[800], 4)})`,
			},
		},
		borders: {
			surface: {
				hairline: withOpacity(tailwindColors.white, 6),
				divider: tailwindColors.neutral[950],
				ring: tailwindColors.neutral[950],
				highlight: withOpacity(tailwindColors.white, 8),
			},
			item: {
				highlighted: withOpacity(tailwindColors.white, 6),
			},
			feedback: {
				success: {
					default: tailwindColors.green[200],
				},
				error: {
					default: tailwindColors.red[200],
				},
				warning: {
					default: tailwindColors.amber[200],
				},
				info: {
					default: tailwindColors.blue[200],
				},
			},
			raised: {
				interactive: {
					neutral: {
						default: tailwindColors.neutral[700],
						hover: tailwindColors.neutral[600],
						pressed: tailwindColors.neutral[700],
					},
					primary: {
						default: tailwindColors.blue[700],
						hover: tailwindColors.blue[700],
						pressed: tailwindColors.blue[700],
					},
					danger: {
						default: tailwindColors.red[700],
						hover: tailwindColors.red[700],
						pressed: tailwindColors.red[700],
					},
				},
			},
			ridge: {
				interactive: {
					neutral: {
						default: tailwindColors.neutral[700],
						hover: tailwindColors.neutral[600],
						pressed: withLighten(tailwindColors.neutral[600], 5),
					},
					primary: {
						default: tailwindColors.blue[600],
						hover: tailwindColors.blue[700],
						pressed: tailwindColors.blue[700],
					},
				},
			},
			well: {
				interactive: {
					neutral: {
						default: tailwindColors.neutral[700],
						hover: tailwindColors.neutral[600],
						pressed: withLighten(tailwindColors.neutral[600], 5),
					},
				},
			},
		},
		shadows: {
			raised: {
				interactive: {
					neutral: {
						default: `0 1px 0 ${withOpacity(tailwindColors.white, 10)} inset, 0 -1px 0 ${withOpacity(tailwindColors.black, 25)} inset, 0 2px 3px ${withOpacity(tailwindColors.black, 30)}`,
						hover: `0 1px 0 ${withOpacity(tailwindColors.white, 13)} inset, 0 -1px 0 ${withOpacity(tailwindColors.black, 25)} inset, 0 2px 4px ${withOpacity(tailwindColors.black, 30)}`,
						pressed: `0 1px 0 ${withOpacity(tailwindColors.white, 8)}, 0 1px 0 ${withOpacity(tailwindColors.black, 40)} inset, 0 4px 16px ${withOpacity(tailwindColors.black, 31)} inset`,
					},
					primary: {
						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset, 0 2px 4px ${withOpacity(tailwindColors.black, 45)}`,
						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.blue[400]} inset, 0 3px 6px ${withOpacity(tailwindColors.black, 45)}`,
						pressed: `1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset, 0 1px 2px ${withOpacity(tailwindColors.black, 30)}`,
					},
					danger: {
						default: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset, 0 2px 4px ${withOpacity(tailwindColors.black, 45)}`,
						hover: `1px 0px 0px rgba(255, 255, 255, 0.3) inset, -1px 0px 0px rgba(255, 255, 255, 0.3) inset, 0px 1px 0px rgba(0, 0, 0, 0.1) inset, 0px -1px 0px ${tailwindColors.red[400]} inset, 0 3px 6px ${withOpacity(tailwindColors.black, 45)}`,
						pressed: `1px 0px 0px rgba(255, 255, 255, 0.15) inset, -1px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px rgba(255, 255, 255, 0.4) inset, 0px -1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 5px rgba(0, 0, 0, 0.1) inset, 0 1px 2px ${withOpacity(tailwindColors.black, 30)}`,
					},
				},
			},
			overlay: `0 0 0 1px ${tailwindColors.neutral[950]}, 0 1px 2px ${withOpacity(tailwindColors.white, 13)} inset, 0 10px 20px -2px ${withOpacity(tailwindColors.black, 31)}, 0 20px 40px -4px ${withOpacity(tailwindColors.black, 19)}, 0 0 15px 2px ${withOpacity(tailwindColors.black, 13)}`,
			item: {
				highlighted: `0 1px 0 ${withOpacity(tailwindColors.white, 8)} inset, 0 1px 2px ${withOpacity(tailwindColors.black, 40)}`,
			},
			surface: {
				// Light catches the upper fold while the lower edge casts a shadow.
				fold: `0 -1px ${withOpacity(tailwindColors.white, 8)}, 0 1px ${withOpacity(tailwindColors.black, 50)}`,
				floating: {
					sm: `0 6px 10px ${withOpacity(tailwindColors.black, 50)}, 0 2px 4px ${withOpacity(tailwindColors.black, 40)}`,
					md: `0 1px 2px ${withOpacity(tailwindColors.white, 13)} inset, 0 6px 12px -2px ${withOpacity(tailwindColors.black, 40)}, 0 12px 24px -4px ${withOpacity(tailwindColors.black, 25)}`,
					lg: `0 1px 2px ${withOpacity(tailwindColors.white, 13)} inset, 0 10px 20px -2px ${withOpacity(tailwindColors.black, 31)}, 0 20px 40px -4px ${withOpacity(tailwindColors.black, 19)}, 0 0 15px 2px ${withOpacity(tailwindColors.black, 13)}`,
				},
			},
			ridge: {
				interactive: {
					primary: {
						default: `${tailwindColors.blue[100]} 0px 0px 1px 0px inset`,
						hover: `${tailwindColors.blue[100]} 0px 0px 1px 0px inset`,
						pressed: `${tailwindColors.blue[500]} 0px 0px 1px 0px inset`,
					},
					neutral: {
						default: `0 1px 0 ${withOpacity(tailwindColors.white, 20)} inset, 0 -1px 1px ${withOpacity(tailwindColors.black, 31)} inset, 0 1px 2px ${withOpacity(tailwindColors.black, 31)}`,
						hover: `0 1px 0 ${withOpacity(tailwindColors.white, 23)} inset, 0 -1px 1px ${withOpacity(tailwindColors.black, 31)} inset, 0 2px 3px ${withOpacity(tailwindColors.black, 31)}`,
						pressed: `0 1px 1px ${withOpacity(tailwindColors.white, 8)}, 0 2px 4px ${withOpacity(tailwindColors.black, 50)} inset`,
					},
				},
				surface: {
					default: `0 0 0 1px ${tailwindColors.neutral[950]}, 0 1px 2px ${withOpacity(tailwindColors.white, 13)} inset, 0 2px 4px ${withOpacity(tailwindColors.black, 31)}`,
				},
			},
			well: {
				interactive: {
					neutral: {
						default: `0 1px 2px ${withOpacity(tailwindColors.black, 20)} inset, 0 1px 2px ${withOpacity(tailwindColors.black, 15)}`,
						hover: `0 1px 2px ${withOpacity(tailwindColors.black, 20)} inset, 0 1px 2px ${withOpacity(tailwindColors.black, 15)}`,
						pressed: `0 1px 2px ${withOpacity(tailwindColors.black, 25)} inset, 0 1px 2px ${withOpacity(tailwindColors.black, 15)}`,
					},
				},
			},
		},
	},
});
