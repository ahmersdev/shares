import { TrustBaliIcon, TrustIndonesianIcon } from "@/assets/icons";
import { ITrustData } from "./trust.interface";

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
