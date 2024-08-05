import {
  InvestorsBloombergImg,
  InvestorsKnightImg,
  InvestorsMordorImg,
  InvestorsPwcImg,
  InvestorsSavillsImg,
  InvestorsUaeImg,
} from "@/assets/images";
import { IMarketAnalysisData } from "./market-analysis.interface";

export const marketAnalysisData: IMarketAnalysisData[] = [
  {
    id: 1,
    title: "Secure a long-term residency",
    desc: "The UAE residential Real Estate Market is projected to register a CAGR of greater than 8% from 2024-2029.",
    image: InvestorsMordorImg,
  },
  {
    id: 2,
    title: "Strong Market Demand",
    desc: "Prices could rise 8-12% this year after surging 20% in 2023. The rise in rentals has also pushed gross yields to a 7 year high.",
    image: InvestorsBloombergImg,
  },
  {
    id: 3,
    title: "Red Hot Market",
    desc: "Values rose 5.6% in Q1 2023. This 9th consecutive quarter of growth was fuelled by population growth and supply shortages",
    image: InvestorsKnightImg,
  },
  {
    id: 4,
    title: "Bold National Vision",
    desc: "‘We the UAE 2031’ vision includes doubling the national GDP to over AED 3 trillion, while significantly  increasing the population.",
    image: InvestorsUaeImg,
  },
  {
    id: 5,
    title: "5-6% Rental Yields",
    desc: "Since December 2020, average prime rents in Dubai have witnessed a significant increase of 62%.",
    image: InvestorsSavillsImg,
  },
  {
    id: 6,
    title: "Low Tax Environment",
    desc: "There are no property taxes or stamp duties to worry about which means maximum profit for real estate investors.",
    image: InvestorsPwcImg,
  },
];
