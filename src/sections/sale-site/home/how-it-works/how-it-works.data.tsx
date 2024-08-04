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
    title: "Browse",
    desc: "Review our portfolio of high-yielding rental properties",
  },
  {
    id: 2,
    icon: WorksInvestIcon,
    title: "Invest",
    desc: "Select the properties you want to invest in starting from $1",
  },
  {
    id: 3,
    icon: WorksEarnIcon,
    title: "Earn",
    desc: "Receive monthly rental income and withdraw anytime",
  },
  {
    id: 4,
    icon: WorksExitIcon,
    title: "Exit",
    desc: "Hold, repurchase or sell whenever you want",
  },
];
