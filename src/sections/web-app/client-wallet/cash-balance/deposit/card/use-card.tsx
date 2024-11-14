import { Theme, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { ICardDepositProps } from "./card.interface";
import {
  useLazyGetCardListDropdownQuery,
  usePostDepositAmountViaCardMutation,
} from "@/services/web-app/wallet";
import { IApiErrorResponse } from "@/interfaces";

export default function useCardDeposit(props: ICardDepositProps) {
  const { setOpenDepositDialog } = props;
  const theme = useTheme<Theme>();

  const [loading, setLoading] = useState(false);

  const onCloseCardHandler = () => {
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
        paymentMethod: Yup.mixed().nullable().required("Card is Required"),
      }) as any
    ),
    defaultValues: { amount: 0, paymentMethod: null },
  });

  const { handleSubmit, reset } = methods;
  const [postDepositAmountViaCardTrigger] =
    usePostDepositAmountViaCardMutation();

  const depositCashViaCard = async (data: {
    amount: number;
    paymentMethod: any;
  }) => {
    setLoading(true);
    const updatedData = {
      amount: data.amount,
      paymentMethod: data?.paymentMethod?.id,
    };
    try {
      const res = await postDepositAmountViaCardTrigger(updatedData).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Deposit successful!");
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

  const apiQueryCards = useLazyGetCardListDropdownQuery();

  return {
    theme,
    onCloseCardHandler,
    loading,
    methods,
    handleSubmit,
    depositCashViaCard,
    apiQueryCards,
  };
}
