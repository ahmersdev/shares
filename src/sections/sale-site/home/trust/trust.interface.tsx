import { StaticImageData } from "next/image";

export interface ITrustData {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
