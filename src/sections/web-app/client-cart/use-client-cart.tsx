import {
  useGetAllCartItemsQuery,
  usePutCartItemMutation,
  useRemoveCartItemMutation,
} from "@/services/web-app/cart";
import { ICartItem } from "./client-cart.interface";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";

export default function useClientCart() {
  const [initialized, setInitialized] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [updateItem, setUpdateItem] = useState<{
    amount: string;
    propertyId: string;
  } | null>(null);

  const [totalAmount, setTotalAmount] = useState(0);

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAllCartItemsQuery(null, { refetchOnMountOrArgChange: true });
  const [putCartItemTrigger] = usePutCartItemMutation();
  const [removeCartItemTrigger] = useRemoveCartItemMutation();

  const updateCartItem = async (amount: string, propertyId: string) => {
    try {
      const params = { body: { amount }, propertyId };
      await putCartItemTrigger(params).unwrap();
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

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

  useEffect(() => {
    if (data && !initialized) {
      setInitialized(true);
      reset(defaultValues);
    }
  }, [data, reset, defaultValues, initialized]);

  useEffect(() => {
    if (updateItem) {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      const newTimeout = setTimeout(() => {
        updateCartItem(updateItem.amount, updateItem.propertyId);
      }, 500);
      setDebounceTimeout(newTimeout);
    }
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [updateItem]);

  useEffect(() => {
    const newTotal = Object.values(watchedAmounts || {}).reduce(
      (acc: number, amount: any) => {
        return acc + (parseInt(amount, 10) || 0);
      },
      0
    );
    setTotalAmount(newTotal);
  }, [watchedAmounts]);

  const subtractFromCartItem = (item: ICartItem) => {
    const currentAmount = getValues(`amount_${item._id}`) || 0;
    if (currentAmount - 1000 >= 1000) {
      const newAmount = Math.max(currentAmount - 1000, 0);
      setValue(`amount_${item._id}`, newAmount);
      setUpdateItem({ amount: String(newAmount), propertyId: item._id });
    } else {
      errorSnackbar("Can not go below 1000");
    }
  };

  const addToCartItem = (item: ICartItem) => {
    const currentAmount = getValues(`amount_${item._id}`) || 0;
    const newAmount = currentAmount + 1000;
    setValue(`amount_${item._id}`, newAmount);
    setUpdateItem({ amount: String(newAmount), propertyId: item._id });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const itemId = e.target.name.split("amount_")[1];
    if (value < 1000) {
      setValue(e.target.name, value || 0);
      methods.setError(e.target.name, {
        type: "manual",
        message: "At least 1000",
      });
    } else {
      methods.clearErrors(e.target.name);
      setUpdateItem({ amount: String(value), propertyId: itemId });
    }
  };

  const removeCartItem = async (propertyId: string) => {
    try {
      const res = await removeCartItemTrigger(propertyId).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Property Removed Successfully!");
        refetch();
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  useEffect(() => {
    if (data && data.data) {
      const newTotal = data.data.reduce((acc: number, item: ICartItem) => {
        return acc + (item.amount || 0);
      }, 0);
      setTotalAmount(newTotal);
    }
  }, [data]);

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
    removeCartItem,
  };
}
