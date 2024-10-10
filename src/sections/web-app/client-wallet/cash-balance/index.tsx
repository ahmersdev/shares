import { Box, Button, Typography } from "@mui/material";
import { BUTTON_STYLES } from "@/styles";

export default function CashBalance() {
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
        >
          Withdraw
        </Button>
      </Box>
    </Box>
  );
}
