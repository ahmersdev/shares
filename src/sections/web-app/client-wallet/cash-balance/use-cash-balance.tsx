import { useState } from "react";
import { useTheme, Theme } from "@mui/material";

export default function useCashBalance() {
  const theme = useTheme<Theme>();

  const [openDepositDialog, setOpenDepositDialog] = useState({
    deposit: false,
    depositViaCard: false,
    depositViaCrypto: false,
  });
  const [openWithdrawDialog, setOpenWithdrawDialog] = useState({
    withdraw: false,
    withdrawViaCard: false,
    withdrawViaCrypto: false,
  });

  const onCloseDepositHandler = () => {
    setOpenDepositDialog({
      deposit: false,
      depositViaCard: false,
      depositViaCrypto: false,
    });
  };
  const onCloseWithdrawHandler = () => {
    setOpenWithdrawDialog({
      withdraw: false,
      withdrawViaCard: false,
      withdrawViaCrypto: false,
    });
  };

  return {
    theme,
    openDepositDialog,
    setOpenDepositDialog,
    onCloseDepositHandler,
    openWithdrawDialog,
    setOpenWithdrawDialog,
    onCloseWithdrawHandler,
  };
}
