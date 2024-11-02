"use client";

import { WEB_APP } from "@/constants/routes";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { BookmarksIcon, NextIcon } from "@/assets/icons";
import { useGetSinglePropertyQuery } from "@/services/web-app/properties";
import { useSearchParams } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonDetails } from "@/components/skeletons";

export default function PropertiesDetails() {
  const theme = useTheme<Theme>();

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");

  const { data, isLoading, isFetching, isError } = useGetSinglePropertyQuery(
    propertyId,
    { refetchOnMountOrArgChange: true, skip: !!!propertyId }
  );

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
          <NextIcon fill={theme.palette.common.bgDark} /> {data?.data?.title},{" "}
          {data?.data?.location}
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
    </Box>
  );
}
