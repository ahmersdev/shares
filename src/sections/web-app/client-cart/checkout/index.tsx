import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  CheckoutViaWalletIcon,
  DepositViaCardIcon,
  DepositViaCryptoIcon,
} from "@/assets/icons";
import { ICheckoutProps } from "../client-cart.interface";
import { useLazyCheckoutViaDepositMoneyQuery } from "@/services/web-app/cart";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";
import { useGetTotalCashQuery } from "@/services/web-app/wallet";

export default function Checkout(props: ICheckoutProps) {
  const {
    openCheckoutDialog,
    setOpenCheckoutDialog,
    onCloseCheckoutHandler,
    refetch,
    totalAmount,
  } = props;
  const theme = useTheme();

  const [checkoutViaDepositMoneyQueryTrigger] =
    useLazyCheckoutViaDepositMoneyQuery();
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

  return (
    <>
      <Dialog
        open={openCheckoutDialog.checkout}
        onClose={onCloseCheckoutHandler}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 6,
            border: 1,
            borderColor: "text.stroke",
            maxWidth: theme.breakpoints.values.sm - 80,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"body1"} fontWeight={700} color={"text.heading"}>
            Check Out
          </Typography>

          <CloseRoundedIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={onCloseCheckoutHandler}
          />
        </DialogTitle>

        <DialogContent>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1.6}
            border={1}
            borderRadius={3}
            borderColor={"text.stroke"}
            px={1.6}
            py={2}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setOpenCheckoutDialog({
                  checkout: false,
                  checkoutViaCard: true,
                  checkoutViaCrypto: false,
                })
              }
            >
              <DepositViaCardIcon />
              <Typography
                variant={"body3"}
                component={"p"}
                color={"text.heading"}
                fontWeight={600}
              >
                Checkout Via Debit Card
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "text.stroke" }} />

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setOpenCheckoutDialog({
                  checkout: false,
                  checkoutViaCard: false,
                  checkoutViaCrypto: true,
                })
              }
            >
              <DepositViaCryptoIcon />
              <Typography
                variant={"body3"}
                component={"p"}
                color={"text.heading"}
                fontWeight={600}
              >
                Checkout Via Crypto
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "text.stroke" }} />

            {isLoading || isFetching ? (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                sx={{ cursor: "pointer" }}
                onClick={checkoutViaDepositHandler}
              >
                <CheckoutViaWalletIcon />
                <Typography
                  variant={"body3"}
                  component={"p"}
                  color={"text.heading"}
                  fontWeight={600}
                >
                  Checkout Via Deposit Money
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
