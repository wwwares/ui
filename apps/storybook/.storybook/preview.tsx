import type { Preview } from "@storybook/react-vite";

import "../src/index.css";
import { lightTheme, darkTheme, themeContract } from "@wwwares/ui-system";

import { useEffect } from "react";

// Custom decorator to add a data attribute based on the selected theme
const withThemeAttribute = (Story, context) => {
	useEffect(() => {
		const theme = context?.globals?.theme;

		document.body.setAttribute("data-color-mode", theme);
		if (theme === "light") {
			document.body.classList.remove(darkTheme);
			document.body.classList.add(lightTheme);
		} else {
			document.body.classList.remove(lightTheme);
			document.body.classList.add(darkTheme);
		}
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
			options: {
				light: {
					name: "light",
					value: themeContract.semantic.bg.surface.page,
				},

				dark: {
					name: "dark",
					value: themeContract.semantic.bg.surface.page,
				},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	initialGlobals: {
		backgrounds: {
			value: "light",
		},
	},
};

export default preview;
