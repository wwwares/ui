/**
 * CSS reset ported from Tailwind Preflight (v4) to Vanilla Extract.
 *
 * https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css
 */

import { globalStyle } from "@vanilla-extract/css";

import * as layers from "./reset-layers.css";

/**
 * 1. Prevent padding and border from affecting element width.
 * 2. Remove default margins and padding.
 * 3. Reset all borders.
 */
globalStyle("*, ::after, ::before, ::backdrop, ::file-selector-button", {
	"@layer": {
		[layers.reset]: {
			boxSizing: "border-box",
			margin: 0,
			padding: 0,
			border: "0 solid",
		},
	},
});

/**
 * 1. Use a consistent sensible line-height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Use a more readable tab size.
 * 4. Set the product typeface once at the root and let it inherit.
 * 5. Disable tap highlights on iOS.
 */
globalStyle("html, :host", {
	"@layer": {
		[layers.reset]: {
			lineHeight: 1.5,
			WebkitTextSizeAdjust: "100%",
			tabSize: 4,
			fontFamily: [
				"Inter",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Noto Sans",
				"Arial",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			].join(", "),
			WebkitTapHighlightColor: "transparent",
		},
	},
});

/**
 * 1. Add the correct height in Firefox.
 * 2. Correct the inheritance of border color in Firefox.
 * 3. Reset the default border style to a 1px solid border.
 */
globalStyle("hr", {
	"@layer": {
		[layers.reset]: {
			height: 0,
			color: "inherit",
			borderTopWidth: "1px",
		},
	},
});

/**
 * Add the correct text decoration in Chrome, Edge, and Safari.
 */
globalStyle("abbr:where([title])", {
	"@layer": {
		[layers.reset]: {
			// WebkitTextDecoration: "underline dotted",
			textDecoration: "underline dotted",
		},
	},
});

/**
 * Remove the default font size and weight for headings.
 */
globalStyle("h1, h2, h3, h4, h5, h6", {
	"@layer": {
		[layers.reset]: {
			fontSize: "inherit",
			fontWeight: "inherit",
		},
	},
});

/**
 * Reset links to optimize for opt-in styling instead of opt-out.
 */
globalStyle("a", {
	"@layer": {
		[layers.reset]: {
			color: "inherit",
			// WebkitTextDecoration: "inherit",
			textDecoration: "inherit",
		},
	},
});

/**
 * Add the correct font weight in Edge and Safari.
 */
globalStyle("b, strong", {
	"@layer": {
		[layers.reset]: {
			fontWeight: "bolder",
		},
	},
});

/**
 * 1. Use a monospace stack for code.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
globalStyle("code, kbd, samp, pre", {
	"@layer": {
		[layers.reset]: {
			fontFamily: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			].join(", "),
			fontSize: "1em",
		},
	},
});

/**
 * Add the correct font size in all browsers.
 */
globalStyle("small", {
	"@layer": {
		[layers.reset]: {
			fontSize: "80%",
		},
	},
});

/**
 * Prevent `sub` and `sup` elements from affecting the line height in all browsers.
 */
globalStyle("sub, sup", {
	"@layer": {
		[layers.reset]: {
			fontSize: "75%",
			lineHeight: 0,
			position: "relative",
			verticalAlign: "baseline",
		},
	},
});

globalStyle("sub", {
	"@layer": {
		[layers.reset]: {
			bottom: "-0.25em",
		},
	},
});

globalStyle("sup", {
	"@layer": {
		[layers.reset]: {
			top: "-0.5em",
		},
	},
});

/**
 * 1. Remove text indentation from table contents in Chrome and Safari.
 * 2. Correct table border color inheritance in Chrome and Safari.
 * 3. Remove gaps between table borders by default.
 */
globalStyle("table", {
	"@layer": {
		[layers.reset]: {
			textIndent: 0,
			borderColor: "inherit",
			borderCollapse: "collapse",
		},
	},
});

/**
 * Use the modern Firefox focus style for all focusable elements.
 */
globalStyle(":-moz-focusring:where(:not(iframe))", {
	"@layer": {
		[layers.reset]: {
			outline: "auto",
		},
	},
});

/**
 * Add the correct vertical alignment in Chrome and Firefox.
 */
globalStyle("progress", {
	"@layer": {
		[layers.reset]: {
			verticalAlign: "baseline",
		},
	},
});

/**
 * Add the correct display in Chrome and Safari.
 */
globalStyle("summary", {
	"@layer": {
		[layers.reset]: {
			display: "list-item",
		},
	},
});

/**
 * Make lists unstyled by default.
 */
globalStyle("ol, ul, menu", {
	"@layer": {
		[layers.reset]: {
			listStyle: "none",
		},
	},
});

/**
 * 1. Make replaced elements `display: block` by default.
 * 2. Add `vertical-align: middle` to align replaced elements more sensibly.
 */
globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
	"@layer": {
		[layers.reset]: {
			display: "block",
			verticalAlign: "middle",
		},
	},
});

/**
 * Constrain images and videos to the parent width and preserve their intrinsic
 * aspect ratio.
 */
globalStyle("img, video", {
	"@layer": {
		[layers.reset]: {
			maxWidth: "100%",
			height: "auto",
		},
	},
});

/**
 * 1. Inherit font styles in all browsers.
 * 2. Remove border radius in all browsers.
 * 3. Remove background color in all browsers.
 * 4. Ensure consistent opacity for disabled states in all browsers.
 */
globalStyle("button, input, select, optgroup, textarea, ::file-selector-button", {
	"@layer": {
		[layers.reset]: {
			font: "inherit",
			fontFeatureSettings: "inherit",
			fontVariationSettings: "inherit",
			letterSpacing: "inherit",
			color: "inherit",
			borderRadius: 0,
			backgroundColor: "transparent",
			opacity: 1,
		},
	},
});

/**
 * Restore default font weight.
 */
globalStyle(":where(select:is([multiple], [size])) optgroup", {
	"@layer": {
		[layers.reset]: {
			fontWeight: "bolder",
		},
	},
});

/**
 * Restore indentation.
 */
globalStyle(":where(select:is([multiple], [size])) optgroup option", {
	"@layer": {
		[layers.reset]: {
			paddingInlineStart: "20px",
		},
	},
});

/**
 * Restore space after button.
 */
globalStyle("::file-selector-button", {
	"@layer": {
		[layers.reset]: {
			marginInlineEnd: "4px",
		},
	},
});

/**
 * Reset the default placeholder opacity in Firefox, then set the placeholder
 * color to a semi-transparent version of the current text color in browsers
 * that do not crash when using `color-mix(…)` with `currentcolor`.
 */
globalStyle("::placeholder", {
	"@layer": {
		[layers.reset]: {
			opacity: 1,
			"@supports": {
				"(not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px)": {
					color: "color-mix(in oklab, currentcolor 50%, transparent)",
				},
			},
		},
	},
});

/**
 * Prevent resizing textareas horizontally by default.
 */
globalStyle("textarea", {
	"@layer": {
		[layers.reset]: {
			resize: "vertical",
		},
	},
});

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
globalStyle("::-webkit-search-decoration", {
	"@layer": {
		[layers.reset]: {
			WebkitAppearance: "none",
		},
	},
});

/**
 * 1. Ensure date/time inputs have the same height when empty in iOS Safari.
 * 2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
 */
globalStyle("::-webkit-date-and-time-value", {
	"@layer": {
		[layers.reset]: {
			minHeight: "1lh",
			textAlign: "inherit",
		},
	},
});

/**
 * Prevent height from changing on date/time inputs in macOS Safari when the
 * input is set to `display: block`.
 */
globalStyle("::-webkit-datetime-edit", {
	"@layer": {
		[layers.reset]: {
			display: "inline-flex",
		},
	},
});

/**
 * Remove excess padding from pseudo-elements in date/time inputs to ensure
 * consistent height across browsers.
 */
globalStyle("::-webkit-datetime-edit-fields-wrapper", {
	"@layer": {
		[layers.reset]: {
			padding: 0,
		},
	},
});

globalStyle(
	[
		"::-webkit-datetime-edit",
		"::-webkit-datetime-edit-year-field",
		"::-webkit-datetime-edit-month-field",
		"::-webkit-datetime-edit-day-field",
		"::-webkit-datetime-edit-hour-field",
		"::-webkit-datetime-edit-minute-field",
		"::-webkit-datetime-edit-second-field",
		"::-webkit-datetime-edit-millisecond-field",
		"::-webkit-datetime-edit-meridiem-field",
	].join(", "),
	{
		"@layer": {
			[layers.reset]: {
				paddingBlock: 0,
			},
		},
	},
);

/**
 * Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome.
 */
globalStyle("::-webkit-calendar-picker-indicator", {
	"@layer": {
		[layers.reset]: {
			lineHeight: 1,
		},
	},
});

/**
 * Remove the additional `:invalid` styles in Firefox.
 */
globalStyle(":-moz-ui-invalid", {
	"@layer": {
		[layers.reset]: {
			boxShadow: "none",
		},
	},
});

/**
 * Correct the inability to style the border radius in iOS Safari.
 */
globalStyle(
	"button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button",
	{
		"@layer": {
			[layers.reset]: {
				appearance: "button",
			},
		},
	},
);

/**
 * Correct the cursor style of increment and decrement buttons in Safari.
 */
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
	"@layer": {
		[layers.reset]: {
			height: "auto",
		},
	},
});

/**
 * Make elements with the HTML hidden attribute stay hidden by default.
 */
globalStyle("[hidden]:where(:not([hidden='until-found']))", {
	"@layer": {
		[layers.reset]: {
			display: "none !important",
		},
	},
});

/**
 * Signal interactivity on the elements that carry it.
 */
globalStyle("a, button", {
	"@layer": {
		[layers.reset]: {
			cursor: "pointer",
		},
	},
});
