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

interface IOpenCheckoutDialog {
  checkout: boolean;
  checkoutViaCard: boolean;
  checkoutViaCrypto: boolean;
  checkoutViaDeposit: boolean;
}

export interface ICheckoutProps {
  openCheckoutDialog: IOpenCheckoutDialog;
  setOpenCheckoutDialog: React.Dispatch<
    React.SetStateAction<IOpenCheckoutDialog>
  >;
  onCloseCheckoutHandler: () => void;
}
