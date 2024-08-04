import {
  HomeActiveUsersIcon,
  HomeInvestedIcon,
  HomeInvestmentsIcon,
  HomeProjectsIcon,
} from "@/assets/icons";
import { ICountData } from "./counts.interface";

export const countsDataArray: ICountData[] = [
  { id: 1, icon: HomeActiveUsersIcon, title: "6000+", desc: "Active Users" },
  {
    id: 2,
    icon: HomeInvestmentsIcon,
    title: "$1000",
    desc: "Investments Starting From",
  },
  { id: 3, icon: HomeInvestedIcon, title: "$12M", desc: "Project Invested" },
  { id: 4, icon: HomeProjectsIcon, title: "8", desc: "Projects" },
];
