"use client";

import { SecurityAndPrivacyBlueIcon } from "@/assets/icons";
import { IApiErrorResponse } from "@/interfaces";
import { useLazyGetUpdateMfaQuery } from "@/services/web-app/settings";
import { BUTTON_STYLES } from "@/styles";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";

export default function SecurityAndPrivacy() {
  const [updatedMfaTrigger, updateMfaStatus] = useLazyGetUpdateMfaQuery();

  const setupMfaHandler = async () => {
    try {
      const res = await updatedMfaTrigger(null).unwrap();
      if (res) {
        !res?.user?.enabledMFA
          ? successSnackbar("MFA Deactivated Successfully!")
          : successSnackbar("MFA Activated Successfully!");
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

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
      <LoadingButton
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
        loading={updateMfaStatus?.isLoading}
        onClick={setupMfaHandler}
      >
        Setup MFA
      </LoadingButton>
    </>
  );
}
