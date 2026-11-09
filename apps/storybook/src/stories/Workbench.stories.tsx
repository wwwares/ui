import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, TextField, Workbench } from "@wwwares/ui-react";
import { useState } from "react";

const meta = {
	title: "Example/Workbench",
	component: Workbench,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Workbench>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	// @ts-expect-error
	args: {
		height: "60vh",
	},
	render: (args) => {
		const [open, setOpen] = useState(false);
		const [view, setView] = useState("logs");
		const show = (next: string) => {
			setView(next);
			setOpen(true);
		};
		return (
			<div style={{ height: "100vh", padding: 16 }}>
				<span>Page content</span>
				<Workbench
					{...args}
					title="Reconciliation"
					isOpen={open}
					onOpenChange={setOpen}
					start={
						<>
							<Button onPress={() => show("logs")}>Logs</Button>
							<Button onPress={() => show("diff")}>Diff</Button>
						</>
					}
					end={<Button intent="primary">Run</Button>}
				>
					{() => (view === "logs" ? <span>Logs view</span> : <TextField label="Diff view" />)}
				</Workbench>
			</div>
		);
	},
};
