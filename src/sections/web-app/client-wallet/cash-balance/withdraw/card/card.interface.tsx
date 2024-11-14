interface IOpenWithdrawDialog {
  withdraw: boolean;
  withdrawViaCard: boolean;
  withdrawViaCrypto: boolean;
}

export interface ICardWithdrawProps {
  openWithdrawDialog: IOpenWithdrawDialog;
  setOpenWithdrawDialog: React.Dispatch<
    React.SetStateAction<IOpenWithdrawDialog>
  >;
}
