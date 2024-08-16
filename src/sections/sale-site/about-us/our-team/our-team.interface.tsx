import { StaticImageData } from "next/image";

export interface IOurTeam {
  id: number;
  img: StaticImageData;
  name: string;
  role: string;
}
