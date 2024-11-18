import { TrustDualIcon } from "@/assets/icons";
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
    icon: TrustDualIcon,
    title: "Regulatory Information",
    desc: "Shares By Coco company operates under the Department of Financial Protection and Innovation (DFPI) in California",
    bgcolor: "primary.10",
    fill: 50,
  },
  {
    id: 2,
    icon: TrustDualIcon,
    title: "Regulatory Information",
    desc: "Also, facilitates real estate investments through blockchain technology and transactions in USD Coin (USDC), a cryptocurrency pegged to the U.S. dollar.",
    bgcolor: "primary.25",
    fill: "main",
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
