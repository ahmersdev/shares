"use client";

import { useState } from "react";
import InvestingPlaning from "./investing-planing";
import { Box, Theme, Typography, useTheme, Grid } from "@mui/material";
import { pxToRem } from "@/utils/get-font-value";
import { BackCircleIcon } from "@/assets/icons";
import { FormProvider } from "@/components/react-hook-form";
import { useForm } from "react-hook-form";
import RHFAutocomplete from "@/components/react-hook-form/rhf-autocomplete";
import { getMoreAboutUsDataArray } from "./more-about-us.data";

export default function MoreAboutUs() {
  const theme = useTheme<Theme>();

  const [stepState, setStepState] = useState(1);
  const [sliderValue, setSliderValue] = useState<number>(500);

  const handleNextStep = () => setStepState(2);

  const methods = useForm({});
  const moreAboutUsDataArray = getMoreAboutUsDataArray();

  return (
    <>
      {stepState === 2 && (
        <InvestingPlaning
          handleNextStep={handleNextStep}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      )}

      {stepState === 1 && (
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
            alignItems={"center"}
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

            <FormProvider methods={methods}>
              <Grid container spacing={3.2}>
                {moreAboutUsDataArray.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <item.component {...item.componentProps} size={"small"} />
                  </Grid>
                ))}
              </Grid>
            </FormProvider>
          </Box>
        </>
      )}
    </>
  );
}
