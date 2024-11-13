import {
  AboutInvestorsBniImg,
  AboutInvestorsCoImg,
  AboutInvestorsColliersImg,
  AboutInvestorsIterativeImg,
  AboutInvestorsSavillsImg,
  AboutInvestorsXAImg,
} from "@/assets/images";
import { IInvestors } from "./investors.interface";

export const topInvestorsData: IInvestors[] = [
  {
    id: 1,
    icon: AboutInvestorsIterativeImg,
    alt: "Iterative",
    bgcolor: "primary.10",
  },
  { id: 2, icon: AboutInvestorsXAImg, alt: "XA", bgcolor: "primary.25" },
];

export const investorsData: IInvestors[] = [
  {
    id: 1,
    icon: AboutInvestorsColliersImg,
    alt: "Colliers",
    bgcolor: "primary.25",
  },
  {
    id: 2,
    icon: AboutInvestorsSavillsImg,
    alt: "Savills",
    bgcolor: "primary.10",
  },
  { id: 3, icon: AboutInvestorsCoImg, alt: "99.co", bgcolor: "primary.25" },
  { id: 4, icon: AboutInvestorsBniImg, alt: "BNI", bgcolor: "primary.10" },
  { id: 5, icon: AboutInvestorsCoImg, alt: "99.co", bgcolor: "primary.10" },
  {
    id: 6,
    icon: AboutInvestorsColliersImg,
    alt: "Colliers",
    bgcolor: "primary.25",
  },
  { id: 7, icon: AboutInvestorsBniImg, alt: "BNI", bgcolor: "primary.10" },
  {
    id: 8,
    icon: AboutInvestorsSavillsImg,
    alt: "Savills",
    bgcolor: "primary.25",
  },
];
