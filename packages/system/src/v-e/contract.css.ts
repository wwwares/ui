import { createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
	radii: {
		none: "",
		xs: "",
		sm: "",
		md: "",
		lg: "",
		xl: "",
		"2xl": "",
		"3xl": "",
		full: "",
	},
	colors: {
		// Tailwind base colors
		slate: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		gray: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		zinc: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		neutral: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		stone: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		red: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		orange: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		amber: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		yellow: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		lime: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		green: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		emerald: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		teal: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		cyan: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		sky: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		blue: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		indigo: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		violet: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		purple: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		fuchsia: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		pink: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		rose: {
			50: "",
			100: "",
			200: "",
			300: "",
			400: "",
			500: "",
			600: "",
			700: "",
			800: "",
			900: "",
			950: "",
		},
		// Special colors
		transparent: "",
		current: "",
		inherit: "",
		black: "",
		white: "",
	},
	spacing: {
		0: "",
		1: "",
		2: "",
		3: "",
		4: "",
		5: "",
		6: "",
		7: "",
		8: "",
		9: "",
		10: "",
	},
	semantic: {
		text: {
			label: "",
			default: "",
			inverted: "",
			feedback: {
				success: {
					default: "",
				},
				error: {
					default: "",
				},
				warning: {
					default: "",
				},
				info: {
					default: "",
				},
			},
		},
		bg: {
			raised: {
				interactive: {
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
					danger: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			well: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			ridge: {
				interactive: {
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
					neutral: {
						reversed: "",
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			feedback: {
				success: {
					default: "",
				},
				error: {
					default: "",
				},
				warning: {
					default: "",
				},
				info: {
					default: "",
				},
			},
			overlay: "",
			/**
			 * Planes named by role. Each theme orders them independently, so a
			 * light-mode nav can recess below the page while the dark-mode nav rises to card level.
			 */
			surface: {
				/** App background */
				page: "",
				/** Left nav and side panels */
				nav: "",
				/** Cards and table rows */
				card: "",
				/** Popovers, menus, calendars */
				floating: "",
				/** Modal content */
				modal: "",
			},
			/**
			 * Solid fills for structure within a known surface, named by role.
			 * `hover` and `pressed` are translucent so they read on whatever they sit over.
			 */
			fill: {
				/** Header and footer of modals and calendars */
				chrome: "",
				/** Strip that divides a surface into sections: modal markers, calendar weekdays */
				band: "",
				/** Recessed container holding controls or rows: slider track, segmented control, table */
				tray: "",
				hover: "",
				pressed: "",
			},
			/** Hovered or focused item in a menu or listbox */
			item: {
				highlighted: "",
			},
		},
		borders: {
			surface: {
				hairline: "",
				divider: "",
				ring: "",
				highlight: "",
			},
			item: {
				highlighted: "",
			},
			feedback: {
				success: {
					default: "",
				},
				error: {
					default: "",
				},
				warning: {
					default: "",
				},
				info: {
					default: "",
				},
			},
			raised: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
					danger: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			ridge: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			well: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
		},
		shadows: {
			raised: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
					danger: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
			overlay: "",
			item: {
				highlighted: "",
			},
			surface: {
				fold: "",
				floating: {
					sm: "",
					md: "",
					lg: "",
				},
			},
			ridge: {
				interactive: {
					primary: {
						default: "",
						hover: "",
						pressed: "",
					},
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
				surface: {
					default: "",
				},
			},
			well: {
				interactive: {
					neutral: {
						default: "",
						hover: "",
						pressed: "",
					},
				},
			},
		},
	},
});
