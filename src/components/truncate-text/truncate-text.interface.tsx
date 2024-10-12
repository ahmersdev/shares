import { BoxProps } from "@mui/material";
import { ICustomTooltipProps } from "../custom-tooltip/custom-tooltip.interface";

export interface ITruncateTextProps {
  retainTextLeft?: string;
  retainTextRight?: string;
  text?: string; 
  customTooltipProps?: ICustomTooltipProps;
  boxProps?: BoxProps;
  size?: number;
  isCapital?: boolean;
}
