// src/button/button.tsx
import * as React from "react";

// src/stitches.conf.ts
import { createStitches } from "@stitches/react";
var { styled, css, keyframes, config, createTheme, theme, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "maple-50": "#FFF5F5",
      "maple-100": "#FDD6D7",
      "maple-200": "#FBB9BB",
      "maple-300": "#F58286",
      "maple-400": "#ED5153",
      "maple-500": "#DE2E37",
      "maple-600": "#CC1820",
      "maple-700": "#B30A11",
      "maple-800": "#950307",
      "maple-900": "#710003",
      "maple-1000": "#4D0001",
      "blue-50": "#F5F7FF",
      "blue-100": "#D6DFFD",
      "blue-200": "#B9C8FB",
      "blue-300": "#829FF5",
      "blue-400": "#537DEC",
      "blue-500": "#2E61DE",
      "blue-600": "#1844CC",
      "blue-700": "#0A2BB3",
      "blue-800": "#031795",
      "blue-900": "#000A71",
      "blue-1000": "#00034D",
      "green-50": "#F5FFF6",
      "green-100": "#D8FCDC",
      "green-200": "#BCFAC5",
      "green-300": "#88F398",
      "green-400": "#5BE873",
      "green-500": "#38DA57",
      "green-600": "#1FC641",
      "green-700": "#0EAD30",
      "green-800": "#059118",
      "green-900": "#006F07",
      "green-1000": "#014D00",
      "orange-50": "#FFFBF5",
      "orange-100": "#FFEDD4",
      "orange-200": "#FFDFB4",
      "orange-300": "#FCC37A",
      "orange-400": "#F5A647",
      "orange-500": "#EA891E",
      "orange-600": "#D5730C",
      "orange-700": "#BB5C02",
      "orange-800": "#9A4800",
      "orange-900": "#743300",
      "orange-1000": "#4D2000",
      "gray-50": "#F2F5F8",
      "gray-100": "#D7DCE1",
      "gray-200": "#BCC4CA",
      "gray-300": "#A3ABB3",
      "gray-400": "#8B939B",
      "gray-500": "#737B83",
      "gray-600": "#5C626A",
      "gray-700": "#464A51",
      "gray-800": "#2F3137",
      "gray-850": "#232429",
      "gray-900": "#18191D",
      "gray-950": "#111214",
      "gray-1000": "#020203"
    },
    fonts: {
      sans: "Inter, sans-serif"
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px"
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px"
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px"
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px"
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  }
});

// src/spinner/spinner.tsx
var SpinnerKeyframes = keyframes({
  to: {
    transform: "rotate(360deg)"
  }
});
var Spinner = styled("div", {
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
        borderTopColor: "$white"
      }
    }
  }
});

// src/button/button.tsx
var StyledButton = styled("button", {
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
    outline: "$black thin dotted"
  },
  "&:active:not([disabled])": {
    boxShadow: "rgba(24, 25, 29, 0.45) 0px 3px 3px -2px inset,rgba(24, 25, 29, 0.45) 0px -1px 3px -2px inset"
  },
  "&[disabled]": {
    opacity: "0.5",
    cursor: "auto"
  },
  variants: {
    type: {
      default: {
        background: "linear-gradient(180deg, $white 5%, $gray-50 50%, white 95%)",
        borderColor: "$gray-200",
        color: "black",
        "&:hover:not([disabled])": {
          borderColor: "$gray-300",
          background: "$gray-50"
        },
        "&:active:not([disabled])": {
          boxShadow: "rgba(24, 25, 29, 0.3) 0px 1px 3px -2px inset,rgba(24, 25, 29, 0.3) 0px -1px 3px -2px inset"
        }
      },
      primary: {
        borderColor: "$blue-600",
        background: "linear-gradient(180deg,$blue-400, $blue-500)",
        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$blue-500, $blue-500)"
        }
      },
      action: {
        borderColor: "$green-900",
        background: "linear-gradient(180deg,$green-700, $green-800)",
        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$green-800, $green-800)"
        }
      },
      danger: {
        borderColor: "$maple-700",
        background: "linear-gradient(180deg,$maple-400, $maple-500)",
        "&:hover:not([disabled])": {
          background: "linear-gradient(180deg,$maple-500, $maple-500)"
        }
      }
    }
  },
  defaultVariants: {
    type: "default"
  }
});
var Button = ({
  children,
  disabled,
  type,
  loading = false,
  ...rest
}) => {
  return /* @__PURE__ */ React.createElement(StyledButton, {
    ...rest,
    type,
    disabled: disabled || loading
  }, loading && /* @__PURE__ */ React.createElement(Spinner, {
    css: { height: "13px", width: "13px" },
    inverted: type !== "default"
  }), children);
};
export {
  Button,
  Spinner,
  StyledButton
};
