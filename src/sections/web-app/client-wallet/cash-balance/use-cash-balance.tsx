import { useState } from "react";
import { useTheme, Theme } from "@mui/material";
import { useGetTotalCashQuery } from "@/services/web-app/wallet";

export default function useCashBalance() {
  const theme = useTheme<Theme>();

  const { data, isLoading, isFetching, isError } = useGetTotalCashQuery(null, {
    refetchOnMountOrArgChange: true,
  });

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
    data,
    isLoading,
    isFetching,
    isError,
    openWithdrawDialog,
    setOpenWithdrawDialog,
    onCloseWithdrawHandler,
  };
}
