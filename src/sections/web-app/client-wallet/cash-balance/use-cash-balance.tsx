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

  const onCloseDepositHandler = () => {
    setOpenDepositDialog({
      deposit: false,
      depositViaCard: false,
      depositViaCrypto: false,
    });
  };

  // const withdrawCash = async () => {
  //   try {
  //     if (!contract) await initializeContract();
  //     const tx = await contract!.payCashback();
  //     await tx?.wait();
  //     successSnackbar("Cashback paid successfully!");
  //   } catch (error) {
  //     errorSnackbar("Cashback payment failed");
  //   }
  // };

  return {
    theme,
    openDepositDialog,
    setOpenDepositDialog,
    onCloseDepositHandler,
    data,
    isLoading,
    isFetching,
    isError,
  };
}
