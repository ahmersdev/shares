import { Theme, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Contract, ethers, BrowserProvider } from "ethers";
import RealEstateSPVABI from "@/json/RealEstateSPVABI.json";
import { ICryptoProps } from "./crypto.interface";

const contractAddress = "0x20775d300BdE943Ac260995E977fb915fB01f399";

export default function useCrypto(props: ICryptoProps) {
  const { setOpenDepositDialog } = props;
  const theme = useTheme<Theme>();

  const [loading, setLoading] = useState(false);

  const onCloseCryptoHandler = () => {
    setOpenDepositDialog({
      deposit: false,
      depositViaCard: false,
      depositViaCrypto: false,
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
      depositCashViaCrypto: () => {},
    };
  }

  const provider = new BrowserProvider((window as any)?.ethereum);
  let contract: Contract | null = null;

  const initializeContract = async () => {
    const signer = await provider?.getSigner();
    contract = new Contract(contractAddress, RealEstateSPVABI, signer);
  };

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

  return {
    theme,
    onCloseCryptoHandler,
    loading,
    methods,
    handleSubmit,
    depositCashViaCrypto,
  };
}
