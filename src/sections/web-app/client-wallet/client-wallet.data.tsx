import {
  CardAmericanIcon,
  CardDinersIcon,
  CardDiscoverIcon,
  CardJcbIcon,
  CardMasterIcon,
  CardsIcon,
  CardUnionPayIcon,
  CardVisaIcon,
} from "@/assets/icons";

const CARD_BRANDS = {
  VISA: "visa",
  MASTER_CARD: "mastercard",
  AMERICAN_EXPRESS: "amex",
  DISCOVER: "discover",
  DINERS_CLUB: "diners",
  JCB: "jcb",
  UNION_PAY: "unionpay",
};

export const cardBrandIcon = (cardBrand: string) => {
  let brandIcon;

  switch (cardBrand) {
    case CARD_BRANDS?.VISA:
      brandIcon = <CardVisaIcon />;
      break;

    case CARD_BRANDS?.MASTER_CARD:
      brandIcon = <CardMasterIcon />;
      break;

    case CARD_BRANDS?.AMERICAN_EXPRESS:
      brandIcon = <CardAmericanIcon />;
      break;

    case CARD_BRANDS?.DISCOVER:
      brandIcon = <CardDiscoverIcon />;
      break;

    case CARD_BRANDS?.DINERS_CLUB:
      brandIcon = <CardDinersIcon />;
      break;

    case CARD_BRANDS?.JCB:
      brandIcon = <CardJcbIcon />;
      break;

    case CARD_BRANDS?.UNION_PAY:
      brandIcon = <CardUnionPayIcon />;
      break;

    default:
      brandIcon = <CardsIcon />;
      break;
  }
  return brandIcon;
};
