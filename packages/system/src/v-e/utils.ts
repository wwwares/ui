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

/**
 * Creates an RGBA color string with opacity from a CSS variable.
 * Emulates Tailwind's opacity modifier (e.g., bg-blue-500/50).
 */
export function withOpacity(colorVar: string, opacity: number): string {
	const opacityDecimal = opacity / 100;
	return `rgba(from ${colorVar} r g b / ${opacityDecimal})`;
}

/**
 * Creates a lightened color using color-mix with white.
 */
export function withLighten(colorVar: string, lightenBy: number): string {
	return `color-mix(in srgb, ${colorVar} ${100 - lightenBy}%, white ${lightenBy}%)`;
}
