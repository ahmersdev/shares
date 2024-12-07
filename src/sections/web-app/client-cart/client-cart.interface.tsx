interface IClientCartProperty {
  thumbnail: string;
  title: string;
  grossRent: number;
}

export interface ICartItem {
  _id: string;
  amount: number;
  monthlyAppreciationRate: number;
  progress: number;
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
