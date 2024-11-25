import { Theme, useTheme } from "@mui/material";
import { ICheckoutProps } from "../client-cart.interface";
import { useLazyCheckoutViaDepositMoneyQuery } from "@/services/web-app/cart";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";
import { useGetTotalCashQuery } from "@/services/web-app/wallet";

export default function useCheckout(props: ICheckoutProps) {
  const { onCloseCheckoutHandler, refetch, totalAmount } = props;
  const theme = useTheme<Theme>();

  const [
    checkoutViaDepositMoneyQueryTrigger,
    checkoutViaDepositMoneyQueryStatus,
  ] = useLazyCheckoutViaDepositMoneyQuery();
  const { data, isLoading, isFetching, isError } = useGetTotalCashQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const checkoutViaDepositHandler = async () => {
    if (isError) {
      errorSnackbar();
      onCloseCheckoutHandler();
      return;
    }
    if (totalAmount > data?.data?.totalCash) {
      errorSnackbar("You do not have enough amount");
    } else {
      try {
        const res = await checkoutViaDepositMoneyQueryTrigger(null).unwrap();
        if (res) {
          successSnackbar(res?.msg ?? "Checkout Successful!");
          onCloseCheckoutHandler();
          refetch();
        }
      } catch (error) {
        const errorResponse = error as IApiErrorResponse;
        errorSnackbar(errorResponse?.data?.errors);
      }
    }
  };

  return {
    theme,
    isLoading,
    isFetching,
    checkoutViaDepositHandler,
    checkoutViaDepositMoneyQueryStatus,
  };
}
