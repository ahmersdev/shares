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
  { id: 1, icon: AboutInvestorsIterativeImg, alt: "Iterative" },
  { id: 2, icon: AboutInvestorsXAImg, alt: "XA" },
];

export const investorsData: IInvestors[] = [
  { id: 1, icon: AboutInvestorsColliersImg, alt: "Colliers" },
  { id: 2, icon: AboutInvestorsSavillsImg, alt: "Savills" },
  { id: 3, icon: AboutInvestorsCoImg, alt: "99.co" },
  { id: 4, icon: AboutInvestorsBniImg, alt: "BNI" },
  { id: 5, icon: AboutInvestorsCoImg, alt: "99.co" },
  { id: 6, icon: AboutInvestorsColliersImg, alt: "Colliers" },
  { id: 7, icon: AboutInvestorsBniImg, alt: "BNI" },
  { id: 8, icon: AboutInvestorsSavillsImg, alt: "Savills" },
];
