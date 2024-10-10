import { PropertiesVillaTwoImg } from "@/assets/images";
import { IProperty } from "@/interfaces/properties";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export const fundedPropertiesData: IProperty[] = [
  {
    id: 2,
    imageSrc: PropertiesVillaTwoImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "14 Apartments",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Seseh, Badung, Bali",
      },
    ],
    title: "COCO RESIDENTIAL LIVING",
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
    buttonRender: true,
  },
];
