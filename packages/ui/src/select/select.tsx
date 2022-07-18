import { styled } from "../stitches.conf";

export const Select = styled("select", {
  padding: "$3 $1",
  width: "100%",
  borderRadius: "$2",
  border: "1px solid $gray-300",
  background: "linear-gradient(180deg, $white, $gray-50)",
  cursor: "pointer",
  transition: "60ms ease-in all",
  fontWeight: "bold",
  fontSize: "$2",
  boxShadow: "#D7DCE1 0px 0px 1px 0px inset",

  "&:hover:not([disabled])": {
    borderColor: "$gray-300",
    boxShadow: "#F2F5F8 1.25px 1.25px 1px -1px inset",
  },

  "&:focus:not([disabled])": {
    borderColor: "$blue-500",
    background: "linear-gradient(180deg,$gray-50, $gray-50)",
    boxShadow: "#A3ABB3 0px 0px 1px 0px inset, #A3ABB3 0px 0px 1px 0px inset",
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
