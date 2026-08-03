import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm"],
	dts: true,
	deps: {
		// Regexes so subpaths are covered too — a bare "react" leaves
		// react/jsx-runtime to be inlined.
		neverBundle: [/^react($|\/)/, /^react-dom($|\/)/, "@wwwares/ui-system"],
	},
});
