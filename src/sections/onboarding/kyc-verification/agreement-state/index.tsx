import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { Box, Theme, Typography, useTheme } from "@mui/material";

export default function AgreementState() {
  const theme = useTheme<Theme>();

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
      ></Box>

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
      >
        Accept
      </LoadingButton>
    </Box>
  );
}
