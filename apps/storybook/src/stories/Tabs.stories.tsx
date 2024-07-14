import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabPanel, Card } from "@wwwares/ui-react";
import { Flex } from "@wwwares/ui-system/jsx";

const meta = {
	title: "Example/Tabs",
	component: Tabs,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	// @ts-expect-error
	args: {},
	render: () => (
		<Card>
			<Tabs
				tabs={[
					{ id: "1", content: "Tab 1" },
					{ id: "2", content: "Tab 2" },
					{ id: "3", content: "Tab 3" },
				]}
				label="buncha tabs"
			>
				<TabPanel id="1">Tab 1 content</TabPanel>
				<TabPanel id="2">Tab 2 content</TabPanel>
				<TabPanel id="3">Tab 3 content</TabPanel>
			</Tabs>
		</Card>
	),
};
