import { Theme, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostWithdrawAmountViaCardMutation } from "@/services/web-app/wallet";
import { IApiErrorResponse } from "@/interfaces";
import { ICardWithdrawProps } from "./card.interface";

export default function useCardDeposit(props: ICardWithdrawProps) {
  const { setOpenWithdrawDialog } = props;
  const theme = useTheme<Theme>();

  const [loading, setLoading] = useState(false);

  const onCloseCardHandler = () => {
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
  const [postWithdrawAmountViaCardTrigger] =
    usePostWithdrawAmountViaCardMutation();

  const withdrawCashViaCard = async (data: { amount: number }) => {
    setLoading(true);
    try {
      const res = await postWithdrawAmountViaCardTrigger(data).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Withdraw successful!");
        reset();
        onCloseCardHandler();
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  return {
    theme,
    onCloseCardHandler,
    loading,
    methods,
    handleSubmit,
    withdrawCashViaCard,
  };
}
