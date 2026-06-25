import { themeContract } from "./contract.css";

// CSS-in-JS style object using contract.
//
// NOTE: this module must NOT import the theme files (light-theme.css /
// dark-theme.css). Those files import withOpacity/withLighten from here, so
// importing them back creates a cycle. tsup bundles+hoists and tolerates it,
// but the vanilla-extract Vite plugin evaluates modules separately and the
// cycle resolves to `undefined` ("withOpacity is not a function"). contract.css
// has no back-import, so depending on it alone is safe.
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
