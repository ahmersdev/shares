import { PersonOneImg, PersonTwoImg } from "@/assets/images";
import { ISuccessStory } from "./success-stories.interface";

export const successStories: ISuccessStory[] = [
  {
    id: 1,
    name: "Rasmus Holst",
    role: "Founder & CEO",
    imageSrc: PersonTwoImg,
    socialLinks: {
      linkedIn: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
    description: `COCO is for lifestyle entrepreneurs, we are for people who make conscious decisions about their lives, their investments and their future.
    
    
    Our community is experience driven. We believe that a place is only as good as the people in it and creating good investments comes through creating more than just properties.It comes through the experience, the people you meet, and the memories you take with you.`,
  },
  {
    id: 2,
    name: "Glenn",
    role: "Property Advisor",
    imageSrc: PersonOneImg,
    socialLinks: {
      linkedIn: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
    description: `Meet Glenn, our seasoned property advisor with years of experience in the industry. Glenn’s expertise and personalized approach ensure that you receive the best advice and guidance for your property investments. Whether you’re looking to buy, sell, or develop, Glenn and the COCO Development Group team are here to support you every step of the way.`,
  },
];
