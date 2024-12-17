import { ReactNode } from "react";

export interface IFaqsData {
  parentId: number;
  title: string;
  desc: string;
  accordions: IAccordionData[];
}

export interface IAccordionData {
  accordionId: number;
  summary: string;
  details: string;
  additionalContent?: ReactNode;
}
