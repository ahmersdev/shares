import { PersonThreeImg } from "@/assets/images";
import { Box, Grid, Rating, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { testimonialsDataArray } from "./testimonials.data";
import { ITestimonialsDataArray } from "./testimonials.interface";

export default function Testimonials() {
  const theme = useTheme<Theme>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      pb={5}
      gap={10}
    >
      <Box
        px={2}
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
      >
        <Typography variant={"h7"} color={"primary.main"} textAlign={"center"}>
          Success Stories
        </Typography>
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
          maxWidth={"40%"}
          width={"100%"}
        >
          Hear from our global investors
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Image
              src={PersonThreeImg}
              alt={"Testimonials"}
              width={580}
              height={397}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                borderRadius: 24,
                border: "1px solid",
                borderColor: theme.palette.primary[25],
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Typography variant={"body1"}>
                I really enjoyed using the app! Being able to actually own a
                stake in a property with just a button, literally like
                you&rsquo;re shopping for a property, that&rsquo;s a really cool
                concept honestly
              </Typography>
              <Typography
                variant={"body1"}
                fontWeight={600}
                color={"text.heading"}
                mt={3}
              >
                Venus Kaassamani
              </Typography>
              <Typography variant={"body2"} color={"text.heading"}>
                Inverstor
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        speed={500}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
        style={{ width: "100%", marginBottom: 34 }}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonialsDataArray.map((item: ITestimonialsDataArray) => (
          <SwiperSlide
            key={item.id}
            style={{
              backgroundColor: theme.palette.grey[50],
              borderRadius: 24,
              height: "100%",
              border: "1px solid",
              borderColor: theme.palette.primary[50],
            }}
          >
            <Box py={1.6} px={2.4}>
              <Rating
                value={item.rating}
                readOnly
                sx={{ color: "warning.main" }}
              />

              <Typography variant={"body1"} my={2}>
                “{item.comment}”
              </Typography>
              <Typography variant={"body1"} fontWeight={600}>
                {item.name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
