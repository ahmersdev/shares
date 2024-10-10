import { PropertiesVillaOneImg } from "@/assets/images";
import { IProperty } from "@/interfaces/properties";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export const availablePropertiesData: IProperty[] = [
  {
    id: 1,
    imageSrc: PropertiesVillaOneImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "3 Bedrooms Apartment",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Seseh, Bali",
      },
    ],
    title: "THE COCO MANSION",
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
