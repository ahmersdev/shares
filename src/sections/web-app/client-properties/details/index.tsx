"use client";

import { WEB_APP } from "@/constants/routes";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import Link from "next/link";
import { BookmarksIcon, NextIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonDetails } from "@/components/skeletons";
import usePropertiesDetails from "./use-details";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { pxToRem } from "@/utils/get-font-value";

export default function PropertiesDetails() {
  const {
    theme,
    dataToDisplay,
    isLoading,
    isFetching,
    isError,
    handleImageClick,
    open,
    setOpen,
    selectedImageIndex,
    setSelectedImageIndex,
  } = usePropertiesDetails();

  if (isLoading || isFetching)
    return (
      <Box mt={{ xs: -1, md: -2.4 }}>
        <SkeletonDetails />
      </Box>
    );

  if (isError) return <ApiErrorState />;

  return (
    <Box mt={{ xs: -1, md: -2.4 }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
        flexWrap={"wrap"}
        mb={1.6}
      >
        <Typography
          component={"p"}
          variant={"body1"}
          color={"text.bodyLight"}
          fontWeight={600}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          textTransform={"capitalize"}
        >
          <Link href={WEB_APP.PROPERTIES}>
            <Typography
              component={"span"}
              variant={"body1"}
              color={"text.body"}
              fontWeight={600}
            >
              Properties
            </Typography>
          </Link>
          <NextIcon fill={theme.palette.common.bgDark} /> {dataToDisplay?.title}
          , {dataToDisplay?.location}
        </Typography>

        <LoadingButton
          variant={"outlined"}
          size={"small"}
          startIcon={<BookmarksIcon fill={theme.palette.text.heading} />}
          sx={{
            ...BUTTON_STYLES,
            color: "text.heading",
            borderColor: "text.stroke",
            ":hover": {
              borderColor: "text.stroke",
            },
          }}
          disableElevation
        >
          Bookmark
        </LoadingButton>
      </Box>

      {dataToDisplay.images && (
        <ImageList variant="masonry" cols={3} gap={8}>
          {dataToDisplay.images.map((photo: string, index: number) => (
            <ImageListItem
              key={photo}
              onClick={(e) => handleImageClick(e, index)}
            >
              <img
                src={photo}
                alt={`Property Image ${index + 1}`}
                loading="lazy"
                style={{
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "100%",
                  height: index === 0 ? pxToRem(302) : pxToRem(148),
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}

      {open && (
        <Lightbox
          mainSrc={dataToDisplay.images[selectedImageIndex]}
          nextSrc={
            dataToDisplay.images[
              (selectedImageIndex + 1) % dataToDisplay.images.length
            ]
          }
          prevSrc={
            dataToDisplay.images[
              (selectedImageIndex + dataToDisplay.images.length - 1) %
                dataToDisplay.images.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + dataToDisplay.images.length - 1) %
                dataToDisplay.images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + 1) % dataToDisplay.images.length
            )
          }
        />
      )}
    </Box>
  );
}
