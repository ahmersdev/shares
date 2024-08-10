import { StaticImageData } from "next/image";
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

export interface IProperty {
  id: number;
  imageSrc: StaticImageData;
  bedInfo: number;
  status: string;
  number: string;
  title: string;
  description: string;
  price: string;
  investors: number;
  annualROI: string;
  completionDate: string;
  investmentFrom: string;
  progress: number;
  sharesLeft: number;
}
