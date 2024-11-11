import { ReactNode } from "react";

export interface IAccordion {
  accordionId: number;
  summary: string;
  details: string;
  additionalContent?: ReactNode;
}

export interface ICustomAccordionProps {
  accordions: IAccordion[];
}
