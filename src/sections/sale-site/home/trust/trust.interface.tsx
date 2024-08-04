import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";

export interface ITrustData {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

interface Badge {
  amount?: string;
  desc?: string;
}

export interface ITrustDataImagesArray {
  id: number;
  image: StaticImageData;
  title: string;
  badge?: Badge;
}
