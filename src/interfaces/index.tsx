import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IAssetsProps {
  fill?: string;
  stroke?: string;
}

export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface FontSizeBreakpoints {
  xs: number;
  md: number;
  lg: number;
}
