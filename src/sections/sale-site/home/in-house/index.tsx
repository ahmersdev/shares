import { Box, Typography } from "@mui/material";
import { InHoseDataArray } from "./in-house.data";
import { IInHouseDataArray } from "./in-house.interface";

export default function InHouse() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      px={2}
      py={5}
      bgcolor={"opacity.bg"}
    >
      <Box
        maxWidth={"md"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
        >
          In-House Development & Management
        </Typography>
        <Typography variant={"h7"} textAlign={"center"} component={"p"}>
          We handle everything in-house, from developing prime real estate to
          managing the entire process, ensuring maximum value for your
          investment.
        </Typography>

        {InHoseDataArray.map((item: IInHouseDataArray) => (
          <Box
            borderRadius={6}
            px={2.4}
            py={3}
            maxWidth={"sm"}
            width={"100%"}
            key={item.id}
            bgcolor={item.bgcolor}
          >
            <Typography
              variant={"body2"}
              fontWeight={600}
              color={"primary.main"}
            >
              Step {item.id}
            </Typography>
            <Typography variant={"h4"} color={"text.heading"} mt={1} mb={3}>
              {item.title}
            </Typography>
            <Typography variant={"body1"}>{item.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
