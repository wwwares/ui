import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Drawer, Flex, TextField } from "@wwwares/ui-react";
import { useState } from "react";

const meta = {
	title: "Example/Drawer",
	component: Drawer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		placement: { control: "radio", options: ["left", "right", "bottom"] },
	},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	// @ts-expect-error
	args: {
		placement: "right",
		isDismissable: true,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<Drawer
				{...args}
				onOpenChange={setOpen}
				title="Add a new line item"
				isOpen={open}
				activator={<Button onPress={() => setOpen(true)}>Open drawer</Button>}
				primaryAction={<Button intent="primary">Submit</Button>}
			>
				{() => (
					<Flex css={{ flexDirection: "column", gap: "$4" }}>
						<TextField label="Account name" />
						<TextField label="Code" />
					</Flex>
				)}
			</Drawer>
		);
	},
};
