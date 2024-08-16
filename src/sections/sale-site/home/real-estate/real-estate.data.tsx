import {
  RealEstateAppreciationIcon,
  RealEstateIncomeIcon,
  RealEstateInflationIcon,
  RealEstateWealthIcon,
} from "@/assets/icons";
import { IRealEstateData } from "./real-estate.interface";

export const realEstateDataArray: IRealEstateData[] = [
  {
    id: 1,
    icon: RealEstateAppreciationIcon,
    title: "Value appreciation",
    desc: "In additional to monthly passive income, property appreciates in value like equities, creating long-term wealth for property owners",
    href: "/",
  },
  {
    id: 2,
    icon: RealEstateInflationIcon,
    title: "Hedge for inflation",
    desc: "Property is the oldest asset class in history and has always been a great hedge during inflation times, just like gold",
    href: "/",
  },
  {
    id: 3,
    icon: RealEstateIncomeIcon,
    title: "Passive income",
    desc: "Property generates a consistent passive income like bonds, in the form of reliable monthly rental payments",
    href: "/",
  },
  {
    id: 4,
    icon: RealEstateWealthIcon,
    title: "Storehold of wealth",
    desc: "Everybody aspires to own a home, making property a tangible store of wealth with a very high recovery value",
    href: "/",
  },
];
