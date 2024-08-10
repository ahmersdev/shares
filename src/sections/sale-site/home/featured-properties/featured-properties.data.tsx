import { PropertiesVillaOneImg } from "@/assets/images";
import { IProperty } from "@/interfaces/properties";
import {
  PropertiesBedIcon,
  PropertiesNumberIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export const propertiesData: IProperty[] = [
  {
    id: 1,
    imageSrc: PropertiesVillaOneImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "1 Bed",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "Rented",
      },
      {
        interiorId: 13,
        icon: PropertiesNumberIcon,
        info: "#B206",
      },
    ],
    title: "Amazon Jungle Resort , Bali",
    description: "Cash-back through development period 8%",
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
    progress: 97,
    sharesLeft: 6663,
  },
];
