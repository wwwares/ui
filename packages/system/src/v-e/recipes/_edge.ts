import { vars } from "../utils";

type State = "default" | "hover" | "pressed";

// Per-family intent maps. These keep `edge()` honest: well only has neutral,
// ridge has neutral|primary, raised has neutral|primary|danger, and filter
// reads ridge tokens so it carries the same intents ridge does.
type IntentByFamily = {
	well: "neutral";
	ridge: "neutral" | "primary";
	raised: "neutral" | "primary" | "danger";
	filter: "neutral" | "primary";
};

type Family = keyof IntentByFamily;
// `ringOnly` is meaningless for `filter` (which emits a real border, not a ring).
type RingFamily = Exclude<Family, "filter">;

// Per-category edge treatment. Whether the edge is a solid inset ring or a real
// (dashed) border lives here, once — not inline per component.
const EDGE = {
	well: { render: "ring" },
	ridge: { render: "ring" },
	raised: { render: "ring" }, // phase 2
	filter: { render: "border", borderStyle: "dashed" }, // tag, filter-button
} as const;

// `filter` reads ridge tokens but renders a real dashed border; others map 1:1 to their tree.
const tokenFamily = (f: Family): "well" | "ridge" | "raised" =>
	f === "filter" ? "ridge" : f;

/**
 * Compose a family/intent/state into a single surface object.
 * - ring families: border is folded into the box-shadow stack; no `border` is emitted.
 * - border families: a real `1px <style>` border + the family shadow.
 */
export function edge<F extends Family>(
	family: F,
	intent: IntentByFamily[F],
	state: State,
	opts?: { borderStyle?: "solid" | "dashed" }, // override for border families (selected tag → solid)
) {
	const tf = tokenFamily(family);
	const color = vars.semantic.borders[tf].interactive[intent][state];
	const shadow = vars.semantic.shadows[tf].interactive[intent][state];
	const bg = vars.semantic.bg[tf].interactive[intent][state];
	const cfg = EDGE[family];

	if (cfg.render === "border") {
		const borderStyle =
			opts?.borderStyle ?? ("borderStyle" in cfg ? cfg.borderStyle : "solid");
		return { background: bg, border: `1px ${borderStyle} ${color}`, boxShadow: shadow };
	}
	return { background: bg, boxShadow: `inset 0 0 0 1px ${color}, ${shadow}` };
}

/**
 * Ring/shadow only — for states that intentionally hold the background constant
 * (focus rings on select/slider). Thin wrapper over `edge()`, so there is one
 * composition path and `ringOnly` never drifts from `edge`.
 */
export function ringOnly<F extends RingFamily>(
	family: F,
	intent: IntentByFamily[F],
	state: State,
) {
	return { boxShadow: edge(family, intent, state).boxShadow };
}
