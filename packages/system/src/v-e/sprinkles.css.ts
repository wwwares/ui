import { defineProperties, createRainbowSprinkles } from "rainbow-sprinkles";
import { themeContract } from "./contract.css";
import { flattenedColors } from "./colors";

// Type utility to recursively flatten an object into dot-notation paths
type FlattenObjectPaths<
	T,
	BasePath extends string = "",
	Separator extends string = ".",
	Depth extends ReadonlyArray<unknown> = [],
> = Depth["length"] extends 15
	? never
	: T extends string | number | boolean
		? `${BasePath}`
		: T extends object
			? {
					[K in keyof T]: FlattenObjectPaths<
						T[K],
						BasePath extends ""
							? `${string & K}`
							: `${BasePath}${Separator}${string & K}`,
						Separator,
						[...Depth, unknown]
					>;
				}[keyof T]
			: never;

// Type utility to create a record with flattened paths as keys and leaf values as values
type FlattenedRecord<T, BasePath extends string> = {
	[K in FlattenObjectPaths<T, BasePath>]: string;
};

/**
 * Maps semantic tokens to their full object paths for use in sprinkles
 * @param obj - The semantic token object from themeContract
 * @param basePath - The base path string (e.g., 'themeContract.semantic.bg')
 * @returns Record with full object paths as keys and theme contract values
 */
function mapSemanticTokens<
	T extends Record<string, unknown>,
	BasePath extends string,
>(obj: T, basePath: BasePath): FlattenedRecord<T, BasePath> {
	const result: Record<string, string> = {};

	function traverse(current: Record<string, unknown>, currentPath: string) {
		for (const [key, value] of Object.entries(current)) {
			const newPath = `${currentPath}.${key}`;

			if (
				typeof value === "object" &&
				value !== null &&
				typeof value !== "string"
			) {
				// Continue traversing nested objects
				traverse(value as Record<string, unknown>, newPath);
			} else {
				// This is a leaf node, add to result
				result[newPath] = value as string;
			}
		}
	}

	traverse(obj, basePath);
	return result as FlattenedRecord<T, BasePath>;
}

const semanticBackgroundColors = mapSemanticTokens(
	themeContract.semantic.bg,
	"bg",
);

const semanticTextColors = mapSemanticTokens(
	themeContract.semantic.text,
	"text",
);

const semanticBorders = mapSemanticTokens(
	themeContract.semantic.borders,
	"borders",
);

const semanticShadows = mapSemanticTokens(
	themeContract.semantic.shadows,
	"shadows",
);

// Extracted selectors for reuse
export const selectors = {
	// Interactive selectors
	hover: "&:is(:hover, [data-hover])",
	focus: "&:is(:focus, [data-focus])",
	focusVisible: "&:is(:focus-visible, [data-focus-visible])",
	focusWithin: "&:focus-within",
	active: "&:is(:active, [data-active])",
	visited: "&:visited",
	target: "&:target",

	// State selectors
	open: "&:is([open], [data-open], [aria-expanded=true])",
	closed: "&:is(:not([open]), [data-closed], [aria-expanded=false])",
	expanded: "&:is([aria-expanded=true], [data-expanded])",
	collapsed: "&:is([aria-expanded=false], [data-collapsed])",
	selected: "&:is([aria-selected=true], [data-selected])",
	unselected: "&:is([aria-selected=false], [data-unselected])",
	pressed: "&:is([aria-pressed=true], [data-pressed])",
	unpressed: "&:is([aria-pressed=false], [data-unpressed])",
	loading: "&:is([data-loading], [aria-busy=true])",
	empty: "&:is(:empty, [data-empty])",
} as const;

const enhancedInteractiveProperties = defineProperties({
	conditions: {
		default: {},

		// Match _hover: &:is(:hover, [data-hover])
		hover: { selector: selectors.hover },

		// Match _focus: &:is(:focus, [data-focus])
		focus: { selector: selectors.focus },

		// Match _focusVisible: &:is(:focus-visible, [data-focus-visible])
		focusVisible: { selector: selectors.focusVisible },

		// Match _focusWithin: &:focus-within
		focusWithin: { selector: selectors.focusWithin },

		// Match _active: &:is(:active, [data-active])
		active: { selector: selectors.active },

		// Match _visited: &:visited
		visited: { selector: selectors.visited },

		// Match _target: &:target
		target: { selector: selectors.target },
	},
	defaultCondition: "default",
	dynamicProperties: {},
});

const enhancedStateProperties = defineProperties({
	conditions: {
		default: {},

		// Match _open: &:is([open], [data-open], [aria-expanded=true])
		open: { selector: selectors.open },

		// Match _closed: &:is(:not([open]), [data-closed], [aria-expanded=false])
		closed: { selector: selectors.closed },

		// Match _expanded: &:is([aria-expanded=true], [data-expanded])
		expanded: { selector: selectors.expanded },

		// Match _collapsed: &:is([aria-expanded=false], [data-collapsed])
		collapsed: { selector: selectors.collapsed },

		// Match _selected: &:is([aria-selected=true], [data-selected])
		selected: { selector: selectors.selected },

		// Match _unselected: &:is([aria-selected=false], [data-unselected])
		unselected: { selector: selectors.unselected },

		// Match _pressed: &:is([aria-pressed=true], [data-pressed])
		pressed: { selector: selectors.pressed },

		// Match _unpressed: &:is([aria-pressed=false], [data-unpressed])
		unpressed: { selector: selectors.unpressed },

		// Match _loading: &:is([data-loading], [aria-busy=true])
		loading: { selector: selectors.loading },

		// Match _empty: &:is(:empty, [data-empty])
		empty: { selector: selectors.empty },
	},
	defaultCondition: "default",
	dynamicProperties: {},
});

// Define responsive breakpoints
const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { "@media": "screen and (min-width: 768px)" },
		desktop: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "mobile",
	dynamicProperties: {
		display: true,
		flexDirection: true,
		justifyContent: true,
		alignItems: true,
		paddingTop: themeContract.spacing,
		paddingBottom: themeContract.spacing,
		paddingLeft: themeContract.spacing,
		paddingRight: themeContract.spacing,
		marginTop: themeContract.spacing,
		marginBottom: themeContract.spacing,
		marginLeft: themeContract.spacing,
		marginRight: themeContract.spacing,
		gap: themeContract.spacing,
		width: true,
		height: true,
		borderRadius: themeContract.radii,
		order: true,
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
		margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
		marginX: ["marginLeft", "marginRight"],
		marginY: ["marginTop", "marginBottom"],
	},
});

// Define typography properties
const typographyProperties = defineProperties({
	staticProperties: {
		fontSize: {
			xs: "12px",
			sm: "14px",
			base: "16px",
			lg: "18px",
			xl: "20px",
			"2xl": "24px",
			"3xl": "30px",
			"4xl": "36px",
			"5xl": "48px",
			"6xl": "60px",
			"7xl": "72px",
			"8xl": "96px",
			"9xl": "128px",
		},
		fontWeight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
		},
		textAlign: ["left", "center", "right", "justify"],
		textTransform: ["uppercase", "lowercase", "capitalize", "none"],
		fontStyle: ["normal", "italic"],
	},
});

// Define border and shadow properties
const borderProperties = defineProperties({
	staticProperties: {
		borderWidth: {
			0: "0px",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px",
		},
		borderStyle: ["solid", "dashed", "dotted", "none"],
		borderRadius: {
			none: "0px",
			sm: "2px",
			default: "4px",
			md: "6px",
			lg: "8px",
			xl: "12px",
			"2xl": "16px",
			"3xl": "24px",
			full: "9999px",
		},
	},
});

// Define position and z-index properties
const positionProperties = defineProperties({
	staticProperties: {
		position: ["static", "relative", "absolute", "fixed", "sticky"],

		zIndex: {
			0: "0",
			10: "10",
			20: "20",
			30: "30",
			40: "40",
			50: "50",
			auto: "auto",
		},
		overflow: ["visible", "hidden", "scroll", "auto"],
		overflowX: ["visible", "hidden", "scroll", "auto"],
		overflowY: ["visible", "hidden", "scroll", "auto"],
	},
	dynamicProperties: {
		top: themeContract.spacing,
		bottom: themeContract.spacing,
		left: themeContract.spacing,
		right: themeContract.spacing,
	},
});

// Define color properties
const colorProperties = defineProperties({
	staticProperties: {
		color: flattenedColors,
		backgroundColor: flattenedColors,
		borderColor: flattenedColors,
	},
	dynamicProperties: {
		// Semantic colors from theme contract
		color: {
			// Text colors
			...flattenedColors,
			...semanticTextColors,
		},
		backgroundColor: {
			...semanticBackgroundColors, // All flattened bg semantic tokens
			...flattenedColors,
		},
		borderColor: {
			...semanticBorders, // All flattened border semantic tokens
			...flattenedColors,
		},
		boxShadow: {
			...semanticShadows, // All flattened shadow semantic tokens
		},
	},
});

// Create the main sprinkles function
export const sprinkles = createRainbowSprinkles(
	responsiveProperties,
	typographyProperties,
	borderProperties,
	positionProperties,
	enhancedInteractiveProperties,
	enhancedStateProperties,
	colorProperties,
);

sprinkles({ backgroundColor: "$bg.raised.interactive.danger.pressed" });

// Export types
export type Sprinkles = Parameters<typeof sprinkles>[0];
