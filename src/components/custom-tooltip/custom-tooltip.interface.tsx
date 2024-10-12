import { TooltipProps } from "@mui/material";
import { ReactElement } from "react";

export interface ICustomTooltipProps extends Omit<TooltipProps, "title"> {
  title?: string;
  children: ReactElement;
  placement?: TooltipProps["placement"];
  isCapital?: boolean;
  maxWidth?: number;
}
