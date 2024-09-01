import { PaletteMode, PaletteOptions } from "@mui/material";

const PRIMARY = {
  main: "#4E4E4E",
  50: "#6C6C6C",
  25: "#A6A6A6",
  10: "#C4C4C4",
  5: "#DCDCDC",
};

const GREY = {
  900: "#0E0E0E", //black
  800: "#151515",
  700: "#1A1A1A",
  600: "#6A6A6A",
  500: "#0E0B29",
  400: "#D9D9D9",
  50: "#FCFCFC", //light
};

const TEXT = {
  heading: "#252C32",
  headingLight: "#ECECEC",
  body: "#6B7280",
  bodyLight: "#CBD0D9",
  stroke: "#E9E9E9",
  disabled: "#B0BABF",
};

const SUCCESS = {
  main: "#22C55E",
  secondary: "#EBFFF1",
};

const ERROR = {
  main: "#EF4444",
  secondary: "#FFEFEB",
};

const WARNING = {
  main: "#FEB241",
  secondary: "#FFE1B5",
};

const INFO = {
  main: "#4094F7",
  secondary: "#E2F2FF",
};

const GRADIENTS = {
  primary:
    "linear-gradient(180deg, rgba(71, 206, 142, 0.8) 0%, rgba(71, 206, 142, 0.8) 52.5%, rgba(71, 206, 142, 0.8) 100%)",
  secondary: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
};

const OPACITY = {
  success: "#47CE8E4D",
  qrCode: "#4E4E4E1A",
  shadow: "#18AF4233",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
    bgDark: "#232121",
    bgLight: "#F8FAF8",
    button: "#F5F0EB",
  },
  primary: { ...PRIMARY },
  text: { ...TEXT },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  info: { ...INFO },
  opacity: { ...OPACITY },
  grey: GREY,
  gradients: GRADIENTS,
  divider: TEXT.bodyLight,
  action: {
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette: { light: PaletteOptions } = {
  light: {
    ...COMMON,
    mode: "light" as PaletteMode,
  },
};

export default palette;
