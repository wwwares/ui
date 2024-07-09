import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@wwwares/react";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Select",
	component: Select,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	args: {
		options: [
			{ value: "value 1", label: "Value 1" },
			{ value: "value 2", label: "Value 2" },
		],
		isRequired: false,
		label: "@wwwares/ui",
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {},
	render: (args) => {
		const [value, setValue] = useState("value 2");

		return (
			<div style={{ display: "flex", width: "400px" }}>
				<Select
					{...args}
					value={value}
					onChange={(v) => {
						setValue(v.target.value);
					}}
				/>
			</div>
		);
	},
};
