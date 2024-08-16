import { StaticImageData } from "next/image";

export interface ISuccessStory {
  id: number;
  name: string;
  role: string;
  imageSrc: StaticImageData;
  socialLinks: {
    linkedIn: string;
    facebook: string;
    instagram: string;
  };
  description: string;
}
