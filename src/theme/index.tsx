"use client";

import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import { IChildrenProps } from "@/interfaces";

export default function ThemeProvider({ children }: IChildrenProps) {
  const themeOptions: ThemeOptions = {
    palette: palette.light,
    typography,
    breakpoints,
    spacing: 10,
    shape: { borderRadius: 4 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "&::-webkit-scrollbar": {
            width: 0,
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      />
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
