import { VariantProps } from "@stitches/react";
import * as React from "react";
import { Spinner } from "../spinner";
import { styled } from "../stitches.conf";

export const StyledButton = styled("button", {
  padding: "$2 $3",
  borderRadius: "$2",
  fontWeight: "bold",
  fontSize: "$2",
  cursor: "pointer",
  transition: "60ms ease-in all",
  border: "1px solid",
  color: "$white",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",

  "&:focus:not([disabled])": {
    outline: "$black thin dotted",
  },

  "&:active:not([disabled])": {
    boxShadow:
      "rgba(24, 25, 29, 0.45) 0px 3px 3px -2px inset,rgba(24, 25, 29, 0.45) 0px -1px 3px -2px inset",
  },

  "&[disabled]": {
    opacity: "0.5",
    cursor: "auto",
  },

  variants: {
    type: {
      default: {
        background:
          "linear-gradient(180deg, $white 5%, $gray-50 50%, white 95%)",
        borderColor: "$gray-200",
        color: "black",

        "&:hover:not([disabled])": {
          borderColor: "$gray-300",
          background: "$gray-50",
        },

        "&:active:not([disabled])": {
          // boxShadow: "inset 0 2px 3px 0 rgba(24,25,29,0.3)",
          boxShadow:
            "rgba(24, 25, 29, 0.3) 0px 1px 3px -2px inset,rgba(24, 25, 29, 0.3) 0px -1px 3px -2px inset",
        },
      },
      primary: {
        borderColor: "$blue-600",
        background: "linear-gradient(180deg,$blue-400, $blue-500)",

        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$blue-500, $blue-500)",
        },
      },
      action: {
        borderColor: "$green-900",
        background: "linear-gradient(180deg,$green-700, $green-800)",

        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$green-800, $green-800)",
        },
      },
      danger: {
        borderColor: "$maple-700",
        background: "linear-gradient(180deg,$maple-400, $maple-500)",

        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$maple-500, $maple-500)",
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
          css={{ height: "13px", width: "13px" }}
          inverted={type !== "default"}
        />
      )}
      {children}
    </StyledButton>
  );
};
