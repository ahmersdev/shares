import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { BUTTON_STYLES } from "@/styles";
import useCashBalance from "./use-cash-balance";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DepositViaCardIcon, DepositViaCryptoIcon } from "@/assets/icons";
import Crypto from "./deposit/crypto";
import Card from "./deposit/card";

export default function CashBalance() {
  const {
    theme,
    openDepositDialog,
    setOpenDepositDialog,
    onCloseDepositHandler,
    data,
    isLoading,
    isFetching,
    isError,
  } = useCashBalance();

  return (
    <Box
      bgcolor={"grey.50"}
      borderRadius={3}
      border={1}
      borderColor={"text.stroke"}
      px={3}
      mt={1.6}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={2}
      py={{ xs: 1, md: 2 }}
      height={"100%"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant={"body1"}>Cash Balance</Typography>
        {isLoading || isFetching ? (
          <CircularProgress size={30} />
        ) : isError ? (
          "-"
        ) : (
          <Typography variant={"h5"} color={"text.heading"}>
            USD {data?.data?.totalCash ?? "0"}
          </Typography>
        )}
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={0.8} width={120}>
        <Button
          variant={"contained"}
          size={"small"}
          sx={{
            ...BUTTON_STYLES,
            color: "grey.50",
            py: 0.8,
            borderColor: "text.disabled",
            backgroundColor: "text.disabled",
            ":hover": {
              backgroundColor: "text.disabled",
            },
          }}
          disableElevation
          onClick={() =>
            setOpenDepositDialog({
              deposit: true,
              depositViaCard: false,
              depositViaCrypto: false,
            })
          }
        >
          Deposit
        </Button>
        <Button
          variant={"outlined"}
          size={"small"}
          sx={{
            ...BUTTON_STYLES,
            color: "text.disabled",
            py: 0.8,
            borderColor: "text.disabled",
            ":hover": {
              borderColor: "text.disabled",
            },
          }}
          disableElevation
          // onClick={withdrawCash}
        >
          Withdraw
        </Button>
      </Box>

      <Dialog
        open={openDepositDialog.deposit}
        onClose={onCloseDepositHandler}
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
            Deposit
          </Typography>

          <CloseRoundedIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={onCloseDepositHandler}
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
                setOpenDepositDialog({
                  deposit: false,
                  depositViaCard: true,
                  depositViaCrypto: false,
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
                Deposit Via Debit Card
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "text.stroke" }} />

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setOpenDepositDialog({
                  deposit: false,
                  depositViaCard: false,
                  depositViaCrypto: true,
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
                Deposit Via Crypto
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {openDepositDialog?.depositViaCrypto && (
        <Crypto
          openDepositDialog={openDepositDialog}
          setOpenDepositDialog={setOpenDepositDialog}
        />
      )}

      {openDepositDialog?.depositViaCard && (
        <Card
          openDepositDialog={openDepositDialog}
          setOpenDepositDialog={setOpenDepositDialog}
        />
      )}
    </Box>
  );
}
