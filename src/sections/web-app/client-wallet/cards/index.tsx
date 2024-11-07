import { CardsIcon } from "@/assets/icons";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BUTTON_STYLES } from "@/styles";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_PUBLIC_KEY } from "@/config";
import { loadStripe } from "@stripe/stripe-js";
import CardDialog from "./card-dialog";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Cards() {
  const [openDialog, setOpenDialog] = useState(false);

  const onCloseDialogHandler = () => {
    setOpenDialog(false);
  };

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
