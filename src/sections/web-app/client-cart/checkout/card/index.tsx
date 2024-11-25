import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  FormProvider,
  RHFAutocompleteAsync,
} from "@/components/react-hook-form";
import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { cardBrandIcon } from "@/utils/card-brand";
import { ICardProps } from "./card.interface";
import Image from "next/image";
import { ThankYouImg } from "@/assets/images";
import useCard from "./use-card";

export default function Card(props: ICardProps) {
  const { openCheckoutDialog, onCloseCheckoutHandler } = props;
  const {
    theme,
    onCloseCardHandler,
    thankYou,
    methods,
    handleSubmit,
    checkoutViaCardHandler,
    apiQueryCards,
    loading,
  } = useCard(props);

  return (
    <Dialog
      open={openCheckoutDialog.checkoutViaCard}
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
          {!thankYou && "Check Out"}
        </Typography>

        <CloseRoundedIcon
          sx={{ color: "text.body", cursor: "pointer" }}
          onClick={onCloseCardHandler}
        />
      </DialogTitle>

      {thankYou ? (
        <DialogContent>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={1.6}
          >
            <Image
              src={ThankYouImg}
              alt={"Thank You"}
              width={238}
              height={238}
            />
            <Typography
              variant={"body1"}
              fontWeight={700}
              color={"text.heading"}
            >
              Congratulations!
            </Typography>
            <Typography variant={"body2"}>
              Your Payment Is Successfully Completed.
            </Typography>
          </Box>
        </DialogContent>
      ) : (
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(checkoutViaCardHandler)}
        >
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFAutocompleteAsync
                  name={"paymentMethod"}
                  label={"Select Card"}
                  placeholder={"Please Select Card"}
                  noOptionsCase={"Please Add a Card First"}
                  apiQuery={apiQueryCards}
                  getOptionLabel={(option: any) => option?.name}
                  isOptionEqualToValue={(option: any, newValue: any) =>
                    option?.id === newValue?.id
                  }
                  renderOption={(option: any) => (
                    <Box display={"flex"} alignItems={"center"} gap={0.6}>
                      <Box width={34} height={24}>
                        {cardBrandIcon(option?.brand.toLowerCase())}
                      </Box>

                      <Box
                        color={"text.heading"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography
                          variant={"body3"}
                          component={"p"}
                          fontWeight={600}
                        >
                          **** **** **** {option?.last4}
                        </Typography>
                        <Box display={"flex"}>
                          <Typography variant={"caption"} fontWeight={600}>
                            Expiry: {option?.exp_month}/
                            {String(option?.exp_year)?.slice(-2)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
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
              onClick={onCloseCheckoutHandler}
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
              Proceed
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      )}
    </Dialog>
  );
}
