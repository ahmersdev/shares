import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";

export interface IInteriorDetails {
  interiorId: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  info: string;
}

export interface IDetailsPublic {
  detailsId: number;
  title: string;
  detail: string;
}

export interface IProperty {
  id: number;
  imageSrc: StaticImageData;
  interiorDetails: IInteriorDetails[];
  title: string;
  description: string;
  price: string;
  investors: number;
  detailsPublic: IDetailsPublic[];
  progress: number;
  sharesLeft: number;
  buttonRender?: boolean;
  soldOutBadge?: boolean;
  buttonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IPropertyBe {
  _id: string;
  title: string;
  description?: string;
  thumbnail: string;
  price: number;
  numberOfBed?: number;
  type?: string;
  location?: string;
  totalInvestors?: number;
  minAnnualROI: number;
  maxAnnualROI: number;
  completionDate: string;
  investmentForm: number;
  progress?: number;
  sharesLeft?: number;
}
