"use client";

import { Box, Button, Typography } from "@mui/material";
import { getAccountInformationData } from "./account-information.data";
import { useGetAccountSettingsDetailsQuery } from "@/services/web-app/settings";
import { SkeletonForm } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";

export default function AccountInformation() {
  const { data, isLoading, isFetching, isError } =
    useGetAccountSettingsDetailsQuery(null, {
      refetchOnMountOrArgChange: true,
    });

  const accountInformationData = getAccountInformationData(data?.data);

  return (
    <Box maxWidth={"sm"} width={"100%"} textAlign={"center"}>
      <Box
        bgcolor={"grey.50"}
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        px={3.2}
        py={2.4}
      >
        {isLoading || isFetching ? (
          <SkeletonForm length={2} />
        ) : isError ? (
          <ApiErrorState height={"20vh"} />
        ) : (
          <>
            {Object?.entries(accountInformationData)?.map(
              ([key, value], index) => (
                <Box
                  key={key}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mb={
                    index === Object.entries(accountInformationData).length - 1
                      ? 0
                      : 2.4
                  }
                >
                  <Typography variant={"body3"}>{key}</Typography>
                  <Typography
                    variant={"body3"}
                    fontWeight={700}
                    color={"text.heading"}
                  >
                    {value}
                  </Typography>
                </Box>
              )
            )}
          </>
        )}
      </Box>

      <Button
        variant={"text"}
        size={"small"}
        color={"error"}
        sx={{ mt: 1 }}
        disableElevation
        disabled={isLoading || isFetching || isError}
      >
        Delete Account
      </Button>
    </Box>
  );
}
