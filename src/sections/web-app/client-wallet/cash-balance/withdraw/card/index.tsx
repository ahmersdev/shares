import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ICardWithdrawProps } from "./card.interface";
import useCardDeposit from "./use-card";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";

export default function CardWithdraw(props: ICardWithdrawProps) {
  const { openWithdrawDialog } = props;

  const {
    theme,
    onCloseCardHandler,
    loading,
    methods,
    handleSubmit,
    withdrawCashViaCard,
  } = useCardDeposit(props);

  return (
    <Dialog
      open={openWithdrawDialog.withdrawViaCard}
      onClose={onCloseCardHandler}
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
          onClick={onCloseCardHandler}
        />
      </DialogTitle>

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(withdrawCashViaCard)}
      >
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"amount"}
                label={"Enter Amount"}
                placeholder={"USD 2,000"}
                type={"number"}
              />
            </Grid>
          </Grid>
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
            onClick={onCloseCardHandler}
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
            Withdraw
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
