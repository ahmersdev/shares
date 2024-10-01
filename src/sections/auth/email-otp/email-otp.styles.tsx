import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const getEmailOtpStyles = (theme: Theme) => ({
  otpInputStyle: {
    width: 85,
    height: 70,
    fontSize: pxToRem(20),
    border: `1.5px solid ${theme.palette.text.bodyLight}`,
    background: "transparent",
    borderRadius: "8px",
    outline: "none",
    color: theme.palette.text.body,
  },

  otpContainerStyle: {
    justifyContent: "center",
    gap: pxToRem(20),
  },
});
