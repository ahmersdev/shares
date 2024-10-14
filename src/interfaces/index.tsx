import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IAssetsProps {
  fill?: string;
  stroke?: string;
}

export interface IAssetsPropsDimension extends IAssetsProps {
  width?: string;
  height?: string;
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

export interface INotistackVariants {
  SUCCESS: "success";
  ERROR: "error";
  WARNING: "warning";
  INFO: "info";
}

export interface IApiErrorResponse {
  status: number;
  data: {
    errors: string;
  };
}

interface IComponentProps {
  name: string;
  label: string;
  placeholder: string;
  borderRadius?: number;
  options?: string[];
  type?: string;
  InputProps?: {
    endAdornment: JSX.Element;
  };
}

export interface IFormArrayItem {
  id: number;
  componentProps: IComponentProps;
  component: React.ElementType;
}
