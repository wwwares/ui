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
type RingFamily = Exclude<Family, "filter">;

const EDGE = {
	well: { borderStyle: "solid" },
	ridge: { borderStyle: "solid" },
	raised: { borderStyle: "solid" },
	filter: { borderStyle: "dashed" }, // tag, filter-button
} as const;

// `filter` reads ridge tokens but renders a real dashed border; others map 1:1 to their tree.
const tokenFamily = (f: Family): "well" | "ridge" | "raised" => (f === "filter" ? "ridge" : f);

/**
 * Compose a family/intent/state into a single surface object: background, a real
 * `1px <style>` border, and the family shadow.
 */
export function edge<F extends Family>(
	family: F,
	intent: IntentByFamily[F],
	state: State,
	opts?: { borderStyle?: "solid" | "dashed" }, // override (selected tag → solid)
) {
	const tf = tokenFamily(family);
	const color = vars.semantic.borders[tf].interactive[intent][state];
	const shadow = vars.semantic.shadows[tf].interactive[intent][state];
	const bg = vars.semantic.bg[tf].interactive[intent][state];
	const borderStyle = opts?.borderStyle ?? EDGE[family].borderStyle;

	return {
		background: bg,
		border: `1px ${borderStyle} ${color}`,
		boxShadow: shadow,
	};
}

/**
 * Border/shadow only — for states that intentionally hold the background constant
 * (focus rings on select/slider). Thin wrapper over `edge()`, so there is one
 * composition path and `ringOnly` never drifts from `edge`.
 */
export function ringOnly<F extends RingFamily>(family: F, intent: IntentByFamily[F], state: State) {
	const { border, boxShadow } = edge(family, intent, state);
	return { border, boxShadow };
}
