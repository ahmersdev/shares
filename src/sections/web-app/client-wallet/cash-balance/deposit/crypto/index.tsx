import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { ICryptoDepositProps } from "./crypto.interface";
import useCryptoDeposit from "./use-crypto";

export default function CryptoDeposit(props: ICryptoDepositProps) {
  const { openDepositDialog } = props;

  const {
    theme,
    onCloseCryptoHandler,
    loading,
    methods,
    handleSubmit,
    depositCashViaCrypto,
  } = useCryptoDeposit(props);

  return (
    <Dialog
      open={openDepositDialog.depositViaCrypto}
      onClose={onCloseCryptoHandler}
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
          Enter Amount
        </Typography>

        <CloseRoundedIcon
          sx={{ color: "text.body", cursor: "pointer" }}
          onClick={onCloseCryptoHandler}
        />
      </DialogTitle>

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(depositCashViaCrypto)}
      >
        <DialogContent>
          <RHFTextField
            name={"amount"}
            label={"Enter Amount"}
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
              color: "text.body",
              borderColor: "text.body",
              ":hover": {
                borderColor: "text.body",
              },
            }}
            disableElevation
            onClick={onCloseCryptoHandler}
            disabled={loading}
          >
            Cancel
          </Button>
          <LoadingButton
            variant={"contained"}
            size={"small"}
            sx={{
              ...BUTTON_STYLES,
              color: "common.white",
              borderColor: "primary.main",
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
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
  );
}
