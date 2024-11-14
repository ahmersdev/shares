interface IOpenWithdrawDialog {
  withdraw: boolean;
  withdrawViaCard: boolean;
  withdrawViaCrypto: boolean;
}

export interface ICryptoWithdrawProps {
  openWithdrawDialog: IOpenWithdrawDialog;
  setOpenWithdrawDialog: React.Dispatch<
    React.SetStateAction<IOpenWithdrawDialog>
  >;
}
