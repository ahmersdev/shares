import {
  PropertiesBedIcon,
  PropertiesNumberIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";
import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import { IPropertiesDataArray } from "./properties-card.interface";
import { IProperty } from "@/interfaces";
import Link from "next/link";
import { SALE_SITE } from "@/constants/routes";

export default function PropertiesCard({
  propertiesDataArray,
}: IPropertiesDataArray) {
  return (
    <Grid container spacing={2.4}>
      {propertiesDataArray.map((property: IProperty) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <Box borderRadius={6} bgcolor={"common.bgLight"} overflow={"hidden"}>
            <Image
              src={property.imageSrc}
              alt={property.title}
              width={391}
              height={312}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Box p={1.6} display={"flex"} flexDirection={"column"} gap={1}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={2.4}
                flexWrap={"wrap"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <PropertiesBedIcon />
                  <Typography variant={"body3"} fontWeight={500}>
                    {property.bedInfo} Bed
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <PropertiesStatusIcon />
                  <Typography variant={"body3"} fontWeight={500}>
                    {property.status}
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <PropertiesNumberIcon />
                  <Typography variant={"body3"} fontWeight={500}>
                    {property.number}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant={"h7"}
                fontWeight={700}
                color={"common.bgDark"}
              >
                {property.title}
              </Typography>
              <Typography variant={"body3"} fontWeight={500}>
                {property.description}
              </Typography>

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
                  {property.price}
                </Typography>
                <Typography variant={"body2"} fontWeight={600}>
                  {property.investors} Investors
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"text.headingLight"}
                borderRadius={2}
                p={1.2}
                gap={1.2}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"body2"} fontWeight={600}>
                    Annual ROI Estimate
                  </Typography>
                  <Typography variant={"body2"} fontWeight={700}>
                    {property.annualROI}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"body2"} fontWeight={600}>
                    Completion Date
                  </Typography>
                  <Typography variant={"body2"} fontWeight={700}>
                    {property.completionDate}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"body2"} fontWeight={600}>
                    Investment From
                  </Typography>
                  <Typography variant={"body2"} fontWeight={700}>
                    {property.investmentFrom}
                  </Typography>
                </Box>
              </Box>

              <LinearProgress
                variant={"determinate"}
                value={property.progress}
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
                  {property.progress}%
                </Typography>
                <Typography variant={"body2"} fontWeight={500}>
                  {property.sharesLeft} Shares Left
                </Typography>
              </Box>

              <Link
                href={{
                  pathname: SALE_SITE.PROPERTIES_DETAILS,
                  query: { id: property.id },
                }}
                style={{ width: "100%" }}
              >
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
                >
                  Get More Details
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
