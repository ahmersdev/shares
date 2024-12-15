import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export interface IApiErrorState {
  height?: string | SxProps | any;
  textColor?: string;
  message?: string;
  children?: ReactNode;
}
