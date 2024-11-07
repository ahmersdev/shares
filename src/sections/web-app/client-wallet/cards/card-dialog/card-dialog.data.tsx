import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const fieldBoxStyles = (theme: Theme) => {
  return {
    border: 1,
    borderColor: theme.palette.text.bodyLight,
    borderRadius: 3,
    height: pxToRem(42),
    mt: 0.5,
    padding: "10px",
    "&:focus-within": {
      borderColor: theme.palette.primary.main,
    },
  };
};

export const fieldStyles = (theme: Theme) => {
  return {
    style: {
      base: {
        fontSize: pxToRem(18),
        color: theme.palette.text.body,
        "::placeholder": {
          color: theme.palette.text.disabled,
        },
      },
      invalid: {
        color: theme.palette.error.main,
      },
      complete: {
        color: theme.palette.text.body,
      },
    },
  };
};
