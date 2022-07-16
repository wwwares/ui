import { styled, keyframes } from "../stitches.conf";

const SpinnerKeyframes = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const Spinner = styled("div", {
  width: "28px",
  height: "28px",
  display: "inline-block",
  borderRadius: "50%",
  border: "2px solid $gray-200",
  borderTopColor: "$gray-1000",
  animation: `${SpinnerKeyframes} .875s cubic-bezier(.57,.59,.59,.46) infinite`,

  variants: {
    inverted: {
      true: {
        border: "2px solid #ffffff40",
        borderTopColor: "$white",
      },
    },
  },
});
