import { CardsIcon } from "@/assets/icons";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BUTTON_STYLES } from "@/styles";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_PUBLIC_KEY } from "@/config";
import { loadStripe } from "@stripe/stripe-js";
import CardDialog from "./card-dialog";
import ApiErrorState from "@/components/api-error-state";
import { DeleteIcon } from "@/assets/icons";
import useCards from "./use-cards";
import { ICardItem } from "./cards.interface";
import { cardBrandIcon } from "../client-wallet.data";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Cards() {
  const {
    openDialog,
    setOpenDialog,
    onCloseDialogHandler,
    data,
    isLoading,
    isFetching,
    isError,
    deleteCard,
  } = useCards();

  return (
    <>
      <Typography variant="body1" fontWeight={600} color="text.heading">
        Cards
      </Typography>
      <Box
        bgcolor="grey.50"
        borderRadius={3}
        border={1}
        borderColor="text.stroke"
        p={2}
        mt={1.6}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Box display="flex" alignItems="center" gap={0.6}>
          <CardsIcon />
          <Typography variant="caption">
            Add a crypto wallet to deposit from anywhere in the world
          </Typography>
        </Box>
        {isLoading || isFetching ? (
          <Box textAlign={"center"}>
            <CircularProgress size={20} />
          </Box>
        ) : isError ? (
          <ApiErrorState height={"10vh"} />
        ) : (
          <>
            {data?.data?.map((item: ICardItem) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={0.6}
                border={1}
                borderRadius={3}
                borderColor={"text.disabled"}
                px={1.6}
                py={0.8}
                key={item.id}
              >
                <Box display={"flex"} alignItems={"center"} gap={0.6}>
                  <Box width={34} height={24}>
                    {cardBrandIcon(item?.brand.toLowerCase())}
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
                      **** **** **** {item?.last4}
                    </Typography>
                    <Box display={"flex"}>
                      <Typography variant={"caption"} fontWeight={600}>
                        Expiry: {item?.exp_month}/
                        {String(item?.exp_year)?.slice(-2)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => deleteCard(item.id)}
                >
                  <DeleteIcon />
                </Box>
              </Box>
            ))}
          </>
        )}
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddIcon />}
          sx={{
            ...BUTTON_STYLES,
            p: 1,
            color: "text.disabled",
            borderColor: "text.disabled",
            ":hover": {
              borderColor: "text.disabled",
            },
          }}
          onClick={() => setOpenDialog(true)}
        >
          Connect Card
        </Button>
      </Box>

      <Elements stripe={stripePromise}>
        <CardDialog open={openDialog} onClose={onCloseDialogHandler} />
      </Elements>
    </>
  );
}
