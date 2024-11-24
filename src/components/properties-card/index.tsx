import { BUTTON_STYLES } from "@/styles";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { IDetailsPublic, IInteriorDetails } from "@/interfaces/properties";
import { IPropertiesDataArray } from "./properties-card.interface";

export default function PropertiesCard(props: IPropertiesDataArray) {
  const { property, bgcolor = "opacity.bg" } = props;

  return (
    <Box
      borderRadius={6}
      bgcolor={bgcolor}
      overflow={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"space-between"}
      border={1}
      borderColor={"text.body"}
      position={"relative"}
    >
      {property.soldOutBadge && (
        <Typography
          variant={"body1"}
          fontWeight={700}
          textAlign={"center"}
          bgcolor={"primary.main"}
          color={"common.white"}
          p={1}
        >
          Sold
        </Typography>
      )}
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
                <Typography variant={"caption"}>{interior.info}</Typography>
              </Box>
            )
          )}
        </Box>

        <Typography variant={"h7"} fontWeight={700} color={"common.bgDark"}>
          {property.title}
        </Typography>
        <Typography variant={"body3"} fontWeight={500}>
          {property.description}
        </Typography>

        <Divider sx={{ borderColor: "primary.5" }} />

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={1.2}
        >
          <Typography variant={"body2"} fontWeight={600} color={"primary.main"}>
            {property.price}
          </Typography>
          <Typography variant={"body2"} fontWeight={600}>
            {property.investors} Investors
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"primary.10"}
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
          sx={{
            borderRadius: 1.5,
            height: 6,
            backgroundColor: "text.stroke",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "primary.10",
            },
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

        {property.buttonRender && (
          <Button
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              color: "primary.main",
              borderColor: "primary.10",
              backgroundColor: "primary.10",
              width: "100%",
              ":hover": {
                backgroundColor: "primary.10",
              },
            }}
            disableElevation
            onClick={property.buttonClick}
          >
            Get More Details
          </Button>
        )}
      </Box>
    </Box>
  );
}
