import { defineConfig } from "@pandacss/dev";
import { warePreset } from "./src";

export default defineConfig({
	preflight: true,
	jsxFramework: "react",
	presets: [warePreset],
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	// outExtension:,
	outdir: "./dist",
});
