import { QueryActionCreatorResult } from "@reduxjs/toolkit/query";

interface IClientCartProperty {
  thumbnail: string;
  title: string;
  grossRent: number;
  maintaince: number;
  progress: number;
}

export interface ICartItem {
  _id: string;
  amount: number;
  propertyId: IClientCartProperty;
}

export interface IOpenCheckoutDialog {
  checkout: boolean;
  checkoutViaCard: boolean;
  checkoutViaCrypto: boolean;
}

export interface ICheckoutProps {
  openCheckoutDialog: IOpenCheckoutDialog;
  setOpenCheckoutDialog: React.Dispatch<
    React.SetStateAction<IOpenCheckoutDialog>
  >;
  onCloseCheckoutHandler: () => void;
  refetch: () => void;
  totalAmount: number;
}
