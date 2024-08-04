import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IBuildAnIncomeData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  additionalContent?: ReactNode;
}
