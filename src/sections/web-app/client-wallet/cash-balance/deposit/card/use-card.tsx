import { Theme, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { ICardProps } from "./card.interface";
import { useLazyGetCardListDropdownQuery } from "@/services/web-app/wallet";

export default function useCard(props: ICardProps) {
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

  const depositCashViaCard = async (data: {
    amount: number;
    paymentMethod: null;
  }) => {
    setLoading(true);
    try {
      successSnackbar("Investment successful!");
      reset();
    } catch (error) {
      errorSnackbar("Investment failed");
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
