import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useGetAllPropertiesQuery } from "@/services/web-app/properties";
import { DATE_FORMATS, PROPERTIES_STATUSES } from "@/constants";
import { SkeletonCard } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import NoData from "@/components/no-data";
import Image from "next/image";
import { BUTTON_STYLES } from "@/styles";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";
import dayjs from "dayjs";

export default function Available() {
  const { data, isLoading, isFetching, isError } = useGetAllPropertiesQuery(
    { status: PROPERTIES_STATUSES.AVAILABLE },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading || isFetching)
    return <SkeletonCard gridSize={{ sm: 6, md: 4 }} length={6} />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2.4}>
      {!!!data?.data?.length ? (
        <Grid item xs={12}>
          <NoData message={"No Properties Found"} />
        </Grid>
      ) : (
        data?.data?.map((property: any) => (
          <Grid item xs={12} sm={6} lg={4} key={property._id}>
            <Box
              borderRadius={6}
              bgcolor={"opacity.bg"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
              height={"100%"}
              justifyContent={"space-between"}
              border={1}
              borderColor={"primary.main"}
              position={"relative"}
            >
              <Image
                src={property.thumbnail}
                alt={property.title}
                width={391}
                height={312}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />

              <Box p={1.6} display={"flex"} flexDirection={"column"} gap={1}>
                <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
                  {[
                    {
                      icon: <PropertiesBedIcon />,
                      label: property.numberOfBed ?? 0,
                    },
                    {
                      icon: <PropertiesStatusIcon />,
                      label: property.type ?? "---",
                    },
                    {
                      icon: <PropertiesLocationIcon />,
                      label: property.location ?? "---",
                    },
                  ].map(({ icon, label }, index) => (
                    <Box
                      key={index}
                      display={"flex"}
                      alignItems={"center"}
                      gap={0.5}
                      pr={1.2}
                      pl={0.6}
                      borderRight={index < 2 ? 1 : 0}
                      borderColor={"text.stroke"}
                    >
                      {icon}
                      <Typography variant={"caption"}>{label}</Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant={"h7"}
                  fontWeight={700}
                  color={"common.bgDark"}
                >
                  {property.title}
                </Typography>
                {property.description && (
                  <Typography variant={"body3"} fontWeight={500}>
                    {property.description}
                  </Typography>
                )}

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1.2}
                >
                  <Typography
                    variant={"body2"}
                    fontWeight={600}
                    color={"primary.main"}
                  >
                    $
                    {property.price
                      ? new Intl.NumberFormat("en-US").format(property.price)
                      : "-"}{" "}
                    USD
                  </Typography>
                  <Typography variant={"body2"} fontWeight={600}>
                    {property.investors?.length} Investors
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"primary.5"}
                  borderRadius={2}
                  p={1.2}
                  gap={1.2}
                >
                  {[
                    {
                      label: "Annual ROI Estimate",
                      value: `${property.minAnnualROI}-${property.maxAnnualROI}%`,
                    },
                    {
                      label: "Completion Date",
                      value: dayjs(property.completionDate).format(
                        DATE_FORMATS.UI
                      ),
                    },
                    {
                      label: "Investment From",
                      value: `$${property.investmentForm} USD`,
                    },
                  ].map(({ label, value }) => (
                    <Box
                      key={label}
                      display="flex"
                      justifyContent="space-between"
                      gap={1}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        {label}
                      </Typography>
                      <Typography variant="body2" fontWeight={700}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <LinearProgress
                  variant={"determinate"}
                  value={98}
                  color={"primary"}
                  sx={{
                    borderRadius: 1.5,
                    height: 6,
                    backgroundColor: "primary.5",
                    "& .MuiLinearProgress-bar1Determinate": {
                      borderRadius: "inherit",
                    },
                  }}
                />

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  color={"primary.main"}
                  gap={1}
                >
                  <Typography variant={"body2"} fontWeight={500}>
                    {property.progress ?? 0}%
                  </Typography>
                  <Typography variant={"body2"} fontWeight={500}>
                    {property.sharesLeft ?? 0} Shares Left
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
                    ":hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  disableElevation
                  // onClick={property.buttonClick}
                >
                  Get More Details
                </Button>
              </Box>
            </Box>
          </Grid>
        ))
      )}
    </Grid>
  );
}
