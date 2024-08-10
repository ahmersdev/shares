import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IAssetsProps {
  fill?: string;
  stroke?: string;
}

export interface INavItem {
  id: number;
  label: string;
  href: string;
}

export interface IFontSizeBreakpoints {
  xs: number;
  md: number;
  lg: number;
}
