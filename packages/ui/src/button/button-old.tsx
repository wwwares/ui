import { VariantProps } from "@stitches/react";
import * as React from "react";
import { Spinner } from "../spinner";
import { styled } from "../stitches.conf";

export const StyledButton = styled("button", {
  padding: "$4 $6",
  borderRadius: "$2",
  fontWeight: "bold",
  fontSize: "$2",
  cursor: "pointer",
  transition: "60ms ease-in box-shadow",
  border: "1px solid",
  color: "$white",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  lineHeight: "1",

  "&:focus:not([disabled])": {
    outline: "$black thin dotted",
  },

  "&[disabled]": {
    opacity: "0.5",
    cursor: "auto",
  },

  variants: {
    type: {
      default: {
        background: "linear-gradient(180deg, $white, $gray-50)",
        borderColor: "$gray-300",
        color: "$black",
        boxShadow: "#D7DCE1 0px 0px 1px 0px inset",

        "&:not([disabled])": {
          "&:hover": {
            boxShadow: "#F2F5F8 1.25px 1.25px 1px -1px inset",
          },
          "&:active": {
            background: "linear-gradient(180deg,$gray-50, $gray-50)",
            boxShadow:
              "#A3ABB3 0px 0px 1px 0px inset, #A3ABB3 0px 0px 1px 0px inset",
          },
        },
      },
      primary: {
        borderColor: "$blue-600",
        background: "linear-gradient(180deg,$blue-400, $blue-500)",
        boxShadow: "#829FF5 0px 0px 1px 0px inset",

        "&:not([disabled])": {
          "&:hover": {
            boxShadow: "#F5F7FF 1.25px 1.25px 1px -1px inset",
          },
          "&:active": {
            background: "linear-gradient(180deg,$blue-500, $blue-500)",
            boxShadow:
              "#829FF5 0px 0px 1px 0px inset, #829FF5 0px 0px 1px 0px inset",
          },
        },
      },
      action: {
        borderColor: "$green-900",
        background: "linear-gradient(180deg,$green-700, $green-800)",
        boxShadow: "#1FC641 0px 0px 1px 0px inset",

        "&:not([disabled])": {
          "&:hover": {
            boxShadow: "#F5FFF6 1.25px 1.25px 1px -1px inset",
          },
          "&:active": {
            background: "linear-gradient(180deg,$green-800, $green-800)",
            boxShadow:
              "#5BE873 0px 0px 1px 0px inset, #5BE873 0px 0px 1px 0px inset",
          },
        },
      },
      danger: {
        borderColor: "$maple-700",
        background: "linear-gradient(180deg,$maple-400, $maple-500)",
        boxShadow: "#F58286 0px 0px 1px 0px inset",

        "&:not([disabled])": {
          "&:hover": {
            boxShadow: "#FFF5F5 1.25px 1.25px 1px -1px inset",
          },
          "&:active": {
            background: "linear-gradient(180deg,$maple-500, $maple-500)",
            boxShadow:
              "#F58286 0px 0px 1px 0px inset, #F58286 0px 0px 1px 0px inset",
          },
        },
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

type ButtonProps = React.SelectHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof StyledButton> & {
    children?: React.ReactNode;
    loading?: boolean;
  };

export const Button = ({
  children,
  disabled,
  type,
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton {...rest} type={type} disabled={disabled || loading}>
      {loading && (
        <Spinner
          css={{ height: "10px", width: "10px" }}
          inverted={type !== "default"}
        />
      )}
      <span>{children}</span>
    </StyledButton>
  );
};
