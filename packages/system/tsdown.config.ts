import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm"],
	dts: true,
	plugins: [vanillaExtractPlugin({ extract: { name: "styles.css" } })],
	outputOptions: {
		assetFileNames: "[name][extname]",
	},
});
