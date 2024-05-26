import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
// import { Button } from './Button';

import { PandaCard as Card } from "@ui-ware/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Card",
	component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		// primary: true,
		label: "Card",
		children: <span>"Card"</span>,
	},
};

export const Secondary: Story = {
	args: {
		label: "Card",
		variant: "primary",
		children: <span>"Card"</span>,
	},
};

export const Large: Story = {
	args: {
		size: "large",
		label: "Card",
	},
};

export const Small: Story = {
	args: {
		size: "small",
		label: "Card",
	},
};
