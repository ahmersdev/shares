import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  CheckoutViaWalletIcon,
  DepositViaCardIcon,
  DepositViaCryptoIcon,
} from "@/assets/icons";
import { ICheckoutProps } from "../client-cart.interface";
import useCheckout from "./use-checkout";

export default function Checkout(props: ICheckoutProps) {
  const { openCheckoutDialog, setOpenCheckoutDialog, onCloseCheckoutHandler } =
    props;

  const {
    theme,
    isLoading,
    isFetching,
    checkoutViaDepositHandler,
    checkoutViaDepositMoneyQueryStatus,
  } = useCheckout(props);

  return (
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

          {isLoading ||
          isFetching ||
          checkoutViaDepositMoneyQueryStatus?.isLoading ? (
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
  );
}
