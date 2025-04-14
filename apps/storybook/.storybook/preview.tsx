import type { Preview } from "@storybook/react";

import "../src/index.css";
// this is annoying idk why i need to change the order here now
// import "@wwwares/ui-react/static.css";
// import "@wwwares/ui-system/static.css";

import React, { useEffect } from "react";

// Custom decorator to add a data attribute based on the selected theme
const withThemeAttribute = (Story, context) => {
	useEffect(() => {
		const theme = context?.globals?.theme;

		document.body.setAttribute("data-color-mode", theme);
	}, [context.globals.theme]);

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
		// backgrounds: {
		// default: "light",
		// values: [
		// {
		// name: "light",
		// value: "var(--colors-bg-surface-0)",
		// },
		// {
		// name: "dark",
		// value: "var(--colors-bg-surface-0)", // zinc.800
		// },
		// ],
		// },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
