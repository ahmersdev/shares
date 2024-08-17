import { ChangeEvent } from "react";

export interface IHeroBannerProps {
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
