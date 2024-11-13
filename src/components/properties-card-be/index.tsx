import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import { DATE_FORMATS } from "@/constants";
import Image from "next/image";
import { BUTTON_STYLES } from "@/styles";
import {
  PropertiesBedIcon,
  PropertiesNumberIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";
import dayjs from "dayjs";
import { IPropertiesBeDataArray } from "./properties-card-be.interface";
import Link from "next/link";
import { WEB_APP } from "@/constants/routes";

export default function PropertiesCardBe(props: IPropertiesBeDataArray) {
  const { property, soldOut = false } = props;

  return (
    <Box
      borderRadius={6}
      bgcolor={"opacity.bg"}
      overflow={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"space-between"}
      border={1}
      borderColor={"primary.50"}
      position={"relative"}
    >
      {soldOut && (
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
        src={property.thumbnail}
        alt={property.title}
        width={391}
        height={312}
        style={{
          objectFit: "cover",
        }}
      />

      <Box p={1.6} display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
          {[
            {
              icon: <PropertiesBedIcon />,
              label: `${property.numberOfBed ?? 0} Bedrooms`,
            },
            {
              icon: <PropertiesStatusIcon />,
              label: property.type ?? "---",
            },
            {
              icon: <PropertiesNumberIcon />,
              label: `#${property.propertyNumber ?? "---"}`,
            },
          ].map(({ icon, label }, index) => (
            <Box
              key={index}
              display={"flex"}
              alignItems={"center"}
              gap={0.5}
              pr={1.2}
              pl={index === 0 ? 0 : 0.6}
              borderRight={index < 2 ? 1 : 0}
              borderColor={"text.stroke"}
            >
              {icon}
              <Typography variant={"caption"} textTransform={"capitalize"}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography variant={"h7"} fontWeight={700} color={"common.bgDark"}>
          {property.title}
        </Typography>
        {property.description && (
          <Typography variant={"body3"} fontWeight={500}>
            {property.description?.slice(0, 45)}...
          </Typography>
        )}

        <Divider sx={{ borderColor: "primary.5" }} />

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={1.2}
        >
          <Typography variant={"body2"} fontWeight={600} color={"primary.main"}>
            $
            {property.price
              ? new Intl.NumberFormat("en-US").format(property.price)
              : "-"}{" "}
            USD
          </Typography>
          <Typography variant={"body2"} fontWeight={600}>
            {property.investorsCount ?? "0"} Investors
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
          {[
            {
              label: "Annual ROI Estimate",
              value: `${property.minAnnualROI}-${property.maxAnnualROI}%`,
            },
            {
              label: "Completion Date",
              value: dayjs(property.completionDate).format(DATE_FORMATS.UI),
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
          value={property.progress ? property.progress : 0}
          sx={{
            borderRadius: 1.5,
            height: 6,
            backgroundColor: "primary.5",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "primary.50",
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
            {property.progress ? property.progress.toFixed(2) : "0"}%
          </Typography>
          <Typography variant={"body2"} fontWeight={500}>
            {property.remainingShares ?? "0"} Shares Left
          </Typography>
        </Box>

        {!soldOut && (
          <Link
            href={{
              pathname: WEB_APP.PROPERTIES_DETAILS,
              query: { propertyId: property._id },
            }}
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
        )}
      </Box>
    </Box>
  );
}
