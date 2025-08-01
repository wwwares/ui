import { themeContract } from "./contract";
import { lightTheme } from "./light-theme";
import { darkTheme } from "./dark-theme";

// Theme switching utilities
export const themes = {
	light: lightTheme,
	dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes;

// CSS class name generators for theme switching
export const themeClassNames = {
	light: lightTheme,
	dark: darkTheme,
};

// CSS-in-JS style object using contract
export const vars = themeContract;
