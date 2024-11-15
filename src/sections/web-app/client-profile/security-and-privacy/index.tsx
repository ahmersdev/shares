"use client";

import { SecurityAndPrivacyBlueIcon } from "@/assets/icons";
import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Typography } from "@mui/material";

export default function SecurityAndPrivacy() {
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderColor: "info.900",
          borderRadius: 4,
          px: 2.4,
          py: 1.5,
          bgcolor: "info.800",
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "md",
          mb: 4,
          mt: 1,
        }}
      >
        <SecurityAndPrivacyBlueIcon />
        <Box>
          <Typography variant={"body2"} fontWeight={700} color={"text.heading"}>
            Your security is our priority
          </Typography>
          <Typography variant={"body3"} component={"p"} color={"text.body"}>
            We employ stringent measures, ensuring your money remains secure at
            all times.
          </Typography>
        </Box>
      </Box>

      <Typography variant={"body1"} fontWeight={600} color={"text.heading"}>
        Your security is our priority
      </Typography>
      <Typography variant={"body1"} color={"text.body"} my={1}>
        Each time you login, you will need an authenticator app to generate an
        one time code.
      </Typography>
      <Button
        variant={"contained"}
        size={"small"}
        sx={{
          ...BUTTON_STYLES,
          color: "common.white",
          bgcolor: "text.heading",
          ":hover": {
            borderColor: "text.heading",
          },
        }}
        disableElevation
      >
        Setup MFA
      </Button>
    </>
  );
}
