interface IOpenDepositDialog {
  deposit: boolean;
  depositViaCard: boolean;
  depositViaCrypto: boolean;
}

export interface ICryptoProps {
  openDepositDialog: IOpenDepositDialog;
  setOpenDepositDialog: React.Dispatch<
    React.SetStateAction<IOpenDepositDialog>
  >;
}
