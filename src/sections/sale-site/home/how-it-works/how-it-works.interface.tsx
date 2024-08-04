import { ComponentType, SVGProps } from "react";

export interface IHowItWorksData {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}
