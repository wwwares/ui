import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, Card, CardFooter, CardSection } from "ui";

export default {
  component: Card,
  title: "Card",
} as Meta;

const Template: Story = (args) => (
  <Card {...args}>
    <CardSection>
      <span>hello from the first card section</span>
    </CardSection>
    <CardSection>
      <span>hello from the second card section</span>
    </CardSection>
    <CardFooter css={{ justifyContent: "flex-end", gap: "$2" }}>
      <Button>Cancel</Button>
      <Button type="primary">Submit</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = { title: "Card title" };
