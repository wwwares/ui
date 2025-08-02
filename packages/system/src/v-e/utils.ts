import { themeContract } from "./contract.css";
import { lightTheme } from "./light-theme.css";
import { darkTheme } from "./dark-theme.css";

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
