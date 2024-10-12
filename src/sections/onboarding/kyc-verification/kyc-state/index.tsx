import { AddKycImg } from "@/assets/images";
import { WEB_APP } from "@/constants/routes";
import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IKycStateProps } from "./kyc-state.interface";
import { LoadingButton } from "@mui/lab";
import useKycState from "./use-kyc-state";

export default function KycState(props: IKycStateProps) {
  const { theme, isLoading, handleStartVerification } = useKycState(props);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={2}
      maxWidth={theme.breakpoints.values.sm - 150}
      width={"100%"}
      margin={"auto"}
      maxHeight={"calc(100vh - 140px)"}
      height={"100%"}
    >
      <Box
        maxHeight={"80vh"}
        overflow={"auto"}
        display={"flex"}
        flexDirection={"column"}
        gap={3.2}
      >
        <Typography variant={"h3"} color={"text.heading"}>
          Upload your passport
        </Typography>
        <Typography variant={"body2"} color={"text.body"}>
          Financial regulations require us to verify your identity before you
          can invest. <br />
          <br />
          This helps protect your investment and allows us to register you as
          the legal owner of each property you invest in.
        </Typography>
        <Image
          src={AddKycImg}
          alt={"Add KYC"}
          width={370}
          height={340}
          layout="responsive"
        />

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
          onClick={handleStartVerification}
          disableElevation
          loading={isLoading}
        >
          Start Verification
        </LoadingButton>

        <Link href={WEB_APP.PROPERTIES} style={{ textAlign: "center" }}>
          <Button
            variant={"text"}
            size={"small"}
            color={"primary"}
            disableElevation
          >
            Do this Later
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
