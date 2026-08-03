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
 * Applies opacity to a color, keeping it in its original space.
 * Emulates Tailwind's opacity modifier (e.g., bg-blue-500/50).
 *
 * Uses oklch rather than rgba so wide-gamut palette values survive: `rgba(from
 * …)` resolves the origin into sRGB and clamps anything outside it.
 */
export function withOpacity(colorVar: string, opacity: number): string {
	const opacityDecimal = opacity / 100;
	return `oklch(from ${colorVar} l c h / ${opacityDecimal})`;
}

/**
 * Creates a lightened color by mixing toward white in oklab, so equal
 * percentages read as equal perceptual steps and the mix never round-trips
 * through sRGB.
 *
 * Note this scales chroma along with lightness — it cannot hold a tint at high
 * lightness. For that, override lightness directly and keep the origin's chroma:
 * `oklch(from ${color} 97% c h)`.
 */
export function withLighten(colorVar: string, lightenBy: number): string {
	return `color-mix(in oklab, ${colorVar} ${100 - lightenBy}%, white ${lightenBy}%)`;
}
