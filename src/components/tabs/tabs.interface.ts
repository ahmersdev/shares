import { SxProps, Theme } from "@mui/material";
import { ElementType, ReactElement, ReactNode } from "react";

export interface ITabData {
  title: string;
  icon?: ElementType<{ fill: string }>;
}

export interface IHorizontalTabsProps {
  tabsDataArray: ITabData[];
  children: ReactNode;
  setActiveTab?: (title: string) => void;
  variant?: "scrollable" | "standard" | "fullWidth";
  defaultValue?: number;
  margin?: string | number;
  indicatorDisplay?: string;
  tabStyle?: SxProps<Theme>;
  typographyStyle?: SxProps<Theme>;
  mainTabStyleProps?: SxProps<Theme>;
}

export interface IBottomTabData {
  title: string;
  activeIcon: ReactElement;
  inactiveIcon: ReactElement;
}

export interface IBottomTabsProps {
  tabsDataArray: IBottomTabData[];
  children: ReactNode;
  setActiveTab?: (title: string) => void;
  variant?: "scrollable" | "standard" | "fullWidth";
  defaultValue?: number;
  margin?: string | number;
  indicatorDisplay?: string;
  tabStyle?: SxProps<Theme>;
  typographyStyle?: SxProps<Theme>;
  mainTabStyleProps?: SxProps<Theme>;
}
