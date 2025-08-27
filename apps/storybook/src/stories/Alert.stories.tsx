import type { Meta, StoryObj } from "@storybook/react";

import { Alert, Card } from "@wwwares/ui-react";

const meta = {
	title: "Example/Alert",
	component: Alert,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["success", "error", "warning", "info"],
		},
	},
	args: { variant: "info" },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		variant: "info",
		title: "Upgrade your account.",
		description: "Job history and parallelization is limited in Trial mode",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		title: "Success!",
		description: "Job ACHR-8661 has completed successfully",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		title: "You have 20k tokens remaining.",
		description:
			"Once this balance reaches 0 consecutive jobs will begin to fail",
	},
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: Story example- no worries
export const Error: Story = {
	args: {
		variant: "error",
		title: "No more tokens remain for this session.",
		description:
			"ACHR-1128 could not be completed. Purchase more tokens to continue",
	},
};

export const LongContent: Story = {
	args: {
		variant: "info",
		title:
			"This is a longer alert message that demonstrates how the component " +
			"handles multiple lines of text. It should wrap properly and maintain " +
			"good spacing and readability across different screen sizes. The " +
			"background gradient and border colors should remain consistent " +
			"regardless of content length.",
	},
	render: (args) => (
		<Card css={{ width: "800px", height: "800px" }}>
			<Alert {...args} />
		</Card>
	),
};
