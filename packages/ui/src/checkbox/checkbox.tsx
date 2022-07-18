import { VariantProps } from "@stitches/react";
import { styled } from "../stitches.conf";

const StyledCheckbox = styled("input", {
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0,
  margin: 0,
});

const Check = styled("div", {
  position: "relative",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    "&::before": {
      boxShadow: "#F2F5F8 1.25px 1.25px 1px -1px inset",
    },
  },

  "&::before": {
    content: "",
    borderRadius: "$2",
    display: "flex",
    height: "$5",
    width: "$5",
    border: "1px solid $gray-200",
    background: "linear-gradient(180deg, $white, $gray-50)",
    boxShadow: "#D7DCE1 0px 0px 1px 0px inset",
  },
  "&::after": {
    position: "absolute",
    top: "3px",
    left: "3px",
    content: "",
    display: "flex",
    transform: "rotate(-45deg) scale(.8)",
    height: "4px",
    width: "8px",
    borderBottom: "$white solid 4px",
    borderLeft: "$white solid 4px",
    opacity: 0,
    cursor: "inherit",
  },
  variants: {
    checked: {
      true: {
        "&::before": {
          background: "linear-gradient(180deg, $blue-400, $blue-500)",
          borderColor: "$blue-600",
          boxShadow: "#829FF5 0px 0px 1px 0px inset",
        },
        "&::after": {
          opacity: 1,
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },
});

type CheckboxProps = React.SelectHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof Check> & {};

export const Checkbox = ({
  checked = false,
  disabled = false,
  ...rest
}: CheckboxProps) => (
  <div style={{ position: "relative" }}>
    <StyledCheckbox
      type="checkbox"
      checked={checked as boolean}
      disabled={disabled as boolean}
      {...rest}
    />
    <Check checked={checked} disabled={disabled} />
  </div>
);
