import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { BUTTON_STYLES } from "@/styles";
import useCashBalance from "./use-cash-balance";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";

export default function CashBalance() {
  const {
    theme,
    openDialog,
    setOpenDialog,
    loading,
    methods,
    handleSubmit,
    depositCash,
    withdrawCash,
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
        <Typography variant={"h5"} color={"text.heading"}>
          USD 0
        </Typography>
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
          onClick={() => setOpenDialog(true)}
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
          onClick={withdrawCash}
        >
          Withdraw
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 6,
            border: 1,
            borderColor: "text.stroke",
            maxWidth: theme.breakpoints.values.sm - 150,
          },
        }}
      >
        <DialogTitle bgcolor={"primary.5"}>
          <Typography variant={"body1"} fontWeight={700} color={"text.heading"}>
            Enter the Amount to Deposit
          </Typography>
        </DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(depositCash)}>
          <DialogContent>
            <RHFTextField
              name={"amount"}
              placeholder={"USD 2,000"}
              type={"number"}
            />
          </DialogContent>

          <DialogActions sx={{ pr: 2.4, pb: 2.4 }}>
            <Button
              variant={"outlined"}
              size={"small"}
              sx={{
                ...BUTTON_STYLES,
                color: "text.disabled",
                borderColor: "text.disabled",
                ":hover": {
                  borderColor: "text.disabled",
                },
              }}
              disableElevation
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>
            <LoadingButton
              variant={"contained"}
              size={"small"}
              sx={{
                ...BUTTON_STYLES,
                color: "common.white",
                borderColor: "text.heading",
                backgroundColor: "text.heading",
                ":hover": {
                  backgroundColor: "text.heading",
                },
              }}
              disableElevation
              type={"submit"}
              loading={loading}
            >
              Deposit
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      </Dialog>
    </Box>
  );
}
