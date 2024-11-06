"use client";

import { WEB_APP } from "@/constants/routes";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { BookmarksIcon, NextIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonDetails } from "@/components/skeletons";
import usePropertiesDetails from "./use-details";
import LightBox from "./lightbox";
import BookmarksFilledIcon from "@/assets/icons/web-app/bookmarks-filled-icon";
import DetailContent from "./detail-content";
import AddToCart from "./add-to-cart";

export default function PropertiesDetails() {
  const {
    theme,
    dataToDisplay,
    isLoading,
    isFetching,
    isError,
    bookmarkClickHandler,
    buttonLoading,
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
      <Stack spacing={1.6}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={1}
          flexWrap={"wrap"}
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
            <NextIcon fill={theme.palette.common.bgDark} />{" "}
            {dataToDisplay?.title}, {dataToDisplay?.location}
          </Typography>

          <LoadingButton
            variant={"outlined"}
            size={"small"}
            startIcon={
              dataToDisplay?.isBookmarked ? (
                <BookmarksFilledIcon fill={theme.palette.text.heading} />
              ) : (
                <BookmarksIcon fill={theme.palette.text.heading} />
              )
            }
            sx={{
              ...BUTTON_STYLES,
              color: "text.heading",
              borderColor: "text.stroke",
              ":hover": {
                borderColor: "text.stroke",
              },
            }}
            disableElevation
            onClick={bookmarkClickHandler}
            loading={buttonLoading}
          >
            Bookmark
          </LoadingButton>
        </Box>

        <LightBox dataToDisplay={dataToDisplay} />

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <DetailContent />
            </Grid>

            <Grid item xs={12} md={5}>
              <AddToCart dataToDisplay={dataToDisplay} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
