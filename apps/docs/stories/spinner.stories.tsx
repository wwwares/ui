import { Meta, Story } from "@storybook/react";
import React from "react";

import { Spinner } from "ui";

export default {
  component: Spinner,
  title: "Spinner",
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
