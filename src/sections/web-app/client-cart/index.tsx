"use client";

import { PropertiesVillaTwoImg } from "@/assets/images";
import {
  Box,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { BUTTON_STYLES } from "@/styles";
import { DeleteTransparentIcon } from "@/assets/icons";
import { useGetAllCartItemsQuery } from "@/services/web-app/cart";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonCart } from "@/components/skeletons";

export default function ClientCart() {
  const { data, isLoading, isFetching, isError } = useGetAllCartItemsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading || isFetching) return <SkeletonCart />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {data?.data?.map((item: any) => (
          <></>
        ))}
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          p={1.2}
        >
          <Box display={"flex"} justifyContent={"space-between"} gap={1}>
            <Box display={"flex"} gap={2}>
              <Image
                src={PropertiesVillaTwoImg}
                alt={"Title"}
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
                  Title
                </Typography>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Box>
                    <Typography variant={"caption"} fontWeight={600}>
                      Monthly Rent
                    </Typography>
                    <Typography
                      variant={"subtitle2"}
                      fontWeight={600}
                      color={"text.heading"}
                    >
                      USD $8.34
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant={"caption"} fontWeight={600}>
                      Appreciation
                    </Typography>
                    <Typography
                      variant={"subtitle2"}
                      fontWeight={600}
                      color={"text.heading"}
                    >
                      USD $8.34
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box display={"flex"} alignItems={"flex-start"} gap={1}>
              <IconButton
                sx={{ border: 1, borderRadius: 1, borderColor: "text.stroke" }}
                size={"small"}
                color={"primary"}
              >
                <RemoveRoundedIcon />
              </IconButton>
              <Typography
                variant={"subtitle2"}
                fontWeight={600}
                color={"text.heading"}
                sx={{
                  border: 1,
                  borderRadius: 1,
                  borderColor: "text.stroke",
                  p: 1,
                }}
              >
                USD $2,000
              </Typography>
              <IconButton
                sx={{ border: 1, borderRadius: 1, borderColor: "text.stroke" }}
                size={"small"}
                color={"primary"}
              >
                <AddRoundedIcon />
              </IconButton>
            </Box>
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
                value={76}
                sx={{
                  borderRadius: 1.5,
                  height: 6,
                  backgroundColor: "text.disabled",
                  "& .MuiLinearProgress-bar1Determinate": {
                    borderRadius: "inherit",
                  },
                }}
              />
              <Typography variant={"caption"}>76% Funded</Typography>
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
              USD $2,000
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
