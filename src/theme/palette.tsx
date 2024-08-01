const PRIMARY = {
  main: "#47CE8E",
  50: "#74ECB3",
  25: "#9CF9CD",
  10: "#C1FFE2",
  5: "#EEFFF7",
};

const GREY: any = {
  black: "#0E0E0E",
  light: "#FCFCFC",
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

const GRADIENTS = {};

const OPACITY = {
  success: "#47CE8E4D",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
    bgDark: "#232121",
    bgLight: "#F8FAF8",
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

  divider: TEXT.stroke,

  action: {
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
  },
};

export default palette;
