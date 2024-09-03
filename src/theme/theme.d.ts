import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    opacity: {
      success: string;
      qrCode: string;
      shadow: string;
      bg: string;
    };
    gradients: {
      primary: string;
      secondary: string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface TypeText {
    heading: string;
    headingLight: string;
    body: string;
    bodyLight: string;
    stroke: string;
    disabled: string;
  }

  interface CommonColors {
    bgDark: string;
    bgLight: string;
  }

  interface PaletteColor {
    secondary: string;
    50: string;
    25: string;
    10: string;
    5: string;
  }
}
