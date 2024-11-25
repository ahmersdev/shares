import { Theme, useTheme } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyGetCardListDropdownQuery } from "@/services/web-app/wallet";
import { useState } from "react";
import { ICardCheckoutForm, ICardProps } from "./card.interface";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";
import { useCheckoutViaCardMutation } from "@/services/web-app/cart";

export default function useCard(props: ICardProps) {
  const { onCloseCheckoutHandler, refetch } = props;
  const theme = useTheme<Theme>();
  const [loading, setLoading] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const methods = useForm<ICardCheckoutForm>({
    resolver: yupResolver(
      Yup.object().shape({
        paymentMethod: Yup.mixed().nullable().required("Card is Required"),
      }) as any
    ),
    defaultValues: { paymentMethod: null },
  });

  const { handleSubmit, reset } = methods;

  const [postCheckoutViaCardTrigger] = useCheckoutViaCardMutation();

  const checkoutViaCardHandler: SubmitHandler<ICardCheckoutForm> = async (
    data
  ) => {
    setLoading(true);
    const updatedData = {
      paymentMethod: data?.paymentMethod?.id,
    };
    try {
      const res = await postCheckoutViaCardTrigger(updatedData).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Checkout successful!");
        reset();
        setThankYou(true);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  const onCloseCardHandler = () => {
    onCloseCheckoutHandler();
    refetch();
  };

  const apiQueryCards = useLazyGetCardListDropdownQuery();

  return {
    theme,
    onCloseCardHandler,
    thankYou,
    methods,
    handleSubmit,
    checkoutViaCardHandler,
    apiQueryCards,
    loading,
  };
}
