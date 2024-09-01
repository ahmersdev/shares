import { Box, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { investorsData, topInvestorsData } from "./investors.data";
import { IInvestors } from "./investors.interface";

export default function Investors() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} justifyContent={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.sm + 100}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
      >
        <Typography variant={"h4"} color={"text.heading"}>
          Our Investors
        </Typography>

        <Box
          display={"flex"}
          gap={1.6}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {topInvestorsData.map((investor: IInvestors) => (
            <Box
              border={1}
              borderColor={"primary.main"}
              p={"12px 20px"}
              borderRadius={3}
              bgcolor={"opacity.bg"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              key={investor.id}
            >
              <Image
                src={investor.icon}
                alt={investor.alt}
                width={162}
                height={41}
              />
            </Box>
          ))}
        </Box>

        <Typography variant={"h4"} color={"primary.main"}>
          Our Angels & Advisors Come From
        </Typography>

        <Box
          display={"flex"}
          gap={1.6}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {investorsData.map((investor: IInvestors) => (
            <Box
              border={1}
              borderColor={"primary.main"}
              p={"12px 20px"}
              borderRadius={3}
              bgcolor={"opacity.bg"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              key={investor.id}
            >
              <Image
                src={investor.icon}
                alt={investor.alt}
                width={95}
                height={40}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
