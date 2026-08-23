// Composable state fragments (no `&`). Each matches both the native CSS state
// and the react-aria-components data attribute, so they work on plain DOM and
// RAC elements alike. Concatenate them onto any subject to combine states:
//   [`&${is.selected}${is.hover}`]         — combined states on the element itself
//   [group(is.selected, is.pressed)]       — combined states on a `.group` ancestor
export const is = {
	hover: ":is(:hover, [data-hovered])",
	focus: ":is(:focus, [data-focused])",
	focusVisible: ":is(:focus-visible, [data-focus-visible])",
	active: ":is(:active, [data-active])",

	open: ":is([open], [data-open], [aria-expanded=true])",
	closed: ":is(:not([open]), [data-closed], [aria-expanded=false])",
	expanded: ":is([aria-expanded=true], [data-expanded])",
	collapsed: ":is([aria-expanded=false], [data-collapsed])",
	selected: ":is([aria-selected=true], [data-selected])",
	unselected: ":is([aria-selected=false], [data-unselected])",
	pressed: ":is([aria-pressed=true], [data-pressed])",
	unpressed: ":is([aria-pressed=false], [data-unpressed])",
	checked: ":is(:checked, [data-checked])",
	disabled: ":is(:disabled, [data-disabled])",
	loading: ":is([data-loading], [aria-busy=true])",
	empty: ":is(:empty, [data-empty])",
} as const;

/** States on a `.group` ancestor: `group(is.selected, is.hover)` → `.group…[…] &` */
export const group = (...states: string[]) => `.group${states.join("")} &`;

/** States on a preceding `.peer` sibling: `peer(is.checked)` → `.peer[…] ~ &` */
export const peer = (...states: string[]) => `.peer${states.join("")} ~ &`;

// Prebuilt single-state selectors; combined states compose `is.*` directly.
export const selectors = {
	// Interactive selectors
	hover: `&${is.hover}`,
	focus: `&${is.focus}`,
	focusVisible: `&${is.focusVisible}`,
	focusWithin: "&:focus-within",
	active: `&${is.active}`,
	visited: "&:visited",
	target: "&:target",

	// State selectors
	open: `&${is.open}`,
	closed: `&${is.closed}`,
	expanded: `&${is.expanded}`,
	collapsed: `&${is.collapsed}`,
	selected: `&${is.selected}`,
	unselected: `&${is.unselected}`,
	pressed: `&${is.pressed}`,
	unpressed: `&${is.unpressed}`,
	disabled: `&${is.disabled}`,
	loading: `&${is.loading}`,
	empty: `&${is.empty}`,

	groupHover: group(is.hover),
	groupFocus: group(is.focus),
	groupFocusVisible: group(is.focusVisible),
	groupFocusWithin: group(":focus-within"),
	groupActive: group(is.active),
	groupPressed: group(is.pressed),
	groupSelected: group(is.selected),
	groupDisabled: group(is.disabled),

	peerChecked: peer(is.checked),
	peerFocus: peer(is.focus),
	peerHover: peer(is.hover),
} as const;
