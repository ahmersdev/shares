import { IOpenCheckoutDialog } from "../../client-cart.interface";

export interface ICardCheckoutForm {
  paymentMethod: { id: string } | null;
}

export interface ICardProps {
  openCheckoutDialog: IOpenCheckoutDialog;
  onCloseCheckoutHandler: () => void;
  refetch: () => void;
}
