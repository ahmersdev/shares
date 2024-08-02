import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    common: {
      black: string;
      white: string;
      bgDark: string;
      bgLight: string;
    };
    primary: {
      main: string;
      50: string;
      25: string;
      10: string;
      5: string;
    };
    text: {
      heading: string;
      headingLight: string;
      body: string;
      bodyLight: string;
      stroke: string;
      disabled: string;
    };
    success: {
      main: string;
      secondary: string;
    };
    error: {
      main: string;
      secondary: string;
    };
    warning: {
      main: string;
      secondary: string;
    };
    info: {
      main: string;
      secondary: string;
    };
    opacity: {
      success: string;
    };
    grey: {
      black: string;
      light: string;
    };
    gradients: {
      primary: string;
    };
    divider: string;
    action: {
      hoverOpacity: number;
      disabledOpacity: number;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
