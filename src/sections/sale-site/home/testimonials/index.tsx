import { Box, Grid, Rating, Theme, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
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
            <Box
              sx={{
                width: "100%",
                height: { xs: "100%", md: "400px" },
                borderRadius: 2,
              }}
            >
              <iframe
                src="https://drive.google.com/file/d/1iAt6fa_u4axOOWtkDrj8fzKx1XUD1k9K/preview"
                allowFullScreen
                allow="autoplay"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  borderRadius: "inherit",
                }}
                title="Testimonial Video"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Typography variant={"body1"}>
                I discovered Coco Development during a family trip to Bali.
                Their professionalism and reliability stood out, and I felt
                confident in their projects. The security and peace of mind in
                Bali, combined with Coco&rsquo;s commitment to delivering
                results, made investing an easy decision. I&rsquo;m happy to see
                the projects evolve and look forward to more investments!
              </Typography>
              <Typography
                variant={"body1"}
                fontWeight={600}
                color={"text.heading"}
                mt={3}
              >
                Javier Roca
              </Typography>
              <Typography variant={"body2"} color={"text.heading"}>
                Investor
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides
        loop
        slidesPerView={1}
        spaceBetween={30}
        speed={10000}
        initialSlide={2}
        autoplay={{ delay: 0 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        modules={[EffectCoverflow, Autoplay]}
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
              backgroundColor: theme.palette.primary[10],
              borderRadius: 24,
              height: "100%",
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
