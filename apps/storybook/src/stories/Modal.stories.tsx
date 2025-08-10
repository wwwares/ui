import type { Meta, StoryObj } from "@storybook/react";

import {
	Button,
	Modal,
	ModalMarker,
	Select,
	TextField,
} from "@wwwares/ui-react";
import { Fragment, useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Modal",
	component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	// @ts-expect-error
	args: {
		// children: () => <span>"Modal"</span>,
		// primaryAction: <Button variant="primary">Save</Button>,
		// secondaryAction: <Button>Discard</Button>,
		// tertiaryAction: <Button intent="danger">Delete</Button>,
		size: "default",
	},
	render: (args) => {
		const [modalOpen, setModalOpen] = useState(false);
		return (
			<Modal
				{...args}
				onOpenChange={setModalOpen}
				title="Add a new line item"
				isOpen={modalOpen}
				activator={
					<Button onPress={() => setModalOpen(true)}>Open modal</Button>
				}
				primaryAction={<Button intent="primary">Submit</Button>}
				footer={<span>difference: 31</span>}
			>
				{() => (
					<Fragment>
						<Select
							label="Orb"
							options={[{ label: "NYC-1", value: "nyc1" }]}
							value="nyc1"
						/>
						<ModalMarker content={"Accounting"} />
						<div gap="4">
							<TextField label="Account name" />
							<TextField label="Code" />
						</div>
					</Fragment>
				)}
			</Modal>
		);
	},
};
