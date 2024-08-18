import type { Preview } from "@storybook/react";

import "../src/index.css";
// this is annoying idk why i need to change the order here now
import "@wwwares/ui-react/static.css";
import "@wwwares/ui-system/static.css";
// import "@wwwares/ui-react/dist/index.css";

import React, { useEffect } from "react";

// Custom decorator to add a data attribute based on the selected theme
const withThemeAttribute = (Story, context) => {
	useEffect(() => {
		const theme = context.globals.backgrounds.value;

		const themeValue = theme === "#fafafa" ? "light" : "dark";
		document.documentElement.setAttribute("data-color-mode", themeValue);
	}, [context.globals.backgrounds.value]);

	return <Story {...context} />;
};

// addDecorator(withThemeAttribute);

const preview: Preview = {
	decorators: [withThemeAttribute],
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#fafafa",
				},
				{
					name: "dark",
					value: "#27272a", // zinc.800
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
