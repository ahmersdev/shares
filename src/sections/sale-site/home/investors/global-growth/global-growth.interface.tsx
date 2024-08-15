import { StaticImageData } from "next/image";

export interface IGlobalGrowthData {
  id: number;
  image: StaticImageData;
  alt?: string;
  desc: string;
}
