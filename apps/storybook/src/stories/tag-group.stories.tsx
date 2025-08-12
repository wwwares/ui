import type { Meta, StoryObj } from "@storybook/react";

import { TagGroup, Tag } from "@wwwares/ui-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Tag",
	component: Tag,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	// 	backgroundColor: { control: "color" },
	// },
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {},
	render: (args) => {
		return (
			<TagGroup label="Filters" selectionMode="single" onRemove={console.log}>
				<Tag>Option 1</Tag>
				<Tag>Option 2</Tag>
				<Tag>Option 3</Tag>
			</TagGroup>
		);
	},
};
