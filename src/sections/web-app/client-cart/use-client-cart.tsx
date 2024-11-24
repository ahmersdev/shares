import {
  useGetAllCartItemsQuery,
  usePutCartItemMutation,
  useRemoveCartItemMutation,
} from "@/services/web-app/cart";
import { ICartItem } from "./client-cart.interface";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useCallback, useEffect, useRef, useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";
import { useGetAccountSettingsDetailsQuery } from "@/services/web-app/settings";
import { useTheme, Theme } from "@mui/material";

export default function useClientCart() {
  const theme = useTheme<Theme>();
  const [openCheckoutDialog, setOpenCheckoutDialog] = useState({
    checkout: false,
    checkoutViaCard: false,
    checkoutViaCrypto: false,
  });
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const [updateItem, setUpdateItem] = useState<{
    amount: number;
    propertyId: string;
  } | null>(null);

  const [totalAmount, setTotalAmount] = useState(0);

  const onCloseCheckoutHandler = () => {
    setOpenCheckoutDialog({
      checkout: false,
      checkoutViaCard: false,
      checkoutViaCrypto: false,
    });
  };

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAllCartItemsQuery(null, { refetchOnMountOrArgChange: true });

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
    isError: isErrorUser,
  } = useGetAccountSettingsDetailsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const [putCartItemTrigger] = usePutCartItemMutation();
  const [removeCartItemTrigger] = useRemoveCartItemMutation();

  const updateCartItem = useCallback(
    async (amount: number, propertyId: string) => {
      try {
        const params = { body: { amount }, propertyId };
        await putCartItemTrigger(params).unwrap();
      } catch (error) {
        const errorResponse = error as IApiErrorResponse;
        errorSnackbar(errorResponse?.data?.errors);
      }
    },
    [putCartItemTrigger]
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
    defaultValues: { amount: "" },
  });

  const { setValue, getValues, reset } = methods;

  const watchedAmounts = useWatch({ control: methods.control });

  useEffect(() => {
    if (data && data.data) {
      const calculatedDefaults = data.data.reduce(
        (acc: { [key: string]: number | string }, item: ICartItem) => {
          acc[`amount_${item._id}`] = item.amount || "";
          return acc;
        },
        {}
      );

      reset(calculatedDefaults);
    }
  }, [data, reset]);

  useEffect(() => {
    if (updateItem) {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        updateCartItem(updateItem.amount, updateItem.propertyId);
      }, 500);
    }
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [updateItem, updateCartItem]);

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
    const currentAmount =
      parseInt(getValues(`amount_${item._id}`) as string, 10) || 0;
    if (currentAmount - 1000 >= 1000) {
      const newAmount = currentAmount - 1000;
      setValue(`amount_${item._id}`, newAmount);
      setUpdateItem({ amount: newAmount, propertyId: item._id });
    } else {
      errorSnackbar("Cannot go below 1000");
    }
  };

  const addToCartItem = (item: ICartItem) => {
    const currentAmount =
      parseInt(getValues(`amount_${item._id}`) as string, 10) || 0;
    const newAmount = currentAmount + 1000;
    setValue(`amount_${item._id}`, newAmount);
    setUpdateItem({ amount: newAmount, propertyId: item._id });
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
      setUpdateItem({ amount: value, propertyId: itemId });
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
    theme,
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
    dataUser,
    isLoadingUser,
    isFetchingUser,
    isErrorUser,
    openCheckoutDialog,
    setOpenCheckoutDialog,
    onCloseCheckoutHandler,
    refetch,
  };
}
