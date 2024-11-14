interface IOpenDepositDialog {
  deposit: boolean;
  depositViaCard: boolean;
  depositViaCrypto: boolean;
}

export interface ICryptoDepositProps {
  openDepositDialog: IOpenDepositDialog;
  setOpenDepositDialog: React.Dispatch<
    React.SetStateAction<IOpenDepositDialog>
  >;
}
