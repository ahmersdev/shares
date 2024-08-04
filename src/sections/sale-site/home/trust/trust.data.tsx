import { TrustBaliIcon, TrustIndonesianIcon } from "@/assets/icons";
import { ITrustData, ITrustDataImagesArray } from "./trust.interface";
import { TrustBaliVilla } from "@/assets/images";

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
    image: TrustBaliVilla,
    title: "Bali Villa",
    badge: { amount: "$12 USD +", desc: "Fully Funded Properties" },
  },
  {
    id: 2,
    image: TrustBaliVilla,
    title: "Bali Villa",
  },
  {
    id: 3,
    image: TrustBaliVilla,
    title: "Bali Villa",
  },
];
