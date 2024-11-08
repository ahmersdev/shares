import { useGetAllCartItemsQuery } from "@/services/web-app/cart";
import { ICartItem } from "./client-cart.interface";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
import { errorSnackbar } from "@/utils/api";

export default function useClientCart() {
  const { data, isLoading, isFetching, isError } = useGetAllCartItemsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  const defaultValues = data?.data?.reduce(
    (acc: { [key: string]: number | string }, item: ICartItem) => {
      acc[`amount_${item._id}`] = item.amount || "";
      return acc;
    },
    {} as { [key: string]: number | string }
  );

  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        ...data?.data?.reduce(
          (acc: { [key: string]: Yup.NumberSchema }, item: ICartItem) => {
            acc[`amount_${item._id}`] = Yup.number()
              .positive("Must be above 0")
              .min(1000, "At least 1000")
              .typeError("Must be a Number")
              .required("Required");
            return acc;
          },
          {} as { [key: string]: Yup.NumberSchema }
        ),
      })
    ),
    defaultValues,
  });

  const { setValue, getValues, reset } = methods;

  const watchedAmounts = useWatch({ control: methods.control });

  const totalAmount = Object.values(watchedAmounts || {}).reduce(
    (acc: number, amount: any) => {
      return acc + (parseInt(amount, 10) || 0);
    },
    0
  );

  useEffect(() => reset(defaultValues), [reset, data]);

  const subtractFromCartItem = (item: ICartItem) => {
    const currentAmount = getValues(`amount_${item._id}`) || 0;
    if (currentAmount - 1000 >= 1000) {
      const newAmount = Math.max(currentAmount - 1000, 0);
      setValue(`amount_${item._id}`, newAmount);
    } else {
      errorSnackbar("Can not go below 1000");
    }
  };

  const addToCartItem = (item: ICartItem) => {
    const currentAmount = getValues(`amount_${item._id}`) || 0;
    const newAmount = currentAmount + 1000;
    setValue(`amount_${item._id}`, newAmount);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value < 1000) {
      setValue(e.target.name, value || 0);
      methods.setError(e.target.name, {
        type: "manual",
        message: "At least 1000",
      });
    } else {
      methods.clearErrors(e.target.name);
    }
  };

  return {
    data,
    isLoading,
    isFetching,
    isError,
    methods,
    subtractFromCartItem,
    addToCartItem,
    handleBlur,
    totalAmount,
  };
}
