import { Contract, ethers, BrowserProvider } from "ethers";
import RealEstateSPVABI from "@/json/RealEstateSPVABI.json";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useState } from "react";
import { useTheme, Theme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const contractAddress = "0x20775d300BdE943Ac260995E977fb915fB01f399";

export default function useCashBalance() {
  const theme = useTheme<Theme>();

  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCloseDialogHandler = () => {
    setOpenDialog(false);
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
    return {
      theme,
      openDialog,
      setOpenDialog,
      onCloseDialogHandler,
      loading,
      methods,
      handleSubmit,
      depositCashViaCard: () => {},
      depositCashViaCrypto: () => {},
      withdrawCash: () => {},
    };
  }

  const provider = new BrowserProvider((window as any)?.ethereum);

  let contract: Contract | null = null;

  const initializeContract = async () => {
    const signer = await provider?.getSigner();
    contract = new Contract(contractAddress, RealEstateSPVABI, signer);
  };

  const depositCashViaCard = async () => {};

  const depositCashViaCrypto = async (data: { amount: number }) => {
    setLoading(true);
    try {
      if (typeof window === "undefined" || !(window as any)?.ethereum) {
        errorSnackbar("MetaMask not found. Please install it.");
        setLoading(false);
        return;
      }

      if (!contract) await initializeContract();
      const tx = await contract!.invest({
        value: ethers?.parseEther(data?.amount?.toString()),
      });
      await tx?.wait();
      successSnackbar("Investment successful!");
      reset();
    } catch (error) {
      errorSnackbar("Investment failed");
    } finally {
      setLoading(false);
    }
  };

  const withdrawCash = async () => {
    try {
      if (!contract) await initializeContract();
      const tx = await contract!.payCashback();
      await tx?.wait();
      successSnackbar("Cashback paid successfully!");
    } catch (error) {
      errorSnackbar("Cashback payment failed");
    }
  };

  return {
    theme,
    openDialog,
    setOpenDialog,
    onCloseDialogHandler,
    loading,
    methods,
    handleSubmit,
    depositCashViaCard,
    depositCashViaCrypto,
    withdrawCash,
  };
}
