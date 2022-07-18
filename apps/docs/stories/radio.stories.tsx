import { Meta, Story } from "@storybook/react";
import React from "react";

import { Radio } from "ui";

export default {
  component: Radio,
  title: "Radio",
} as Meta;

const Template: Story = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = { checked: false, disabled: false };
