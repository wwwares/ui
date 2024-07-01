import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
// import { Select } from './Button';

import { Select } from "@ui-ware/ui";
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
	argTypes: {
		backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		// primary: true,
		// label: "Select",
		// isSelected: true,
		placeholder: "@wwwares/ui",
	},
	render: (args) => {
		const [value, setValue] = useState("option 1");

		return (
			<Select
				{...args}
				value={value}
				onChange={(v) => {
					setValue(v.target.value);
				}}
			>
				<option value="option1" style={{ transition: "none" }}>
					option 1
				</option>
				<option value="option2" style={{ transition: "none" }}>
					option 2
				</option>
				<option value="option3" style={{ transition: "none" }}>
					option 3
				</option>
				<option value="option4" style={{ transition: "none" }}>
					option 4
				</option>
			</Select>
		);
	},
};
