import { pxToRem, responsiveFontSizes } from "@/utils/get-font-value";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "inherit",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: "bold",
    fontSize: pxToRem(64),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 28, md: 38, lg: 64 }),
  },
  h2: {
    fontWeight: "bold",
    fontSize: pxToRem(56),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 20, md: 28, lg: 56 }),
  },
  h3: {
    fontWeight: "bold",
    fontSize: pxToRem(40),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 20, md: 22, lg: 40 }),
  },
  h4: {
    fontWeight: "bold",
    fontSize: pxToRem(32),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 16, md: 18, lg: 32 }),
  },
  h5: {
    fontWeight: "bold",
    fontSize: pxToRem(24),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 14, md: 16, lg: 24 }),
  },
  h6: {
    fontWeight: 600,
    fontSize: pxToRem(22),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 12, md: 14, lg: 22 }),
  },
  h7: {
    fontWeight: "normal",
    fontSize: pxToRem(20),
    letterSpacing: "0.04em",
  },
  body1: {
    fontWeight: "normal",
    fontSize: pxToRem(18),
    letterSpacing: "0.04em",
  },
  body2: {
    fontWeight: "normal",
    fontSize: pxToRem(16),
    letterSpacing: "0.04em",
  },
  body3: {
    fontWeight: "normal",
    fontSize: pxToRem(14),
    letterSpacing: "0.04em",
  },
  heading1: {
    fontWeight: 800,
    fontSize: pxToRem(48),
    letterSpacing: "0.04em",
    ...responsiveFontSizes({ xs: 20, md: 30, lg: 48 }),
  },
  logo: { fontWeight: 900, fontSize: pxToRem(24), color: "#252C32" },
  subtitle1: {
    fontWeight: "normal",
    fontSize: pxToRem(10),
    letterSpacing: "0.02em",
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: pxToRem(10),
    letterSpacing: "0.02em",
  },
  caption: {
    fontSize: pxToRem(12),
    letterSpacing: "0.02em",
  },
  button: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    textTransform: "capitalize",
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h7: React.CSSProperties;
    logo: React.CSSProperties;
    body3: React.CSSProperties;
    heading1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    logo?: React.CSSProperties;
    body3?: React.CSSProperties;
    heading1?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    logo: true;
    body3: true;
    heading1: true;
  }
}

export default typography;
