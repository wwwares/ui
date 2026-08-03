import { defineProperties, createRainbowSprinkles } from "rainbow-sprinkles";
import { themeContract } from "./contract.css";
import { flattenedColors } from "./colors";
import { radii } from "./radii";

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
						BasePath extends "" ? `${string & K}` : `${BasePath}${Separator}${string & K}`,
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
function mapSemanticTokens<T extends Record<string, unknown>, BasePath extends string>(
	obj: T,
	basePath: BasePath,
): FlattenedRecord<T, BasePath> {
	const result: Record<string, string> = {};

	function traverse(current: Record<string, unknown>, currentPath: string) {
		for (const [key, value] of Object.entries(current)) {
			const newPath = `${currentPath}.${key}`;

			if (typeof value === "object" && value !== null && typeof value !== "string") {
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

const semanticBackgroundColors = mapSemanticTokens(themeContract.semantic.bg, "bg");

const semanticTextColors = mapSemanticTokens(themeContract.semantic.text, "text");

const semanticBorders = mapSemanticTokens(themeContract.semantic.borders, "borders");

const semanticShadows = mapSemanticTokens(themeContract.semantic.shadows, "shadows");

// The state-selector kit (selectors/is/group/peer) lives in ./selectors — a
// plain TS module, since .css.ts files may only export serializable values.
import { selectors } from "./selectors";

const enhancedInteractiveProperties = defineProperties({
	conditions: {
		default: {},

		hover: { selector: selectors.hover },

		focus: { selector: selectors.focus },

		focusVisible: { selector: selectors.focusVisible },

		focusWithin: { selector: selectors.focusWithin },

		active: { selector: selectors.active },

		visited: { selector: selectors.visited },

		target: { selector: selectors.target },
	},
	defaultCondition: "default",
	dynamicProperties: {},
});

const enhancedStateProperties = defineProperties({
	conditions: {
		default: {},

		open: { selector: selectors.open },

		closed: { selector: selectors.closed },

		expanded: { selector: selectors.expanded },

		collapsed: { selector: selectors.collapsed },

		selected: { selector: selectors.selected },

		unselected: { selector: selectors.unselected },

		pressed: { selector: selectors.pressed },

		unpressed: { selector: selectors.unpressed },

		loading: { selector: selectors.loading },

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
		// Border tokens are color-only now, so map to the *-color longhands rather
		// than the `border`/`border<Side>` shorthands (a shorthand needs `1px solid
		// <color>`; a bare color there produces invalid CSS). The `borderColor`
		// shorthand already lives in colorProperties below, so it's omitted here to
		// avoid defining the same property twice.
		borderLeftColor: semanticBorders,
		borderBottomColor: semanticBorders,
		borderTopColor: semanticBorders,
		borderRightColor: semanticBorders,
		order: true,
		justifySelf: true,
		alignSelf: true,
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
		borderRadius: radii,
	},
	dynamicProperties: {
		borderRadius: true,
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
		background: true,
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

// Export types
export type Sprinkles = Parameters<typeof sprinkles>[0];
