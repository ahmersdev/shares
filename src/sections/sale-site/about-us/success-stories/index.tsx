import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/assets/icons";
import { PersonTwoImg } from "@/assets/images";
import { SALE_SITE } from "@/constants/routes";
import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Grid, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { successStories } from "./success-stories.data";
import { ISuccessStory } from "./success-stories.interface";

export default function SuccessStories() {
  const theme = useTheme<Theme>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      gap={5}
    >
      <Box
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
      >
        <Typography variant={"h7"} component={"h6"} color={"primary.main"}>
          Success Stories
        </Typography>
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
          maxWidth={"md"}
          width={"100%"}
        >
          We are on a mission to democratise property investing.
        </Typography>
        <Typography variant={"h7"} component={"h6"} textAlign={"center"}>
          Through fractional property investing, we allow you to invest in
          high-yielding Indonesian rental properties from $1.
        </Typography>
        <Link href={SALE_SITE.PROPERTIES}>
          <Button
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              color: "grey.50",
              borderColor: "primary.main",
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            disableElevation
          >
            View Properties
          </Button>
        </Link>
      </Box>

      <Box maxWidth={theme.breakpoints.values.lg - 100} width={"100%"}>
        {successStories.map((story: ISuccessStory) => (
          <Grid
            container
            spacing={10}
            key={story.id}
            py={5}
            flexDirection={{
              xs: "unset",
              md: story.id % 2 !== 0 ? "row" : "row-reverse",
            }}
          >
            <Grid item xs={12} md={5}>
              <Box bgcolor={"primary.5"} borderRadius={10} overflow={"hidden"}>
                <Image
                  src={story.imageSrc}
                  alt={story.name}
                  width={362}
                  height={362}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  p={1.2}
                  color={"grey.900"}
                >
                  <Typography variant={"h5"} fontWeight={600}>
                    {story.name}
                  </Typography>
                  <Typography variant={"body2"} fontWeight={500}>
                    {story.role}
                  </Typography>

                  <Box display={"flex"} alignItems={"center"} gap={1.6}>
                    <Link href={story.socialLinks.linkedIn}>
                      <LinkedInIcon />
                    </Link>
                    <Link href={story.socialLinks.facebook}>
                      <FacebookIcon />
                    </Link>
                    <Link href={story.socialLinks.instagram}>
                      <InstagramIcon />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
              >
                <Typography
                  variant={"body2"}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {story.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
