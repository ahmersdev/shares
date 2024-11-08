"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { BUTTON_STYLES } from "@/styles";
import { DeleteTransparentIcon } from "@/assets/icons";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonCart } from "@/components/skeletons";
import { ICartItem } from "./client-cart.interface";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { pxToRem } from "@/utils/get-font-value";
import { Fragment } from "react";
import useClientCart from "./use-client-cart";

export default function ClientCart() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    methods,
    subtractFromCartItem,
    addToCartItem,
    handleBlur,
    totalAmount,
  } = useClientCart();

  if (isLoading || isFetching) return <SkeletonCart />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          p={1.2}
        >
          {data?.data?.map((item: ICartItem, index: number) => (
            <Fragment key={item._id}>
              <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                <Box display={"flex"} gap={2}>
                  <Image
                    src={item.propertyId?.thumbnail ?? ""}
                    alt={item.propertyId?.title}
                    width={106}
                    height={70}
                    style={{
                      objectFit: "contain",
                      borderRadius: 8,
                    }}
                  />
                  <Box>
                    <Typography
                      variant={"body1"}
                      fontWeight={600}
                      color={"text.heading"}
                    >
                      {item.propertyId?.title}
                    </Typography>

                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      flexWrap={"wrap"}
                      gap={1}
                    >
                      <Box>
                        <Typography variant={"caption"} fontWeight={600}>
                          Gross Rent
                        </Typography>
                        <Typography
                          variant={"subtitle2"}
                          fontWeight={600}
                          color={"text.heading"}
                        >
                          USD $
                          {item.propertyId?.grossRent
                            ? new Intl.NumberFormat("en-US").format(
                                item.propertyId.grossRent
                              )
                            : "-"}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant={"caption"} fontWeight={600}>
                          Maintenance
                        </Typography>
                        <Typography
                          variant={"subtitle2"}
                          fontWeight={600}
                          color={"text.heading"}
                        >
                          USD $
                          {item.propertyId?.maintaince
                            ? new Intl.NumberFormat("en-US").format(
                                item.propertyId.maintaince
                              )
                            : "-"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <FormProvider methods={methods}>
                  <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    justifyContent={"flex-end"}
                    gap={1}
                  >
                    <IconButton
                      sx={{
                        border: 1,
                        borderRadius: 1,
                        borderColor: "text.stroke",
                      }}
                      size={"small"}
                      color={"primary"}
                      onClick={() => subtractFromCartItem(item)}
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                    <Box width={100}>
                      <RHFTextField
                        name={`amount_${item._id}`}
                        type={"number"}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Typography variant={"subtitle2"}>USD</Typography>
                            </InputAdornment>
                          ),
                        }}
                        sxProps={{
                          mt: 0.2,
                          ".MuiInputBase-root": {
                            borderRadius: 1,
                          },
                        }}
                        style={{
                          fontSize: pxToRem(10),
                          height: 0,
                          fontWeight: 500,
                        }}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <IconButton
                      sx={{
                        border: 1,
                        borderRadius: 1,
                        borderColor: "text.stroke",
                      }}
                      size={"small"}
                      color={"primary"}
                      onClick={() => addToCartItem(item)}
                    >
                      <AddRoundedIcon />
                    </IconButton>
                  </Box>
                </FormProvider>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                gap={1}
                flexWrap={"wrap"}
                mt={5}
              >
                <Box width={{ xs: "100%", md: "50%" }}>
                  <LinearProgress
                    variant={"determinate"}
                    value={
                      item.propertyId?.progress ? item.propertyId.progress : 0
                    }
                    sx={{
                      borderRadius: 1.5,
                      height: 6,
                      backgroundColor: "text.disabled",
                      "& .MuiLinearProgress-bar1Determinate": {
                        borderRadius: "inherit",
                      },
                    }}
                  />
                  <Typography variant={"caption"}>
                    {item.propertyId?.progress
                      ? item.propertyId?.progress.toFixed(2)
                      : "0"}
                    % Funded
                  </Typography>
                </Box>

                <Button
                  variant={"outlined"}
                  size={"small"}
                  sx={{
                    ...BUTTON_STYLES,
                    color: "text.body",
                    borderColor: "text.stroke",
                    ":hover": {
                      borderColor: "text.stroke",
                    },
                  }}
                  startIcon={<DeleteTransparentIcon />}
                  disableElevation
                >
                  Remove
                </Button>
              </Box>

              {index < data?.data?.length - 1 && (
                <Divider sx={{ my: 1.2, borderColor: "text.stroke" }} />
              )}
            </Fragment>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          p={1.6}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
            flexWrap={"wrap"}
          >
            <Typography
              variant={"body1"}
              fontWeight={600}
              color={"text.heading"}
            >
              Total
            </Typography>
            <Typography
              variant={"body1"}
              fontWeight={600}
              color={"text.heading"}
            >
              USD ${new Intl.NumberFormat("en-US").format(totalAmount)}
            </Typography>
          </Box>

          <Button
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              color: "grey.50",
              borderColor: "primary.main",
              backgroundColor: "primary.main",
              width: "100%",
              mt: 2,
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            disableElevation
          >
            Checkout
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
