import { ReactNode } from "react";

export interface ITabData {
  title: string;
  icon?: React.ElementType<{ fill: string }>;
}

export interface IHorizontalTabsProps {
  tabsDataArray: ITabData[];
  children: ReactNode;
  setActiveTab?: (title: string) => void;
  variant?: "scrollable" | "standard" | "fullWidth";
  defaultValue?: number;
  margin?: string | number;
}
