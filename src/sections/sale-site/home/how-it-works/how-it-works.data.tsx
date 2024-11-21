import {
  WorksBrowseIcon,
  WorksEarnIcon,
  WorksExitIcon,
  WorksInvestIcon,
} from "@/assets/icons";
import { IHowItWorksData } from "./how-it-works.interface";

export const howItWorksDataArray: IHowItWorksData[] = [
  {
    id: 1,
    icon: WorksBrowseIcon,
    title: "Discover",
    desc: "Explore our portfolio of high-return properties designed for modern investors",
  },
  {
    id: 2,
    icon: WorksInvestIcon,
    title: "Join",
    desc: "Start with just $1,000 and unlock exclusive travel perks through the World of COCO",
  },
  {
    id: 3,
    icon: WorksEarnIcon,
    title: "Earn",
    desc: "Enjoy monthly rental income deposited directly into your account— as well as discounts and cashback on your next stay",
  },
  {
    id: 4,
    icon: WorksExitIcon,
    title: "Exit",
    desc: "Hold, reinvest, or sell your shares anytime with ease",
  },
];
