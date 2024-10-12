import { pxToRem } from "@/utils/get-font-value";
import { TableCell, Theme, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(
  ({ theme }: { theme: Theme }) => ({
    [`&.${tableCellClasses?.head}`]: {
      color: theme.palette.text.heading,
      fontSize: pxToRem(14),
      lineHeight: "18px",
      borderBottom: 1,
      borderColor: theme.palette.text.stroke,
      background: theme.palette.grey[50],
      whiteSpace: "nowrap",
    },

    [`&.${tableCellClasses?.body}`]: {
      fontSize: pxToRem(12),
      color: theme.palette.text.heading,
      borderBottom: "none",
      whiteSpace: "nowrap",
    },
  })
);
