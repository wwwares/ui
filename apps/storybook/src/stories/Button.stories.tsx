import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@wwwares/ui-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Button",
	component: Button,
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
	args: { isDisabled: false, intent: "", variant: "default" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		// primary: true,
		// intent: "undefined",
		// variant: "default",
		children: <span>"Default"</span>,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		children: <span>"Primary"</span>,
	},
};
export const Danger: Story = {
	args: {
		intent: "danger",
		variant: "default",
		children: <span>"Danger"</span>,
	},
};

export const Mix: Story = {
	render() {
		return (
			<div style={{ display: "flex", gap: "5px" }}>
				<Button>Hey!</Button>
				<Button variant="primary">Hey 2!</Button>
			</div>
		);
	},
};
