import { Box, Divider, Typography } from "@mui/material";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesNumberIcon,
  PropertiesRegulatedIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export default function DetailContent(props: any) {
  const { dataToDisplay } = props;

  return (
    <Box
      border={1}
      borderColor={"text.stroke"}
      bgcolor={"grey.50"}
      borderRadius={3}
      p={2.4}
      maxHeight={"600px"}
      height={"100%"}
      overflow={"auto"}
    >
      <Typography variant={"h5"} color={"text.heading"}>
        {dataToDisplay.title}, {dataToDisplay.location}
      </Typography>

      <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"} mt={1}>
        {[
          {
            icon: <PropertiesBedIcon />,
            label: `${dataToDisplay.numberOfBed ?? 0} Bedrooms`,
          },
          {
            icon: <PropertiesStatusIcon />,
            label: dataToDisplay.type ?? "---",
          },
          {
            icon: <PropertiesNumberIcon />,
            label: `#${dataToDisplay.propertyNumber ?? "---"}`,
          },
          {
            icon: <PropertiesLocationIcon />,
            label: dataToDisplay.location ?? "---",
          },
        ].map(({ icon, label }, index) => (
          <Box
            key={index}
            display={"flex"}
            alignItems={"center"}
            gap={0.5}
            pr={1.2}
            pl={index === 0 ? 0 : 0.6}
            borderRight={index < 3 ? 1 : 0}
            borderColor={"text.stroke"}
          >
            {icon}
            <Typography variant={"caption"} textTransform={"capitalize"}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 1, borderColor: "text.stroke" }} />

      <Box display={"flex"} gap={1}>
        <PropertiesRegulatedIcon />
      </Box>
    </Box>
  );
}
