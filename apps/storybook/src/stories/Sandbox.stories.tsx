import React, { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
	Button,
	Card,
	Checkbox,
	Select,
	Spinner,
	TextField,
	SegmentedControlGroup,
	SegmentedControlOption,
	Tabs,
	TabPanel,
	RadioGroup,
	Radio,
} from "@wwwares/ui-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Sandbox",
	// component: Spinner,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	// 	inverted: { control: "boolean" },
	// },
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { inverted: false },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {},
	render: (args) => {
		return (
			<Card style={{ width: "700px" }}>
				<Tabs
					tabs={[
						{ id: "home", content: "Home" },
						{ id: "other", content: "Other" },
					]}
					label="asd"
				>
					<TabPanel id="home">
						<div
							style={{ display: "flex", gap: "16px", flexDirection: "column" }}
						>
							<div style={{ display: "flex", gap: "32px" }}>
								<TextField label="First name" />
								<TextField label="Last name" />
							</div>
							<Select
								label="Preffered address"
								value="cottage"
								options={[
									{ label: "Home", value: "home" },
									{ label: "Cottage", value: "cottage" },
									{ label: "Office :(", value: "office" },
								]}
							/>
							<div
								style={{
									display: "flex",
									gap: "8px",
									flexDirection: "column",
									marginTop: "8px",
								}}
							>
								<Checkbox label="Allow us to collect a ton of metrics" />
								<Checkbox label="Share your workspaces with colleiges" />
								<Checkbox label="Automatically set your status as away" />
								<Checkbox label="Use system theme" />
							</div>

							<div
								style={{
									display: "flex",
									gap: "16px",
									justifyContent: "space-between",
									marginTop: "16px",
								}}
							>
								<Button intent="danger">Delete</Button>
								<div
									style={{
										display: "flex",
										gap: "16px",
										justifyContent: "flex-end",
									}}
								>
									<Button>Cancel</Button>
									<Button intent="primary">Save</Button>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel id="other">
						<div style={{display: 'flex', gap: '32px', flexDirection: 'column'}}>

						<SegmentedControlGroup defaultValue="1">
							<SegmentedControlOption title="Test1" value="1" />
							<SegmentedControlOption title="test2" value="2" />
							<SegmentedControlOption title="Test 3" value="3" />
						</SegmentedControlGroup>

						<RadioGroup label="Select food">
							<Radio label="Pizza" value="pizza">Pizza</Radio>
							<Radio label="Wings" value="wings" >Wings</Radio>
							<Radio label="Hoddogs" value="hotdogs">Hoddogs</Radio>
						</RadioGroup>
						</div>
					</TabPanel>
				</Tabs>
			</Card>
		);
	},
};
