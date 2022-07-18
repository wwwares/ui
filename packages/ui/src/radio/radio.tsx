import { VariantProps } from "@stitches/react";
import { styled } from "../stitches.conf";

const StyledRadio = styled("input", {
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0,
  border: "0px none",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
});

const Circle = styled("div", {
  display: "inline-flex",
  borderRadius: "$round",
  height: "$5",
  width: "$5",
  border: "1px solid $gray-200",
  background: "linear-gradient(180deg, $white, $gray-50)",
  boxShadow: "#D7DCE1 0px 0px 1px 0px inset",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  "&:hover": {
    "&::before": {
      boxShadow: "#F2F5F8 1.25px 1.25px 1px -1px inset",
    },
  },

  "&::before": {
    content: "",
    borderRadius: "$round",
    display: "inline-block",
    height: "7px",
    width: "7px",
    background: "linear-gradient(180deg, $white, $gray-50)",
    opacity: 0,
  },
  variants: {
    checked: {
      true: {
        background: "linear-gradient(180deg, $blue-400, $blue-500)",
        borderColor: "$blue-600",
        boxShadow: "#829FF5 0px 0px 1px 0px inset",
        "&::before": {
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

type RadioProps = React.SelectHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof Circle> & {};

export const Radio = ({
  checked = false,
  disabled = false,
  ...rest
}: RadioProps) => (
  <div style={{ position: "relative" }}>
    <StyledRadio
      type="radio"
      checked={checked as boolean}
      disabled={disabled as boolean}
      {...rest}
    />
    <Circle checked={checked} disabled={disabled} />
  </div>
);
