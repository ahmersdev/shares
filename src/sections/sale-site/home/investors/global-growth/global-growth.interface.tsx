import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";

export interface IGlobalGrowthSmallCards {
  id: number;
  amount: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  desc: string;
}

export interface IGlobalGrowthData {
  id: number;
  image: StaticImageData;
  alt?: string;
  desc: string;
}
