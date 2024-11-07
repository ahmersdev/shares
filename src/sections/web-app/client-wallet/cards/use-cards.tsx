import { useGetCardListQuery } from "@/services/web-app/wallet";
import { useState } from "react";
import { CARD_BRANDS } from "./cards.data";
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

export default function useCards() {
  const [openDialog, setOpenDialog] = useState(false);

  const onCloseDialogHandler = () => {
    setOpenDialog(false);
  };
  const { data, isLoading, isFetching, isError } = useGetCardListQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const cardBrandIcon = (cardBrand: any) => {
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

  return {
    openDialog,
    setOpenDialog,
    onCloseDialogHandler,
    data,
    isLoading,
    isFetching,
    isError,
    cardBrandIcon,
  };
}
