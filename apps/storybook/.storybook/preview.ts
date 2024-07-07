import type { Preview } from "@storybook/react";

import "../src/index.css";
// import "@ui-ware/system/static.css";
import "@ui-ware/ui/dist/index.css";
import "@ui-ware/ui/dist/static.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
