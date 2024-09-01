import { PersonFourImg } from "@/assets/images";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function StoriesSingle() {
  return (
    <Box display={"flex"} justifyContent={"center"} py={5} px={2}>
      <Box maxWidth={"lg"} width={"100%"}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={5}>
            <Box
              maxWidth={{ xs: "100%", md: "80%" }}
              width={"100%"}
              borderRadius={10}
              overflow={"hidden"}
            >
              <Image
                src={PersonFourImg}
                alt={"Brian Ma."}
                width={280}
                height={280}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              height={"100%"}
              justifyContent={"center"}
            >
              <Typography variant={"body2"} mb={1}>
                “Rasmus possess a profound understanding of the Indonesian
                property market. Looking forward to working with them to
                democratise property investing for young adults across Southeast
                Asia.”
              </Typography>

              <Typography
                variant={"body1"}
                fontWeight={700}
                color={"primary.main"}
              >
                Brian Ma.
              </Typography>
              <Typography variant={"caption"}>
                General partner at Iterative and co-founder at Divvy Homes
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
