import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";
import { IPropertiesDataArray } from "./properties-card.interface";
import {
  IDetailsPublic,
  IInteriorDetails,
  IProperty,
} from "@/interfaces/properties";

export default function PropertiesCard({
  propertiesDataArray,
}: IPropertiesDataArray) {
  return (
    <Grid container spacing={2.4}>
      {propertiesDataArray.map((property: IProperty) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
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
          >
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
              <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
                {property.interiorDetails.map(
                  (interior: IInteriorDetails, index: number) => (
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={0.5}
                      key={interior.interiorId}
                      pr={1.2}
                      pl={0.6}
                      borderRight={
                        index !== property.interiorDetails.length - 1 ? 1 : 0
                      }
                      borderColor={"text.stroke"}
                    >
                      <interior.icon />
                      <Typography variant={"caption"}>
                        {interior.info}
                      </Typography>
                    </Box>
                  )
                )}
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
                bgcolor={"primary.5"}
                borderRadius={2}
                p={1.2}
                gap={1.2}
              >
                {property.detailsPublic.map((detail: IDetailsPublic) => (
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={1}
                    key={detail.detailsId}
                  >
                    <Typography variant={"body2"} fontWeight={600}>
                      {detail.title}
                    </Typography>
                    <Typography variant={"body2"} fontWeight={700}>
                      {detail.detail}
                    </Typography>
                  </Box>
                ))}
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
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
