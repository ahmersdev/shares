import { ChangeEvent, ComponentType, SVGProps } from "react";

export interface IHeroBannerProps {
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IContentProps {
  contentData: IContentData[];
}

export interface IContentData {
  parentId: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}
