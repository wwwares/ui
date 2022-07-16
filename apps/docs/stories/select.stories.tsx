import { Meta, Story } from "@storybook/react";
import React from "react";

import { Select } from "ui";

export default {
  component: Select,
  title: "Select",
} as Meta;

const Template: Story = (args) => (
  <Select {...args}>
    <option>option1</option>
    <option>option2</option>
    <option>option3</option>
    <option>option4</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = { invalid: false, disabled: false };
