export interface IAccordion {
  accordionId: number;
  summary: string;
  details: string;
}

export interface ICustomAccordionProps {
  accordions: IAccordion[];
}
