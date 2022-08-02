import { ComponentPropsWithRef, ReactNode } from "react";
import { styled } from "../stitches.conf";

const StyledCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  // padding: "$4",
  borderRadius: "$2",
  // boxShadow: "0px 0px 1px 0px #A3ABB3",
  border: "1px solid $gray-100",
});

const Wrapper = styled("div", {
  padding: "$4",
});

const Header = styled("p", {
  fontSize: "$5",
  padding: "$3",
  margin: 0,
  background: "$gray-50",
  borderBottom: "1px solid $gray-100",
});

export const CardFooter = styled("div", {
  padding: "$3",
  margin: "$4 -$4 -$4 -$4",
  background: "$gray-50",
  borderTop: "1px solid $gray-100",
  display: "flex",
});

export const CardSection = styled("div", {
  [`& + &`]: {
    margin: "$4 -$4 -$4 -$4",
    padding: "$4",
    borderTop: "1px solid $gray-100",
  },
});

export const Card = ({
  title,
  children,
  ...rest
}: {
  title?: string;
  children: ReactNode;
} & ComponentPropsWithRef<typeof StyledCard>) => {
  return (
    <StyledCard {...rest}>
      {title && <Header>{title}</Header>}
      <Wrapper>{children}</Wrapper>
    </StyledCard>
  );
};
