import { Box, Chip, Theme, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import {
  PropertiesSliderOneImg,
  PropertiesSliderOnePersonImg,
  PropertiesSliderThreeImg,
  PropertiesSliderTwoImg,
} from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { FooterAppStoreButton, FooterGooglePlayButton } from "@/assets/icons";

export default function Slider() {
  const theme = useTheme<Theme>();

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleBulletClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <Box
      bgcolor={"primary.5"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={4}
      pt={16}
      pb={3.2}
      px={2}
    >
      <Box maxWidth={"md"} width={"100%"}>
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          loop
          autoplay={{ delay: 2500 }}
          slidesPerView={1}
          speed={500}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper"
          style={{ width: "100%" }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide
            style={{
              position: "relative",
              height: "300px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${PropertiesSliderOneImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: theme.palette.gradients.primary,
                zIndex: 1,
              }}
            />
            <Box
              color={"grey.50"}
              pl={{ xs: 0, sm: 6.2 }}
              py={{ xs: 2, sm: 9 }}
              zIndex={2}
              textAlign={{ xs: "center", sm: "unset" }}
              width={{ xs: "100%", sm: "unset" }}
            >
              <Typography variant={"h5"} fontWeight={800}>
                As Seen on TV
              </Typography>
              <Typography variant={"h5"} fontWeight={600}>
                Channel News Asia
              </Typography>
            </Box>

            <Box
              color={"grey.50"}
              zIndex={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={{ xs: "center", sm: "unset" }}
              height={{ xs: "unset", sm: "100%" }}
              width={{ xs: "100%", sm: "unset" }}
              position={"relative"}
              pr={{ xs: 0, sm: 20 }}
            >
              <Typography variant={"h1"} fontWeight={600}>
                THE BIG
              </Typography>
              <Typography variant={"h1"} fontWeight={800}>
                SPARK
              </Typography>
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: -50,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${PropertiesSliderOnePersonImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
                display={{ xs: "none", sm: "unset" }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide
            style={{
              position: "relative",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${PropertiesSliderTwoImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
              }}
            />
            <Box
              color={"grey.50"}
              pl={{ xs: 0, sm: "30%" }}
              zIndex={2}
              textAlign={{ xs: "center", sm: "unset" }}
              width={{ xs: "100%", sm: "unset" }}
            >
              <Chip
                label={"New Project At Shares"}
                sx={{
                  bgcolor: "grey.50",
                  color: "primary.main",
                  px: 1,
                  py: 2,
                  borderRadius: 25,
                  fontSize: pxToRem(16),
                }}
              />
              <Typography variant={"h4"} fontWeight={800} my={1.6}>
                Villa Lembah Giri
              </Typography>
              <Typography variant={"h7"}>Ubud, Bali</Typography>
            </Box>
          </SwiperSlide>

          <SwiperSlide
            style={{
              position: "relative",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${PropertiesSliderThreeImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
              }}
            />

            <Box
              color={"grey.50"}
              pl={{ xs: 0, sm: "45%" }}
              zIndex={2}
              textAlign={{ xs: "center", sm: "unset" }}
              width={{ xs: "100%", sm: "unset" }}
            >
              <Typography variant={"h5"} fontWeight={800} my={1.6}>
                Now Available On Android & IOS
              </Typography>
              <Typography variant={"body2"}>
                Download & Install the Official Shares App Now
              </Typography>

              <Box
                display={"flex"}
                gap={2.4}
                mt={1.6}
                flexWrap={"wrap"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <FooterAppStoreButton />
                <FooterGooglePlayButton />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box display="flex" gap={1}>
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                activeIndex === index ? "primary.main" : "grey.400",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
