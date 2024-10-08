import type { Meta, StoryObj } from "@storybook/react";
// import { Radio } from './Button';

import { Radio, RadioGroup } from "@wwwares/ui-react";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Radio",
	component: Radio,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		isRequired: false,
		label: "@wwwares/ui",
	},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {},
	render: (args) => {
		const [value, setValue] = useState("one");

		return (
			// <div style={{ display: "flex", width: "400px" }}>
			<RadioGroup
				{...args}
				value={value}
				onChange={(v) => {
					setValue(v);
				}}
				style={{ display: "flex", gap: "25px" }}
			>
				<Radio value="one">One</Radio>
				<Radio value="two">Twosadasdasd</Radio>
			</RadioGroup>
			// </div>
		);
	},
};
