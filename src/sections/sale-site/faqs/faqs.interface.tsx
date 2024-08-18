import {
  ChangeEvent,
  ComponentType,
  Dispatch,
  SetStateAction,
  SVGProps,
} from "react";

export interface IHeroBannerProps {
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IContentProps {
  contentData: IContentData[];
  setSearchTerm?: Dispatch<SetStateAction<string>> | any;
}

export interface IAccordionsDetailsProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  singleFaq: IContentData[];
}

export interface IContentData {
  parentId: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  accordions?: IAccordionData[];
}

export interface IAccordionData {
  accordionId: number;
  summary: string;
  details: string;
}
