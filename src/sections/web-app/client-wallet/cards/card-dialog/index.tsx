import {
  Button,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Box,
  FormLabel,
  Grid,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import useCardDialog from "./use-card-dialog";
import { pxToRem } from "@/utils/get-font-value";
import { fieldBoxStyles, fieldStyles } from "./card-dialog.data";
import { SkeletonForm } from "@/components/skeletons";

export default function CardDialog(props: {
  open: boolean;
  onClose: () => void;
}) {
  const { open, onClose } = props;

  const { theme, methods, handleSubmit, onSubmit, loading, initialLoading } =
    useCardDialog(props);

  return (
    <FormProvider methods={methods}>
      <Dialog
        open={open}
        onClose={onClose}
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
            Add New Card
          </Typography>
          <CloseRoundedIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={onClose}
          />
        </DialogTitle>

        <DialogContent>
          {initialLoading ? (
            <SkeletonForm length={2} />
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <FormLabel sx={{ color: "text.heading" }}>
                  Card Number
                </FormLabel>
                <Box sx={{ ...fieldBoxStyles(theme) }}>
                  <CardNumberElement options={{ ...fieldStyles(theme) }} />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormLabel sx={{ color: "text.heading" }}>CVC</FormLabel>
                <Box sx={{ ...fieldBoxStyles(theme) }}>
                  <CardCvcElement options={{ ...fieldStyles(theme) }} />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <RHFTextField
                  name={"nameOnCard"}
                  label={"Name On Card"}
                  placeholder={"e.g M.Awais"}
                  size={"small"}
                />
              </Grid>
              <Grid item xs={4}>
                <FormLabel sx={{ color: "text.heading" }}>Expiry</FormLabel>
                <Box sx={{ ...fieldBoxStyles(theme) }}>
                  <CardExpiryElement options={{ ...fieldStyles(theme) }} />
                </Box>
              </Grid>
            </Grid>
          )}
        </DialogContent>

        <DialogActions sx={{ pr: 2.4, pb: 2.4 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              ...BUTTON_STYLES,
              color: "text.body",
              borderColor: "text.body",
              ":hover": {
                borderColor: "text.body",
              },
            }}
            onClick={onClose}
            disabled={loading || initialLoading}
          >
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            size="small"
            sx={{
              ...BUTTON_STYLES,
              color: "common.white",
              borderColor: "primary.main",
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            loading={loading}
            onClick={handleSubmit(onSubmit)}
            disabled={loading || initialLoading}
          >
            Add Card
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}
