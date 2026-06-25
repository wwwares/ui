import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	external: ["react", "react-dom", "@wwwares/ui-system"],
});
