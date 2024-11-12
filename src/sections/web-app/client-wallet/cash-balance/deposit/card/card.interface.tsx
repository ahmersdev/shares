interface IOpenDepositDialog {
  deposit: boolean;
  depositViaCard: boolean;
  depositViaCrypto: boolean;
}

export interface ICardProps {
  openDepositDialog: IOpenDepositDialog;
  setOpenDepositDialog: React.Dispatch<
    React.SetStateAction<IOpenDepositDialog>
  >;
}
