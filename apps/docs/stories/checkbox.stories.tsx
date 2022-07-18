import { Meta, Story } from "@storybook/react";
import React from "react";

import { Checkbox } from "ui";

export default {
  component: Checkbox,
  title: "Checkbox",
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = { checked: false, disabled: false };
