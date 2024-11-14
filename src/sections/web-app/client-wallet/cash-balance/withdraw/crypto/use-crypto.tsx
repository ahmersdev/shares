import { Theme, useTheme } from "@mui/material";
import { ICryptoWithdrawProps } from "./crypto.interface";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { BrowserProvider, ethers, Contract } from "ethers";
import { CONTRACT_ADDRESS } from "@/constants";
import RealEstateSPVABI from "@/json/RealEstateSPVABI.json";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useCryptoWithdraw(props: ICryptoWithdrawProps) {
  const { setOpenWithdrawDialog } = props;
  const theme = useTheme<Theme>();

  const [loading, setLoading] = useState(false);

  const onCloseCryptoHandler = () => {
    setOpenWithdrawDialog({
      withdraw: false,
      withdrawViaCard: false,
      withdrawViaCrypto: false,
    });
  };

  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        amount: Yup.number()
          .positive("Must be above 0")
          .typeError("Must be a number")
          .required("Amount is Required"),
      })
    ),
    defaultValues: { amount: undefined },
  });

  const { handleSubmit, reset } = methods;

  if (typeof window === "undefined" || !(window as any)?.ethereum) {
    errorSnackbar("MetaMask not found. Please install it.");
    return {
      theme,
      onCloseCryptoHandler,
      loading,
      methods,
      handleSubmit,
      withdrawCashViaCrypto: () => {},
    };
  }

  const provider = new BrowserProvider((window as any)?.ethereum);
  let contract: Contract | null = null;

  const initializeContract = async () => {
    const signer = await provider?.getSigner();
    contract = new Contract(CONTRACT_ADDRESS, RealEstateSPVABI, signer);
  };

  const withdrawCashViaCrypto = async (data: { amount: number }) => {
    setLoading(true);
    try {
      if (!contract) await initializeContract();
      const tx = await contract!.payCashback({
        value: ethers?.parseEther(data?.amount?.toString()),
      });
      await tx?.wait();
      successSnackbar("Cashback Paid Successfully!");
      reset();
      onCloseCryptoHandler();
    } catch (error) {
      errorSnackbar();
    } finally {
      setLoading(false);
    }
  };

  return {
    theme,
    onCloseCryptoHandler,
    loading,
    methods,
    handleSubmit,
    withdrawCashViaCrypto,
  };
}
