import { Box, Grid, Typography } from "@mui/material";
import { missionData } from "./mission.data";
import { IMissionData } from "./mission.interface";

export default function Mission() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      gap={4}
    >
      <Box maxWidth={"lg"} width={"100%"} textAlign={"center"}>
        <Typography variant={"h4"} fontWeight={700} color={"text.heading"}>
          We are on a mission to democratise
          <Typography variant={"inherit"} color={"primary.main"}>
            property investing.
          </Typography>
        </Typography>

        <Typography variant={"body2"} mt={0.6}>
          90% of the worlds millionaires made their fortunes through property,
          but it&rsquo;s highly inaccessible, illiquid, and complicated -
          that&rsquo;s where we come in!
        </Typography>
      </Box>
      <Box maxWidth={"lg"} width={"100%"}>
        <Grid container spacing={4}>
          {missionData.map((mission: IMissionData) => (
            <Grid item xs={12} md={6} key={mission.id}>
              <Box
                border={1}
                borderColor={"primary.main"}
                p={2.4}
                borderRadius={6}
                bgcolor={"opacity.bg"}
                height={"100%"}
              >
                <Typography variant={"h5"} color={"primary.main"} mb={2.4}>
                  {mission.title}
                </Typography>
                <Typography variant={"body1"}>{mission.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
