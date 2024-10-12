import { WEB_APP } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";
import { useLazyGetOnboardingAddKycQuery } from "@/services/onboarding";
import { BUTTON_STYLES } from "@/styles";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { LoadingButton } from "@mui/lab";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AgreementState() {
  const theme = useTheme<Theme>();

  const router = useRouter();

  const [getOnboardingAddKycTrigger, getOnboardingAddKycStatus] =
    useLazyGetOnboardingAddKycQuery();

  const kycVerificationHandler = async () => {
    try {
      const res = await getOnboardingAddKycTrigger(null).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Onboarding Completed!");
        router.push(WEB_APP.PROPERTIES);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      p={2}
      maxWidth={theme.breakpoints.values.sm - 150}
      width={"100%"}
      margin={"auto"}
      gap={3.2}
      maxHeight={"calc(100vh - 140px)"}
      height={"100%"}
    >
      <Typography variant={"h3"} color={"text.heading"}>
        Upload your passport
      </Typography>
      <Typography variant={"body2"} color={"text.body"}>
        Financial regulations require us to verify your identity before you can
        invest.
      </Typography>

      <Box
        bgcolor={"common.white"}
        border={1}
        borderRadius={3}
        borderColor={"text.stroke"}
        px={1.6}
        py={2.4}
        maxHeight={"40vh"}
        height={"100%"}
        overflow={"auto"}
      >
        Content to be added
      </Box>

      <LoadingButton
        variant={"contained"}
        fullWidth
        sx={{
          ...BUTTON_STYLES,
          color: "grey.50",
          borderColor: "primary.main",
          backgroundColor: "primary.main",
          ":hover": {
            backgroundColor: "primary.main",
          },
        }}
        disableElevation
        loading={getOnboardingAddKycStatus?.isLoading}
        onClick={kycVerificationHandler}
      >
        Accept
      </LoadingButton>
    </Box>
  );
}
