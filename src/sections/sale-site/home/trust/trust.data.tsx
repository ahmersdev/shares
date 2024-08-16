import { TrustBaliIcon, TrustIndonesianIcon } from "@/assets/icons";
import { ITrustData, ITrustDataImagesArray } from "./trust.interface";
import {
  TrustVillaFive,
  TrustVillaFour,
  TrustVillaOne,
  TrustVillaThree,
  TrustVillaTwo,
} from "@/assets/images";

export const trustDataArray: ITrustData[] = [
  {
    id: 1,
    icon: TrustBaliIcon,
    title: "Regulated in Bali by the DFSA",
    desc: "Invest with the assurance that we are dual regulated by the most prestigious regulators in the Middle East",
  },
  {
    id: 2,
    icon: TrustIndonesianIcon,
    title: "Regulated in Indonesia by the CMA",
    desc: "Invest with the assurance that we are dual regulated by the most prestigious regulators in the Middle East",
  },
];

export const trustDataImagesArray: ITrustDataImagesArray[] = [
  {
    id: 1,
    image: TrustVillaOne,
    title: "Uluwatu Temple",
    badge: { amount: "$12 USD +", desc: "Fully Funded Properties" },
  },
  {
    id: 2,
    image: TrustVillaTwo,
    title: "Sacred Monkey Forest Sanctuary",
  },
  {
    id: 3,
    image: TrustVillaThree,
    title: "Ceking Rice Terrace",
  },
  {
    id: 4,
    image: TrustVillaFour,
    title: "Pura Tirta Empul",
  },
  {
    id: 5,
    image: TrustVillaFive,
    title: "Tegenungan Waterfall",
  },
];
