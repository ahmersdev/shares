import { pxToRem, responsiveFontSizes } from "@/utils/get-font-value";

const typography = {
  fontFamily: "inherit",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: "bold",
    fontSize: pxToRem(64),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 28, md: 38, lg: 64 }),
  },
  h2: {
    fontWeight: "bold",
    fontSize: pxToRem(56),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 20, md: 28, lg: 56 }),
  },
  h3: {
    fontWeight: "bold",
    fontSize: pxToRem(40),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 20, md: 22, lg: 40 }),
  },
  h4: {
    fontWeight: "bold",
    fontSize: pxToRem(28),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 16, md: 18, lg: 28 }),
  },
  h5: {
    fontWeight: "bold",
    fontSize: pxToRem(24),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 14, md: 16, lg: 24 }),
  },
  h6: {
    fontWeight: 600,
    fontSize: pxToRem(22),
    letterSpacing: "-0.04em",
    ...responsiveFontSizes({ xs: 12, md: 14, lg: 22 }),
  },
  body1: {
    fontWeight: "normal",
    fontSize: pxToRem(18),
    letterSpacing: "-0.04em",
  },
  body2: {
    fontWeight: "normal",
    fontSize: pxToRem(16),
    letterSpacing: "-0.04em",
  },
  body3: {
    fontWeight: "normal",
    fontSize: pxToRem(14),
    letterSpacing: "-0.04em",
  },
  subtitle1: {
    fontWeight: "normal",
    fontSize: pxToRem(10),
    letterSpacing: "-0.02em",
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: pxToRem(10),
    letterSpacing: "-0.02em",
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    formTopHeading: React.CSSProperties;
    customStyle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    formTopHeading?: React.CSSProperties;
    customStyle: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    formTopHeading: true;
    customStyle: true;
    body3: true;
  }
}

export default typography;
