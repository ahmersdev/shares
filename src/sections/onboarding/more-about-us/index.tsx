"use client";

import InvestingPlaning from "./investing-planing";
import { Box, Typography, Grid, Button } from "@mui/material";
import { pxToRem } from "@/utils/get-font-value";
import { BackCircleIcon } from "@/assets/icons";
import { FormProvider } from "@/components/react-hook-form";
import { IFormArrayItem } from "@/interfaces";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import Link from "next/link";
import { WEB_APP } from "@/constants/routes";
import useMoreAboutUs from "./use-more-about-us";

export default function MoreAboutUs() {
  const {
    theme,
    sliderValue,
    setSliderValue,
    handleNextStep,
    stepState,
    setStepState,
    moreAboutUsDataArray,
    methods,
    handleSubmit,
    onSubmit,
    postOnboardingAddKycStatus,
  } = useMoreAboutUs();

  return (
    <>
      {stepState === 1 && (
        <InvestingPlaning
          handleNextStep={handleNextStep}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      )}

      {stepState === 2 && (
        <>
          <Box position={"relative"}>
            <Box
              display={"flex"}
              alignItems={"baseline"}
              maxHeight={pxToRem(135)}
              position={"absolute"}
              p={"40px 60px"}
              sx={{ cursor: "pointer" }}
              onClick={() => setStepState(1)}
            >
              <BackCircleIcon />
            </Box>
          </Box>

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
              More About Us
            </Typography>

            <Typography variant={"body2"} color={"text.heading"}>
              Our regulator, DFSA, asks for this information to keep your rights
              protected.
            </Typography>

            <Box maxHeight={"50vh"} overflow={"auto"}>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3.2}>
                  {moreAboutUsDataArray.map((item: IFormArrayItem) => (
                    <Grid item xs={12} key={item.id}>
                      <item.component {...item.componentProps} size={"small"} />
                    </Grid>
                  ))}

                  <Grid item xs={12}>
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
                      type={"submit"}
                      loading={postOnboardingAddKycStatus?.isLoading}
                    >
                      Next Step
                    </LoadingButton>
                  </Grid>

                  <Grid item xs={12} textAlign={"center"}>
                    <Link href={WEB_APP.PROPERTIES}>
                      <Button
                        variant={"text"}
                        size={"small"}
                        color={"primary"}
                        disableElevation
                      >
                        Do this Later
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </FormProvider>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
