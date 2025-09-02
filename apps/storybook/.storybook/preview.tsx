import type { Preview } from "@storybook/react";

import "../src/index.css";
import "@wwwares/ui-system/css";
import { lightTheme, themeContract } from "@wwwares/ui-system";

import { useEffect } from "react";

// Custom decorator to add a data attribute based on the selected theme
const withThemeAttribute = (Story, context) => {
	useEffect(() => {
		const theme = context?.globals?.theme;

		document.body.setAttribute("data-color-mode", theme);
		document.body.classList.add(lightTheme);
	}, [context.globals.theme]);

	// console.log(lightTheme);

	return <Story {...context} />;
};

export const globalTypes = {
	theme: {
		name: "Theme",
		description: "Global theme for components",
		defaultValue: "light",
		toolbar: {
			// The icon for the toolbar item
			icon: "circlehollow",
			// Array of options
			items: [
				{ value: "light", icon: "circlehollow", title: "light" },
				{ value: "dark", icon: "circle", title: "dark" },
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

const preview: Preview = {
	decorators: [withThemeAttribute],
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: themeContract.semantic.bg.surface.l0,
				},
				{
					name: "dark",
					// value: "var(--colors-bg-surface-0)", // zinc.800
					value: themeContract.semantic.bg.surface.l0,
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
