import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm"],
	dts: true,
	deps: {
		// Regex so subpaths are covered too — a bare "react" leaves
		// react/jsx-runtime to be inlined.
		neverBundle: [/^react($|\/)/, "@wwwares/ui-system"],
	},
});
