import { styled } from "../stitches.conf";

export const Select = styled("select", {
  padding: "$3 $1",
  width: "100%",
  borderRadius: "$2",
  border: "1px solid $gray-200",
  background: "linear-gradient(180deg, $white, $gray-50)",
  cursor: "pointer",
  transition: "60ms ease-in all",
  fontWeight: "bold",
  fontSize: "$2",

  "&:hover:not([disabled])": {
    borderColor: "$gray-300",
    background: "linear-gradient(180deg, $gray-50, $gray-50)",
  },

  "&:focus:not([disabled])": {
    borderColor: "$blue-500",
    boxShadow: "rgba(24, 25, 29, 0.3) 0px 3px 7px -2px inset",
    background: "linear-gradient(180deg, $gray-50, $gray-50)",
  },

  "&[disabled]": {
    opacity: "0.5",
    cursor: "auto",
  },

  variants: {
    invalid: {
      true: {
        borderColor: "$maple-500",
      },
    },
  },
});
