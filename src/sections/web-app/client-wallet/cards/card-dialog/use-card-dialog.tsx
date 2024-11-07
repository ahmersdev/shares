import { useTheme, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostAddCardMutation } from "@/services/web-app/wallet";

export default function useCardDialog(props: {
  open: boolean;
  onClose: () => void;
}) {
  const { onClose } = props;
  const theme = useTheme<Theme>();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (stripe && elements) {
      setInitialLoading(false);
    }
  }, [stripe, elements]);

  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        nameOnCard: Yup.string().trim().required("Required"),
      })
    ),
    defaultValues: { nameOnCard: "" },
  });

  const { handleSubmit } = methods;

  const [postAddCardTrigger] = usePostAddCardMutation();

  const onSubmit = async (data: { nameOnCard: string }) => {
    setLoading(true);
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    if (!cardNumberElement) {
      errorSnackbar();
      setLoading(false);
      return;
    }

    const { token, error } = await stripe.createToken(cardNumberElement, {
      name: data.nameOnCard,
    });

    if (error) {
      errorSnackbar();
    } else if (token) {
      try {
        const res = await postAddCardTrigger({
          cardToken: token.id,
          nameOnCard: data.nameOnCard,
        }).unwrap();
        if (res) {
          successSnackbar(res?.msg ?? "Card Added Successfully!");
          onClose();
        }
      } catch (error) {
        const errorResponse = error as IApiErrorResponse;
        errorSnackbar(errorResponse?.data?.errors);
      }
    }
    setLoading(false);
  };

  return { theme, methods, handleSubmit, onSubmit, loading, initialLoading };
}
