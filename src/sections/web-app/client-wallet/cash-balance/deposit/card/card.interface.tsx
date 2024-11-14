interface IOpenDepositDialog {
  deposit: boolean;
  depositViaCard: boolean;
  depositViaCrypto: boolean;
}

export interface ICardDepositProps {
  openDepositDialog: IOpenDepositDialog;
  setOpenDepositDialog: React.Dispatch<
    React.SetStateAction<IOpenDepositDialog>
  >;
}

export interface ICardDepositForm {
  amount?: number;
  paymentMethod: { id: string } | null;
}
