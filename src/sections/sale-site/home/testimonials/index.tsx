import {
  Box,
  Grid,
  IconButton,
  Rating,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { testimonialsDataArray, testimonialSwiper } from "./testimonials.data";
import {
  ITestimonialsDataArray,
  ITestimonialSwiper,
} from "./testimonials.interface";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          spaceBetween={30}
          speed={500}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiperSuccess"
          style={{ width: "100%" }}
        >
          {testimonialSwiper.map((item: ITestimonialSwiper) => (
            <SwiperSlide key={item.id}>
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
                      src={item.video}
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
                      {item.comment}
                      <br />
                      <br />
                      {item.comment2}
                    </Typography>
                    <Typography
                      variant={"body1"}
                      fontWeight={600}
                      color={"text.heading"}
                      mt={3}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant={"body2"} color={"text.heading"}>
                      {item.type}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton className={"swiper-prev"} sx={{ bgcolor: "primary.10" }}>
            <ArrowBackIosNewIcon color={"primary"} />
          </IconButton>
          <IconButton className={"swiper-next"} sx={{ bgcolor: "primary.10" }}>
            <ArrowForwardIosIcon color={"primary"} />
          </IconButton>
        </Box>
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
