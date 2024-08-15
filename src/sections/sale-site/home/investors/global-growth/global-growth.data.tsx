import { IGlobalGrowthData } from "./global-growth.interface";
import {
  InvestorsBBCImg,
  InvestorsDestinImg,
  InvestorsForbesImg,
  InvestorsTravelImg,
  InvestorsTripAdvisorImg,
  InvestorsUSNewsImg,
} from "@/assets/images";

export const globalGrowthData: IGlobalGrowthData[] = [
  {
    id: 1,
    image: InvestorsTripAdvisorImg,
    alt: "Trip Advisor",
    desc: "1st place in the world according to TripAdvisor rating: “The best tourist destination in the world”",
  },
  {
    id: 2,
    image: InvestorsForbesImg,
    alt: "Forbes",
    desc: "4th place in the world according to Forbes: “An investment-attractive place”",
  },
  {
    id: 3,
    image: InvestorsTravelImg,
    alt: "Travel + Leisure",
    desc: "Travel and Leisure: Bali is number 1 among Asian resorts",
  },
  {
    id: 4,
    image: InvestorsBBCImg,
    alt: "BBC Travel",
    desc: "According to BBC Travel Bali is the best island in the world",
  },
  {
    id: 5,
    image: InvestorsDestinImg,
    alt: "DestinAsian",
    desc: "DestinAsian: The best island in the world",
  },
  {
    id: 6,
    image: InvestorsUSNewsImg,
    alt: "US News",
    desc: "U.S.News: 4th place in the world in the investment attractiveness rating 2020",
  },
];
