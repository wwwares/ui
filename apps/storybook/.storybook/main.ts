import { dirname, join } from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}

// Resolve the workspace packages to their TypeScript SOURCE entry points.
// Consuming source (instead of the prebuilt dist/) lets Vite own these modules,
// which is what makes React Fast Refresh + vanilla-extract HMR work. Without
// this, edits land in dist/ (a dependency) and Storybook does a full reload.
const uiSrc = join(getAbsolutePath("@wwwares/ui-react"), "src/index.ts");
const systemSrc = join(getAbsolutePath("@wwwares/ui-system"), "src/index.ts");

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-docs"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	typescript: {
		reactDocgen: false,
	},
	viteFinal(config) {
		return mergeConfig(config, {
			// Compile .css.ts on the fly so style edits hot-swap instead of
			// shipping a stale, prebuilt dist/index.css.
			plugins: [vanillaExtractPlugin()],
			resolve: {
				// Exact-match aliases (regex with $) so the bare specifier maps to
				// source, while subpaths like "@wwwares/ui-system/css" are left alone.
				alias: [
					{ find: /^@wwwares\/ui-react$/, replacement: uiSrc },
					{ find: /^@wwwares\/ui-system$/, replacement: systemSrc },
				],
				// Source packages bring their own react devDependency; dedupe so the
				// app and components share one copy (otherwise hooks break).
				dedupe: ["react", "react-dom"],
			},
			optimizeDeps: {
				// Don't pre-bundle the workspace packages — we want their source in
				// the live module graph for Fast Refresh / v-e HMR.
				exclude: ["@wwwares/ui-react", "@wwwares/ui-system"],
			},
		});
	},
};
export default config;
