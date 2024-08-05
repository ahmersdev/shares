import { Box, Typography } from "@mui/material";
import { countsDataArray } from "./counts.data";
import { ICountData } from "./counts.interface";

export default function Counts() {
  return (
    <Box display={"flex"} justifyContent={"center"} px={2} mt={-9.5}>
      <Box
        bgcolor={"grey.50"}
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={{ xs: 4, md: 2 }}
        borderRadius={{ xs: 4, md: 8 }}
        px={{ xs: 2, md: 9 }}
        py={5}
      >
        {countsDataArray.map((item: ICountData) => (
          <Box display={"flex"} gap={2} key={item.id}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              width={60}
              height={60}
            >
              <item.icon style={{ width: "100%", height: "100%" }} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant={"h3"} color={"primary.main"}>
                {item.title}
              </Typography>
              <Typography variant={"body1"} fontWeight={500}>
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
