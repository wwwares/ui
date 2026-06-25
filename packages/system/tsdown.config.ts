import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	plugins: [vanillaExtractPlugin()],
});
