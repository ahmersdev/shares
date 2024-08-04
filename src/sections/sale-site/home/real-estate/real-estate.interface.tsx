import { ComponentType, SVGProps } from "react";

export interface IRealEstateData {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  href?: string;
}
