import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button } from "ui";

export default {
  component: Button,
  title: "Button",
} as Meta;

const Template: Story = (args) => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});

export const Action = Template.bind({});
Action.args = { type: "action" };

export const Primary = Template.bind({});
Primary.args = { type: "primary" };

export const Danger = Template.bind({});
Danger.args = { type: "danger" };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, type: "default" };

export const Loading = Template.bind({});
Loading.args = { disabled: false, type: "default", loading: true };
