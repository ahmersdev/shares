import { Box, Chip, Theme, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import {
  PropertiesSliderOneImg,
  PropertiesSliderOnePersonImg,
  PropertiesSliderThreeMobileImg,
  PropertiesSliderTwoMobileImg,
} from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { FooterAppStoreButton, FooterGooglePlayButton } from "@/assets/icons";
import Image from "next/image";

export default function MobileSlider() {
  const theme = useTheme<Theme>();

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const swiperMobileRef = useRef<SwiperClass | null>(null);

  const handleMobileBulletClick = (index: number) => {
    setActiveMobileIndex(index);
    swiperMobileRef.current?.slideToLoop(index);
  };

  return (
    <Box
      bgcolor={"opacity.bg"}
      display={{ xs: "flex", sm: "none" }}
      flexDirection={"column"}
      alignItems={"center"}
      gap={4}
      pt={16}
      pb={3.2}
      px={2}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        loop
        autoplay={{ delay: 2500 }}
        slidesPerView={1}
        speed={500}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        onSlideChange={(swiper) => setActiveMobileIndex(swiper.realIndex)}
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
          swiperMobileRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Box
            position={"relative"}
            display={"flex"}
            borderRadius={6}
            overflow={"hidden"}
            pt={7}
            height={"80vh"}
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
              color={"grey.900"}
              zIndex={2}
              textAlign={"center"}
              width={"100%"}
            >
              <Typography variant={"h5"} fontWeight={800}>
                As Seen on TV
              </Typography>
              <Typography variant={"h5"} fontWeight={600}>
                Channel News Asia
              </Typography>

              <Typography variant={"h1"} fontWeight={600} mt={2}>
                THE BIG
              </Typography>
              <Typography variant={"h1"} fontWeight={800}>
                SPARK
              </Typography>

              <Image
                src={PropertiesSliderOnePersonImg}
                alt={"Person"}
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            position={"relative"}
            display={"flex"}
            borderRadius={6}
            overflow={"hidden"}
            pt={7}
            bgcolor={"primary.5"}
            height={"80vh"}
          >
            <Box
              color={"grey.900"}
              zIndex={2}
              textAlign={"center"}
              width={"100%"}
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
              <Typography variant={"h7"} component={"p"} mb={2}>
                Ubud, Bali
              </Typography>

              <Image
                src={PropertiesSliderTwoMobileImg}
                alt={"Person"}
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            position={"relative"}
            display={"flex"}
            borderRadius={6}
            overflow={"hidden"}
            pt={7}
            bgcolor={"primary.5"}
            height={"80vh"}
          >
            <Box
              color={"grey.900"}
              zIndex={2}
              textAlign={"center"}
              width={"100%"}
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
                justifyContent={"center"}
              >
                <FooterAppStoreButton />
                <FooterGooglePlayButton />
              </Box>

              <Image
                src={PropertiesSliderThreeMobileImg}
                alt={"Person"}
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "top center",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box display="flex" gap={1}>
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                activeMobileIndex === index ? "primary.main" : "grey.400",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => handleMobileBulletClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
