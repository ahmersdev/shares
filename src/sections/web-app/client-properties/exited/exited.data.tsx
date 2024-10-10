import { PropertiesVillaThreeImg } from "@/assets/images";
import { IProperty } from "@/interfaces/properties";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export const exitedPropertiesData: IProperty[] = [
  {
    id: 3,
    imageSrc: PropertiesVillaThreeImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "56 Apartments",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Bingin, Uluwatu, Bali",
      },
    ],
    title: "The Coco Lifestyle Resort",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
    soldOutBadge: true,
  },
];
