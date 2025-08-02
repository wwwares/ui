import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
	entry: ["./src"],
	esbuildPlugins: [vanillaExtractPlugin()],
});
